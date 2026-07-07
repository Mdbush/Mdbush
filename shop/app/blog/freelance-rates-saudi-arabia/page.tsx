import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Rates in Saudi Arabia (2026): What to Charge in SAR — SoloKit",
  description:
    "Real SAR day rates and project fees for freelancers in Saudi Arabia — management consultants, IT specialists, marketing, design, legal, and finance freelancers working with Saudi clients in Riyadh, Jeddah, and NEOM in 2026.",
  alternates: { canonical: "/blog/freelance-rates-saudi-arabia" },
  openGraph: {
    title: "Freelance Rates in Saudi Arabia (2026): What to Charge in SAR",
    description:
      "Real SAR day rates and project fees for freelancers in Saudi Arabia — consultants, IT, marketing, design, legal, and finance working with Saudi clients in 2026.",
    type: "article",
    url: "/blog/freelance-rates-saudi-arabia",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Rates in Saudi Arabia (2026): What to Charge in SAR",
  description:
    "Real SAR day rates and project fees for freelancers in Saudi Arabia — management consultants, IT specialists, marketing, design, legal, and finance freelancers working with Saudi clients in Riyadh, Jeddah, and NEOM in 2026.",
  url: `${siteUrl}/blog/freelance-rates-saudi-arabia`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
};

const stats = [
  { label: "NEOM project management (max rate)", value: "SAR 5K/day" },
  { label: "Arabic skills premium over English-only", value: "+20–40%" },
  { label: "Standard Saudi payment terms", value: "30–45 days" },
];

const rateTable = [
  {
    type: "Management / Strategy Consultant (mid)",
    rate: "SAR 1,500–3,500/day",
    notes: "McKinsey/BCG/Bain ex-consultants command top of range for Vision 2030 programmes",
  },
  {
    type: "IT / Technology Consultant",
    rate: "SAR 1,000–2,500/day",
    notes: "ERP, SAP, Oracle, cloud — Saudi Aramco digital transformation a major buyer",
  },
  {
    type: "Digital Marketing Specialist",
    rate: "SAR 300–700/hr",
    notes: "Arabic content essential for most Saudi brand clients; bilingual premium 20–30%",
  },
  {
    type: "Graphic / Brand Designer",
    rate: "SAR 300–600/hr",
    notes: "Arabic typography, RTL design skills command significant premium over English-only",
  },
  {
    type: "Legal Consultant / Lawyer",
    rate: "SAR 600–1,500/hr",
    notes: "Saudi commercial law, Vision 2030 regulatory advisory — Saudi-qualified lawyers preferred",
  },
  {
    type: "Project Manager (NEOM/giga-projects)",
    rate: "SAR 2,000–5,000/day",
    notes: "NEOM, Red Sea Project, Diriyah Gate — highest paying construction/project work in region",
  },
  {
    type: "Financial Advisor / CFO (fractional)",
    rate: "SAR 1,500–4,000/day",
    notes: "IPO preparation, private equity, family office — Saudi market has significant deal flow",
  },
  {
    type: "Arabic Content Creator / Copywriter",
    rate: "SAR 800–2,500/project",
    notes: "Per article/campaign; bilingual Arabic-English copywriters earn significantly more",
  },
];

const sectors = [
  {
    title: "NEOM & Giga-Project Work",
    badge: "Highest rates in region",
    detail:
      "NEOM, Red Sea Project, Diriyah Gate, Qiddiya, and Amaala are paying rates that compete with London and New York for senior talent. Project managers, engineers, architects, and senior consultants should quote at the very top of their range or above.",
  },
  {
    title: "Saudi Aramco & SABIC",
    badge: "Premium engineering",
    detail:
      "Saudi Aramco and SABIC are two of the world's largest companies by revenue. They pay premium rates for engineering, IT, ERP, and supply chain consultants. Long project durations and reliable payment make them ideal clients.",
  },
  {
    title: "Vision 2030 Strategy Work",
    badge: "Consultant premium",
    detail:
      "Government ministries and the Public Investment Fund (PIF) are executing the largest economic transformation programme in the world. Senior strategy consultants with McKinsey/BCG/Bain pedigree or sector expertise can command rates above SAR 4,000/day.",
  },
  {
    title: "Saudi Entertainment & Media",
    badge: "Fast-growing",
    detail:
      "Saudi Arabia&apos;s entertainment sector barely existed pre-2017. Now MBC Group, Shahid, Rotana, and new Saudi Studios are spending at scale. Creative, production, and digital marketing professionals are in strong demand.",
  },
];

