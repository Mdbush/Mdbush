import { ImageResponse } from "next/og";

export const runtime = "edge";

// 800×800 profile avatar — upload to LinkedIn, Facebook, Instagram
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030712",
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            width: "680px",
            height: "680px",
            borderRadius: "999px",
            backgroundColor: "#111827",
            border: "3px solid #1f2937",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* S mark */}
          <div
            style={{
              color: "#ffffff",
              fontSize: "260px",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.06em",
              marginBottom: "-20px",
            }}
          >
            S
          </div>
          {/* Wordmark */}
          <div
            style={{
              color: "#4b5563",
              fontSize: "56px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            SOLOKIT
          </div>
        </div>
      </div>
    ),
    { width: 800, height: 800 }
  );
}
