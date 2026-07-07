import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator UAE: How Much to Charge (2026) — SoloKit",
  description:
    "Calculate your minimum freelance rate in AED. Covers your target salary, overhead costs, taxes, client acquisition, and the formula UAE freelancers use to set profitable rates.",
  alternates: { canonical: "/blog/freelance-rate-calculator-uae" },
  openGraph: {
    title: "Freelance Rate Calculator UAE: How Much to Charge (2026)",
    description: "The exact formula UAE freelancers use to calculate their minimum hourly and project rates in AED.",
    type: "article",
    url: "/blog/freelance-rate-calculator-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Rate Calculator UAE: How Much to Charge (2026)",
  description:
    "Calculate your minimum freelance rate in AED. Covers target salary, overhead, taxes, and the formula UAE freelancers use to set profitable rates.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-rate-calculator-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-rate-calculator-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "freelance rate calculator UAE",
    "how much to charge freelance UAE",
    "freelancer hourly rate Dubai",
    "freelance pricing UAE",
    "AED freelance rates",
    "minimum freelance rate calculator",
  ],
};

const rateTable = [
  { type: "Graphic Designer", notes: "Junior to senior range", rate: "AED 80–500/hr" },
  { type: "Web Developer (Frontend)", notes: "Junior to senior range", rate: "AED 100–700/hr" },
  { type: "Web Developer (Full Stack)", notes: "Junior to senior range", rate: "AED 130–900/hr" },
  { type: "Copywriter / Content Writer", notes: "Junior to senior range", rate: "AED 60–450/hr" },
  { type: "Social Media Manager", notes: "Junior to senior range", rate: "AED 100–400/hr" },
  { type: "Marketing Consultant", notes: "Junior to senior range", rate: "AED 300–1,200/hr" },
  { type: "Video Editor", notes: "Junior to senior range", rate: "AED 150–550/hr" },
  { type: "UI/UX Designer", notes: "Junior to senior range", rate: "AED 250–800/hr" },
  { type: "Business Consultant", notes: "Junior to senior range", rate: "AED 400–2,000/hr" },
];

const referenceTable = [
  { target: "AED 10,000", revenue: "AED 13,200", rate: "AED 138/hr" },
  { target: "AED 15,000", revenue: "AED 19,400", rate: "AED 202/hr" },
  { target: "AED 20,000", revenue: "AED 25,600", rate: "AED 267/hr" },
  { target: "AED 30,000", revenue: "AED 38,000", rate: "AED 397/hr" },
  { target: "AED 50,000", revenue: "AED 62,800", rate: "AED 656/hr" },
];

