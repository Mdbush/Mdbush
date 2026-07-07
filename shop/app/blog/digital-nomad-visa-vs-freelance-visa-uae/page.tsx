import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Nomad Visa vs Freelance Visa UAE: Which Is Right for You? (2026) — SoloKit",
  description:
    "Comparing the UAE Digital Nomad Visa (Remote Work Visa) with the standard Freelance Permit/Visa. Cost, who each is for, eligibility, and how to choose.",
  alternates: { canonical: "/blog/digital-nomad-visa-vs-freelance-visa-uae" },
  openGraph: {
    title: "Digital Nomad Visa vs Freelance Visa UAE: Which Is Right for You? (2026)",
    description:
      "UAE has two visa types for independent workers — they're for very different situations. Here's the full comparison.",
    type: "article",
    url: "/blog/digital-nomad-visa-vs-freelance-visa-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Digital Nomad Visa vs Freelance Visa UAE: Which Is Right for You? (2026)",
  description:
    "Comparing the UAE Digital Nomad Visa (Remote Work Visa) with the standard Freelance Permit/Visa. Cost, who each is for, eligibility, and how to choose.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/digital-nomad-visa-vs-freelance-visa-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/digital-nomad-visa-vs-freelance-visa-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "digital nomad visa UAE",
    "freelance visa UAE",
    "remote work visa UAE",
    "UAE freelance permit",
    "digital nomad vs freelance visa UAE",
    "UAE visa for freelancers",
  ],
};

