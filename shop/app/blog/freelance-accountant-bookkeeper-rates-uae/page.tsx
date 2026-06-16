import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "Freelance Accountant and Bookkeeper Rates UAE 2026 — SoloKit",
  description:
    "AED rate benchmarks for freelance accountants and bookkeepers in the UAE: VAT filing, monthly bookkeeping, management accounts, year-end, audit support, and Corporate Tax returns.",
  alternates: { canonical: "/blog/freelance-accountant-bookkeeper-rates-uae" },
  openGraph: {
    title: "Freelance Accountant and Bookkeeper Rates UAE 2026",
    description:
      "AED rate benchmarks for freelance accountants and bookkeepers in the UAE: VAT filing, monthly bookkeeping, management accounts, year-end, audit support, and Corporate Tax returns.",
    type: "article",
    url: "/blog/freelance-accountant-bookkeeper-rates-uae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Accountant and Bookkeeper Rates UAE 2026",
    description:
      "AED rate benchmarks for freelance accountants and bookkeepers in the UAE: VAT filing, monthly bookkeeping, management accounts, year-end, audit support, and Corporate Tax returns.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Accountant and Bookkeeper Rates UAE 2026",
  description:
    "AED rate benchmarks for freelance accountants and bookkeepers in the UAE: VAT filing, monthly bookkeeping, management accounts, year-end, audit support, and Corporate Tax returns.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: `${siteUrl}/blog/freelance-accountant-bookkeeper-rates-uae`,
  mainEntityOfPage: `${siteUrl}/blog/freelance-accountant-bookkeeper-rates-uae`,
  image: `${siteUrl}/og-image.png`,
  keywords: [
    "freelance accountant rates UAE",
    "bookkeeper rates UAE 2026",
    "VAT filing UAE freelancer",
    "management accounts UAE",
    "corporate tax UAE freelance accountant",
    "ACCA CPA UAE freelancer",
  ],
};

