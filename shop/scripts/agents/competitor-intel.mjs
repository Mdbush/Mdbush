/**
 * Competitor intelligence agent — produces a recurring markdown digest of what
 * competitors and the UAE/GCC freelance-tools market are doing, with recommended
 * actions for SoloKit AND a keyword-gap section that feeds the SEO agent real
 * topics to write about. Writes to scripts/agents/out/competitor-intel-<date>.md,
 * which the workflow attaches to a PR/issue for review.
 *
 * Web search is used when the model/tool supports it; without it, the agent
 * still produces a strategy digest from the provided competitor list.
 *
 * Keyword gaps: the agent is given the ~400 blog slugs SoloKit already covers so
 * it can point at what is MISSING. When a SERP key (SERP_API_KEY) is set, the
 * gap analysis is grounded in real Google demand signals for the UAE.
 *
 *   node scripts/agents/competitor-intel.mjs [--no-search] [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { callClaude, hasApiKey } from "./lib/anthropic.mjs";
import { existingSlugs } from "./lib/blog.mjs";
import { fetchKeywordSignals, hasSerpProvider } from "./lib/serp.mjs";

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

// Head terms used to pull real UAE search-demand signals (only when SERP_API_KEY set).
const SEED_QUERIES = [
  "freelance visa uae",
  "freelance tax uae",
  "how to get clients freelancer dubai",
  "freelance rates uae",
  "notion template freelancer",
  "freelance invoice uae",
];

const SYSTEM = `You are a competitive-strategy analyst for SoloKit (solokit.cloud), which sells
Notion templates, AI prompt packs, and SOPs to UAE/GCC freelancers. Be concrete and
sceptical. Prefer specific observations (pricing, positioning, gaps) over generic advice.`;

function signalsBlock(signals) {
  if (!signals.length) return "";
  const lines = signals
    .map((s) => {
      const related = s.related.slice(0, 8).join(", ");
      const questions = s.questions.slice(0, 6).join(" | ");
      return `- "${s.query}" → related: ${related}${questions ? `; questions: ${questions}` : ""}`;
    })
    .join("\n");
  return `\n\nReal UAE Google demand signals (related searches + people-also-ask) to ground the keyword gaps:\n${lines}`;
}

async function main() {
  const slugs = existingSlugs();

  if (DRY_RUN && !hasApiKey()) {
    console.log(
      `[dry-run] Would generate a digest for ${COMPETITORS.length} competitor segments ` +
        `(search=${USE_SEARCH}), plus keyword gaps against ${slugs.length} existing articles. ` +
        `SERP provider configured: ${hasSerpProvider()}.`
    );
    return;
  }

  // Grounding: real search demand, only when a SERP key is configured.
  const signals = await fetchKeywordSignals(SEED_QUERIES);

  const user = `Produce this week's competitor & market digest for SoloKit. Competitors / segments to consider:
${COMPETITORS.map((c) => `- ${c}`).join("\n")}

SoloKit ALREADY publishes these ${slugs.length} blog slugs (do NOT propose topics already covered here):
${slugs.join(", ")}${signalsBlock(signals)}

Write a tight markdown digest with these sections:
## Market signals
## Competitor moves (pricing, new products, positioning)
## Gaps SoloKit can exploit
## Keyword gaps (target these)
For this section, list 8-12 specific article ideas a UAE/GCC freelancer is actively searching for that are NOT already covered by the slugs above. Render it as a markdown table with columns: Suggested slug (kebab-case, new) | Target keyword | Why it wins (search intent / demand, one line). Rank by opportunity. Prefer topics with evidence of real demand${signals.length ? " from the demand signals provided" : ""}.
## Recommended actions this week (ranked, each with a one-line rationale)

Keep everything except the keyword table under ~700 words. Be specific to the UAE/GCC freelance market.`;

  const tools = USE_SEARCH
    ? [{ type: "web_search_20260209", name: "web_search", max_uses: 5 }]
    : undefined;

  const digest = await callClaude({ system: SYSTEM, user, tools, maxTokens: 7000 });

  if (DRY_RUN) {
    console.log(digest.slice(0, 400));
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const file = path.join(OUT_DIR, `competitor-intel-${stamp}.md`);
  fs.writeFileSync(file, `# Competitor & market digest — ${stamp}\n\n${digest}\n`);
  console.log(`Wrote ${file}`);
  console.log(`Grounded in ${signals.length} SERP signal set(s); benchmarked against ${slugs.length} existing articles.`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
