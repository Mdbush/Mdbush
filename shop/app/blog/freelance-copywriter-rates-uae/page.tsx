import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Copywriter Rates in the UAE (2026): What to Charge",
  description:
    "Real AED rates for freelance copywriters in the UAE — web copy, email, ads, B2B, Arabic content. Per-word, per-project, and retainer pricing.",
  alternates: { canonical: "/blog/freelance-copywriter-rates-uae" },
  openGraph: {
    title: "Freelance Copywriter Rates in the UAE (2026): What to Charge",
    description: "Market rates for freelance copywriters in Dubai and Abu Dhabi — web copy, ads, email, and content by specialization and experience.",
    type: "article",
    url: "/blog/freelance-copywriter-rates-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Copywriter Rates in the UAE (2026): What to Charge",
  description: "Real AED rates for freelance copywriters in the UAE by specialization and experience level.",
  url: `${siteUrl}/blog/freelance-copywriter-rates-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const projectRates = [
  { type: "Website homepage (full page)", junior: "AED 800–1,500", mid: "AED 2,000–4,000", senior: "AED 4,500–9,000" },
  { type: "Landing page (conversion)", junior: "AED 600–1,200", mid: "AED 1,500–3,500", senior: "AED 4,000–10,000" },
  { type: "Blog post (1,000 words)", junior: "AED 200–400", mid: "AED 500–900", senior: "AED 1,000–2,000" },
  { type: "Email sequence (5 emails)", junior: "AED 800–1,500", mid: "AED 1,800–3,500", senior: "AED 4,000–8,000" },
  { type: "Social media ad copy (5 ads)", junior: "AED 400–700", mid: "AED 800–1,500", senior: "AED 1,800–3,500" },
  { type: "Full website copy (5–7 pages)", junior: "AED 3,000–6,000", mid: "AED 7,000–15,000", senior: "AED 16,000–35,000" },
  { type: "Brand messaging guide", junior: "AED 1,500–3,000", mid: "AED 3,500–7,000", senior: "AED 8,000–20,000" },
  { type: "Arabic + English (bilingual)", junior: "+40–60% on above", mid: "+40–60% on above", senior: "+40–60% on above" },
];

const hourlyRates = [
  { level: "Junior (0–2 years)", hourly: "AED 60–110/hr", retainer: "AED 2,500–5,000/mo" },
  { level: "Mid-level (3–5 years)", hourly: "AED 130–220/hr", retainer: "AED 5,000–12,000/mo" },
  { level: "Senior (6+ years)", hourly: "AED 250–450/hr", retainer: "AED 12,000–30,000/mo" },
];

const statsData = [
  { value: "AED 60–110/hr", label: "Junior Hourly" },
  { value: "AED 130–220/hr", label: "Mid-Level Hourly" },
  { value: "AED 250–450/hr", label: "Senior Hourly" },
];

const niches = [
  {
    niche: "Real estate copy",
    why: "Dubai real estate is a multi-billion dirham market. Property listings, brochures, developer launch copy, and agent bios all need strong copy — and the companies pay well.",
    premium: "30–60% above standard rates",
  },
  {
    niche: "Arabic-English bilingual copywriting",
    why: "True bilingual copywriters who can write compelling Arabic that does not read like a translation are rare and in extremely high demand. Most UAE businesses need both languages.",
    premium: "50–80% above standard rates",
  },
  {
    niche: "Financial and investment copy",
    why: "DIFC and ADGM are home to hundreds of financial services firms that need compliant, clear marketing copy. This requires understanding both financial products and regulatory language.",
    premium: "40–70% above standard rates",
  },
  {
    niche: "Luxury brand copywriting",
    why: "Dubai has a concentration of luxury retail, hospitality, and real estate. Luxury copy is sparse, precise, and aspirational — very different from standard marketing copy.",
    premium: "30–60% above standard rates",
  },
];

export default function FreelanceCopywriterRatesUAE() {
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
            <span className="text-gray-600">Freelance Copywriter Rates UAE</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Pricing &amp; Rates</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Copywriter Rates in the UAE (2026): What to Charge</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Real AED rates for freelance copywriters in the UAE — web copy, email, ads, B2B, and Arabic content — with per-word, per-project, and retainer pricing.
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

          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            Copywriting is one of the most undervalued — and most misunderstood — freelance services
            in the UAE. Many clients have no idea that there is a difference between a content writer
            who charges AED 0.20/word and a direct response copywriter who charges AED 5,000 for a
            landing page. This guide explains what rates you should be charging and why.
          </p>

          {/* Rate table */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>UAE Copywriter Rates by Project Type (2026)
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3"><h2 className="text-sm font-bold text-white">UAE Copywriting Rate Benchmarks 2026</h2></div>
            <div className="divide-y divide-gray-100">
              {projectRates.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.type}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Junior: {row.junior} &nbsp;·&nbsp; Mid: {row.mid}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.senior}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-8">
            Rates are per-project and do not include revisions beyond 2 rounds. Specialist copywriters
            (luxury, technical, medical, legal) command 30–80% above these rates.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Hourly and Retainer Rates for Copywriters
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3"><h2 className="text-sm font-bold text-white">Hourly &amp; Retainer Rates</h2></div>
            <div className="divide-y divide-gray-100">
              {hourlyRates.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.level}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Retainer: {row.retainer}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.hourly}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Why Content Writing and Copywriting Have Different Rates
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Content writing</h3>
              <p className="text-sm text-gray-600">
                Educates, informs, or entertains. Blog posts, news articles, how-to guides.
                Measured by traffic and engagement. Typically per-word or per-article pricing.
                AED 0.30–1.50/word is typical in UAE.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">Copywriting</h3>
              <p className="text-sm text-gray-600">
                Persuades, converts, sells. Landing pages, sales emails, ads, product pages.
                Measured by conversion rate, revenue, leads. Priced by project value — not word count.
                A 300-word landing page can legitimately cost AED 5,000.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>High-Value Copywriting Niches in the UAE
          </h2>

          <div className="space-y-3 mb-8">
            {niches.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-semibold text-gray-900 text-sm">{item.niche}</p>
                  <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0 font-semibold">{item.premium}</span>
                </div>
                <p className="text-sm text-gray-600">{item.why}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Common Pricing Mistakes Copywriters Make
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Giving per-word rates for persuasive copy:</strong> Per-word pricing commoditizes your work. Offer project pricing for all persuasive copy (landing pages, sales emails, ads), and only consider per-word for content writing (blog posts, long-form articles).</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Not charging for revisions:</strong> Include 2 rounds of revisions in your project price and charge for additional rounds: &ldquo;Additional revision rounds billed at AED [X]/hour.&rdquo; This creates a financial incentive for clients to give clear briefs upfront.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Lowering rates for portfolio projects:</strong> Writing copy for free or at a significant discount builds a portfolio of low-paying clients, not high-paying ones. If you need portfolio pieces, offer a discounted rate — but never free — so the relationship starts with mutual respect.</span>
            </li>
          </ul>

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
                { href: "/blog/freelance-marketing-rates-uae", title: "Freelance Marketing Consultant Rates in the UAE" },
                { href: "/blog/freelance-designer-rates-uae", title: "Freelance Designer Rates in the UAE (2026)" },
                { href: "/blog/how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Rates Without Losing the Client" },
                { href: "/blog/how-to-raise-rates-existing-clients-uae", title: "How to Raise Your Rates With Existing Clients" },
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
