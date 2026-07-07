import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get International Clients as a UAE-Based Freelancer — SoloKit",
  description:
    "How UAE-based freelancers attract and work with clients from the UK, US, Europe, and beyond — platforms, pricing, payment, contracts, and the time zone advantage.",
  alternates: { canonical: "/blog/how-to-get-international-clients-uae" },
  openGraph: {
    title: "How to Get International Clients as a UAE-Based Freelancer",
    description:
      "How UAE-based freelancers attract and work with clients from the UK, US, Europe, and beyond — platforms, pricing, payment, contracts, and the time zone advantage.",
    type: "article",
    url: "/blog/how-to-get-international-clients-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get International Clients as a UAE-Based Freelancer",
  description:
    "How UAE-based freelancers attract and work with clients from the UK, US, Europe, and beyond — platforms, pricing, payment, contracts, and the time zone advantage.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-get-international-clients-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-get-international-clients-uae",
};

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
            <span className="text-gray-600">International Clients UAE</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Client Acquisition</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Get International Clients as a UAE-Based Freelancer
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Being based in Dubai or Abu Dhabi gives you a structural advantage when working with
              UK, US, and European clients. You deliver senior-level work at rates 40–70% below
              their local market.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "40–70%", label: "Below Western market rates" },
              { value: "$75–150/hr", label: "Competitive international rate" },
              { value: "0.3–0.5%", label: "Wise Business conversion fee" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            A senior UX designer in London bills £800–1,200/day. In New York it&apos;s $900–1,500/day.
            A UAE-based freelancer with equivalent skills can charge $500–800/day and still be
            40–50% cheaper than their local counterpart — while earning significantly more than
            the UAE domestic market rate for the same work.
          </p>

          {/* Time Zone */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Time Zone Advantage
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            UAE Standard Time (UTC+4) is one of the best-positioned time zones for international
            freelance work. The overlap looks like this:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              { region: "UK (UTC+1)", detail: "Your 9am–1pm overlaps with UK business hours. You can join calls, review briefs, and respond to messages in their morning." },
              { region: "Central Europe (UTC+2)", detail: "Even better overlap. You're just 2 hours ahead." },
              { region: "US East Coast (UTC-4)", detail: "Your afternoon (2pm–6pm UAE) is their morning (10am–2pm ET). Async by day, calls in your late afternoon if needed." },
              { region: "India and Asia", detail: "Near-perfect overlap for regional collaboration or subcontracting." },
            ].map((item) => (
              <li key={item.region} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{item.region}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          {/* Where to Find */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Where to Find International Clients
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                name: "Upwork",
                detail: "The largest international freelance marketplace, all billing in USD. A senior professional charging $75–150/hr on Upwork is earning AED 275–550/hr — well above UAE domestic rates.",
              },
              {
                name: "Toptal",
                detail: "Accepts only 3% of applicants. Rates of $80–200/hr, pre-vetted clients who don't negotiate on price. Worth the 5-week application process if your skills qualify.",
              },
              {
                name: "LinkedIn",
                detail: "International clients increasingly hire remote freelancers directly from LinkedIn — bypassing platforms entirely and paying no marketplace fees. For senior professionals, this is the highest-quality channel.",
              },
              {
                name: "Contra",
                detail: "Newer platform with growing international client base — and critically, 0% fees. Particular strength in design, development, and creative work.",
              },
              {
                name: "Referrals from UAE Clients",
                detail: "Many UAE-based companies are subsidiaries or regional offices of international businesses. A warm introduction from the Dubai office to their London or New York counterparts is easier to convert than any cold outreach.",
              },
            ].map((item) => (
              <div key={item.name} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Pricing for International Clients
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The most common mistake UAE freelancers make when going international: pricing in
            AED or using UAE domestic rates as the benchmark.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Price in USD or GBP. Research US and UK market rates for your service and position
            yourself 30–50% below those rates. At $75–150/hr you are:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Competitive compared to US/UK freelancers at $150–300/hr</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Earning AED 275–550/hr — significantly more than most UAE-rate work</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Not cheap enough to attract low-quality clients looking for $5/hr work</span>
            </li>
          </ul>

          {/* Getting Paid */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Getting Paid: Wise Business
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            International wire fees plus conversion spreads can easily cost 2–3% of every payment.
            On AED 50,000/month in international income, that&apos;s AED 1,000–1,500 lost to banking fees every month.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Wise Business solves this. You get real local account details in the UK (sort code and account number),
            US (routing number), and EU (IBAN). Your international clients pay as if they&apos;re paying a local business.
            Wise charges 0.3–0.5% for conversion — a fraction of bank rates.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Pro Tip</p>
            <p className="text-sm text-emerald-800">
              The setup takes a few days and requires ID verification, but it pays for itself in the first payment.
              For any UAE freelancer billing international clients in foreign currency, Wise is non-negotiable.
            </p>
          </div>

          {/* Contracts */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Contracts for International Work
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Governing law:</strong> Specify which country&apos;s law applies in case of a dispute. Either UAE law or the client&apos;s local law — what matters is that it&apos;s explicit.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>50% upfront, 50% on delivery for project work — no exceptions</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Full payment in advance for anything under $1,000</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span>Invoice in USD or GBP — never AED for international clients</span>
            </li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-amber-900 mb-1">⚠️ Can UAE freelancers legally work for international clients?</p>
            <p className="text-sm text-amber-800">
              Yes. Your UAE residence visa or freelance permit does not restrict which country your
              clients are based in. International freelance income is still completely tax-free in the UAE.
              Note: if you hold citizenship or residency in another country, their tax rules may still apply.
            </p>
          </div>

          {/* Your International Pitch */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Your International Pitch
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <p className="text-sm text-gray-600 mb-2">This is literally your LinkedIn headline:</p>
            <p className="text-sm font-semibold text-gray-900">
              &ldquo;Senior [skill] based in Dubai. Available for remote work globally. Competitive rates relative to US/UK market.&rdquo;
            </p>
            <p className="text-xs text-gray-500 mt-3">
              It answers the three questions every international client has: what do you do, can you work with me remotely,
              and will you cost me an arm and a leg?
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/bundle" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/get-freelance-clients-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Get Freelance Clients in the UAE (6 Strategies That Work)</Link>
              <Link href="/blog/how-to-become-freelancer-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Become a Freelancer in the UAE — Complete 2026 Guide</Link>
              <Link href="/blog/freelance-rate-calculator-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Rate Calculator UAE — What Should You Charge?</Link>
              <Link href="/blog/freelance-contract-template-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Contract Template for UAE-Based Work</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
