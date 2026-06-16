import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Instagram Content — SoloKit",
  robots: { index: false, follow: false },
};

const setupItems = [
  { label: "Username", value: "@solokitco (or @solokit.ae)" },
  { label: "Name", value: "SoloKit — Tools for UAE Freelancers" },
  { label: "Category", value: "Software Company" },
  { label: "Link in bio", value: "solokit.cloud" },
  { label: "Post frequency", value: "1× per day (reels + carousels)" },
  { label: "Best times (UAE)", value: "7-9 AM, 12-2 PM, 7-9 PM" },
];

const contentMix = [
  "3× Reels (talking head or text animation) — highest reach",
  "2× Carousels — highest saves, great for discovery",
  "2× Static posts — quotes, stats, quick tips",
  "Daily Stories: behind-the-scenes, polls, Q&A",
];

const reels = [
  {
    id: 1,
    format: "Reel (talking head)",
    duration: "15-30 sec",
    hook: "Most Dubai freelancers charge less than they're worth. Here's the math that proves it.",
    caption: `Most UAE freelancers are undercharging. Here's the math:

To take home AED 20K/month you need to bill AED 25,600+.

Your freelance visa: AED 7,500/yr
Health insurance: AED 5,000/yr
Slow months buffer: 15%

That's AED 16,000+ in hidden costs most people ignore when setting rates.

Calculate your actual minimum rate at the link in bio. It's free.

#DubaiFreelancer #FreelanceUAE #FreelanceRates #UAE #Dubai`,
    viral: true,
    slides: null as string[] | null,
  },
  {
    id: 2,
    format: "Reel (text on screen)",
    duration: "15-20 sec",
    hook: "Red flags before signing a client contract.",
    caption: `🚩 Red flags before you sign a client contract in Dubai:

"We work on trust — no contract needed"
"Can you do a small test project first?"
"The last 3 freelancers disappointed us"
"We have tight budget but great exposure"
"Can we discuss payment after delivery?"

Any one of these: proceed with extreme caution.
Three or more: walk away.

Your pipeline is your protection.

#FreelanceUAE #DubaiFreelancer #ClientTips #UAE #Freelancing`,
    viral: true,
    slides: null as string[] | null,
  },
  {
    id: 3,
    format: "Carousel (swipe post)",
    duration: "6-8 slides",
    hook: "The 5 things a AED 50K/month freelancer does differently.",
    caption: `Swipe for the habits that separate AED 10K and AED 50K freelancers in Dubai →

Same skills. Different systems. Different results.

Save this for when you need a reminder of what to build next.

#DubaiFreelancer #FreelanceUAE #Solopreneur #UAE #FreelanceTips`,
    viral: true,
    slides: [
      "Slide 1: The AED 10K vs AED 50K Freelancer",
      "Slide 2: AED 10K — Sends hourly quotes / AED 50K — Sells project packages",
      "Slide 3: AED 10K — Takes any project / AED 50K — Turns down bad-fit clients",
      "Slide 4: AED 10K — Unlimited revisions / AED 50K — 2 revision rounds in contract",
      "Slide 5: AED 10K — No follow-up system / AED 50K — Follows up with past clients quarterly",
      "Slide 6: AED 10K — Responds immediately / AED 50K — 4-hour response window",
      "Slide 7: The difference isn't talent. It's systems and boundaries.",
      "Slide 8: Tools to build those systems → link in bio",
    ],
  },
  {
    id: 4,
    format: "Reel (talking head)",
    duration: "20-30 sec",
    hook: "Nobody tells you this about the UAE freelance visa.",
    caption: `Nobody tells you this about the UAE freelance visa:

The permit (from SHAMS or RAKEZ) costs ~AED 6,000-7,500/yr.

But there's also:
→ Residence visa: AED 3,500-5,000
→ Medical test + Emirates ID: AED 800

Total first year: AED 10,000-16,000

Is it worth it?

If you bill AED 15K+/month: absolutely yes.
Under AED 10K: run the numbers first.

Full breakdown at the link in bio.

#FreelanceVisaUAE #DubaiVisa #UAE #DubaiFreelancer #FreelanceUAE`,
    viral: true,
    slides: null as string[] | null,
  },
  {
    id: 5,
    format: "Carousel (swipe post)",
    duration: "5 slides",
    hook: "The 5-step client onboarding process that prevents 90% of problems.",
    caption: `5 steps that prevent 90% of client problems. Save this. 🔖

Most project chaos starts in the first 72 hours. This process fixes it.

Used by freelancers across Dubai and Abu Dhabi.

SOP template for the full onboarding process at link in bio.

#ClientOnboarding #FreelanceUAE #DubaiFreelancer #Freelancing #UAE`,
    viral: false,
    slides: [
      "Slide 1: The 5-Step Client Onboarding Process",
      "Slide 2: Step 1 — Welcome email with: project start date, what you need from them, comms channel",
      "Slide 3: Step 2 — 30-min kick-off call to confirm goals, timeline, decision-maker",
      "Slide 4: Step 3 — Brief confirmation email: 'Per our call, here's what we agreed...'",
      "Slide 5: Step 4 — First milestone delivery. Step 5 — Mid-project check-in at 50%",
    ],
  },
  {
    id: 6,
    format: "Reel (talking head)",
    duration: "15-25 sec",
    hook: "The 3-email sequence that gets UAE freelancers paid on time.",
    caption: `The 3-email sequence that gets invoices paid in Dubai:

📧 Day invoice is due:
"Hi, just confirming you received invoice #X due today."

📧 7 days overdue:
"Invoice #X is 7 days past due. Can you confirm payment is coming?"

📧 14 days overdue:
"Per our contract, a 2% late fee is now applied. Updated invoice sent."

Most clients pay at email 1 or 2.
Email 3 is for those who need to see consequences.

Templates for all 3 are in my bio.

#GetPaid #LatePayment #FreelanceUAE #DubaiFreelancer #Invoice`,
    viral: true,
    slides: null as string[] | null,
  },
  {
    id: 7,
    format: "Carousel (swipe post)",
    duration: "7 slides",
    hook: "How to write a proposal that wins clients in Dubai.",
    caption: `Most freelance proposals get rejected in the first paragraph.

Here's the structure that actually wins projects in Dubai. Swipe →

Save this before your next proposal. 🔖

Full guide + AI prompt for winning proposals at link in bio.

#FreelanceProposals #DubaiFreelancer #ClientWork #FreelanceUAE #UAE`,
    viral: true,
    slides: [
      "Slide 1: How to Write a Proposal That Wins Clients in Dubai",
      "Slide 2: ❌ Wrong opening: 'My name is X and I am a freelancer with Y years of experience'",
      "Slide 3: ✅ Right opening: Start with THEIR problem, not your bio",
      "Slide 4: Example: 'Your website currently has no lead capture. This proposal outlines how to fix that in 3 weeks.'",
      "Slide 5: Structure — Problem → Solution → Timeline → Investment → Guarantee",
      "Slide 6: Add 1 case study showing a result you got for a similar client",
      "Slide 7: Close with: what happens when they say yes (next steps in 24hrs)",
    ],
  },
  {
    id: 8,
    format: "Reel (text animation)",
    duration: "10-15 sec",
    hook: "UAE freelancers pay zero personal income tax. But there's one thing you still need to do.",
    caption: `UAE tax reality for freelancers:

✅ Personal income tax: 0%
✅ Freelance income: tax-free
⚠️ Corporate tax: 9% (only on profits over AED 375K/year)
⚠️ VAT: 5% (only if UAE revenue over AED 375K/year)

Most freelancers owe nothing.

But: you DO need to register on EmaraTax.ae. Even if you owe zero.

Full breakdown at link in bio.

#UAETax #DubaiTax #TaxFree #UAE #DubaiFreelancer #FreelanceUAE`,
    viral: true,
    slides: null as string[] | null,
  },
  {
    id: 9,
    format: "Reel (talking head)",
    duration: "20-30 sec",
    hook: "I asked 50 Dubai freelancers what they wish they knew before starting. Same 3 answers every time.",
    caption: `Asked 50 Dubai freelancers what they wish they knew before starting.

Same 3 answers every time:

1. The cost of living is higher than you planned for — account for every expense before you celebrate your income number.

2. Networking is not optional in Dubai — it's the actual business model.

3. Have 2 months of expenses saved before you need it — slow months are guaranteed.

Free guide for new UAE freelancers at the link in bio.

#DubaiFreelancer #FreelanceUAE #NewFreelancer #UAE #Dubai #Freelancing`,
    viral: true,
    slides: null as string[] | null,
  },
  {
    id: 10,
    format: "Carousel (educational)",
    duration: "6 slides",
    hook: "The Notion workspace every UAE freelancer needs.",
    caption: `Your Notion workspace should have exactly 5 views. Swipe to see them →

Not 20 databases. Not a complicated system.

5 views. Built once. Used every day.

The pre-built template is at link in bio — duplicate it and you're done in 10 minutes.

#Notion #NotionTemplate #DubaiFreelancer #FreelanceUAE #Productivity #UAE`,
    viral: false,
    slides: [
      "Slide 1: The 5-View Notion Workspace for UAE Freelancers",
      "Slide 2: View 1 — Client database: name, status, contract value, payment status",
      "Slide 3: View 2 — Active projects: deadline, deliverable, client linked",
      "Slide 4: View 3 — Invoice tracker: number, amount, due date, paid/unpaid",
      "Slide 5: View 4 — Pipeline: prospects and proposals in progress",
      "Slide 6: View 5 — Revenue dashboard: total paid this month at a glance",
    ],
  },
];

