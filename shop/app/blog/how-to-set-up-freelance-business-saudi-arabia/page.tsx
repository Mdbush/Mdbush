import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Set Up a Freelance Business in Saudi Arabia (2026): Complete Guide — SoloKit",
  description:
    "Step-by-step guide to setting up a freelance business legally in Saudi Arabia. Professional license, ZATCA tax registration, Saudi bank account (Al Rajhi, SNB, Riyad Bank), invoicing in SAR, and Vision 2030 opportunities.",
  alternates: { canonical: "/blog/how-to-set-up-freelance-business-saudi-arabia" },
  openGraph: {
    title: "How to Set Up a Freelance Business in Saudi Arabia (2026): Complete Guide",
    description:
      "Step-by-step guide to setting up a freelance business legally in Saudi Arabia — professional license, ZATCA registration, Saudi bank account, and invoicing in SAR.",
    type: "article",
    url: "/blog/how-to-set-up-freelance-business-saudi-arabia",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up a Freelance Business in Saudi Arabia (2026): Complete Guide",
  description:
    "Step-by-step guide to setting up a freelance business legally in Saudi Arabia. Professional license, ZATCA tax registration, Saudi bank account, invoicing in SAR, and Vision 2030 opportunities.",
  url: `${siteUrl}/blog/how-to-set-up-freelance-business-saudi-arabia`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
};

const stats = [
  { label: "ZATCA VAT registration threshold", value: "SAR 375K" },
  { label: "Saudi VAT rate", value: "15%" },
  { label: "Maroof license setup time (Saudi nationals)", value: "7–14 days" },
];

const steps = [
  {
    num: "1",
    title: "Choose your structure: Saudi national or foreign freelancer path",
    body: "Saudi nationals can register directly as self-employed through Absher and the Maroof platform, then obtain a Professional Activity License (رخصة مزاولة النشاط المهني). Foreign freelancers typically need to operate through an iqama-sponsoring entity, a UAE-based company, or apply for Saudi Premium Residency. Clarify your status first — it determines every subsequent step.",
  },
  {
    num: "2",
    title: "Register on Maroof and obtain your Professional Activity License",
    body: "Saudi nationals: log in to Absher, navigate to the business services section, and register for a Professional Activity License. This is your official freelance credential — it takes 7–14 business days and is renewed annually. Simultaneously, create your Maroof (معروف) profile — the government-endorsed marketplace that provides clients with verified seller credentials. Maroof is increasingly required by corporate and government clients.",
  },
  {
    num: "3",
    title: "Register with Etmaam for business services (if needed)",
    body: "Etmaam (اتمام) is Saudi Arabia's business services platform for company formation and related services. If you're setting up as a sole proprietorship or a one-person company (شركة شخص واحد) rather than a simple Professional Activity License, use Etmaam for company registration. This gives you a Commercial Registration (CR) number — required for larger contracts and government procurement.",
  },
  {
    num: "4",
    title: "Register with ZATCA for tax purposes",
    body: "ZATCA (Zakat, Tax and Customs Authority) is Saudi Arabia's tax regulator. Register for VAT if your annual revenue from Saudi sources exceeds or is likely to exceed SAR 375,000. You will receive a 15-digit Tax Identification Number (TIN) that must appear on all invoices. Saudi nationals also need to register for zakat (2.5% on business wealth). Non-Saudi shareholders in Saudi entities pay 20% corporate income tax on their share of profits.",
  },
  {
    num: "5",
    title: "Open a business bank account",
    body: "Saudi banks require a Professional Activity License or CR number to open a business account. Al Rajhi Bank and Saudi National Bank (SNB) are the most popular for freelancers and small businesses. Apply through their apps or branches — bring your national ID (Huwiyya), Absher-verified documents, and your license. Typical processing time is 3–7 business days.",
  },
  {
    num: "6",
    title: "Set up professional invoicing",
    body: "Saudi invoices must include: your full legal name or business name, Professional Activity License number or CR number, 15-digit ZATCA TIN (if VAT-registered), client's name and address, VAT amount (15%) as a separate line item, payment bank details (IBAN), and invoice date and payment due date. Many Saudi clients prefer bilingual Arabic-English invoices — especially government-linked entities which may require Arabic.",
  },
  {
    num: "7",
    title: "Join Saudi freelance platforms",
    body: "Activate your presence on the key Saudi platforms: Al-Qudurat (المقدرات) for government and corporate project work, Mostaql (مستقل) for the largest Arabic-language freelance marketplace, Ureed (أوريد) for content and translation, and Maroof (معروف) for credential verification that builds trust with new clients. LinkedIn remains essential for senior consulting and B2B work.",
  },
];

