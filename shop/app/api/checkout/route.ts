import { NextRequest, NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { createProductCheckout } from "@/lib/lemonsqueezy";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const productSlug = formData.get("productSlug") as string;

  if (!productSlug) {
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const successUrl = `${siteUrl}/success?product=${productSlug}`;

  const checkout = await createProductCheckout(product.lemonSqueezyVariantId, successUrl);

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
