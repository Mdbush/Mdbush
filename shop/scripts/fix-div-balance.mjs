import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, "../app/blog");

let fixed = 0;
const slugs = fs.readdirSync(BLOG_DIR);

for (const slug of slugs) {
  const p = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(p)) continue;
  let src = fs.readFileSync(p, "utf8");
  if (!src.includes("bg-gradient-to-br from-gray-900 via-gray-800")) continue;

  const mainOpen = src.indexOf("<main ");
  const mainClose = src.lastIndexOf("</main>");
  if (mainOpen === -1 || mainClose === -1) continue;

  const inner = src.slice(mainOpen, mainClose);
  const opens = (inner.match(/<div[\s>]/g) || []).length;
  const closes = (inner.match(/<\/div>/g) || []).length;

  if (closes > opens) {
    // Remove excess closing divs working backwards from </main>
    let excess = closes - opens;
    let result = src;
    while (excess > 0) {
      const lastDiv = result.lastIndexOf("</div>", result.lastIndexOf("</main>") - 1);
      if (lastDiv === -1) break;
      result = result.slice(0, lastDiv) + result.slice(lastDiv + 6);
      excess--;
    }
    fs.writeFileSync(p, result);
    fixed++;
  }
}

console.log(`Fixed ${fixed} files with unbalanced divs.`);
