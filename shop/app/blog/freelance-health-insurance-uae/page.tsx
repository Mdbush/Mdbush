import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "Health Insurance for UAE Freelancers (2026 Guide) — SoloKit",
  description:
    "UAE freelancers must get their own health insurance — here's how. Compare Dubai vs Abu Dhabi requirements, AED costs, best plans, and what happens if you skip it.",
  alternates: { canonical: "/blog/freelance-health-insurance-uae" },
  openGraph: {
    title: "Health Insurance for Freelancers in the UAE (2026 Guide)",
    description:
      "UAE freelancers must get their own health insurance — here's how. Compare Dubai vs Abu Dhabi requirements, AED costs, best plans, and what happens if you skip it.",
    type: "article",
    url: "/blog/freelance-health-insurance-uae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Insurance for Freelancers in the UAE (2026 Guide)",
    description:
      "UAE freelancers must get their own health insurance — here's how. Compare Dubai vs Abu Dhabi requirements, AED costs, best plans, and what happens if you skip it.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Health Insurance for Freelancers in the UAE (2026 Guide)",
  description:
    "UAE freelancers must get their own health insurance — here's how. Compare Dubai vs Abu Dhabi requirements, AED costs, best plans, and what happens if you skip it.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: `${siteUrl}/blog/freelance-health-insurance-uae`,
  mainEntityOfPage: `${siteUrl}/blog/freelance-health-insurance-uae`,
  image: `${siteUrl}/og-image.png`,
  keywords: [
    "health insurance freelancers UAE",
    "freelance health insurance Dubai",
    "Abu Dhabi health insurance freelancer",
    "DHA health insurance Dubai",
    "Daman health insurance UAE",
    "cheapest health insurance UAE freelancer",
  ],
};

