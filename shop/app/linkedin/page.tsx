import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LinkedIn Content Library — SoloKit",
  robots: { index: false, follow: false },
};

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
    field: "About (para 2)",
    bad: "(generic skills list)",
    good: "Led product redesigns for 3 Dubai-based Series A startups. Most recent: reduced onboarding drop-off by 34% for a fintech app in 6 weeks.",
  },
  {
    field: "About (para 3 — CTA)",
    bad: "(no call to action)",
    good: "If you're a Dubai SaaS or fintech company looking to improve your product experience, message me directly.",
  },
  {
    field: "Featured section",
    bad: "(empty — most profiles leave this blank)",
    good: "Case study: reduced app drop-off 34% for a Dubai fintech. Link to portfolio. Link to free resource for your audience.",
  },
  {
    field: "Experience",
    bad: "Freelance Designer — various clients",
    good: "Freelance UX Designer (self-employed) — 'Led product redesigns for 3 Dubai-based Series A startups. Key results: [specific metrics].'",
  },
  {
    field: "Banner image",
    bad: "(default blue LinkedIn banner)",
    good: "Custom 1584×396px banner: your tagline, a single strong result, your website URL. Dark background, white text.",
  },
];

const connectionTemplates = [
  {
    scenario: "After meeting at a Dubai event",
    template: `Hi [name],

Great meeting you at [event] yesterday. I enjoyed our conversation about [topic].

Would love to stay connected — what you're doing at [company] sounds like great work.

[Your name]`,
  },
  {
    scenario: "Connecting with a potential client",
    template: `Hi [name],

I came across your profile while researching [industry] companies in Dubai. Your work at [company] on [project/area] caught my attention.

I'm a freelance [your role] helping Dubai companies with [outcome]. Thought it would be worth connecting.

[Your name]`,
  },
  {
    scenario: "Following up after a blog/post they wrote",
    template: `Hi [name],

Your post about [topic] was exactly what I needed to see this week — specifically the point about [specific insight].

Connecting to keep up with your content.

[Your name]`,
  },
  {
    scenario: "Warm intro from a mutual connection",
    template: `Hi [name],

[Mutual connection] suggested I reach out — they thought our work might overlap. I'm a freelance [your role] based in Dubai.

Happy to connect and share ideas.

[Your name]`,
  },
];

const contentCalendar = [
  { day: "Monday", type: "Story post", description: "Personal experience — a win, failure, or turning point from your freelance journey" },
  { day: "Tuesday", type: "Educational (tips)", description: "List post: 3–5 specific, actionable insights your audience can use today" },
  { day: "Wednesday", type: "Data/insight", description: "A number, stat, or rate calculation that challenges a common assumption" },
  { day: "Thursday", type: "Story or opinion", description: "Controversial take OR a client story (scope creep, rate negotiation, red flag)" },
  { day: "Friday", type: "Tutorial", description: "Step-by-step: how to do one specific thing better (tool, template, process)" },
];

