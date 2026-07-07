import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Freelance Clients on LinkedIn in Dubai/UAE (2026) — SoloKit",
  description:
    "Step-by-step guide to finding and winning freelance clients through LinkedIn in the UAE in 2026. Profile optimisation, outreach scripts, hashtags, and Ramadan strategy.",
  alternates: { canonical: "/blog/how-to-get-clients-on-linkedin-uae" },
  openGraph: {
    title: "How to Get Freelance Clients on LinkedIn in Dubai/UAE (2026)",
    description:
      "UAE-specific LinkedIn playbook for freelancers — profile tips, cold DM scripts, best posting times in GST, Sales Navigator value, and Ramadan content strategy.",
    type: "article",
    url: "/blog/how-to-get-clients-on-linkedin-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Freelance Clients on LinkedIn in Dubai/UAE (2026)",
  description:
    "Step-by-step guide to finding and winning freelance clients through LinkedIn in the UAE in 2026. Profile optimisation, outreach scripts, hashtags, and Ramadan strategy.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-get-clients-on-linkedin-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-get-clients-on-linkedin-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "LinkedIn freelance clients UAE",
    "LinkedIn Dubai freelancer",
    "how to get clients LinkedIn UAE",
    "LinkedIn Sales Navigator UAE",
    "Dubai LinkedIn strategy freelancer",
    "UAE LinkedIn outreach",
  ],
};

const postingTimes = [
  { day: "Sunday", best: "8:00–10:00am GST", second: "12:00–1:00pm GST", notes: "First workday of UAE week — high engagement" },
  { day: "Monday", best: "8:00–10:00am GST", second: "12:00–1:00pm GST", notes: "Strong opening-week activity" },
  { day: "Tuesday", best: "9:00–11:00am GST", second: "1:00–2:00pm GST", notes: "Mid-week peak, good for long-form" },
  { day: "Wednesday", best: "9:00–11:00am GST", second: "12:00–1:00pm GST", notes: "Solid engagement, post insights/data" },
  { day: "Thursday", best: "8:00–10:00am GST", second: "12:00–1:00pm GST", notes: "Last full day before UAE weekend" },
  { day: "Friday", best: "Avoid", second: "—", notes: "UAE weekend starts — minimal engagement" },
  { day: "Saturday", best: "Avoid or 9am", second: "—", notes: "Weekend — post only if targeting global audience" },
];

export default function HowToGetClientsOnLinkedInUAEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">How to Get Clients on LinkedIn UAE</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">CLIENT ACQUISITION</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Get Freelance Clients on LinkedIn in Dubai/UAE (2026)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              The UAE has 4.5 million+ LinkedIn users — one of the highest per-capita rates on earth. But the playbook for winning clients here is different from what works in the US or UK. This guide covers the UAE-specific strategy that actually converts.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 16, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>

          {/* Key stat box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">Why LinkedIn Matters More in the UAE</p>
            <ul className="space-y-1.5 text-sm text-emerald-800">
              <li><strong>4.5 million+ UAE LinkedIn users</strong> — one of the highest per-capita rates globally</li>
              <li><strong>Dubai and Abu Dhabi</strong> are among the most LinkedIn-active cities in the world</li>
              <li><strong>Relationship-first business culture</strong> — LinkedIn bridges digital and in-person networking</li>
              <li><strong>3–5%</strong> of targeted connection requests lead to conversations (vs 1–2% global average)</li>
              <li><strong>Sales Navigator</strong> worth ~AED 450/month for active prospectors</li>
            </ul>
          </div>

          {/* Section 1 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Step 1: Optimise Your Profile for UAE Searches
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            Before sending a single connection request, your profile must communicate clearly to a UAE decision-maker who lands on it cold. In the UAE market, your profile needs to do three things instantly: show what you do, show that you are credible in this region, and make it easy to reach you.
          </p>

          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Headline: Be Specific and Location-Aware</h3>
              <p className="text-sm text-gray-600 mb-3">
                Your headline is the single most-searched field on LinkedIn. Do not use vague titles like &quot;Creative Professional&quot; or &quot;Freelancer.&quot; Instead, name your niche and include UAE/Dubai in the headline. Examples that work in the UAE market:
              </p>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 space-y-1">
                <p>→ <strong>Freelance Brand Designer · Dubai · Helping UAE startups launch strong visual identities</strong></p>
                <p>→ <strong>Corporate Video Producer · UAE · Brand films for FMCG &amp; real estate companies</strong></p>
                <p>→ <strong>B2B Copywriter · Dubai · SaaS &amp; Fintech | English + Arabic-aware content</strong></p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">About Section: Arabic/English Dual Keywords</h3>
              <p className="text-sm text-gray-600 mb-3">
                The UAE is a bilingual market. Even if you work only in English, many LinkedIn searches in the UAE include Arabic terms. Adding a line in Arabic to your About section — even a simple &quot;أعمل مع الشركات في دبي وأبوظبي&quot; (I work with companies in Dubai and Abu Dhabi) — signals cultural awareness and appears in Arabic-language searches. For design-heavy profiles, use LinkedIn&apos;s Featured section to pin your three best projects with clear UAE client names or logos where permitted.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>→ Include UAE-specific credentials: SHAMS/DMC permit, years working in UAE, emirate-specific experience</p>
                <p>→ Mention industries you know well: real estate, hospitality, government, FMCG, tech</p>
                <p>→ Add your WhatsApp number — UAE business culture expects it</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Experience &amp; Skills: Name UAE Companies</h3>
              <p className="text-sm text-gray-600 mb-3">
                UAE decision-makers respond to recognisable local brand names. If you have worked with Emaar, ENOC, flydubai, Chalhoub Group, Majid Al Futtaim, or any government entity — name them explicitly in your experience entries. Even short projects count. If you are newer to the market, list agencies or studios you have contracted through. Social proof in the UAE market is heavily weighted towards &quot;I know someone who knows your work&quot; — your profile is a reference document for that conversation.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Step 2: Content Strategy for the UAE Market
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            In the UAE, LinkedIn content works differently from other markets. The platform skews heavily professional and decision-maker rich — marketing directors, CMOs, startup founders, and government communications leads are all active. Content that performs well here is specific, data-driven, and locally relevant. Generic motivational posts vastly underperform compared to posts about UAE industry trends, real case studies, and transparent breakdowns of your work.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Content Types That Work in UAE</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">→</span><span>UAE industry-specific insights (&quot;What I noticed in Dubai&apos;s F&amp;B marketing this year&quot;)</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">→</span><span>Before/after project breakdowns with real client context (anonymise if needed)</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">→</span><span>Transparent pricing or process posts (&quot;Here is what a AED 15,000 brand film actually includes&quot;)</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">→</span><span>Short-form video content — LinkedIn video gets 5× the reach of text-only posts in the UAE</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">→</span><span>Ramadan and UAE National Day reflective posts (culturally relevant, high engagement)</span></li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">UAE-Specific Hashtags to Use</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">#</span><span><strong>#DubaiFreelancer</strong> — direct niche signal</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">#</span><span><strong>#UAEBusiness</strong> — broad, high-reach</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">#</span><span><strong>#DubaiStartups</strong> — startup ecosystem</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">#</span><span><strong>#UAEFreelancer</strong> — community tag</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">#</span><span><strong>#DigitalMarketingDubai</strong> — niche B2B</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">#</span><span><strong>#AbuDhabiBusiness</strong> — capital market</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0 font-bold">#</span><span><strong>#GITEX</strong> or <strong>#ArabianTravelMarket</strong> during major events</span></li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Best Posting Times in UAE (GST)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The UAE workweek runs Sunday through Thursday. This fundamentally changes the optimal LinkedIn posting schedule compared to western markets, where Monday-Friday rhythms dominate. Post during UAE business hours — 8:00–10:00am and 12:00–1:00pm GST (Gulf Standard Time, UTC+4) — for maximum reach among Dubai and Abu Dhabi professionals.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Day</th>
                  <th className="text-left px-4 py-3 font-semibold">Best Window</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Second Window</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {postingTimes.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.day}</td>
                    <td className={`px-4 py-3 font-semibold ${row.best === "Avoid" ? "text-red-500" : "text-emerald-700"}`}>{row.best}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.second}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 3 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Step 3: Outreach That Works in UAE Business Culture
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            UAE business culture is <strong>relationship-first, then transaction.</strong> Cold outreach that leads immediately with a sales pitch performs poorly — even worse than in western markets. The UAE professional network is tight, trust is paramount, and the implicit question before any business conversation is: &quot;Do I know you, or does someone I trust know you?&quot; Your outreach strategy needs to reflect this.
          </p>

          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">The 3-Step Warm-Up Approach</h3>
              <p className="text-sm text-gray-600 mb-3">
                Before sending a connection request to a decision-maker, spend one week engaging with their content. Comment thoughtfully on 2–3 of their posts — not &quot;Great post!&quot; but a genuine observation or question that shows you read their content and have a relevant perspective. This creates a name-recognition moment before your connection request arrives, making it feel less cold.
              </p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>→ Week 1: Follow and engage meaningfully with their posts</li>
                <li>→ Week 2: Send a personalised connection request referencing shared content or mutual connections</li>
                <li>→ Week 3: After they accept, wait 3–5 days, then open with a value-first DM</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">UAE-Tuned Cold DM Script</h3>
              <p className="text-sm text-gray-600 mb-3">
                When you do send a direct message, lead with something specific to their business — not a generic pitch. Here is a template that works in the UAE context:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                <p className="mb-2">Hi [Name],</p>
                <p className="mb-2">I noticed your post about [specific topic] last week — your point about [specific detail] resonated with me, especially given what I see working with [type of client] in Dubai.</p>
                <p className="mb-2">I am a freelance [your niche] working with [type of companies] across the UAE. I recently helped [anonymised company/industry] achieve [specific result] — happy to share more detail if it is relevant to what you are working on.</p>
                <p>No pitch here — just thought it might be worth a conversation. Are you open to a quick call or coffee in [their city]?</p>
              </div>
              <div className="text-xs text-gray-500 mt-3 space-y-1">
                <p>→ Keep messages under 150 words — UAE executives are time-pressed</p>
                <p>→ Offer coffee in person — relationship culture strongly favours face-to-face early on</p>
                <p>→ Typical conversion: 3–5% of targeted requests lead to meaningful conversations</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn Sales Navigator: Is It Worth It?</h3>
              <p className="text-sm text-gray-600 mb-3">
                LinkedIn Sales Navigator costs approximately AED 450/month (individual plan) in the UAE. For active freelance prospectors who send 20–30 targeted outreach messages per month, it typically pays for itself from a single new client. The key features that justify the cost in the UAE market: InMail credits to reach outside your network, advanced filters (industry, company size, UAE-specific geography), lead lists to track warm prospects, and alerts when target prospects change roles or post content — a natural outreach trigger.
              </p>
              <p className="text-sm text-gray-600">
                Verdict: Worth it if you are actively prospecting and have a clear ICP (ideal client profile). Not worth it if you are passively posting and waiting for inbound — invest that AED 450/month in better content production instead.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-1">LinkedIn Local Dubai: IRL Follow-Ups</p>
            <p className="text-sm text-emerald-800">
              LinkedIn Local is a global network of in-person events for LinkedIn users. LinkedIn Local Dubai events happen regularly across the city — Business Bay, JLT, and DIFC host them most frequently. Attending one event where you have already been engaging with attendees online converts digital interactions into real relationships dramatically faster. The UAE business culture places enormous weight on face-to-face trust; a 15-minute in-person conversation can move faster than 6 weeks of DMs. Search &quot;LinkedIn Local Dubai&quot; on Eventbrite or Meetup.com to find upcoming events.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Ramadan LinkedIn Strategy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Ramadan is a unique period for LinkedIn activity in the UAE. Overall post volume on the platform drops by approximately 40% during the holy month — but engagement rates on the posts that do go up increase significantly. This creates a window of outsized reach for freelancers who continue posting through Ramadan.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What Changes During Ramadan</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Work hours shift — many businesses operate 9am–2pm officially</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>LinkedIn is checked later in the day, often after iftar (post-sunset meal)</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Best posting times shift to 9–11am and <strong>9–11pm GST</strong> (post-iftar scrolling peak)</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Aggressive sales outreach is culturally inappropriate during Ramadan — dial back pitching</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Relationship-building content (giving, sharing, community) outperforms promotional content</span></li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Ramadan Content That Works</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Share a free resource or guide genuinely useful to your target audience</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Reflective posts about your work journey — storytelling resonates strongly</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Ramadan Kareem greeting post with a personal note about what the month means to you</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Industry retrospective: &quot;What changed in [your niche] this year&quot;</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span><span>Eid Al Fitr post (last day/day after Ramadan) — warm, celebratory, high reach</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-1">The Real Secret: Consistency Over 90 Days</p>
            <p className="text-sm text-emerald-800">
              The freelancers who consistently win clients through LinkedIn in the UAE are not the ones with the most followers — they are the ones who show up reliably. Posting 2–3 times per week for 90 consecutive days, engaging genuinely with their target clients&apos; content, and following up on every conversation creates a compounding effect that single viral posts never match. Set a 90-day LinkedIn experiment: post Tuesday and Thursday every week, comment on 5 target-client posts every Monday and Wednesday, and send 3 personalised connection requests every Friday. Track your pipeline at the end of each month — most freelancers see their first inbound lead from LinkedIn within 60 days of consistent effort.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Converting LinkedIn Conversations into Paid Projects
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Getting a reply is not the same as getting a client. UAE decision-makers are busy and easily distracted by the next thing. When a LinkedIn conversation starts to move, your job is to compress the timeline from &quot;nice chat&quot; to &quot;signed contract.&quot; A few tactics that work in the UAE market:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Propose a 20-minute call, not a 1-hour meeting — lower barrier to yes, easier to schedule around UAE workweek rhythms",
              "Send a WhatsApp follow-up after connecting on LinkedIn — in the UAE, WhatsApp is the primary business communication channel and signals you are ready to work",
              "Bring a one-page capability overview to any in-person coffee meeting — UAE executives respond well to a tangible, branded leave-behind",
              "Quote quickly — same day if possible. In the UAE market, speed signals professionalism and eagerness to serve the client",
              "Use a 50% upfront / 50% on delivery payment structure — standard in UAE freelance market and protects both parties",
              "Follow up exactly once, 5 working days after a proposal, with a specific and helpful value-add — not just a nudge",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools Built for UAE Freelancers</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              From client CRM to AED invoicing and proposal templates — everything you need to run a professional UAE freelance business.
            </p>
            <Link
              href="/"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Explore SoloKit →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in AED" },
                { href: "/blog/freelance-visa-uae", label: "How to Get a Freelance Visa in the UAE" },
                { href: "/blog/best-banks-freelancers-uae", label: "Best Banks for Freelancers in the UAE" },
                { href: "/blog/freelance-photographer-rates-uae", label: "Freelance Photographer Rates in the UAE (2026)" },
                { href: "/blog/freelance-videographer-rates-uae", label: "Freelance Videographer Rates in the UAE (2026)" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-emerald-700 hover:text-emerald-900 text-sm">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
