import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get a Freelance Visa in Saudi Arabia (2026): Al-Qudurat & Freelance Options — SoloKit",
  description:
    "Complete guide to freelance visas and work permits in Saudi Arabia — Al-Qudurat platform, talent residency, iqama for freelancers, Vision 2030 opportunities, and how to work legally as a freelancer in KSA.",
  alternates: { canonical: "/blog/freelance-visa-saudi-arabia" },
  openGraph: {
    title: "How to Get a Freelance Visa in Saudi Arabia (2026): Al-Qudurat & Freelance Options",
    description:
      "Complete guide to freelance visas and work permits in Saudi Arabia — Al-Qudurat platform, talent residency, iqama for freelancers, and Vision 2030 opportunities.",
    type: "article",
    url: "/blog/freelance-visa-saudi-arabia",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get a Freelance Visa in Saudi Arabia (2026): Al-Qudurat & Freelance Options",
  description:
    "Complete guide to freelance visas and work permits in Saudi Arabia — Al-Qudurat platform, talent residency, iqama for freelancers, Vision 2030 opportunities, and how to work legally as a freelancer in KSA.",
  url: `${siteUrl}/blog/freelance-visa-saudi-arabia`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
};

const stats = [
  { label: "Talent Residency (annual fee)", value: "SAR 100K/yr" },
  { label: "KSA VAT rate (ZATCA)", value: "15%" },
  { label: "AED / SAR rate parity", value: "1 AED ≈ 1.02 SAR" },
];

const iqamaRoutes = [
  {
    title: "Employer-Sponsored Iqama",
    badge: "Most common",
    detail:
      "A Saudi employer sponsors your residency permit (iqama). You work as a contractor or consultant through them. Limits your ability to work with multiple clients independently — but is the most established route.",
  },
  {
    title: "Saudi Premium Residency (SPR)",
    badge: "High net worth",
    detail:
      "SAR 800,000 one-time fee or SAR 100,000 per year. Gives full residency rights without a sponsor — similar to the UAE Golden Visa. Allows you to work freely as a self-employed freelancer or consultant in KSA.",
  },
  {
    title: "Saudi Talent Attraction Program (STAP)",
    badge: "Skilled professionals",
    detail:
      "5-year residency for highly skilled professionals in priority sectors (tech, health, engineering, finance). Competitive application — requires verified credentials and a track record. Ideal for senior consultants.",
  },
  {
    title: "NEOM / Giga-Project Talent Residency",
    badge: "Project-specific",
    detail:
      "NEOM and Diriyah Gate Development Authority run special talent residency programmes for professionals working on giga-projects. Often arranged through your project employer — ask HR when onboarding.",
  },
  {
    title: "Project-Based Business Visa",
    badge: "Short-term",
    detail:
      "For short-term consulting engagements (weeks to months). Issued as a business visit visa — does not give full working rights but is widely used for project-based work with Saudi companies, particularly in consulting.",
  },
];

const checklistSaudi = [
  "Register on Absher (أبشر) — Saudi Arabia's national digital identity platform. All government services, including business registration and iqama tracking, go through Absher.",
  "Al-Qudurat (المقدرات) platform — launched 2022 for Saudi nationals to register as freelancers, find projects from government and private sector clients, and verify credentials.",
  "Maroof (معروف) — government-endorsed marketplace platform for Saudi freelancers. Provides credential verification and a verified seller profile recognised by clients.",
  "Mostaql (مستقل) — the Arabic-language equivalent of Upwork and the largest freelance marketplace in the Arab world. Essential for any Saudi freelancer.",
  "Ureed (أوريد) — Arabic content and translation platform. Strong demand for Arabic writers, editors, and translators.",
];

