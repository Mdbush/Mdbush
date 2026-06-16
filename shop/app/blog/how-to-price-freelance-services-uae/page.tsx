import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Price Your Freelance Services in the UAE (2026 Guide) — SoloKit",
  description:
    "Stop undercharging. A practical guide to setting freelance rates in Dubai and Abu Dhabi — with market benchmarks, pricing strategies, and common mistakes to avoid.",
  alternates: { canonical: "/blog/how-to-price-freelance-services-uae" },
  openGraph: {
    title: "How to Price Your Freelance Services in the UAE",
    description: "Stop undercharging. Market benchmarks and pricing strategies for UAE freelancers.",
    type: "article",
    url: "/blog/how-to-price-freelance-services-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Price Your Freelance Services in the UAE (2026 Guide)",
  description:
    "Stop undercharging. A practical guide to setting freelance rates in Dubai and Abu Dhabi — with market benchmarks, pricing strategies, and common mistakes to avoid.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-price-freelance-services-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-price-freelance-services-uae",
};

const benchmarks = [
  { role: "Graphic Designer", junior: "AED 80–120/hr", mid: "AED 150–250/hr", senior: "AED 300–500/hr" },
  { role: "Web Developer", junior: "AED 100–150/hr", mid: "AED 200–350/hr", senior: "AED 400–700/hr" },
  { role: "Digital Marketer", junior: "AED 80–120/hr", mid: "AED 150–250/hr", senior: "AED 300–500/hr" },
  { role: "Copywriter", junior: "AED 60–100/hr", mid: "AED 120–200/hr", senior: "AED 250–450/hr" },
  { role: "Business Consultant", junior: "AED 150–250/hr", mid: "AED 300–500/hr", senior: "AED 600–1000+/hr" },
  { role: "Video Editor", junior: "AED 80–120/hr", mid: "AED 150–250/hr", senior: "AED 300–500/hr" },
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
            <span className="text-gray-600">How to Price Freelance Services UAE</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">BUSINESS</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Price Your Freelance Services in the UAE (2026 Guide)</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Most UAE freelancers are leaving significant money on the table — not because of their skills, but because they don&apos;t know how to price them. Here&apos;s how to fix that.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>

          {/* Key stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "+AED 36K", label: "Extra income from 20% raise" },
              { value: "AED 5–15K", label: "Typical monthly retainer" },
              { value: "30–50%", label: "Platform rate discount" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Pricing is the single highest-leverage decision in your freelance business. A 20% rate increase on a AED 15,000/month workload means AED 3,000 more per month — AED 36,000 per year — for the same amount of work.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Yet most freelancers either guess their rates, copy what they see others charging, or default to the lowest number they think clients will accept. Here&apos;s a more systematic approach.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            UAE Freelance Rate Benchmarks (2026)
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">UAE Rate Benchmarks 2026</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {benchmarks.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.role}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Junior · Mid · Senior</p>
                  </div>
                  <div className="text-right text-xs text-gray-500 space-y-0.5 shrink-0">
                    <div>{row.junior}</div>
                    <div className="font-bold text-emerald-700">{row.mid}</div>
                    <div>{row.senior}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-8">
            These are hourly rates for direct client work. Rates through agencies or platforms like Upwork are typically 30–50% lower.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            3 Pricing Strategies That Actually Work
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Value-Based Pricing</h3>
              <p className="text-sm text-gray-600">Charge based on the value you deliver. A landing page that increases revenue by AED 100K/month is worth AED 15,000–25,000, not AED 4,000 (20hrs × AED 200/hr).</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Retainer Pricing</h3>
              <p className="text-sm text-gray-600">A fixed monthly fee for a defined scope. Provides income predictability for you and budget clarity for the client. AED 5,000–15,000/month from 2–3 clients is a solid foundation.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Project-Based Pricing</h3>
              <p className="text-sm text-gray-600">A flat fee for a defined deliverable. Clients prefer this because they know the total cost upfront. You benefit if you work faster than estimated. Always have a clear scope.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Common Pricing Mistakes UAE Freelancers Make
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              { mistake: "Lowering rates to win clients.", detail: "Low rates attract low-quality clients. The clients who push hardest on price are usually the most difficult to work with. Price for who you want to work with, not who you can get." },
              { mistake: "Not reviewing rates annually.", detail: "Inflation, skill growth, and market demand all go up. Your rates should too. Build a 'rate review' into your calendar every January." },
              { mistake: "Charging hourly for everything.", detail: "Hourly pricing punishes you for getting faster. As you improve, your hourly rate effectively goes down. Switch to project or retainer pricing as soon as possible." },
              { mistake: "Not including admin time in project quotes.", detail: "Emails, revisions, calls, and file organization can add 20–30% to any project. Always build this into your quote." },
            ].map((row) => (
              <li key={row.mistake} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{row.mistake}</strong> {row.detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            How to Raise Your Rates Without Losing Clients
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Give existing clients 30–60 days notice. Frame it as a business decision, not an apology. Something like: &quot;I&apos;m updating my rates for new projects starting in [month]. I wanted to give you early notice. Our current projects won&apos;t be affected.&quot;
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Key Insight</p>
            <p className="text-sm text-emerald-800">Most good clients will accept a rate increase. The ones who don&apos;t weren&apos;t paying you fairly anyway. New clients should always be quoted the higher rate — you&apos;ll be surprised how rarely they push back.</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Track Client Rates and Revenue in One Place</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Track client rates, project revenue, and invoice status. Know exactly how much you&apos;re earning from each client relationship.</p>
            <Link href="/products/freelancer-client-crm" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get the Freelancer CRM →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-rate-calculator-uae", label: "Freelance Rate Calculator UAE — What Should You Charge?" },
                { href: "/blog/get-freelance-clients-uae", label: "How to Get Freelance Clients in the UAE (6 Strategies)" },
                { href: "/blog/freelance-developer-rates-uae", label: "Freelance Developer Rates in the UAE (2026)" },
                { href: "/blog/freelance-consultant-rates-uae", label: "Freelance Consultant Rates in the UAE (2026)" },
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