const paymentPoints = [
  "Payment terms of 30–45 days from invoice are standard for Saudi corporate clients — build this into your cash flow planning and quote accordingly.",
  "Advance deposits are less common in Saudi Arabia than in the UAE. For new clients, try to negotiate 25–30% upfront, especially for project work over SAR 10,000.",
  "Saudi companies typically pay via SARIE (domestic IBAN transfer) or SWIFT (for international). Confirm payment currency — SAR or USD — before starting work.",
  "If invoicing from a UAE entity, expect SWIFT transfers in SAR or USD. Factor in FX conversion costs when pricing in SAR.",
  "Government clients (ministries, PIF entities) often pay in 60–90 days. Factor this into your pricing — add a premium for government project work to compensate for slower payment cycles.",
];

export default function FreelanceRatesSaudiArabia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Blog
        </Link>

        {/* Hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
          <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 -z-10 bg-dot-grid" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Pricing &amp; Rates</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Freelance Rates in Saudi Arabia (2026): What to Charge in SAR
          </h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            Real SAR day rates and project fees for consultants, IT professionals, marketers, designers, and legal advisors working with Saudi clients in Riyadh, Jeddah, and NEOM.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 16, 2026</span>
            <span>·</span>
            <span>9 min read</span>
            <span>·</span>
            <span>Saudi Arabia</span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Saudi Arabia&apos;s freelance market is unlike anywhere else in the GCC. Vision 2030, the giga-projects, and a massive economic transformation programme have created unprecedented demand for skilled professionals — and the rates reflect it. If you&apos;re undercharging Saudi clients, you&apos;re leaving significant money on the table.
        </p>

        {/* Rate Table */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-900 px-5 py-3">
            <h2 className="text-sm font-bold text-white">Saudi Arabia Rate Benchmarks 2026</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {rateTable.map((row, i) => (
              <div
                key={i}
                className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{row.type}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.notes}</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  {row.rate}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 -mt-4 mb-8">
          Rates are pre-VAT benchmarks for 2026. Add 15% VAT if ZATCA-registered. Adjust upward for NEOM, giga-project work, and bilingual/Arabic-language expertise.
        </p>

        {/* Section 1: Saudi vs UAE rates */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Saudi Rates vs UAE Rates: How Do They Compare?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          The good news for GCC freelancers: SAR and AED are near-parity (1 AED ≈ 1.02 SAR), so your UAE rate card translates almost directly to Saudi Arabia. The difference is in the premium opportunities — Saudi&apos;s giga-projects pay significantly above UAE market rates for the same skills, particularly in engineering, project management, and senior consulting.
        </p>

        <div className="grid gap-4 mb-8">
          {[
            {
              title: "Standard corporate work (Riyadh/Jeddah)",
              badge: "≈ UAE rates",
              detail:
                "For marketing, design, standard IT consulting, and writing — Saudi corporate rates are roughly equivalent to Dubai rates. The currency near-parity means your existing pricing works without major adjustment.",
            },
            {
              title: "Giga-project / NEOM work",
              badge: "+30–60% above UAE",
              detail:
                "Senior project managers, engineers, architects, and specialist consultants on NEOM and other giga-projects earn significantly more than equivalent Dubai market rates. These projects have exceptional budgets and compete globally for talent.",
            },
            {
              title: "Government / PIF work",
              badge: "Premium + slow payment",
              detail:
                "PIF-linked entities and government ministries pay premium rates for strategy and programme management. However, payment cycles are longer (60–90 days) — factor this into your pricing with a 15–20% time-value premium.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Section 2: NEOM rates */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          NEOM &amp; Giga-Project Rates: The Highest in the Region
        </h2>

        <div className="grid gap-4 mb-8">
          {sectors.map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Section 3: Arabic skills premium */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          The Arabic Skills Premium: +20–40% on Your Rate
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike the UAE — where English is the dominant business language — Saudi Arabia operates significantly more in Arabic. For client-facing roles, content creation, and marketing work, Arabic fluency is not just a nice-to-have; it&apos;s often required. If you have it, you should be charging a premium.
        </p>

        <div className="space-y-3 mb-8">
          {[
            "Bilingual Arabic-English copywriters and content strategists can charge 30–40% more than English-only equivalents in the Saudi market.",
            "Arabic UI/UX designers who understand RTL (right-to-left) design patterns are scarce globally — this is a highly monetisable niche with very little competition.",
            "Arabic social media management commands a significant premium for consumer brands targeting Saudi audiences — where Instagram, Snapchat, and X (Twitter) penetration is among the highest in the world.",
            "Legal consultants with Arabic language skills and Saudi commercial law knowledge can charge at the very top of rate ranges — the combination of legal expertise and Arabic is genuinely rare.",
            "Arabic voiceover artists, video producers, and podcast editors are in high demand as Saudi Arabia's media and entertainment sector grows rapidly.",
          ].map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Section 4: Payment terms */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Payment Terms &amp; Getting Paid from Saudi Clients
        </h2>

        <div className="space-y-3 mb-8">
          {paymentPoints.map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Section 5: Invoicing */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Setting Up to Invoice Saudi Clients
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Before sending your first invoice to a Saudi client, make sure you have your setup right. Saudi corporate accounts often have strict procurement processes.
        </p>

        <div className="grid gap-4 mb-8">
          {[
            {
              title: "ZATCA VAT Registration",
              badge: "If revenue > SAR 375K",
              detail:
                "Register with ZATCA (Saudi Arabia's Zakat, Tax and Customs Authority) for VAT if your Saudi-sourced revenue exceeds SAR 375,000/year. Your invoice must include your 15-digit Tax Identification Number (TIN) and show VAT at 15% as a separate line item.",
            },
            {
              title: "IBAN for SAR Payments",
              badge: "Required",
              detail:
                "All Saudi bank accounts have an IBAN. If you have a Saudi bank account (Al Rajhi, SNB, Riyad Bank), include the IBAN on every invoice. For foreign bank accounts, use your international IBAN or SWIFT/BIC details.",
            },
            {
              title: "Commercial Registration (CR) Number",
              badge: "Saudi entities",
              detail:
                "Saudi-registered freelancers and businesses must include their CR number on invoices. Saudi nationals operating under a Professional Activity License should include their license number instead.",
            },
            {
              title: "Bilingual Invoice",
              badge: "Best practice",
              detail:
                "Many Saudi clients prefer — or require — invoices in both Arabic and English. Government-linked entities often require Arabic. Use an invoicing tool that supports bilingual output or create separate Arabic and English versions.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Section 6: Highest demand sectors */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Highest-Demand Freelance Sectors in Saudi Arabia 2026
        </h2>

        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-900 px-5 py-3">
            <p className="text-sm font-bold text-white">Top Sectors by Freelance Demand</p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { sector: "Programme / Project Management", demand: "Very High", driver: "NEOM and 50+ giga-projects simultaneously under development" },
              { sector: "Strategy & Management Consulting", demand: "Very High", driver: "Vision 2030 transformation — 100s of programmes requiring advisory" },
              { sector: "Digital & Cloud Technology", demand: "High", driver: "Saudi Aramco, STC, and PIF digital transformation programmes" },
              { sector: "Arabic Content & Marketing", demand: "High", driver: "Saudi entertainment boom, consumer brand growth, Saudisation" },
              { sector: "Architecture & Urban Design", demand: "High", driver: "NEOM, Diriyah, Red Sea Project, The Line, Mukaab — all massive" },
              { sector: "Legal & Regulatory Advisory", demand: "Growing", driver: "New Vision 2030 regulations, foreign investment frameworks, IPO wave" },
              { sector: "Finance & Private Equity", demand: "Growing", driver: "Saudi IPO wave, family office growth, PIF portfolio companies" },
            ].map((row, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{row.sector}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.driver}</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  {row.demand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
          <h3 className="text-2xl font-bold mb-3">Run Your Saudi Freelance Business Like a Pro</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Client CRM, invoice tracker, and business systems — built for GCC freelancers working with Saudi clients.</p>
          <Link
            href="/bundle"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            Get SoloKit →
          </Link>
        </div>

        {/* Related links */}
        <div className="border border-gray-200 rounded-2xl p-6 mt-8">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { href: "/blog/freelance-visa-saudi-arabia", title: "Freelance Visa in Saudi Arabia (2026)" },
              { href: "/blog/how-to-set-up-freelance-business-saudi-arabia", title: "Set Up a Freelance Business in KSA" },
              { href: "/blog/freelance-consultant-rates-uae", title: "Freelance Consultant Rates in UAE" },
              { href: "/blog/how-to-price-freelance-services-uae", title: "How to Price Your Freelance Services" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-700 hover:bg-gray-50 rounded-lg p-2 transition-colors group"
              >
                <span className="text-gray-300 group-hover:text-emerald-500 transition-colors">→</span>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Back to Blog
          </Link>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
