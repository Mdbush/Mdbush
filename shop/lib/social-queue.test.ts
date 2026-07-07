import { describe, it, expect } from "vitest";
import { socialPosts } from "@/lib/social-queue";

describe("social post queue integrity", () => {
  it("is a non-empty rotation", () => {
    expect(socialPosts.length).toBeGreaterThan(0);
  });

  it("has non-empty text on every post", () => {
    for (const post of socialPosts) {
      expect(typeof post.text).toBe("string");
      expect(post.text.trim().length).toBeGreaterThan(0);
    }
  });

  it("keeps every post within the LinkedIn 3000-char limit", () => {
    for (const post of socialPosts) {
      expect(post.text.length).toBeLessThanOrEqual(3000);
    }
  });

  it("uses https image URLs when an image is attached", () => {
    for (const post of socialPosts) {
      if (post.imageUrl !== undefined) {
        expect(post.imageUrl).toMatch(/^https:\/\//);
      }
    }
  });

  it("only ever cycles to a valid index for any day", () => {
    // Mirrors getPostIndex() in the social-post cron route.
    for (const days of [0, 1, 100, 20_000, 99_999]) {
      const idx = days % socialPosts.length;
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(socialPosts.length);
      expect(socialPosts[idx]).toBeDefined();
    }
  });
});
