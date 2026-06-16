import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Photographer Rates in the UAE (2026) — SoloKit",
  description:
    "Real AED rates for freelance photographers in the UAE in 2026. Wedding, corporate, real estate, editorial, food photography — per hour, per day, per project.",
  alternates: { canonical: "/blog/freelance-photographer-rates-uae" },
  openGraph: {
    title: "Freelance Photographer Rates in the UAE (2026)",
    description:
      "Comprehensive AED rate guide for UAE freelance photographers — weddings, corporate events, real estate, fashion, and food. Includes permit info and platform tips.",
    type: "article",
    url: "/blog/freelance-photographer-rates-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Photographer Rates in the UAE (2026)",
  description:
    "Real AED rates for freelance photographers in the UAE in 2026. Wedding, corporate, real estate, editorial, food photography — per hour, per day, per project.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-photographer-rates-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-photographer-rates-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "freelance photographer rates UAE",
    "photography rates Dubai AED",
    "wedding photographer Dubai cost",
    "corporate photographer UAE",
    "real estate photography Dubai",
    "freelance photography permit UAE",
  ],
};

const rateTable = [
  { category: "Wedding (half day, 4–5 hrs)", low: "AED 3,500", high: "AED 6,000", notes: "Single photographer, edited gallery" },
  { category: "Wedding (full day, 8–10 hrs)", low: "AED 6,500", high: "AED 12,000", notes: "Coverage + 2nd shooter optional" },
  { category: "Corporate Events (per hour)", low: "AED 800", high: "AED 2,500", notes: "Conference, product launch, gala" },
  { category: "Corporate Events (day rate)", low: "AED 3,000", high: "AED 8,000", notes: "Full production day" },
  { category: "Real Estate (per property)", low: "AED 500", high: "AED 2,000", notes: "Interior + exterior, edited" },
  { category: "Editorial / Fashion (day rate)", low: "AED 5,000", high: "AED 20,000", notes: "High-end, usage licensing separate" },
  { category: "Food Photography (per shoot)", low: "AED 1,500", high: "AED 4,000", notes: "Restaurant, e-commerce, brand" },
  { category: "Retouching (per image)", low: "AED 50", high: "AED 200", notes: "Basic to advanced post-production" },
  { category: "Studio Hire — Dubai (half day)", low: "AED 500", high: "AED 1,500", notes: "Add-on cost, passed to client" },
];

export default function FreelancePhotographerRatesUAEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Freelance Photographer Rates UAE</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">PHOTOGRAPHY</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Freelance Photographer Rates in the UAE (2026)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Whether you shoot weddings in Dubai Marina, corporate events in DIFC, or luxury real estate on Palm Jumeirah — here are the real AED rates UAE photographers are charging in 2026, broken down by niche, format, and experience level.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 16, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Quick summary box */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">UAE Photography Rate Snapshot (2026)</p>
            <ul className="space-y-1.5 text-sm text-emerald-800">
              <li><strong>Wedding photography:</strong> AED 3,500–12,000 per event</li>
              <li><strong>Corporate events:</strong> AED 800–2,500/hour &middot; AED 3,000–8,000/day</li>
              <li><strong>Real estate:</strong> AED 500–2,000 per property</li>
              <li><strong>Editorial / fashion:</strong> AED 5,000–20,000/day</li>
              <li><strong>Food photography:</strong> AED 1,500–4,000 per shoot</li>
              <li><strong>Retouching:</strong> AED 50–200 per image</li>
            </ul>
          </div>

          {/* Section 1 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            2026 UAE Photography Rate Table
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            Rates below reflect what working freelance photographers in the UAE — primarily Dubai, Abu Dhabi, and Sharjah — are quoting in 2026. The lower end typically applies to photographers with 1–3 years of experience and a developing portfolio. The higher end reflects seasoned pros with strong brand recognition, premium editing, and commercial licensing agreements in place.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Category</th>
                  <th className="text-left px-4 py-3 font-semibold">Low</th>
                  <th className="text-left px-4 py-3 font-semibold">High</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {rateTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.category}</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">{row.low}</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">{row.high}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Niche-by-Niche Breakdown
          </h2>

          <div className="space-y-5 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Wedding Photography</h3>
              <p className="text-sm text-gray-600 mb-3">
                Dubai&apos;s wedding market is one of the most lucrative in the region. Multi-day South Asian celebrations, Arab nikkah ceremonies, and western-style events at venues like Atlantis, Burj Al Arab, or Armani Hotel all command premium rates. A half-day package (4–5 hours, single photographer, edited gallery of 300–500 images) runs AED 3,500–6,000. Full-day coverage with a second shooter starts at AED 6,500 and can hit AED 12,000 for top-tier photographers with a strong social following and brand.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>→ Albums, prints, and same-day edits are common upsells (AED 1,500–5,000 extra)</p>
                <p>→ Book 6–12 months in advance for Dubai peak season (October–March)</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Events</h3>
              <p className="text-sm text-gray-600 mb-3">
                DIFC, Downtown Dubai, and Abu Dhabi&apos;s ADNEC host hundreds of corporate events every month — product launches, investor days, conferences, and award galas. Hourly rates range from AED 800 for entry-level photographers to AED 2,500 for experienced corporate specialists. Full-day rates of AED 3,000–8,000 are standard for events requiring presence from setup through evening gala. Most corporate clients expect a fast turnaround — often 24–48 hours for edited selects.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>→ Always quote usage rights separately for events with marketing use</p>
                <p>→ Minimum 2-hour bookings are standard practice in Dubai</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Real Estate Photography</h3>
              <p className="text-sm text-gray-600 mb-3">
                Dubai&apos;s booming property market drives high demand for real estate photography. Standard residential shoots (interior + exterior, 20–30 edited images) run AED 500–1,200. Luxury properties — villas in Emirates Hills, penthouses in Downtown, or mansions in Al Barari — command AED 1,500–2,000+ and often include twilight shots, virtual tours, or drone add-ons. Agencies like Allsopp &amp; Allsopp, Betterhomes, and Haus &amp; Haus are frequent corporate clients that work on volume.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>→ Aerial/drone shots require a GCAA-licensed pilot or a drone add-on hire</p>
                <p>→ Volume discounts common for agencies booking 10+ properties per month</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Editorial &amp; Fashion Photography</h3>
              <p className="text-sm text-gray-600 mb-3">
                The UAE&apos;s fashion and editorial market — Vogue Arabia, Harper&apos;s Bazaar Arabia, Elle Arabia — pays at the higher end of the scale. Day rates for editorial photographers start at AED 5,000 and reach AED 20,000 for established names. Commercial fashion campaigns for brands like Level Shoes, Ounass, or Chalhoub Group typically involve separate usage licensing fees on top of the day rate. Always clarify exclusivity, territory, and usage period before shooting.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>→ Test shoots for model agencies: AED 0 (TFP) to AED 2,000 paid</p>
                <p>→ Always clarify exclusivity and usage territory in written contracts</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Food Photography</h3>
              <p className="text-sm text-gray-600 mb-3">
                Dubai&apos;s F&amp;B scene is booming — the city has over 13,000 restaurants and cafes. Food photography for menus, social media, and delivery apps like Talabat, Deliveroo, and Noon Food is in constant demand. A standard shoot of 10–15 dishes runs AED 1,500–2,500. High-end brand campaigns with a food stylist can reach AED 4,000+ per shoot. Many photographers offer monthly retainer packages for restaurants that need a steady flow of content.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>→ Food stylist hire adds AED 500–1,500 (often passed on to the client)</p>
                <p>→ Instagram-first crops and vertical formats are now standard deliverables</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Gear, Permits &amp; Where to Find Clients
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Common Equipment</h3>
              <p className="text-sm text-gray-600 mb-3">
                Most UAE freelance photographers shoot on Canon or Sony mirrorless systems. Popular bodies include the Sony A7 IV, Sony A7R V, Canon EOS R5, and Canon EOS R6 Mark II. For events, a fast 24–70mm f/2.8 or portrait 85mm f/1.4 are standard. Gear import duties in the UAE are generally low (0–5%), keeping upgrade costs reasonable compared to many markets.
              </p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>→ Sony A7 IV body: ~AED 9,500</li>
                <li>→ Canon EOS R5: ~AED 14,000</li>
                <li>→ Sony 24-70mm GM II: ~AED 10,500</li>
                <li>→ Studio strobe kit: AED 2,000–8,000</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Studio Hire in Dubai</h3>
              <p className="text-sm text-gray-600 mb-3">
                Renting a professional studio in Dubai for product, portrait, or fashion shoots costs AED 500–1,500 for a half day (4 hours). Full-day rates typically run AED 900–2,500. Popular studio hubs include Al Quoz, Dubai Studio City, and JLT. Always factor this cost into your quotes — most photographers pass studio hire through to the client at cost or with a small handling fee.
              </p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>→ Half day (4 hrs): AED 500–1,500</li>
                <li>→ Full day (8 hrs): AED 900–2,500</li>
                <li>→ Cyclorama / cove: from AED 750/half day</li>
                <li>→ Locations: Al Quoz, Dubai Studio City, JLT</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Freelance Permits</h3>
              <p className="text-sm text-gray-600 mb-3">
                To legally offer photography services in the UAE, you need a trade license or a freelance permit. SHAMS (Sharjah Media City) and Dubai Media City (DMC) are the two most popular free zones for photographers. A SHAMS freelance permit runs approximately AED 5,750/year and includes photography as an approved activity. Dubai Media City is pricier but carries more prestige with corporate clients who run supplier checks.
              </p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>→ SHAMS freelance permit: ~AED 5,750/year</li>
                <li>→ Dubai Media City: AED 8,500–15,000/year</li>
                <li>→ twofour54 Abu Dhabi: option for AD-based photographers</li>
                <li>→ Permits unlock business banking and proper client invoicing</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Where to Find Clients</h3>
              <p className="text-sm text-gray-600 mb-3">
                Instagram remains the primary discovery platform for photographers in the UAE. A polished feed with location tags (#DubaiPhotographer, #DubaiWeddingPhotographer) and consistent posting generates inbound leads. Dubizzle classifieds still drive real estate and event gigs. Workana and FreelanceMe list local projects. WhatsApp referral networks are critical — most UAE photographers get 40–60% of their work from word-of-mouth referrals.
              </p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li>→ Instagram: primary brand-building platform</li>
                <li>→ Dubizzle: real estate, events, portraits</li>
                <li>→ Workana / FreelanceMe: listed projects</li>
                <li>→ WhatsApp networks: referrals, your most valuable channel</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-1">Pricing Tip: Always Factor in Post-Production Time</p>
            <p className="text-sm text-emerald-800">
              Many UAE photographers underquote because they forget to factor in editing time. A 6-hour wedding shoot can require 10–20 hours of post-production. If you charge AED 4,000 for the day, you may be earning less than AED 200/hour all-in. Charge for editing separately or build it into your day rate — AED 50–200 per finished image for retouching is standard and should be itemised on every invoice. Adobe Lightroom subscriptions (part of Creative Cloud at ~AED 270/month) and culling tools like Narrative Select are common costs to factor in.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            How to Set Your Rate as a UAE Photographer
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Setting your rate isn&apos;t just about what the market pays — it&apos;s about covering your true costs. In the UAE, freelance photographers face costs that salaried employees don&apos;t: freelance permit renewal, mandatory health insurance (required for Dubai residency), equipment depreciation, and software subscriptions. Running these numbers first gives you a real cost floor below which you cannot profitably work.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Calculate your annual overhead: permit (~AED 5,750) + health insurance (~AED 2,500–5,000) + Adobe CC (~AED 3,240/yr) + gear depreciation",
              "Divide by your expected billable shoot days per year (typically 100–150 for active freelancers in Dubai)",
              "Add your target take-home income — AED 15,000–25,000/month is a reasonable UAE benchmark for mid-career photographers",
              "Your minimum day rate emerges from this formula — never price below your cost floor",
              "Increase rates by 10–20% annually as your portfolio, testimonials, and market positioning improve",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-1">VAT Note for UAE Photographers</p>
            <p className="text-sm text-emerald-800">
              If your annual photography revenue exceeds AED 375,000, you must register for UAE VAT and charge 5% on all services. Even below the threshold, voluntary registration can be useful if you work with VAT-registered businesses who can reclaim input tax. Always include a VAT clause in your client contracts to avoid absorbing the cost yourself — getting this wrong costs real money at scale.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Invoice Clients &amp; Track Your Photography Income</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              Send professional AED invoices, track outstanding payments, and manage your client roster — tools built for UAE freelancers.
            </p>
            <Link
              href="/"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Explore SoloKit →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-videographer-rates-uae", label: "Freelance Videographer Rates in the UAE (2026)" },
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in AED" },
                { href: "/blog/freelance-visa-uae", label: "How to Get a Freelance Visa in the UAE" },
                { href: "/blog/best-banks-freelancers-uae", label: "Best Banks for Freelancers in the UAE" },
                { href: "/blog/how-to-get-clients-on-linkedin-uae", label: "How to Get Clients on LinkedIn in Dubai/UAE" },
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
