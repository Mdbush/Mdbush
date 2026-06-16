import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "How to Invoice Clients as a UAE Freelancer (2026) — SoloKit",
  description:
    "Required invoice fields, VAT invoices vs simplified tax invoices, payment terms, late fee clauses, and the best invoicing tools for UAE freelancers in 2026.",
  alternates: { canonical: "/blog/how-to-invoice-as-freelancer-uae" },
  openGraph: {
    title: "How to Invoice Clients as a UAE Freelancer (2026)",
    description:
      "Required invoice fields, VAT invoices vs simplified tax invoices, payment terms, late fee clauses, and the best invoicing tools for UAE freelancers in 2026.",
    type: "article",
    url: "/blog/how-to-invoice-as-freelancer-uae",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Invoice Clients as a UAE Freelancer (2026)",
    description:
      "Required invoice fields, VAT invoices vs simplified tax invoices, payment terms, late fee clauses, and the best invoicing tools for UAE freelancers in 2026.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Invoice Clients as a UAE Freelancer (2026)",
  description:
    "Required invoice fields, VAT invoices vs simplified tax invoices, payment terms, late fee clauses, and the best invoicing tools for UAE freelancers in 2026.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: `${siteUrl}/blog/how-to-invoice-as-freelancer-uae`,
  mainEntityOfPage: `${siteUrl}/blog/how-to-invoice-as-freelancer-uae`,
  image: `${siteUrl}/og-image.png`,
  keywords: [
    "how to invoice UAE freelancer",
    "UAE freelance invoice requirements",
    "VAT invoice UAE freelancer",
    "freelance invoice template UAE",
    "payment terms UAE freelancer",
    "TRN invoice UAE",
  ],
};

export default function HowToInvoiceAsFreelancerUAEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12 text-gray-900">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-gray-700">Blog</Link>
          <span className="mx-2">›</span>
          <span>How to Invoice Clients as a UAE Freelancer</span>
        </nav>

        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Invoice Clients as a UAE Freelancer (2026)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            Required fields, VAT invoice rules, payment terms that get you paid, late fee clauses, and the best tools to invoice professionally in the UAE.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>8 min read</span>
          </div>
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-sm mb-8 leading-relaxed">
          Invoicing seems straightforward until you send your first professional invoice to a UAE corporate client and realise their accounts payable team requires fields you never included. Or you hit the VAT registration threshold and discover your existing invoice template is no longer compliant. This guide covers everything — what to include, when to charge VAT, how to set payment terms that protect you, and which tools make it easy.
        </p>

        {/* Section 1 — Required fields */}
        <section className="mb-10">
          <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What Must Every UAE Freelance Invoice Include?
          </h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            The UAE does not mandate a specific invoice format for non-VAT-registered freelancers, but there are fields that professional clients — particularly government entities, large corporates, and free zone companies — will require before processing payment. Missing fields can delay payment by weeks as the invoice goes back through approval cycles.
          </p>
          <p className="text-gray-700 text-sm mb-6 leading-relaxed">
            At minimum, every UAE freelance invoice should include your <strong>trade licence number</strong> (or freelance permit number), your bank details in full (IBAN, bank name, branch, SWIFT code), a unique invoice number, and clear payment terms. Many UAE corporate accounts payable departments also require your Emirates ID number or passport number for their internal KYC records — worth checking before you invoice a new corporate client for the first time.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Field</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Non-VAT Invoice</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">VAT Invoice</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Invoice number (sequential)", "Required", "Required"],
                  ["Invoice date", "Required", "Required"],
                  ["Your name / trading name", "Required", "Required"],
                  ["Your address", "Required", "Required"],
                  ["Trade licence / freelance permit no.", "Required", "Required"],
                  ["Client name and address", "Required", "Required"],
                  ["Description of services", "Required", "Required"],
                  ["Amount in AED", "Required", "Required"],
                  ["Bank details (IBAN, SWIFT)", "Recommended", "Required"],
                  ["Tax Registration Number (TRN)", "Not applicable", "Required"],
                  ["VAT rate (5%) per line item", "Not applicable", "Required"],
                  ["VAT amount per line item", "Not applicable", "Required"],
                  ["Total excluding VAT", "Not applicable", "Required"],
                  ["Total VAT amount", "Not applicable", "Required"],
                  ["Total including VAT", "Not applicable", "Required"],
                  ["Supply date (if different from invoice date)", "Not applicable", "Required"],
                ].map(([field, nonVat, vat], i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-sm">{field}</td>
                    <td className="p-3 border border-gray-200 text-sm">{nonVat}</td>
                    <td className="p-3 border border-gray-200 text-sm">{vat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 — VAT invoices */}
        <section className="mb-10">
          <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            VAT Invoices: The AED 10,000 Rule
          </h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Once you are VAT-registered with the Federal Tax Authority (FTA) — mandatory when your taxable supplies exceed AED 375,000 in any 12-month period, voluntary above AED 187,500 — you must issue tax invoices on all your supplies. The UAE VAT law (Federal Decree-Law No. 8 of 2017) distinguishes between two types:
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Full Tax Invoice (above AED 10,000)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Required when the total consideration including VAT exceeds AED 10,000. Must include all fields listed in the table above. This is the standard for most freelance project invoices.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Simplified Tax Invoice (AED 10,000 or below)</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Allowed when total consideration is AED 10,000 or below. Can omit certain recipient details (client address, client TRN) but must still include your TRN, VAT amount, and the words &quot;Tax Invoice&quot;. Practical for small consultations, short translation jobs, or ad hoc tasks.
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Your Tax Registration Number (TRN) is issued by the FTA on EmaraTax. It is a 15-digit number beginning with 100. It must appear on every tax invoice — its absence renders the invoice non-compliant and means your client cannot reclaim the input VAT.
          </p>
        </section>

        {/* Tip box */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-emerald-900 mb-3">Payment Terms That Actually Get You Paid</h2>
          <p className="text-emerald-800 text-sm mb-3 leading-relaxed">
            Standard UAE corporate payment terms are Net 30 or Net 45 from invoice date. Government entities often pay on Net 45–60, sometimes longer. If you are working with smaller businesses, push for Net 14 or Net 21 as your default — most will accept it without pushback.
          </p>
          <p className="text-emerald-800 text-sm mb-3 leading-relaxed">
            For new clients, require a <strong>50% upfront deposit</strong> before work begins. This is standard practice in the UAE and is widely accepted by clients who intend to pay. Clients who resist an upfront deposit on a new engagement are a yellow flag.
          </p>
          <p className="text-emerald-800 text-sm leading-relaxed">
            Include a late payment clause: a charge of <strong>1.5–2% per month</strong> on overdue amounts is standard and enforceable under UAE civil law — but it must be stated in your contract or service agreement, not just on the invoice, to carry legal weight.
          </p>
        </div>

        {/* Section 3 — Tools */}
        <section className="mb-10">
          <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Best Invoicing Tools for UAE Freelancers
          </h2>
          <p className="text-gray-700 text-sm mb-6 leading-relaxed">
            The right tool depends on your revenue stage and whether you are VAT-registered. Here is what UAE freelancers actually use:
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Wave — Free, No UAE VAT</h3>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Free</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Best for freelancers not yet VAT-registered. Clean invoicing, AED currency, expense tracking, and bank feeds. Does not generate FTA-compliant VAT returns. Good enough for most freelancers under AED 375,000/year.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Zoho Books UAE Edition</h3>
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">AED 0–150/month</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Best for VAT-registered freelancers. Free tier up to AED 150,000 revenue. Generates FTA-compliant VAT 201 returns directly. Full tax invoice and simplified tax invoice templates built in. TRN field included on all invoices. The go-to choice for UAE freelancers once they hit the VAT threshold.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">QuickBooks Online</h3>
                <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">AED 80–175/month</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Industry standard, widely known by UAE accountants. Supports VAT tracking but does not generate VAT 201 returns natively — you will need to export data and file separately on EmaraTax. Overkill for most solo freelancers but excellent if you work with a bookkeeper.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">FreshBooks</h3>
                <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">AED 60–175/month</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Purpose-built for freelancers. Excellent invoicing UI, time tracking, and client portal. Supports AED and multi-currency. No native UAE VAT 201 return generation. Best for freelancers who want polished invoicing without accounting complexity and are not yet VAT-registered.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Invoice numbering */}
        <section className="mb-10">
          <h2 className="flex items-center gap-3 text-xl font-bold mb-4">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Invoice Numbering and Record Keeping
          </h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            UAE VAT law requires that invoice numbers are sequential and unique. There is no mandated format, but a simple convention like INV-2026-001, INV-2026-002 works well. The sequence cannot have gaps — if you void an invoice, document the void rather than deleting it, because the FTA may request records during an audit.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Under UAE VAT regulations, you are required to retain tax invoice records for at least <strong>5 years</strong> (15 years for real estate-related transactions). Keep digital copies in a cloud storage system — Google Drive or Dropbox are both sufficient. Paper-only records are inadvisable for a digital freelance business.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            For non-VAT-registered freelancers, the FTA does not mandate specific record retention periods, but UAE civil law generally requires commercial records to be kept for 5 years. In practice, keeping 7 years of records is a sensible approach, especially as the Corporate Tax regime (effective June 2023) requires annual returns for freelancers earning above AED 375,000.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 mb-10">
          <p className="text-sm text-gray-400 mb-2">Track every invoice without the spreadsheet chaos</p>
          <h2 className="text-xl font-bold mb-3">Freelancer Client CRM — Invoice Tracker for UAE Freelancers</h2>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            A Notion-based CRM with built-in invoice tracking, payment status, overdue flags, and monthly revenue dashboards. Know exactly what is outstanding, what is paid, and what is coming up — without juggling multiple tools.
          </p>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Pair with the <span className="text-white font-semibold">Solopreneur OS</span> for quarterly income targets, expense tracking, and a complete UAE-specific financial dashboard.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors text-sm"
            >
              Get Freelancer Client CRM — AED 175
            </Link>
            <Link
              href="/products/solopreneur-os"
              className="inline-block border border-gray-600 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-sm"
            >
              Solopreneur OS — AED 249
            </Link>
          </div>
        </div>

        {/* Related links */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid gap-3">
            {[
              { href: "/blog/best-accounting-software-freelancers-uae", label: "Best Accounting Software for UAE Freelancers" },
              { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE? (2026 Guide)" },
              { href: "/blog/emaratax-registration-freelancers-uae", label: "How to Register on EmaraTax as a Freelancer" },
              { href: "/blog/freelance-rate-calculator-uae", label: "How to Calculate Your Freelance Rate in UAE" },
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

        <div className="text-center">
          <Link
            href="/#products"
            className="inline-block text-gray-600 hover:text-gray-900 text-sm font-semibold border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-500 transition-colors"
          >
            Browse all SoloKit products →
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
