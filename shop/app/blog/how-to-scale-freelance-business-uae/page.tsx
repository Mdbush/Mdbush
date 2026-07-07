import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Scale a Freelance Business in the UAE — From Solo to AED 100K/Month — SoloKit",
  description:
    "The 5 stages of scaling a freelance business in the UAE — from first client to AED 100K/month. Covers rates, retainers, subcontracting, products, and the systems you need at each level.",
  alternates: { canonical: "/blog/how-to-scale-freelance-business-uae" },
  openGraph: {
    title: "How to Scale a Freelance Business in the UAE — From Solo to AED 100K/Month",
    description:
      "The 5 stages of scaling a freelance business in the UAE — from first client to AED 100K/month.",
    type: "article",
    url: "/blog/how-to-scale-freelance-business-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Scale a Freelance Business in the UAE — From Solo to AED 100K/Month",
  description:
    "The 5 stages of scaling a freelance business in the UAE — from first client to AED 100K/month. Covers rates, retainers, subcontracting, products, and the systems you need at each level.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-scale-freelance-business-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-scale-freelance-business-uae",
};

const stages = [
  {
    range: "AED 0–10K/month",
    label: "Stage 1",
    name: "Foundation",
    focus: "Get consistent clients, not higher rates",
    points: [
      "Land 3–5 reliable clients",
      "Write your first contract template",
      "Set up a simple client tracking system",
      "Stop doing all-hourly — start doing fixed-price projects",
    ],
    danger: "Taking everything to stay busy, no systems yet",
    milestone: null,
  },
  {
    range: "AED 10K–25K/month",
    label: "Stage 2",
    name: "Stability",
    focus: "Raise rates, start saying no, build pipeline",
    points: [
      "Raise rates 20–30% (losing bottom clients is part of the process)",
      "Convert at least 1 client to a monthly retainer",
      "Build a basic follow-up system for past clients",
      "Create a consistent lead source (LinkedIn content, referrals, one platform)",
    ],
    danger: null,
    milestone: "First month where income is predictable before the month starts",
  },
  {
    range: "AED 25K–50K/month",
    label: "Stage 3",
    name: "Optimization",
    focus: "Price for value, not hours; work on the business not just in it",
    points: [
      "Move from hourly to project/retainer pricing entirely",
      "Raise minimum project size (don't take < AED 10K projects)",
      "Specialise — become the expert in one niche, not five",
      "Add 1 recurring income stream (retainer, subscription, digital product)",
    ],
    danger: null,
    milestone: "Revenue is no longer tied 1:1 to your hours worked",
  },
  {
    range: "AED 50K–80K/month",
    label: "Stage 4",
    name: "Leverage",
    focus: "Multiply output without multiplying hours",
    points: [
      "Start subcontracting: hire a specialist, take a 20–30% margin",
      "Create 1 digital product (template, course, tool) — passive income",
      "Systematise everything: client onboarding, proposals, delivery SOPs",
      "Build a team of 1–2 trusted contractors on retainer",
    ],
    danger: null,
    milestone: "Money comes in when you're on vacation",
  },
  {
    range: "AED 80K–100K+/month",
    label: "Stage 5",
    name: "Scalability",
    focus: "Build a product or firm that works without you",
    points: [
      "Agency model: you sell, subcontractors deliver",
      "Product model: digital products generating passive revenue",
      "Advisory model: charge premium for strategy, not execution",
    ],
    danger: "Most freelancers never need Stage 5 and shouldn't rush it",
    milestone: null,
  },
];

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Scale Freelance Business UAE</span>
          </nav>

          {/* Hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Business</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Scale a Freelance Business in the UAE — From Solo to AED 100K/Month
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              There&apos;s a ceiling in freelancing that most people hit and never break through.
              Here&apos;s how the ones who do actually get there — stage by stage.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 180K/yr", label: "Ceiling when billing hours alone at AED 150/hr" },
              { value: "18–36 months", label: "Typical time to reach AED 30–50K/month" },
              { value: "50–60%", label: "Target retainer income before Stage 4" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Run the numbers: AED 150/hr × 25 billable hours/week × 48 working weeks = AED 180,000 per year.
            That&apos;s roughly AED 15,000/month — and that&apos;s the ceiling for billing hours alone.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            To earn beyond that without working 60-hour weeks, you have to change the model itself:
            move from selling hours to selling outcomes, systems, and leverage. That&apos;s what scaling actually means.
          </p>

          {/* The 5 Stages */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The 5 Stages of Scaling
          </h2>

          <div className="space-y-4 mb-8">
            {stages.map((stage) => (
              <div key={stage.label} className="border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-white bg-gray-900 rounded-lg px-2.5 py-1">{stage.label}</span>
                  <span className="text-sm font-semibold text-gray-900">{stage.name}</span>
                  <span className="text-sm text-gray-400 ml-auto">{stage.range}</span>
                </div>
                <p className="text-sm font-medium text-gray-500 mb-3">
                  Focus: <span className="text-gray-700">{stage.focus}</span>
                </p>
                <ul className="space-y-1 mb-2">
                  {stage.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {stage.milestone && (
                  <p className="mt-3 text-sm text-emerald-800 bg-emerald-50 rounded-lg px-3 py-2">
                    <span className="font-semibold">Milestone: </span>{stage.milestone}
                  </p>
                )}
                {stage.danger && (
                  <p className="mt-3 text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                    <span className="font-semibold">Watch out: </span>{stage.danger}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Scale-Killers */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The 3 Scale-Killers to Avoid
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { killer: "Staying generalist too long", detail: "Niching is the fastest route to higher rates. 'I do social media, websites, branding, and email' makes you sound like a junior. 'I help Dubai SaaS companies grow organic leads' makes you sound like the answer to a specific problem." },
              { killer: "Not building systems", detail: "Without documented processes, you become the bottleneck for everything. Every new client requires the same manual effort. Every onboarding is rebuilt from scratch. Systems let you move faster — and eventually, let others move on your behalf." },
              { killer: "Adding complexity before profit is consistent", detail: "Don't hire a subcontractor when you're still at AED 15K/month with inconsistent clients. Don't build a course before your retainer income covers your costs. Each stage should be stable before you build the next layer." },
            ].map((item) => (
              <li key={item.killer} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{item.killer}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          {/* Retainer Formula */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Retainer Formula
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Retainers are the bridge between stages. They turn unpredictable project income into a salary you pay yourself.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Identify your best 3 clients — the ones with ongoing problems that match your skills</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Offer a monthly scope that solves their recurring problem (monthly content, ongoing ads management, weekly strategy calls)</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Price at roughly 20% less than equivalent project work. They pay for predictability; you get stability. Both sides win.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Target: 50–60% of income on retainer before you move into Stage 4</span>
            </li>
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Pro Tip</p>
            <p className="text-sm text-emerald-800">
              Most freelancers who scale systematically reach AED 30–50K in 18–36 months.
              The biggest time-waster is staying generalist while waiting for clients to &quot;discover&quot; you.
              Niche aggressively in year one and raise rates before you feel ready.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/bundle" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-price-freelance-services-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Price Your Freelance Services in the UAE</Link>
              <Link href="/blog/how-much-do-uae-freelancers-earn" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How Much Do Freelancers Earn in UAE? (2026 Income Guide)</Link>
              <Link href="/blog/get-freelance-clients-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Get Freelance Clients in the UAE (6 Strategies)</Link>
              <Link href="/blog/freelance-vs-salary-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance vs Salary in the UAE: The Real Numbers</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
