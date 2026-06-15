import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SoloKit — Notion Templates, AI Prompts & SOPs for Solopreneurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            SoloKit
          </span>
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          Stop building from scratch.
        </div>
        <div style={{ color: "#888888", fontSize: "28px", marginBottom: "48px", maxWidth: "700px" }}>
          Notion templates, AI prompts & SOPs for freelancers and solopreneurs.
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["Instant delivery", "30-day guarantee", "AED pricing"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#222222",
                color: "#aaaaaa",
                fontSize: "18px",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #333333",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
