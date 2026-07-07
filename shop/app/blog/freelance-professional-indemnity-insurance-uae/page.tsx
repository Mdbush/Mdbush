import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Indemnity Insurance for UAE Freelancers 2026 — Guide & Costs",
  description:
    "Do UAE freelancers need professional indemnity insurance? Providers, costs in AED, what's covered, and when PI insurance is mandatory vs optional for consultants.",
  alternates: { canonical: "/blog/freelance-professional-indemnity-insurance-uae" },
  openGraph: {
    title: "Professional Indemnity Insurance for UAE Freelancers 2026",
    description: "PI insurance for UAE freelancers: who needs it, what it costs, and the best providers.",
    type: "article",
    url: "/blog/freelance-professional-indemnity-insurance-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Professional Indemnity Insurance for UAE Freelancers 2026",
  description: "PI insurance for UAE freelancers: who needs it, what it costs, and the best providers.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-professional-indemnity-insurance-uae",
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Professional Indemnity Insurance UAE</span>
          </nav>

          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Legal & Admin</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Professional Indemnity Insurance for UAE Freelancers 2026
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              A client claims your advice cost them AED 500,000. Without professional indemnity (PI) insurance, that
              claim comes directly out of your pocket. This guide explains who needs PI insurance in the UAE, what it
              costs, and which providers to consider.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Professional indemnity insurance — also called errors and omissions (E&O) insurance — protects you if a
            client claims that your professional advice, services, or work caused them financial loss. In the UAE,
            it is not legally mandatory for most freelancers, but it is increasingly expected by corporate clients and
            is mandatory in certain regulated professions.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Who Needs Professional Indemnity Insurance in the UAE?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            You need PI insurance if your work involves giving professional advice, designing systems, managing
            financial decisions, or producing outputs that clients rely on to make consequential decisions.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Profession</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">PI Mandatory?</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Legal consultants (DIFC/ADGM registered)", "Yes — regulated requirement", "Very High"],
                  ["Financial advisors (DFSA licensed)", "Yes — DFSA requirement", "Very High"],
                  ["Auditors and accountants (ICAI/ACCA)", "Strongly recommended", "High"],
                  ["Management consultants", "No — but expected by corporates", "High"],
                  ["IT consultants / architects", "No — but expected for large projects", "Medium-High"],
                  ["Cybersecurity consultants", "No — but near-essential", "Very High"],
                  ["Healthcare consultants (DHA licensed)", "Yes for clinical work", "Very High"],
                  ["Marketing and creative consultants", "No — but useful for larger clients", "Low-Medium"],
                  ["Designers and developers (web/app)", "No — rarely required", "Low"],
                ].map(([prof, mandatory, risk]) => (
                  <tr key={prof}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{prof}</td>
                    <td className="px-4 py-3 text-gray-600">{mandatory}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        risk.startsWith("Very") ? "bg-red-100 text-red-700" :
                        risk.startsWith("High") || risk.startsWith("Medium") ? "bg-orange-100 text-orange-700" :
                        "bg-emerald-100 text-emerald-700"
                      }`}>{risk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What Does PI Insurance Cover?
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { covered: "Claims of negligence", detail: "A client claims your advice was wrong and cost them money. PI covers your legal defense costs and any settlement or judgment." },
              { covered: "Errors and omissions", detail: "A mistake in a report, calculation, design specification, or recommendation that caused client loss." },
              { covered: "Breach of professional duty", detail: "Failure to meet the standard of care expected of a professional in your field." },
              { covered: "Intellectual property disputes", detail: "Some PI policies include coverage if a client claims your work infringed their IP or a third party's IP." },
              { covered: "Legal defense costs", detail: "Even if you are found not liable, defending a claim can cost AED 30,000–100,000 in legal fees. PI covers this." },
            ].map(({ covered, detail }) => (
              <li key={covered} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                <span><strong className="text-gray-900">{covered}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Costs and Providers in the UAE
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Cover Limit</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Annual Premium (approx.)</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Suitable For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["AED 500,000", "AED 2,500–4,000/yr", "Sole traders, small project work"],
                  ["AED 1,000,000", "AED 4,000–7,000/yr", "Consultants with regular corporate clients"],
                  ["AED 2,500,000", "AED 8,000–14,000/yr", "High-value projects, financial/legal advisory"],
                  ["AED 5,000,000+", "AED 15,000–30,000+/yr", "Enterprise accounts, DIFC/ADGM regulated"],
                ].map(([limit, premium, suitable]) => (
                  <tr key={limit}>
                    <td className="px-4 py-3 text-gray-800 font-bold">{limit}</td>
                    <td className="px-4 py-3 text-emerald-600 font-semibold">{premium}</td>
                    <td className="px-4 py-3 text-gray-500">{suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Key UAE providers for professional indemnity insurance: <strong>Zurich</strong>, <strong>AIG UAE</strong>,
            <strong>QBE Insurance</strong>, <strong>RSA UAE</strong>, and <strong>Chubb</strong>. For brokered quotes,
            contact <strong>Marsh UAE</strong>, <strong>Aon UAE</strong>, or <strong>Willis Towers Watson Dubai</strong>.
            For simpler sole-trader policies, <strong>Policybazaar UAE</strong> and <strong>Bayzat</strong> offer
            online comparison.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Pro Tip: Use PI as a Selling Point</p>
            <p className="text-sm text-emerald-800">
              Add "Fully insured — AED 1M professional indemnity cover" to your proposal template and LinkedIn profile.
              It signals professionalism, reduces client risk perception, and differentiates you from uninsured
              competitors. Many corporate procurement teams require proof of PI insurance before signing contracts.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools Built for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and SOPs — everything to run a professional freelance business.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/uae-freelancer-health-insurance-guide" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Health Insurance for UAE Freelancers 2026</Link>
              <Link href="/blog/freelance-contract-template-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Contract: 9 Clauses You Must Include</Link>
              <Link href="/blog/corporate-tax-uae-freelancers-2026" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ UAE Corporate Tax for Freelancers 2026</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
