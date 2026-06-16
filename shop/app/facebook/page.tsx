import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Facebook Content Library — SoloKit",
  robots: { index: false, follow: false },
};

const pageSetup = [
  { label: "Page name", value: "SoloKit" },
  { label: "Category", value: "Software Company · Digital Products" },
  { label: "Username", value: "@solokitco" },
  { label: "Website", value: "solokit.cloud" },
  { label: "Page ID", value: "1098756576664555" },
  { label: "CTA button", value: "Shop Now → solokit.cloud" },
  { label: "Post frequency", value: "1× per day" },
  { label: "Best times (UAE)", value: "7–9 AM · 12–2 PM · 7–9 PM" },
];

const facebookRules = [
  {
    rule: "Never put links in the post body",
    detail: "Facebook's algorithm penalizes posts with external URLs in the body text. This is the single biggest reach killer. ALWAYS put links in the FIRST COMMENT immediately after publishing. Write 'Link in the first comment' in the post body if referencing a resource.",
  },
  {
    rule: "Native text posts beat everything",
    detail: "Facebook rewards text posts and image posts the most. Video comes second. External link posts get the least reach. Write conversationally — like you're talking to a person, not broadcasting to an audience.",
  },
  {
    rule: "Comments are the distribution signal",
    detail: "Facebook shows posts to more people when they get early comments. Every post must end with a direct, specific question. Avoid 'like if you agree' — Facebook suppressed engagement bait since 2018.",
  },
  {
    rule: "Reply to every comment within 1 hour",
    detail: "Set a reminder when you post. Reply to every comment in the first 60 minutes. This triggers the algorithm to extend the post's reach. Each reply resets the distribution window.",
  },
  {
    rule: "Automated posts run via cron job",
    detail: "The cron job at /api/cron/social-post auto-posts Sunday–Friday at 7 AM UAE time once FACEBOOK_PAGE_ACCESS_TOKEN is set in Vercel. The 12 posts below are for MANUAL supplemental posting at midday and evening windows.",
  },
];

const groupsStrategy = [
  {
    group: "UAE Freelancers Network",
    action: "Join and answer questions. Mention SoloKit only when directly relevant. Rule: 10 helpful comments before any product mention.",
  },
  {
    group: "Dubai Entrepreneurs & Startups",
    action: "Share educational content from the blog (not product links). Build authority as the SoloKit voice. Engage with others' posts first.",
  },
  {
    group: "Abu Dhabi Freelancers",
    action: "Expand reach to non-Dubai UAE market. Same approach: value first. Top-performing content: freelance visa breakdown, tax explainer, rate calculator.",
  },
  {
    group: "UAE Remote Workers",
    action: "Strong fit with visa and setup content. Post the rate calculator and freelance visa guide as standalone educational value — no product pitch needed.",
  },
];

const boostingGuide = [
  {
    trigger: "20+ organic comments",
    budget: "AED 50–100",
    audience: "UAE · Age 24–40 · Interests: freelancing, entrepreneurship, digital work",
    duration: "3 days",
  },
  {
    trigger: "Best-performing post of the month",
    budget: "AED 200–300",
    audience: "UAE + KSA · Lookalike of page engagers",
    duration: "5–7 days",
  },
  {
    trigger: "New product launch post",
    budget: "AED 500",
    audience: "UAE · Custom audience from website visitors",
    duration: "7 days",
  },
];

const schedulingGuide = [
  { step: "1", action: "Open Meta Business Suite", detail: "business.facebook.com → your page → Posts" },
  { step: "2", action: "Click 'Create post'", detail: "Select your Facebook page (not Instagram)" },
  { step: "3", action: "Paste post text — no link in body", detail: "Write the post, end with a question, no external URLs" },
  { step: "4", action: "Click 'Schedule for later'", detail: "Set time: 7 AM, 12 PM, or 7 PM UAE time (GST, UTC+4)" },
  { step: "5", action: "Post goes live — add link to first comment", detail: "When the post publishes, immediately post any links as the first comment" },
];

