import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Issue VAT Invoices as a UAE Freelancer — 2026 Guide",
  description:
    "UAE VAT invoicing for freelancers: what a compliant VAT invoice must include, when to charge 0% vs 5%, invoice templates, and the consequences of issuing incorrect invoices.",
  alternates: { canonical: "/blog/freelance-vat-invoice-guide-uae" },
  openGraph: {
    title: "How to Issue VAT Invoices as a UAE Freelancer — 2026 Guide",
    description: "UAE VAT invoicing rules for freelancers: compliant invoice requirements, 0% vs 5%, and templates.",
    type: "article",
    url: "/blog/freelance-vat-invoice-guide-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Issue VAT Invoices as a UAE Freelancer",
  description: "UAE VAT invoicing rules for freelancers: compliant invoice requirements, 0% vs 5%, and templates.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-vat-invoice-guide-uae",
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
            <span className="text-gray-600">Freelance VAT Invoice Guide UAE</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Tax & Finance</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Issue VAT Invoices as a UAE Freelancer — 2026 Guide
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Getting your VAT invoice format wrong in the UAE can cost you more than you think — FTA fines for
              incorrect invoices start at AED 2,500. Whether you are newly VAT-registered or want to double-check
              your invoices are compliant, this guide covers everything required by UAE VAT law.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            UAE VAT (Value Added Tax) applies at 5% to most freelance services. If your taxable supplies exceed AED
            375,000/year, registration is mandatory. Between AED 187,500 and AED 375,000, voluntary registration is
            possible (and often beneficial if your clients are VAT-registered businesses who can reclaim the input tax).
            Below AED 187,500, you cannot register and should not charge VAT.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Mandatory Fields on a UAE VAT Invoice
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The Federal Tax Authority (FTA) requires these fields on every tax invoice. Missing any one of them
            makes the invoice non-compliant and could result in a fine of AED 2,500 per invoice.
          </p>

          <div className="space-y-2 mb-6">
            {[
              { field: "The words 'Tax Invoice'", detail: "Must appear prominently on the document — not just 'Invoice'." },
              { field: "Your name and address", detail: "Your registered business name and address (exactly as registered with the FTA/trade licence authority)." },
              { field: "Your Tax Registration Number (TRN)", detail: "The 15-digit TRN issued by the FTA upon registration. Format: 100XXXXXXXXXXX3." },
              { field: "Invoice date", detail: "The date the invoice is issued (not the service delivery date, though that can be added separately)." },
              { field: "A unique sequential invoice number", detail: "Must be unique and sequential — e.g., INV-2026-001, INV-2026-002. You cannot reuse or skip numbers." },
              { field: "Client name and address", detail: "The legal name of the recipient. For VAT-registered clients, include their TRN as well (required for them to reclaim input tax)." },
              { field: "Description of goods or services", detail: "Clear description of what was provided. 'Consulting services' is too vague — specify: 'Brand strategy consulting — April 2026'." },
              { field: "Quantity, unit price, and total (pre-tax)", detail: "Each line item should show quantity, unit price, and line total before VAT." },
              { field: "VAT rate applied (5% or 0%)", detail: "State the applicable rate for each line item." },
              { field: "VAT amount charged", detail: "The AED amount of VAT for each line item and the total VAT for the invoice." },
              { field: "Total amount including VAT", detail: "The grand total the client owes, inclusive of all VAT." },
            ].map(({ field, detail }, i) => (
              <div key={i} className="flex gap-3 border border-gray-100 rounded-xl p-3">
                <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{field}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            5% vs 0% VAT — What UAE Freelancers Need to Know
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">VAT Rate</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">When It Applies</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["5% (Standard Rate)", "Services delivered to UAE-based clients (in the UAE)", "Marketing consulting for a Dubai company"],
                  ["0% (Zero-Rated)", "Services exported outside the UAE — client is outside the GCC and the benefit is consumed outside the UAE", "Brand strategy for a UK company with no UAE presence"],
                  ["Exempt", "Very few categories — mainly financial services and residential property. Almost never applies to freelancers", "N/A for most freelancers"],
                  ["Out of Scope", "Services where the place of supply is outside the UAE (B2B services to GCC VAT-registered clients in some cases)", "Complex — consult a tax advisor for cross-GCC work"],
                ].map(([rate, when, example]) => (
                  <tr key={rate}>
                    <td className="px-4 py-3 font-bold text-gray-800">{rate}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{when}</td>
                    <td className="px-4 py-3 text-emerald-700 text-xs">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-bold text-amber-800 mb-2">Exporting Services to International Clients</p>
            <p className="text-sm text-amber-800">
              Zero-rating for exported services has strict conditions in the UAE. The service must genuinely benefit
              the recipient outside the UAE, and the recipient must be outside the UAE at the time of supply. If you
              work for a foreign company but the work is performed for a UAE branch or the benefit is consumed in
              the UAE, it is likely standard-rated at 5%. When in doubt, apply 5% and consult an FTA-registered
              tax agent.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Simplified Tax Invoices
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A simplified tax invoice (fewer fields required) can be issued for supplies of AED 10,000 or less to
            consumers (B2C) or for retail-style transactions. For most freelancer-to-business (B2B) invoices,
            always issue a full tax invoice regardless of amount — your client needs it to reclaim input VAT.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Common VAT Invoice Mistakes — and the Fines
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Mistake</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">FTA Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Issuing an invoice without a TRN", "AED 5,000 per invoice"],
                  ["Incorrect or missing VAT amount", "AED 2,500 per invoice"],
                  ["Non-sequential invoice numbering", "AED 2,500 per instance"],
                  ["Failing to issue a tax invoice at all", "AED 2,500–5,000 per supply"],
                  ["Not keeping invoice records for 5 years", "AED 10,000 first offence, AED 50,000 repeat"],
                ].map(([mistake, fine]) => (
                  <tr key={mistake}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{mistake}</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">{fine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Use Accounting Software — Not Word/Excel</p>
            <p className="text-sm text-emerald-800">
              Tools like Zoho Books, QuickBooks UAE, or Xero automatically generate FTA-compliant invoices,
              maintain sequential numbering, track VAT separately, and produce the VAT return data you need
              every quarter. At AED 100–250/month, accounting software is the cheapest insurance against
              costly invoice mistakes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools Built for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and financial SOPs — everything to run a compliant freelance business in the UAE.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/uae-freelance-tax-registration" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ VAT Registration for UAE Freelancers — Complete Guide</Link>
              <Link href="/blog/corporate-tax-uae-freelancers-2026" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ UAE Corporate Tax for Freelancers 2026</Link>
              <Link href="/blog/best-accounting-software-freelancers-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Best Accounting Tools for UAE Freelancers</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
