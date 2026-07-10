import { describe, it, expect } from "vitest";
import { GET } from "./route";

describe("GET /api/og/profile", () => {
  it("renders a PNG avatar", async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("image/png");
  });
});
