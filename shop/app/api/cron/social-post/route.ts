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
  {
    text: `10 free AI prompts for freelancers — no email required.\n\nProposal writing, follow-up emails, invoice reminders, LinkedIn bios, scope creep replies, and more.\n\nCopy-paste, fill in the brackets, use immediately.\n\n→ ${SITE_URL}/free\n\n#AI #ChatGPT #Freelance #UAE #SoloKit`,
  },
  {
    text: `Why UAE freelancers stay stuck at AED 10K/month:\n\nFor every billable hour, they spend 2-4 more hours on:\n→ Chasing leads manually\n→ Writing proposals from scratch\n→ Tracking projects in their head\n→ Sending invoice reminders late\n\nThat's 40-80 hours/month of unpaid work.\n\nThe fix isn't working harder. It's systems.\n\nFull breakdown: ${SITE_URL}/blog/freelance-systems-uae\n\n#Freelance #UAE #Productivity #SoloKit`,
  },
  {
    text: `The most important client SOP you're not using:\n\nClient offboarding.\n\nMost freelancers end a project with "that's a wrap" and nothing else.\n\nA proper offboarding SOP:\n✅ Final deliverables checklist\n✅ Testimonial request\n✅ Referral ask\n✅ Follow-up date (3-6 months)\n\nThis single process generates 20-30% of future revenue.\n\nFull guide: ${SITE_URL}/blog/sop-templates-freelancers-online-business\n\n#Freelance #SOP #BusinessSystems #SoloKit`,
  },
  {
    text: `Your freelance proposal is probably about you.\n\nIt shouldn't be.\n\nThe proposals that win:\n→ Start with the client's problem\n→ Show your specific approach to solving it\n→ Give a week-by-week timeline\n→ End with one clear next step\n\nThe proposals that lose:\n→ Start with "I am a freelancer with X years of experience…"\n→ List every tool you use\n→ Say "looking forward to working with you"\n\nFull breakdown (+ 5 common mistakes): ${SITE_URL}/blog/freelance-proposal-tips-uae\n\n#Freelance #Proposals #ClientWin #SoloKit #UAE`,
  },
  {
    text: `Late invoice payments are the #1 cash flow killer for freelancers.\n\nHere's a 4-step follow-up sequence that works:\n\nDay 1 (due date): Friendly reminder\nDay 7: Polite but direct follow-up\nDay 14: Firm, professional escalation\nDay 30: Final notice with consequence\n\nMost clients pay by day 14. The ones who don't are usually testing whether you'll follow up at all.\n\nFull guide + copy-paste email templates: ${SITE_URL}/blog/late-payment-freelance-uae\n\n#Freelance #Invoicing #CashFlow #UAE #SoloKit`,
  },
  {
    text: `The first 72 hours of a project tell you everything.\n\nIf onboarding is messy → the project will be messy.\nIf it's professional → clients trust you from day one.\n\n5-step client onboarding process:\n\n1. Welcome email (within 24 hours of signing)\n2. Kickoff call (within 48-72 hours)\n3. Written project brief — 1 page\n4. Shared workspace for progress tracking\n5. Week 1 check-in\n\nSkipping steps 3-5 is where scope creep comes from.\n\nFull guide + email templates: ${SITE_URL}/blog/client-onboarding-freelance-uae\n\n#Freelance #ClientManagement #UAE #SoloKit`,
  },
  {
    text: `"Freelancing earns more than a salary in the UAE."\n\nOnly if you do the math correctly.\n\nA AED 15,000 salary with full benefits is often worth AED 19,000–22,000 total (housing, health, gratuity, visa).\n\nFreelance overhead costs:\n→ Permit/visa: AED 7,000–15,000/year\n→ Health insurance: AED 3,000–8,000/year\n→ Accounting: AED 3,000–8,000/year\n→ Income gaps: 10–15% buffer needed\n\nBreak-even to replace a AED 20K salary package:\nYou need AED 26,450/month in freelance revenue — before you're "better off."\n\nFull breakdown + calculator: ${SITE_URL}/blog/freelance-vs-salary-uae\n\n#Freelance #UAE #Dubai #SoloKit #Salary`,
  },
  {
    text: `How much does it actually cost to get a freelance visa in the UAE?\n\nRealistic breakdown:\n→ Freelance permit: AED 6,000–8,000/year\n→ Residency visa: AED 3,500–5,000\n→ Medical + Emirates ID: ~AED 800\n→ Business bank account: AED 0–2,000\n\nTotal first year: AED 10,000–16,000\n\nMost popular options:\n• Lowest cost: RAKEZ or Shams\n• Best for media/marketing: Dubai Media City\n• Best for tech: Dubai Silicon Oasis\n\nFull step-by-step guide: ${SITE_URL}/blog/freelance-visa-uae\n\n#UAE #FreelanceVisa #DubaiFreelancer #SoloKit #Freelance`,
  },
  {
    text: `Do freelancers pay tax in the UAE?\n\nShort answer: barely.\n\nHere's the full picture:\n\n✅ Personal income tax: 0% — none, forever\n✅ Corporate tax if revenue < AED 375K/yr: 0% — exempt\n⚠️ Corporate tax if revenue > AED 375K/yr: 9% on profit\n⚠️ VAT: required if UAE clients > AED 375K/yr\n\nMost freelancers in Dubai earn under the threshold and pay absolutely nothing.\n\nBut you MUST register for corporate tax on EmaraTax — even if you owe zero.\n\nFull 2026 tax guide: ${SITE_URL}/blog/freelance-tax-uae\n\n#UAE #FreelancerTax #DubaiFreelancer #TaxFree #SoloKit`,
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
