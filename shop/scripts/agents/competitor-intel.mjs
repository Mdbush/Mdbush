/**
 * Competitor intelligence agent — produces a recurring markdown digest of what
 * competitors and the UAE/GCC freelance-tools market are doing, with recommended
 * actions for SoloKit. Writes to scripts/agents/out/competitor-intel-<date>.md,
 * which the workflow attaches to a PR/issue for review.
 *
 * Web search is used when the model/tool supports it; without it, the agent
 * still produces a strategy digest from the provided competitor list.
 *
 *   node scripts/agents/competitor-intel.mjs [--no-search] [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { callClaude, hasApiKey } from "./lib/anthropic.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "out");
const DRY_RUN = process.argv.includes("--dry-run");
const USE_SEARCH = !process.argv.includes("--no-search");

// Seed competitor set — edit to match who you actually watch.
const COMPETITORS = (process.env.COMPETITORS ||
  "Notion template marketplaces for freelancers, Gumroad UAE freelance kits, generic 'freelance CRM' Notion sellers, AI prompt pack sellers")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const SYSTEM = `You are a competitive-strategy analyst for SoloKit (solokit.cloud), which sells
Notion templates, AI prompt packs, and SOPs to UAE/GCC freelancers. Be concrete and
sceptical. Prefer specific observations (pricing, positioning, gaps) over generic advice.`;

async function main() {
  const user = `Produce this week's competitor & market digest for SoloKit. Competitors / segments to consider:
${COMPETITORS.map((c) => `- ${c}`).join("\n")}

Write a tight markdown digest with these sections:
## Market signals
## Competitor moves (pricing, new products, positioning)
## Gaps SoloKit can exploit
## Recommended actions this week (ranked, each with a one-line rationale)

Keep it under ~700 words. Be specific to the UAE/GCC freelance market.`;

  if (DRY_RUN && !hasApiKey()) {
    console.log(`[dry-run] Would generate a digest for ${COMPETITORS.length} competitor segments (search=${USE_SEARCH}).`);
    return;
  }

  const tools = USE_SEARCH
    ? [{ type: "web_search_20260209", name: "web_search", max_uses: 5 }]
    : undefined;

  const digest = await callClaude({ system: SYSTEM, user, tools, maxTokens: 6000 });

  if (DRY_RUN) {
    console.log(digest.slice(0, 400));
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const file = path.join(OUT_DIR, `competitor-intel-${stamp}.md`);
  fs.writeFileSync(file, `# Competitor & market digest — ${stamp}\n\n${digest}\n`);
  console.log(`Wrote ${file}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