const posts = [
  {
    id: 1,
    type: "Educational",
    viral: true,
    hook: "Nobody talks about the real cost of freelancing in Dubai.",
    content: `Nobody talks about the real cost of freelancing in Dubai. So I will.

Your freelance visa: AED 7,500/year
Health insurance: AED 5,000/year
Software tools: AED 3,600/year
Slow months (15% buffer on income)

To actually take home AED 20,000/month, you need to bill AED 25,600+.

That's what most people ignore when they set their rates.

If you're a UAE freelancer wondering why you're always "busy but broke" — this is why.

Free rate calculator in the first comment 👇`,
  },
  {
    id: 2,
    type: "Tips",
    viral: true,
    hook: "3 contract clauses every UAE freelancer needs — and most don't have.",
    content: `3 contract clauses every UAE freelancer needs — and most don't have:

1️⃣ "50% deposit due before work commences"
→ Stops clients from ghosting at delivery
→ Makes clients take the project seriously

2️⃣ "Revisions limited to 2 rounds per deliverable"
→ Ends unlimited change requests
→ Clients give better, more focused feedback

3️⃣ "Work pauses if payment is 14+ days overdue"
→ The single most effective clause for getting paid on time
→ Most clients pay immediately when they see this

One page. Signed before every project. Changes everything.

Which one do you wish you'd had earlier? Comment below 👇`,
  },
  {
    id: 3,
    type: "Motivational/Relatable",
    viral: true,
    hook: "Signs you're actually running a real freelance business vs just being busy.",
    content: `Signs you're actually running a real freelance business (vs just being very busy):

✅ You know exactly what you billed last month
✅ You have a contract signed before every project
✅ You take 50% upfront — always
✅ You have a pipeline, not just WhatsApp messages
✅ You raise your rates every 12 months
✅ Past clients hear from you every 90 days

❌ You're still figuring this out? That's what systems are for.

Most UAE freelancers have the skills. Very few have the system.

Which one are you still working on? 👇`,
  },
  {
    id: 4,
    type: "Question/Poll",
    viral: false,
    hook: "Dubai freelancers: what's your biggest challenge right now?",
    content: `Dubai freelancers — what's your biggest challenge right now?

A) Finding consistent clients
B) Getting paid on time
C) Setting the right rates
D) Managing too many clients at once

Drop your answer in the comments 👇

(I'll share specific tips for whichever gets the most votes)`,
  },
  {
    id: 5,
    type: "Story/Personal",
    viral: true,
    hook: "A client once tried to add 3 months of extra work after we signed a contract.",
    content: `A client once tried to add 3 months of extra work after we signed a contract.

"Oh, and while you're at it, could you also..."

Old me: said yes. Worked for free for months. Resented every minute.

New me uses 6 words: "That falls outside our agreed scope."

Then I offer to quote for it separately.

Result: the client either pays for the extra work, or realizes it wasn't that important.

Both outcomes are fine.

Your contract protects both of you. Use it.

Have you ever said yes to scope creep you regret? 👇`,
  },
  {
    id: 6,
    type: "Educational (quick tip)",
    viral: false,
    hook: "UAE tax for freelancers — the 60-second version.",
    content: `UAE tax for freelancers — the 60-second version:

Personal income tax: 0% ✅
Freelance income: tax-free ✅
Corporate tax: 9% — only if profits exceed AED 375,000/year
VAT: 5% — only if UAE revenue exceeds AED 375,000/year

Most UAE freelancers pay: nothing.

BUT — you still need to register on EmaraTax.ae for corporate tax, even if you owe zero. It's free. It takes 20 minutes. Skip it and you create problems later.

Full breakdown with step-by-step instructions in the first comment 👇

Save this and share it with any freelancer who asks about UAE taxes 📌`,
  },
  {
    id: 7,
    type: "List post",
    viral: true,
    hook: "The 5-minute setup that saves UAE freelancers 5 hours a week.",
    content: `The 5-minute setup that saves UAE freelancers 5+ hours a week:

Create ONE Notion database with these columns:
→ Client name
→ Project status (active / delivered / paid)
→ Invoice amount
→ Invoice due date
→ Notes

That's it.

Filter by "active" = your workload
Filter by "unpaid" = your accounts receivable
Filter by "paid" = your monthly revenue

Most UAE freelancers track clients in WhatsApp. Then wonder why they miss follow-ups and forget invoices.

A simple database changes everything.

Ready-to-use version in the first comment 👇`,
  },
  {
    id: 8,
    type: "Insight/Opinion",
    viral: true,
    hook: "Unpopular opinion: UAE freelancers should raise their rates right now.",
    content: `Unpopular opinion: UAE freelancers should raise their rates right now.

Not because you can charge anything you want.

Because the market has moved.

Mid-level designer rates in Dubai:
2022: AED 100-150/hr
2026: AED 180-280/hr

Mid-level developer rates:
2022: AED 150-200/hr
2026: AED 250-400/hr

If you haven't raised rates since 2022 or 2023, you've taken a silent pay cut.

The easiest time to raise rates: January.
The email: "Hi [name], just a heads up — my rates are updating from [date]. Happy to honor current pricing for any projects we kick off before then."

Simple. Professional. No apology needed.

Agree or disagree? 👇`,
  },
  {
    id: 9,
    type: "Value post",
    viral: false,
    hook: "Free: 10 AI prompts every UAE freelancer needs.",
    content: `10 AI prompts every UAE freelancer needs — free, no email required:

✅ Client proposal that wins projects
✅ Follow-up email that re-opens cold leads
✅ Overdue invoice reminder (polite but firm)
✅ Scope creep response
✅ LinkedIn bio that gets you noticed
✅ Client onboarding welcome email
✅ Weekly project status update
✅ Testimonial request
✅ Service description for your website
✅ Content idea generator

All 10 are ready to copy, fill the brackets, and use immediately.

No signup. No credit card. Just 10 prompts that work.

Link in the first comment 👇

Share with a freelancer who could use these 🙏`,
  },
  {
    id: 10,
    type: "Engagement post",
    viral: true,
    hook: "What's the one thing you wish you knew before you started freelancing in Dubai?",
    content: `What's the one thing you wish you knew before you started freelancing in Dubai?

For me: that your billing rate and your take-home income are very different numbers.

AED 300/hour sounds incredible. Until you pay for:
→ Visa renewal
→ Health insurance
→ Slow months
→ No paid leave

The real number is always lower than the headline.

But once you know your real number, you can price to actually get there.

Drop yours in the comments 👇 Let's build the guide nobody wrote for us.`,
  },
  {
    id: 11,
    type: "Product/value",
    viral: false,
    hook: "Stop starting every new client project from scratch.",
    content: `Stop starting every new client project from scratch.

Every onboarding email. Every project brief. Every invoice follow-up. Every revision request response.

You've written each of these 20+ times. And every time feels like the first.

That's what SOPs fix.

Write the process once. Document it. Then follow the same steps every time — faster, more professional, fewer mistakes.

The 5 SOPs every UAE freelancer needs first:
1️⃣ Client onboarding (first 72 hours)
2️⃣ Proposal → contract → deposit sequence
3️⃣ Revision request handling
4️⃣ Invoice + follow-up sequence
5️⃣ Project closeout + testimonial request

We built all 5 — link in the first comment 👇

30-day guarantee. Instant download.`,
  },
  {
    id: 12,
    type: "Tips/educational",
    viral: false,
    hook: "The right way to follow up after sending a proposal in Dubai.",
    content: `The right way to follow up after sending a proposal in Dubai:

❌ "Just checking in" — deleted immediately

✅ What actually works:

Day 5 (no response):
"Hi [name], wanted to flag that I'm holding the project slot until [date]. Happy to adjust scope or payment terms if that helps move things forward. What's the current status?"

Day 8 (still nothing):
"Closing this one out on my end — if timing changes in the future, feel free to reach out."

Then: move on.

Chasing proposals is the biggest time drain in freelancing.

Build a pipeline so you can afford to let go of the ones that go cold.

Have a follow-up approach that's worked for you? Share it 👇`,
  },
];

