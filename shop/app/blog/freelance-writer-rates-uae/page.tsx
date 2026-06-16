import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Writer Rates in the UAE (2026): What to Charge",
  description:
    "Real AED rates for freelance writers in Dubai and Abu Dhabi — per-word, per-article, per-project pricing for blog content, white papers, social media, press releases, and more.",
  alternates: { canonical: "/blog/freelance-writer-rates-uae" },
  openGraph: {
    title: "Freelance Writer Rates in the UAE (2026): What to Charge",
    description: "Freelance writing rates in Dubai and Abu Dhabi — per-word, per-article, and project pricing by content type and seniority.",
    type: "article",
    url: "/blog/freelance-writer-rates-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Writer Rates in the UAE (2026): What to Charge",
  description: "Real AED rates for freelance writers in Dubai and Abu Dhabi.",
  url: `${siteUrl}/blog/freelance-writer-rates-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const rateTable = [
  {
    type: "Blog articles / content marketing",
    junior: "AED 0.40–0.70/word (~AED 400–700 per 1,000-word article)",
    mid: "AED 0.80–1.40/word (~AED 800–1,400 per 1,000-word article)",
    senior: "AED 1.50–3.00+/word (~AED 1,500–3,000+ per 1,000-word article)",
  },
  {
    type: "Social media captions",
    junior: "AED 50–100 per caption",
    mid: "AED 120–200 per caption",
    senior: "AED 250–500+ per caption",
  },
  {
    type: "Press releases",
    junior: "AED 500–900 each",
    mid: "AED 1,000–1,800 each",
    senior: "AED 2,000–4,000+ each",
  },
  {
    type: "White papers / long-form reports",
    junior: "AED 2,000–4,000",
    mid: "AED 4,500–8,000",
    senior: "AED 8,000–20,000+",
  },
  {
    type: "Email sequences (5–7 emails)",
    junior: "AED 1,500–2,500",
    mid: "AED 2,500–5,000",
    senior: "AED 5,000–12,000+",
  },
  {
    type: "Website copy (5–7 pages)",
    junior: "AED 1,800–3,000",
    mid: "AED 3,500–6,000",
    senior: "AED 6,000–15,000+",
  },
  {
    type: "Monthly content retainer (4–8 articles + social)",
    junior: "AED 2,500–4,000/month",
    mid: "AED 4,500–8,000/month",
    senior: "AED 8,000–18,000+/month",
  },
];

const statsData = [
  { value: "AED 15K–25K", label: "Mid-Level Monthly" },
  { value: "AED 30K–50K+", label: "Senior Specialist" },
  { value: "AED 2–5/word", label: "Finance/Legal Niche" },
];

const niches = [
  { niche: "Financial and investment writing", rate: "AED 2–5/word", why: "High compliance sensitivity, requires financial knowledge, limited supply of qualified writers" },
  { niche: "Real estate content (property listings, developer copy)", rate: "AED 1.50–4/word", why: "Dubai's property market is enormous — developers and agencies pay premium for conversion-focused copy" },
  { niche: "B2B tech / SaaS content", rate: "AED 1.50–3.50/word", why: "Technical knowledge required, long-form expertise, international client base willing to pay global rates" },
  { niche: "Legal and compliance writing", rate: "AED 2–5/word", why: "High accuracy requirements, UAE regulatory knowledge valuable, narrow talent pool" },
  { niche: "Arabic-English bilingual content", rate: "AED 1.50–4/word (Arabic commands premium)", why: "Very limited supply of native-quality Arabic business writers; market demand far exceeds supply" },
];

const pricingModels = [
  { model: "Per word", best: "When scope is uncertain, for one-off articles, when you are quoting for a client you have not worked with before", risk: "Incentivizes length over quality. Clients sometimes try to reduce word count after delivery." },
  { model: "Per project", best: "When you can clearly define the deliverable. Allows you to earn more per hour as you get faster.", risk: "Scope creep — clients add rounds of revisions or expand the brief mid-project." },
  { model: "Monthly retainer", best: "For ongoing content — 4–12 pieces per month. Most profitable model for experienced writers.", risk: "Requires careful scope definition. Vague retainers lead to exploitation." },
];

export default function FreelanceWriterRatesUAE() {
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
            <span className="text-gray-600">Freelance Writer Rates in the UAE</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Pricing &amp; Rates</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Writer Rates in the UAE (2026): What to Charge</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Real AED rates for freelance writers in Dubai and Abu Dhabi — per-word, per-article, per-project pricing for blog content, white papers, social media, press releases, and more.
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
            Freelance writing rates in the UAE vary significantly based on content type,
            specialization, and client budget. The market ranges from commodity content
            mills paying AED 0.20/word to B2B clients paying AED 5/word for expert-level
            technical or financial writing.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Quick benchmark</p>
            <p className="text-gray-700">
              A mid-level freelance content writer in the UAE typically earns <strong>AED 15,000–25,000/month</strong> through
              a mix of retainer clients and project work. Senior writers with a specialist niche
              (finance, tech, real estate, legal) regularly earn AED 30,000–50,000+/month.
            </p>
          </div>

          {/* Rate table */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Freelance Writer Rates in the UAE by Content Type (2026)
          </h2>
          <p className="text-xs text-gray-400 mb-4">Junior: 0–2 years / Mid: 3–5 years / Senior: 6+ years or specialist niche</p>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3"><h2 className="text-sm font-bold text-white">UAE Writing Rate Benchmarks 2026</h2></div>
            <div className="divide-y divide-gray-100">
              {rateTable.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.type}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Junior: {row.junior}</p>
                    <p className="text-xs text-gray-500">Mid: {row.mid}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.senior}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>High-Value Writing Niches in the UAE
          </h2>

          <div className="space-y-3 mb-8">
            {niches.map((item) => (
              <div key={item.niche} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{item.niche}</p>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">{item.rate}</span>
                </div>
                <p className="text-xs text-gray-600">{item.why}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Should You Charge Per Word or Per Project?
          </h2>

          <div className="space-y-3 mb-8">
            {pricingModels.map((item) => (
              <div key={item.model} className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">{item.model}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-emerald-600 font-semibold mb-1">Best for</p>
                    <p className="text-xs text-gray-600">{item.best}</p>
                  </div>
                  <div>
                    <p className="text-xs text-red-500 font-semibold mb-1">Watch out for</p>
                    <p className="text-xs text-gray-600">{item.risk}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>How to Position for Higher Rates as a UAE Writer
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Niche down:</strong> A generalist writer gets AED 0.50–0.80/word. A fintech writer gets AED 2–4/word. Same skill, completely different positioning.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Build domain expertise:</strong> Read industry publications, attend sector events, build genuine knowledge about your niche. Clients can tell the difference between a writer who understands the industry and one who is winging it.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Case-study your results:</strong> Instead of a portfolio of published articles, lead with outcomes: &ldquo;My client&apos;s organic traffic grew 240% in 6 months.&rdquo; Results command premiums.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Raise rates for new clients first:</strong> Test higher rates with new inquiries and calibrate based on conversion. Do not renegotiate with existing clients immediately.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Target direct clients, not agencies:</strong> Agency rates are typically 40–60% lower than direct client rates. Treat agency work as volume work while building your direct client base.</span>
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
                { href: "/blog/freelance-copywriter-rates-uae", title: "Freelance Copywriter Rates in the UAE (2026): What to Charge" },
                { href: "/blog/how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Rates Without Losing the Client" },
                { href: "/blog/freelance-niche-uae", title: "How to Find Your Freelance Niche in the UAE (And Charge More for It)" },
                { href: "/blog/how-to-price-yourself-as-freelancer-uae", title: "How to Price Yourself as a Freelancer in the UAE: The Complete System" },
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
