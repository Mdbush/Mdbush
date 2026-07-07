/**
 * One-off maintenance script: add real Article structured data to every blog
 * article. Each article is the site's main SEO asset but emitted no JSON-LD.
 *
 * Most articles already ship an Article schema; this only fills the handful
 * that carry NONE. Injects a single <script type="application/ld+json"> (an
 * array of two nodes: BlogPosting + BreadcrumbList) right before <Header />.
 * All values come from the hand-maintained index (lib/blog-posts.ts) — nothing
 * is fabricated. Idempotent, and skips any article that already has an Article
 * or BlogPosting schema so it never creates duplicate article structured data.
 *
 * Run from shop/:  node scripts/add-article-structured-data.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SHOP = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(SHOP, "app", "blog");
const SITE = "https://solokit.cloud";

// Parse the index into slug -> { title, description, date, readTime, category }.
const idxSrc = fs.readFileSync(path.join(SHOP, "lib", "blog-posts.ts"), "utf8");
const ENTRY =
  /\{\s*slug:\s*"((?:[^"\\]|\\.)*)",\s*title:\s*"((?:[^"\\]|\\.)*)",\s*description:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*date:\s*"((?:[^"\\]|\\.)*)",\s*readTime:\s*"((?:[^"\\]|\\.)*)",\s*category:\s*"((?:[^"\\]|\\.)*)",\s*\}/g;

const meta = new Map();
for (const m of idxSrc.matchAll(ENTRY)) {
  const [, slug, title, description, date, , category] = m;
  meta.set(slug, {
    title: JSON.parse(`"${title}"`),
    description: JSON.parse(`"${description}"`),
    date,
    category: JSON.parse(`"${category}"`),
  });
}

function isoDate(s) {
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

// Escape a JSON string so it can live inside a single-quoted JS string literal.
function jsLiteral(json) {
  return "'" + json.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
}

function ldFor(slug, m) {
  const url = `${SITE}/blog/${slug}`;
  const iso = isoDate(m.date);
  const publisher = { "@type": "Organization", name: "SoloKit", url: SITE };
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: m.title,
    description: m.description,
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    author: publisher,
    publisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    articleSection: m.category,
    inLanguage: "en",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: m.title, item: url },
    ],
  };
  return JSON.stringify([blogPosting, breadcrumb]);
}

let changed = 0;
let skipped = 0;
let missing = 0;
for (const name of fs.readdirSync(BLOG_DIR)) {
  if (name.startsWith("[")) continue;
  const file = path.join(BLOG_DIR, name, "page.tsx");
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, "utf8");
  const m = meta.get(name);
  if (!m) { missing++; continue; }
  // Skip anything that already has an Article-type schema (any spacing) to
  // avoid duplicate/conflicting article structured data.
  if (/"@type":\s*"(Article|BlogPosting|NewsArticle)"/.test(src)) { skipped++; continue; }
  const anchor = /^(\s*)<Header \/>/m;
  if (!anchor.test(src)) { skipped++; continue; }
  const ld = ldFor(name, m);
  const out = src.replace(anchor, (_full, ind) =>
    `${ind}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${jsLiteral(ld)} }} />\n${ind}<Header />`
  );
  fs.writeFileSync(file, out);
  changed++;
}
console.log(`Added structured data to ${changed} articles, skipped ${skipped}, no index meta ${missing}.`);
