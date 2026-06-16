import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Instagram Content — SoloKit",
  robots: { index: false, follow: false },
};

const instagramRules = [
  {
    rule: "Reels dominate reach",
    detail: "Instagram's algorithm pushes Reels to non-followers more than any other format. If you want discovery and new followers, Reels are your primary vehicle. Post at least 3 per week.",
  },
  {
    rule: "Carousels drive saves",
    detail: "Saves are a strong ranking signal — they tell the algorithm the content was worth keeping. Educational carousels (5–8 slides) consistently get the most saves. Post 2 carousels per week.",
  },
  {
    rule: "Stories for daily presence",
    detail: "Stories keep you visible without competing in the main feed. Post 3–5 daily: polls, questions, behind-the-scenes, product sneak peeks. Stories views signal account health to the algorithm.",
  },
  {
    rule: "Hook in the first frame",
    detail: "The first frame of a Reel or the first slide of a carousel must earn the scroll-stop. Text overlays on video should appear within the first 1–2 seconds. No slow intros.",
  },
  {
    rule: "Hashtags: 5–8 per post, mix sizes",
    detail: "Use 5–8 hashtags maximum. Mix: 2 large (#FreelanceUAE, 100K+ posts), 3 medium (#DubaiFreelancer, 20K–100K posts), 2–3 small (#FreelanceToolsDubai, under 20K). Never use 30 hashtags.",
  },
  {
    rule: "CTA on every post",
    detail: "End every caption with 'Link in bio → solokit.cloud' or 'Save this for later.' Saves and bio clicks are both ranking signals. Pick one CTA per post — don't ask for both.",
  },
  {
    rule: "Reply to every comment in the first hour",
    detail: "Engagement velocity in the first 60 minutes tells the algorithm how to distribute the post. Set a reminder. Reply to every comment. Each reply counts as additional engagement.",
  },
];

const storiesStrategy = [
  { day: "Monday", type: "Poll", example: "'Do you track your freelance income in a spreadsheet or Notion?' — Yes / No" },
  { day: "Tuesday", type: "Question sticker", example: "'What's your biggest freelance challenge right now?' — reshare answers as content" },
  { day: "Wednesday", type: "Behind the scenes", example: "Screen recording of the Notion CRM in use, or a product screenshot with a caption overlay" },
  { day: "Thursday", type: "Countdown / teaser", example: "New blog post or product launch teaser — 'Dropping tomorrow'" },
  { day: "Friday", type: "Re-share a Reel", example: "Repost the week's best-performing Reel into Stories with 'In case you missed it'" },
  { day: "Saturday", type: "Community", example: "Re-share a follower comment or DM (with permission) — builds social proof" },
  { day: "Sunday", type: "Quick tip", example: "One actionable tip as a text slide — something new followers can use immediately" },
];

const hashtagSets = [
  {
    size: "Large (100K+ posts)",
    tags: "#FreelanceUAE #DubaiFreelancer #Freelancing #UAE #Dubai",
    note: "Use 2 per post — discovered by large audiences but high competition",
  },
  {
    size: "Medium (20K–100K posts)",
    tags: "#UAEFreelancer #DubaiSolopreneur #UAEBusiness #FreelanceLife #DubaiEntrepreneur",
    note: "Use 3 per post — best balance of reach and competition",
  },
  {
    size: "Small (under 20K posts)",
    tags: "#FreelanceToolsDubai #DubaiRemoteWork #UAEFreelanceTips #SoloKitUAE",
    note: "Use 2–3 per post — easier to rank in, builds a niche community",
  },
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

          {/* Dark hero — Instagram identity */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              {/* Instagram pink platform badge */}
              <span className="inline-flex items-center gap-1.5 bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Visual-first · Reels dominate · Carousels save</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Instagram Content Library</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              10 reels + carousels + static posts for @solokitco. Weekly mix: 3 Reels for reach, 2 Carousels for saves, 2 Static posts, Daily Stories for presence.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Account</span>
                <span className="ml-2 font-semibold text-white">@solokitco</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Weekly mix</span>
                <span className="ml-2 font-semibold text-white">3 Reels + 2 Carousels + 2 Static + Daily Stories</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Best times (UAE)</span>
                <span className="ml-2 font-semibold text-white">7–9 AM · 12–2 PM · 7–9 PM</span>
              </div>
            </div>
          </div>

          {/* Instagram protocol */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Instagram Protocol — read before posting
          </h2>
          <div className="space-y-3 mb-10">
            {instagramRules.map(({ rule, detail }) => (
              <div key={rule} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0"></span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{rule}</p>
                    <p className="text-sm text-gray-600">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Account Setup */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Account Setup + Bio Formula
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { label: "Username", value: "@solokitco (or @solokit.ae)" },
              { label: "Name field", value: "SoloKit — Tools for UAE Freelancers" },
              { label: "Category", value: "Software Company" },
              { label: "Link in bio", value: "solokit.cloud" },
              { label: "Bio formula", value: "What you do → Who you serve → Social proof → CTA" },
              { label: "Bio example", value: "Notion + AI tools for UAE freelancers | Used by 2,000+ | Free rate calculator ↓" },
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
            Weekly Content Mix
          </h2>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-3">Per week — in priority order</p>
            <div className="space-y-2 text-sm text-emerald-700">
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">3×</span> Reels (talking head or text animation) — highest reach, pushes to non-followers</div>
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">2×</span> Carousels — highest saves, great for discovery and educational content</div>
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">2×</span> Static posts — quote cards, stat graphics, quick tips</div>
              <div className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">Daily</span> Stories (3–5 per day): polls, questions, behind-the-scenes, reposts</div>
            </div>
          </div>

          {/* Reels & Videos */}
          <div className="flex items-center justify-between mb-5 mt-10">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Reels &amp; Carousels
            </h2>
            <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">High reach marked</span>
          </div>

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

          {/* Stories strategy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Stories Strategy — daily presence
          </h2>
          <p className="text-sm text-gray-500 mb-5">Stories don&apos;t compete for feed reach — they keep you visible and build intimacy. Post every day without exception.</p>
          <div className="space-y-2 mb-10">
            {storiesStrategy.map(({ day, type, example }) => (
              <div key={day} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                <div className="w-24 shrink-0">
                  <p className="text-xs font-bold text-gray-900">{day}</p>
                  <p className="text-xs text-pink-500 font-semibold mt-0.5">{type}</p>
                </div>
                <p className="text-sm text-gray-600">{example}</p>
              </div>
            ))}
          </div>

          {/* Hashtag strategy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Hashtag Strategy — 5–8 per post
          </h2>
          <p className="text-sm text-gray-500 mb-5">Pick from each tier. Never use 30 hashtags — it looks like spam and the algorithm has devalued it since 2022.</p>
          <div className="space-y-3 mb-10">
            {hashtagSets.map(({ size, tags, note }) => (
              <div key={size} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{size}</p>
                <p className="text-sm font-mono text-gray-800 mb-1.5">{tags}</p>
                <p className="text-xs text-gray-500">{note}</p>
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
