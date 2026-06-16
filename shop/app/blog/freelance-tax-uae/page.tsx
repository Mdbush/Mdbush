import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Freelancers Pay Tax in the UAE? (2026 Complete Guide) — SoloKit",
  description:
    "UAE freelancers: zero personal income tax, but corporate tax and VAT rules changed in 2023. Here's exactly what taxes you owe, who's exempt, and what records to keep.",
  alternates: { canonical: "/blog/freelance-tax-uae" },
  openGraph: {
    title: "Do Freelancers Pay Tax in the UAE? (2026 Complete Guide)",
    description: "Zero personal income tax — but corporate tax and VAT now apply. Everything UAE freelancers need to know.",
    type: "article",
    url: "/blog/freelance-tax-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do Freelancers Pay Tax in the UAE? (2026 Complete Guide)",
  description:
    "UAE freelancers: zero personal income tax, but corporate tax and VAT rules changed in 2023. Here's exactly what taxes you owe, who's exempt, and what records to keep.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-tax-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-tax-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "freelance tax UAE",
    "do freelancers pay tax in UAE",
    "UAE corporate tax freelancers",
    "VAT freelancer UAE",
    "income tax UAE",
    "UAE tax free freelancing",
  ],
};

const taxTable = [
  { scenario: "Annual revenue under AED 375,000", rate: "0% — exempt", notes: "Small business relief applies" },
  { scenario: "Revenue above AED 375,000", rate: "9% on profit over AED 375K", notes: "Must register on EmaraTax" },
  { scenario: "Qualifying Free Zone Person (QFZP)", rate: "0% on qualifying income", notes: "Complex rules — get advice" },
  { scenario: "Salary paid to yourself", rate: "Not taxable income", notes: "Personal income is exempt" },
];

