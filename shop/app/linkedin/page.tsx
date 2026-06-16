import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LinkedIn Content — SoloKit",
  robots: { index: false, follow: false },
};

const setupItems = [
  { label: "Page name", value: "SoloKit" },
  { label: "Tagline", value: "Notion templates, AI prompts & SOPs for UAE freelancers" },
  { label: "Website", value: "solokit.cloud" },
  { label: "Post frequency", value: "3-5× per week" },
  { label: "Best times (UAE)", value: "7-9 AM, 12-1 PM, 6-8 PM" },
  { label: "Industry", value: "Software / Professional Services" },
];

const posts = [
  {
    id: 1,
    format: "Story post",
    viral: true,
    hook: "I made AED 0 in my first month freelancing in Dubai.",
    content: `I made AED 0 in my first month freelancing in Dubai.

Not because I had no skills.

Because I had no system.

No process for finding clients.
No way to follow up consistently.
No contract that protected my work.
No idea what rate I actually needed to charge.

Month 2: AED 8,000.
Month 6: AED 22,000.
Month 12: AED 38,000.

The skills didn't change. The systems did.

If you're in month 1 and wondering if this will work: the answer is yes.

But not without a system.

What was your toughest month when you started freelancing?`,
  },
  {
    id: 2,
    format: "Tips post (numbered list)",
    viral: true,
    hook: "5 things I wish I knew before freelancing in Dubai",
    content: `5 things I wish I knew before freelancing in Dubai:

1. Your rate is not your income
AED 300/hr billing ≠ AED 300/hr take-home.
Visa, insurance, slow months — account for all of it.

2. Dubai runs on relationships
The best projects come from people you already know.
One real coffee meeting beats 50 cold emails.

3. 50% upfront is not negotiable
Not because clients are dishonest.
Because it creates shared commitment.

4. You will have a terrible month
Plan for it. 2 months of expenses in savings before you need it.

5. Saying no is a growth strategy
Every yes to a bad-fit client is a no to a great one.

Which one do you wish you'd known sooner?`,
  },
  {
    id: 3,
    format: "Educational (problem/solution)",
    viral: true,
    hook: "Why most UAE freelance proposals get ignored",
    content: `Most UAE freelance proposals get ignored in the first sentence.

Not because the price is wrong.
Not because the skills aren't there.

Because the opening line is always the same:

"My name is [X] and I am a freelance [Y] with [Z] years of experience."

The client doesn't care. Not yet.

Better opening: Start with their problem.

"Your website currently has no way to capture leads. This proposal outlines how to fix that in 3 weeks."

Same project. Same price. Completely different first impression.

The client reads on because you showed you understand what they actually need.

What's your go-to proposal opening? Share it below 👇`,
  },
  {
    id: 4,
    format: "Data/insight post",
    viral: true,
    hook: "AED 267 — the number most UAE freelancers never calculate",
    content: `AED 267.

That's the minimum hourly rate you need to take home AED 20,000/month as a UAE freelancer.

Here's why most people don't know their number:

They calculate: target income ÷ hours = rate.
They miss: visa (AED 7,500/yr) + health insurance (AED 5,000/yr) + slow months (15% buffer) + unbillable time (admin, proposals, marketing).

When you factor everything in:

1,150 billable hours per year.
AED 307,100 needed to take home AED 240K.
Minimum hourly rate: AED 267.

Most UAE freelancers I speak to are charging AED 100-150.

They're busy. And broke.

If you've never calculated your real minimum rate — do it today.

Free calculator in the comments 👇`,
  },
  {
    id: 5,
    format: "Controversial opinion",
    viral: true,
    hook: "Unpopular opinion: You should fire your cheapest client this month.",
    content: `Unpopular opinion: You should fire your cheapest client this month.

Here's why.

Your lowest-paying client takes the same amount of relationship energy as your highest-paying one.

They ask for revisions. They delay feedback. They take calls. They have questions.

The time you spend on AED 5K/month client could go to:
→ One more AED 20K/month client
→ Building content that attracts better clients
→ Rest, which makes your work better

I fired my lowest-paying client 2 years ago. It felt terrifying.

Within 3 months, I had replaced that income 4x with a single client.

The lowest-paying client in your business is keeping you from the best clients.

Agree or disagree?`,
  },
  {
    id: 6,
    format: "Story post",
    viral: true,
    hook: "A client tried to add 6 weeks of extra work after we signed the contract.",
    content: `A client once tried to add 6 weeks of work to a project after we signed the contract.

"Oh, and while you're at it, can you also..."

I used to say yes.

Then I learned two words: scope creep.

Now I have a line in every contract:

"Any work not included in the agreed scope will be quoted separately before commencing."

And an email template:

"Thanks for flagging this. This falls outside our original scope. I'd be happy to quote for it as an additional piece of work. Would you like me to send an updated proposal?"

The client either:
a) Agrees and pays for the extra work
b) Realizes it wasn't that important after all

Both outcomes are fine.

What's the wildest scope creep you've experienced?`,
  },
  {
    id: 7,
    format: "Tutorial post",
    viral: false,
    hook: "The exact Notion setup I use to track my freelance business",
    content: `The exact Notion setup I use to run my freelance business in Dubai.

5 views. That's all you need.

View 1: Client database
→ Name, status (active/delivered/nurture), contract value, payment status

View 2: Active projects
→ Project name, linked client, deadline, current deliverable, status

View 3: Invoice tracker
→ Invoice number, client, amount, due date, paid/overdue/pending

View 4: Pipeline
→ Prospects in conversation, proposal sent, awaiting decision

View 5: Revenue dashboard
→ Formula summing all "paid" invoices for the current month

Setup time: 2 hours from scratch.
Or: 10 minutes if you duplicate my template.

The reason most freelancers don't track their business: the setup felt too complicated.

I made the template so you don't have to.

Link in comments 👇`,
  },
  {
    id: 8,
    format: "List/insight post",
    viral: true,
    hook: "The 3 contracts that changed my freelance business",
    content: `3 contract clauses that changed my freelance business:

1. "50% deposit due before work commences."

Before: clients ghosted at delivery.
After: clients show up on time, give clear feedback, pay without drama.

2. "Any revision requests beyond 2 rounds will be quoted at AED X/hour."

Before: unlimited revisions "until client is happy."
After: clients give focused, consolidated feedback the first time.

3. "Work will pause if payment is 14+ days overdue."

Before: clients treated payment as optional.
After: invoices are paid immediately when they see clause 3.

One-page contract. Signed before every project.

These 3 clauses alone are worth more than any software subscription.

Which clause do you wish you'd had earlier?`,
  },
  {
    id: 9,
    format: "Educational post",
    viral: false,
    hook: "UAE tax for freelancers — the complete answer in 6 lines",
    content: `UAE tax for freelancers — the complete answer:

Personal income tax: 0%
Your freelance income: tax-free
Corporate tax: 9% — only on profits over AED 375,000/year
VAT: 5% — only if UAE client revenue over AED 375,000/year

Most UAE freelancers owe: nothing.

But you DO need to register on EmaraTax.ae for corporate tax — even if you owe zero. It's free, takes 20 minutes, and skipping it creates problems.

Since 2023, registration is required for all businesses, regardless of whether they owe tax.

Full breakdown with step-by-step instructions: solokit.cloud/blog/freelance-tax-uae

(Save this and share it with any freelancer who's confused about UAE taxes.)`,
  },
  {
    id: 10,
    format: "Results/case study",
    viral: true,
    hook: "What changed when I started treating my freelance business like a business",
    content: `What changed when I started treating my freelance business like a business:

Before:
→ Tracked clients in a WhatsApp saved messages folder
→ Wrote every proposal from scratch
→ Forgot to follow up with past clients
→ Had no idea what I'd billed this month
→ Said yes to everything because I was scared to say no

After:
→ One Notion CRM with every client and invoice in one view
→ AI prompts that generate a first draft proposal in 3 minutes
→ Quarterly follow-up system for every past client
→ Revenue dashboard visible on my home screen
→ Clear criteria for which clients I take on

Revenue went up. Stress went down.

It wasn't about working harder.
It was about running a real business instead of being a very busy freelancer.

What's the one system change that made the biggest difference for you?`,
  },
  {
    id: 11,
    format: "Story post",
    viral: true,
    hook: "A client offered me AED 5K for a project I quoted AED 18K.",
    content: `A client offered me AED 5K for a project I quoted at AED 18K.

Old me: "Let me see what I can do for that budget..."

New me: "I can work within AED 5K. Here's what that covers: [reduced scope]. If you need the full solution, the investment is AED 18K. Which would work better for you?"

They came back with AED 14K.

I didn't discount.
I gave them a choice between value and scope.

When you discount, you teach clients that your rates are negotiable.

When you adjust scope, you teach clients that your rates reflect real value.

The negotiation happened. But on my terms.

What's your approach when a client asks for a lower rate?`,
  },
  {
    id: 12,
    format: "Educational post",
    viral: false,
    hook: "The LinkedIn profile changes that get UAE freelancers more inbound",
    content: `The 3 LinkedIn profile changes that get UAE freelancers more inbound:

1. Headline rewrite
Before: "Freelance Graphic Designer"
After: "I help Dubai brands build visual identities that convert | Freelance Brand Designer"

2. Featured section
Add 3 items: your best project, a client testimonial, a link to your portfolio or free resource.

Most profiles have this empty. It's valuable real estate.

3. About section structure (3 paragraphs only)
→ Paragraph 1: Who you serve and what outcome you help them achieve
→ Paragraph 2: One specific result or project that proves it
→ Paragraph 3: Clear CTA — "If you're [target client] looking for [outcome], message me."

These 3 changes take 2 hours.

The ROI on 2 hours of LinkedIn optimization compounds for years.`,
  },
];

