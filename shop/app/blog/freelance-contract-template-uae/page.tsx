import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Contract Template UAE (2026) — What to Include & Why",
  description:
    "A complete freelance contract template for UAE-based freelancers. 9 essential clauses, scope creep protection, payment terms, and legal tips for working in Dubai.",
  alternates: { canonical: "/blog/freelance-contract-template-uae" },
  openGraph: {
    title: "Freelance Contract Template UAE (2026)",
    description: "9 essential clauses every UAE freelancer needs in their client contracts — plus a free template outline.",
    type: "article",
    url: "/blog/freelance-contract-template-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Contract Template UAE (2026) — What to Include & Why",
  description:
    "A complete freelance contract template for UAE-based freelancers. 9 essential clauses, scope creep protection, payment terms, and legal tips.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-contract-template-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-contract-template-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "freelance contract template UAE",
    "freelance contract Dubai",
    "freelancer agreement UAE",
    "freelance service agreement UAE",
    "freelance contract clauses UAE",
  ],
};

export default function FreelanceContractTemplateUAEPage() {
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
          <span>Freelance Contract Template UAE</span>
        </nav>

        {/* Header */}
        
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">CLIENT WORK</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Contract Template UAE (2026) — What to Include & Why</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">A complete freelance contract template for UAE-based freelancers. 9 essential clauses, scope creep protection, payment terms, and legal tips for working in Dubai.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>9 min read</span>
          </div>
        </div>


        {/* Why contracts matter */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-red-900 mb-2">Why this matters in the UAE specifically</h2>
          <p className="text-red-800 text-sm leading-relaxed">
            UAE civil courts recognize written service agreements. If a client doesn&apos;t pay, a
            signed contract with clear payment terms is your primary evidence. WhatsApp messages help
            but aren&apos;t as strong. Contracts also set professional expectations — clients who sign
            formal agreements are less likely to add unpaid work.
          </p>
        </div>

        {/* The 9 clauses */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6">9 Essential Contract Clauses</h2>

          <div className="space-y-6">
            {[
              {
                n: "1",
                title: "Scope of Work",
                why: "The most important clause. Defines exactly what you're delivering — and what you're not.",
                include: [
                  "Specific deliverables (not 'website' — list each page, feature, and format)",
                  "What's explicitly excluded (e.g. 'SEO copywriting is not included')",
                  "File formats for final deliverables",
                  "Who provides what (copy, images, brand assets)",
                ],
                example: "\"Deliverables: 5-page WordPress website including Home, About, Services, Portfolio, Contact. Does NOT include blog setup, SEO optimization, or content writing.\"",
              },
              {
                n: "2",
                title: "Payment Terms",
                why: "Defines how much, when, and what happens if they don't pay.",
                include: [
                  "Total fee in AED (or USD if international client)",
                  "Deposit amount (recommend 30-50% upfront)",
                  "Payment schedule tied to milestones",
                  "Late payment fee (e.g. 2% per week after due date)",
                  "Bank account or payment method details",
                ],
                example: "\"Fee: AED 12,000. 50% (AED 6,000) due upon signing. Remaining 50% due within 7 days of final delivery. Late payments accrue 2% per week.\"",
              },
              {
                n: "3",
                title: "Timeline & Delivery",
                why: "Sets clear expectations and protects you from indefinite projects.",
                include: [
                  "Project start date",
                  "Key milestone dates",
                  "Final delivery date",
                  "Clause: timeline pauses if client delays feedback",
                ],
                example: "\"Project commences on [date]. Timeline assumes client feedback within 3 business days of each submission. Delays in client feedback extend the timeline accordingly.\"",
              },
              {
                n: "4",
                title: "Revision Policy",
                why: "Scope creep's #1 entry point is undefined revisions.",
                include: [
                  "Number of revision rounds included (e.g. 2 rounds)",
                  "What counts as a revision vs. a new request",
                  "Rate for additional revisions beyond scope",
                ],
                example: "\"This contract includes 2 rounds of revisions. Additional revision rounds are billed at AED 200/hour. Changes to the original brief constitute new scope.\"",
              },
              {
                n: "5",
                title: "Intellectual Property & Ownership",
                why: "Without this clause, IP ownership is ambiguous under UAE law.",
                include: [
                  "Who owns the work before payment (you do)",
                  "Full IP transfer to client upon final payment",
                  "Your right to display work in your portfolio (unless confidential)",
                ],
                example: "\"All intellectual property remains with [Freelancer Name] until full payment is received. Upon receipt of final payment, all rights transfer to the client. Freelancer retains the right to display the work in their portfolio unless client requests otherwise in writing.\"",
              },
              {
                n: "6",
                title: "Confidentiality",
                why: "Protects client information and builds trust with corporate clients.",
                include: [
                  "What's considered confidential (business data, strategy, unreleased products)",
                  "Duration of confidentiality (typically 2-3 years)",
                  "Carve-outs (public information, info from third parties)",
                ],
                example: "\"Freelancer agrees to keep all client business information confidential for 2 years from the project end date. This does not apply to information already in the public domain.\"",
              },
              {
                n: "7",
                title: "Termination Clause",
                why: "What happens if either party wants to stop mid-project.",
                include: [
                  "Notice period for termination (e.g. 7 days written notice)",
                  "Payment for work completed to date",
                  "Return of client materials",
                  "Whether deposit is refundable on early termination",
                ],
                example: "\"Either party may terminate this agreement with 7 days written notice. In case of client-initiated termination, client owes payment for all work completed to the date of notice. Deposit is non-refundable.\"",
              },
              {
                n: "8",
                title: "Governing Law & Dispute Resolution",
                why: "Specifies which country's laws apply if things go wrong.",
                include: [
                  "Governing jurisdiction (UAE or a specific emirate)",
                  "Dispute resolution method (negotiation first, then Dubai courts or arbitration)",
                ],
                example: "\"This agreement is governed by the laws of the UAE. Any disputes shall first be resolved by good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to the courts of Dubai.\"",
              },
              {
                n: "9",
                title: "Limitation of Liability",
                why: "Caps your exposure if something goes wrong after delivery.",
                include: [
                  "Your total liability is capped at the fees paid for the project",
                  "No liability for indirect or consequential damages (lost profits, etc.)",
                ],
                example: "\"Freelancer's total liability under this contract shall not exceed the fees paid by client for the services. Freelancer is not liable for indirect, incidental, or consequential damages.\"",
              },
            ].map(({ n, title, why, include, example }) => (
              <div key={n} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 px-5 py-4 flex items-start gap-3">
                  <span className="bg-emerald-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{why}</p>
                  </div>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">What to include</p>
                    <ul className="space-y-1">
                      {include.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-emerald-700 mb-1">Example language</p>
                    <p className="text-xs text-emerald-800 leading-relaxed italic">{example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to send */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">How to Send Your Contract</h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            A contract is only effective if the client signs it. Here&apos;s the easiest workflow:
          </p>
          <div className="space-y-3">
            {[
              { tool: "DocuSign / HelloSign", use: "Most professional. Client signs electronically. Both parties get a signed PDF. Costs ~AED 100-300/month." },
              { tool: "PDF + email reply", use: "Send a PDF, ask client to reply with 'I agree to the above terms'. Courts accept email confirmation as a valid agreement in UAE." },
              { tool: "Google Docs + signature image", use: "Client adds their typed name and title. Less formal but still a documented agreement." },
              { tool: "WhatsApp screenshot (last resort)", use: "Not a substitute for a contract. Use only as a fallback if client refuses a proper agreement." },
            ].map(({ tool, use }) => (
              <div key={tool} className="border border-gray-200 rounded-lg p-4 flex gap-3">
                <span className="text-gray-300 shrink-0">→</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{tool}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">5 Mistakes UAE Freelancers Make With Contracts</h2>
          <div className="space-y-4">
            {[
              { title: "Starting work before the deposit clears", body: "Never start. If a client won't pay a deposit, they're showing you how they'll treat the final invoice. The deposit also gives them skin in the game." },
              { title: "Writing the scope in general terms", body: "'Website design and development' is not scope. 'Five-page WordPress website with contact form, no e-commerce, using provided brand assets' is scope." },
              { title: "No late payment clause", body: "Without a fee for late payment, there's no incentive for clients to pay on time. Even a 2% weekly fee makes clients prioritize your invoice." },
              { title: "Sending a contract only after problems arise", body: "The contract needs to be signed before work begins, not when you're already in a dispute. By then it's too late." },
              { title: "Using a template from a different country's laws", body: "A US or UK contract template may reference laws that don't apply in UAE. Use UAE-relevant language or have a local lawyer review it once." },
            ].map(({ title, body }, i) => (
              <div key={i} className="flex gap-3">
                <span className="bg-red-100 text-red-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900 mb-0.5">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick checklist */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-4">Before You Start Any Project — Checklist</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Contract sent and signed by both parties",
              "Deposit received (minimum 30%)",
              "Scope clearly defined in writing",
              "Revision limit specified",
              "Payment schedule agreed",
              "Delivery timeline confirmed",
              "Client has provided all required assets (brief, images, copy)",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-green-400 shrink-0">□</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10 text-center">
          <p className="text-sm text-gray-500 mb-2">All the systems that protect your freelance business</p>
          <h2 className="text-xl font-bold mb-3">SOP Starter Pack — 50 Ready-to-Use Templates</h2>
          <p className="text-gray-600 text-sm mb-6">
            Includes client onboarding SOPs, proposal templates, scope creep response scripts,
            and invoice follow-up sequences — all ready to customize and use.
          </p>
          <Link
            href="/products/sop-starter-pack"
            className="inline-block bg-gradient-to-br from-gray-900 to-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            See the SOP Pack →
          </Link>
        </div>

        {/* Further Reading */}
        <section>
          <h2 className="text-lg font-bold mb-4">Further Reading</h2>
          <div className="grid gap-3">
            {[
              { href: "/blog/client-onboarding-freelance-uae", label: "Client Onboarding Process for UAE Freelancers" },
              { href: "/blog/late-payment-freelance-uae", label: "How to Chase Late Payments as a Freelancer in UAE" },
              { href: "/blog/freelance-proposal-tips-uae", label: "How to Write a Freelance Proposal That Wins" },
              { href: "/blog/freelance-rate-calculator-uae", label: "Freelance Rate Calculator UAE" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-400">→</span>
                {label}
              </Link>
            ))}
          </div>
        </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
