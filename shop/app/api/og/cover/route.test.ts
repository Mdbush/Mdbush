import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "./route";

// The image body renders lazily; asserting status + content-type exercises all
// the param parsing and JSX construction without rasterizing the PNG.
describe("GET /api/og/cover", () => {
  it("renders a PNG for each supported platform", async () => {
    for (const p of ["li", "fb", "tw"]) {
      const res = await GET(new NextRequest(`http://localhost/api/og/cover?p=${p}`));
      expect(res.status).toBe(200);
      expect(res.headers.get("content-type")).toBe("image/png");
    }
  });

  it("falls back to Facebook dimensions for an unknown platform", async () => {
    const res = await GET(new NextRequest("http://localhost/api/og/cover?p=bogus"));
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("image/png");
  });

  it("defaults to Facebook when no platform is given", async () => {
    const res = await GET(new NextRequest("http://localhost/api/og/cover"));
    expect(res.status).toBe(200);
  });
});
