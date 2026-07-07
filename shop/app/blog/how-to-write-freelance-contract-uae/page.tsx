import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Freelance Contract in UAE 2026 — SoloKit",
  description:
    "How to write a freelance contract in UAE 2026: must-have clauses, legal tips, payment terms, IP ownership, and dispute resolution under UAE law. Practical guide.",
  alternates: { canonical: "/blog/how-to-write-freelance-contract-uae" },
  openGraph: {
    title: "How to Write a Freelance Contract in UAE 2026",
    description:
      "Must-have clauses, legal tips, payment terms, IP ownership, and dispute resolution under UAE law — a practical freelance contract guide.",
    type: "article",
    url: "/blog/how-to-write-freelance-contract-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Freelance Contract in UAE 2026",
  description:
    "Must-have clauses, legal tips, payment terms, IP ownership, and dispute resolution under UAE law.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-write-freelance-contract-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-write-freelance-contract-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "freelance contract UAE",
    "freelance agreement Dubai",
    "UAE contract law freelancer",
    "IP clause UAE freelance contract",
    "DIFC court freelance",
    "freelance invoice UAE",
  ],
};

const clauses = [
  { clause: "Scope of Work", why: "Defines exactly what you will deliver. Prevents scope creep — if it's not listed, it's not included." },
  { clause: "Payment Terms", why: "State amount, currency (AED), due date (net 15/30/45 days), and late payment penalty (2% per month is standard)." },
  { clause: "Deposit Requirement", why: "30–50% upfront protects you from non-payment. Non-refundable if client cancels after work begins." },
  { clause: "IP Ownership", why: "By default, IP created by a contractor in UAE belongs to the contractor. Assign it to the client only upon full payment." },
  { clause: "Revision Policy", why: "Cap revisions at 2 rounds per deliverable. Additional rounds billed at your hourly rate." },
  { clause: "Confidentiality / NDA", why: "Standard protection for both parties. Include client data, pricing, and project details." },
  { clause: "Termination Clause", why: "30-day written notice from either party. Client owes payment for all work completed to date." },
  { clause: "Governing Law & Jurisdiction", why: "UAE courts (Dubai Courts or Abu Dhabi courts) for local clients. DIFC Courts for international clients who prefer English common law." },
];

export default function HowToWriteFreelanceContractUAEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">How to Write a Freelance Contract UAE</span>
          </nav>

          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">LEGAL</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Write a Freelance Contract in UAE 2026
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              A proper freelance contract protects you from non-payment, scope creep, and IP disputes. Here&apos;s exactly what your UAE freelance contract needs — from must-have clauses to dispute resolution options under UAE law.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">UAE Legal Context</p>
            <ul className="space-y-1.5 text-sm text-emerald-800">
              <li>→ Contracts governed by <strong>Federal Law No. 5 of 1985</strong> (Civil Transactions Law)</li>
              <li>→ Commercial disputes: <strong>Federal Law No. 18 of 1993</strong> (Commercial Transactions Law)</li>
              <li>→ Arabic version of a bilingual contract prevails in UAE courts</li>
              <li>→ DIFC Courts operate in English under common law — favoured by international clients</li>
              <li>→ E-signatures valid under UAE Electronic Transactions Law (Federal Decree-Law No. 46 of 2021)</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            8 Must-Have Clauses in Every UAE Freelance Contract
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Clause</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {clauses.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{row.clause}</td>
                    <td className="px-4 py-3 text-gray-700">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Payment Terms: What UAE Freelancers Should Know
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Payment is the clause clients will push back on most. Standard payment structures in the UAE freelance market:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600 mb-1">50/50</p>
              <p className="text-xs text-gray-600 font-semibold mb-1">Most Common</p>
              <p className="text-xs text-gray-500">50% upfront, 50% on delivery. Standard for project-based work under AED 15,000.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600 mb-1">30/40/30</p>
              <p className="text-xs text-gray-600 font-semibold mb-1">Milestone-Based</p>
              <p className="text-xs text-gray-500">30% on signing, 40% mid-project, 30% on final delivery. Good for large projects.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600 mb-1">Monthly</p>
              <p className="text-xs text-gray-600 font-semibold mb-1">Retainer</p>
              <p className="text-xs text-gray-500">Invoice on the 1st, due by the 15th. Late payment clause: 2% per 30 days overdue.</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            UAE corporate payment cycles are notoriously slow — net 60 or net 90 is common in large enterprises. Protect yourself with a late payment clause of 2% per month on outstanding amounts. For government-adjacent clients, factor in longer payment cycles from the start.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-2">VAT note for UAE freelancers</p>
            <p className="text-sm text-emerald-800">
              If your annual revenue exceeds <strong>AED 375,000</strong>, you are required to register for VAT and charge 5% on your invoices. Include your <strong>Tax Registration Number (TRN)</strong> on all invoices. State clearly whether quoted prices are inclusive or exclusive of VAT. Clients can reclaim input VAT if they are VAT-registered themselves.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            IP Ownership: Default Rules Under UAE Law
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Under UAE Federal Law No. 7 of 2002 on copyright, intellectual property created by a freelance contractor remains owned by the creator unless explicitly transferred in writing. This is the opposite of employment — employees&apos; work product belongs to the employer; freelancers&apos; work product belongs to the freelancer by default.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your contract should include an IP assignment clause that transfers ownership to the client only upon receipt of full payment. This is your most powerful protection against non-payment: if they don&apos;t pay, the final deliverable legally stays yours.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Watch for clients who want to own &ldquo;all work product, drafts, and concepts&rdquo; — ensure this transfer is tied explicitly to payment completion. Never include unlimited revisions without a fee structure for additional rounds.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Dispute Resolution Options in UAE
          </h2>

          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Dubai Courts — Small Claims Tribunal</h3>
              <p className="text-sm text-gray-600">Handles civil disputes up to AED 500,000. Free to file online at dubaipolice.gov.ae. Proceedings in Arabic. Resolution typically in 2–4 months. Best for disputes with UAE-based clients where amount is under AED 500,000.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">DIFC Courts (Dubai International Financial Centre)</h3>
              <p className="text-sm text-gray-600">Operates in English under common law principles. Filing fees start at ~AED 7,500 for claims. Suitable for international clients or high-value disputes. Many international companies include DIFC jurisdiction clauses in their contracts.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Arbitration (DIAC)</h3>
              <p className="text-sm text-gray-600">Dubai International Arbitration Centre (DIAC) handles commercial disputes confidentially and faster than courts. Recommended for disputes over AED 250,000 where parties prefer a private resolution process.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            E-Signatures Are Legally Valid in UAE
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Under UAE Federal Decree-Law No. 46 of 2021 on Electronic Transactions and Trust Services, electronic signatures are legally binding. DocuSign, Adobe Sign, and HelloSign are all accepted. You do not need a wet ink signature to enforce a freelance contract in UAE courts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Best practice: always get a signed contract (even an e-signed email confirmation counts) before starting work. A purchase order from the client&apos;s procurement team is also legally binding if it references your proposal/quote.
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools built for UAE freelancers</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              Notion templates, AI prompts, and SOPs — including a UAE-ready freelance contract template.
            </p>
            <Link
              href="/"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-contract-template-uae", label: "UAE Freelance Contract Template (Download)" },
                { href: "/blog/how-to-negotiate-contracts-freelance-uae", label: "How to Negotiate Freelance Contracts in UAE" },
                { href: "/blog/client-red-flags-uae", label: "Client Red Flags UAE Freelancers Should Know" },
                { href: "/blog/corporate-tax-uae-freelancers-2026", label: "Corporate Tax for UAE Freelancers 2026" },
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