export default function DigitalNomadVsFreelanceVisaUAEPage() {
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
            <span className="text-gray-600">Digital Nomad vs Freelance Visa UAE</span>
          </nav>

          {/* Hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Business Setup</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Digital Nomad Visa vs Freelance Visa UAE: Which Is Right for You? (2026)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              The UAE offers two distinct pathways for independent workers. They look similar on the surface —
              but they&apos;re designed for completely different situations. Choosing the wrong one could leave you
              unable to work legally for local clients.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>Updated June 2026</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "~AED 6,500", label: "Digital Nomad Visa first-year cost" },
              { value: "AED 10–16K", label: "Freelance Permit first-year cost" },
              { value: "$3,500/mo", label: "Minimum income for nomad visa" },
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
            <p className="text-sm text-emerald-800 leading-relaxed">
              The <strong>Digital Nomad Visa</strong> is for people already employed or running a business
              <em> outside</em> the UAE. The <strong>Freelance Permit</strong> is for people who want to offer
              services <em>inside</em> the UAE (to UAE clients or internationally). Most people searching this
              question want the Freelance Permit.
            </p>
          </div>

          {/* Digital Nomad Visa */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            1. The UAE Digital Nomad Visa (Remote Work Visa)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Launched in 2021 and renewed with increased interest in 2024, the UAE Digital Nomad Visa
            lets you live in the UAE while working for an employer or running a business that is
            <strong> registered outside the UAE</strong>.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Who it&apos;s for</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>Remote employees working for a foreign company</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>Business owners whose company is registered abroad</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>People who earn income entirely from outside the UAE</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Eligibility</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>Prove $3,500 USD/month income from outside UAE</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>Employed by non-UAE company OR own company registered abroad</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>Valid UAE-accepted health insurance</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ What you do NOT get</p>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>✗ Legal right to work for UAE-based clients</li>
              <li>✗ UAE trade license or freelance permit</li>
              <li>✗ Official permit to offer services within the UAE market</li>
              <li>✗ Ability to issue UAE invoices as a registered business</li>
            </ul>
          </div>

          {/* Freelance Permit */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            2. UAE Freelance Permit + Residence Visa
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A Freelance Permit is issued through a UAE Free Zone — such as SHAMS (Sharjah), RAKEZ
            (Ras Al Khaimah), Dubai Media City, or Dubai Internet City. It gives you a formal UAE
            business identity, allowing you to legally offer services to clients anywhere in the
            world, including the UAE.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Who it&apos;s for</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>Anyone who wants to freelance for UAE clients</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>People building a UAE-based solo business</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>Freelancers who want to issue official UAE invoices</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Approximate costs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Freelance permit (annual)</span><span className="font-medium">AED 6–10K</span></li>
                <li className="flex justify-between"><span>Residence visa</span><span className="font-medium">AED 3.5–5K</span></li>
                <li className="flex justify-between"><span>Total first year</span><span className="font-bold text-gray-900">AED 10–16K</span></li>
                <li className="flex justify-between"><span>Annual renewal</span><span className="font-medium">AED 6–7.5K</span></li>
              </ul>
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Side-by-Side Comparison
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 border border-gray-700 font-semibold">Feature</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Digital Nomad Visa</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Freelance Permit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Who it's for", nomad: "Remote employees / foreign business owners", permit: "UAE-based freelancers offering services" },
                  { feature: "Work for UAE clients?", nomad: "No", permit: "Yes", nomadColor: "text-red-600", permitColor: "text-emerald-700" },
                  { feature: "Issue UAE invoices?", nomad: "No", permit: "Yes", nomadColor: "text-red-600", permitColor: "text-emerald-700" },
                  { feature: "First-year cost", nomad: "~AED 6,500–7,500", permit: "~AED 10,000–16,000" },
                  { feature: "Annual renewal cost", nomad: "~AED 2,000–3,500", permit: "~AED 6,000–7,500 (permit)" },
                  { feature: "UAE bank account", nomad: "Yes", permit: "Yes", nomadColor: "text-emerald-700", permitColor: "text-emerald-700" },
                  { feature: "Family sponsorship", nomad: "Yes", permit: "Yes", nomadColor: "text-emerald-700", permitColor: "text-emerald-700" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-3 border border-gray-200 font-medium">{row.feature}</td>
                    <td className={`p-3 border border-gray-200 ${row.nomadColor ?? "text-gray-600"}`}>{row.nomad}</td>
                    <td className={`p-3 border border-gray-200 ${row.permitColor ?? "text-gray-600"}`}>{row.permit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Choose */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            How to Choose
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Choose Digital Nomad Visa if:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You work remotely for a foreign employer</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You own a company registered abroad</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You have no intention of taking UAE-based clients</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You want a lower-cost option while exploring UAE</li>
              </ul>
            </div>
            <div className="border border-emerald-200 rounded-xl p-5">
              <h3 className="font-semibold text-emerald-900 mb-3">Choose Freelance Permit if:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You want to offer services to UAE-based clients</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You want to issue official UAE invoices</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You&apos;re building a client base from scratch in the UAE</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">→</span>You want full legal standing as self-employed in UAE</li>
              </ul>
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                q: "Can I upgrade from a Digital Nomad Visa to a Freelance Permit later?",
                a: "Yes. The two are separate applications. You can let your Digital Nomad Visa expire and apply for a Freelance Permit from a free zone, or apply for the permit while on the nomad visa.",
              },
              {
                q: "Can I have both at the same time?",
                a: "No. You can only hold one UAE residency visa at a time. If you get a Freelance Permit with a residence visa, that replaces any previous visa.",
              },
              {
                q: "Which free zone is cheapest for a Freelance Permit?",
                a: "SHAMS (Sharjah Media City) and RAKEZ (Ras Al Khaimah Economic Zone) are typically the most affordable options, often starting around AED 5,750–7,500/year for the permit.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
              <Link href="/blog/freelance-visa-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Get a Freelance Visa in UAE (2026)</Link>
              <Link href="/blog/freelance-tax-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Do Freelancers Pay Tax in the UAE? (2026 Complete Guide)</Link>
              <Link href="/blog/best-banks-freelancers-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Best Banks for UAE Freelancers (2026)</Link>
              <Link href="/blog/freelance-rate-calculator-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Rate Calculator: How to Price Your Work in AED</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
