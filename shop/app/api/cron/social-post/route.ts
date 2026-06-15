import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";
const FB_PAGE_ID = "1098756576664555";

const posts = [
  {
    text: `5 signs you need a Freelancer CRM:\n\n1. You track clients in your head\n2. Invoices go out late\n3. You forget follow-ups\n4. Projects overlap\n5. Every client = starting from scratch\n\nFix it: ${SITE_URL}/products/freelancer-client-crm\n\n#Freelance #SoloKit #Notion #UAE`,
  },
  {
    text: `Most freelancers use AI wrong.\n\nThey type "write me a proposal" and get garbage back.\n\nThe fix is a better prompt — not a better AI.\n\n200 tested prompts for proposals, emails, content & strategy: ${SITE_URL}/products/ai-prompt-pack-pro\n\n#AI #ChatGPT #Freelance #SoloKit`,
  },
  {
    text: `Your freelance business should run without you.\n\nThat's what SOPs do.\n\n50 ready-to-use Standard Operating Procedures for:\n→ Client onboarding\n→ Content creation\n→ Finance & invoicing\n→ Hiring & delegation\n\nEditable in Notion or Google Docs: ${SITE_URL}/products/sop-starter-pack\n\n#SOPs #Freelance #SoloKit #Productivity`,
  },
  {
    text: `The difference between a $2k/month freelancer and a $10k/month freelancer:\n\nSystems.\n\nNot skills. Not experience. Not luck.\n\nJust repeatable systems that let you work faster, charge more, and stress less.\n\nSoloKit gives you those systems, ready to plug in: ${SITE_URL}\n\n#Freelance #Solopreneur #SoloKit #UAE`,
  },
  {
    text: `Running your entire business from WhatsApp chats and sticky notes?\n\nThere's a better way.\n\nThe Solopreneur OS puts everything in one Notion workspace:\n✅ Revenue dashboard\n✅ 90-day goal planner\n✅ Content calendar\n✅ Daily planning system\n✅ Project pipeline\n\nAED 249 → ${SITE_URL}/products/solopreneur-os\n\n#Notion #Solopreneur #SoloKit #Productivity`,
  },
  {
    text: `Freelancers in the UAE: you're undercharging.\n\nNot because your work isn't worth more — because your process looks unprofessional.\n\nProper CRM + proposal templates + SOPs = clients take you more seriously = higher rates.\n\nAll three, bundled: ${SITE_URL}\n\n#Freelance #UAE #Dubai #SoloKit`,
  },
];

function getPostIndex(): number {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const dayOfWeek = new Date().getDay();
  return (weekNumber * 3 + Math.floor(dayOfWeek / 2)) % posts.length;
}

async function postToLinkedIn(text: string, token: string): Promise<void> {
  const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!profileRes.ok) throw new Error("LinkedIn profile fetch failed");
  const { sub: authorId } = await profileRes.json();

  const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify({
      author: `urn:li:person:${authorId}`,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: { text },
          shareMediaCategory: "NONE",
        },
      },
      visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`LinkedIn post failed: ${err}`);
  }
}

async function postToFacebook(text: string, token: string): Promise<void> {
  const res = await fetch(
    `https://graph.facebook.com/v19.0/${FB_PAGE_ID}/feed`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, access_token: token }),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Facebook post failed: ${err}`);
  }
}

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const linkedInToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const facebookToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!linkedInToken && !facebookToken) {
    return NextResponse.json({ skipped: true, reason: "No social tokens configured" });
  }

  const post = posts[getPostIndex()];
  const results: Record<string, string> = {};

  if (linkedInToken) {
    try {
      await postToLinkedIn(post.text, linkedInToken);
      results.linkedin = "posted";
    } catch (e) {
      results.linkedin = `failed: ${e}`;
    }
  }

  if (facebookToken) {
    try {
      await postToFacebook(post.text, facebookToken);
      results.facebook = "posted";
    } catch (e) {
      results.facebook = `failed: ${e}`;
    }
  }

  return NextResponse.json({ ok: true, postIndex: getPostIndex(), results });
}