export default function FreelanceRateCalculatorUAEPage() {
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
            <span className="text-gray-600">Freelance Rate Calculator UAE</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">PRICING &amp; RATES</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Rate Calculator UAE: How Much Should You Charge? (2026)</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Most UAE freelancers set rates by guessing — either copying what they see on job boards or undercutting competitors. Both strategies leave money on the table. Here&apos;s the formula that works backwards from what you actually need to earn.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Key stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 267/hr", label: "Min rate for AED 20K/mo" },
              { value: "25 hrs/wk", label: "Realistic billable hours" },
              { value: "+28%", label: "Revenue over take-home needed" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Minimum Rate Formula
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 mb-6 font-mono text-sm">
            <p className="text-gray-400 mb-2">{"// Step 1: Annual target income"}</p>
            <p className="mb-4">Target Take-Home × 12 = Annual Target</p>
            <p className="text-gray-400 mb-2">{"// Step 2: Add overhead"}</p>
            <p className="mb-4">Annual Target + Business Costs = Gross Revenue Needed</p>
            <p className="text-gray-400 mb-2">{"// Step 3: Account for non-billable time"}</p>
            <p>Gross Revenue ÷ Billable Hours Per Year = Minimum Hourly Rate</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Key Insight</p>
            <p className="text-sm text-emerald-800">The most common mistake is skipping step 3. You don&apos;t bill 40 hours a week — you bill maybe 20–25 hours. The rest is admin, marketing, proposals, learning, and client calls. Your rate must cover all of that time, not just the hours you invoice.</p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Worked Example: AED 20K/Month Target
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-emerald-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">1</span>
                Monthly take-home breakdown
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between"><span>Monthly rent (Dubai 1BR)</span><span className="font-medium text-gray-900">AED 8,000</span></div>
                <div className="flex justify-between"><span>Food &amp; transport</span><span className="font-medium text-gray-900">AED 3,500</span></div>
                <div className="flex justify-between"><span>Lifestyle &amp; savings</span><span className="font-medium text-gray-900">AED 5,000</span></div>
                <div className="flex justify-between"><span>Emergency buffer</span><span className="font-medium text-gray-900">AED 3,500</span></div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-gray-900"><span>Monthly target take-home</span><span>AED 20,000</span></div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-emerald-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">2</span>
                Annual business overhead
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between"><span>Freelance permit/visa (SHAMS or IFZA)</span><span className="font-medium text-gray-900">AED 7,500/yr</span></div>
                <div className="flex justify-between"><span>Health insurance</span><span className="font-medium text-gray-900">AED 5,000/yr</span></div>
                <div className="flex justify-between"><span>Software (Notion, Zoom, Adobe, etc.)</span><span className="font-medium text-gray-900">AED 3,600/yr</span></div>
                <div className="flex justify-between"><span>Co-working / equipment</span><span className="font-medium text-gray-900">AED 6,000/yr</span></div>
                <div className="flex justify-between"><span>Accounting &amp; banking</span><span className="font-medium text-gray-900">AED 3,000/yr</span></div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-gray-900"><span>Annual overhead</span><span>AED 27,500</span></div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-emerald-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">3</span>
                Gross revenue needed
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between"><span>Annual take-home target</span><span className="font-medium text-gray-900">AED 240,000</span></div>
                <div className="flex justify-between"><span>Annual overhead</span><span className="font-medium text-gray-900">AED 27,500</span></div>
                <div className="flex justify-between"><span>Slow-month buffer (15%)</span><span className="font-medium text-gray-900">AED 40,125</span></div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-gray-900"><span>Gross annual revenue needed</span><span>AED 307,625</span></div>
                <div className="flex justify-between font-semibold text-gray-900"><span>Per month</span><span>≈ AED 25,635</span></div>
              </div>
              <p className="text-xs text-gray-500 mt-3">To take home AED 20K/month, you need to bill approximately AED 25,600/month — a 28% premium over your target.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-emerald-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">4</span>
                Convert to hourly rate
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between"><span>Working weeks per year</span><span className="font-medium text-gray-900">46 (after leave &amp; holidays)</span></div>
                <div className="flex justify-between"><span>Billable hours per week</span><span className="font-medium text-gray-900">25 hours</span></div>
                <div className="flex justify-between"><span>Annual billable hours</span><span className="font-medium text-gray-900">1,150 hours</span></div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-gray-900 text-lg"><span>Minimum hourly rate</span><span>AED 267/hr</span></div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
                <p className="text-amber-900 text-xs">
                  <strong>This is your floor, not your ceiling.</strong> Add 20–30% to this number for a sustainable, growing business.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Market Rates by Profession (UAE, 2026)
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">UAE Rate Benchmarks 2026</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {rateTable.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.type}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{row.notes}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Quick Rate Reference Table
          </h2>

          <p className="text-gray-700 text-sm mb-4">
            Based on the formula above, here&apos;s what minimum hourly rate you need at different income targets (assuming AED 27,500 overhead, 1,150 billable hours, 15% buffer):
          </p>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">Rate Reference by Income Target</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {referenceTable.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="font-semibold text-gray-900">{row.target}</div>
                  <div className="text-gray-600">{row.revenue}</div>
                  <div className="font-bold text-emerald-700">{row.rate}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            5 Rate Mistakes UAE Freelancers Make
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              { n: "1", mistake: "Matching the cheapest competitor", detail: "Clients who pick based on price alone are the worst clients. Compete on outcomes, not cost." },
              { n: "2", mistake: "Not charging for revisions", detail: "First define what's included, then charge for anything beyond. Cap revisions at 2 rounds in your proposal." },
              { n: "3", mistake: "Quoting the same rate to all clients", detail: "A startup and a corporate client should pay differently. Your rate for a multinational can be 2–3× your SME rate." },
              { n: "4", mistake: "Not raising rates annually", detail: "Dubai inflation is real. If you haven't raised rates in 2+ years, you're earning less in real terms." },
              { n: "5", mistake: "Discounting to close faster", detail: "Instead of discounting, offer a smaller scope: 'I can do X for that budget, but Y would need to be Phase 2.'" },
            ].map((row) => (
              <li key={row.n} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{row.n}. {row.mistake}:</strong> {row.detail}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Track Your Rates and Revenue in One Dashboard</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Log every project, track your effective hourly rate per client, and see at a glance whether you&apos;re hitting your monthly AED targets.</p>
            <Link href="/products/freelancer-client-crm" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get the Freelancer CRM →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in the UAE" },
                { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE?" },
                { href: "/blog/get-freelance-clients-uae", label: "How to Get Freelance Clients in the UAE" },
                { href: "/blog/freelance-developer-rates-uae", label: "Freelance Developer Rates in the UAE (2026)" },
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
