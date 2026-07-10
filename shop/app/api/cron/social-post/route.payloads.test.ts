import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { GET } from "./route";

// Payload-shape tests for the LinkedIn/Facebook publishing calls. The queue is
// mocked so both the text-only and image branches are reachable regardless of
// what the live rotation contains, and the clock is frozen so getPostIndex()
// picks a known post: day 0 → text-only, day 1 → image.
vi.mock("@/lib/social-queue", () => ({
  socialPosts: [
    { text: "Text-only post" },
    { text: "Image post", imageUrl: "https://solokit.cloud/api/social-card?text=hi" },
  ],
}));

const CRON_SECRET = "cron-secret";
const DAY_MS = 24 * 60 * 60 * 1000;
const IMAGE_URL = "https://solokit.cloud/api/social-card?text=hi";

function makeRequest() {
  const headers = new Headers();
  headers.set("authorization", `Bearer ${CRON_SECRET}`);
  return new Request("http://localhost/api/cron/social-post", { headers });
}

function pickTextOnlyPost() {
  vi.setSystemTime(new Date(0));
}

function pickImagePost() {
  vi.setSystemTime(new Date(DAY_MS));
}

beforeEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.useFakeTimers();
  vi.stubEnv("CRON_SECRET", CRON_SECRET);
  vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "");
  vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "");
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe("Facebook payloads", () => {
  it("posts a text-only post to the page feed", async () => {
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    pickTextOnlyPost();
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => "" });
    vi.stubGlobal("fetch", fetchMock);

    const body = await (await GET(makeRequest())).json();

    expect(body.results.facebook).toBe("posted");
    const [url, init] = fetchMock.mock.calls[0];
    expect(String(url)).toMatch(/graph\.facebook\.com\/v19\.0\/\d+\/feed$/);
    expect(JSON.parse(init.body as string)).toEqual({
      message: "Text-only post",
      access_token: "fb-token",
    });
  });

  it("posts an image post as a photo with the copy as caption", async () => {
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    pickImagePost();
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => "" });
    vi.stubGlobal("fetch", fetchMock);

    const body = await (await GET(makeRequest())).json();

    expect(body.hasImage).toBe(true);
    expect(body.results.facebook).toBe("posted");
    const [url, init] = fetchMock.mock.calls[0];
    expect(String(url)).toMatch(/\/photos$/);
    expect(JSON.parse(init.body as string)).toEqual({
      url: IMAGE_URL,
      caption: "Image post",
      access_token: "fb-token",
    });
  });
});

describe("LinkedIn payloads", () => {
  function linkedInFetchMock() {
    return vi.fn(async (...[url]: [url: string | URL, init?: RequestInit]) => {
      const u = String(url);
      if (u.includes("/userinfo")) {
        return { ok: true, json: async () => ({ sub: "abc123" }) };
      }
      if (u.includes("registerUpload")) {
        return {
          ok: true,
          text: async () => "",
          json: async () => ({
            value: {
              asset: "urn:li:digitalmediaAsset:img-1",
              uploadMechanism: {
                "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest": {
                  uploadUrl: "https://upload.linkedin.example/binary",
                },
              },
            },
          }),
        };
      }
      if (u === IMAGE_URL) {
        return { ok: true, arrayBuffer: async () => new ArrayBuffer(8) };
      }
      // binary upload + ugcPosts
      return { ok: true, text: async () => "" };
    });
  }

  it("publishes a text-only share with the expected ugcPosts body", async () => {
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");
    pickTextOnlyPost();
    const fetchMock = linkedInFetchMock();
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const body = await (await GET(makeRequest())).json();

    expect(body.results.linkedin).toBe("posted");
    const ugcCall = fetchMock.mock.calls.find((c) => String(c[0]).includes("/ugcPosts"));
    expect(ugcCall).toBeDefined();
    const init = ugcCall![1] as RequestInit;
    expect((init.headers as Record<string, string>)["X-Restli-Protocol-Version"]).toBe("2.0.0");
    expect(JSON.parse(init.body as string)).toEqual({
      author: "urn:li:person:abc123",
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: { text: "Text-only post" },
          shareMediaCategory: "NONE",
        },
      },
      visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
    });
  });

  it("uploads the image and publishes an IMAGE share referencing the asset", async () => {
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");
    pickImagePost();
    const fetchMock = linkedInFetchMock();
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const body = await (await GET(makeRequest())).json();

    expect(body.results.linkedin).toBe("posted");
    // register → fetch image bytes → binary upload → ugcPosts
    const calledUrls = fetchMock.mock.calls.map((c) => String(c[0]));
    expect(calledUrls.some((u) => u.includes("registerUpload"))).toBe(true);
    expect(calledUrls).toContain(IMAGE_URL);
    expect(calledUrls).toContain("https://upload.linkedin.example/binary");
    const ugcCall = fetchMock.mock.calls.find((c) => String(c[0]).includes("/ugcPosts"));
    const share = JSON.parse((ugcCall![1] as RequestInit).body as string).specificContent[
      "com.linkedin.ugc.ShareContent"
    ];
    expect(share.shareMediaCategory).toBe("IMAGE");
    expect(share.media).toEqual([{ status: "READY", media: "urn:li:digitalmediaAsset:img-1" }]);
  });

  it("falls back to a text-only share when the image upload fails", async () => {
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");
    pickImagePost();
    const fetchMock = vi.fn(async (...[url]: [url: string | URL, init?: RequestInit]) => {
      const u = String(url);
      if (u.includes("/userinfo")) {
        return { ok: true, json: async () => ({ sub: "abc123" }) };
      }
      if (u.includes("registerUpload")) {
        return { ok: false, text: async () => "denied" };
      }
      return { ok: true, text: async () => "" };
    });
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const body = await (await GET(makeRequest())).json();

    expect(body.results.linkedin).toBe("posted");
    const ugcCall = fetchMock.mock.calls.find((c) => String(c[0]).includes("/ugcPosts"));
    const share = JSON.parse((ugcCall![1] as RequestInit).body as string).specificContent[
      "com.linkedin.ugc.ShareContent"
    ];
    expect(share.shareMediaCategory).toBe("NONE");
    expect(share.media).toBeUndefined();
  });
});

describe("partial failure", () => {
  it("still posts to Facebook when LinkedIn fails, and reports both results", async () => {
    vi.stubEnv("LINKEDIN_ACCESS_TOKEN", "li-token");
    vi.stubEnv("FACEBOOK_PAGE_ACCESS_TOKEN", "fb-token");
    pickTextOnlyPost();
    const fetchMock = vi.fn(async (url: string | URL) => {
      if (String(url).includes("/userinfo")) {
        return { ok: false, json: async () => ({}) };
      }
      return { ok: true, text: async () => "" };
    });
    vi.stubGlobal("fetch", fetchMock as unknown as typeof fetch);

    const res = await GET(makeRequest());
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(body.results.linkedin).toContain("failed");
    expect(body.results.facebook).toBe("posted");
  });
});
