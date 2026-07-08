import { describe, it, expect, vi, beforeEach } from "vitest";
import type { NextRequest } from "next/server";
import { POST } from "./route";
import { getProduct } from "@/lib/products";
import { createProductCheckout } from "@/lib/lemonsqueezy";

vi.mock("@/lib/products", () => ({ getProduct: vi.fn() }));
vi.mock("@/lib/lemonsqueezy", () => ({ createProductCheckout: vi.fn() }));

const getProductMock = vi.mocked(getProduct);
const createCheckoutMock = vi.mocked(createProductCheckout);

function makeRequest(fields: Record<string, string>): NextRequest {
  const form = new FormData();
  for (const [k, v] of Object.entries(fields)) form.append(k, v);
  return new Request("http://localhost/api/checkout", {
    method: "POST",
    body: form,
  }) as unknown as NextRequest;
}

const sampleProduct = {
  id: "1",
  slug: "freelancer-client-crm",
  name: "Freelancer Client CRM",
  tagline: "t",
  description: "d",
  price: 17500,
  lemonSqueezyVariantId: "variant-123",
  emoji: "📋",
  features: ["a"],
  category: "Notion Templates",
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe("POST /api/checkout", () => {
  it("returns 400 when productSlug is missing", async () => {
    const res = await POST(makeRequest({}));
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "Missing productSlug" });
    expect(getProductMock).not.toHaveBeenCalled();
  });

  it("returns 404 when the product is unknown", async () => {
    getProductMock.mockReturnValue(undefined);
    const res = await POST(makeRequest({ productSlug: "nope" }));
    expect(res.status).toBe(404);
    expect(await res.json()).toEqual({ error: "Product not found" });
  });

  it("returns 500 when the product has no configured variant", async () => {
    getProductMock.mockReturnValue({ ...sampleProduct, lemonSqueezyVariantId: "" });
    const res = await POST(makeRequest({ productSlug: "freelancer-client-crm" }));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Product not configured for checkout" });
    expect(createCheckoutMock).not.toHaveBeenCalled();
  });

  it("303-redirects to the hosted checkout URL on success", async () => {
    getProductMock.mockReturnValue(sampleProduct);
    createCheckoutMock.mockResolvedValue({
      error: null,
      data: { data: { attributes: { url: "https://checkout.example/abc" } } },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    const res = await POST(makeRequest({ productSlug: "freelancer-client-crm" }));

    expect(res.status).toBe(303);
    expect(res.headers.get("location")).toBe("https://checkout.example/abc");
    expect(createCheckoutMock).toHaveBeenCalledWith(
      "variant-123",
      expect.stringContaining("/success?product=freelancer-client-crm")
    );
  });

  it("returns 500 when checkout creation throws", async () => {
    getProductMock.mockReturnValue(sampleProduct);
    createCheckoutMock.mockRejectedValue(new Error("network down"));
    const res = await POST(makeRequest({ productSlug: "freelancer-client-crm" }));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Failed to create checkout" });
  });

  it("returns 500 when Lemon Squeezy responds with an error", async () => {
    getProductMock.mockReturnValue(sampleProduct);
    createCheckoutMock.mockResolvedValue({
      error: new Error("bad"),
      data: null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
    const res = await POST(makeRequest({ productSlug: "freelancer-client-crm" }));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Failed to create checkout" });
  });

  it("returns 500 when no checkout URL is returned", async () => {
    getProductMock.mockReturnValue(sampleProduct);
    createCheckoutMock.mockResolvedValue({
      error: null,
      data: { data: { attributes: {} } },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
    const res = await POST(makeRequest({ productSlug: "freelancer-client-crm" }));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "No checkout URL returned" });
  });
});
