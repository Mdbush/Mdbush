/**
 * Upgrades body content styling across all blog articles.
 * Targets: section headers, CTA boxes, badge colors, benchmark boxes, related links.
 * All replacements are targeted string substitutions — no JSX parsing.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, "../app/blog");

// Inject emerald accent span into h2 tags that don't already have it
function upgradeH2Headers(src) {
  // Match single-line h2s: <h2 className="...">text</h2>
  return src.replace(
    /<h2 className="(text-xl font-bold text-gray-900[^"]*)">([\s\S]*?)<\/h2>/g,
    (match, cls, content) => {
      if (content.includes("bg-emerald-500") || content.includes("inline-block")) return match;
      const trimmed = content.trim();
      const newCls = cls
        .replace(/mt-8/g, "mt-10")
        .replace(/mb-3/g, "mb-4")
        .replace(/mb-2/g, "mb-4");
      if (!newCls.includes("flex")) {
        return `<h2 className="${newCls} flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>${trimmed}</h2>`;
      }
      return match;
    }
  );
}

// Replace green badges with emerald
function upgradeGreenBadges(src) {
  return src
    .replace(/text-green-700 bg-green-50/g, "text-emerald-700 bg-emerald-50 border border-emerald-200")
    .replace(/text-green-700 bg-green-100/g, "text-emerald-700 bg-emerald-50 border border-emerald-200")
    .replace(/text-green-600/g, "text-emerald-600")
    .replace(/bg-green-50 px-2 py-0\.5 rounded-full/g, "bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full")
    .replace(/text-blue-600 hover:text-blue-800/g, "text-emerald-700 hover:text-emerald-900")
    .replace(/bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full/g, "bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full")
    .replace(/text-blue-900/g, "text-emerald-900")
    .replace(/border-blue-200/g, "border-emerald-200")
    .replace(/bg-blue-50/g, "bg-emerald-50");
}

// Upgrade old gray CTA to gradient
function upgradeCTA(src) {
  return src
    .replace(
      /className="bg-gray-950 text-white rounded-2xl p-6 mt-10"/g,
      'className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center"'
    )
    .replace(
      /className="bg-gray-950 text-white rounded-2xl p-6 mt-8"/g,
      'className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center"'
    )
    // CTA button: old white-on-dark → emerald
    .replace(
      /className="inline-block bg-white text-gray-900 font-bold px-5 py-2\.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"/g,
      'className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"'
    )
    // CTA label: old gray-400 label → emerald
    .replace(
      /className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2"/g,
      'className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3"'
    );
}

// Upgrade benchmark/tip boxes
function upgradeTipBoxes(src) {
  return src
    // Quick benchmark box: gray bg → emerald tint
    .replace(
      /className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm"/g,
      'className="bg-emerald-50 border border-emerald-200 rounded-xl p-5"'
    )
    .replace(
      /className="text-sm text-gray-700"\s*>/g,
      'className="text-sm text-emerald-800">'
    )
    // Pro-tip / note headings inside tip boxes
    .replace(
      /<p className="font-semibold text-gray-900 mb-1">Quick benchmark<\/p>/g,
      '<p className="text-sm font-bold text-emerald-800 mb-2">Quick benchmark</p>'
    )
    .replace(
      /<p className="font-semibold text-gray-900 mb-1">([^<]+)<\/p>/g,
      '<p className="text-sm font-bold text-emerald-800 mb-2">$1</p>'
    );
}

// Upgrade related links section
function upgradeRelatedLinks(src) {
  return src.replace(
    /className="border border-gray-200 rounded-2xl p-5 mt-6">([\s\S]*?)className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides<\/p>/g,
    'className="mt-10 pt-8 border-t border-gray-100">$1className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">Related guides</p>'
  );
}

// Upgrade section wrappers
function upgradeMainWrapper(src) {
  return src
    .replace(/className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6"/g,
      'className="space-y-6 leading-relaxed"')
    .replace(/className="text-gray-700 leading-relaxed space-y-6"/g,
      'className="space-y-6 leading-relaxed"');
}

function transform(src) {
  let out = src;
  out = upgradeH2Headers(out);
  out = upgradeGreenBadges(out);
  out = upgradeCTA(out);
  out = upgradeTipBoxes(out);
  out = upgradeMainWrapper(out);
  return out;
}

const slugs = fs.readdirSync(BLOG_DIR).filter(d => fs.existsSync(path.join(BLOG_DIR, d, "page.tsx")));

let changed = 0;
for (const slug of slugs) {
  const p = path.join(BLOG_DIR, slug, "page.tsx");
  const src = fs.readFileSync(p, "utf8");
  const out = transform(src);
  if (out !== src) {
    fs.writeFileSync(p, out, "utf8");
    changed++;
  }
}

console.log(`Upgraded ${changed} articles.`);
