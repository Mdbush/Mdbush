import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { socialPosts } from "@/lib/social-queue";
import { GET } from "./route";

const CRON_SECRET = "cron-secret";

// The route picks a post from the queue by days-since-epoch, so an unpinned
// clock makes tests exercise a different post (and different image/no-image
// branches) depending on the day they run. Pin to a fixed even epoch-day so
// the selected index is deterministic: day 20_000 → index 20_000 % length.
const DAY_MS = 24 * 60 * 60 * 1000;
const EVEN_DAY = 20_000 * DAY_MS;
const ODD_DAY = 20_001 * DAY_MS;

function makeRequest(auth?: string) {
  const headers = new Headers();
  if (auth !== undefined) headers.set("authorization", auth);
  return new Request("http://localhost/api/cron/social-post", { headers });
}

beforeEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.useFakeTimers({ now: EVEN_DAY, toFake: ["Date"] });
  vi.stubEnv("CRON_SECRET", CRON_SECRET);
  vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "");
  vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "");
});

afterEach(() => {
  vi.useRealTimers();
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

  it("reports a failure result when the LinkedIn profile fetch fails", async () => {
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");
    const fetchMock = vi.fn().mockResolvedValue({ ok: false, text: async () => "denied" });
    vi.stubGlobal("fetch", fetchMock);

    const res = await GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body.results.linkedin).toContain("failed");
  });

  it("returns the exact postIndex for the pinned day", async () => {
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, text: async () => "" }));
    const res = await GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();
    expect(body.postIndex).toBe(20_000 % socialPosts.length);
    expect(body.hasImage).toBe(Boolean(socialPosts[body.postIndex].imageUrl));
  });
});