const sectors = [
  {
    title: "NEOM & Giga-Projects",
    badge: "Highest rates",
    detail:
      "NEOM, Red Sea Project, Diriyah Gate, Qiddiya, Amaala — these mega-projects are hiring thousands of foreign consultants in construction, engineering, architecture, project management, and digital. Rates rival London and New York.",
  },
  {
    title: "Management Consulting",
    badge: "Booming demand",
    detail:
      "McKinsey, BCG, Bain, and Strategy& all have massive Saudi practices. Senior strategy consultants and ex-MBB professionals are in extremely high demand for Vision 2030 programme work.",
  },
  {
    title: "Media & Entertainment",
    badge: "Growing fast",
    detail:
      "Saudi Arabia's entertainment revolution post-2017 has created massive demand for content creators, producers, filmmakers, and marketing professionals. MBC Group, Rotana, and Shahid are key players.",
  },
  {
    title: "Tech & Digital Transformation",
    badge: "High demand",
    detail:
      "Saudi Aramco, STC, stc Pay, and the Public Investment Fund (PIF) are all investing billions in digital transformation. ERP specialists, cloud architects, and cybersecurity consultants are in high demand.",
  },
];

export default function FreelanceVisaSaudiArabia() {
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
            How to Get a Freelance Visa in Saudi Arabia (2026): Al-Qudurat &amp; Freelance Options
          </h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            Complete guide to working legally as a freelancer in KSA — Al-Qudurat, iqama routes, talent residency, and Vision 2030 opportunities for Saudi nationals and foreign professionals.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 16, 2026</span>
            <span>·</span>
            <span>10 min read</span>
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
          Saudi Arabia is the GCC&apos;s largest economy and Vision 2030 is reshaping the country at speed. That transformation is creating an enormous surge in demand for freelance professionals — from management consultants and engineers to digital marketers and content creators. But the rules for working legally in KSA are different from the UAE, and understanding your options is critical before you start.
        </p>

        {/* Section 1: Saudi nationals vs expats */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Who Can Freelance in Saudi Arabia?
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          The framework for freelancing in KSA differs significantly depending on your nationality. Saudi nationals have an expanding set of official platforms and licenses designed specifically for them. Foreign professionals typically need to operate through an employer-sponsored iqama or a premium residency route.
        </p>

        <div className="grid gap-4 mb-8">
          {[
            {
              title: "Saudi Nationals",
              badge: "Al-Qudurat + Maroof",
              detail:
                "Full access to the Al-Qudurat freelance platform, Maroof credential verification, and the Professional Activity License. Can register as a self-employed freelancer through official government portals and work directly with clients.",
            },
            {
              title: "GCC Nationals",
              badge: "Streamlined",
              detail:
                "GCC nationals (UAE, Kuwait, Bahrain, Qatar, Oman citizens) have preferential treatment in Saudi Arabia — they can work without a sponsor in many cases and have more flexible visa options than third-country nationals.",
            },
            {
              title: "Foreign (Non-GCC) Professionals",
              badge: "Iqama required",
              detail:
                "Foreign nationals typically need an iqama (residency permit) to work in Saudi Arabia. Options range from employer-sponsored iqama to the Saudi Premium Residency. Short-term project work can be done on business visit visas.",
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

        {/* Section 2: Al-Qudurat */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Al-Qudurat (المقدرات): The Saudi Freelance Platform
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Launched in 2022, Al-Qudurat is Saudi Arabia&apos;s official government-backed freelance platform and registration system, available to Saudi nationals. It functions as both a marketplace connecting freelancers with government and private sector clients, and as a formal registration system that gives freelancers official status.
        </p>

        <div className="space-y-3 mb-8">
          {[
            "Register through Absher using your Saudi national ID — the entire process is digital and typically takes 1–3 business days.",
            "Create your professional profile with your skills, portfolio, and credentials — this acts as your official freelance identity with government entities.",
            "Al-Qudurat connects you directly with ministry contracts and government project work, which is a major advantage over third-party platforms.",
            "Combine Al-Qudurat with Maroof (معروف) for broader market credibility — Maroof provides verified seller badges recognised by private sector clients.",
            "Mostaql (مستقل) remains the largest open marketplace for project-based work — use both Al-Qudurat and Mostaql in parallel for maximum reach.",
          ].map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Section 3: Foreign freelancer options */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Options for Foreign Freelancers
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re a non-Saudi professional looking to work with Saudi clients or based in KSA, here are your primary routes:
        </p>

        <div className="grid gap-4 mb-8">
          {iqamaRoutes.map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-gray-900 mb-1">Operating from the UAE?</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Many freelancers based in Dubai work with Saudi clients remotely, invoicing from their UAE entity. This is a common and legitimate approach — especially for digital, consulting, and creative services. You avoid the complexity of KSA residency while still serving the Saudi market.
          </p>
        </div>

        {/* Section 4: Tax and compliance */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Tax and Compliance: What Freelancers Need to Know
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Saudi Arabia&apos;s tax environment is meaningfully different from the UAE&apos;s. Understanding ZATCA (the Saudi tax authority) is essential for any freelancer working with Saudi clients.
        </p>

        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-900 px-5 py-3">
            <h2 className="text-sm font-bold text-white">KSA Tax Summary for Freelancers</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { topic: "VAT (ZATCA)", rate: "15%", notes: "Significantly higher than UAE's 5%. Register if annual revenue exceeds SAR 375,000." },
              { topic: "Corporate Income Tax", rate: "20%", notes: "Applies to non-Saudi shareholders in Saudi entities. Not applicable to Saudi nationals." },
              { topic: "Zakat", rate: "2.5%", notes: "Islamic tax on business wealth — applies to Saudi nationals instead of income tax." },
              { topic: "Withholding Tax", rate: "5–15%", notes: "Applies to certain payments to foreign entities. Saudi clients may withhold on foreign invoices." },
              { topic: "Professional Activity License", rate: "Variable", notes: "Saudi nationals need this to operate legally. Renewed annually via government portals." },
            ].map((row, i) => (
              <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{row.topic}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.notes}</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.rate}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          The 15% VAT rate is a critical number for freelancers — it&apos;s triple the UAE rate and means your effective pricing needs to account for this when quoting Saudi-based clients. If you&apos;re invoicing from the UAE, VAT treatment depends on the nature of services and where they&apos;re consumed — consult a tax advisor for your specific situation.
        </p>

        {/* Section 5: Sectors */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Sectors and Opportunities: Vision 2030 &amp; Giga-Projects
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Saudi Arabia&apos;s giga-project pipeline is unlike anything else in the world. Over $1 trillion in projects are underway or planned, creating enormous demand for skilled freelancers and consultants across every discipline.
        </p>

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

        {/* Section 6: Saudi platforms */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Saudi Freelance Platforms &amp; Digital Tools
        </h2>

        <div className="space-y-3 mb-8">
          {checklistSaudi.map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Section 7: Getting paid */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Getting Paid from Saudi Clients
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Saudi Arabia uses IBAN-based bank transfers as the primary payment method. Payment terms are typically longer than the UAE — expect 30–45 days from invoice date as standard for corporate clients. Government clients can be slower still.
        </p>

        <div className="grid gap-4 mb-8">
          {[
            {
              title: "SADAD Bill Payments",
              badge: "Government clients",
              detail:
                "SADAD is Saudi Arabia's national electronic bill payment network. Used for utility bills and some government-linked payments. Less relevant for B2B freelance invoicing.",
            },
            {
              title: "SARIE / FAST Transfers",
              badge: "Business standard",
              detail:
                "Saudi Arabia's instant domestic transfer system. For SAR transfers between Saudi bank accounts. Requires your IBAN (International Bank Account Number) — all Saudi banks issue these.",
            },
            {
              title: "SWIFT International Transfers",
              badge: "From abroad",
              detail:
                "If invoicing from outside Saudi Arabia (e.g., your UAE entity), clients will typically pay via SWIFT transfer to your foreign IBAN. Confirm currency — SAR or USD — before invoicing.",
            },
            {
              title: "Stc Pay / urpay",
              badge: "Digital wallets",
              detail:
                "Stc Pay and urpay are Saudi fintech wallets popular with freelancers for domestic payments. Useful for smaller project payments and quick transfers — not ideal for large B2B invoices.",
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
              { href: "/blog/freelance-rates-saudi-arabia", title: "Freelance Rates in Saudi Arabia (2026)" },
              { href: "/blog/how-to-set-up-freelance-business-saudi-arabia", title: "How to Set Up a Freelance Business in KSA" },
              { href: "/blog/freelance-visa-uae", title: "How to Get a Freelance Visa in the UAE" },
              { href: "/blog/uae-golden-visa-freelancers", title: "UAE Golden Visa for Freelancers" },
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
