import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import sitemap from "./sitemap";
import { products } from "@/lib/products";

beforeEach(() => {
  vi.unstubAllEnvs();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("sitemap", () => {
  it("falls back to the production origin when NEXT_PUBLIC_SITE_URL is unset", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    for (const entry of sitemap()) {
      expect(entry.url).toMatch(/^https:\/\/solokit\.cloud/);
    }
  });

  it("ignores a NEXT_PUBLIC_SITE_URL without a scheme", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "solokit.cloud");
    expect(sitemap()[0].url).toBe("https://solokit.cloud");
  });

  it("uses an absolute NEXT_PUBLIC_SITE_URL when provided", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://staging.example.com");
    for (const entry of sitemap()) {
      expect(entry.url).toMatch(/^https:\/\/staging\.example\.com/);
    }
  });

  it("lists a URL for every product in the catalog", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    const urls = new Set(sitemap().map((e) => e.url));
    for (const p of products) {
      expect(urls.has(`https://solokit.cloud/products/${p.slug}`)).toBe(true);
    }
  });

  it("contains no duplicate URLs", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    const urls = sitemap().map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});
