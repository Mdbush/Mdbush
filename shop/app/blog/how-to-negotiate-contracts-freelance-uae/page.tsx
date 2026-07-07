import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Negotiate Contracts as a UAE Freelancer (2026): Scripts & Tactics",
  description:
    "Practical contract negotiation guide for freelancers in Dubai and Abu Dhabi. How to push back on unfair terms, negotiate payment schedules, IP rights, kill fees, and scope creep clauses — with real scripts.",
  alternates: { canonical: "/blog/how-to-negotiate-contracts-freelance-uae" },
  openGraph: {
    title: "How to Negotiate Contracts as a UAE Freelancer (2026)",
    description:
      "Scripts and tactics for negotiating payment terms, IP ownership, kill fees, and scope clauses in UAE freelance contracts.",
    type: "article",
    url: "/blog/how-to-negotiate-contracts-freelance-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Negotiate Contracts as a UAE Freelancer (2026): Scripts & Tactics",
  description:
    "Practical contract negotiation guide for freelancers in Dubai and Abu Dhabi.",
  url: `${siteUrl}/blog/how-to-negotiate-contracts-freelance-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToNegotiateContractsFreelanceUAE() {
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
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Negotiate Contracts UAE</span>
          </nav>

          {/* Header */}
          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">CLIENT WORK</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Negotiate Contracts as a UAE Freelancer (2026): Scripts & Tactics</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">Practical contract negotiation guide for freelancers in Dubai and Abu Dhabi. How to push back on unfair terms, negotiate payment schedules, IP rights, kill fees, and scope creep clauses — with real scripts.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>9 min read</span>
          </div>
        </div>


          {/* Terms That Matter Most */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Six Contract Terms That Actually Matter</h2>
          <p className="text-gray-700 mb-6">
            Most freelance contracts have 15–30 clauses. Most of them don&apos;t matter much. These six do:
          </p>

          {/* Payment Terms */}
          <div className="border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Payment Terms</h3>
            <p className="text-gray-700 text-sm mb-3">
              Many UAE corporate contracts default to net-60 or net-90 payment terms — meaning you wait
              three months after invoicing to receive money. This is standard in large corporates but brutal
              for freelancers managing cash flow.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-2">WHAT TO PUSH FOR:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ 50% upfront deposit for new clients</li>
                <li>→ Net-30 (not net-60 or net-90) for invoices</li>
                <li>→ Milestone-based payments for longer projects</li>
                <li>→ Late payment fee (1.5–3% per month) for overdue invoices</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="text-xs font-semibold text-blue-600 mb-2">SCRIPT:</div>
              <p className="text-sm text-emerald-900 italic">
                &quot;I notice payment terms are net-60. My standard is net-30, which keeps my project pipeline
                healthy and ensures I can dedicate full focus to your work. Would you be comfortable with
                net-30, or can we discuss a milestone structure that works for your accounting team?&quot;
              </p>
            </div>
          </div>

          {/* IP Ownership */}
          <div className="border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">2. IP Ownership</h3>
            <p className="text-gray-700 text-sm mb-3">
              Standard corporate contracts transfer all IP to the client on signing — sometimes even before
              you&apos;ve been paid. This matters if you create reusable assets, frameworks, or code that power
              your other client work.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-2">WHAT TO PUSH FOR:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ IP transfers only upon full payment — not before</li>
                <li>→ You retain ownership of pre-existing tools, frameworks, and methods</li>
                <li>→ Right to use the work in your portfolio (with client approval)</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="text-xs font-semibold text-blue-600 mb-2">SCRIPT:</div>
              <p className="text-sm text-emerald-900 italic">
                &quot;I&apos;m happy for all deliverables to transfer to you upon final payment. I&apos;d like to retain
                the underlying tools and methods I use across clients — these aren&apos;t project-specific assets,
                just my working toolkit. Can we adjust the IP clause to reflect that?&quot;
              </p>
            </div>
          </div>

          {/* Scope Definition */}
          <div className="border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Scope Definition</h3>
            <p className="text-gray-700 text-sm mb-3">
              Vague scope is the root cause of almost every client dispute. If the contract doesn&apos;t define
              exactly what you&apos;re delivering, revisions, and out-of-scope requests become endless.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-2">WHAT TO PUSH FOR:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Specific deliverables listed (not &quot;marketing support&quot; but &quot;two blog posts per month, max 1,500 words each&quot;)</li>
                <li>→ Number of revision rounds included</li>
                <li>→ A change order process for out-of-scope requests</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="text-xs font-semibold text-blue-600 mb-2">SCRIPT:</div>
              <p className="text-sm text-emerald-900 italic">
                &quot;The scope section describes the work broadly. To protect both of us, I&apos;d like to attach
                a Statement of Work that lists the specific deliverables, revision rounds, and a change
                order process. This way we both know exactly what&apos;s included — and what isn&apos;t.&quot;
              </p>
            </div>
          </div>

          {/* Kill Fee */}
          <div className="border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Kill Fee (Project Cancellation)</h3>
            <p className="text-gray-700 text-sm mb-3">
              Clients cancel projects. When they do, you may have already invested significant time. A kill
              fee ensures you&apos;re compensated for work done and time blocked.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-2">WHAT TO PUSH FOR:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ 25–50% of remaining fee if cancelled within 14 days of start</li>
                <li>→ Payment for all work completed to date, regardless of reason for cancellation</li>
                <li>→ Minimum notice period (7–30 days) for cancellation</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="text-xs font-semibold text-blue-600 mb-2">SCRIPT:</div>
              <p className="text-sm text-emerald-900 italic">
                &quot;I&apos;d like to add a cancellation clause. If the project is cancelled after we&apos;ve started,
                I&apos;ll invoice for all work completed plus a kill fee of 25% of the remaining balance.
                This is standard practice — it covers the pipeline opportunity I&apos;ve passed on and the
                work already done.&quot;
              </p>
            </div>
          </div>

          {/* Exclusivity / Non-compete */}
          <div className="border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">5. Exclusivity & Non-Compete Clauses</h3>
            <p className="text-gray-700 text-sm mb-3">
              Some corporate contracts include broad non-compete clauses that prevent you from working for
              competitors for 12–24 months — sometimes even after the contract ends. In the UAE, these
              are increasingly scrutinized but still enforceable in commercial contracts.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-2">WHAT TO PUSH FOR:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ Remove exclusivity during the contract unless paid extra for it</li>
                <li>→ Limit post-contract non-compete to 6 months maximum and a specific competitor list</li>
                <li>→ Geographic limitations (UAE only, not globally)</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="text-xs font-semibold text-blue-600 mb-2">SCRIPT:</div>
              <p className="text-sm text-emerald-900 italic">
                &quot;The non-compete is quite broad. I work across the industry, so I can&apos;t agree to exclude
                your competitors entirely. I can commit to not sharing confidential information or working
                on directly competing projects simultaneously — would that address your concern?&quot;
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">6. Governing Law & Dispute Resolution</h3>
            <p className="text-gray-700 text-sm mb-3">
              International contracts often specify governing law in a jurisdiction where disputes are
              expensive for you to pursue (UK courts, US courts). Domestic UAE contracts should specify
              which emirate&apos;s courts apply — Dubai courts vs. DIFC courts have different processes.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-2">WHAT TO PUSH FOR:</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>→ UAE law (Dubai or Abu Dhabi courts) for UAE-based work</li>
                <li>→ Mediation before litigation — cheaper for both parties</li>
                <li>→ DIFC courts for cross-border engagements (English common law, internationally recognized)</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <div className="text-xs font-semibold text-blue-600 mb-2">SCRIPT:</div>
              <p className="text-sm text-emerald-900 italic">
                &quot;The governing law clause specifies English courts. Since we&apos;re both operating in the UAE,
                I&apos;d prefer UAE governing law — either Dubai courts or DIFC. It&apos;s simpler and more
                practical if we ever need to resolve a dispute.&quot;
              </p>
            </div>
          </div>

          {/* How to Negotiate */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Negotiate Without Losing the Client</h2>
          <div className="space-y-3 mb-10">
            {[
              { step: "Always do it in writing", detail: "Email your redlined contract or a list of requested changes. Never negotiate verbally — there&apos;s no record, and it&apos;s easier to dismiss." },
              { step: "Explain the why", detail: "Don&apos;t just say 'no'. Explain briefly why the term is problematic for you. Clients who understand your business won&apos;t fight reasonable requests." },
              { step: "Pick your battles", detail: "Identify the two or three terms that matter most for THIS project. Don&apos;t redline everything or you&apos;ll signal that you&apos;re difficult to work with." },
              { step: "Offer alternatives, not just objections", detail: "Don&apos;t say 'I can&apos;t accept net-90' — say 'I&apos;d prefer net-30 or a milestone structure. Which works better for your team?'" },
              { step: "Have a minimum position", detail: "Know what you&apos;ll walk away from before you start. If the client won&apos;t move on IP ownership before payment AND net-90 terms, is it worth taking?" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                <div className="w-6 h-6 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.step}</div>
                  <div className="text-gray-600 text-sm">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* UAE Specific */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">UAE-Specific Contract Considerations</h2>
          <ul className="space-y-2 mb-10 text-gray-700">
            <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> <strong>Arabic contracts:</strong> In theory, the Arabic version takes precedence in UAE courts. If you receive a bilingual contract, have the Arabic version reviewed if you can — or negotiate that the English version prevails.</li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> <strong>Cheque payments:</strong> Still common in the UAE. If a client insists on paying by post-dated cheques, ensure the dates align with your milestone payments — bounced cheques are a criminal offense in the UAE, which is a surprisingly strong protection for you.</li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> <strong>Government entities:</strong> Federal and emirate government clients use standard government contracts that are very difficult to modify. Focus on the scope attachment (Statement of Work) where there is more flexibility.</li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> <strong>Free zone entities:</strong> DIFC and ADGM entities use English common law-governed contracts. These are generally more internationally standard and negotiable than mainland contracts.</li>
          </ul>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get Contract Templates Built for UAE Freelancers
            </h2>
            <p className="text-gray-300 mb-6">
              SoloKit includes a UAE freelance contract template with fair payment terms, IP clauses,
              kill fee provisions, and scope protections — ready to use and customize.
            </p>
            <Link
              href="/bundle"
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get SoloKit
            </Link>
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-contract-template-uae", label: "Freelance Contract Template for UAE Clients" },
                { href: "/blog/late-payment-freelance-uae", label: "How to Handle Late Payments as a UAE Freelancer" },
                { href: "/blog/how-to-handle-scope-creep-uae", label: "How to Handle Scope Creep as a UAE Freelancer" },
                { href: "/blog/how-to-manage-client-expectations-uae", label: "How to Manage Client Expectations UAE" },
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
