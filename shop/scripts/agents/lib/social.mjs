/**
 * Social-queue wiring for the social-campaign agent.
 *
 * Appends reviewed posts to lib/social-queue.ts — the single source of truth the
 * social-post cron publishes from. Because this only runs when the agent is
 * invoked with --queue and the change lands via a reviewed PR, a *merged PR* is
 * what promotes a generated post into the live rotation. Mirrors the append
 * pattern of lib/blog.mjs.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const SHOP_ROOT = path.resolve(__dirname, "../../..");
const QUEUE_FILE = path.join(SHOP_ROOT, "lib/social-queue.ts");
const MARKER = "export const socialPosts: SocialPost[] = [";

/** How many posts are currently in the queue file. */
export function queueCount() {
  const src = fs.readFileSync(QUEUE_FILE, "utf8");
  return (src.match(/^\s{2}\{/gm) || []).length;
}

/** Escape a value for a JS single-quoted-safe template string (backticks + ${). */
function tpl(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function attr(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/**
 * Append one post to the queue. `text` is required; `theme` and `imageUrl` are
 * optional metadata that the cron may use to attach a branded card later.
 */
export function addToQueue({ text, theme, imageUrl }) {
  const src = fs.readFileSync(QUEUE_FILE, "utf8");
  const idx = src.lastIndexOf("];");
  if (idx === -1 || !src.includes(MARKER)) {
    throw new Error("socialPosts array not found in lib/social-queue.ts");
  }
  const meta = [
    theme ? `    theme: "${attr(theme)}",` : null,
    imageUrl ? `    imageUrl: "${attr(imageUrl)}",` : null,
  ]
    .filter(Boolean)
    .join("\n");
  const entry =
    `  {\n    text: \`${tpl(text)}\`,\n` + (meta ? meta + "\n" : "") + `  },\n`;
  // Insert just before the closing "];".
  const out = src.slice(0, idx) + entry + src.slice(idx);
  fs.writeFileSync(QUEUE_FILE, out);
}
