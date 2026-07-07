/**
 * Social campaign agent — generates a batch of on-brand, educational social posts
 * (LinkedIn/Facebook) for SoloKit, each paired with a ready-to-use image:
 *
 *   1. Branded card (always): an on-brand image rendered by the site's
 *      /api/social-card route — no key, no cost. The post's `imageUrl` points at it.
 *   2. AI illustration (optional): when an image-provider key (OPENAI_API_KEY) is
 *      set, a richer AI image is generated and saved next to the JSON.
 *
 * Output: scripts/agents/out/social-posts-<date>.json (+ optional PNGs) for review.
 *
 *   node scripts/agents/social-campaign.mjs [--count=10] [--ai] [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { callClaude, hasApiKey } from "./lib/anthropic.mjs";
import { generateAiImage, hasImageProvider } from "./lib/image.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "out");
const DRY_RUN = process.argv.includes("--dry-run");
const WANT_AI = process.argv.includes("--ai") || process.env.SOCIAL_AI_IMAGES === "1";
const countArg = process.argv.find((a) => a.startsWith("--count="));
const COUNT = countArg ? Math.max(1, parseInt(countArg.split("=")[1], 10) || 10) : 10;
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://solokit.cloud";

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
          hook: {
            type: "string",
            description: "A short, punchy line (<= 60 chars) for the image card",
          },
          imagePrompt: {
            type: "string",
            description: "A concise prompt for an AI illustration matching the post",
          },
        },
        required: ["platform", "text", "theme", "hook", "imagePrompt"],
      },
    },
  },
  required: ["posts"],
};

const SYSTEM = `You write social posts for SoloKit (solokit.cloud) — Notion templates, AI prompt
packs, and SOPs for UAE/GCC freelancers. Posts are educational and expert-voice, NOT ads:
a concrete insight or tactic, then a light nudge at most. UAE/GCC context, AED where money
comes up, no emojis-as-filler, no hashspam (max 3-4 relevant hashtags). Vary structure.`;

function cardUrl(hook, theme) {
  const q = new URLSearchParams({ text: hook, sub: theme, type: "tip", format: "square" });
  return `${SITE}/api/social-card?${q.toString()}`;
}

async function main() {
  if (DRY_RUN && !hasApiKey()) {
    console.log(
      `[dry-run] Would generate ${COUNT} posts, each with a branded card URL` +
        (WANT_AI ? " + AI image" : "") +
        `. AI provider configured: ${hasImageProvider()}.`
    );
    return;
  }

  const { posts } = await callClaude({
    system: SYSTEM,
    user: `Write ${COUNT} distinct posts. Mix themes: pricing, getting clients, systems/automation, UAE freelance admin (visa/VAT/banking), and productised services. For each, also give a short "hook" (<=60 chars) for the image card and an "imagePrompt" for an AI illustration. Return JSON only.`,
    schema: SCHEMA,
    maxTokens: 9000,
  });

  // Attach a branded card URL to every post.
  posts.forEach((p) => {
    p.imageUrl = cardUrl(p.hook, p.theme);
  });

  if (DRY_RUN) {
    console.log(`[dry-run] Generated ${posts.length} posts. First card: ${posts[0]?.imageUrl}`);
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);

  // Optional AI illustrations.
  if (WANT_AI) {
    if (!hasImageProvider()) {
      console.log("AI images requested but no image provider key set — skipping (branded cards still attached).");
    } else {
      for (let i = 0; i < posts.length; i++) {
        const out = path.join(OUT_DIR, `social-${stamp}-${i + 1}.png`);
        const saved = await generateAiImage(posts[i].imagePrompt, out);
        if (saved) {
          posts[i].aiImagePath = path.relative(__dirname, saved);
          console.log(`AI image ${i + 1}/${posts.length} → ${posts[i].aiImagePath}`);
        }
      }
    }
  }

  const file = path.join(OUT_DIR, `social-posts-${stamp}.json`);
  fs.writeFileSync(file, JSON.stringify(posts, null, 2) + "\n");
  console.log(`Wrote ${posts.length} posts to ${file}`);
  console.log(`Each post has a branded imageUrl${WANT_AI ? " (and AI images where generated)" : ""}.`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
