import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get a Freelance Visa in the UAE (2026 Guide) — SoloKit",
  description:
    "Step-by-step guide to getting a freelance permit or visa in the UAE. Covers free zones, costs, renewal, and which permit is right for your situation.",
  alternates: { canonical: "/blog/freelance-visa-uae" },
  openGraph: {
    title: "How to Get a Freelance Visa in the UAE (2026 Guide)",
    description: "Free zone permits, costs, renewal timelines, and which UAE freelance visa is right for you.",
    type: "article",
    url: "/blog/freelance-visa-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get a Freelance Visa in the UAE (2026 Guide)",
  description:
    "Step-by-step guide to getting a freelance permit or visa in the UAE. Covers free zones, costs, renewal, and which permit is right for your situation.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-visa-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-visa-uae",
};

const freeZones = [
  {
    name: "Dubai Media City (DMC) / Dubai Creative Clusters",
    cost: "AED 8,000 – 12,000/year",
    bestFor: "Media, marketing, PR, content creators",
    notes: "Well-established, strong network, includes residency visa option",
  },
  {
    name: "Fujairah Creative City",
    cost: "AED 6,500 – 9,000/year",
    bestFor: "Consultants, coaches, creatives",
    notes: "Lower cost than Dubai options, remote-friendly",
  },
  {
    name: "Ras Al Khaimah Economic Zone (RAKEZ)",
    cost: "AED 5,500 – 8,500/year",
    bestFor: "Freelancers in tech, consulting, services",
    notes: "Competitive pricing, quick setup, includes flexi-desk option",
  },
  {
    name: "Sharjah Media City (Shams)",
    cost: "AED 5,750 – 8,000/year",
    bestFor: "Media, digital, e-commerce",
    notes: "Very popular for solopreneurs, full remote allowed",
  },
  {
    name: "Dubai Silicon Oasis (DSO)",
    cost: "AED 8,500 – 13,000/year",
    bestFor: "Tech, software, digital services",
    notes: "Tech ecosystem focus, good for IT freelancers",
  },
  {
    name: "Abu Dhabi Twofour54",
    cost: "AED 10,000 – 15,000/year",
    bestFor: "Media, entertainment, broadcasting",
    notes: "Abu Dhabi-based, ideal if you work with Abu Dhabi clients",
  },
];

