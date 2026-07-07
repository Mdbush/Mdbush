/**
 * Blog wiring helpers for the SEO content agent.
 *
 * Keeps the three sources of truth in sync when a new article is generated:
 *   - app/blog/<slug>/page.tsx     (the route — written by render-article.mjs)
 *   - lib/blog-posts.ts            (the listing index)
 *   - app/sitemap.ts               (the sitemap slug list)
 *
 * Paths are resolved relative to the shop/ root (two levels up from lib/).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const SHOP_ROOT = path.resolve(__dirname, "../../..");
const BLOG_DIR = path.join(SHOP_ROOT, "app/blog");
const POSTS_FILE = path.join(SHOP_ROOT, "lib/blog-posts.ts");
const SITEMAP_FILE = path.join(SHOP_ROOT, "app/sitemap.ts");

/** All blog slugs that already have a route on disk. */
export function existingSlugs() {
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("["))
    .map((d) => d.name)
    .sort();
}

/** Distinct categories currently used in the blog index. */
export function existingCategories() {
  const src = fs.readFileSync(POSTS_FILE, "utf8");
  const cats = new Set(
    [...src.matchAll(/category:\s*"([^"]+)"/g)].map((m) => m[1])
  );
  return [...cats].sort();
}

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/** Insert a typed entry at the top of the `posts` array in lib/blog-posts.ts. */
export function addToIndex({ slug, title, description, date, readTime, category }) {
  const src = fs.readFileSync(POSTS_FILE, "utf8");
  const marker = "export const posts: BlogPost[] = [";
  if (!src.includes(marker)) throw new Error("posts array marker not found");
  const entry = `  {
    slug: "${esc(slug)}",
    title: "${esc(title)}",
    description:
      "${esc(description)}",
    date: "${esc(date)}",
    readTime: "${esc(readTime)}",
    category: "${esc(category)}",
  },
`;
  fs.writeFileSync(POSTS_FILE, src.replace(marker, marker + "\n" + entry));
}

/** Add the slug to the blog URL list in app/sitemap.ts. */
export function addToSitemap(slug) {
  const src = fs.readFileSync(SITEMAP_FILE, "utf8");
  const marker = "const blogUrls = [";
  if (!src.includes(marker)) throw new Error("blogUrls marker not found");
  return fs.writeFileSync(
    SITEMAP_FILE,
    src.replace(marker, `${marker}\n    "${esc(slug)}",`)
  );
}

/** Write the article route file. Returns the path written. */
export function writeArticle(slug, tsx) {
  const dir = path.join(BLOG_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "page.tsx");
  fs.writeFileSync(file, tsx);
  return file;
}
