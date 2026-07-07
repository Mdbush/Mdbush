import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Freelance Platforms in the UAE (2026) — Where to Find Clients",
  description:
    "Upwork, Fiverr, Toptal, and local UAE platforms compared. Where UAE-based freelancers actually find high-paying clients in 2026 — and which platforms to avoid.",
  alternates: { canonical: "/blog/best-freelance-platforms-uae" },
  openGraph: {
    title: "Best Freelance Platforms in the UAE (2026)",
    description: "Upwork, Fiverr, Toptal, and UAE-specific platforms compared for freelancers in Dubai and Abu Dhabi.",
    type: "article",
    url: "/blog/best-freelance-platforms-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Freelance Platforms in the UAE (2026) — Where to Find Clients",
  description:
    "Upwork, Fiverr, Toptal, and local UAE platforms compared for freelancers in Dubai and Abu Dhabi.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/best-freelance-platforms-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/best-freelance-platforms-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "best freelance platforms UAE",
    "freelance jobs Dubai",
    "Upwork UAE",
    "Fiverr UAE",
    "find freelance clients UAE",
    "freelance work Dubai",
  ],
};

const platforms = [
  {
    name: "Upwork",
    tag: "Best Overall",
    tagColor: "bg-emerald-100 text-emerald-800",
    url: "upwork.com · Global · Works from UAE",
    body: "The largest freelance marketplace in the world. If you can build a profile with strong reviews, Upwork generates consistent international client leads. The competition is fierce at entry level but drops significantly once you hit $10K+ earned and Top Rated status.",
    pros: ["Massive client base", "USD billing — great for UAE residents", "Long-term contracts possible", "Escrow payment protection"],
    cons: ["20% fee (drops to 10% at $500+)", "High competition at entry level", "Pays via Payoneer/bank — not instant", "Connects (credits) cost money"],
    tip: "Set your profile timezone to UAE and mention 'Dubai' or 'UAE' in your bio — some clients specifically seek UAE-based talent for overlap hours or regional knowledge.",
  },
  {
    name: "Fiverr",
    tag: "Best for Beginners",
    tagColor: "bg-blue-100 text-blue-800",
    url: "fiverr.com · Global · Works from UAE",
    body: "Fiverr lets you sell pre-packaged 'gigs' rather than bidding on jobs. If you can define your service clearly (e.g. 'I will design a Canva pitch deck in 48 hours'), Fiverr works well for building early social proof and recurring income from repeatable work.",
    pros: ["No proposals — clients find you", "Good for repeatable services", "Fiverr Pro tier = premium pricing"],
    cons: ["20% fee on all earnings", "14-day clearance period", "Race-to-bottom pricing culture", "Hard to scale beyond $100/gig"],
    tip: "",
  },
  {
    name: "Toptal",
    tag: "Highest Rates",
    tagColor: "bg-purple-100 text-purple-800",
    url: "toptal.com · Global · Open to UAE residents",
    body: "Toptal accepts only the top 3% of applicants through a rigorous vetting process (screening call, technical interview, test project, live session). If you pass, you get access to Fortune 500 and high-growth startup clients paying $80–$200+/hour in USD.",
    pros: ["$80–$200+/hour rates", "Top-tier clients (Airbnb, Pfizer, etc.)", "No fee to freelancers", "Clients vetted by Toptal"],
    cons: ["Hard to get accepted (3% rate)", "Technical roles only (dev, design, finance)", "Not suitable for beginners"],
    tip: "",
  },
  {
    name: "LinkedIn (Direct Outreach)",
    tag: "Best for UAE Local",
    tagColor: "bg-amber-100 text-amber-800",
    url: "linkedin.com · Professional network · Dominant in UAE",
    body: "LinkedIn is not a freelance marketplace but it's where UAE business decision-makers are most active. A strong LinkedIn profile + consistent content + targeted outreach generates warm inbound leads. For UAE freelancers targeting local clients, it outperforms every marketplace.",
    pros: ["Zero platform fee", "Direct relationship with clients", "UAE decision-makers most active here", "Builds long-term referral network"],
    cons: ["Requires consistent content effort", "No payment protection", "Slow to build — weeks to months"],
    tip: "Post 3× per week about your niche (results > process). Connect with 10–15 new ICP contacts per week. Send 5 personalized cold DMs per week (not copy-paste). Comment thoughtfully on prospects' posts before DMing.",
  },
  {
    name: "Nabbesh",
    tag: "UAE-Specific",
    tagColor: "bg-orange-100 text-orange-800",
    url: "nabbesh.com · Arab world focus · Dubai-based",
    body: "Nabbesh is the Middle East's dedicated freelance platform — think Upwork but built for the Arab world. Clients are primarily from the UAE, Saudi Arabia, and Egypt. Payments can be arranged in AED or USD. Competition is lower than Upwork because the platform is smaller.",
    pros: ["AED-denominated projects", "Arab region clients", "Lower competition than Upwork"],
    cons: ["Smaller client pool", "Rate pressure from low-cost markets", "Less polished than Upwork"],
    tip: "",
  },
];

