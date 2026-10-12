import { describe, expect, it } from "vitest";
import { resolveSiteUrl } from "./site";

describe("site origin", () => {
  it("rejects invalid schemes, credentials, and malformed URLs", () => {
    for (const value of ["", "httpgarbage", "ftp://example.com", "https://user:pass@example.com", "example.com"]) {
      expect(resolveSiteUrl(value)).toBe("https://solokit.cloud");
    }
  });
  it("normalizes valid origins for checkout and canonical URLs", () => {
    expect(resolveSiteUrl("https://example.com/path/?x=1")).toBe("https://example.com");
    expect(resolveSiteUrl("http://localhost:3000/")).toBe("http://localhost:3000");
  });
});
