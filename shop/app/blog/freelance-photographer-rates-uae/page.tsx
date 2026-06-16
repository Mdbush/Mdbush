import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Photographer Rates in the UAE (2026): What to Charge",
  description:
    "Freelance photography rates in Dubai and Abu Dhabi — day rates, half-day rates, per-image fees across commercial, portrait, real estate, events, and fashion photography.",
  alternates: { canonical: "/blog/freelance-photographer-rates-uae" },
  openGraph: {
    title: "Freelance Photographer Rates in the UAE (2026): What to Charge",
    description: "What UAE freelance photographers charge in 2026 — rates by specialization, experience level, and usage rights.",
    type: "article",
    url: "/blog/freelance-photographer-rates-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Photographer Rates in the UAE (2026): What to Charge",
  description: "Freelance photography rates in Dubai and Abu Dhabi for 2026.",
  url: `${siteUrl}/blog/freelance-photographer-rates-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const rateTable = [
  { spec: "Corporate / Headshots", hourly: "AED 400–700", halfDay: "AED 1,800–3,000", fullDay: "AED 3,500–6,000", notes: "C-suite portraits, team photos, LinkedIn content" },
  { spec: "Commercial / Product", hourly: "AED 500–900", halfDay: "AED 2,500–4,500", fullDay: "AED 5,000–9,000", notes: "E-commerce, advertising, brand assets" },
  { spec: "Real Estate", hourly: "AED 350–600", halfDay: "AED 1,500–2,800", fullDay: "AED 3,000–5,500", notes: "Per-property rates also common: AED 800–2,000" },
  { spec: "Events", hourly: "AED 500–900", halfDay: "AED 2,000–4,000", fullDay: "AED 3,500–7,000", notes: "Weddings command premium: AED 8,000–25,000 packages" },
  { spec: "Fashion / Editorial", hourly: "AED 600–1,200", halfDay: "AED 3,000–5,500", fullDay: "AED 6,000–12,000", notes: "Usage rights significantly affect pricing" },
  { spec: "Food Photography", hourly: "AED 450–800", halfDay: "AED 2,000–3,500", fullDay: "AED 4,000–7,000", notes: "Often priced per dish or per scene" },
];

const statsData = [
  { value: "AED 350–600/hr", label: "Entry Rate" },
  { value: "AED 3,000–5,500", label: "Full Day (Real Estate)" },
  { value: "AED 6,000–12,000", label: "Full Day (Fashion)" },
];

const rateTableRows = [
  { type: "Corporate / Headshots — Full Day", notes: "C-suite portraits, team photos, LinkedIn content", rate: "AED 3,500–6,000" },
  { type: "Commercial / Product — Full Day", notes: "E-commerce, advertising, brand assets", rate: "AED 5,000–9,000" },
  { type: "Real Estate — Full Day", notes: "Per-property rates: AED 800–2,000", rate: "AED 3,000–5,500" },
  { type: "Events — Full Day", notes: "Weddings: AED 8,000–25,000 packages", rate: "AED 3,500–7,000" },
  { type: "Fashion / Editorial — Full Day", notes: "Usage rights significantly affect pricing", rate: "AED 6,000–12,000" },
  { type: "Food Photography — Full Day", notes: "Often priced per dish or per scene", rate: "AED 4,000–7,000" },
];

export default function FreelancePhotographerRatesUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>›</span>
            <span className="text-gray-600">Freelance Photographer Rates UAE</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Pricing &amp; Rates</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Photographer Rates in the UAE (2026): What to Charge</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Day rates, half-day rates, and per-image fees across commercial, portrait, real estate, events, and fashion photography in Dubai and Abu Dhabi.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {statsData.map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Photography pricing in the UAE varies enormously by specialization, experience, and
            usage rights — and the market has distinct norms that differ from what you might find
            in photography pricing guides written for the US or UK. This guide covers what
            freelance photographers are actually charging in Dubai and Abu Dhabi in 2026.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm mb-8">
            <p className="font-semibold text-amber-900 mb-1">Rates are starting points</p>
            <p className="text-amber-800">
              Every shoot is different. Rates below reflect the market range, not what you should
              automatically charge. Your experience, portfolio quality, and client budget all factor in.
              Usage rights — especially for advertising campaigns — can multiply base rates significantly.
            </p>
          </div>

          {/* Rate table */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>UAE Photography Rates by Specialization (2026)
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3"><h2 className="text-sm font-bold text-white">UAE Photography Rate Benchmarks 2026</h2></div>
            <div className="divide-y divide-gray-100">
              {rateTableRows.map((row, i) => (
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
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>How to Structure Your Photography Pricing
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Day rate vs per-image rate:</strong> Most UAE commercial photographers prefer day rates over per-image fees. Day rates give predictable income and clients know exactly what they are paying upfront. Per-image rates work well for high-volume, low-complexity shoots.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Separating shoot fees from editing fees:</strong> Many photographers quote shoot fees and post-processing fees separately. A common structure: shoot fee (day rate) + editing fee (AED 80–200 per finished image). For real estate: AED 800–1,500 for the shoot, then AED 50–120 per edited image delivered.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Usage rights: the biggest pricing variable:</strong> A corporate headshot for internal use is priced very differently from a product shot for a billboard campaign. Always discuss intended usage before quoting. Regional/GCC campaigns add +100–200% on base rate; international advertising can be 3–5×.</span>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>What to Include in Your Photography Package
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              "Shoot duration (hours or half/full day)",
              "Number of final edited images to be delivered",
              "Turnaround time for delivery",
              "File formats (JPEG, RAW, TIFF)",
              "Usage rights (web only, print, advertising, exclusivity)",
              "Travel — within Dubai vs Abu Dhabi vs other emirates (add AED 300–600 for out-of-emirate)",
              "Studio hire: confirm who pays (if using a studio)",
              "Reshoots: included or charged separately",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Raising Your Rates as a UAE Photographer
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The fastest way to raise your rates is to specialize and build a portfolio that
            proves it. A generalist photographer struggles to charge more than AED 2,500/day.
            A photographer with a portfolio of 20 luxury hotel shoots can charge AED 6,000+
            because their clients know exactly what they are getting.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Practical steps: shoot personal projects in your target niche, collaborate on test shoots with styling teams, add case studies to your website that show business outcomes (not just pretty pictures), and build relationships with creative directors and marketing managers in your niche.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/products/solokit-freelance-os" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related */}
          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?" },
                { href: "/blog/how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Rates Without Losing the Client" },
                { href: "/blog/freelance-invoice-uae", title: "How to Invoice Clients in the UAE" },
                { href: "/blog/freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include" },
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
