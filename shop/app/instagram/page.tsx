import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Instagram Content Library — SoloKit",
  robots: { index: false, follow: false },
};

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

export default function InstagramPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Instagram Content</span>
          </nav>

          {/* Dark hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Content Strategy</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Instagram Content Library — SoloKit</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">10 reels, carousels &amp; static posts for @solokitco. Ready to copy, customise, and post.</p>
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

          {/* Account Setup */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Account Setup
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
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

          {/* Content Mix */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Content Mix
          </h2>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Weekly content mix</p>
            <div className="space-y-1.5 text-sm text-emerald-700">
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span> 3× Reels (talking head or text animation) — highest reach</div>
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span> 2× Carousels — highest saves, great for discovery</div>
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span> 2× Static posts — quotes, stats, quick tips</div>
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span> Daily Stories: behind-the-scenes, polls, Q&amp;A</div>
            </div>
          </div>

          {/* Reels & Videos */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Reels &amp; Videos
          </h2>

          <div className="space-y-5 mb-10">
            {reels.map((r) => (
              <div key={r.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
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
                            <span className="text-emerald-500 shrink-0">→</span>
                            {slide}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Caption — copy &amp; paste</p>
                    <pre className="text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                      {r.caption}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Static Posts */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Static Posts &amp; Quote Cards
          </h2>

          <div className="space-y-5 mb-10">
            {staticPosts.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                    {p.id}
                  </span>
                  <div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2 inline-block">{p.format}</span>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{p.hook}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Caption — copy &amp; paste</p>
                  <pre className="text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                    {p.caption}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Strategy
          </h2>

          <div className="space-y-3 mb-10">
            {[
              { title: "Reels first", desc: "Instagram pushes Reels to non-followers. Do 1 Reel per day for the first 30 days." },
              { title: "Carousels for saves", desc: "Saves are a strong ranking signal. Educational carousels (5-8 slides) get saved most." },
              { title: "CTA on every post", desc: "End every caption with \"link in bio → solokit.cloud\" or \"save this for later.\"" },
              { title: "Hashtags", desc: "Use 5-8 per post. Mix: 2 large (#FreelanceUAE), 3 medium (#DubaiFreelancer), 3 small (#FreelanceToolsDubai)." },
              { title: "Stories daily", desc: "Post 3-5 stories per day — polls, questions, behind the scenes. Stories keep you in the algorithm." },
              { title: "Don't post and ghost", desc: "Reply to every comment in the first hour — this signals engagement to the algorithm." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
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