const staticPosts = [
  {
    id: 1,
    format: "Static image post",
    hook: "AED 267 — your minimum hourly rate if you want to take home AED 20K/month",
    caption: `AED 267/hr.

That's the minimum you need to charge if you want to take home AED 20,000/month as a UAE freelancer.

Here's why:

→ Freelance visa: AED 7,500/yr
→ Health insurance: AED 5,000/yr
→ Software tools: AED 3,600/yr
→ 25 billable hours/week × 46 weeks = 1,150 hrs/yr

(AED 20K × 12 + AED 16,100 overhead) ÷ 1,150 hours = AED 267/hr minimum

Most freelancers in Dubai are charging AED 100-150.

They wonder why they feel broke while being busy.

Free rate calculator at solokit.cloud/blog/freelance-rate-calculator-uae

#DubaiFreelancer #FreelanceRates #FreelanceUAE #UAE #Freelancing`,
  },
  {
    id: 2,
    format: "Quote card",
    hook: "Your rate is not your income.",
    caption: `"Your rate is not your income."

AED 300/hr billing rate.
4 weeks unpaid during slow months = AED 0 for those weeks.
Health insurance: AED 5,000/yr.
Visa renewal: AED 7,500/yr.

The real number is always different from the headline rate.

Know your actual take-home before you set your goals.

#DubaiFreelancer #FreelanceUAE #UAE #FreelanceTips`,
  },
  {
    id: 3,
    format: "Static image post",
    hook: "50% upfront. Always.",
    caption: `50% upfront.

Not because clients are dishonest.

Because when a client has paid 50% upfront:
→ They show up to calls on time
→ They give feedback faster
→ They don't ghost when you deliver
→ They take the project seriously

The deposit creates shared commitment.

If a client refuses a deposit — that tells you something important.

#FreelanceUAE #DubaiFreelancer #ClientWork #GetPaid #UAE`,
  },
];

