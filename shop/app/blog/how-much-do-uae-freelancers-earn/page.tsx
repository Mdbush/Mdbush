import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Do Freelancers Earn in UAE? (2026 Income Guide) — SoloKit",
  description:
    "Real income data for UAE freelancers in 2026. Monthly income ranges by profession, experience level, and billing model — plus what separates AED 10K earners from AED 50K earners.",
  alternates: { canonical: "/blog/how-much-do-uae-freelancers-earn" },
  openGraph: {
    title: "How Much Do Freelancers Earn in UAE? (2026 Income Guide)",
    description:
      "UAE freelancer income ranges by profession and experience level — plus what it takes to move from AED 10K to AED 50K per month.",
    type: "article",
    url: "/blog/how-much-do-uae-freelancers-earn",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Do Freelancers Earn in UAE? (2026 Income Guide)",
  description:
    "Real income data for UAE freelancers in 2026. Monthly income ranges by profession, experience level, and billing model — plus what separates AED 10K earners from AED 50K earners.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-much-do-uae-freelancers-earn",
  mainEntityOfPage: "https://solokit.cloud/blog/how-much-do-uae-freelancers-earn",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "UAE freelancer income",
    "how much do freelancers earn in UAE",
    "Dubai freelancer salary",
    "freelance rates UAE",
    "UAE freelancer income 2026",
    "freelance income Dubai",
  ],
};

const professions = [
  { name: "Web / App Developer", entry: "AED 10K–15K", mid: "AED 20K–40K", senior: "AED 40K–80K" },
  { name: "UX / UI Designer", entry: "AED 8K–12K", mid: "AED 15K–30K", senior: "AED 30K–60K" },
  { name: "Copywriter / Content", entry: "AED 6K–10K", mid: "AED 12K–25K", senior: "AED 25K–50K" },
  { name: "Marketing Consultant", entry: "AED 10K–15K", mid: "AED 20K–40K", senior: "AED 40K–70K" },
  { name: "Business Consultant", entry: "AED 12K–20K", mid: "AED 25K–50K", senior: "AED 50K–100K" },
  { name: "Graphic Designer", entry: "AED 6K–10K", mid: "AED 12K–22K", senior: "AED 22K–45K" },
  { name: "Video Editor", entry: "AED 6K–8K", mid: "AED 10K–20K", senior: "AED 20K–40K" },
  { name: "Social Media Manager", entry: "AED 5K–8K", mid: "AED 8K–18K", senior: "AED 18K–35K" },
];

