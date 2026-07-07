import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Golden Visa for Freelancers: Requirements & How to Apply (2026)",
  description:
    "Can freelancers get the UAE 10-year Golden Visa? Eligibility requirements, categories, cost, and step-by-step application guide for solopreneurs.",
  alternates: { canonical: "/blog/uae-golden-visa-freelancers" },
  openGraph: {
    title: "UAE Golden Visa for Freelancers: Requirements & How to Apply (2026)",
    description: "A practical guide to UAE Golden Visa eligibility for freelancers and solopreneurs — categories, costs, and the application process.",
    type: "article",
    url: "/blog/uae-golden-visa-freelancers",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "UAE Golden Visa for Freelancers: Requirements & How to Apply (2026)",
  description: "Can freelancers get the UAE 10-year Golden Visa? Eligibility requirements, categories, and application process.",
  url: `${siteUrl}/blog/uae-golden-visa-freelancers`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const statsData = [
  { value: "10 Years", label: "Visa Validity" },
  { value: "AED 30,000/mo", label: "Min. Income (Skilled)" },
  { value: "AED 2M+", label: "Property Investment Path" },
];

const categories = [
  {
    title: "1. Investors in Real Estate",
    tag: "Most common",
    tagColor: "bg-gray-100 text-gray-600",
    body: "Own UAE property worth at least AED 2 million (a single property or combined portfolio). This is the most straightforward path for freelancers who have accumulated savings and want long-term stability.",
    note: "The property must be freehold and not financed beyond 50% of its value at time of application. Off-plan properties from approved developers can qualify once payment reaches AED 2M.",
  },
  {
    title: "2. Entrepreneurs",
    tag: "Freelancer-friendly",
    tagColor: "bg-emerald-100 text-emerald-700",
    body: "If you own a business in the UAE (including a free zone company) that is valued at or generates revenue of AED 500,000 or more per year, you may qualify under the Entrepreneur category.",
    note: "Typically requires endorsement from an accredited business incubator or proof of business impact. This path requires documentation of business performance over at least one year.",
  },
  {
    title: "3. Skilled Professionals",
    tag: "Freelancer-friendly",
    tagColor: "bg-emerald-100 text-emerald-700",
    body: "Professionals with proof of self-employment earning at least AED 30,000/month, working in priority fields including: technology, science, medicine, engineering, arts, and culture. For freelancers: demonstrate monthly earnings through bank statements, invoices, and a letter from a UAE-licensed accountant.",
    note: "",
  },
  {
    title: "4. Outstanding Talents (Creatives)",
    tag: "Award-based",
    tagColor: "bg-purple-100 text-purple-700",
    body: "Covers artists, athletes, culture creators, and digital content creators who have demonstrated recognition in their field. Requires endorsement from an approved cultural entity or ministry.",
    note: "For content creators: the UAE introduced a dedicated digital creator pathway in 2022. Requires significant following and engagement metrics — typically 100,000+ followers on a major platform.",
  },
];

const costs = [
  { item: "Application fee (GDRFA Dubai)", cost: "AED 2,800–4,500" },
  { item: "Application fee (ICA — other emirates)", cost: "AED 2,500–3,500" },
  { item: "Medical fitness test", cost: "AED 250–500" },
  { item: "Emirates ID (10-year)", cost: "AED 370" },
  { item: "PRO / typing center fees", cost: "AED 300–800" },
  { item: "Certified translation (if documents in another language)", cost: "AED 500–1,500" },
  { item: "Accountant letter (for skilled professional path)", cost: "AED 500–2,000" },
];

const steps = [
  "Confirm your eligibility under one of the approved categories. If unsure, consult a licensed PRO or immigration consultant — not just a friend's advice.",
  "Gather all required documents: passport, current visa, professional certifications, proof of income, trade license, and any required endorsements.",
  "Apply via the GDRFA Dubai smart app (if applying in Dubai) or the ICA smart services portal (for other emirates). You can also apply in person at service centers.",
  "Pay fees and submit application. Processing typically takes 15–30 business days.",
  "Receive approval in principle, then complete medical fitness test and Emirates ID biometrics (in person at an approved center).",
  "Receive visa stamp and 10-year Emirates ID. Your Golden Visa is active.",
];

export default function GoldenVisaFreelancersPage() {
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
            <span className="text-gray-600">UAE Golden Visa for Freelancers</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Visa &amp; Legal</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">UAE Golden Visa for Freelancers: Requirements &amp; How to Apply (2026)</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Can freelancers get the UAE 10-year Golden Visa? Eligibility requirements, categories, cost, and step-by-step application guide for solopreneurs.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 16, 2026</span><span>·</span><span>8 min read</span>
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
            The UAE Golden Visa is a 10-year residence visa that does not require employer sponsorship
            or renewal every 2–3 years. For freelancers, it is the holy grail of visa stability —
            you can build a long-term life in the UAE without worrying that your visa is tied to a
            trade license that costs AED 10,000+ to renew each year.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The question is: can you get it as a freelancer? The short answer is yes, but through
            specific pathways. This guide explains the categories that apply to solopreneurs and
            what it takes to qualify.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm mb-8">
            <p className="font-semibold text-emerald-900 mb-1">Official source: GDRFA and ICA</p>
            <p className="text-blue-800">
              UAE Golden Visa requirements are set by the General Directorate of Residency and
              Foreigners Affairs (GDRFA) in Dubai and the Federal Authority for Identity, Citizenship,
              Customs &amp; Port Security (ICA) for other emirates. Requirements do change — always
              verify current criteria before applying.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>What Is the UAE Golden Visa?
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Introduced in 2019 and significantly expanded in 2022, the Golden Visa gives eligible residents a 10-year self-sponsored residence visa. Key benefits over a standard visa:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              { point: "No sponsor required", detail: "you sponsor yourself" },
              { point: "10-year validity", detail: "vs 2–3 years for most other visas" },
              { point: "Multiple entries", detail: "no limit on how long you can stay outside UAE" },
              { point: "Family included", detail: "spouse and children can be sponsored regardless of age" },
              { point: "Business freedom", detail: "full ownership of UAE businesses" },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{item.point}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Golden Visa Categories Relevant to Freelancers
          </h2>

          <div className="space-y-4 mb-8">
            {categories.map((cat, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">{cat.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full shrink-0 font-semibold ${cat.tagColor}`}>{cat.tag}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{cat.body}</p>
                {cat.note && <p className="text-xs text-gray-500">{cat.note}</p>}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>The Realistic Path for Most Freelancers
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Path 1: Skilled Professional (AED 30K/month):</strong> The most accessible for high-earning freelancers. You need consistent earnings of AED 30,000/month and be in a qualifying field (tech, consulting, medical, architecture). Documentation required: 6–12 months of bank statements, invoices, valid freelance license, professional qualifications, and certified accountant letter confirming average monthly income.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Path 2: Real Estate Investment:</strong> If you have AED 2M+ in savings, buying UAE property gives you the cleanest, most straightforward path to the Golden Visa. Many long-term UAE residents choose this route once they decide to settle permanently.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Path 3: Entrepreneur (AED 500K+ business):</strong> If your free zone business consistently generates AED 500,000+ in annual revenue, you may qualify. This requires working with an accredited incubator (Hub71, Area 2071, Dubai Future Accelerators) for the endorsement letter.</span>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Cost of Applying for a Golden Visa
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-4">
            <div className="bg-gray-900 px-5 py-3"><h2 className="text-sm font-bold text-white">Golden Visa Application Costs</h2></div>
            <div className="divide-y divide-gray-100">
              {costs.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.item}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">{row.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            Total government fees typically run AED 4,000–7,500. PRO services that handle the
            full process charge AED 5,000–15,000 on top of that. A self-managed application is
            possible but takes more time and requires careful document preparation.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>How to Apply: Step by Step
          </h2>

          <div className="space-y-3 mb-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="font-bold text-emerald-600 shrink-0 mt-0.5">{i + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>Common Questions
          </h2>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Do I need to cancel my current visa first?</strong> No. You apply for the Golden Visa and cancel your existing visa only once the new one is approved. Your PRO will manage the transition.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">Can I keep my freelance license with a Golden Visa?</strong> Yes. The Golden Visa is a residence visa — it does not replace your trade or freelance license. Your residency is no longer tied to the license even if you let it lapse.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">How long can I stay outside the UAE?</strong> Unlike standard UAE residence visas (cancelled after 6 months abroad), the Golden Visa has no minimum stay requirement. You can live outside the UAE for extended periods without losing your visa status.</span>
            </li>
            <li className="flex gap-3 text-sm text-gray-700">
              <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
              <span><strong className="text-gray-900">What if I do not qualify now?</strong> Most freelancers are not yet at AED 30K/month — and that is fine. A standard 2-year free zone visa is a completely valid path while you build your income. Review your Golden Visa eligibility annually as your business grows.</span>
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/bundle" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related */}
          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-visa-uae", title: "How to Get a Freelance Visa in the UAE" },
                { href: "/blog/digital-nomad-visa-vs-freelance-visa-uae", title: "Digital Nomad Visa vs Freelance Visa UAE" },
                { href: "/blog/rakez-vs-ifza-freelance-license-uae", title: "RAKEZ vs IFZA vs Meydan: Which Free Zone?" },
                { href: "/blog/how-to-scale-freelance-business-uae", title: "How to Scale Your Freelance Business to AED 100K/Month" },
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
