import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Rates in Qatar (2026): What to Charge in QAR — SoloKit",
  description:
    "QAR day rates for consultants, IT, marketing, finance, and engineering freelancers in Doha — post-FIFA economy, QFC, QatarEnergy sector premiums explained.",
  alternates: { canonical: "/blog/freelance-rates-qatar" },
  openGraph: {
    title: "Freelance Rates in Qatar (2026): What to Charge in QAR",
    description:
      "QAR day rates for consultants, IT, marketing, finance, and engineering freelancers in Doha — post-FIFA economy, QFC, QatarEnergy sector premiums.",
    type: "article",
    url: "/blog/freelance-rates-qatar",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Rates in Qatar (2026): What to Charge in QAR",
  description:
    "QAR day rates for consultants, IT, marketing, finance, and engineering freelancers in Doha — post-FIFA economy, QFC, QatarEnergy sector premiums explained.",
  url: `${siteUrl}/blog/freelance-rates-qatar`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const stats = [
  { value: "QAR 800–2,500", label: "Junior / day" },
  { value: "QAR 1,600–5,000", label: "Mid / day" },
  { value: "QAR 3,500–12,000", label: "Senior / day" },
];

const rateTable = [
  {
    type: "Management Consultant",
    rate: "QAR 1,500–11,000/day",
    notes: "Junior QAR 1,500–2,500 / Mid QAR 3,000–5,000 / Senior QAR 6,000–11,000",
  },
  {
    type: "IT Consultant / Developer",
    rate: "QAR 1,200–9,000/day",
    notes: "Junior QAR 1,200–2,000 / Mid QAR 2,500–4,000 / Senior QAR 5,000–9,000",
  },
  {
    type: "Marketing & Digital",
    rate: "QAR 800–6,000/day",
    notes: "Junior QAR 800–1,400 / Mid QAR 1,600–2,800 / Senior QAR 3,500–6,000",
  },
  {
    type: "Finance & Accounting",
    rate: "QAR 1,000–8,000/day",
    notes: "Junior QAR 1,000–1,800 / Mid QAR 2,000–3,500 / Senior QAR 4,000–8,000",
  },
  {
    type: "Legal Consultant",
    rate: "QAR 1,500–12,000/day",
    notes: "Junior QAR 1,500–2,500 / Mid QAR 3,000–5,500 / Senior QAR 6,000–12,000",
  },
  {
    type: "Engineering / Construction PM",
    rate: "QAR 1,200–10,000/day",
    notes: "Junior QAR 1,200–2,200 / Mid QAR 2,800–5,000 / Senior QAR 5,500–10,000",
  },
  {
    type: "ESG / Sustainability",
    rate: "QAR 1,000–8,000/day",
    notes: "Junior QAR 1,000–1,800 / Mid QAR 2,200–4,000 / Senior QAR 4,500–8,000",
  },
];

const niches = [
  {
    title: "LNG & Energy Sector (QatarEnergy)",
    badge: "Premium rates",
    detail:
      "QatarEnergy is the world's largest LNG producer and one of the highest-paying clients in the GCC. The North Field expansion programme has created sustained demand for engineering, project management, HSE, and commercial consultants. Senior specialists with LNG experience consistently reach the top of their rate range and beyond.",
  },
  {
    title: "FIFA Legacy & Hospitality Tech",
    badge: "Growing sector",
    detail:
      "Post-World Cup 2022, Qatar is leveraging its eight FIFA stadiums, 100,000+ hotel rooms, and new transport infrastructure for conferences, sports events, and tourism. Event technologists, hospitality consultants, and venue management specialists are in demand as Qatar positions itself as a year-round destination.",
  },
  {
    title: "Qatar Financial Centre (QFC)",
    badge: "Finance hub",
    detail:
      "The QFC is Qatar's answer to DIFC and ADGM — an onshore financial services hub with 100% foreign ownership, 10% corporate tax, and a sophisticated legal framework. Finance, legal, compliance, and fintech consultants working with QFC-registered entities can command top-of-range rates.",
  },
  {
    title: "Arabic Bilingual Consultants",
    badge: "+20–30% premium",
    detail:
      "Qatar's business environment, while international, still values Arabic fluency highly — particularly for government-facing work with Ashghal, QNB, and Ooredoo. Arabic-English bilingual consultants in strategy, communications, and legal advisory consistently earn 20–30% more than English-only equivalents.",
  },
];

const clients = [
  { name: "QatarEnergy", sector: "Oil, Gas & LNG" },
  { name: "QNB Group", sector: "Banking & Finance" },
  { name: "Ooredoo Qatar", sector: "Telecoms & Digital" },
  { name: "Qatar Airways", sector: "Aviation & Logistics" },
  { name: "Ashghal (Public Works Authority)", sector: "Infrastructure & Construction" },
  { name: "Qatar Investment Authority (QIA)", sector: "Sovereign Wealth & Investment" },
];

const paymentPoints = [
  "Qatar's currency (QAR) is pegged to the USD at 1 USD = 3.64 QAR. This peg has held since 1980 and means zero currency risk when pricing in QAR for USD-based freelancers.",
  "Standard payment terms for Qatar corporate clients are 30 days from invoice. Government-linked entities such as Ashghal and QIA can run to 45–60 days — factor a premium into these engagements.",
  "Qatar's banking system (QNB, CBQ, Doha Bank) handles international SWIFT transfers efficiently. Most freelancers invoice in QAR or USD. EUR invoicing is less common but acceptable.",
  "Withholding tax applies to service payments to non-residents at 5% for most services. If you are invoicing from outside Qatar, your Qatari client may deduct 5% WHT — negotiate this into your rate or structure as gross-up.",
  "Qatar has no VAT as of 2026, unlike the UAE and Saudi Arabia. This simplifies invoicing significantly — no VAT registration, no VAT line items, no quarterly filings.",
];

export default function FreelanceRatesQatar() {
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
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Pricing &amp; Rates</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Freelance Rates in Qatar (2026): What to Charge in QAR
          </h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            Real QAR day rates for consultants, IT professionals, engineers, and marketers working with Qatari clients in Doha — covering QatarEnergy, QFC, post-FIFA legacy projects, and Qatar National Vision 2030.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 16, 2026</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>Qatar</span>
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
          Qatar is one of the wealthiest economies in the world per capita, and its freelance market reflects that. The post-FIFA World Cup 2022 infrastructure boom, the North Field LNG expansion, and the Qatar National Vision 2030 economic diversification programme have created sustained demand for skilled independent consultants and professionals. If you understand how the market works, you can earn at rates that rival the UAE — and in specialist sectors, significantly exceed them.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          One critical advantage for USD-based or UAE-based freelancers: the QAR is pegged to the USD at a fixed rate of 1 USD = 3.64 QAR. This means zero currency risk. Your USD day rate converts directly to QAR at a predictable, stable rate, with no exposure to the exchange rate volatility you might see in other markets.
        </p>

        {/* Rate Table */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-4">
          <div className="bg-gray-900 px-5 py-3">
            <h2 className="text-sm font-bold text-white">Qatar Freelance Rate Benchmarks 2026 (QAR/day)</h2>
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

        <p className="text-xs text-gray-400 mb-8">
          Rates are gross pre-tax benchmarks for 2026. Qatar has no VAT. Non-resident service providers may be subject to 5% withholding tax — factor this into your rate. QAR pegged to USD: 1 USD = 3.64 QAR.
        </p>

        {/* Section 1: Qatar vs UAE */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Qatar vs UAE: How Do Rates Compare?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          The UAE remains the largest freelance market in the GCC, but Qatar competes closely at the senior end. At mid-level, Qatar and UAE rates are roughly equivalent in purchasing power. At the senior end — particularly in energy, legal, and engineering — Qatar often outpays Dubai, driven by QatarEnergy&apos;s exceptional budgets and the concentration of large-scale infrastructure programmes.
        </p>

        <div className="grid gap-4 mb-8">
          {[
            {
              title: "Standard corporate work (Doha)",
              badge: "≈ UAE rates",
              detail:
                "For marketing, digital, standard IT consulting, and general business advisory — Qatar corporate rates track closely with Dubai. The QAR/USD peg means USD-quoted rates translate cleanly. Budget for AED 1 ≈ QAR 1.05 when benchmarking across both markets.",
            },
            {
              title: "QatarEnergy & LNG sector",
              badge: "+20–40% above UAE",
              detail:
                "Senior engineers, HSE consultants, and LNG commercial specialists working directly with QatarEnergy on the North Field expansion or Ras Laffan Industrial City projects can earn significantly above UAE market rates for equivalent skills.",
            },
            {
              title: "Qatar Financial Centre (QFC)",
              badge: "Finance premium",
              detail:
                "The QFC hosts 1,000+ financial services firms and pays at the top of the range for finance, legal, compliance, and technology consultants. QFC work is comparable in rate terms to DIFC-adjacent work in Dubai.",
            },
            {
              title: "Government / Ashghal work",
              badge: "Premium + longer terms",
              detail:
                "Qatar&apos;s Public Works Authority (Ashghal) and other government-linked entities pay competitive rates but run to 45–60 day payment terms. Build a time-value premium of 15–20% into government engagements.",
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

        {/* Section 2: High-value niches */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          High-Value Niches in Qatar&apos;s Freelance Market
        </h2>

        <div className="grid gap-4 mb-8">
          {niches.map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Section 3: Key clients */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Qatar&apos;s Biggest Freelance Clients by Sector
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Qatar&apos;s economy is dominated by a handful of very large state-linked organisations. Understanding who the buyers are — and what they need — is essential to positioning yourself effectively in the market.
        </p>

        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-900 px-5 py-3">
            <p className="text-sm font-bold text-white">Key Qatar Buyers of Freelance Services</p>
          </div>
          <div className="divide-y divide-gray-100">
            {clients.map((row, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <p className="text-sm font-semibold text-gray-900">{row.name}</p>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  {row.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Payment terms */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Getting Paid from Qatari Clients: Key Facts
        </h2>

        <div className="space-y-3 mb-8">
          {paymentPoints.map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Section 5: Qatar National Vision 2030 */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Qatar National Vision 2030: Where the Work Is
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Qatar National Vision 2030 (QNV 2030) is built on four pillars: human development, social development, economic development, and environmental development. Each pillar is generating substantial demand for independent expertise across disciplines.
        </p>

        <div className="space-y-3 mb-8">
          {[
            "Economic diversification from hydrocarbons is generating demand for strategy, management, and financial consultants helping both government and private sector organisations plan and execute transformation programmes.",
            "The Lusail City development — a new smart city north of Doha built from scratch at a cost exceeding QAR 165 billion — continues to generate engineering, architecture, urban planning, and construction project management demand.",
            "Qatar&apos;s FIFA World Cup 2022 legacy is being monetised through MICE (meetings, incentives, conferences, events) tourism. Hospitality consultants, event technologists, and sports management specialists find a steady pipeline of work in Qatar&apos;s post-World Cup economy.",
            "ESG and sustainability consulting is growing fast as Qatar navigates a complex reputation challenge: the world&apos;s largest LNG exporter by 2027, actively pursuing net-zero commitments. ESG specialists who understand energy transition command premium rates.",
            "Digital transformation across Qatar government (e-government, smart city tech, AI adoption in public services) is generating ongoing demand for technology consultants, change management specialists, and digital strategy advisors.",
          ].map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Section 6: Setting your rate */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          How to Set Your Rate for the Qatar Market
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          If you are already operating in the UAE, use your AED day rate as a starting point. Convert to QAR (1 AED ≈ 1.05 QAR) and use that as your baseline. Then adjust upward for:
        </p>

        <div className="grid gap-4 mb-8">
          {[
            {
              title: "Sector premium",
              badge: "+15–40%",
              detail:
                "Energy, LNG, QFC financial services, and Ashghal infrastructure work command premiums above standard Qatar market rates. If your client is QatarEnergy or a QIA-linked entity, quote at the top of your range.",
            },
            {
              title: "Withholding tax gross-up",
              badge: "+5–6%",
              detail:
                "If invoicing from outside Qatar, your client may deduct 5% withholding tax. Gross up your rate by approximately 5.26% to land at your target net. Example: target QAR 5,000 net → quote QAR 5,263 gross.",
            },
            {
              title: "Short engagement premium",
              badge: "+20–30%",
              detail:
                "Short-term Qatar engagements of 1–4 weeks carry higher day rates than long-term contracts. You are covering travel, setup, and risk. Quote a higher day rate for short engagements and offer a small retainer discount for 3+ month commitments.",
            },
            {
              title: "Arabic language premium",
              badge: "+20–30%",
              detail:
                "If you are bilingual Arabic-English and your role involves client-facing communication, negotiations, or content creation in Arabic, add 20–30% to your baseline rate. This is a scarce skill that Qatar clients value and pay for.",
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

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
          <h3 className="text-2xl font-bold mb-3">Build a GCC Freelance Practice</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
            Templates, invoices, and systems for UAE, Saudi Arabia, Qatar, and Kuwait clients — all in one toolkit.
          </p>
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
              { href: "/blog/freelance-visa-qatar", title: "How to Work as a Freelancer in Qatar (Visa & Legal)" },
              { href: "/blog/freelance-rates-saudi-arabia", title: "Freelance Rates in Saudi Arabia (SAR)" },
              { href: "/blog/freelance-rates-kuwait", title: "Freelance Rates in Kuwait (KWD)" },
              { href: "/blog/freelance-consultant-rates-uae", title: "Freelance Consultant Rates in UAE (AED)" },
              { href: "/for/saudi-arabia", title: "SoloKit for Saudi Arabia Freelancers" },
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
