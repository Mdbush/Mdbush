/**
 * Product ideation agent — proposes new digital products (Notion templates, prompt
 * packs, SOPs) that fit SoloKit's catalogue and the UAE/GCC freelance market, and
 * writes a brief for each to scripts/agents/out/product-ideas-<date>.md.
 *
 * New products change pricing and what customers pay for, so under the hybrid
 * autonomy model this is ALWAYS review-gated (brief for a human, never auto-published).
 *
 *   node scripts/agents/product-ideas.mjs [--count=3] [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { callClaude, hasApiKey } from "./lib/anthropic.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "out");
const SHOP_ROOT = path.resolve(__dirname, "../..");
const DRY_RUN = process.argv.includes("--dry-run");
const countArg = process.argv.find((a) => a.startsWith("--count="));
const COUNT = countArg ? Math.max(1, parseInt(countArg.split("=")[1], 10) || 3) : 3;

function currentCatalogue() {
  try {
    const src = fs.readFileSync(path.join(SHOP_ROOT, "lib/products.ts"), "utf8");
    return [...src.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]).join(", ");
  } catch {
    return "(catalogue unavailable)";
  }
}

const SYSTEM = `You are head of product for SoloKit (solokit.cloud), selling digital products to
UAE/GCC freelancers. Propose products that are (a) genuinely useful, (b) fast to produce as
a Notion template / prompt pack / SOP set, and (c) not redundant with the current catalogue.`;

async function main() {
  const catalogue = currentCatalogue();

  if (DRY_RUN && !hasApiKey()) {
    console.log(`[dry-run] Current catalogue: ${catalogue}`);
    console.log(`[dry-run] Would propose ${COUNT} new product briefs.`);
    return;
  }

  const brief = await callClaude({
    system: SYSTEM,
    user: `Current catalogue: ${catalogue}.

Propose ${COUNT} new product ideas that do not overlap those. For each, write a short markdown brief:
### <Product name>
- **What it is** (one line)
- **Who it's for**
- **Why it sells in the UAE/GCC** (specific)
- **Suggested price (AED)**
- **What's inside** (5-8 bullet deliverables)
- **Effort to build** (low/medium/high)

Rank by expected demand. Be specific, no filler.`,
    maxTokens: 6000,
  });

  if (DRY_RUN) {
    console.log(brief.slice(0, 400));
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const file = path.join(OUT_DIR, `product-ideas-${stamp}.md`);
  fs.writeFileSync(file, `# Product ideas — ${stamp}\n\n${brief}\n`);
  console.log(`Wrote ${file}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