const strategyPoints = [
  {
    title: "Reels first",
    desc: "Instagram pushes Reels to non-followers. Do 1 Reel per day for the first 30 days.",
  },
  {
    title: "Carousels for saves",
    desc: "Saves are a strong ranking signal. Educational carousels (5-8 slides) get saved most.",
  },
  {
    title: "CTA on every post",
    desc: 'End every caption with "link in bio → solokit.cloud" or "save this for later."',
  },
  {
    title: "Hashtags",
    desc: "Use 5-8 per post. Mix: 2 large (#FreelanceUAE), 3 medium (#DubaiFreelancer), 3 small (#FreelanceToolsDubai).",
  },
  {
    title: "Stories daily",
    desc: "Post 3-5 stories per day — polls, questions, behind the scenes. Stories keep you in the algorithm.",
  },
  {
    title: "Don't post and ghost",
    desc: "Reply to every comment in the first hour — this signals engagement to the algorithm.",
  },
];

export default function InstagramPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-pink-400 shrink-0" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">SoloKit Content Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Instagram Content Library</h1>
            <p className="text-gray-300 text-lg mb-6 max-w-xl">10 reels, carousels &amp; static posts for @solokitco. Ready to copy, customise, and post.</p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Account</span>
                <span className="ml-2 font-semibold text-white">@solokitco</span>
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
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">

          {/* Account setup */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Username", value: "@solokitco (or @solokit.ae)" },
              { label: "Name", value: "SoloKit — Tools for UAE Freelancers" },
              { label: "Category", value: "Software Company" },
              { label: "Link in bio", value: "solokit.cloud" },
              { label: "Post frequency", value: "1× per day (reels + carousels)" },
              { label: "Best times (UAE)", value: "7-9 AM, 12-2 PM, 7-9 PM" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>

          {/* Content mix */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
            <p className="text-sm font-bold text-emerald-800 mb-3">Content mix (per week)</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm text-emerald-700">
              <div className="flex gap-2"><span className="text-emerald-400">→</span> 3× Reels (talking head or text animation) — highest reach</div>
              <div className="flex gap-2"><span className="text-emerald-400">→</span> 2× Carousels — highest saves, great for discovery</div>
              <div className="flex gap-2"><span className="text-emerald-400">→</span> 2× Static posts — quotes, stats, quick tips</div>
              <div className="flex gap-2"><span className="text-emerald-400">→</span> Daily Stories: behind-the-scenes, polls, Q&amp;A</div>
            </div>
          </div>

          {/* Reels */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Reels &amp; Talking Head Videos
            </h2>
            <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">🔥 High reach = marked</span>
          </div>

          <div className="space-y-5 mb-12">
            {reels.map((r) => (
              <div key={r.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center shrink-0">
                    {r.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {r.viral && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">High reach potential</span>
                      )}
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{r.format}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{r.duration}</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{r.hook}</p>
                  </div>
                </div>
                <div className="px-5 py-4 space-y-4">
                  {r.slides && (
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Slide outline</p>
                      <ul className="space-y-1.5">
                        {r.slides.map((slide) => (
                          <li key={slide} className="flex gap-2 text-xs text-gray-600">
                            <span className="text-emerald-400 shrink-0">→</span>
                            {slide}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Caption — copy &amp; paste</p>
                    <pre className="text-xs text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                      {r.caption}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Static posts */}
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-5">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Static Posts &amp; Quote Cards
          </h2>
          <div className="space-y-5 mb-12">
            {staticPosts.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center shrink-0">
                    {p.id}
                  </span>
                  <div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2 inline-block">{p.format}</span>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{p.hook}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Caption — copy &amp; paste</p>
                  <pre className="text-xs text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                    {p.caption}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Posting strategy</span>
            <h2 className="text-xl font-bold mb-5">Instagram growth playbook</h2>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Reels first</p>
                <p>Instagram pushes Reels to non-followers. Do 1 Reel per day for the first 30 days.</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Carousels for saves</p>
                <p>Saves are a strong ranking signal. Educational carousels (5-8 slides) get saved most.</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">CTA on every post</p>
                <p>End every caption with &ldquo;link in bio → solokit.cloud&rdquo; or &ldquo;save this for later.&rdquo;</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Hashtags</p>
                <p>Use 5-8 per post. Mix: 2 large (#FreelanceUAE), 3 medium (#DubaiFreelancer), 3 small (#FreelanceToolsDubai).</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Stories daily</p>
                <p>Post 3-5 stories per day — polls, questions, behind the scenes. Stories keep you in the algorithm.</p>
              </div>
              <div className="border-l-2 border-gray-600 pl-4">
                <p className="font-semibold text-gray-400 mb-0.5">Don&apos;t</p>
                <p>Post and ghost. Reply to every comment in the first hour — this signals engagement to the algorithm.</p>
              </div>
            ))}
          </div>

          {/* Strategy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
              Instagram Strategy
            </h2>
            <div className="space-y-4">
              {strategyPoints.map(({ title, desc }) => (
                <div key={title} className="border-l-2 border-emerald-500 pl-4">
                  <p className="text-sm font-bold text-emerald-400 mb-1">{title}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link href="/blog" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
                Browse blog articles to turn into Reels →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
