import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

// LinkedIn cover: 1584×396  →  ?p=li
// Facebook cover: 820×312   →  ?p=fb  (default)
// Twitter/X banner: 1500×500 → ?p=tw
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const platform = searchParams.get("p") ?? "fb";

  const dims: Record<string, { w: number; h: number }> = {
    li: { w: 1584, h: 396 },
    fb: { w: 820, h: 312 },
    tw: { w: 1500, h: 500 },
  };
  const { w, h } = dims[platform] ?? dims.fb;

  const tagline =
    platform === "li"
      ? "Notion templates · AI prompts · SOPs for UAE freelancers & solopreneurs"
      : "Plug-in tools for UAE freelancers. Stop starting from scratch.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          padding: platform === "li" ? "0 80px" : "0 60px",
          position: "relative",
        }}
      >
        {/* Left: brand + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: platform === "li" ? "72px" : "60px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            SoloKit
          </div>
          <div
            style={{
              color: "#6b7280",
              fontSize: platform === "li" ? "22px" : "20px",
              fontWeight: 400,
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Right: product badges */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-end",
          }}
        >
          {["Notion Templates", "AI Prompts", "SOPs & Systems"].map((label) => (
            <div
              key={label}
              style={{
                backgroundColor: "#111827",
                border: "1px solid #1f2937",
                borderRadius: "8px",
                padding: "8px 20px",
                color: "#9ca3af",
                fontSize: "18px",
                fontWeight: 500,
                display: "flex",
              }}
            >
              {label}
            </div>
          ))}
          <div
            style={{
              color: "#374151",
              fontSize: "16px",
              marginTop: "4px",
              display: "flex",
            }}
          >
            solokit.cloud
          </div>
        </div>
      </div>
    ),
    { width: w, height: h }
  );
}
