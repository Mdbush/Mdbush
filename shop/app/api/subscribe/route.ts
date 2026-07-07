import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const welcomeHtml = () => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

<!-- Header -->
<tr><td style="background:#111827;padding:32px 40px;text-align:center;">
<p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">SoloKit</p>
<p style="margin:8px 0 0;color:#9ca3af;font-size:13px;">Tools for UAE Freelancers</p>
</td></tr>

<!-- Body -->
<tr><td style="padding:40px;">
<h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#111827;">Here are your 10 free AI prompts</h1>
<p style="margin:0 0 32px;color:#6b7280;font-size:15px;line-height:1.6;">Copy, paste, and fill in the brackets. Works with ChatGPT, Claude, and Gemini.</p>

${[
  { num: 1, cat: "Client Proposal", prompt: "Write a professional project proposal for a [type of project] for [client industry]. Include: project overview, deliverables, timeline (X weeks), investment of [price], and a clear call to action. Tone: confident and friendly." },
  { num: 2, cat: "Follow-Up Email", prompt: "Write a follow-up email to a client who hasn't responded to my proposal in 5 days. Keep it short, friendly, and not pushy. End with a simple yes/no question to re-open the conversation." },
  { num: 3, cat: "Invoice Reminder", prompt: "Write a polite but firm overdue invoice reminder email. Invoice is [X] days overdue. Amount: [AED]. Keep it professional, mention consequences of further delay without sounding aggressive." },
  { num: 4, cat: "LinkedIn Bio", prompt: "Write a compelling LinkedIn About section for a freelance [your role] who specializes in [your niche] and works with [target clients]. Highlight results, not just skills. End with a clear CTA. Max 300 words." },
  { num: 5, cat: "Content Ideas", prompt: "Generate 10 LinkedIn post ideas for a freelance [role] targeting [audience]. Each idea should provide value, show expertise, and be shareable. Format: hook + one-liner description." },
  { num: 6, cat: "Client Onboarding", prompt: "Write a client onboarding welcome email for a new [project type] project. Include: what they can expect, what you need from them this week, and how to contact you. Warm and professional tone." },
  { num: 7, cat: "Service Description", prompt: "Write a punchy service description for my [service] package priced at [price]. Target audience: [who]. Format: 1 headline, 3 benefit bullets, 1 sentence who it's for, 1 CTA. No jargon." },
  { num: 8, cat: "Scope Creep Reply", prompt: "Write a professional email response to a client requesting work outside the original project scope. Be firm but friendly. Acknowledge the request, explain it falls outside scope, and offer a clear path to add it as paid work." },
  { num: 9, cat: "Weekly Status Update", prompt: "Write a brief weekly project status update email to a client. This week's progress: [list]. Next week's plan: [list]. Any blockers or decisions needed: [list]. Keep it to 5 bullet points max." },
  { num: 10, cat: "Testimonial Request", prompt: "Write a friendly email asking a happy client for a testimonial or Google review. Make it easy for them — suggest 3 specific questions they could answer. Keep it short and end with a direct link placeholder." },
].map(p => `
<table width="100%" style="margin-bottom:20px;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
<tr><td style="background:#f9fafb;padding:10px 16px;border-bottom:1px solid #e5e7eb;">
<span style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Prompt #${p.num} · ${p.cat}</span>
</td></tr>
<tr><td style="padding:14px 16px;">
<p style="margin:0;font-size:13px;color:#374151;line-height:1.6;font-family:monospace;">${p.prompt}</p>
</td></tr>
</table>`).join("")}

<!-- CTA -->
<table width="100%" style="background:#111827;border-radius:12px;margin-top:8px;">
<tr><td style="padding:28px 32px;text-align:center;">
<p style="margin:0 0 4px;color:#d1d5db;font-size:13px;font-weight:600;">Want 190 more prompts?</p>
<p style="margin:0 0 20px;color:#9ca3af;font-size:13px;">200 tested prompts for proposals, emails, content &amp; strategy.</p>
<a href="${SITE_URL}/products/ai-prompt-pack-pro" style="display:inline-block;background:#ffffff;color:#111827;font-size:14px;font-weight:700;padding:12px 28px;border-radius:10px;text-decoration:none;">Get the full pack — AED 109 →</a>
</td></tr>
</table>

</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 40px;border-top:1px solid #f3f4f6;text-align:center;">
<p style="margin:0;color:#9ca3af;font-size:12px;">SoloKit · Tools for UAE Freelancers · <a href="${SITE_URL}" style="color:#6b7280;">solokit.cloud</a></p>
<p style="margin:8px 0 0;color:#d1d5db;font-size:11px;">You subscribed at solokit.cloud. No spam, ever.</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

// Simple in-memory rate limiter — 5 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const { email } = await request.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY not configured");
      return NextResponse.json({ ok: true });
    }

    // Add contact to list
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: true,
        attributes: { SOURCE: "solokit-free-prompts" },
      }),
    });

    if (!contactRes.ok) {
      const body = await contactRes.json().catch(() => ({}));
      if (contactRes.status === 400 && body?.message?.includes("already exist")) {
        // Still send welcome email to returning subscribers
      } else {
        console.error("Brevo contact error:", body);
        return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
      }
    }

    // Send welcome email with prompts
    const senderEmail = process.env.BREVO_SENDER_EMAIL ?? "hello@solokit.cloud";
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "SoloKit", email: senderEmail },
        to: [{ email }],
        subject: "Your 10 free AI prompts (copy & paste ready)",
        htmlContent: welcomeHtml(),
      }),
    }).catch((e) => {
      console.error("Welcome email network error:", e);
      return null;
    });

    if (!emailRes?.ok) {
      const errBody = await emailRes?.json().catch(() => ({}));
      console.error("Welcome email send failed:", errBody);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