export default function FreelanceHealthInsuranceUAEPage() {
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
            <span className="text-gray-600">Health Insurance UAE Freelancers</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Freelance Setup</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Health Insurance for Freelancers in the UAE (2026 Guide)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              The moment you leave your employer, your health insurance ends. For most new UAE freelancers,
              that realisation arrives with a jolt — especially in Dubai and Abu Dhabi, where health
              insurance isn&apos;t optional.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>Updated June 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 600–1,200", label: "Dubai EBP minimum annual cost" },
              { value: "AED 500/mo", label: "DHA fine for non-compliance" },
              { value: "AED 150,000", label: "EBP annual benefit limit" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">Key Takeaways</p>
            <ul className="space-y-1 text-sm text-emerald-800">
              <li>→ <strong>Health insurance is mandatory</strong> in Dubai and Abu Dhabi — not optional</li>
              <li>→ <strong>Basic plans start from AED 600–1,200/year</strong> in Dubai; more in Abu Dhabi</li>
              <li>→ <strong>Operating without cover = fines + visa renewal risk</strong></li>
              <li>→ <strong>Best options for freelancers:</strong> Daman, AXA Gulf, BUPA Arabia</li>
            </ul>
          </div>

          {/* Is It Mandatory */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Is Health Insurance Mandatory in the UAE?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Yes — but the rules differ by emirate. In <strong>Dubai</strong> and <strong>Abu Dhabi</strong>,
            health insurance is a legal requirement for all residents, including freelancers. This is not a
            recommendation or best practice. It is a condition of holding a valid UAE residence visa.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            When you were employed, your company handled this. Now that you&apos;re self-employed, you
            are the employer — and therefore responsible for covering yourself and any dependants you
            sponsor on your visa.
          </p>

          {/* Dubai Requirements */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Dubai Requirements (DHA)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Dubai Health Authority (DHA)</strong> mandates health insurance for all Dubai
            residents. The minimum standard is the <strong>Essential Benefits Plan (EBP)</strong>.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Essential Benefits Plan (EBP) — Minimum Dubai Cover</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-emerald-500">✓</span>Annual benefit limit: <strong>AED 150,000</strong></li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span>Inpatient: covered (up to the annual limit)</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span>Outpatient: covered with 20% co-pay</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span>Emergency: covered UAE-wide</li>
              <li className="flex gap-2"><span className="text-amber-500">⚠</span>Maternity: basic only</li>
              <li className="flex gap-2"><span className="text-amber-500">⚠</span>Dental and optical: not included</li>
              <li className="flex gap-2"><span className="text-amber-500">⚠</span>Pre-existing conditions: covered after 6-month waiting period</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-amber-900 mb-1">⚠️ Fines for non-compliance</p>
            <p className="text-sm text-amber-800">
              DHA can issue fines of <strong>AED 500 per month</strong> per uninsured individual.
              These fines accumulate and must be paid before you can renew your visa or Emirates ID.
            </p>
          </div>

          {/* Abu Dhabi Requirements */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Abu Dhabi Requirements (DoH)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Abu Dhabi&apos;s minimum requirement is typically higher than Dubai&apos;s EBP — plans tend to offer
            broader coverage and wider networks, which comes at a higher price.
            Expect to pay <strong>AED 1,500–3,500/year</strong> for a basic Abu Dhabi-compliant plan.
            The most common provider is <strong>Daman</strong> (the National Health Insurance Company).
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-amber-900 mb-1">⚠️ Important distinction</p>
            <p className="text-sm text-amber-800">
              If your freelance permit is issued by an Abu Dhabi-based free zone (like twofour54, ADGM, or
              Masdar City), your health insurance must comply with DoH standards — even if you live in Dubai.
              Many freelancers miss this.
            </p>
          </div>

          {/* How to Get It */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            How to Get Health Insurance as a Freelancer
          </h2>

          <div className="space-y-4 mb-6">
            {[
              {
                option: "Option 1: Through Your Free Zone",
                detail: "Many UAE free zones include a basic health insurance plan as part of their freelance permit package or offer it as an add-on. This is usually the easiest route — one application, bundled with your permit renewal.",
              },
              {
                option: "Option 2: Directly Through an Insurer",
                detail: "Buy directly from Daman, AXA Gulf, BUPA Arabia, or Al Buhaira via their websites or branches. Most insurers now have online quote tools. Have your Emirates ID, passport, and visa page ready.",
              },
              {
                option: "Option 3: Via an Insurance Broker",
                detail: "Platforms like PolicyBazaar UAE and Bayzat compare multiple insurers simultaneously. Brokers earn a commission from the insurer, so there's usually no direct cost to you. Best option for non-standard situations.",
              },
            ].map((item) => (
              <div key={item.option} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.option}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Best Plans Table */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Best Health Insurance Options for UAE Freelancers (2026)
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 border border-gray-700 font-semibold">Insurer</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Annual Cost (AED)</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { insurer: "Daman (National)", cost: "700–2,500", costColor: "text-emerald-700", best: "Abu Dhabi residents; solid network" },
                  { insurer: "AXA Gulf (Al Buhaira)", cost: "900–3,500", costColor: "text-emerald-700", best: "Dubai freelancers; good outpatient cover" },
                  { insurer: "BUPA Arabia", cost: "1,800–5,000", costColor: "text-amber-700", best: "Wider network; international cover add-on" },
                  { insurer: "Oman Insurance (Orient)", cost: "800–2,800", costColor: "text-emerald-700", best: "Competitive pricing; good for Dubai EBP" },
                  { insurer: "Nextcare / RSA", cost: "1,500–6,000", costColor: "text-amber-700", best: "Freelancers needing dental/optical add-ons" },
                  { insurer: "Metlife UAE", cost: "3,000–8,000", costColor: "text-red-600", best: "High earners wanting comprehensive cover" },
                ].map((row, i) => (
                  <tr key={row.insurer} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-3 border border-gray-200 font-medium">{row.insurer}</td>
                    <td className={`p-3 border border-gray-200 ${row.costColor}`}>{row.cost}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What to Look For */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            What to Look For in a Plan
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { aspect: "Inpatient vs Outpatient", detail: "Inpatient (hospitalisation) cover is the non-negotiable minimum. Outpatient cover matters more for day-to-day health — GP visits, specialist consultations, lab tests, prescriptions." },
              { aspect: "Network Size", detail: "Check that your preferred clinic and hospital are in the insurer's network before buying. Daman has one of the largest networks in the UAE." },
              { aspect: "Co-pay & Deductibles", detail: "Most UAE plans charge a co-pay (10–20% of each claim). Higher deductible plans have lower premiums — useful if you rarely visit the doctor." },
              { aspect: "Pre-existing Conditions", detail: "Most basic plans exclude pre-existing conditions for 6–12 months. If you have a chronic condition, look for plans with shorter waiting periods." },
              { aspect: "Annual Benefit Limit", detail: "EBP plans offer AED 150,000. Mid-range plans offer AED 500,000–1,000,000. Premium plans are often unlimited. For most healthy freelancers, AED 500,000 is adequate." },
              { aspect: "Dental & Optical", detail: "Usually not included in basic or EBP plans. Can be added as a rider for AED 200–800/year. Worth adding if you're likely to need dental work." },
            ].map((item) => (
              <div key={item.aspect} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.aspect}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Tips to Lower Premium */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Tips to Lower Your Health Insurance Premium
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { tip: "Choose a higher excess/deductible", detail: "If you're young and generally healthy, opt for a plan with a higher deductible in exchange for a lower annual premium." },
              { tip: "Use a broker to compare", detail: "Platforms like PolicyBazaar UAE compare 10+ insurers simultaneously. The same coverage level can vary by AED 500–1,500 per year between providers." },
              { tip: "Pay annually, not monthly", detail: "Most insurers charge a 5–10% loading on monthly payment plans. If you can afford the annual premium upfront, you'll pay less overall." },
            ].map((item) => (
              <li key={item.tip} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{item.tip}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/products/solokit-freelance-os" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/freelance-visa-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ How to Get a Freelance Visa in the UAE (Full Guide)</Link>
              <Link href="/blog/freelance-tax-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ Do Freelancers Pay Tax in the UAE? (2026 Guide)</Link>
              <Link href="/blog/freelance-vs-salary-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ Freelance vs Salary in UAE — What Actually Pays More?</Link>
              <Link href="/blog/best-banks-freelancers-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ Best Banks for Freelancers in the UAE (2026)</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
