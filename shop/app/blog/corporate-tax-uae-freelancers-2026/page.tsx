import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Corporate Tax 2026 for Freelancers: What You Need to Know",
  description:
    "The UAE introduced 9% corporate tax in 2023. This guide explains exactly what it means for freelancers and solopreneurs — who pays, who doesn't, and what to do.",
  alternates: { canonical: "/blog/corporate-tax-uae-freelancers-2026" },
  openGraph: {
    title: "UAE Corporate Tax 2026 for Freelancers: What You Need to Know",
    description: "UAE 9% corporate tax explained for freelancers — AED 375,000 threshold, natural persons rules, free zone exemptions, and EmaraTax.",
    type: "article",
    url: "/blog/corporate-tax-uae-freelancers-2026",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "UAE Corporate Tax 2026 for Freelancers: What You Need to Know",
  description: "The UAE introduced 9% corporate tax. This guide explains what it means for freelancers and solopreneurs.",
  url: `${siteUrl}/blog/corporate-tax-uae-freelancers-2026`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const scenarios = [
  { situation: "Your business revenue is under AED 375,000/year", outcome: "0% corporate tax. Small business relief category — pay nothing, but may still need to register.", color: "bg-emerald-50 border-emerald-200" },
  { situation: "Your revenue is AED 375,000–3,000,000/year", outcome: "9% CT on taxable income above AED 375,000. Register with EmaraTax and file annual returns.", color: "bg-amber-50 border-amber-200" },
  { situation: "You are employed (not self-employed)", outcome: "No CT. Employment income is explicitly exempt from corporate tax.", color: "bg-emerald-50 border-emerald-200" },
  { situation: "You earn passive income (rent, dividends, interest)", outcome: "Generally exempt if earned personally, not through a business entity.", color: "bg-emerald-50 border-emerald-200" },
  { situation: "You are in a qualifying free zone", outcome: "May be eligible for 0% CT on qualifying income. Complex rules apply — get specific advice.", color: "bg-blue-50 border-blue-200" },
];

const incomeTable = [
  { type: "Freelance / consulting income", treatment: "Business income — subject to CT if registered" },
  { type: "Salary from an employer", treatment: "Exempt — employment income is excluded from CT" },
  { type: "Real estate rental income (personal)", treatment: "Exempt — personal real estate income is excluded" },
  { type: "Interest from personal bank accounts", treatment: "Exempt — personal investment income is excluded" },
  { type: "Dividends from personal investments", treatment: "Exempt — personal investment income is excluded" },
  { type: "Income from a trade license / free zone company", treatment: "Subject to CT — business entity income" },
];

export default function CorporateTaxUAEFreelancers() {
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
            <span className="text-gray-600">Corporate Tax UAE Freelancers 2026</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">TAX &amp; FINANCE</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">UAE Corporate Tax 2026 for Freelancers: What You Need to Know</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              The UAE introduced 9% corporate tax in 2023. For many freelancers, this triggered a wave of confusion: do I have to pay? Do I need to register? This guide answers those questions clearly.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Key stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "9%", label: "Corporate tax rate" },
              { value: "AED 375K", label: "Small business threshold" },
              { value: "AED 1M", label: "Natural person threshold" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm">
            <p className="font-semibold text-amber-900 mb-1">Important disclaimer</p>
            <p className="text-amber-800">Tax laws change and individual situations vary. This guide provides general information based on UAE Federal Tax Authority guidance as of 2026. Always consult a licensed UAE tax advisor for your specific situation.</p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Short Version
          </h2>

          <div className="space-y-3 mb-8">
            {scenarios.map((item, i) => (
              <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                <p className="text-sm font-semibold text-gray-900 mb-1">If: {item.situation}</p>
                <p className="text-sm text-gray-700">→ {item.outcome}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The AED 1 Million Threshold for Natural Persons
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 text-sm">
            <p className="font-semibold text-gray-900 mb-2">Critical rule for individual freelancers</p>
            <p className="text-gray-700">A natural person (individual) is only required to register for UAE corporate tax if their total annual turnover from business activities exceeds <strong>AED 1,000,000</strong> in a calendar year (under Ministerial Decision No. 73 of 2023).</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            This means: if your total freelance revenue is under AED 1 million per year, you are not required to register or file CT returns as an individual. Most freelancers in the UAE earn under AED 1 million per year — if that describes you, the practical answer is: you do not need to do anything with corporate tax right now.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Key Insight</p>
            <p className="text-sm text-emerald-800">Monitor your revenues as you grow. The AED 1M threshold applies to natural persons. If you have a company (LLC, free zone company), all companies must register regardless of revenue — even if they ultimately pay 0% via Small Business Relief.</p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Small Business Relief
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            For businesses with revenue under AED 3 million per year, the UAE offers &ldquo;Small Business Relief&rdquo; — the ability to elect to pay 0% CT on all taxable income. To access this: you must be registered for CT, your revenue must be below AED 3 million, you must elect for the relief each tax year when filing, and this relief is currently available for tax periods ending on or before December 31, 2026.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            What Counts as &ldquo;Business Income&rdquo;?
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">Income Type vs CT Treatment</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {incomeTable.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.type}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0 max-w-[50%] text-right">{row.treatment}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Free Zone Freelancers: Special Rules
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you have a free zone company or license, the rules are more complex. Free zones can offer 0% CT on &ldquo;qualifying income&rdquo; — but only if you have Qualifying Free Zone Person (QFZP) status, maintain adequate substance in the free zone, your income is from qualifying activities, and you don&apos;t have revenue from mainland UAE above the de minimis threshold. For most small freelancers, their free zone income <em>may</em> qualify for 0% CT — but this needs to be confirmed with a licensed tax advisor.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Practical Steps for UAE Freelancers in 2026
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              "Track your annual revenue carefully. Know whether you are above or below AED 375,000 and AED 1,000,000.",
              "If you have a company, register for CT on the EmaraTax portal immediately if you have not already.",
              "Keep your business and personal finances separate — this simplifies calculating taxable income dramatically.",
              "Use an accountant or bookkeeper who understands UAE CT. The FTA has published extensive guidance, but CT compliance has real penalties for non-compliance.",
              "Review Small Business Relief eligibility annually — it is not automatic, you must elect for it.",
              "If your revenue is approaching AED 1 million or if you have a free zone company, get specific tax advice before your next financial year starts.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Track Your Revenue and Hit Key Thresholds</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Know your monthly and annual revenue at a glance. Spot when you are approaching AED 375K or AED 1M so you can plan ahead, not react in panic.</p>
            <Link href="/products/solokit-freelance-os" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get SoloKit →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE?" },
                { href: "/blog/freelance-visa-uae", label: "How to Get a Freelance Visa in the UAE" },
                { href: "/blog/best-banks-freelancers-uae", label: "Best Bank Accounts for UAE Freelancers" },
                { href: "/blog/rakez-vs-ifza-freelance-license-uae", label: "RAKEZ vs IFZA vs Meydan: Best Free Zone UAE" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-blue-600 hover:text-blue-800 text-sm">
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
