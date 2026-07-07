import { describe, it, expect } from "vitest";
import { posts, getPost } from "@/lib/blog-posts";

describe("getPost", () => {
  it("returns the post matching a known slug", () => {
    const first = posts[0];
    expect(getPost(first.slug)).toBe(first);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getPost("this-slug-does-not-exist-anywhere")).toBeUndefined();
  });

  it("resolves every indexed post slug", () => {
    for (const p of posts) {
      expect(getPost(p.slug)).toBe(p);
    }
  });
});

describe("blog index integrity", () => {
  it("is a non-empty list", () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it("has unique slugs", () => {
    const slugs = posts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses url-safe slugs", () => {
    for (const p of posts) {
      expect(p.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("populates every required field on every post", () => {
    for (const p of posts) {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.description.trim().length).toBeGreaterThan(0);
      expect(p.date.trim().length).toBeGreaterThan(0);
      expect(p.readTime.trim().length).toBeGreaterThan(0);
      expect(p.category.trim().length).toBeGreaterThan(0);
    }
  });

  it("uses a consistent read-time format", () => {
    for (const p of posts) {
      expect(p.readTime).toMatch(/^\d+\s*min read$/);
    }
  });

  it("uses parseable dates", () => {
    for (const p of posts) {
      expect(Number.isNaN(Date.parse(p.date))).toBe(false);
    }
  });
});
