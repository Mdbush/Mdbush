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

export default function CorporateTaxUAEFreelancers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Corporate Tax UAE for Freelancers 2026</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Tax & Finance</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            UAE Corporate Tax 2026 for Freelancers: What You Need to Know
          </h1>
          <p className="text-gray-500 text-sm">8 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-900 mb-1">Important disclaimer</p>
            <p className="text-amber-800">
              Tax laws change and individual situations vary. This guide provides general
              information based on UAE Federal Tax Authority guidance as of 2026. Always
              consult a licensed UAE tax advisor for your specific situation.
            </p>
          </div>

          <p>
            The UAE introduced a 9% corporate tax (CT) on business profits from June 2023.
            For many freelancers, this triggered a wave of confusion: do I have to pay? Do I
            need to register? What counts as &ldquo;business income&rdquo;? This guide answers those
            questions clearly.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Short Version</h2>

            <div className="space-y-3">
              {[
                { situation: "Your business revenue is under AED 375,000/year", outcome: "0% corporate tax. You are in the \"small business relief\" category and pay nothing, but may still need to register.", class: "border-green-200 bg-green-50" },
                { situation: "Your revenue is AED 375,000–3,000,000/year", outcome: "9% CT on taxable income above AED 375,000. You need to register with EmaraTax and file annual returns.", class: "border-amber-200 bg-amber-50" },
                { situation: "You are employed (not self-employed)", outcome: "No CT. Employment income is explicitly exempt from corporate tax.", class: "border-green-200 bg-green-50" },
                { situation: "You earn passive income (rent, dividends, interest)", outcome: "Generally exempt if earned personally, not through a business entity.", class: "border-green-200 bg-green-50" },
                { situation: "You are in a qualifying free zone", outcome: "May be eligible for 0% CT on qualifying income. Complex rules apply — get specific advice.", class: "border-blue-200 bg-blue-50" },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-4 ${item.class}`}>
                  <p className="text-sm font-semibold text-gray-900 mb-1">If: {item.situation}</p>
                  <p className="text-sm text-gray-700">→ {item.outcome}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Who Is Subject to UAE Corporate Tax?</h2>
            <p>
              UAE CT applies to &ldquo;taxable persons&rdquo; — which includes:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• UAE companies (LLCs, free zone companies, partnerships)</li>
              <li>• Foreign companies with a UAE permanent establishment</li>
              <li>• <strong>Individuals (natural persons)</strong> who conduct a business or business activity in the UAE</li>
            </ul>
            <p className="mt-3">
              That last point is the key one for freelancers. If you run a freelance business —
              whether through a free zone license, mainland license, or even without a license —
              you may be subject to UAE CT as a natural person conducting a business activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The AED 1 Million Threshold for Natural Persons</h2>
            <p>
              Here is the critical rule for individual freelancers:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-4 text-sm">
              <p className="font-semibold text-gray-900 mb-2">Natural person threshold</p>
              <p className="text-gray-700">
                A natural person (individual) is only required to register for UAE corporate tax
                if their total annual turnover from business activities exceeds <strong>AED 1,000,000</strong>
                in a calendar year (under Ministerial Decision No. 73 of 2023).
              </p>
            </div>
            <p>
              This means: if your total freelance revenue is under AED 1 million per year, you
              are not required to register or file CT returns as an individual. You still pay 0%
              tax on income up to AED 375,000, and 9% on amounts above that — but you only need
              to engage with the system once you cross AED 1M.
            </p>
            <p className="mt-3">
              Most freelancers in the UAE earn under AED 1 million per year. If that describes you,
              the practical answer is: you do not need to do anything with corporate tax right now,
              but you should monitor your revenues as you grow.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Small Business Relief</h2>
            <p>
              For businesses (including individuals who are CT-registered) with revenue under
              AED 3 million per year, the UAE offers &ldquo;Small Business Relief&rdquo; — the ability
              to elect to pay 0% CT on all taxable income. To access this:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• You must be registered for CT</li>
              <li>• Your revenue must be below AED 3 million for the relevant tax period</li>
              <li>• You must elect for the relief each tax year when filing</li>
              <li>• This relief is currently available for tax periods ending on or before December 31, 2026</li>
            </ul>
            <p className="mt-3">
              Practically: freelancers with revenue AED 375,000–3,000,000 who are registered for
              CT can claim Small Business Relief and pay 0% CT. This significantly reduces the
              burden for most independent professionals in the UAE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Counts as &ldquo;Business Income&rdquo;?</h2>
            <p>
              The distinction matters because not all income is subject to CT:
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Income type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">CT treatment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Freelance / consulting income", treatment: "Business income — subject to CT if registered" },
                    { type: "Salary from an employer", treatment: "Exempt — employment income is excluded from CT" },
                    { type: "Real estate rental income (personal)", treatment: "Exempt — personal real estate income is excluded" },
                    { type: "Interest from personal bank accounts", treatment: "Exempt — personal investment income is excluded" },
                    { type: "Dividends from personal investments", treatment: "Exempt — personal investment income is excluded" },
                    { type: "Income from a trade license / free zone company", treatment: "Subject to CT — business entity income" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 text-gray-700">{row.type}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.treatment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Free Zone Freelancers: The Qualifying Free Zone Person Rules</h2>
            <p>
              If you have a free zone company or license, the rules are more complex. Free zones
              can offer 0% CT on &ldquo;qualifying income&rdquo; — but only if:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• You have a Qualifying Free Zone Person (QFZP) status</li>
              <li>• You maintain adequate substance in the free zone (not just a registered address)</li>
              <li>• Your income is from qualifying activities (broadly: services to non-UAE entities, or certain specified activities)</li>
              <li>• You do not have revenue from mainland UAE businesses above the de minimis threshold</li>
            </ul>
            <p className="mt-3">
              For most small freelancers with free zone licenses, the practical result is that
              their free zone income <em>may</em> qualify for 0% CT — but this needs to be
              confirmed with a licensed tax advisor who understands your specific free zone and
              activity type. Do not assume you qualify.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Do You Need to Register for Corporate Tax?</h2>
            <p>
              <strong>If your revenue is below AED 1 million:</strong> You are generally not
              required to register as a natural person. Monitor this annually as your revenue grows.
            </p>
            <p className="mt-3">
              <strong>If your revenue is above AED 1 million:</strong> You must register with the
              Federal Tax Authority (FTA) via the EmaraTax portal. Registration is free. You will
              then need to file an annual CT return for each tax period (which follows your financial year).
            </p>
            <p className="mt-3">
              <strong>If you have a company (LLC, free zone company):</strong> All companies must
              register, regardless of revenue. Even if you ultimately pay 0% via Small Business
              Relief, registration and filing is mandatory.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Practical Steps for UAE Freelancers in 2026</h2>
            <ol className="space-y-3 text-sm text-gray-600 list-decimal list-inside">
              <li>Track your annual revenue carefully. Know whether you are above or below AED 375,000 and AED 1,000,000.</li>
              <li>If you have a company, register for CT on the EmaraTax portal immediately if you have not already.</li>
              <li>Keep your business and personal finances separate — this simplifies calculating taxable income dramatically.</li>
              <li>Use an accountant or bookkeeper who understands UAE CT. The FTA has published extensive guidance, but CT compliance has real penalties for non-compliance.</li>
              <li>Review Small Business Relief eligibility annually — it is not automatic, you must elect for it.</li>
              <li>If your revenue is approaching AED 1 million or if you have a free zone company, get specific tax advice before your next financial year starts.</li>
            </ol>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Track your revenue properly</p>
            <h3 className="text-lg font-bold mb-2">The Solopreneur OS includes a finance dashboard</h3>
            <p className="text-gray-400 text-sm mb-4">
              Know your monthly and annual revenue at a glance. Spot when you are approaching key thresholds — AED 375K, AED 1M — so you can plan ahead, not react in panic.
            </p>
            <Link
              href="/products/solopreneur-os"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              See the Solopreneur OS →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-tax-uae", title: "Do Freelancers Pay Tax in the UAE?" },
                { href: "/blog/emaratax-registration-freelancers-uae", title: "How to Register on EmaraTax as a Freelancer" },
                { href: "/blog/freelance-financial-planning-uae", title: "Financial Planning for UAE Freelancers" },
                { href: "/blog/best-accounting-software-freelancers-uae", title: "Best Accounting Software for UAE Freelancers" },
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
