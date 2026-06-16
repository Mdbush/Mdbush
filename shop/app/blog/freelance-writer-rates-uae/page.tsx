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
    junior: "AED 0.40–0.70/word\n(~AED 400–700 per 1,000-word article)",
    mid: "AED 0.80–1.40/word\n(~AED 800–1,400 per 1,000-word article)",
    senior: "AED 1.50–3.00+/word\n(~AED 1,500–3,000+ per 1,000-word article)",
  },
  {
    type: "Social media captions",
    junior: "AED 50–100 per caption\n(AED 500–1,000 for 10 captions)",
    mid: "AED 120–200 per caption\n(AED 1,200–2,000 for 10 captions)",
    senior: "AED 250–500+ per caption\n(AED 2,500–5,000+ for 10 captions)",
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

export default function FreelanceWriterRatesUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Freelance Writer Rates in the UAE</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing & Rates</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Freelance Writer Rates in the UAE (2026): What to Charge
          </h1>
          <p className="text-gray-500 text-sm">7 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Freelance writing rates in the UAE vary significantly based on content type,
            specialization, and client budget. The market ranges from commodity content
            mills paying AED 0.20/word to B2B clients paying AED 5/word for expert-level
            technical or financial writing. This guide covers real market rates across the
            most common content types — with junior, mid, and senior benchmarks.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-1">Quick benchmark</p>
            <p className="text-gray-700">
              A mid-level freelance content writer in the UAE typically earns <strong>AED 15,000–25,000/month</strong> through
              a mix of retainer clients and project work. Senior writers with a specialist niche
              (finance, tech, real estate, legal) regularly earn AED 30,000–50,000+/month.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Freelance Writer Rates in the UAE by Content Type (2026)</h2>
            <p className="text-xs text-gray-400 mb-4">Junior: 0–2 years / Mid: 3–5 years / Senior: 6+ years or specialist niche</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Content type</th>
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Junior</th>
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Mid-level</th>
                    <th className="text-left py-2 text-gray-500 font-semibold text-xs">Senior / specialist</th>
                  </tr>
                </thead>
                <tbody>
                  {rateTable.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-gray-900 text-xs">{row.type}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs whitespace-pre-line">{row.junior}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs whitespace-pre-line">{row.mid}</td>
                      <td className="py-3 text-gray-600 text-xs whitespace-pre-line">{row.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">High-Value Writing Niches in the UAE</h2>
            <p>
              The biggest factor in freelance writing rates is not years of experience — it is
              specialization. These niches consistently command premium rates in the UAE market:
            </p>
            <div className="space-y-3 mt-4">
              {[
                { niche: "Financial and investment writing", rate: "AED 2–5/word", why: "High compliance sensitivity, requires financial knowledge, limited supply of qualified writers" },
                { niche: "Real estate content (property listings, developer copy)", rate: "AED 1.50–4/word", why: "Dubai's property market is enormous — developers and agencies pay premium for conversion-focused copy" },
                { niche: "B2B tech / SaaS content", rate: "AED 1.50–3.50/word", why: "Technical knowledge required, long-form expertise, international client base willing to pay global rates" },
                { niche: "Legal and compliance writing", rate: "AED 2–5/word", why: "High accuracy requirements, UAE regulatory knowledge valuable, narrow talent pool" },
                { niche: "Arabic-English bilingual content", rate: "AED 1.50–4/word (Arabic content commands premium)", why: "Very limited supply of native-quality Arabic business writers; market demand far exceeds supply" },
              ].map((item) => (
                <div key={item.niche} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{item.niche}</p>
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full shrink-0">{item.rate}</span>
                  </div>
                  <p className="text-xs text-gray-600">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Should You Charge Per Word or Per Project?</h2>
            <div className="space-y-3 mt-3">
              {[
                { model: "Per word", best: "When scope is uncertain, for one-off articles, when you are quoting for a client you have not worked with before", risk: "Incentivizes length over quality. Clients sometimes try to reduce word count after delivery." },
                { model: "Per project", best: "When you can clearly define the deliverable. Allows you to earn more per hour as you get faster.", risk: "Scope creep — clients add rounds of revisions or expand the brief mid-project." },
                { model: "Monthly retainer", best: "For ongoing content — 4–12 pieces per month. Most profitable model for experienced writers.", risk: "Requires careful scope definition. Vague retainers lead to exploitation." },
              ].map((item) => (
                <div key={item.model} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.model}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-green-600 font-semibold mb-1">Best for</p>
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
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to Position for Higher Rates as a UAE Writer</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li><strong>Niche down:</strong> A generalist writer gets AED 0.50–0.80/word. A fintech writer gets AED 2–4/word. Same skill, completely different positioning.</li>
              <li><strong>Build domain expertise:</strong> Read industry publications, attend sector events, build genuine knowledge about your niche. Clients can tell the difference between a writer who understands the industry and one who is winging it.</li>
              <li><strong>Case-study your results:</strong> Instead of a portfolio of published articles, lead with outcomes: &ldquo;My client&apos;s organic traffic grew 240% in 6 months.&rdquo; Results command premiums.</li>
              <li><strong>Raise rates for new clients first:</strong> Do not renegotiate with existing clients immediately. Test higher rates with new inquiries and calibrate based on conversion.</li>
              <li><strong>Target direct clients, not agencies:</strong> Agency rates are typically 40–60% lower than direct client rates. If you write for agencies, treat it as volume work while building your direct client base.</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Never negotiate your rate unprepared</p>
            <h3 className="text-lg font-bold mb-2">How to Negotiate Rates Without Losing the Client</h3>
            <p className="text-gray-400 text-sm mb-4">
              Word-for-word scripts for UAE freelancers handling rate pushback, budget objections,
              and the &ldquo;can you do it cheaper?&rdquo; conversation — without caving on your rate.
            </p>
            <Link
              href="/blog/how-to-negotiate-freelance-rates-uae"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Read the Negotiation Guide →
            </Link>
          </div>

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