const banks = [
  {
    title: "Al Rajhi Bank",
    badge: "Most popular",
    detail:
      "The world's largest Islamic bank and Saudi Arabia's most widely used retail bank. Al Rajhi's app is excellent and widely adopted by freelancers. Business accounts available for sole proprietors with a Professional Activity License. Strong digital banking features.",
  },
  {
    title: "Saudi National Bank (SNB / الأهلي)",
    badge: "Corporate clients",
    detail:
      "Saudi Arabia's largest bank by assets (formed from Al Ahli and NCB merger). Preferred by larger businesses and government-linked entities. Business accounts here can lend credibility when dealing with enterprise and government clients.",
  },
  {
    title: "Riyad Bank",
    badge: "Strong digital",
    detail:
      "Well-regarded for its digital banking platform and business services. Good for freelancers who need online-first banking. International transfers and SWIFT services are well-supported.",
  },
  {
    title: "Stc Pay / urpay",
    badge: "Digital wallets",
    detail:
      "Stc Pay is Saudi Arabia's leading digital wallet, licensed as a fintech. Useful for smaller domestic payments and quick transfers between freelancers and clients. Not suitable as your primary business account for large invoices or international payments.",
  },
];

const platforms = [
  {
    title: "Al-Qudurat (المقدرات)",
    badge: "Saudi nationals only",
    detail:
      "Government-backed platform launched 2022. Connects Saudi freelancers with government ministries and private sector clients. Provides official registration status. Essential for Saudi nationals — government procurement increasingly routes through here.",
  },
  {
    title: "Mostaql (مستقل)",
    badge: "Largest Arabic marketplace",
    detail:
      "The Arabic-language equivalent of Upwork — the largest freelance marketplace in the Arab world. Covers design, development, writing, marketing, translation, and more. Open to Saudi and non-Saudi freelancers. High project volume in Arabic content.",
  },
  {
    title: "Ureed (أوريد)",
    badge: "Content & translation",
    detail:
      "Specialist platform for Arabic content creation, translation, and editing. Strong demand from media companies, brands, and publishers. Ideal for bilingual writers, translators, editors, and content strategists.",
  },
  {
    title: "Maroof (معروف)",
    badge: "Credential verification",
    detail:
      "Government-endorsed verification platform that gives freelancers a Maroof certificate — a trust signal increasingly required by Saudi corporate clients. Not a marketplace itself, but your Maroof profile is a credibility tool to share with clients.",
  },
];

const invoiceChecklist = [
  "Full legal name or registered business name (Arabic and English if bilingual invoicing)",
  "Professional Activity License number OR Commercial Registration (CR) number",
  "15-digit ZATCA Tax Identification Number (TIN) — mandatory if VAT-registered",
  "Client's full legal name, address, and CR/TIN number",
  "Invoice number (sequential, required for VAT compliance)",
  "Invoice date and payment due date",
  "Clear description of services in Arabic (and English if applicable)",
  "Subtotal, VAT amount (15% shown separately), and total including VAT",
  "Bank name, IBAN, and SWIFT code for payment",
];

