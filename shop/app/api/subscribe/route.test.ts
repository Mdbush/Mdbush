import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { POST } from "./route";

let ipCounter = 0;
function makeRequest(body: unknown, ip?: string) {
  const clientIp = ip ?? `10.0.0.${++ipCounter}`;
  return new Request("http://localhost/api/subscribe", {
    method: "POST",
    headers: { "x-forwarded-for": clientIp, "content-type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

beforeEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.stubEnv("BREVO_API_KEY", "");
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("POST /api/subscribe", () => {
  it("rejects an invalid email with 400", async () => {
    for (const bad of ["", "not-an-email", "foo@bar", "a@b.c", "@example.com", "x y@example.com"]) {
      const res = await POST(makeRequest({ email: bad }));
      expect(res.status, `expected 400 for "${bad}"`).toBe(400);
      expect(await res.json()).toEqual({ error: "Invalid email" });
    }
  });

  it("rejects a body with no email field", async () => {
    const res = await POST(makeRequest({}));
    expect(res.status).toBe(400);
  });

  it("returns 500 on malformed JSON", async () => {
    const res = await POST(makeRequest("{not json"));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Server error" });
  });

  it("accepts a valid email and no-ops when BREVO_API_KEY is unset", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const res = await POST(makeRequest({ email: "user@example.com" }));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rate-limits after 5 requests from the same IP within the window", async () => {
    const ip = "203.0.113.7";
    const statuses: number[] = [];
    for (let i = 0; i < 6; i++) {
      const res = await POST(makeRequest({ email: "user@example.com" }, ip));
      statuses.push(res.status);
    }
    // First 5 pass validation (200), the 6th is throttled (429).
    expect(statuses.slice(0, 5)).toEqual([200, 200, 200, 200, 200]);
    expect(statuses[5]).toBe(429);
  });

  it("adds the contact to Brevo list 2 and sends the welcome email", async () => {
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest({ email: "new@example.com" }));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    const [contactUrl, contactInit] = fetchMock.mock.calls[0];
    expect(contactUrl).toBe("https://api.brevo.com/v3/contacts");
    expect(JSON.parse(contactInit.body as string)).toMatchObject({
      email: "new@example.com",
      listIds: [2],
    });
    expect(fetchMock.mock.calls[1][0]).toBe("https://api.brevo.com/v3/smtp/email");
  });

  it("still sends the welcome email when the contact already exists", async () => {
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: false, status: 400, json: async () => ({ message: "Contact already exist" }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({}) });
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest({ email: "returning@example.com" }));
    expect(res.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("returns 500 when the Brevo contact call fails unexpectedly", async () => {
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: false, status: 500, json: async () => ({ message: "server error" }) });
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(makeRequest({ email: "fail@example.com" }));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Subscription failed" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