const profileOptimization = [
  {
    field: "Headline",
    bad: "Freelance UX Designer",
    good: "I help Dubai tech companies build products users love | Freelance UX Designer",
  },
  {
    field: "About (para 1)",
    bad: "I am a passionate designer with 6 years of experience...",
    good: "Dubai-based UX designer working with SaaS and fintech companies to reduce churn through better product experience.",
  },
  {
    field: "Featured section",
    bad: "(empty)",
    good: "Case study: reduced app drop-off by 34% for a Dubai fintech. Link to portfolio. Link to free resource.",
  },
  {
    field: "Experience",
    bad: "Freelance Designer — various clients",
    good: "Freelance UX Designer (self-employed) — 'Led product redesigns for 3 Dubai-based Series A startups. Key results: [specific metrics].'",
  },
];

const strategyPoints = [
  {
    title: "Format mix",
    desc: "40% story posts (personal experience), 40% educational (tips/data), 20% controversial opinions. This mix maximizes reach + trust.",
  },
  {
    title: "Hook is everything",
    desc: "The first line determines if anyone reads the rest. Test different hooks on the same content — different hooks on the same post can get 10× different reach.",
  },
  {
    title: "End with a question",
    desc: 'Every post ends with "What\'s your experience?" or a question. Comments signal relevance to the algorithm.',
  },
  {
    title: "Post at 7-9 AM UAE",
    desc: "This is when Dubai professionals are commuting or starting their day. Highest engagement window.",
  },
  {
    title: "Reply to every comment in the first hour",
    desc: "This dramatically boosts reach. Set a reminder when you post.",
  },
  {
    title: "Personal account first",
    desc: "Post from your personal LinkedIn, not the company page. Personal profiles get 3-5× more organic reach.",
  },
  {
    title: "Don't add links in the post body",
    desc: "LinkedIn suppresses external links. Put the link in the first comment instead.",
  },
];

