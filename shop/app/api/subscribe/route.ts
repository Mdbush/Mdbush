import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY not configured");
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
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

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      // 400 with "Contact already exist" is fine
      if (res.status === 400 && body?.message?.includes("already exist")) {
        return NextResponse.json({ ok: true });
      }
      console.error("Brevo error:", body);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
