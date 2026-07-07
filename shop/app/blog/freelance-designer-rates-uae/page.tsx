import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Designer Rates in the UAE (2026): What to Charge",
  description:
    "Real freelance design rates in the UAE by specialization — graphic design, UI/UX, motion, brand identity. AED pricing for junior, mid, and senior level.",
  alternates: { canonical: "/blog/freelance-designer-rates-uae" },
  openGraph: {
    title: "Freelance Designer Rates in the UAE (2026): What to Charge",
    description: "Real AED hourly and project rates for UAE freelance designers by specialization and seniority.",
    type: "article",
    url: "/blog/freelance-designer-rates-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Designer Rates in the UAE (2026): What to Charge",
  description: "Real freelance design rates in the UAE by specialization — graphic design, UI/UX, motion, brand identity.",
  url: `${siteUrl}/blog/freelance-designer-rates-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const rates = [
  {
    specialization: "Graphic / Visual Designer",
    junior: { hourly: "AED 80–120", project: "AED 800–2,000" },
    mid: { hourly: "AED 150–220", project: "AED 2,500–6,000" },
    senior: { hourly: "AED 250–400", project: "AED 6,000–15,000" },
  },
  {
    specialization: "UI/UX Designer",
    junior: { hourly: "AED 100–160", project: "AED 3,000–8,000" },
    mid: { hourly: "AED 200–300", project: "AED 8,000–20,000" },
    senior: { hourly: "AED 350–550", project: "AED 20,000–50,000" },
  },
  {
    specialization: "Brand Identity Designer",
    junior: { hourly: "AED 90–140", project: "AED 2,000–5,000" },
    mid: { hourly: "AED 160–260", project: "AED 5,000–15,000" },
    senior: { hourly: "AED 300–500", project: "AED 15,000–40,000" },
  },
  {
    specialization: "Motion / Video Designer",
    junior: { hourly: "AED 80–130", project: "AED 1,500–4,000" },
    mid: { hourly: "AED 150–250", project: "AED 4,000–10,000" },
    senior: { hourly: "AED 280–450", project: "AED 10,000–25,000" },
  },
  {
    specialization: "Presentation / Pitch Deck Designer",
    junior: { hourly: "AED 70–110", project: "AED 800–2,500" },
    mid: { hourly: "AED 130–200", project: "AED 2,500–7,000" },
    senior: { hourly: "AED 220–350", project: "AED 7,000–18,000" },
  },
  {
    specialization: "Social Media Designer",
    junior: { hourly: "AED 60–100", project: "AED 500–1,500/mo" },
    mid: { hourly: "AED 110–180", project: "AED 1,500–4,000/mo" },
    senior: { hourly: "AED 200–320", project: "AED 4,000–8,000/mo" },
  },
];

export default function FreelanceDesignerRatesUAE() {
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
            <span className="text-gray-600">Freelance Designer Rates UAE</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">PRICING &amp; RATES</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Designer Rates in the UAE (2026): What to Charge</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Design is one of the most underpriced services in the UAE freelance market. Junior designers often charge AED 50–70/hour for work that experienced studios charge AED 350+ for. Here&apos;s real market data broken down by specialization and seniority.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Key stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 60–160", label: "Junior / hr" },
              { value: "AED 130–300", label: "Mid / hr" },
              { value: "AED 200–550", label: "Senior / hr" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            UAE Freelance Designer Rate Table (2026)
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">UAE Designer Rate Benchmarks 2026</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {rates.map((row, i) => (
                <div key={i} className={`px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold text-gray-900">{row.specialization}</p>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.mid.hourly}/hr mid</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="text-xs text-gray-500"><span className="text-gray-400">Junior: </span>{row.junior.hourly}/hr<br /><span className="text-gray-400">{row.junior.project}</span></div>
                    <div className="text-xs text-gray-600 font-medium"><span className="text-gray-400">Mid: </span>{row.mid.hourly}/hr<br /><span className="text-gray-400">{row.mid.project}</span></div>
                    <div className="text-xs text-gray-500"><span className="text-gray-400">Senior: </span>{row.senior.hourly}/hr<br /><span className="text-gray-400">{row.senior.project}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-8">Rates reflect the Dubai/Abu Dhabi market as of 2026. International clients and luxury brands often pay 30–50% above these figures.</p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            What Drives Design Rates in the UAE
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              { point: "Specialization premium", detail: "UI/UX commands the highest rates because the work directly impacts product revenue — clients can calculate an ROI. Social media design, by contrast, is commoditized: rates are lower." },
              { point: "Portfolio depth and case studies", detail: "UAE clients respond to recognizable brand names in your portfolio. A designer with 2 years of experience and 5 results-driven case studies will consistently out-earn a designer with 8 years and a generic portfolio." },
              { point: "Client type", detail: "Startups want to spend less but move faster. SMEs value reliability. Large corporates and government entities run procurement processes that take time but pay well. Expat-run businesses often pay London or New York rates for the right designer." },
              { point: "Language and cultural fit", detail: "Designers who can work in Arabic — or who understand the visual sensibilities of GCC audiences — command a significant premium. Many global agencies have struggled in the UAE precisely because they don't understand local aesthetics." },
            ].map((row) => (
              <li key={row.point} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{row.point}:</strong> {row.detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Hourly vs Project Pricing
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Hourly pricing works when:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ Scope is unclear or likely to change</li>
                <li>→ You are doing ongoing retainer work</li>
                <li>→ The client wants multiple rounds of revision</li>
                <li>→ You are doing research or strategy phases</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Project pricing works when:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ You can define deliverables precisely</li>
                <li>→ You work faster than average (keeps margin high)</li>
                <li>→ Client is outcome-focused, not process-focused</li>
                <li>→ You want to scale without trading hours for AED</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Common Pricing Mistakes UAE Designers Make
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              { mistake: "Pricing based on time, not value", detail: "A logo that takes you 3 hours is not worth AED 400 just because you charge AED 133/hr. If that logo will go on every storefront for a decade, it is worth AED 5,000–15,000." },
              { mistake: "Not including revision limits", detail: "Always state in your proposal: 'Includes 2 rounds of revisions. Additional rounds billed at AED X/hour.' Most clients won't use more than 2 rounds if they know additional rounds cost extra." },
              { mistake: "Discounting to close deals", detail: "Discounting trains clients to expect discounts. Instead, reduce the scope: fewer deliverables, fewer rounds of revisions. This holds your rate while still accommodating budget constraints." },
              { mistake: "Ignoring usage rights", detail: "If a client wants to use your work internationally or license it to other entities, that should cost more. Include a simple usage rights section in every proposal." },
            ].map((row) => (
              <li key={row.mistake} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{row.mistake}:</strong> {row.detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 What Clients in the UAE Actually Pay</p>
            <ul className="space-y-1 text-sm text-emerald-800">
              <li>→ Startup (pre-revenue): AED 2,000–8,000 for full brand kit</li>
              <li>→ SME (established): AED 5,000–20,000 for brand refresh</li>
              <li>→ Corporate / Enterprise: AED 20,000–80,000+</li>
              <li>→ Government / Semi-government: AED 15,000–100,000+</li>
              <li>→ Agency (subcontract): AED 80–180/hr (lower than direct)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Track Every Deal and Rate in One Dashboard</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Log project rates, track client history, and see which clients pay the most — so you know exactly who to prioritize and when to raise your rates.</p>
            <Link href="/products/freelancer-client-crm" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get the Freelancer CRM →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-developer-rates-uae", label: "Freelance Developer Rates in the UAE (2026)" },
                { href: "/blog/freelance-consultant-rates-uae", label: "Freelance Consultant Rates in the UAE (2026)" },
                { href: "/blog/freelance-rate-calculator-uae", label: "Freelance Rate Calculator: How Much Should You Charge?" },
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in the UAE" },
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