export default function LinkedInPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2"/>
                <path d="M7 10v7M7 7v.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M11 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4M11 10v7" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">SoloKit Content Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">LinkedIn Content Library</h1>
            <p className="text-gray-300 text-lg mb-6">
              12 ready-to-post text posts for Company page: SoloKit. Story-driven, educational, built to drive engagement.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl px-5 py-2.5 text-sm font-medium">📅 Post 3-5×/week</div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-5 py-2.5 text-sm font-medium">⏰ Best: 7-9 AM UAE</div>
              <div className="bg-emerald-500 rounded-xl px-5 py-2.5 text-sm font-bold">12 posts ready</div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">

          {/* Account setup */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block"></span>
              Page Setup
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {setupItems.map(({ label, value }) => (
                <div key={label} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-xs text-gray-400 font-medium mb-1">{label}</p>
                  <p className="text-sm font-bold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile optimization */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block"></span>
              Profile Optimization — Do This First
            </h2>
            <p className="text-xs text-gray-400 mb-4">Before you post anything, make these profile changes.</p>
            <div className="space-y-3">
              {profileOptimization.map(({ field, bad, good }) => (
                <div key={field} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest">{field}</div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                    <div className="p-4">
                      <p className="text-xs text-red-500 font-bold mb-1">❌ Before</p>
                      <p className="text-sm text-gray-600 italic">&ldquo;{bad}&rdquo;</p>
                    </div>
                    <div className="p-4 bg-emerald-50/30">
                      <p className="text-xs text-emerald-600 font-bold mb-1">✅ After</p>
                      <p className="text-sm text-gray-800">&ldquo;{good}&rdquo;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Post library */}
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Post Library</h2>
            <span className="text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">12 posts ready</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">Post 3-5 per week, vary formats. Viral potential marked in red.</p>
          <div className="space-y-4 mb-12">
            {posts.map((p, i) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-emerald-300 hover:shadow-md transition-all">
                <div className="px-6 py-4 border-b border-gray-100 flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">{p.format}</span>
                      {p.viral && (
                        <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">🔥 High viral potential</span>
                      )}
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{p.hook}</p>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Post text — copy &amp; paste</p>
                  <pre className="text-sm text-gray-700 bg-gray-50 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto border border-gray-100 select-all">{p.content}</pre>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
              LinkedIn Posting Strategy
            </h2>
            <div className="space-y-4">
              {strategyPoints.map(({ title, desc }) => (
                <div key={title} className="border-l-2 border-emerald-500 pl-4">
                  <p className="text-sm font-bold text-emerald-400 mb-1">{title}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
