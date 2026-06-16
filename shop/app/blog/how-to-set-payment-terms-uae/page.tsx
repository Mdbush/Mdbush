import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Set Payment Terms as a UAE Freelancer (2026 Guide)",
  description:
    "How to structure payment terms that protect UAE freelancers — deposit requirements, milestone schedules, late payment clauses, net payment periods, and how to get UAE clients to accept your terms.",
  alternates: { canonical: "/blog/how-to-set-payment-terms-uae" },
  openGraph: {
    title: "How to Set Payment Terms as a UAE Freelancer (2026)",
    description:
      "Payment terms structure for UAE freelancers — deposits, milestones, late fees, and how to get clients to accept them.",
    type: "article",
    url: "/blog/how-to-set-payment-terms-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Payment Terms as a UAE Freelancer (2026 Guide)",
  description:
    "How to structure payment terms that protect UAE freelancers.",
  url: `${siteUrl}/blog/how-to-set-payment-terms-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToSetPaymentTermsUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Payment Terms UAE</span>
          </nav>

          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Set Payment Terms as a UAE Freelancer (2026 Guide)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">How to structure payment terms that protect UAE freelancers — deposit requirements, milestone schedules, late payment clauses, net payment periods, and how to get UAE clients to accept your terms.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>


          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Core Payment Term Decisions</h2>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">1. Deposit Percentage</h3>
              <p className="text-gray-600 text-sm">
                A deposit collected before work starts is the single most effective cash flow
                and risk protection tool available to UAE freelancers. Standard is 50% upfront,
                with the balance on delivery. For very short projects (under AED 5,000), some
                freelancers collect 100% upfront. For longer enterprise projects, 30–40% upfront
                is more commercially acceptable to corporate procurement departments who have
                budget approval processes. Never begin a project — write a single word, design
                a single frame, write a single line of code — without a deposit in your account.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">2. Milestone vs Single Final Payment</h3>
              <p className="text-gray-600 text-sm">
                For projects longer than 2–3 weeks, a milestone payment schedule eliminates the
                risk of completing an entire project before any meaningful payment. A standard
                structure for a 6-week project: 30% on signing, 30% at agreed midpoint milestone,
                40% on final delivery and approval. This means your maximum financial exposure
                at any point is the work between milestones rather than the entire project value.
                For retainer arrangements: monthly in advance, invoiced on the 1st, due by the 7th.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">3. Payment Period (Net Days)</h3>
              <p className="text-gray-600 text-sm">
                &quot;Net 30&quot; (payment due 30 days after invoice) is standard for larger UAE corporate
                clients, who often have internal accounts payable cycles that are hard to change.
                For SME and startup clients, negotiate Net 7 or Net 14. For the final milestone
                payment on a completed project, &quot;due on delivery&quot; or &quot;due before final files
                are released&quot; is a legitimate and common approach — withholding final files or
                source code until payment clears is standard practice and not considered adversarial
                in UAE business culture.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">4. Late Payment Fee</h3>
              <p className="text-gray-600 text-sm">
                Include a late payment clause stating that invoices unpaid after the due date
                accrue interest at 2–3% per month (24–36% annualised) until paid. UAE commercial
                law allows interest on late commercial payments. In practice, most UAE clients pay
                on time when they know a late fee exists — the clause is primarily a deterrent
                rather than a revenue source. State it clearly in your SOW or contract, not buried
                in fine print.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms by Client Type</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Client Type</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Recommended Terms</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { client: "Individual / Solopreneur", terms: "50% upfront, 50% on delivery, due on invoice", notes: "No corporate accounts payable process — expect payment immediately" },
                  { client: "UAE SME (10–100 employees)", terms: "50% upfront, 50% Net 7–14", notes: "Some SMEs have informal AP cycles; follow up proactively on day 3" },
                  { client: "UAE Startup", terms: "50% upfront, 50% Net 7", notes: "Cash flow is variable — upfront deposit is non-negotiable protection" },
                  { client: "UAE Corporate / Enterprise", terms: "30% upfront, milestones, Net 30", notes: "Expect formal PO process; build Net 30 into your cash flow planning" },
                  { client: "Government / Semi-Government", terms: "Milestones, Net 30–60", notes: "Budget release cycles can cause delays beyond standard Net 30" },
                  { client: "International Client", terms: "50% upfront, 50% on delivery", notes: "Wise or Stripe; never wait for international SWIFT — confirm receipt before final files" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-800">{row.client}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.terms}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Present Payment Terms to UAE Clients</h2>
          <ul className="space-y-2 mb-10 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Include in your proposal, not your invoice</strong> — Payment terms buried in invoice footer notes are easy to overlook and dispute. State them clearly in the proposal and SOW so the client signs them at the start of the engagement, not when payment is due.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Frame the deposit as standard process, not distrust</strong> — &quot;My standard process is 50% to start and 50% on final delivery — here&apos;s the invoice for the first payment&quot; is non-negotiable framing. Asking permission (&quot;Would you be okay paying a deposit?&quot;) invites negotiation. UAE business culture respects direct, confident process.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Match corporate clients&apos; process requirements</strong> — Large UAE corporates often need a purchase order number, supplier registration, and approved vendor status before they can pay. Ask about their procurement process in your discovery conversation so there are no surprises when your first invoice arrives.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Accept multiple payment methods</strong> — UAE clients pay by bank transfer (most common for B2B), credit card (Stripe or PayTabs for smaller amounts), and occasionally cheque (particularly older UAE family businesses). Offering Wise for international transfers significantly speeds up payment from non-UAE clients.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Withhold deliverables, not relationships</strong> — It is legitimate and standard to withhold final source files, live site credentials, or final report PDFs until the final payment clears. Frame this as &quot;I&apos;ll send over the final files as soon as the invoice is settled&quot; rather than as a threat.</li>
          </ul>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Payment Protection Templates for UAE Freelancers
            </h2>
            <p className="text-gray-300 mb-6">
              SoloKit includes SOW templates with late payment clauses, deposit invoice templates,
              milestone schedule frameworks, and payment protection SOPs for UAE freelancers.
            </p>
            <Link
              href="/products/solokit-freelance-os"
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get SoloKit
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-handle-payment-disputes-uae", label: "How to Handle Payment Disputes as a UAE Freelancer" },
                { href: "/blog/late-payment-freelance-uae", label: "How to Chase Late Payments as a UAE Freelancer" },
                { href: "/blog/how-to-get-paid-faster-uae", label: "How to Get Paid Faster as a UAE Freelancer" },
                { href: "/blog/freelance-contract-template-uae", label: "Freelance Contract Template UAE" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-emerald-700 hover:text-emerald-900 text-sm">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        
      </main>
      <Footer />
    </>
  );
}