const platformStacks = [
  {
    profile: "Starting out (0-2 years experience)",
    stack: "Fiverr + LinkedIn",
    reason: "Fiverr builds reviews fast. LinkedIn builds relationships that convert to higher-paying referrals.",
  },
  {
    profile: "Mid-level (3-6 years, AED 15-30K/month target)",
    stack: "Upwork + LinkedIn",
    reason: "Upwork gives steady international pipeline. LinkedIn builds local UAE client base. Together they diversify risk.",
  },
  {
    profile: "Senior (6+ years, AED 30K+/month target)",
    stack: "Toptal + direct referrals",
    reason: "Apply to Toptal for premium international work. Build a referral network from past clients for local high-value work.",
  },
  {
    profile: "Local focus (UAE clients only)",
    stack: "LinkedIn + Nabbesh",
    reason: "Both have Dubai/Abu Dhabi-based clients. LinkedIn for corporate, Nabbesh for SME.",
  },
];

const feeComparison = [
  { name: "Upwork", fee: "20% → 10% → 5%", notes: "Decreases as you earn more per client" },
  { name: "Fiverr", fee: "20% flat", notes: "Always 20%, no matter volume" },
  { name: "Toptal", fee: "0% to freelancer", notes: "Toptal charges the client, not you" },
  { name: "PeoplePerHour", fee: "20% → 7.5% → 3.5%", notes: "Drops after £500 then £5,000 per client" },
  { name: "Nabbesh", fee: "Varies", notes: "Check current terms — fees change" },
  { name: "LinkedIn (direct)", fee: "0%", notes: "No platform fee — you keep 100%" },
];

const statsData = [
  { value: "0% Fee", label: "LinkedIn (direct)" },
  { value: "20% → 5%", label: "Upwork Fee" },
  { value: "$80–$200/hr", label: "Toptal Rates (USD)" },
];

export default function BestFreelancePlatformsUAEPage() {
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
          <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>›</span>
            <span className="text-gray-600">Best Freelance Platforms UAE</span>
          </nav>

          {/* Hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Client Acquisition</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Best Freelance Platforms in the UAE (2026): Where to Actually Find Clients</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Most guides list the same 5 platforms and say &ldquo;try them all.&rdquo; This one doesn&apos;t. Here&apos;s where UAE-based freelancers actually land clients in 2026 — based on platform fees, competition levels, and the reality of billing in AED.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 16, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {statsData.map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Quick summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
            <h2 className="font-bold text-gray-900 mb-3">Quick Summary</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Best for high-ticket work:</strong> Upwork (if your profile is strong)</li>
              <li><strong>Fastest to start:</strong> Fiverr (gig-based, no proposals needed)</li>
              <li><strong>Highest rates:</strong> Toptal (vetted, 3% acceptance rate)</li>
              <li><strong>Best for UAE/local clients:</strong> LinkedIn + direct outreach</li>
              <li><strong>Best for Gulf region work:</strong> Nabbesh + LinkedIn</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Platform-by-Platform Review
          </h2>

          <div className="space-y-4 mb-8">
            {platforms.map((platform, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-lg text-gray-900">{platform.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full shrink-0 ${platform.tagColor}`}>{platform.tag}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{platform.url}</p>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{platform.body}</p>
                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-widest">Pros</p>
                    <ul className="space-y-1.5 text-gray-700">
                      {platform.pros.map((pro) => (
                        <li key={pro} className="flex gap-1.5"><span className="text-emerald-500 shrink-0">✓</span>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-widest">Cons</p>
                    <ul className="space-y-1.5 text-gray-700">
                      {platform.cons.map((con) => (
                        <li key={con} className="flex gap-1.5"><span className="text-red-400 shrink-0">✗</span>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {platform.tip && (
                  <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                    <span className="font-semibold text-gray-700">UAE tip: </span>{platform.tip}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>The Right Platform Stack for UAE Freelancers
          </h2>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Don&apos;t try to be everywhere. Pick two platforms and commit for 90 days. Here&apos;s the combination that works for different goals:
          </p>

          <div className="space-y-3 mb-8">
            {platformStacks.map(({ profile, stack, reason }) => (
              <div key={profile} className="border border-gray-200 rounded-xl p-5">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">{profile}</p>
                <p className="font-bold text-gray-900 mb-1">{stack}</p>
                <p className="text-sm text-gray-600">{reason}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Platform Fee Comparison
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3"><h2 className="text-sm font-bold text-white">Platform Fee Benchmarks 2026</h2></div>
            <div className="divide-y divide-gray-100">
              {feeComparison.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{row.notes}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.fee}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold mb-3">The Long Game: Off-Platform Clients</h2>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Every platform is a starting point, not a destination. The goal is to build relationships
              that move <em>off</em> the platform — where you keep 100% and have a direct relationship
              with the client.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              A client you&apos;ve worked with twice on Upwork can be invited to pay you directly after
              that. Propose a retainer via your own invoice system. Most clients are happy to skip the
              platform fee split if you offer a small discount — and you still earn more.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/bundle" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related */}
          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/get-freelance-clients-uae", title: "How to Get Freelance Clients in the UAE (6 Strategies)" },
                { href: "/blog/freelance-proposal-tips-uae", title: "How to Write a Freelance Proposal That Wins" },
                { href: "/blog/freelance-rate-calculator-uae", title: "Freelance Rate Calculator UAE: How Much to Charge" },
                { href: "/blog/freelance-visa-uae", title: "How to Get a Freelance Visa in the UAE" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">
                  → {link.title}
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
