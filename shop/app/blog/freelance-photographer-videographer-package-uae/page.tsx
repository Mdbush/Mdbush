import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Photography & Videography Package Rates in the UAE (2026)",
  description:
    "Real AED rates for freelance photographers and videographers in Dubai and Abu Dhabi who offer combined photo + video packages — brand shoots, events, real estate, social media content days, and corporate production packages for 2026.",
  alternates: { canonical: "/blog/freelance-photographer-videographer-package-uae" },
  openGraph: {
    title: "Freelance Photography & Videography Package Rates in the UAE (2026)",
    description: "Combined photo + video package rates in Dubai — brand shoots, events, real estate, social content days, and corporate productions for 2026.",
    type: "article",
    url: "/blog/freelance-photographer-videographer-package-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Photography & Videography Package Rates in the UAE (2026)",
  description: "Real AED rates for combined photo + video packages in Dubai and Abu Dhabi.",
  url: `${siteUrl}/blog/freelance-photographer-videographer-package-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const rateTable = [
  { type: "Brand content day (photo + video, 8 hrs, 1 location)", junior: "AED 3,500–6,000", mid: "AED 6,500–14,000", senior: "AED 16,000–40,000+" },
  { type: "Social media content shoot (2–4 hrs, reels + stills)", junior: "AED 1,500–3,000", mid: "AED 3,500–7,000", senior: "AED 8,000–20,000+" },
  { type: "Corporate event coverage (full day, photo + video)", junior: "AED 3,000–5,500", mid: "AED 6,000–12,000", senior: "AED 14,000–35,000+" },
  { type: "Real estate showcase (property photos + walkthrough video)", junior: "AED 1,200–2,500", mid: "AED 2,800–5,500", senior: "AED 6,000–15,000+" },
  { type: "Product photography + hero video (per product campaign)", junior: "AED 2,000–4,000", mid: "AED 4,500–10,000", senior: "AED 12,000–30,000+" },
  { type: "Monthly content retainer (4 shoots/mo, photo + short-form video)", junior: "AED 4,000–7,500/mo", mid: "AED 8,000–18,000/mo", senior: "AED 20,000–55,000+/mo" },
  { type: "Corporate video production (2–5 min brand film, full crew)", junior: "AED 8,000–18,000", mid: "AED 20,000–50,000", senior: "AED 60,000–200,000+" },
  { type: "Aerial / drone photography + video (half day, licensed pilot)", junior: "AED 2,000–4,000", mid: "AED 4,500–9,000", senior: "AED 10,000–25,000+" },
];

export default function FreelancePhotographerVideographerPackageUAE() {
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
          <span className="text-gray-600">Photo + Video Package Rates UAE</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing & Rates</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Freelance Photography & Videography Package Rates in the UAE (2026)
          </h1>
          <p className="text-gray-500 text-sm">7 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Dubai&apos;s visual content demand is among the highest in the world per business capita.
            Every restaurant, hotel, real estate developer, D2C brand, and corporate entity
            needs photography and video — and the social-media-first economy has made combined
            photo + video packages the standard offering, not two separate disciplines.
            Freelancers who can shoot and edit both stills and video, or who partner with
            a specialist to offer combined packages, command significantly higher project values
            than single-medium practitioners. Here are the 2026 rate benchmarks for
            combined photography and videography packages.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-1">Quick benchmark</p>
            <p className="text-gray-700">
              A mid-level Dubai-based photo/video freelancer with 4–7 years experience
              typically charges <strong>AED 6,500–14,000 for a brand content day</strong> and
              <strong> AED 8,000–18,000/month for a monthly content retainer</strong>.
              A full corporate video production (2–5 min brand film with crew) runs
              AED 20,000–50,000 at mid-level. Monthly retainers with established brands
              generate predictable income without constant pitch cycles.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Photography + Videography Package Rates in the UAE (2026)</h2>
            <p className="text-xs text-gray-400 mb-4">Junior: 0–3 years / Mid: 4–7 years / Senior: 8+ years, major brand portfolio, or specialist niche</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Package type</th>
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Junior</th>
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Mid-level</th>
                    <th className="text-left py-2 text-gray-500 font-semibold text-xs">Senior</th>
                  </tr>
                </thead>
                <tbody>
                  {rateTable.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-gray-900 text-xs">{row.type}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs">{row.junior}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs">{row.mid}</td>
                      <td className="py-3 text-gray-600 text-xs">{row.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">High-Value Niches for UAE Photo + Video Freelancers</h2>
            <div className="space-y-3 mt-4">
              {[
                { niche: "Real estate and off-plan property (Dubai developers)", rate: "AED 3,000–15,000+ per property", why: "Dubai&apos;s real estate market is one of the most active in the world — AED 528 billion in transactions in 2024. Every developer listing units (off-plan and ready properties) needs hero photography and walkthrough video. High-volume opportunities: one developer relationship generates 4–8 shoots per month. Drone capability is near-essential for this niche. Aerial footage of Dubai&apos;s skyline context commands premium rates." },
                { niche: "F&B / hospitality (hotel restaurants, boutique cafés, luxury hotels)", rate: "AED 4,000–20,000+ per shoot", why: "Dubai&apos;s food scene generates constant content demand: menu refreshes, seasonal campaigns, social media content, opening shoots. The Jumeirah Group, Four Seasons, Atlantis, and countless boutique restaurants are all potential clients. Hotel and F&B clients typically want photo + short-form video in a single shoot day. Once you&apos;re in a hotel&apos;s preferred vendor list, repeat business is high with minimal pitching." },
                { niche: "Monthly content retainers for D2C brands (UAE e-commerce)", rate: "AED 8,000–25,000/month", why: "Dubai-based D2C brands (beauty, health, fashion, food delivery, lifestyle products) need constant visual content for Instagram, TikTok, and their own e-commerce sites. A monthly retainer guarantees recurring revenue, simplifies client relationships, and allows planning. Position retainers as a &apos;visual content partnership&apos; — the brand gets predictable content production; you get predictable income. Mid-level retainers with 3–4 brands generate AED 32,000–72,000/month." },
                { niche: "Corporate brand films and internal communications", rate: "AED 20,000–80,000+ per production", why: "Large UAE corporations (banks, government entities, multinationals) commission brand films, CEO messages, employer branding content, and internal communication videos. These are fully produced, multi-day shoots with crew, scripts, and full post-production. Relationships are driven through corporate communications departments, PR agencies, and marketing procurement. High effort per project, but high value and strong repeat relationships." },
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
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Drone Licensing in the UAE: What You Need to Know</h2>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>GCAA Drone Pilot License</strong> — General Civil Aviation Authority (GCAA) requires a Remote Pilot License to fly drones commercially in the UAE. Must pass a theory exam and log flight hours. Required before you can legally fly drones for paying clients</li>
              <li>• <strong>Dubai DCAA approval</strong> — Dubai Civil Aviation Authority approval is required for drone flights in Dubai in addition to GCAA licensing. Many locations in Dubai require specific location permits (near airports, certain residential areas, Palm Jumeirah)</li>
              <li>• <strong>No-fly zones</strong> — Dubai has extensive no-fly zones including all areas within 5km of Dubai International Airport and Al Maktoum International Airport. Check GCAA and Dubai Airspace Management Centre before any shoot</li>
              <li>• <strong>Insurance</strong> — Commercial drone operators require aviation liability insurance. Standard coverage for commercial operations: AED 1–5 million liability. Required by most corporate clients</li>
              <li>• <strong>Revenue premium</strong> — Licensed drone capability adds AED 2,000–8,000 to a standard shoot package. In real estate photography especially, aerial footage is often a client&apos;s first request. Outsourcing to a licensed pilot and charging a margin is a valid alternative to licensing yourself</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What to Include in Your UAE Photo + Video Package</h2>
            <p className="text-sm text-gray-600 mb-3">
              Clear package definitions prevent scope creep and set client expectations. Always specify:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>Shoot duration</strong> — Number of hours on location. Clearly define what &quot;half day&quot; means (typically 4 hours)</li>
              <li>• <strong>Deliverables (photo)</strong> — Number of final edited images (not total images shot). &quot;25 retouched final images&quot; — not &quot;hundreds of photos&quot;</li>
              <li>• <strong>Deliverables (video)</strong> — Specify number of videos, duration of each, format (vertical 9:16 for Reels, landscape 16:9 for YouTube), and whether raw footage is included (it usually costs extra)</li>
              <li>• <strong>Revisions</strong> — Number of edit rounds included (typically 1–2). Each additional round billed at AED 300–1,500 depending on complexity</li>
              <li>• <strong>Turnaround time</strong> — Standard: 5–10 business days for edited content. Rush delivery (2–3 days) adds 30–50% to package price</li>
              <li>• <strong>Usage rights</strong> — Standard packages include unlimited commercial use in UAE market. International usage, billboard advertising, or paid media usage typically requires additional licensing fees</li>
              <li>• <strong>Talent and location</strong> — Who sources models, locations, and styling? If the client handles talent, make this explicit in the contract to avoid assumptions</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Manage your production clients</p>
            <h3 className="text-lg font-bold mb-2">Freelancer Client CRM — Track Every Shoot & Invoice</h3>
            <p className="text-gray-400 text-sm mb-4">
              Track photography and videography projects from brief to delivery, manage
              retainer clients, log shot lists and deliverables, and invoice on delivery
              — all in one Notion workspace.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Get the Client CRM →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-photographer-rates-uae", title: "Freelance Photographer Rates in the UAE (2026): What to Charge" },
                { href: "/blog/freelance-video-editor-rates-uae", title: "Freelance Video Editor Rates in the UAE (2026): What to Charge" },
                { href: "/blog/how-to-price-retainer-clients-uae", title: "How to Price Retainer Clients as a UAE Freelancer" },
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
