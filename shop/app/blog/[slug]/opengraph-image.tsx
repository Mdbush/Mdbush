import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/blog-posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "UAE Freelancer Guide";
  const category = post?.category ?? "Guide";
  const readTime = post?.readTime ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "48px" }}>
          <span
            style={{
              color: "#888888",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            SoloKit
          </span>
          <span style={{ color: "#333333", fontSize: "20px", margin: "0 14px" }}>·</span>
          <span
            style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              color: "#888888",
              fontSize: "16px",
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: "6px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {category}
          </span>
          {readTime && (
            <>
              <span style={{ color: "#333333", fontSize: "20px", margin: "0 14px" }}>·</span>
              <span style={{ color: "#555555", fontSize: "18px" }}>{readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <div
          style={{
            color: "#ffffff",
            fontSize: title.length > 60 ? "44px" : "52px",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            flex: 1,
            display: "flex",
            alignItems: "center",
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid #1e1e1e",
          }}
        >
          <span style={{ color: "#555555", fontSize: "18px" }}>solokit.cloud/blog</span>
          <div style={{ display: "flex", gap: "10px" }}>
            {["UAE", "Free Guide", "2026"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  color: "#666666",
                  fontSize: "15px",
                  padding: "6px 14px",
                  borderRadius: "6px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
