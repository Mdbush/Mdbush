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

export default function FreelancePhotographerRatesUAE() {
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
          <span className="text-gray-600">Freelance Photographer Rates UAE</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing & Rates</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Freelance Photographer Rates in the UAE (2026): What to Charge
          </h1>
          <p className="text-gray-500 text-sm">7 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Photography pricing in the UAE varies enormously by specialization, experience, and
            usage rights — and the market has distinct norms that differ from what you might find
            in photography pricing guides written for the US or UK. This guide covers what
            freelance photographers are actually charging in Dubai and Abu Dhabi in 2026.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-900 mb-1">Rates are starting points</p>
            <p className="text-amber-800">
              Every shoot is different. Rates below reflect the market range, not what you should
              automatically charge. Your experience, portfolio quality, and client budget all factor in.
              Usage rights — especially for advertising campaigns — can multiply base rates significantly.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">UAE Photography Rates by Specialization (2026)</h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Specialization</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Hourly</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Half Day</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Full Day</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {rateTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.spec}</td>
                      <td className="p-3 border border-gray-200 text-gray-700">{row.hourly}</td>
                      <td className="p-3 border border-gray-200 text-gray-700">{row.halfDay}</td>
                      <td className="p-3 border border-gray-200 text-gray-700">{row.fullDay}</td>
                      <td className="p-3 border border-gray-200 text-gray-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to Structure Your Photography Pricing</h2>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Day rate vs per-image rate</h3>
            <p>
              Most UAE commercial photographers prefer day rates over per-image fees. Day rates
              give you predictable income and clients know exactly what they are paying upfront.
              Per-image rates (common in real estate and product photography) can work well for
              high-volume, low-complexity shoots where the client wants flexibility.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Separating shoot fees from editing fees</h3>
            <p>
              Many photographers in the UAE quote shoot fees and post-processing fees separately.
              This is transparent and lets the client see exactly where costs go. It also
              prevents the common situation of clients asking for "just a few more edits" once
              they see the invoice — because editing time is clearly priced upfront.
            </p>
            <p className="mt-3">
              A common structure: shoot fee (day rate) + editing fee (AED 80–200 per finished image,
              depending on complexity). For real estate: AED 800–1,500 for the shoot, then
              AED 50–120 per edited image delivered.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Usage rights: the biggest pricing variable</h3>
            <p>
              A corporate headshot for internal use is priced very differently from a product
              shot that will appear in a full-page magazine ad or a billboard campaign. Always
              discuss intended usage before quoting. Industry standard for advertising usage:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>Internal/web only:</strong> Base rate applies</li>
              <li>• <strong>Social media campaigns:</strong> +25–50% on base rate</li>
              <li>• <strong>Print advertising (local):</strong> +50–100% on base rate</li>
              <li>• <strong>Regional / GCC campaign:</strong> +100–200% on base rate</li>
              <li>• <strong>International advertising:</strong> Negotiate separately, often 3–5× base</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Clients in the UAE Expect to Pay</h2>
            <p>
              Dubai and Abu Dhabi have a high proportion of corporate clients with significant
              marketing budgets. Premium brands, real estate developers, hospitality groups, and
              government-related entities are accustomed to paying professional rates — and are
              often skeptical of very low pricing, which signals inexperience.
            </p>
            <p className="mt-3">
              Budget-conscious clients (smaller restaurants, startups, SMEs) exist too and
              will push for lower rates. It is fine to have a tiered rate card, but avoid
              dramatically underpricing yourself — the clients who want AED 200 full-day shoots
              are rarely the clients who value your work or build long-term relationships.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-4 text-sm">
              <p className="font-semibold text-gray-900 mb-2">Budget signaling in the UAE</p>
              <p className="text-gray-700">
                A useful benchmark: if a client&apos;s brief includes luxury brands, premium hotels,
                government entities, or large developers — budget for AED 3,000+ per day at minimum.
                If the brief starts with &ldquo;we&apos;re a small startup&rdquo; — expect pressure below AED 1,500.
                You can accept either, but price accordingly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What to Include in Your Photography Package</h2>
            <p>Always specify in writing before a shoot commences:</p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• Shoot duration (hours or half/full day)</li>
              <li>• Number of final edited images to be delivered</li>
              <li>• Turnaround time for delivery</li>
              <li>• File formats (JPEG, RAW, TIFF)</li>
              <li>• Usage rights (web only, print, advertising, exclusivity)</li>
              <li>• Travel — within Dubai vs Abu Dhabi vs other emirates (add AED 300–600 for out-of-emirate)</li>
              <li>• Studio hire: confirm who pays (if using a studio)</li>
              <li>• Reshoots: included or charged separately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Should You Charge VAT?</h2>
            <p>
              If your total turnover exceeds AED 375,000 per year, you are required to register
              for VAT and charge 5% on your services. Below that threshold, VAT is optional.
              For professional credibility (and because most corporate clients want a VAT invoice),
              registering early — even below the threshold — can be worth considering. See our
              guide on <Link href="/blog/freelance-tax-uae" className="text-gray-900 underline">UAE freelance tax and VAT</Link> for full details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Raising Your Rates as a UAE Photographer</h2>
            <p>
              The fastest way to raise your rates is to specialize and build a portfolio that
              proves it. A generalist photographer struggles to charge more than AED 2,500/day.
              A photographer with a portfolio of 20 luxury hotel shoots can charge AED 6,000+
              because their clients know exactly what they are getting.
            </p>
            <p className="mt-3">
              Practical steps to justify higher rates: shoot personal projects in your target
              niche, collaborate on test shoots with styling teams and models, add case studies
              to your website that show business outcomes (not just pretty pictures), and build
              relationships with creative directors and marketing managers in your niche.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Track every client and invoice</p>
            <h3 className="text-lg font-bold mb-2">The Freelancer Client CRM keeps your photography business organized</h3>
            <p className="text-gray-400 text-sm mb-4">
              Never lose a lead or forget to follow up. Track clients, shoot bookings, invoices,
              and follow-ups in one Notion workspace — set up in 20 minutes.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              See the Client CRM →
            </Link>
          </div>

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
