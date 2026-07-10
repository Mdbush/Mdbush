import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import crypto from "crypto";
import type { NextRequest } from "next/server";
import { POST } from "./route";

const SECRET = "test-webhook-secret";

function sign(payload: string, secret = SECRET): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function makeRequest(payload: string, signature?: string): NextRequest {
  const headers = new Headers();
  if (signature !== undefined) headers.set("x-signature", signature);
  return new Request("http://localhost/api/webhook", {
    method: "POST",
    headers,
    body: payload,
  }) as unknown as NextRequest;
}

beforeEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
  vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", SECRET);
  vi.stubEnv("BREVO_API_KEY", "");
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("POST /api/webhook", () => {
  it("returns 500 when the webhook secret is not configured", async () => {
    vi.stubEnv("LEMONSQUEEZY_WEBHOOK_SECRET", "");
    const res = await POST(makeRequest("{}", sign("{}")));
    expect(res.status).toBe(500);
    expect(await res.json()).toEqual({ error: "Webhook secret not configured" });
  });

  it("returns 401 when the x-signature header is missing", async () => {
    const res = await POST(makeRequest("{}"));
    expect(res.status).toBe(401);
    expect(await res.json()).toEqual({ error: "Invalid signature" });
  });

  it("returns 401 when the signature does not match", async () => {
    const payload = JSON.stringify({ meta: { event_name: "order_created" } });
    const res = await POST(makeRequest(payload, sign(payload, "wrong-secret")));
    expect(res.status).toBe(401);
  });

  it("returns 401 when signature length differs (guards timingSafeEqual)", async () => {
    const payload = "{}";
    const res = await POST(makeRequest(payload, "deadbeef"));
    expect(res.status).toBe(401);
  });

  it("accepts a valid signature and acknowledges receipt", async () => {
    const payload = JSON.stringify({ meta: { event_name: "subscription_created" }, data: { id: "5" } });
    const res = await POST(makeRequest(payload, sign(payload)));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ received: true });
  });

  it("acknowledges subscription_cancelled events", async () => {
    const payload = JSON.stringify({ meta: { event_name: "subscription_cancelled" }, data: { id: "7" } });
    const res = await POST(makeRequest(payload, sign(payload)));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ received: true });
  });

  it("acknowledges unknown event names without acting on them", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const payload = JSON.stringify({ meta: { event_name: "refund_created" }, data: { id: "8" } });
    const res = await POST(makeRequest(payload, sign(payload)));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ received: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("acknowledges even when the body is not valid JSON", async () => {
    const payload = "not-json";
    const res = await POST(makeRequest(payload, sign(payload)));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ received: true });
  });

  it("does not call Brevo on order_created when BREVO_API_KEY is unset", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const payload = JSON.stringify({
      meta: { event_name: "order_created" },
      data: { id: "9", attributes: { user_email: "buyer@example.com", first_order_item: { product_name: "SOP Starter Pack" } } },
    });
    const res = await POST(makeRequest(payload, sign(payload)));
    expect(res.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("adds the buyer to Brevo and emails them on order_created", async () => {
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
    vi.stubGlobal("fetch", fetchMock);

    const payload = JSON.stringify({
      meta: { event_name: "order_created" },
      data: { id: "9", attributes: { user_email: "buyer@example.com", first_order_item: { product_name: "SOP Starter Pack" } } },
    });
    const res = await POST(makeRequest(payload, sign(payload)));

    expect(res.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    const [contactUrl, contactInit] = fetchMock.mock.calls[0];
    expect(contactUrl).toBe("https://api.brevo.com/v3/contacts");
    expect(JSON.parse(contactInit.body as string)).toMatchObject({
      email: "buyer@example.com",
      listIds: [3],
    });
    const [emailUrl, emailInit] = fetchMock.mock.calls[1];
    expect(emailUrl).toBe("https://api.brevo.com/v3/smtp/email");
    expect(emailInit.body as string).toContain("SOP Starter Pack");
  });

  it("skips Brevo calls on order_created when no email is present", async () => {
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
    vi.stubGlobal("fetch", fetchMock);
    const payload = JSON.stringify({
      meta: { event_name: "order_created" },
      data: { id: "9", attributes: {} },
    });
    const res = await POST(makeRequest(payload, sign(payload)));
    expect(res.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
