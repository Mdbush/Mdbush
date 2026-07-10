import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { posts } from "@/lib/blog-posts";
import sitemap from "@/app/sitemap";

// Adding a blog article requires three manual steps (the route file, an entry
// in lib/blog-posts.ts, and a slug in app/sitemap.ts). The build passes even
// when one is missed — the article just silently becomes unlinked and
// unindexed. These tests make that drift a test failure instead.

const BLOG_DIR = fileURLToPath(new URL("../app/blog", import.meta.url));

function articleSlugsOnDisk(): string[] {
  return readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => existsSync(join(BLOG_DIR, name, "page.tsx")));
}

function blogSlugsInSitemap(): string[] {
  return sitemap()
    .map((entry) => entry.url)
    .filter((url) => url.includes("/blog/"))
    .map((url) => url.split("/blog/")[1]);
}

beforeEach(() => {
  // Pin the base URL to the production fallback so slug extraction is stable.
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("blog index ↔ filesystem ↔ sitemap consistency", () => {
  it("has a page.tsx on disk for every indexed post", () => {
    const disk = new Set(articleSlugsOnDisk());
    const missingRoutes = posts.map((p) => p.slug).filter((s) => !disk.has(s));
    expect(missingRoutes).toEqual([]);
  });

  it("indexes every article that exists on disk", () => {
    const indexed = new Set(posts.map((p) => p.slug));
    const unlisted = articleSlugsOnDisk().filter((s) => !indexed.has(s));
    expect(unlisted).toEqual([]);
  });

  it("lists every indexed post in the sitemap", () => {
    const inSitemap = new Set(blogSlugsInSitemap());
    const unindexed = posts.map((p) => p.slug).filter((s) => !inSitemap.has(s));
    expect(unindexed).toEqual([]);
  });

  it("has no sitemap blog URLs pointing at articles that don't exist", () => {
    const disk = new Set(articleSlugsOnDisk());
    const dangling = blogSlugsInSitemap().filter((s) => !disk.has(s));
    expect(dangling).toEqual([]);
  });
});

describe("sitemap integrity", () => {
  it("contains no duplicate URLs", () => {
    const urls = sitemap().map((entry) => entry.url);
    const seen = new Set<string>();
    const duplicates = urls.filter((url) => (seen.has(url) ? true : (seen.add(url), false)));
    expect(duplicates).toEqual([]);
  });

  it("emits absolute production URLs when NEXT_PUBLIC_SITE_URL is unset", () => {
    for (const entry of sitemap()) {
      expect(entry.url).toMatch(/^https:\/\/solokit\.cloud(\/|$)/);
    }
  });

  it("falls back to the production base when NEXT_PUBLIC_SITE_URL is not absolute", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "solokit.cloud");
    for (const entry of sitemap()) {
      expect(entry.url).toMatch(/^https:\/\/solokit\.cloud(\/|$)/);
    }
  });
});
