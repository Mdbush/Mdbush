import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import robots from "./robots";

beforeEach(() => {
  vi.unstubAllEnvs();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("robots", () => {
  it("disallows every utility/social page and the API", () => {
    const rules = robots().rules as { disallow: string[] };
    for (const path of [
      "/success",
      "/resources",
      "/tiktok",
      "/instagram",
      "/linkedin",
      "/facebook",
      "/email-setup",
      "/brand",
      "/api/",
    ]) {
      expect(rules.disallow, `expected ${path} to be disallowed`).toContain(path);
    }
  });

  it("advertises the production sitemap when NEXT_PUBLIC_SITE_URL is unset", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(robots().sitemap).toBe("https://solokit.cloud/sitemap.xml");
  });

  it("ignores a NEXT_PUBLIC_SITE_URL without a scheme", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "localhost:3000");
    expect(robots().sitemap).toBe("https://solokit.cloud/sitemap.xml");
  });

  it("uses an absolute NEXT_PUBLIC_SITE_URL when provided", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://staging.example.com");
    expect(robots().sitemap).toBe("https://staging.example.com/sitemap.xml");
  });
});
