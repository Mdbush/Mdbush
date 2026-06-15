import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const dc = process.env.MAILCHIMP_DC ?? "us1";

    if (!apiKey || !listId) {
      console.error("Mailchimp env vars not configured");
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: ["solokit-free-prompts"],
        }),
      }
    );

    if (!res.ok) {
      const body = await res.json();
      if (body.title === "Member Exists") {
        return NextResponse.json({ ok: true });
      }
      console.error("Mailchimp error:", body);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