export default function FreeanceTaxUAEPage() {
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
            <span className="text-gray-600">Tax for UAE Freelancers</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">TAX &amp; FINANCE</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Do Freelancers Pay Tax in the UAE? (2026 Complete Guide)</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              The UAE has zero personal income tax — that part hasn&apos;t changed. But since 2023, a 9% corporate tax applies to businesses earning above AED 375,000 per year, and VAT has been around since 2018. Here&apos;s the full picture.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Key stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "0%", label: "Personal income tax" },
              { value: "AED 375K", label: "CT-free threshold" },
              { value: "5%", label: "VAT (if applicable)" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Quick answer box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">Quick Answer</p>
            <ul className="space-y-1.5 text-sm text-emerald-800">
              <li>✅ <strong>Personal income tax:</strong> 0% — none, ever</li>
              <li>✅ <strong>Corporate tax (under AED 375K/yr):</strong> 0% — you&apos;re fully exempt</li>
              <li>⚠️ <strong>Corporate tax (over AED 375K/yr):</strong> 9% on profits above threshold</li>
              <li>⚠️ <strong>VAT:</strong> Must register if revenue exceeds AED 375,000/yr</li>
              <li>✅ <strong>Free zone small businesses:</strong> May qualify for 0% under Qualifying Free Zone rules</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Personal Income Tax: Still Zero
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The UAE has never had a personal income tax and has no plans to introduce one. Whether you earn AED 10,000 or AED 1,000,000 as an individual, you keep every dirham. This applies to residents, visa holders, and anyone paying themselves a salary from their own business.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This is the reason Dubai attracts so many high-earning freelancers from Europe, the US, and Australia — your take-home is your gross. A freelancer billing AED 30,000/month keeps AED 30,000/month.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            UAE Corporate Tax (CT) — The 2023 Change
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Since June 2023, the UAE introduced a federal 9% Corporate Tax on business profits. Here&apos;s what this means for freelancers:
          </p>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">UAE Corporate Tax Scenarios</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {taxTable.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.scenario}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{row.notes}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Key Insight</p>
            <p className="text-sm text-emerald-800">The AED 375,000 threshold applies to your <em>business profit</em>, not your revenue. Most freelancers with expenses, software, co-working space, and equipment will have taxable profits well below their billing amount.</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            All UAE businesses — including sole proprietors and freelancers with a trade license — must register with the Federal Tax Authority (FTA) for corporate tax, even if they owe zero. Registration is through EmaraTax (emaratax.gov.ae). You&apos;ll file an annual CT return.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            VAT for Freelancers
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Mandatory VAT Registration</h3>
              <p className="text-sm text-gray-600">Required if your taxable supplies exceed <strong>AED 375,000 in any 12-month period</strong>. Once registered, charge 5% VAT on invoices and file quarterly returns.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Voluntary VAT Registration</h3>
              <p className="text-sm text-gray-600">Available if revenue exceeds AED 187,500/yr. Some freelancers register voluntarily to reclaim input VAT on business expenses.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">International Clients</h3>
              <p className="text-sm text-gray-600">Services to clients <em>outside the UAE</em> are generally zero-rated (0% VAT). You may still reclaim input VAT on your expenses.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            What Records Should You Keep?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Even with low or zero tax, the FTA requires UAE businesses to maintain records for 5 years. Good bookkeeping protects you if you&apos;re ever audited and makes CT/VAT registration painless if you cross the threshold.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              { item: "All invoices issued", detail: "numbered, dated, with client details and description of service" },
              { item: "All expense receipts", detail: "software subscriptions, co-working, equipment, professional services" },
              { item: "Bank statements", detail: "separate business account strongly recommended" },
              { item: "Contracts and agreements", detail: "especially for high-value or international clients" },
              { item: "Annual P&L statement", detail: "even a simple spreadsheet works at small scale" },
            ].map((row) => (
              <li key={row.item} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{row.item}:</strong> {row.detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Practical Tax Timeline for UAE Freelancers
          </h2>

          <div className="space-y-3 mb-8">
            {[
              { date: "Jan 2018", text: "VAT introduced at 5%. Register if revenue > AED 375K from UAE clients." },
              { date: "Jun 2023", text: "Corporate Tax (9%) introduced. First tax period began for most businesses." },
              { date: "Ongoing", text: "All businesses must register for CT on EmaraTax, even if profits are zero." },
              { date: "Annual", text: "File CT return within 9 months of your financial year end. Keep records for 5 years." },
            ].map((row) => (
              <div key={row.date} className="flex gap-4">
                <div className="text-sm font-semibold text-gray-500 shrink-0 w-20 pt-1">{row.date}</div>
                <div className="text-sm text-gray-700 leading-relaxed">{row.text}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Free Zone Freelancers: Special Rules
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you operate from a UAE free zone (IFZA, SHAMS, Meydan, etc.), you may qualify as a <strong>Qualifying Free Zone Person (QFZP)</strong> and pay 0% corporate tax on your qualifying income — even above AED 375,000. To qualify, you generally must maintain adequate substance in the free zone, earn primarily from qualifying activities, not earn significant income from mainland UAE sources, and prepare audited financial statements.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">Bottom Line for UAE Freelancers</p>
            <ul className="space-y-1 text-sm text-emerald-800">
              <li>✓ Zero personal income tax — forever</li>
              <li>✓ Zero corporate tax if profits under AED 375,000/year</li>
              <li>! Register for corporate tax on EmaraTax regardless</li>
              <li>! Register for VAT if UAE client revenue &gt; AED 375K/year</li>
              <li>✓ International clients = likely 0% VAT on your services</li>
              <li>✓ Keep 5 years of financial records</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Track invoices, log expenses, manage clients, and monitor your AED 375K tax threshold — all in one workspace built for UAE freelancers.</p>
            <Link href="/products/solokit-freelance-os" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get SoloKit →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-visa-uae", label: "How to Get a Freelance Visa in UAE (2026)" },
                { href: "/blog/corporate-tax-uae-freelancers-2026", label: "UAE Corporate Tax 2026 for Freelancers" },
                { href: "/blog/freelance-rate-calculator-uae", label: "Freelance Rate Calculator: How to Price Your Work in AED" },
                { href: "/blog/best-banks-freelancers-uae", label: "Best Banks for UAE Freelancers (2026)" },
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
