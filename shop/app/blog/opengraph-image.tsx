import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        <div style={{ display: "flex", alignItems: "center", marginBottom: "56px" }}>
          <span
            style={{
              color: "#888888",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            SoloKit
          </span>
          <span style={{ color: "#333333", fontSize: "22px", margin: "0 16px" }}>·</span>
          <span style={{ color: "#555555", fontSize: "20px" }}>Free Guides</span>
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            flex: 1,
          }}
        >
          40 Free Guides for UAE Freelancers
        </div>

        <div
          style={{
            color: "#555555",
            fontSize: "28px",
            lineHeight: 1.4,
            maxWidth: "900px",
            marginBottom: "48px",
          }}
        >
          Visa, tax, rates, clients, contracts, AI tools — written for Dubai & Abu Dhabi.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid #1e1e1e",
          }}
        >
          <span style={{ color: "#444444", fontSize: "20px" }}>solokit.cloud/blog</span>
          <div style={{ display: "flex", gap: "10px" }}>
            {["Free", "UAE", "No fluff"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  color: "#666666",
                  fontSize: "16px",
                  padding: "8px 16px",
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
