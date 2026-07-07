import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Branded app icon (also drives the browser favicon and the PWA manifest icon):
// an emerald tile with a bold white "S" — SoloKit's palette.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981, #059669)",
          color: "#ffffff",
          fontSize: 340,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
