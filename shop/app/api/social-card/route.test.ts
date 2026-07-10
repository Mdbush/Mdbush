import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "./route";

function makeRequest(query = "") {
  return new NextRequest(`http://localhost/api/social-card${query}`);
}

describe("GET /api/social-card", () => {
  it("renders a default square tip card", async () => {
    const res = await GET(makeRequest());
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("image/png");
  });

  it("renders a landscape card with custom text and sub line", async () => {
    const res = await GET(
      makeRequest("?format=landscape&text=Stop%20starting%20from%20scratch&sub=solokit.cloud")
    );
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("image/png");
  });

  it("renders the promo and quote variants", async () => {
    for (const type of ["promo", "quote"]) {
      const res = await GET(makeRequest(`?type=${type}`));
      expect(res.status).toBe(200);
    }
  });
});
