/**
 * One-off maintenance script: upgrade every blog article's hero to the premium
 * treatment used site-wide (deeper gray-950→gray-800 gradient, ambient glow
 * blobs, dotted grid) via an isolate + negative-z layering — no content
 * wrapping, no entrance animation, so hero text still paints on first load.
 *
 * All 401 articles share the identical hero opening tag, and it's distinct from
 * the bottom CTA (`from-gray-900 to-gray-800`), so this is a safe single-match
 * replace per file. Idempotent: files already upgraded are skipped.
 *
 * Run from shop/:  node scripts/polish-article-heroes.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, "..", "app", "blog");

const OLD = /^([ \t]*)<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">/m;

function upgrade(src) {
  if (!OLD.test(src)) return null; // no hero match / already upgraded
  return src.replace(OLD, (_m, ind) => {
    const c = ind + "  ";
    return (
      `${ind}<div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">\n` +
      `${c}<div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />\n` +
      `${c}<div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />\n` +
      `${c}<div className="absolute inset-0 -z-10 bg-dot-grid" />`
    );
  });
}

let changed = 0;
let skipped = 0;
for (const name of fs.readdirSync(BLOG_DIR)) {
  if (name.startsWith("[")) continue; // dynamic [slug] dir
  const file = path.join(BLOG_DIR, name, "page.tsx");
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, "utf8");
  const out = upgrade(src);
  if (out && out !== src) {
    fs.writeFileSync(file, out);
    changed++;
  } else {
    skipped++;
  }
}
console.log(`Upgraded ${changed} article heroes, skipped ${skipped}.`);
