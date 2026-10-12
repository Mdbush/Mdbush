import { NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { createProductCheckout } from "@/lib/lemonsqueezy";
import { SITE_URL } from "@/lib/site";

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }
  const productSlug = formData.get("productSlug");

  if (typeof productSlug !== "string" || !productSlug) {
    return NextResponse.json({ error: "Missing productSlug" }, { status: 400 });
  }

  const product = getProduct(productSlug);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  if (!product.lemonSqueezyVariantId) {
    return NextResponse.json(
      { error: "Product not configured for checkout" },
      { status: 500 }
    );
  }

  const successUrl = `${SITE_URL}/success?product=${encodeURIComponent(productSlug)}`;

  let checkout;
  try {
    checkout = await createProductCheckout(product.lemonSqueezyVariantId, successUrl);
  } catch (err) {
    console.error("Lemon Squeezy network error:", err);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }

  if (checkout.error) {
    console.error("Lemon Squeezy checkout error:", checkout.error);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }

  const checkoutUrl = checkout.data?.data.attributes.url;
  if (!checkoutUrl) {
    return NextResponse.json({ error: "No checkout URL returned" }, { status: 500 });
  }

  return NextResponse.redirect(checkoutUrl, { status: 303 });
}
