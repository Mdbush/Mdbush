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

export default function FreelanceCopywriterRatesUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Freelance Copywriter Rates UAE</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing & Rates</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Freelance Copywriter Rates in the UAE (2026): What to Charge
          </h1>
          <p className="text-gray-500 text-sm">7 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Copywriting is one of the most undervalued — and most misunderstood — freelance services
            in the UAE. Many clients have no idea that there is a difference between a content writer
            who charges AED 0.20/word and a direct response copywriter who charges AED 5,000 for a
            landing page. This guide explains what rates you should be charging and why.
          </p>

          {/* Main rate table */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">UAE Freelance Copywriter Rates by Project Type (2026)</h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Project Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Junior</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Mid-Level</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Senior</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Website homepage (full page)", junior: "AED 800–1,500", mid: "AED 2,000–4,000", senior: "AED 4,500–9,000" },
                    { type: "Landing page (conversion)", junior: "AED 600–1,200", mid: "AED 1,500–3,500", senior: "AED 4,000–10,000" },
                    { type: "Blog post (1,000 words)", junior: "AED 200–400", mid: "AED 500–900", senior: "AED 1,000–2,000" },
                    { type: "Email sequence (5 emails)", junior: "AED 800–1,500", mid: "AED 1,800–3,500", senior: "AED 4,000–8,000" },
                    { type: "Social media ad copy (5 ads)", junior: "AED 400–700", mid: "AED 800–1,500", senior: "AED 1,800–3,500" },
                    { type: "Full website copy (5–7 pages)", junior: "AED 3,000–6,000", mid: "AED 7,000–15,000", senior: "AED 16,000–35,000" },
                    { type: "Brand messaging guide", junior: "AED 1,500–3,000", mid: "AED 3,500–7,000", senior: "AED 8,000–20,000" },
                    { type: "Arabic + English (bilingual)", junior: "+40–60% on above", mid: "+40–60% on above", senior: "+40–60% on above" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.type}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.junior}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.mid}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Rates are per-project and do not include revisions beyond 2 rounds. Specialist copywriters
              (luxury, technical, medical, legal) command 30–80% above these rates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Hourly and Retainer Rates for Copywriters</h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Experience</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Hourly Rate</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Monthly Retainer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { level: "Junior (0–2 years)", hourly: "AED 60–110/hr", retainer: "AED 2,500–5,000/mo" },
                    { level: "Mid-level (3–5 years)", hourly: "AED 130–220/hr", retainer: "AED 5,000–12,000/mo" },
                    { level: "Senior (6+ years)", hourly: "AED 250–450/hr", retainer: "AED 12,000–30,000/mo" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.level}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.hourly}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{row.retainer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Why Content Writing and Copywriting Have Different Rates</h2>
            <p>
              Many UAE clients do not know the difference. This is worth explaining in every proposal:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
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

            <p className="mt-4">
              If a client asks you for a per-word rate for copywriting, clarify the distinction.
              A landing page that generates AED 500,000 in sales is not worth AED 180 (300 words ×
              AED 0.60). Price the outcome, not the word count.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">High-Value Copywriting Niches in the UAE</h2>
            <p>
              These niches command the highest rates in the UAE market:
            </p>

            <div className="space-y-3 mt-4">
              {[
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
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-semibold text-gray-900 text-sm">{item.niche}</p>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full shrink-0 font-semibold">{item.premium}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Common Pricing Mistakes Copywriters Make</h2>

            <p className="font-semibold text-gray-900 mt-4 mb-1">Giving per-word rates for persuasive copy</p>
            <p>
              Per-word pricing commoditizes your work and trains clients to think of copy as a
              production task, not a business investment. Offer project pricing for all persuasive
              copy (landing pages, sales emails, ads), and only consider per-word for content
              writing (blog posts, long-form articles).
            </p>

            <p className="font-semibold text-gray-900 mt-4 mb-1">Not charging for revisions</p>
            <p>
              Copy revision is not free. Include 2 rounds of revisions in your project price and
              charge for additional rounds. A simple clause: &ldquo;Additional revision rounds billed at
              AED [X]/hour.&rdquo; This creates a financial incentive for clients to give clear briefs
              upfront.
            </p>

            <p className="font-semibold text-gray-900 mt-4 mb-1">Lowering rates for &ldquo;portfolio&rdquo; projects</p>
            <p>
              Writing copy for free or at a significant discount for &ldquo;portfolio&rdquo; builds a
              portfolio of low-paying clients, not high-paying ones. If you need portfolio pieces,
              approach companies you genuinely admire and offer a discounted rate — but never free —
              so the relationship starts with mutual respect.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Write better, faster</p>
            <h3 className="text-lg font-bold mb-2">200 AI prompts for copywriters and content creators</h3>
            <p className="text-gray-400 text-sm mb-4">
              The AI Prompt Pack Pro includes 60 writing and copywriting prompts — for landing
              pages, emails, ads, LinkedIn posts, and more. Cut your first draft time by 70%.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Get the AI Prompt Pack →
            </Link>
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
