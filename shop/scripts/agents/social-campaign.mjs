/**
 * Social campaign agent — generates a batch of on-brand, educational social posts
 * (LinkedIn/Facebook) tied to SoloKit's products and blog, and writes them to
 * scripts/agents/out/social-posts-<date>.json for review.
 *
 * This complements the existing hardcoded rotation in app/api/cron/social-post/route.ts:
 * once reviewed, the JSON can replace/extend that rotation. Low-risk content, so under
 * the hybrid model it is a candidate for auto-publish once you trust the output.
 *
 *   node scripts/agents/social-campaign.mjs [--count=10] [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { callClaude, hasApiKey } from "./lib/anthropic.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "out");
const DRY_RUN = process.argv.includes("--dry-run");
const countArg = process.argv.find((a) => a.startsWith("--count="));
const COUNT = countArg ? Math.max(1, parseInt(countArg.split("=")[1], 10) || 10) : 10;

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    posts: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          platform: { type: "string", enum: ["linkedin", "facebook", "any"] },
          text: { type: "string" },
          theme: { type: "string" },
        },
        required: ["platform", "text", "theme"],
      },
    },
  },
  required: ["posts"],
};

const SYSTEM = `You write social posts for SoloKit (solokit.cloud) — Notion templates, AI prompt
packs, and SOPs for UAE/GCC freelancers. Posts are educational and expert-voice, NOT ads:
a concrete insight or tactic, then a light nudge at most. UAE/GCC context, AED where money
comes up, no emojis-as-filler, no hashspam (max 3-4 relevant hashtags). Vary structure.`;

async function main() {
  if (DRY_RUN && !hasApiKey()) {
    console.log(`[dry-run] Would generate ${COUNT} social posts.`);
    return;
  }

  const { posts } = await callClaude({
    system: SYSTEM,
    user: `Write ${COUNT} distinct posts. Mix themes: pricing, getting clients, systems/automation, UAE freelance admin (visa/VAT/banking), and productised services. Return JSON only.`,
    schema: SCHEMA,
    maxTokens: 8000,
  });

  if (DRY_RUN) {
    console.log(`[dry-run] Generated ${posts.length} posts. First:\n${posts[0]?.text?.slice(0, 200)}`);
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const file = path.join(OUT_DIR, `social-posts-${stamp}.json`);
  fs.writeFileSync(file, JSON.stringify(posts, null, 2) + "\n");
  console.log(`Wrote ${posts.length} posts to ${file}`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