export default function HowMuchDoUAEFreelancersEarnPage() {
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
            <span className="text-gray-600">How Much Do UAE Freelancers Earn?</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Business</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How Much Do Freelancers Earn in UAE? (2026 Income Guide)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Freelancer income in the UAE varies enormously — from AED 8,000/month for someone just
              starting out to AED 100,000+/month for experienced consultants with the right clients.
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
              { value: "AED 8–15K", label: "Entry-level monthly income" },
              { value: "AED 35–80K+", label: "Senior-level monthly income" },
              { value: "AED 160K+", label: "Extra retained vs UK equivalent per year" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Answer */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">Quick Answer</p>
            <ul className="space-y-1 text-sm text-emerald-800">
              <li>→ <strong>Entry level (0–2 years):</strong> AED 8,000–15,000/month</li>
              <li>→ <strong>Mid level (3–6 years):</strong> AED 15,000–35,000/month</li>
              <li>→ <strong>Senior (6+ years):</strong> AED 35,000–80,000+/month</li>
            </ul>
          </div>

          {/* Experience Level */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            1. Income by Experience Level
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                badge: "0–2 years",
                label: "Entry Level",
                income: "AED 8,000–15,000/month",
                detail: "Building a portfolio, taking on smaller clients, learning to price and pitch. Income is often inconsistent. Focus is on landing 3–5 anchor clients.",
              },
              {
                badge: "3–6 years",
                label: "Mid Level",
                income: "AED 15,000–35,000/month",
                detail: "More referrals, clearer positioning, starting to charge for value rather than hours. Retainer clients begin appearing.",
              },
              {
                badge: "6+ years",
                label: "Senior Level",
                income: "AED 35,000–80,000+/month",
                detail: "Established reputation, high-value clients, retainer-heavy income. Often specialised in a specific niche or industry.",
              },
            ].map((level) => (
              <div key={level.label} className="border border-gray-200 rounded-xl p-5">
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded mb-2 inline-block">{level.badge}</span>
                <h3 className="font-semibold text-gray-900 mb-1">{level.label}</h3>
                <p className="text-sm font-bold text-gray-900 mb-2">{level.income}</p>
                <p className="text-xs text-gray-500">{level.detail}</p>
              </div>
            ))}
          </div>

          {/* By Profession */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            2. Income by Profession (Monthly)
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 border border-gray-700 font-semibold">Profession</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Entry</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Mid</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Senior</th>
                </tr>
              </thead>
              <tbody>
                {professions.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-3 border border-gray-200 font-medium">{row.name}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.entry}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.mid}</td>
                    <td className="p-3 border border-gray-200 text-emerald-700 font-medium">{row.senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-amber-900 mb-1">⚠️ Important</p>
            <p className="text-sm text-amber-800">
              Billing rate is not the same as take-home income. A freelancer billing AED 30,000/month may
              take home AED 22,000–25,000 after business costs (permit, software, marketing, co-working).
            </p>
          </div>

          {/* What Separates */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            3. What Separates AED 10K from AED 50K Earners
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { factor: "Pricing model", detail: "Hourly billing caps your income at the number of hours you work. Freelancers who move to project-based and then retainer-based pricing consistently earn more for the same or fewer hours." },
              { factor: "Client type", detail: "Early-stage freelancers often take local startup clients with small budgets. Mid-to-senior earners work with enterprise clients, funded companies, and international brands. The budget difference can be 3–10x." },
              { factor: "Specialisation", detail: "Generalists compete on price. Specialists command premium rates. A 'digital marketer' competes with thousands. A 'paid acquisition specialist for Series A SaaS companies' competes with dozens." },
              { factor: "Pipeline and systems", detail: "Reactive freelancers wait for inbound work and have income gaps between projects. High earners have a proactive pipeline: referral systems, case studies, consistent outreach, and a waiting list." },
              { factor: "Geography of clients", detail: "UAE-local clients pay in AED. International clients (US, UK, EU) pay at rates 2–4x higher than comparable UAE projects. The best-paid UAE freelancers often serve international clients while living tax-free in Dubai." },
            ].map((item) => (
              <li key={item.factor} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{item.factor}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          {/* UAE Tax Advantage */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            4. The UAE Tax Advantage
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most overlooked advantages of freelancing in the UAE is the tax position.
            There is <strong>zero personal income tax</strong> — every dirham you earn is yours.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="text-left p-3 border border-emerald-700 font-semibold">Scenario</th>
                  <th className="text-left p-3 border border-emerald-700 font-semibold">Gross Earning</th>
                  <th className="text-left p-3 border border-emerald-700 font-semibold">Approximate Take-Home</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">UAE freelancer</td>
                  <td className="p-3 border border-gray-200">AED 35,000/month</td>
                  <td className="p-3 border border-gray-200 text-emerald-700 font-medium">AED 35,000/month</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">UK salaried employee (£75K)</td>
                  <td className="p-3 border border-gray-200">~AED 35,000/month equivalent</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-medium">~AED 21,000/month (after ~40% tax)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Reality Check */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-amber-900 mb-1">⚠️ Reality Check</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              The senior income figures — AED 40K, 60K, 100K/month — are real, but they represent freelancers
              who have been building their business for 3–5+ years with established client relationships, clear
              positioning, and refined systems. Plan for AED 8K–15K in your first year, AED 20K–30K by year
              two or three, and build from there.
            </p>
          </div>

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
              <Link href="/blog/freelance-rate-calculator-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ Freelance Rate Calculator: How to Price Your Work in AED</Link>
              <Link href="/blog/how-to-get-international-clients-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ How to Get International Clients as a UAE Freelancer</Link>
              <Link href="/blog/freelance-vs-salary-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ Freelance vs Salary in UAE — Which Pays More?</Link>
              <Link href="/blog/how-to-scale-freelance-business-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ How to Scale a Freelance Business in the UAE</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
