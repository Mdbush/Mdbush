/**
 * Keyword-gap reader — closes the loop between the two growth agents.
 *
 * competitor-intel.mjs writes a digest containing a "## Keyword gaps (target
 * these)" markdown table (suggested slug | target keyword | why it wins).
 * seo-content.mjs uses this to write against the top-ranked, still-uncovered
 * gap instead of picking a topic blind.
 *
 * Everything here degrades gracefully: no digest / no table / no fresh rows →
 * returns null / [] and the SEO agent falls back to its own topic selection.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { existingSlugs } from "./blog.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "out");

/** Path to the most recent competitor-intel digest, or null if none exist. */
export function latestDigestPath() {
  let entries;
  try {
    entries = fs.readdirSync(OUT_DIR);
  } catch {
    return null;
  }
  const digests = entries
    .filter((f) => /^competitor-intel-.*\.md$/.test(f))
    .sort(); // filenames are date-stamped, so lexical sort == chronological
  if (!digests.length) return null;
  return path.join(OUT_DIR, digests[digests.length - 1]);
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Parse the keyword-gap table from a digest's markdown.
 * @returns {Array<{slug: string, keyword: string, why: string}>}
 */
export function parseGaps(markdown) {
  if (!markdown) return [];
  // Isolate the "Keyword gaps" section (up to the next H2 or end of doc).
  const m = markdown.match(/##\s*Keyword gaps[^\n]*\n([\s\S]*?)(?:\n##\s|$)/i);
  if (!m) return [];
  const rows = m[1]
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("|"));

  const gaps = [];
  for (const row of rows) {
    // Split the pipe-delimited row, dropping the empty edges.
    const cells = row.split("|").map((c) => c.trim());
    const cols = cells.slice(1, -1).length ? cells.slice(1, -1) : cells.filter(Boolean);
    if (cols.length < 2) continue;
    const [c0, c1, c2 = ""] = cols;
    // Skip the header row and the |---|---| separator.
    if (/^-+$/.test(c0.replace(/\s/g, "")) || /slug/i.test(c0)) continue;
    const slug = slugify(c0);
    if (!slug) continue;
    gaps.push({ slug, keyword: c1, why: c2 });
  }
  return gaps;
}

/**
 * The top-ranked keyword gaps not already covered by a published article.
 * @param {number} [limit=5]
 * @returns {Array<{slug: string, keyword: string, why: string}>}
 */
export function latestGaps(limit = 5) {
  const p = latestDigestPath();
  if (!p) return [];
  const md = fs.readFileSync(p, "utf8");
  const covered = new Set(existingSlugs());
  return parseGaps(md)
    .filter((g) => !covered.has(g.slug))
    .slice(0, limit);
}
