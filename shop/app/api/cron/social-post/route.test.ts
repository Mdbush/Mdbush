import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { GET } from "./route";

const CRON_SECRET = "cron-secret";

function makeRequest(auth?: string) {
  const headers = new Headers();
  if (auth !== undefined) headers.set("authorization", auth);
  return new Request("http://localhost/api/cron/social-post", { headers });
}

beforeEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.stubEnv("CRON_SECRET", CRON_SECRET);
  vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "");
  vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "");
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("GET /api/cron/social-post", () => {
  it("returns 401 without a matching bearer token", async () => {
    expect((await GET(makeRequest())).status).toBe(401);
    expect((await GET(makeRequest("Bearer wrong"))).status).toBe(401);
  });

  it("skips cleanly when no social tokens are configured", async () => {
    const res = await GET(makeRequest(`Bearer ${CRON_SECRET}`));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      skipped: true,
      reason: "No social tokens configured",
    });
  });

  it("posts to Facebook when only the Facebook token is set", async () => {
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => "" });
    vi.stubGlobal("fetch", fetchMock);

    const res = await GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(body.results.facebook).toBe("posted");
    expect(body.results.linkedin).toBeUndefined();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toContain("graph.facebook.com");
  });

  it("reports a failure result when Facebook rejects the post", async () => {
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    const fetchMock = vi.fn().mockResolvedValue({ ok: false, text: async () => "boom" });
    vi.stubGlobal("fetch", fetchMock);

    const res = await GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body.results.facebook).toContain("failed");
  });

  it("posts a text share to LinkedIn when only the LinkedIn token is set", async () => {
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/userinfo")) {
        return { ok: true, json: async () => ({ sub: "abc123" }) };
      }
      return { ok: true, text: async () => "" };
    });
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const res = await GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.results.linkedin).toBe("posted");
    const ugcCall = fetchMock.mock.calls.find((c) => String(c[0]).includes("/ugcPosts"));
    expect(ugcCall).toBeDefined();
  });

  it("returns a valid, in-range postIndex", async () => {
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, text: async () => "" }));
    const res = await GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();
    expect(typeof body.postIndex).toBe("number");
    expect(body.postIndex).toBeGreaterThanOrEqual(0);
    expect(typeof body.hasImage).toBe("boolean");
  });
});