export default function FreelanceAccountantBookkeeperRatesUAEPage() {
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
          <span>Freelance Accountant &amp; Bookkeeper Rates UAE</span>
        </nav>

        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING · FINANCE</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Accountant and Bookkeeper Rates UAE 2026</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            What freelance accountants and bookkeepers charge in the UAE for VAT filing, monthly
            bookkeeping, management accounts, year-end, audit support, and Corporate Tax returns —
            with AED benchmarks by task and seniority.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>6 min read</span>
          </div>
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          The UAE accounting and bookkeeping market for freelancers has changed significantly since
          2023. The introduction of Corporate Tax at 9% for businesses earning above AED 375,000 per
          year, combined with sustained FTA enforcement of VAT compliance, has driven demand for
          qualified freelance accountants well beyond what the permanent employment market can absorb.
          SMEs that once relied on a part-time bookkeeper for basic entries now need someone who
          understands CT registration, transfer pricing rules, and FTA audit defence.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-10">
          This guide covers market-rate pricing for every major accounting and bookkeeping service
          type in the UAE, with AED benchmarks you can use to price your own services or sanity-check
          what you are being quoted as a client.
        </p>

        {/* Qualifications section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Qualifications That Drive Premium Rates in the UAE
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">ACCA · CPA · CA · CMA</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            The UAE accounting market is qualification-dense. The most commonly held qualifications
            among freelance accountants and bookkeepers in Dubai and Abu Dhabi are:
          </p>
          <ul className="space-y-3 text-sm text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold shrink-0 w-16">ACCA</span>
              <span className="leading-relaxed">Association of Chartered Certified Accountants. The single most common professional accounting qualification in the UAE, held by a large proportion of the Indian, Pakistani, and British accounting community. ACCA-qualified freelancers command a clear premium over unqualified bookkeepers.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold shrink-0 w-16">CPA</span>
              <span className="leading-relaxed">Certified Public Accountant (US). Common among American-trained accountants and increasingly recognised in the UAE. Strong for international company clients and DIFC-registered entities. CPA holders typically sit at the top of the rate range.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold shrink-0 w-16">CA</span>
              <span className="leading-relaxed">Chartered Accountant (Indian CA or ICAEW). Highly respected in the UAE, particularly for SME clients. Indian CA qualification is well-recognised given the large Indian business community.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-700 font-bold shrink-0 w-16">CMA</span>
              <span className="leading-relaxed">Certified Management Accountant. Valued for management accounts and financial planning work. Less common for pure bookkeeping mandates.</span>
            </li>
          </ul>
          <p className="text-gray-700 text-sm leading-relaxed">
            Unqualified bookkeepers with solid UAE experience can still command competitive rates for
            transactional work — data entry, bank reconciliations, expense processing — but are
            increasingly squeezed out of higher-value advisory work by qualified competition. If
            you are building a UAE freelance accounting practice long-term, completing your ACCA or
            CIMA qualification is a meaningful investment.
          </p>
        </section>

        {/* Section — VAT filing */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            VAT Filing Rates
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Quarterly return preparation and EmaraTax submission</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            UAE VAT returns (VAT 201 form) are filed quarterly through the FTA&apos;s EmaraTax portal.
            Freelance accountants charge <strong>AED 500–1,500 per quarterly VAT return</strong>,
            depending on transaction volume and complexity.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            A straightforward VAT return for a small service business with 20–30 transactions per
            quarter sits at AED 500–750. Returns for businesses with mixed zero-rated and standard-rated
            supplies, import VAT, or reverse charge mechanisms sit at AED 1,000–1,500. Businesses
            with complex supply chains — particularly those exporting or operating in designated free
            zones — may face higher fees for the additional analysis required.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-4">
            <p className="text-emerald-900 text-sm font-semibold mb-2">What is included at the quoted rate?</p>
            <p className="text-emerald-800 text-sm leading-relaxed mb-2">
              Standard VAT return fees should include: review of output tax on sales, input tax
              reclaim calculation, reconciliation to accounting records, and submission via EmaraTax.
            </p>
            <p className="text-emerald-800 text-sm leading-relaxed">
              Anything beyond the return itself — FTA correspondence, voluntary disclosures, VAT
              registration, or VAT health checks — should be scoped and quoted separately. Be explicit
              about what is and is not included.
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you are providing VAT agent services — registering as an authorised tax agent with the
            FTA to act on behalf of clients — you can charge an additional AED 500–1,000/year per
            client for the agent relationship, and you are able to file directly rather than
            requiring client credentials.
          </p>
        </section>

        {/* Section — Monthly bookkeeping */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Monthly Bookkeeping Retainer Rates
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Transaction processing · reconciliation · basic reporting</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Monthly bookkeeping retainers in the UAE range from <strong>AED 1,000 to AED 4,000 per
            month</strong>, with transaction volume being the primary pricing driver.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            At the lower end (AED 1,000–1,500/month), you are typically looking at a micro-business
            with fewer than 50 transactions per month, a single bank account, and minimal complexity.
            At AED 2,000–3,000/month, you are servicing a small business with multiple bank accounts,
            regular supplier payments, a handful of employees, and monthly expense reports. The AED
            3,000–4,000 range covers businesses with 200+ monthly transactions, multi-currency accounts,
            payroll processing, and regular management reporting requirements.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            If the client also requires VAT management as part of the monthly retainer — not just the
            quarterly return, but ongoing VAT coding and reconciliation — add AED 300–600/month to
            the above range. Scope this carefully: ad hoc VAT queries can consume significant time
            that was not budgeted in the retainer.
          </p>
        </section>

        {/* Section — Management accounts */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Management Accounts
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Monthly P&amp;L, balance sheet, and commentary</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Management accounts — typically a monthly profit and loss statement, balance sheet, and
            brief narrative commentary — are a step above basic bookkeeping and require accounting
            judgement rather than data entry skills. Freelance accountants charge <strong>AED 2,000–5,000
            per month</strong> for management accounts, depending on the complexity of the business
            and whether bookkeeping is also included.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            For businesses that require management accounts including variance analysis against budget,
            cash flow statements, and department-level reporting, fees move towards AED 4,000–5,000/month.
            Private equity-backed companies, businesses preparing for fundraising, and subsidiaries
            reporting to international parent companies typically need this level of detail and will
            pay accordingly.
          </p>
        </section>

        {/* Section — Year-end and audit */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Year-End Accounts, Audit Support, and Corporate Tax
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">One-off annual engagements</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            The three major annual accounting engagements in the UAE each have distinct pricing dynamics:
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            <strong>Year-end accounts:</strong> Preparing financial statements from trial balance to
            signed accounts — including ledger clean-up, provisions, and accruals — typically costs
            <strong> AED 5,000–15,000 as a one-off fee</strong>. Simple LLC year-ends with clean bookkeeping
            sit at AED 5,000–8,000. Free zone entities, businesses with complex revenue recognition,
            or companies that need IFRS-compliant accounts for banking purposes sit at AED 10,000–15,000.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            <strong>Audit support:</strong> Preparing the audit file, managing auditor queries, and
            reviewing draft audit reports typically runs at <strong>AED 3,000–8,000</strong> as a
            project fee when outsourced to a freelance accountant. This is distinct from the audit
            fee itself (paid to the audit firm); the freelance accountant is acting on behalf of the
            management to make the audit process efficient.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Corporate Tax return preparation:</strong> CT registration was compulsory for most
            UAE businesses by 2024. Preparing and filing the annual Corporate Tax return — including
            taxable income calculation, deductions review, transfer pricing disclosure where relevant,
            and EmaraTax submission — is priced at <strong>AED 3,000–10,000</strong> depending on
            complexity. A straightforward SME CT return with standard adjustments sits at AED 3,000–5,000.
            Companies with free zone income (QFZP status), related party transactions, or international
            operations requiring transfer pricing analysis sit at AED 7,000–10,000+.
          </p>
        </section>

        {/* Rate table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Rate Summary by Task</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Service</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Rate (AED)</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">VAT return (quarterly)</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">500–1,500</td>
                  <td className="p-3 border border-gray-200">Per return</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Monthly bookkeeping</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">1,000–4,000</td>
                  <td className="p-3 border border-gray-200">Per month (by volume)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Management accounts</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">2,000–5,000</td>
                  <td className="p-3 border border-gray-200">Per month</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Year-end accounts</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">5,000–15,000</td>
                  <td className="p-3 border border-gray-200">One-off per year</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Audit support</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">3,000–8,000</td>
                  <td className="p-3 border border-gray-200">Per audit cycle</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Corporate Tax return</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">3,000–10,000</td>
                  <td className="p-3 border border-gray-200">Per return</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Day rate (junior bookkeeper)</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">800–1,200</td>
                  <td className="p-3 border border-gray-200">Per day</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Day rate (qualified accountant)</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">1,500–2,500</td>
                  <td className="p-3 border border-gray-200">Per day (ACCA/CA/CPA)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Day rates section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Day Rates by Seniority</h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Day rates are most commonly used for project work — systems migrations, ledger clean-ups,
            due diligence support, and short-term cover. In the UAE, day rates for accounting
            professionals range from <strong>AED 800 to AED 2,500 per day</strong>, structured roughly
            as follows:
          </p>
          <div className="space-y-3 mb-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-sm">Junior bookkeeper (0–3 years, no qualification)</span>
                <span className="text-emerald-700 font-bold text-sm">AED 800–1,200/day</span>
              </div>
              <p className="text-gray-600 text-xs">Transaction processing, bank recs, data entry, basic reporting</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-sm">Mid-level accountant (3–7 years, part-qualified)</span>
                <span className="text-emerald-700 font-bold text-sm">AED 1,200–1,800/day</span>
              </div>
              <p className="text-gray-600 text-xs">Month-end close, VAT, management accounts, team supervision</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-sm">Qualified accountant (ACCA/CA/CPA, 5+ years UAE)</span>
                <span className="text-emerald-700 font-bold text-sm">AED 1,800–2,500/day</span>
              </div>
              <p className="text-gray-600 text-xs">Year-end, CT returns, audit support, CFO-level advisory</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Day rates are most defensible when you can point to a professional qualification and
            UAE-specific experience. ACCA-qualified accountants with Big Four or DIFC/ADGM experience
            can comfortably charge at the top of the range; the UAE market values both credentials
            and local regulatory knowledge highly.
          </p>
        </section>

        {/* Pricing strategy */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">How to Price Your Accounting Services as a UAE Freelancer</h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            The most common mistake freelance accountants in the UAE make is pricing too low at the
            start and then struggling to raise rates with existing clients. Set your rates at the
            midpoint of the market range from the beginning — the UAE business community equates low
            fees with low quality in professional services.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Annual retainers — where a client pays a flat monthly fee for a defined set of services —
            are worth pursuing over ad hoc project work. A retainer of AED 2,500/month for bookkeeping
            plus quarterly VAT is AED 30,000/year from one client. Four such clients replace a
            full-time salary without requiring agency infrastructure. The key is defining the scope
            precisely: how many transactions, which software, who provides source documents, and what
            is out of scope.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Corporate Tax has created a natural upsell for existing bookkeeping clients. If you already
            do someone&apos;s monthly accounts, you are uniquely positioned to prepare their CT return at
            year-end — you know the data, you understand the business, and there is minimal onboarding
            cost. Price the CT return separately and clearly: AED 3,000–5,000 for most SMEs is a
            straightforward conversation when the alternative is paying a firm significantly more.
          </p>
        </section>

        {/* UAE-specific regulatory context */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">UAE Regulatory Context Freelancers Must Know</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-900 text-sm font-semibold mb-3">Key regulatory touchpoints in 2026</p>
            <ul className="space-y-2 text-sm text-amber-800">
              <li><strong>FTA — Federal Tax Authority:</strong> Administers VAT and Corporate Tax. EmaraTax is the portal for registration, returns, and refund claims. Freelance accountants who file on behalf of clients need to be registered as authorised tax agents.</li>
              <li><strong>Corporate Tax (CT):</strong> 9% on taxable income above AED 375,000. Free zone entities can apply for Qualifying Free Zone Person (QFZP) status for 0% on qualifying income — the analysis for this requires qualified accounting judgement.</li>
              <li><strong>Economic Substance Regulations (ESR):</strong> UAE entities in certain sectors must demonstrate genuine economic activity in the UAE. ESR compliance reports are an additional annual filing.</li>
              <li><strong>UBO (Ultimate Beneficial Owner) register:</strong> Ongoing compliance requirement for mainland companies. Accountants advising SME clients often assist with annual confirmations.</li>
              <li><strong>AML/CFT:</strong> Designated Non-Financial Businesses and Professions (DNFBPs) include accountants and auditors. Freelance accountants above certain revenue thresholds have AML obligations under UAE law.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 mb-10">
          <p className="text-sm text-gray-400 mb-2">Running your freelance accounting practice?</p>
          <h2 className="text-xl font-bold mb-3">Solopreneur OS — Business Operating System for UAE Freelancers</h2>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            Track retainer clients, manage invoice pipelines, monitor monthly revenue, and stay on
            top of deadlines — all in one Notion workspace built for UAE freelancers. Solopreneur OS
            includes a client CRM, revenue dashboard, and project tracker that works for accounting
            practices managing multiple client engagements.
          </p>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            The <span className="text-white font-semibold">Freelancer Client CRM</span> is ideal for
            tracking client deadlines (VAT quarters, CT filing dates, year-end timelines) alongside
            invoice status and payment tracking.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/solopreneur-os"
              className="inline-block bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors text-sm"
            >
              Get Solopreneur OS — AED 249
            </Link>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block border border-gray-600 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-sm"
            >
              Freelancer Client CRM — AED 175
            </Link>
          </div>
        </div>

        {/* Related guides */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid gap-3">
            {[
              { href: "/blog/best-accounting-software-freelancers-uae", label: "Best Accounting Software for UAE Freelancers (2026)" },
              { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE? (2026)" },
              { href: "/blog/emaratax-registration-freelancers-uae", label: "How to Register on EmaraTax as a Freelancer" },
              { href: "/blog/freelance-invoice-uae", label: "How to Invoice Clients as a UAE Freelancer" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-400">→</span>
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <Link
            href="/#products"
            className="inline-block text-gray-600 hover:text-gray-900 text-sm font-semibold border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-500 transition-colors"
          >
            Browse all SoloKit products →
          </Link>
        </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
