/**
 * SEO content agent — generates one new blog article and wires it into the
 * index + sitemap. Designed to run in CI (see .github/workflows/growth-seo-content.yml)
 * which opens a PR with the result for human review (the "hybrid" autonomy model:
 * blog content is low-risk but still reviewed before going live).
 *
 * Usage:
 *   node scripts/agents/seo-content.mjs           # generate one article
 *   node scripts/agents/seo-content.mjs --dry-run # print the plan, call no API
 *
 * Requires ANTHROPIC_API_KEY (except in --dry-run).
 */
import { callClaude, hasApiKey } from "./lib/anthropic.mjs";
import {
  existingSlugs,
  existingCategories,
  addToIndex,
  addToSitemap,
  writeArticle,
} from "./lib/blog.mjs";

const DRY_RUN = process.argv.includes("--dry-run");

const ARTICLE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    slug: { type: "string", description: "kebab-case, ends with -uae where relevant" },
    title: { type: "string" },
    metaTitle: { type: "string" },
    metaDescription: { type: "string" },
    category: { type: "string" },
    readTime: { type: "string", description: 'e.g. "7 min read"' },
    heroBlurb: { type: "string" },
    sections: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          heading: { type: "string" },
          paragraphs: { type: "array", items: { type: "string" } },
        },
        required: ["heading", "paragraphs"],
      },
    },
    faq: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: { q: { type: "string" }, a: { type: "string" } },
        required: ["q", "a"],
      },
    },
  },
  required: [
    "slug",
    "title",
    "metaTitle",
    "metaDescription",
    "category",
    "readTime",
    "heroBlurb",
    "sections",
    "faq",
  ],
};

const SYSTEM = `You are the content lead for SoloKit (solokit.cloud), a store selling Notion
templates, AI prompt packs, and SOPs to freelancers and solopreneurs in the UAE and the
wider GCC. You write practical, specific, no-fluff SEO articles in the SoloKit voice:
concrete numbers, AED pricing, real UAE/GCC context (free zones, VAT, Emirates NBD, DIFC,
etc.), and actionable steps. British/UAE spelling. No hype, no filler, no "in conclusion".`;

function jsx(s) {
  // Content lives in text nodes; only braces/backslashes need care for JSX.
  return String(s).replace(/\\/g, "\\\\").replace(/[{}]/g, (c) => `{"${c}"}`);
}
function attr(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, "&quot;");
}

function renderArticle(a) {
  const sections = a.sections
    .map(
      (s) => `
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            ${jsx(s.heading)}
          </h2>
${s.paragraphs
  .map(
    (p) =>
      `          <p className="text-gray-700 text-sm leading-relaxed mb-4">${jsx(p)}</p>`
  )
  .join("\n")}`
    )
    .join("\n");

  const faq = a.faq.length
    ? `
          <h2 className="text-xl font-bold text-gray-900 mt-12 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Frequently asked questions
          </h2>
${a.faq
  .map(
    (f) => `          <div className="border border-gray-200 rounded-xl p-5 mb-3">
            <p className="text-sm font-semibold text-gray-900 mb-1">${jsx(f.q)}</p>
            <p className="text-sm text-gray-500 leading-relaxed">${jsx(f.a)}</p>
          </div>`
  )
  .join("\n")}`
    : "";

  return `import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "${attr(a.metaTitle)}",
  description:
    "${attr(a.metaDescription)}",
  alternates: { canonical: "/blog/${a.slug}" },
  openGraph: {
    title: "${attr(a.title)}",
    description: "${attr(a.metaDescription)}",
    type: "article",
    url: "/blog/${a.slug}",
  },
};

export default function Article() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">${jsx(
              a.category
            )}</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">${jsx(
              a.title
            )}</h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">${jsx(
              a.heroBlurb
            )}</p>
          </div>
${sections}
${faq}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center mt-12">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run your freelance business like a business</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and SOPs built for UAE freelancers.</p>
            <Link href="/bundle" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

async function main() {
  const slugs = existingSlugs();
  const categories = existingCategories();

  if (DRY_RUN && !hasApiKey()) {
    console.log(`[dry-run] ${slugs.length} existing articles, ${categories.length} categories.`);
    console.log("[dry-run] Would ask Claude for one new article avoiding existing slugs, then wire it in.");
    return;
  }

  const user = `We already publish ${slugs.length} articles. Existing slugs (do NOT duplicate a topic already covered):
${slugs.join(", ")}

Existing categories to reuse (pick the best fit): ${categories.join(", ")}

Pick ONE high-value SEO topic a UAE/GCC freelancer would search for that is NOT already covered above, and write a complete, specific, ready-to-publish article. Return JSON only, matching the schema: 6-9 sections with 1-3 short paragraphs each, and 3-5 FAQ entries. The slug must be new and kebab-case. readTime should reflect the length.`;

  const article = await callClaude({
    system: SYSTEM,
    user,
    schema: ARTICLE_SCHEMA,
    maxTokens: 12000,
  });

  if (slugs.includes(article.slug)) {
    throw new Error(`Model proposed an existing slug: ${article.slug}`);
  }

  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (DRY_RUN) {
    console.log(`[dry-run] Would create /blog/${article.slug} — "${article.title}"`);
    return;
  }

  const file = writeArticle(article.slug, renderArticle(article));
  addToIndex({
    slug: article.slug,
    title: article.title,
    description: article.metaDescription,
    date,
    readTime: article.readTime,
    category: article.category,
  });
  addToSitemap(article.slug);

  console.log(`Created ${file}`);
  console.log(`Indexed and added to sitemap: ${article.slug}`);
  // Emit for the workflow to use in the PR title/body.
  console.log(`::ARTICLE_SLUG::${article.slug}`);
  console.log(`::ARTICLE_TITLE::${article.title}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
