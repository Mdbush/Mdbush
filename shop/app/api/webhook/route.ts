import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function verifySignature(payload: string, signature: string, secret: string): boolean {
  if (!signature) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  const digestBuf = Buffer.from(digest);
  const sigBuf = Buffer.from(signature);
  if (digestBuf.byteLength !== sigBuf.byteLength) return false;
  return crypto.timingSafeEqual(digestBuf, sigBuf);
}

export async function POST(request: NextRequest) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const signature = request.headers.get("x-signature") ?? "";
  const payload = await request.text();

  if (!verifySignature(payload, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(payload);
  } catch {
    return NextResponse.json({ received: true });
  }
  const eventName: string = (event.meta as Record<string, unknown>)?.event_name as string ?? "";

  switch (eventName) {
    case "order_created": {
      const order = (event.data as Record<string, unknown>)?.attributes as Record<string, unknown>;
      console.log("New order:", {
        id: (event.data as Record<string, unknown>)?.id,
        email: order?.user_email,
        status: order?.status,
        total: order?.total,
      });
      // TODO: trigger email delivery, update database, etc.
      break;
    }
    case "subscription_created": {
      console.log("New subscription:", (event.data as Record<string, unknown>)?.id);
      break;
    }
    case "subscription_cancelled": {
      console.log("Subscription cancelled:", (event.data as Record<string, unknown>)?.id);
      break;
    }
    default:
      console.log("Unhandled event:", eventName);
  }

  return NextResponse.json({ received: true });
}