// None of the hand-authored seed posts carry an imageUrl — the image pipeline
// only runs for agent-appended posts — so these tests swap in a controlled
// two-post queue (text at index 0, image at index 1) and pick the post via the
// pinned epoch-day parity.
describe("GET /api/cron/social-post with an image post in rotation", () => {
  const TEXT_POST = { text: "plain text post" };
  const IMAGE_POST = {
    text: "post with card",
    imageUrl: "https://solokit.cloud/api/social-card?title=test",
  };

  async function loadRouteWithMockedQueue() {
    vi.resetModules();
    vi.doMock("@/lib/social-queue", () => ({ socialPosts: [TEXT_POST, IMAGE_POST] }));
    return await import("./route");
  }

  afterEach(() => {
    vi.doUnmock("@/lib/social-queue");
    vi.resetModules();
  });

  it("posts a Facebook photo (image + caption) for an image post", async () => {
    vi.setSystemTime(ODD_DAY); // index 1 → IMAGE_POST
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => "" });
    vi.stubGlobal("fetch", fetchMock);

    const route = await loadRouteWithMockedQueue();
    const res = await route.GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();

    expect(body.results.facebook).toBe("posted");
    expect(body.hasImage).toBe(true);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toContain("/photos");
    const sent = JSON.parse(init.body);
    expect(sent.url).toBe(IMAGE_POST.imageUrl);
    expect(sent.caption).toBe(IMAGE_POST.text);
  });

  it("posts to the Facebook feed (message only) for a text post", async () => {
    // EVEN_DAY from the outer beforeEach → index 0 → TEXT_POST
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => "" });
    vi.stubGlobal("fetch", fetchMock);

    const route = await loadRouteWithMockedQueue();
    const res = await route.GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();

    expect(body.results.facebook).toBe("posted");
    expect(body.hasImage).toBe(false);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toContain("/feed");
    const sent = JSON.parse(init.body);
    expect(sent.message).toBe(TEXT_POST.text);
    expect(sent.url).toBeUndefined();
  });

  it("uploads the image to LinkedIn and publishes an IMAGE share", async () => {
    vi.setSystemTime(ODD_DAY);
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");

    const ASSET_URN = "urn:li:digitalmediaAsset:C123";
    const UPLOAD_URL = "https://api.linkedin.com/media-upload/C123";
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      if (url.includes("/userinfo")) {
        return { ok: true, json: async () => ({ sub: "abc123" }) };
      }
      if (url.includes("registerUpload")) {
        return {
          ok: true,
          json: async () => ({
            value: {
              asset: ASSET_URN,
              uploadMechanism: {
                "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest": {
                  uploadUrl: UPLOAD_URL,
                },
              },
            },
          }),
        };
      }
      if (url === IMAGE_POST.imageUrl) {
        return { ok: true, arrayBuffer: async () => new ArrayBuffer(8) };
      }
      if (url === UPLOAD_URL) {
        expect(init?.method).toBe("POST");
        return { ok: true };
      }
      return { ok: true, text: async () => "" };
    });
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const route = await loadRouteWithMockedQueue();
    const res = await route.GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();

    expect(body.results.linkedin).toBe("posted");
    const uploadCall = fetchMock.mock.calls.find((c) => c[0] === UPLOAD_URL);
    expect(uploadCall).toBeDefined();

    const ugcCall = fetchMock.mock.calls.find((c) => String(c[0]).includes("/ugcPosts"));
    expect(ugcCall).toBeDefined();
    const share = JSON.parse(ugcCall![1]!.body as string).specificContent[
      "com.linkedin.ugc.ShareContent"
    ];
    expect(share.shareMediaCategory).toBe("IMAGE");
    expect(share.media).toEqual([{ status: "READY", media: ASSET_URN }]);
    expect(share.shareCommentary.text).toBe(IMAGE_POST.text);
  });

  it("falls back to a text-only LinkedIn share when the image upload fails", async () => {
    vi.setSystemTime(ODD_DAY);
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");

    const fetchMock = vi.fn<(url: string, init?: RequestInit) => Promise<unknown>>(async (url) => {
      if (url.includes("/userinfo")) {
        return { ok: true, json: async () => ({ sub: "abc123" }) };
      }
      if (url.includes("registerUpload")) {
        return { ok: false, text: async () => "quota exceeded" };
      }
      return { ok: true, text: async () => "" };
    });
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const route = await loadRouteWithMockedQueue();
    const res = await route.GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();

    // A transient image problem must never block the day's post.
    expect(body.results.linkedin).toBe("posted");
    const ugcCall = fetchMock.mock.calls.find((c) => String(c[0]).includes("/ugcPosts"));
    expect(ugcCall).toBeDefined();
    const share = JSON.parse(ugcCall![1]!.body as string).specificContent[
      "com.linkedin.ugc.ShareContent"
    ];
    expect(share.shareMediaCategory).toBe("NONE");
    expect(share.media).toBeUndefined();
  });

  it("falls back to a text-only LinkedIn share when the image bytes can't be fetched", async () => {
    vi.setSystemTime(ODD_DAY);
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");

    const fetchMock = vi.fn<(url: string, init?: RequestInit) => Promise<unknown>>(async (url) => {
      if (url.includes("/userinfo")) {
        return { ok: true, json: async () => ({ sub: "abc123" }) };
      }
      if (url.includes("registerUpload")) {
        return {
          ok: true,
          json: async () => ({
            value: {
              asset: "urn:li:digitalmediaAsset:C123",
              uploadMechanism: {
                "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest": {
                  uploadUrl: "https://api.linkedin.com/media-upload/C123",
                },
              },
            },
          }),
        };
      }
      if (url === IMAGE_POST.imageUrl) {
        return { ok: false, status: 404 };
      }
      return { ok: true, text: async () => "" };
    });
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const route = await loadRouteWithMockedQueue();
    const res = await route.GET(makeRequest(`Bearer ${CRON_SECRET}`));
    const body = await res.json();

    expect(body.results.linkedin).toBe("posted");
    const share = JSON.parse(
      fetchMock.mock.calls.find((c) => String(c[0]).includes("/ugcPosts"))![1]!.body as string
    ).specificContent["com.linkedin.ugc.ShareContent"];
    expect(share.shareMediaCategory).toBe("NONE");
  });
});
