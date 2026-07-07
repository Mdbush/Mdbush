import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const text = searchParams.get("text") ?? "Tools for UAE Freelancers";
    const sub = searchParams.get("sub") ?? "";
    const type = searchParams.get("type") ?? "tip";
    // format: "square" (1080×1080, default) or "landscape" (1200×630)
    const landscape = searchParams.get("format") === "landscape";
    const width = landscape ? 1200 : 1080;
    const height = landscape ? 630 : 1080;
    const pad = landscape ? "64px" : "80px";

    const accentColor =
      type === "promo"
        ? "#ffffff"
        : type === "quote"
        ? "#a3a3a3"
        : "#22c55e";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#030712",
            backgroundImage:
              "radial-gradient(900px 500px at 15% 0%, rgba(16,185,129,0.16), transparent)",
            padding: pad,
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Emerald accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              backgroundImage: "linear-gradient(90deg, #34d399, #10b981)",
            }}
          />
          {/* Top tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#111827",
                border: "1px solid #1f2937",
                borderRadius: "999px",
                padding: "8px 20px",
                color: accentColor,
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {type === "promo"
                ? "OFFER"
                : type === "quote"
                ? "QUOTE"
                : "TIP"}
            </div>
          </div>

          {/* Main text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: "#ffffff",
                fontSize: landscape
                  ? text.length > 70
                    ? "48px"
                    : "60px"
                  : text.length > 60
                  ? "64px"
                  : "80px",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {text}
            </div>
            {sub && (
              <div
                style={{
                  color: "#9ca3af",
                  fontSize: "36px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {sub}
              </div>
            )}
          </div>

          {/* Bottom branding */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              SoloKit
            </div>
            <div
              style={{
                color: "#6b7280",
                fontSize: "24px",
              }}
            >
              solokit.cloud
            </div>
          </div>
        </div>
      ),
      {
        width,
        height,
      }
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return new Response(`Failed to generate image: ${message}`, {
      status: 500,
    });
  }
}
