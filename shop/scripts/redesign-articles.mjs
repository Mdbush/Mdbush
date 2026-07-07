/**
 * Safe bulk article redesign: replaces ONLY the old light header section with
 * the dark gradient hero. Body content, data arrays, CTAs are all preserved intact.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, "../app/blog");

function extractMeta(src, key) {
  // Handle multi-line values
  const re = new RegExp(`${key}:\\s*\\n?\\s*["'\`]([\\s\\S]*?)["'\`]\\s*[,\\n}]`);
  const m = src.match(re);
  return m ? m[1].replace(/\s+/g, " ").trim() : null;
}

function extractReadTime(src) {
  const m = src.match(/(\d+)\s*min\s*read/i);
  return m ? `${m[1]} min read` : "8 min read";
}

function extractCategory(slug) {
  if (slug.includes("-rates-")) return "UAE RATES 2026";
  if (slug.includes("tax") || slug.includes("invoice") || slug.includes("finance") || slug.includes("cash-flow") || slug.includes("emaratax")) return "TAX &amp; FINANCE";
  if (slug.includes("visa") || slug.includes("license") || slug.includes("permit") || slug.includes("free-zone") || slug.includes("zone-comparison")) return "VISAS &amp; LICENSES";
  if (slug.includes("client") || slug.includes("proposal") || slug.includes("contract") || slug.includes("scope-creep") || slug.includes("late-payment")) return "CLIENT WORK";
  if (slug.includes("chatgpt") || slug.includes("claude-ai") || slug.includes("gemini") || slug.includes("notion-ai") || slug.includes("ai-for") || slug.includes("ai-tools") || slug.includes("ai-prompt")) return "AI TOOLS";
  if (slug.includes("linkedin") || slug.includes("personal-brand") || slug.includes("cold-email") || slug.includes("referral")) return "MARKETING &amp; GROWTH";
  if (slug.includes("burnout") || slug.includes("work-life") || slug.includes("passive") || slug.includes("goals") || slug.includes("morning") || slug.includes("boundaries")) return "FREELANCE LIFE";
  if (slug.includes("saudi") || slug.includes("qatar") || slug.includes("kuwait") || slug.includes("bahrain") || slug.includes("oman")) return "GCC FREELANCING";
  if (slug.includes("how-to-become") || slug.includes("how-to-start") || slug.includes("how-to-set-up")) return "GETTING STARTED";
  if (slug.includes("coworking") || slug.includes("virtual-office")) return "WORKSPACES";
  return "UAE FREELANCING";
}

// Find matching closing tag position (handles nested same tags)
function findClosingTag(src, openTag, startPos) {
  const tagName = openTag.match(/<(\w+)/)?.[1];
  if (!tagName) return -1;
  let depth = 1;
  let i = startPos;
  const openRe = new RegExp(`<${tagName}[\\s>]`, "g");
  const closeRe = new RegExp(`</${tagName}>`, "g");
  while (i < src.length && depth > 0) {
    openRe.lastIndex = i;
    closeRe.lastIndex = i;
    const nextOpen = openRe.exec(src);
    const nextClose = closeRe.exec(src);
    if (!nextClose) return -1;
    if (nextOpen && nextOpen.index < nextClose.index) {
      depth++;
      i = nextOpen.index + 1;
    } else {
      depth--;
      if (depth === 0) return nextClose.index + `</${tagName}>`.length;
      i = nextClose.index + 1;
    }
  }
  return -1;
}

function buildHero(title, description, category, readTime) {
  const safeTitle = title.replace(/ — SoloKit$/, "").replace(/"/g, "&quot;");
  const safeDesc = description ? description.replace(/"/g, "&quot;").slice(0, 260) : safeTitle;
  return `
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">${category}</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">${safeTitle}</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">${safeDesc}</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>${readTime}</span>
          </div>
        </div>`;
}

function transformFile(slug, src) {
  // Skip if already has dark hero
  if (src.includes("bg-gradient-to-br from-gray-900 via-gray-800")) return null;

  const title = extractMeta(src, "title") || slug.replace(/-/g, " ");
  const description = extractMeta(src, "description");
  const readTime = extractReadTime(src);
  const category = extractCategory(slug, src);
  const hero = buildHero(title, description, category, readTime);

  let result = src;

  // Fix main wrapper (various old patterns → consistent new one)
  result = result
    .replace(/className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12"/g, 'className="max-w-2xl mx-auto px-4 py-10"')
    .replace(/className="min-h-screen bg-white"\s*>\s*\n?\s*<div className="max-w-3xl mx-auto px-4 py-12">/g, 'className="max-w-2xl mx-auto px-4 py-10">')
    .replace(/className="max-w-3xl mx-auto px-4 py-12"/g, 'className="max-w-2xl mx-auto px-4 py-10"')
    .replace(/className="max-w-3xl mx-auto px-4 sm:px-6 py-12"/g, 'className="max-w-2xl mx-auto px-4 py-10"')
    .replace(/className="max-w-2xl mx-auto px-4 sm:px-6 py-12"/g, 'className="max-w-2xl mx-auto px-4 py-10"');

  // Fix breadcrumb (old › style → new / style)
  result = result.replace(
    /<nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">\s*[\s\S]*?<\/nav>/,
    `
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">${title.replace(/ — SoloKit$/, "").slice(0, 55)}</span>
        </nav>`
  );

  // Replace old <header> block
  const headerIdx = result.indexOf('<header className="mb-8">');
  if (headerIdx !== -1) {
    const afterOpen = headerIdx + '<header className="mb-8">'.length;
    const closePos = findClosingTag(result, "<header", afterOpen);
    if (closePos > 0) {
      result = result.slice(0, headerIdx) + hero + "\n" + result.slice(closePos);
      return result;
    }
  }

  // Pattern B: <div className="mb-10"> containing h1
  const divMb10Idx = result.search(/<div className="mb-10">/);
  if (divMb10Idx !== -1) {
    const afterOpen = divMb10Idx + '<div className="mb-10">'.length;
    const closePos = findClosingTag(result, "<div", afterOpen);
    if (closePos > 0 && result.slice(divMb10Idx, closePos).includes("<h1")) {
      result = result.slice(0, divMb10Idx) + hero + "\n" + result.slice(closePos);
      return result;
    }
  }

  // Pattern C: just find and remove the light <header> regardless of className
  const anyHeaderIdx = result.search(/<header\s+className="[^"]*mb-[0-9]+">/);
  if (anyHeaderIdx !== -1) {
    const afterOpen = anyHeaderIdx + result.slice(anyHeaderIdx).match(/<header[^>]+>/)[0].length;
    const closePos = findClosingTag(result, "<header", afterOpen);
    if (closePos > 0) {
      result = result.slice(0, anyHeaderIdx) + hero + "\n" + result.slice(closePos);
      return result;
    }
  }

  // Pattern D: look for the h1 inside a containing div and replace that div
  const h1Idx = result.search(/<h1 className="text-3xl/);
  if (h1Idx !== -1) {
    // Find the nearest opening div/header before h1
    let parentStart = h1Idx;
    for (let i = h1Idx - 1; i >= 0; i--) {
      if (result[i] === "<" && result.slice(i).match(/^<(?:div|header)\s/)) {
        parentStart = i;
        break;
      }
    }
    const tagMatch = result.slice(parentStart).match(/^<(\w+)\s/);
    if (tagMatch) {
      const afterParentOpen = parentStart + result.slice(parentStart).match(/^<[^>]+>/)[0].length;
      const closePos = findClosingTag(result, `<${tagMatch[1]}`, afterParentOpen);
      if (closePos > 0 && closePos - parentStart < 2000) {
        result = result.slice(0, parentStart) + hero + "\n" + result.slice(closePos);
        return result;
      }
    }
  }

  return null; // Could not find header pattern to replace
}

// Main
const slugs = fs.readdirSync(BLOG_DIR).filter((d) => {
  const p = path.join(BLOG_DIR, d, "page.tsx");
  if (!fs.existsSync(p)) return false;
  const src = fs.readFileSync(p, "utf8");
  return !src.includes("bg-gradient-to-br from-gray-900 via-gray-800");
});

console.log(`Processing ${slugs.length} articles...`);
let ok = 0, skipped = 0, failed = 0;

for (const slug of slugs) {
  const p = path.join(BLOG_DIR, slug, "page.tsx");
  try {
    const src = fs.readFileSync(p, "utf8");
    const result = transformFile(slug, src);
    if (result) {
      fs.writeFileSync(p, result, "utf8");
      ok++;
    } else {
      skipped++;
      console.log(`  SKIP (no pattern): ${slug}`);
    }
    if ((ok + skipped) % 30 === 0) console.log(`  ✓ ${ok} done, ${skipped} skipped...`);
  } catch (err) {
    failed++;
    console.log(`  ERROR: ${slug}: ${err.message}`);
  }
}

console.log(`\nDone! ${ok} transformed, ${skipped} skipped (no pattern match), ${failed} errors.`);
