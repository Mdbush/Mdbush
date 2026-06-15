import { ImageResponse } from "next/og";
import { getProduct, formatPrice, products } from "@/lib/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return new ImageResponse(
      <div style={{ background: "#111111", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#ffffff", fontSize: "48px" }}>SoloKit</span>
      </div>,
      { ...size }
    );
  }

  const savings = product.originalPrice
    ? `Save ${formatPrice(product.originalPrice - product.price)}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "48px" }}>
          <span style={{ color: "#888888", fontSize: "22px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase" }}>
            SoloKit
          </span>
          <span style={{ color: "#333333", fontSize: "22px", marginLeft: "16px", marginRight: "16px" }}>·</span>
          <span style={{ color: "#555555", fontSize: "22px" }}>{product.category}</span>
        </div>

        {/* Emoji + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
          <span style={{ fontSize: "72px" }}>{product.emoji}</span>
          <span
            style={{
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            {product.name}
          </span>
        </div>

        {/* Tagline */}
        <div style={{ color: "#888888", fontSize: "28px", lineHeight: 1.4, marginBottom: "48px", maxWidth: "900px" }}>
          {product.tagline}
        </div>

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "auto" }}>
          <div
            style={{
              background: "#ffffff",
              color: "#111111",
              fontSize: "28px",
              fontWeight: 800,
              padding: "12px 28px",
              borderRadius: "12px",
            }}
          >
            {formatPrice(product.price)}
          </div>
          {product.originalPrice && (
            <div
              style={{
                color: "#555555",
                fontSize: "24px",
                textDecoration: "line-through",
              }}
            >
              {formatPrice(product.originalPrice)}
            </div>
          )}
          {savings && (
            <div
              style={{
                background: "#1a3a1a",
                color: "#4ade80",
                fontSize: "20px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "8px",
              }}
            >
              {savings}
            </div>
          )}
          <div style={{ display: "flex", gap: "12px", marginLeft: "auto" }}>
            {["Instant download", "30-day guarantee"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "#222222",
                  color: "#666666",
                  fontSize: "18px",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "1px solid #333333",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
