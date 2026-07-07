import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Do an Annual Business Review as a UAE Freelancer — 2026 Guide",
  description:
    "A complete annual review framework for UAE freelancers: reviewing revenue, clients, rates, positioning, and setting goals for the year ahead. Templates and financial review checklist included.",
  alternates: { canonical: "/blog/freelance-annual-review-uae" },
  openGraph: {
    title: "How to Do an Annual Business Review as a UAE Freelancer — 2026 Guide",
    description: "Annual review framework for UAE freelancers: revenue, clients, rates, and goal setting.",
    type: "article",
    url: "/blog/freelance-annual-review-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Do an Annual Business Review as a UAE Freelancer",
  description: "Annual review framework for UAE freelancers: revenue, clients, rates, and goal setting.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-annual-review-uae",
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Freelance Annual Review UAE</span>
          </nav>

          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Business Strategy</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Do an Annual Business Review as a UAE Freelancer
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Most freelancers finish the year, take a few days off, and start the new year doing the same things
              they did last year. The freelancers who grow their income, raise their rates, and land better clients
              run a deliberate annual review. Here is the exact framework — built for the UAE freelance context.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            The best time to do your annual review is the last two weeks of December or first week of January —
            before the UAE business year gets back into full swing after the New Year holiday. Block 3–4 hours
            (not 30 minutes) for this exercise. It is the most valuable business activity you will do all year.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Part 1 — Revenue Review
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pull your accounting records and answer these questions for the year:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              { q: "Total revenue", detail: "What did you earn this year in total? Break it down by quarter to identify peaks and troughs." },
              { q: "Revenue by client", detail: "Which 3 clients generated the most revenue? If one client is more than 40% of your total, you have a concentration risk — diversification should be a goal." },
              { q: "Revenue by service type", detail: "Which services generated the most revenue? Which generated the most per hour? Sometimes your best-paying service is not your highest-volume service." },
              { q: "Outstanding invoices", detail: "What was unpaid from the year? Are there clients who consistently paid late? This informs who you continue working with and your payment terms for next year." },
              { q: "Revenue vs income target gap", detail: "Did you hit your income target? If not, what was the gap and why? If yes, what drove it? Understand the drivers — not just the outcome." },
            ].map(({ q, detail }) => (
              <li key={q} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{q}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Part 2 — Client Review
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Question</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">What to Do With the Answer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Which clients were a genuine pleasure to work with?", "Prioritize retaining them; ask for referrals; offer expanded services"],
                  ["Which clients drained your energy or caused problems?", "Raise their rates significantly or decline renewal; use it to refine your client selection criteria"],
                  ["Which clients generated the best rate per hour (including admin time)?", "Identify the profile — industry, size, type — and target more like them"],
                  ["Which clients referred you to new clients?", "Strengthen those relationships; they are your best growth engine"],
                  ["Which clients are likely to need you again next year?", "Schedule proactive outreach in January — do not wait for them to come to you"],
                ].map(([question, action]) => (
                  <tr key={question}>
                    <td className="px-4 py-3 text-gray-700 text-xs font-medium">{question}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Part 3 — Rates and Positioning Review
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { point: "Did your rates increase this year?", detail: "If not, inflation has effectively cut your real income. UAE inflation was 2–4% in recent years. A rate that does not increase annually loses purchasing power every year." },
              { point: "What is the current market rate for your skills?", detail: "Search LinkedIn for equivalent roles in the UAE. What are full-time salaries? What are other freelancers in your network charging? If you are at the bottom of the market range, you have room to raise rates next year." },
              { point: "Has your positioning remained relevant?", detail: "Did the market shift in 2025–2026? Did new technologies emerge in your niche? Are you still positioned as a specialist in a growing area, or is your positioning becoming commoditized? This is the time to update it." },
              { point: "What certifications or skills should you add?", detail: "In the UAE market, credentials matter. What certification, skill, or experience would materially increase your rate ceiling in the coming year? Put it in your goals with a specific deadline." },
            ].map(({ point, detail }) => (
              <li key={point} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{point}</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Part 4 — Setting Goals for Next Year
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Set 3–5 specific, measurable goals for the year ahead. Use this framework:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { category: "Revenue goal", example: "Achieve AED 360,000 annual revenue (AED 30,000/month average), up 20% from AED 300,000 this year" },
              { category: "Client goal", example: "Convert 2 project clients to monthly retainers by June; reduce client concentration so no single client exceeds 30% of revenue" },
              { category: "Rate goal", example: "Raise base rate from AED 1,800/day to AED 2,200/day by Q2; raise retainer rates at annual review with all existing clients in January" },
              { category: "Positioning goal", example: "Complete AWS Solutions Architect certification by April; update LinkedIn positioning to include cloud compliance specialisation" },
              { category: "Marketing goal", example: "Post on LinkedIn 3× per week consistently; publish 1 contributed article in UAE business media; speak at 1 industry event" },
            ].map(({ category, example }) => (
              <div key={category} className="border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-emerald-600 mb-1">{category}</p>
                <p className="text-sm text-gray-700">{example}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Write It Down and Review Monthly</p>
            <p className="text-sm text-emerald-800">
              Goals written down and reviewed monthly are achieved 3× more often than goals kept in your head.
              Put your annual review goals in your Notion workspace or a Google Doc and schedule a 15-minute
              monthly check-in in your calendar. The review does not have to be long — just: Am I on track? What
              needs to change? What is the one action I take this month?
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Annual Review Template for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion annual review template, monthly tracking dashboard, and goal-setting SOPs — built for UAE freelancers.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-raise-freelance-rates-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Raise Your Freelance Rates in the UAE</Link>
              <Link href="/blog/how-to-manage-freelance-finances-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Manage Freelance Finances in the UAE</Link>
              <Link href="/blog/freelance-productivity-system-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Productivity System for UAE Freelancers</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
