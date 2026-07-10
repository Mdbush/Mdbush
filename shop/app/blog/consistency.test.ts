import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { posts } from "@/lib/blog-posts";
import sitemap from "@/app/sitemap";

// Every blog article must exist in three places that are maintained by hand:
// the route directory (app/blog/<slug>/page.tsx), the posts index
// (lib/blog-posts.ts), and the sitemap URL list (app/sitemap.ts). These tests
// turn a missed step into a CI failure instead of a silently unlinked or
// unindexed article.

const blogDir = path.dirname(fileURLToPath(import.meta.url));

const routeSlugs = fs
  .readdirSync(blogDir, { withFileTypes: true })
  .filter(
    (entry) =>
      entry.isDirectory() &&
      entry.name !== "[slug]" &&
      fs.existsSync(path.join(blogDir, entry.name, "page.tsx"))
  )
  .map((entry) => entry.name);

const indexSlugs = posts.map((p) => p.slug);

const sitemapBlogSlugs = sitemap()
  .map((entry) => new URL(entry.url).pathname)
  .filter((pathname) => pathname.startsWith("/blog/"))
  .map((pathname) => pathname.split("/")[2]);

describe("blog article consistency", () => {
  it("has a route directory for every indexed post", () => {
    const routes = new Set(routeSlugs);
    expect(indexSlugs.filter((s) => !routes.has(s))).toEqual([]);
  });

  it("indexes every route directory in lib/blog-posts.ts", () => {
    const indexed = new Set(indexSlugs);
    expect(routeSlugs.filter((s) => !indexed.has(s))).toEqual([]);
  });

  it("lists every route directory in the sitemap", () => {
    const inSitemap = new Set(sitemapBlogSlugs);
    expect(routeSlugs.filter((s) => !inSitemap.has(s))).toEqual([]);
  });

  it("has a route directory for every sitemap blog URL", () => {
    const routes = new Set(routeSlugs);
    expect(sitemapBlogSlugs.filter((s) => !routes.has(s))).toEqual([]);
  });

  it("has no duplicate slugs in the sitemap blog URL list", () => {
    expect(new Set(sitemapBlogSlugs).size).toBe(sitemapBlogSlugs.length);
  });
});
