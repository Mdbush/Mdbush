import { describe, it, expect } from "vitest";
import { products, getProduct, formatPrice } from "@/lib/products";

describe("formatPrice", () => {
  it("converts fils to AED and drops the fractional part", () => {
    expect(formatPrice(17500)).toBe("AED 175");
    expect(formatPrice(24900)).toBe("AED 249");
    expect(formatPrice(10900)).toBe("AED 109");
  });

  it("handles zero", () => {
    expect(formatPrice(0)).toBe("AED 0");
  });

  it("rounds to the nearest whole AED via toFixed(0)", () => {
    // 15050 fils = AED 150.5 -> toFixed(0) rounds to 151
    expect(formatPrice(15050)).toBe("AED 151");
    // 15049 fils = AED 150.49 -> rounds down to 150
    expect(formatPrice(15049)).toBe("AED 150");
  });

  it("formats large values without separators", () => {
    expect(formatPrice(123456700)).toBe("AED 1234567");
  });
});

describe("getProduct", () => {
  it("returns the product matching a known slug", () => {
    const product = getProduct("freelancer-client-crm");
    expect(product).toBeDefined();
    expect(product?.name).toBe("Freelancer Client CRM");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProduct("does-not-exist")).toBeUndefined();
  });

  it("is case-sensitive on the slug", () => {
    expect(getProduct("Freelancer-Client-CRM")).toBeUndefined();
  });

  it("resolves every configured product slug", () => {
    for (const p of products) {
      expect(getProduct(p.slug)).toBe(p);
    }
  });
});

describe("products catalog integrity", () => {
  it("has exactly six products", () => {
    expect(products).toHaveLength(6);
  });

  it("has unique ids and slugs", () => {
    const ids = products.map((p) => p.id);
    const slugs = products.map((p) => p.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses url-safe slugs", () => {
    for (const p of products) {
      expect(p.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("has positive integer prices stored in fils", () => {
    for (const p of products) {
      expect(p.price).toBeGreaterThan(0);
      expect(Number.isInteger(p.price)).toBe(true);
    }
  });

  it("keeps originalPrice above the sale price when present", () => {
    for (const p of products) {
      if (p.originalPrice !== undefined) {
        expect(p.originalPrice).toBeGreaterThan(p.price);
      }
    }
  });

  it("populates the required display fields", () => {
    for (const p of products) {
      expect(p.name.length).toBeGreaterThan(0);
      expect(p.tagline.length).toBeGreaterThan(0);
      expect(p.description.length).toBeGreaterThan(0);
      expect(p.emoji.length).toBeGreaterThan(0);
      expect(p.category.length).toBeGreaterThan(0);
      expect(p.features.length).toBeGreaterThan(0);
      expect(p.features.every((f) => f.trim().length > 0)).toBe(true);
    }
  });
});