export default function Article() {
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
            <span className="text-gray-600">Freelance Visa UAE</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">BUSINESS &amp; LEGAL</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Get a Freelance Visa in the UAE (2026 Guide)</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              A complete breakdown of UAE freelance permits — which free zone to choose, what it actually costs, and the step-by-step process to get legal and start working.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Key stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 5,750+", label: "Lowest permit cost" },
              { value: "3–7 days", label: "Setup time" },
              { value: "AED 10–16K", label: "First-year total" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Going freelance in the UAE without the right visa is one of the most common and costly mistakes new solopreneurs make. Working under a company visa while freelancing independently violates your visa terms — and the consequences range from visa cancellation to fines.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The good news: getting a legitimate freelance permit in the UAE is simpler than most people think, and often cheaper than a full company license. Here&apos;s the full picture.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Freelance Permit vs Freelance Visa: What&apos;s the Difference?
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                term: "Freelance Permit",
                def: "A license that legally allows you to operate as a freelancer in the UAE. Issued by a free zone authority. Does NOT automatically include a residency visa.",
              },
              {
                term: "Freelance Visa (Residency)",
                def: "A UAE residency visa tied to your freelance permit. Required if you want to live in the UAE as a freelancer. Usually added as an optional extra to your permit package.",
              },
              {
                term: "Employment Visa",
                def: "A visa sponsored by a company. If you have this and freelance on the side, you&apos;re technically in violation of your visa terms unless your employer explicitly allows it.",
              },
            ].map((item) => (
              <div key={item.term} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.term}</p>
                <p className="text-sm text-gray-500">{item.def}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Most UAE freelancers need both: a freelance permit (to operate legally) and a residency visa (to live here). Some free zones bundle both together; others price them separately.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Main Free Zones for Freelancers (2026 Costs)
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">Free Zone Comparison 2026</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {freeZones.map((zone, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{zone.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{zone.bestFor} · {zone.notes}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{zone.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Step-by-Step: How to Get Your Freelance Permit
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                num: "1",
                title: "Choose your free zone",
                body: "Pick based on your profession, budget, and location preference. If you work mainly with Dubai clients, Dubai-based free zones make networking easier. If cost is the priority, RAKEZ or Shams are the most popular budget options.",
              },
              {
                num: "2",
                title: "Choose your activity",
                body: "Each permit covers specific professional activities (e.g., 'Freelance Graphic Designer', 'IT Consultant', 'Marketing Consultant'). Most free zones allow 1–3 activities on a single permit. List everything that applies to your work.",
              },
              {
                num: "3",
                title: "Prepare your documents",
                body: "Typically required: passport copy, passport photo, CV or portfolio, bank statement (some zones require 3 months). Some zones require a No Objection Certificate if you're on a current UAE visa.",
              },
              {
                num: "4",
                title: "Apply online and pay",
                body: "Most free zones have an online application portal. You pay the license fee upfront. Processing takes 3–10 working days for the permit itself.",
              },
              {
                num: "5",
                title: "Apply for the residency visa (if needed)",
                body: "After your permit is approved, apply for the residency visa through the same free zone. This requires a medical fitness test and Emirates ID application — add 2–3 weeks.",
              },
              {
                num: "6",
                title: "Open a business bank account",
                body: "With your permit, you can open a business account. Required for professional invoicing and to receive international payments. Most freelancers use Emirates NBD, ADCB, or Mashreq business accounts.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Total Cost Breakdown (Realistic Numbers)
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-8 text-sm">
            <p className="font-semibold text-gray-900 mb-3">Example: Mid-range setup (Shams or RAKEZ)</p>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between"><span>Freelance permit (annual)</span><span className="font-medium text-gray-900">AED 6,000 – 8,000</span></div>
              <div className="flex justify-between"><span>Residency visa</span><span className="font-medium text-gray-900">AED 3,500 – 5,000</span></div>
              <div className="flex justify-between"><span>Medical fitness test</span><span className="font-medium text-gray-900">AED 300 – 700</span></div>
              <div className="flex justify-between"><span>Emirates ID</span><span className="font-medium text-gray-900">AED 270 – 470</span></div>
              <div className="flex justify-between"><span>Business bank account (setup)</span><span className="font-medium text-gray-900">AED 0 – 2,000</span></div>
              <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold text-gray-900">
                <span>Total first year</span><span>AED 10,000 – 16,000</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">Renewal in subsequent years is just the permit fee (AED 6,000–8,000). Visa renewal every 2–3 years.</p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Can You Freelance on a Tourist Visa?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Technically, no. Tourist visas do not permit you to work or earn income in the UAE. Many people do it informally, but the risks are real: visa ban, fines, and inability to open a bank account or sign contracts.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Key Insight</p>
            <p className="text-sm text-emerald-800">If you&apos;re testing the market before committing to a permit, some freelancers operate while on a tourist visa for a few months as a proof-of-concept period. But this is a risk — not a recommendation. Get the permit: at AED 7,500–12,000/year it pays for itself with a single client.</p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Which Free Zone Should You Choose?
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              { condition: "Budget is the priority", rec: "RAKEZ or Shams — lowest permit costs, fully remote-friendly" },
              { condition: "You work in media, content, or marketing", rec: "Dubai Media City or Shams — better client access and networking" },
              { condition: "You work in tech or software", rec: "Dubai Silicon Oasis or RAKEZ — tech ecosystem, global client-friendly" },
              { condition: "You want Abu Dhabi clients", rec: "Twofour54 or a mainland license — better credibility with government and enterprise" },
              { condition: "You want the fastest setup", rec: "Shams or RAKEZ — often approve in 3–5 working days online" },
            ].map((item) => (
              <li key={item.condition} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">If {item.condition}:</strong> {item.rec}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Golden Visa: Is It Worth It for Freelancers?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The UAE Golden Visa offers 10-year residency and is available to freelancers who meet certain criteria — typically a monthly income of AED 30,000+ or a proven track record in your field. It&apos;s not a replacement for a freelance permit but can be a long-term goal once you&apos;re established.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Most new freelancers should focus on a standard 2–3 year permit/visa first and upgrade to Golden Visa once they meet the income threshold.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers. Stop starting from scratch.</p>
            <Link href="/products/solokit-freelance-os" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get SoloKit →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in the UAE" },
                { href: "/blog/get-freelance-clients-uae", label: "How to Get Freelance Clients in the UAE (6 Strategies)" },
                { href: "/blog/rakez-vs-ifza-freelance-license-uae", label: "RAKEZ vs IFZA vs Meydan: Best Free Zone for UAE Freelancers" },
                { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE?" },
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
