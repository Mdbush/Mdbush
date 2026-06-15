import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function verifySignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
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

  const event = JSON.parse(payload);
  const eventName: string = event.meta?.event_name ?? "";

  switch (eventName) {
    case "order_created": {
      const order = event.data?.attributes;
      console.log("New order:", {
        id: event.data?.id,
        email: order?.user_email,
        status: order?.status,
        total: order?.total,
      });
      // TODO: trigger email delivery, update database, etc.
      break;
    }
    case "subscription_created": {
      console.log("New subscription:", event.data?.id);
      break;
    }
    case "subscription_cancelled": {
      console.log("Subscription cancelled:", event.data?.id);
      break;
    }
    default:
      console.log("Unhandled event:", eventName);
  }

  return NextResponse.json({ received: true });
}
