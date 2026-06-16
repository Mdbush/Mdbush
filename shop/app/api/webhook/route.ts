import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

function verifySignature(payload: string, signature: string, secret: string): boolean {
  if (!signature) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  const digestBuf = Buffer.from(digest);
  const sigBuf = Buffer.from(signature);
  if (digestBuf.byteLength !== sigBuf.byteLength) return false;
  return crypto.timingSafeEqual(digestBuf, sigBuf);
}

function getPurchaseEmailHtml(productName: string, orderEmail: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

<tr><td style="background:#111827;padding:32px 40px;text-align:center;">
<p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">SoloKit</p>
<p style="margin:8px 0 0;color:#9ca3af;font-size:13px;">Tools for UAE Freelancers</p>
</td></tr>

<tr><td style="padding:40px;">
<h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#111827;">You're all set! 🎉</h1>
<p style="margin:0 0 8px;color:#374151;font-size:15px;line-height:1.6;">
  Thanks for buying <strong>${productName}</strong>. Check your inbox for the download link from Lemon Squeezy — it arrives within a few minutes.
</p>
<p style="margin:0 0 32px;color:#6b7280;font-size:14px;">Can't find it? Check your spam folder or search for "Lemon Squeezy".</p>

<table width="100%" style="border:1px solid #e5e7eb;border-radius:12px;margin-bottom:28px;">
<tr><td style="background:#f9fafb;padding:16px 20px;border-radius:12px 12px 0 0;border-bottom:1px solid #e5e7eb;">
<p style="margin:0;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">What happens next</p>
</td></tr>
<tr><td style="padding:20px;">
<ol style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
<li>Check your email for the receipt from Lemon Squeezy</li>
<li>Click the download link to access your product</li>
<li>Duplicate to your Notion workspace (or open in Google Docs)</li>
<li>You're running — most people are up and going in under 20 minutes</li>
</ol>
</td></tr>
</table>

<table width="100%" style="background:#111827;border-radius:12px;margin-top:8px;">
<tr><td style="padding:28px 32px;text-align:center;">
<p style="margin:0 0 4px;color:#d1d5db;font-size:13px;font-weight:600;">Complete your toolkit</p>
<p style="margin:0 0 20px;color:#9ca3af;font-size:13px;">All 4 products work together. Save AED 288 on the bundle.</p>
<a href="${SITE_URL}/bundle" style="display:inline-block;background:#ffffff;color:#111827;font-size:14px;font-weight:700;padding:12px 28px;border-radius:10px;text-decoration:none;">View complete bundle →</a>
</td></tr>
</table>

</td></tr>

<tr><td style="padding:24px 40px;border-top:1px solid #f3f4f6;text-align:center;">
<p style="margin:0;color:#9ca3af;font-size:12px;">Questions? Reply to this email or contact <a href="mailto:md.a.bushara@gmail.com" style="color:#6b7280;">md.a.bushara@gmail.com</a>. We respond within 24 hours.</p>
<p style="margin:8px 0 0;color:#9ca3af;font-size:12px;">SoloKit · Dubai, UAE · <a href="${SITE_URL}" style="color:#6b7280;">solokit.cloud</a></p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

async function handlePurchase(email: string, productName: string) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return;

  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "hello@solokit.cloud";

  // Add to customers list (list 3) and tag as buyer
  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [3],
      updateEnabled: true,
      attributes: { SOURCE: "purchase", LAST_PRODUCT: productName },
    }),
  }).catch((e) => console.error("Brevo customer add failed:", e));

  // Send purchase confirmation email
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Mohamed @ SoloKit", email: senderEmail },
      to: [{ email }],
      subject: `Your ${productName} is ready — SoloKit`,
      htmlContent: getPurchaseEmailHtml(productName, email),
    }),
  }).catch((e) => console.error("Purchase email failed:", e));
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
      const data = event.data as Record<string, unknown>;
      const order = data?.attributes as Record<string, unknown>;
      const orderEmail = order?.user_email as string;
      const firstItem = (order?.first_order_item as Record<string, unknown>);
      const productName = (firstItem?.product_name as string) ?? "SoloKit Product";

      console.log("New order:", {
        id: data?.id,
        email: orderEmail,
        status: order?.status,
        total: order?.total,
        product: productName,
      });

      if (orderEmail) {
        await handlePurchase(orderEmail, productName);
      }
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