export default function HowToSetUpFreelanceBusinessSaudiArabia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Blog
        </Link>

        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Getting Started</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            How to Set Up a Freelance Business in Saudi Arabia (2026): Complete Guide
          </h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            Everything you need to register legally, get your ZATCA tax number, open a Saudi bank account, and start invoicing in SAR — for both Saudi nationals and foreign freelancers.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 16, 2026</span>
            <span>·</span>
            <span>11 min read</span>
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
          Saudi Arabia&apos;s Vision 2030 transformation is creating more freelance and consulting opportunities than almost anywhere else in the world. But before you can work legally and get paid professionally, you need the right setup. This guide walks through every step — from registration to banking to invoicing — for both Saudi nationals and foreign professionals.
        </p>

        {/* Steps */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Step-by-Step Setup Guide
        </h2>

        <div className="space-y-4 mb-10">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                {step.num}
              </div>
              <div className="flex-1 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ZATCA VAT section */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          ZATCA VAT Registration: When and How
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          ZATCA (زكاة وضريبة وجمارك) is Saudi Arabia&apos;s Zakat, Tax and Customs Authority. It administers VAT, corporate tax, withholding tax, and zakat. Understanding your obligations is essential for running a compliant freelance business.
        </p>

        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-900 px-5 py-3">
            <p className="text-sm font-bold text-white">ZATCA Obligations for Freelancers</p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { obligation: "VAT Registration", threshold: "SAR 375,000 annual revenue", notes: "Mandatory above threshold; voluntary registration allowed from SAR 187,500. File quarterly returns." },
              { obligation: "Zakat (Saudi nationals)", threshold: "All Saudi sole proprietors", notes: "2.5% annual levy on business assets/wealth. Filed through the Zatca online portal via Absher." },
              { obligation: "Corporate Income Tax", threshold: "Non-Saudi shareholders", notes: "20% on profits attributable to non-Saudi partners in a Saudi entity. Saudis pay zakat instead." },
              { obligation: "Withholding Tax", threshold: "Payments to non-residents", notes: "If a Saudi client pays a foreign freelancer, withholding tax of 5–15% may apply depending on service type. The Saudi client deducts it at source." },
              { obligation: "E-Invoicing (FATOORA)", threshold: "All VAT-registered businesses", notes: "Saudi Arabia mandates electronic invoicing via ZATCA's FATOORA platform. Phase 2 (integration) applies to larger businesses; Phase 1 (generation) applies to all VAT registrants." },
            ].map((row, i) => (
              <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{row.obligation}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.notes}</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0 text-right max-w-[130px]">{row.threshold}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bank accounts */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Saudi Business Bank Accounts: Al Rajhi vs SNB vs Riyad Bank
        </h2>

        <div className="grid gap-4 mb-8">
          {banks.map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Invoicing */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          What to Include on a Saudi Invoice
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Saudi Arabia has specific invoicing requirements, particularly for VAT-registered businesses under the FATOORA e-invoicing mandate. Here&apos;s what every freelance invoice to a Saudi client should include:
        </p>

        <div className="space-y-3 mb-8">
          {invoiceChecklist.map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Saudi Freelance Platforms: Where to Find Clients
        </h2>

        <div className="grid gap-4 mb-8">
          {platforms.map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Foreign freelancer note */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Foreign Freelancers: Operating from a UAE Entity
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re a foreign professional without a Saudi iqama, the most pragmatic approach is to operate through a UAE-based freelance license or company and invoice Saudi clients from there. This is legal, widely practiced, and avoids the complexity of Saudi residency.
        </p>

        <div className="space-y-3 mb-8">
          {[
            "Set up a UAE freelance permit (Shams, RAKEZ, or IFZA are popular options) — costs AED 6,000–10,000/year and gives you a legal entity from which to invoice Saudi clients.",
            "Invoice in USD or SAR from your UAE entity — Saudi clients routinely pay UAE-based consultants and freelancers without issue.",
            "Understand the withholding tax risk: Saudi clients paying foreign entities may withhold 5–15% at source for certain service types. Clarify this before signing contracts and factor it into your pricing.",
            "Relationship matters enormously in Saudi business culture — visit Riyadh and Jeddah for in-person meetings. Many senior Saudi clients prefer to meet face-to-face before engaging a consultant, regardless of whether you are based there.",
            "If you expect to grow your Saudi client base significantly, a Saudi Premium Residency (SAR 100,000/year) becomes worth considering — it gives you full freedom to operate independently within the Kingdom.",
          ].map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Summary cost table */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Cost Summary: Setting Up in Saudi Arabia
        </h2>

        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-900 px-5 py-3">
            <p className="text-sm font-bold text-white">Saudi Freelance Setup Costs 2026</p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { item: "Professional Activity License (Saudi nationals)", cost: "SAR 100–500/year", notes: "Via Maroof/Absher — low cost, quick to obtain" },
              { item: "One-Person Company (شركة شخص واحد)", cost: "SAR 500–2,000 setup", notes: "More formal structure with CR number — required for larger contracts" },
              { item: "ZATCA VAT Registration", cost: "Free", notes: "Mandatory above SAR 375,000 annual revenue" },
              { item: "Al Rajhi / SNB Business Account", cost: "SAR 0–500 setup", notes: "Some accounts have minimum balance requirements" },
              { item: "Saudi Premium Residency (foreign freelancers)", cost: "SAR 100,000/year", notes: "Full independent working rights — worth it at senior consultant rates" },
              { item: "Accounting / VAT Filing Software", cost: "SAR 500–2,000/year", notes: "ZATCA-approved e-invoicing tools required for VAT registrants" },
            ].map((row, i) => (
              <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{row.item}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.notes}</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.cost}</span>
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
            href="/products/solokit-freelance-os"
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
              { href: "/blog/freelance-rates-saudi-arabia", title: "Freelance Rates in Saudi Arabia (2026)" },
              { href: "/blog/freelance-visa-uae", title: "How to Get a Freelance Visa in the UAE" },
              { href: "/blog/how-to-start-online-business-uae", title: "How to Set Up a Freelance Business in UAE" },
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
      </main>

      <Footer />
    </>
  );
}