const linkedInRules = [
  {
    rule: "No links in the post body",
    detail: "LinkedIn's algorithm suppresses external links in post bodies. Put the link in the FIRST COMMENT instead. In the post body, write: 'Link in the comments.' This alone can 2–3× your reach.",
  },
  {
    rule: "Personal account, not company page",
    detail: "Personal LinkedIn profiles get 3–5× more organic reach than company pages. Post from your own profile, not the SoloKit page. Tag the company page in the post if needed.",
  },
  {
    rule: "End every post with a question",
    detail: "Every post must end with a direct question. 'What's your experience?' 'Agree or disagree?' 'Which one do you wish you'd known sooner?' Comments signal relevance to the algorithm.",
  },
  {
    rule: "Reply within the first hour",
    detail: "The first hour after posting is when LinkedIn decides how far to push your content. Set a reminder to reply to every comment in the first 60 minutes. Each reply extends reach.",
  },
  {
    rule: "Hook is your entire distribution",
    detail: "LinkedIn shows only the first 2–3 lines before a 'see more' cut-off. Your hook is the post. Test different openers on the same content — the hook alone can 10× your reach.",
  },
  {
    rule: "Post at 7–9 AM UAE time",
    detail: "Dubai professionals are commuting or starting their day. This window gets the fastest early engagement, which feeds the algorithm. Also try 12–1 PM for a secondary post.",
  },
  {
    rule: "Format mix: 40% story / 40% educational / 20% opinion",
    detail: "Story posts (personal experience) build trust. Educational posts build authority. Controversial opinions generate discussion. All three are needed to grow a professional audience.",
  },
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

What's your go-to proposal opening? Share it below`,
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

Free calculator in the comments`,
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

Link in comments`,
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

Full breakdown with step-by-step instructions in the comments.

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

export default function LinkedInPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <span className="text-gray-600">LinkedIn Content</span>
          </nav>

          {/* Hero — LinkedIn branded */}
          <div className="rounded-2xl mb-8 overflow-hidden">
            <div className="bg-[#0A66C2] px-6 py-8">
              <div className="flex items-start gap-4 mb-4">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-white shrink-0 mt-1" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Professional · B2B · Thought Leadership</p>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">LinkedIn Content Library</h1>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed max-w-xl">
                12 ready-to-post text posts built for the LinkedIn algorithm. Story-driven, educational, each ending with a question. No links in the body — ever.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#004182]">
              {[
                { value: "12 posts", label: "ready to use" },
                { value: "3–5×", label: "per week" },
                { value: "7–9 AM", label: "best time UAE" },
                { value: "Personal", label: "profile beats company" },
              ].map(({ value, label }) => (
                <div key={label} className="px-4 py-4 text-center border-r border-blue-900 last:border-0">
                  <p className="text-base font-bold text-white">{value}</p>
                  <p className="text-xs text-blue-200 mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LinkedIn-specific rules — platform protocol */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            LinkedIn Protocol — read before posting
          </h2>
          <div className="space-y-3 mb-10">
            {linkedInRules.map(({ rule, detail }) => (
              <div key={rule} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0A66C2] mt-1.5 shrink-0"></span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{rule}</p>
                    <p className="text-sm text-gray-600">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Optimization — Before/After */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Profile Optimization — do this first
          </h2>
          <p className="text-sm text-gray-500 mb-5">Your LinkedIn profile is your landing page. Optimize it before you post a single thing.</p>
          <div className="space-y-3 mb-10">
            {profileOptimization.map(({ field, bad, good }) => (
              <div key={field} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-2.5 bg-gray-50 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{field}</span>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  <div className="p-4">
                    <p className="text-xs font-bold text-red-500 mb-1.5">Before</p>
                    <p className="text-sm text-gray-500 italic">&ldquo;{bad}&rdquo;</p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold text-emerald-600 mb-1.5">After</p>
                    <p className="text-sm text-gray-800">&ldquo;{good}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connection Request Templates */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Connection Request Templates
          </h2>
          <p className="text-sm text-gray-500 mb-5">LinkedIn limits connection notes to 300 characters. Be specific, warm, and never pitch on first contact.</p>
          <div className="space-y-4 mb-10">
            {connectionTemplates.map(({ scenario, template }) => (
              <div key={scenario} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-2.5 bg-gray-50 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{scenario}</span>
                </div>
                <div className="px-5 py-4">
                  <pre className="text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                    {template}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Content Calendar */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Weekly Content Calendar
          </h2>
          <p className="text-sm text-gray-500 mb-5">Post Sunday–Thursday (UAE work week). Best window: 7–9 AM. Never post Friday evening — the algorithm needs your early engagement window.</p>
          <div className="space-y-2 mb-10">
            {contentCalendar.map(({ day, type, description }) => (
              <div key={day} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                <div className="w-24 shrink-0">
                  <p className="text-xs font-bold text-gray-900">{day}</p>
                  <p className="text-xs text-[#0A66C2] font-semibold mt-0.5">{type}</p>
                </div>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>

          {/* Post Library */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Post Library — 12 text posts
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
            <p className="text-xs font-bold text-amber-800 mb-1">LinkedIn text-only rule</p>
            <p className="text-xs text-amber-700">Every post below is text-only by design. Do NOT add images — LinkedIn&apos;s algorithm favors native text posts for organic reach. If any post mentions a link, put that link in the first comment immediately after posting.</p>
          </div>

          <div className="space-y-5 mb-10">
            {posts.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-8 h-8 bg-[#0A66C2] text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                    {p.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {p.viral && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">High viral potential</span>
                      )}
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{p.format}</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{p.hook}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Post text — copy &amp; paste</p>
                  <pre className="text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                    {p.content}
                  </pre>
                  <p className="text-xs text-[#0A66C2] mt-2 font-medium">Reminder: paste any links in the first comment after posting</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Posting tip</p>
            <p className="text-sm text-emerald-800">Industry: Software / Professional Services. Best times: 7–9 AM, 12–1 PM, 6–8 PM UAE time. Reply to every comment within 60 minutes of posting.</p>
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
