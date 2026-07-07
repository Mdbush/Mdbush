import { posts } from "@/lib/blog-posts";

// Static RSS 2.0 feed for the blog — generated at build time from the index.
export const dynamic = "force-static";

const rawBase = process.env.NEXT_PUBLIC_SITE_URL;
const SITE = rawBase && rawBase.startsWith("http") ? rawBase : "https://solokit.cloud";
const MAX_ITEMS = 50;

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pubDate(date: string): string {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? new Date(0).toUTCString() : d.toUTCString();
}

export async function GET() {
  const items = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_ITEMS)
    .map((p) => {
      const url = `${SITE}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(p.description)}</description>
      <category>${esc(p.category)}</category>
      <pubDate>${pubDate(p.date)}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SoloKit Blog — Guides for UAE &amp; GCC Freelancers</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Practical, no-fluff guides for freelancers and solopreneurs across the UAE, Saudi Arabia, and the wider GCC.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