export default function FacebookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Facebook Content</span>
          </nav>

          {/* Dark hero — Facebook identity */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              {/* Facebook blue platform badge */}
              <span className="inline-flex items-center gap-1.5 bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#74a9f7] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Community · Conversational · Groups</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Facebook Content Library</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              12 ready-to-post conversational posts. Native text wins on Facebook. Links always go in the FIRST COMMENT — never in the body.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Page</span>
                <span className="ml-2 font-semibold text-white">SoloKit (@solokitco)</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Page ID</span>
                <span className="ml-2 font-semibold text-white">1098756576664555</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Frequency</span>
                <span className="ml-2 font-semibold text-white">1× per day</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Best times (UAE)</span>
                <span className="ml-2 font-semibold text-white">7–9 AM · 12–2 PM · 7–9 PM</span>
              </div>
            </div>
          </div>

          {/* Facebook-specific protocol */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Facebook Protocol — read before posting
          </h2>
          <div className="space-y-3 mb-10">
            {facebookRules.map(({ rule, detail }) => (
              <div key={rule} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1877F2] mt-1.5 shrink-0"></span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{rule}</p>
                    <p className="text-sm text-gray-600">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Page Setup */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Page Setup — configuration
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {pageSetup.map(({ label, value }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>

          {/* Automation notice */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
            <p className="text-sm font-bold text-emerald-800 mb-1">Automated posting active</p>
            <p className="text-sm text-emerald-700">The cron job at <code className="bg-emerald-100 px-1.5 py-0.5 rounded text-xs font-mono">/api/cron/social-post</code> auto-posts Sunday–Friday at 7 AM UAE time once <code className="bg-emerald-100 px-1.5 py-0.5 rounded text-xs font-mono">FACEBOOK_PAGE_ACCESS_TOKEN</code> is set in Vercel. The 12 posts below are for <strong>manual supplemental posting</strong> at midday and evening windows.</p>
          </div>

          {/* Meta Business Suite Scheduling */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Meta Business Suite — Scheduling Guide
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-10">
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Step-by-step: schedule posts without killing reach</p>
            </div>
            <div className="divide-y divide-gray-100">
              {schedulingGuide.map(({ step, action, detail }) => (
                <div key={step} className="px-5 py-3.5 flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{step}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{action}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Groups strategy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            UAE Facebook Groups Strategy
          </h2>
          <p className="text-sm text-gray-500 mb-5">Groups reach people outside your page followers. Rule: contribute value 10 times before mentioning SoloKit once.</p>
          <div className="space-y-3 mb-10">
            {groupsStrategy.map(({ group, action }) => (
              <div key={group} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">{group}</p>
                <p className="text-sm text-gray-600">{action}</p>
              </div>
            ))}
          </div>

          {/* Boosting strategy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Post Boosting Strategy — AED amounts
          </h2>
          <p className="text-sm text-gray-500 mb-5">Only boost posts that already have organic engagement. Paying to push a zero-comment post is wasted spend.</p>
          <div className="space-y-3 mb-10">
            {boostingGuide.map(({ trigger, budget, audience, duration }) => (
              <div key={trigger} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-2.5 bg-gray-50 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Trigger: {trigger}</span>
                </div>
                <div className="px-5 py-4 grid sm:grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Budget</p>
                    <p className="text-sm font-semibold text-gray-900">{budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Duration</p>
                    <p className="text-sm font-semibold text-gray-900">{duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Audience</p>
                    <p className="text-xs text-gray-700">{audience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Post Library */}
          <div className="flex items-center justify-between mb-5 mt-10">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Post Library — 12 posts
            </h2>
            <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">Highest engagement first</span>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
            <p className="text-xs font-bold text-amber-800 mb-1">Link placement rule</p>
            <p className="text-xs text-amber-700">Any post referencing a link: paste it in the FIRST COMMENT immediately after publishing. Never in the post body — Facebook suppresses reach on posts with external URLs in the body.</p>
          </div>

          <div className="space-y-5 mb-12">
            {posts.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                    {p.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {p.viral && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">High engagement</span>
                      )}
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{p.type}</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{p.hook}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Post text — copy &amp; paste</p>
                  <pre className="text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                    {p.content}
                  </pre>
                  <p className="text-xs text-[#1877F2] mt-2 font-medium">After publishing: paste any links as the first comment</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Build your freelance system</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and SOPs built for UAE freelancers. Everything you need in one kit.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
