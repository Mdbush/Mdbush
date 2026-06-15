import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";
const FB_PAGE_ID = "1098756576664555";

// Educational, expert-voice posts — not ads
const posts = [
  // ── TIPS & INSIGHTS ──
  {
    text: `Most UAE freelancers lose 2-3 hours every day on things that should take 20 minutes.

Not because they're slow. Because they have no system.

The three biggest time drains I see:
→ Manually tracking who owes money
→ Writing proposals from scratch
→ Re-explaining the same onboarding steps

Each one is a 1-hour fix. Build the system once, save the hour forever.

What's the one thing in your business you're still doing manually?

#FreelanceUAE #Productivity #Solopreneur #Dubai`,
  },
  {
    text: `Honest truth about freelancing in Dubai:

Your rate is not your income.

AED 300/hour sounds great until you account for:
→ 2 weeks unpaid vacation = AED 0
→ Health insurance: ~AED 400/month
→ Freelance visa renewal: ~AED 600/month averaged
→ Slow months: 15% buffer minimum

To take home AED 20K/month you need to bill ~AED 25,600/month.

That's the number most people ignore when they set rates.

#FreelanceUAE #FreelanceTips #DubaiFreelancer #SoloKit`,
  },
  {
    text: `Stop pitching services. Start selling outcomes.

"I design websites" → weak
"I build websites that convert visitors into clients" → stronger
"I built a landing page for a Dubai consultant that booked 8 clients in the first month" → wins

Clients don't buy what you do. They buy what they get.

Every time you update your proposal, ask: "Does this describe the result, or just the task?"

#FreelanceTips #UAE #ClientAcquisition #SoloKit`,
  },
  {
    text: `I've seen UAE freelancers get paid in 1 day and in 6 months.

The difference? The contract.

The 3 clauses that get you paid faster:
1. 50% upfront before work starts
2. Late payment fee (2% per week after due date)
3. Work pauses if payment is 14+ days overdue

Most clients pay immediately once they see clause 3. They don't want you to stop.

#FreelanceUAE #FreelanceContracts #GetPaid #SoloKit`,
  },
  {
    text: `Client fired you? Good.

That sounds harsh but hear me out.

The clients worth keeping:
✓ Pay on time (or early)
✓ Respect your process
✓ Give clear feedback
✓ Refer you to others

The clients worth firing:
✗ Pay late every time
✗ Add scope without asking
✗ Disappear then demand overnight delivery
✗ Negotiate after the contract is signed

One good client at AED 20K/month is worth more than 5 bad ones at AED 5K.

#FreelanceUAE #ClientManagement #Dubai #SoloKit`,
  },
  {
    text: `The fastest way to double your freelance income in UAE:

Stop finding new clients.

Keep the ones you have.

A client who pays AED 10K for a project is worth AED 50K+ over 2 years if you:
→ Deliver great work
→ Follow up 3 months later
→ Offer a retainer or next phase
→ Ask for a referral

Most freelancers spend 80% of their time on client acquisition and 20% on client retention.

Flip that ratio.

#FreelanceUAE #ClientRetention #Retainers #SoloKit`,
  },
  {
    text: `Free Notion template for UAE freelancers:

10 AI prompts you can use today:
→ Proposal that wins clients
→ Scope creep reply (polite but firm)
→ Invoice reminder (not awkward)
→ Client onboarding welcome email
→ LinkedIn bio that gets attention

No email required. No upsell on the page.

Just copy, fill the brackets, use immediately.

${SITE_URL}/free

#FreelanceUAE #AITools #ChatGPT #SoloKit`,
  },
  {
    text: `UAE freelance reality check:

Most freelancers don't fail because of bad work.

They fail because:
→ No consistent lead source
→ Feast-or-famine income
→ Clients that take 90 days to pay
→ No system to repeat what's working

Systems don't replace skill. They protect it.

What's the biggest operational headache in your freelance business right now?

#FreelanceUAE #FreelanceTips #Dubai #SoloKit`,
  },
  {
    text: `5 things successful UAE freelancers do differently:

1. They track revenue weekly, not monthly
   (Monthly is too late to course-correct)

2. They have a CRM — even a simple Notion table
   (No client falls through the cracks)

3. They raise rates every 12 months
   (Inflation in Dubai is real)

4. They have 2 months expenses in reserve
   (Slow months exist — plan for them)

5. They get referrals systematically
   (Not just when they remember to ask)

Which one are you still not doing?

#FreelanceUAE #Solopreneur #DubaiFreelancer #SoloKit`,
  },
  {
    text: `The hardest part of freelancing in Dubai isn't getting clients.

It's getting GOOD clients.

Red flags before you sign:
🚩 "This is a simple project" (it never is)
🚩 "We have a tight budget" before even discussing scope
🚩 "We've worked with 3 freelancers who all disappointed us"
🚩 "Can you do a small test project for free?"
🚩 No contract — "we work on trust here"

You can say no. Your pipeline is worth protecting.

#FreelanceUAE #ClientVetting #Dubai #SoloKit`,
  },
  {
    text: `What a AED 50K/month freelancer's week looks like vs AED 10K/month:

AED 10K/month:
→ Responds to every inquiry immediately
→ Proposes hourly rates
→ Does revisions until client is "happy"
→ No follow-up system
→ Takes any project

AED 50K/month:
→ Has a discovery call before quoting
→ Sells project packages
→ Limits revisions to 2 rounds (in writing)
→ Follows up with past clients quarterly
→ Turns down bad-fit projects

Same skills. Different systems.

#FreelanceUAE #FreelanceTips #Solopreneur #SoloKit`,
  },
  {
    text: `LinkedIn tip for UAE freelancers:

Post about your client results, not your services.

Instead of: "I offer social media management services"

Post: "Helped a Dubai F&B brand grow from 2K to 18K followers in 4 months. Here's the 3-part content strategy that did it."

One gets scrolled past. The other gets saved, shared, and leads to DMs.

The best freelance marketing isn't marketing. It's proof.

#FreelanceUAE #LinkedIn #ContentMarketing #SoloKit`,
  },
  {
    text: `Freelance visa reality in UAE (2026):

The cheapest legal way to work independently:
→ SHAMS or RAKEZ: ~AED 6,000-7,500/year for permit
→ Residency visa on top: ~AED 3,500-5,000
→ Total first year: ~AED 10,000-16,000

After that, renewal is just the annual permit fee.

Worth it? If you bill AED 15K+/month: yes, easily.
Under AED 10K/month: consider if the math works for you first.

Full breakdown: ${SITE_URL}/blog/freelance-visa-uae

#FreelanceUAE #UAEVisa #DubaiFreelancer #SoloKit`,
  },
  {
    text: `Most freelance proposals get rejected in the first paragraph.

Not because the price is wrong.

Because the opening line is always the same:

"My name is [X] and I am a freelance [Y] with [Z] years of experience."

The client doesn't care. Not yet.

Better opening: Start with their problem.

"Your website currently has no way to capture leads. This proposal outlines how to fix that in 3 weeks."

Same project. Completely different first impression.

Full guide: ${SITE_URL}/blog/freelance-proposal-tips-uae

#FreelanceProposals #UAE #ClientWork #SoloKit`,
  },
  {
    text: `Unpopular opinion: UAE freelancers should raise their rates right now.

Not because you can charge anything you want.

Because the market has moved.

Mid-level designer rates in Dubai:
2022: AED 100-150/hr
2026: AED 180-280/hr

Mid-level developer rates:
2022: AED 150-200/hr
2026: AED 250-400/hr

If you haven't raised rates since 2022 or 2023, you've taken a pay cut.

January is the easiest time to raise. "New year, updated rates." Give clients 30 days notice.

#FreelanceUAE #FreelanceRates #DubaiFreelancer #SoloKit`,
  },
  {
    text: `The 3-email sequence that gets UAE freelancers paid faster:

Email 1 (day invoice is due):
"Hi [name], just confirming you received invoice #X due today. Let me know if you need anything."

Email 2 (7 days overdue):
"Invoice #X is now 7 days past due. Can you confirm an ETA for payment?"

Email 3 (14 days overdue):
"Per our contract, a 2% late fee is now applied. I've sent an updated invoice. Please confirm payment by [date]."

Most get paid at Email 1 or 2. Email 3 is for people who actually need to see consequences.

#FreelanceUAE #GetPaid #Invoicing #SoloKit`,
  },
  {
    text: `Notion for freelancers — the actual setup that works:

Most people download a template and never use it.

What makes it stick:
1. One database for clients (not a spreadsheet)
2. Projects linked to clients (not a separate list)
3. Invoice log with status column (paid/unpaid/overdue)
4. Weekly revenue number visible on your home page
5. Daily task list that clears at end of day

That's it. 5 views. One workspace.

We built exactly this: ${SITE_URL}/products/freelancer-client-crm

#Notion #FreelanceUAE #Productivity #SoloKit`,
  },
  {
    text: `Every UAE freelancer eventually learns this the hard way:

50% upfront. Always.

Not because clients are dishonest.
Because projects change, decisions change, priorities change.

When a client has paid 50% upfront:
→ They show up to calls on time
→ They give feedback faster
→ They don't ghost when you deliver

The deposit isn't about trust.
It's about shared commitment to the project.

If a client refuses a deposit, that tells you something important.

#FreelanceUAE #FreelanceTips #ClientManagement #SoloKit`,
  },
  {
    text: `How to get your first 3 freelance clients in Dubai with zero budget:

Step 1: Make a list of 20 people you know who work in companies that could use your service.

Step 2: Message them individually. Not a broadcast. Not a pitch deck.
"Hey [name] — I've started taking on freelance [projects]. If you ever need [X], I'd love to help. Know anyone who might?"

Step 3: Deliver exceptional work for the first client. Ask for a LinkedIn recommendation immediately after.

Step 4: Use that recommendation in your next outreach.

That's the whole playbook.

#FreelanceUAE #GettingClients #Dubai #SoloKit`,
  },
  {
    text: `AI is changing freelancing — but not in the way most people think.

It's not replacing freelancers.
It's replacing slow freelancers.

A designer who uses AI to generate 20 concept directions in 1 hour beats a designer who presents 3 directions after a week.

A copywriter who uses AI to draft, then edits for voice and accuracy, produces better work faster.

The freelancers who will struggle: those who ignore AI entirely.
The freelancers who will thrive: those who use it as a productivity layer.

10 free AI prompts for freelancers: ${SITE_URL}/free

#AI #FreelanceUAE #ChatGPT #SoloKit`,
  },
  {
    text: `SOPs are not just for big companies.

If you do something more than twice, write down how you do it.

The 5 SOPs every freelancer needs first:
1. Client onboarding (first 72 hours of every project)
2. Proposal → contract → deposit sequence
3. Revision request handling
4. Invoice + follow-up sequence
5. Project closeout + testimonial request

Once these are documented, you can delegate any of them.
Before they're documented, every project starts from zero.

#FreelanceUAE #SOPs #Productivity #SoloKit`,
  },
];

function getPostIndex(): number {
  // Count days since epoch and pick sequential post — cycles through all posts evenly
  const daysSinceEpoch = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  return daysSinceEpoch % posts.length;
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
