import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Invoice Template for UAE Clients (What to Include + AED Format)",
  description:
    "What to include on a freelance invoice in the UAE — mandatory fields, VAT rules, AED formatting, payment terms, and how to create a professional invoice that gets paid on time.",
  alternates: { canonical: "/blog/freelance-invoice-template-uae" },
  openGraph: {
    title: "Freelance Invoice Template for UAE Clients (What to Include + AED Format)",
    description: "Freelance invoice requirements in the UAE — mandatory fields, VAT rules, AED formatting, and a ready-to-use template.",
    type: "article",
    url: "/blog/freelance-invoice-template-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Invoice Template for UAE Clients (What to Include + AED Format)",
  description: "What to include on a freelance invoice in the UAE and how to format it correctly.",
  url: `${siteUrl}/blog/freelance-invoice-template-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const mandatoryFields = [
  { field: "Invoice number", detail: "Sequential numbering — e.g. INV-2026-001. Never reuse numbers. Critical for your own records and client accounting." },
  { field: "Invoice date", detail: "The date the invoice is issued, not when work was completed." },
  { field: "Due date", detail: "Explicit date, not \"Net 30\" — UAE clients respond to specific dates. Standard is 15–30 days from invoice date." },
  { field: "Your full legal name or business name", detail: "Must match your freelance license or business registration if you have one." },
  { field: "Your contact details", detail: "Email, phone number, and optionally your business address (which can be a virtual office)." },
  { field: "Client's full legal name and address", detail: "Get this from their contract or company letterhead — important for record-keeping and dispute resolution." },
  { field: "Description of services", detail: "Specific, not vague. \"Website copywriting — 8 pages as per proposal dated [date]\" not \"copywriting services.\"" },
  { field: "Quantity and unit price", detail: "For project work: \"1 project — AED 5,000\". For hourly: \"12 hours × AED 350/hour = AED 4,200\"." },
  { field: "Subtotal, VAT (if applicable), and total", detail: "If you are VAT-registered, show 5% VAT separately. If not, state \"VAT not applicable\" — this is cleaner than leaving the field blank." },
  { field: "Payment instructions", detail: "Bank account details: bank name, IBAN, account name, SWIFT code. For international clients, also include BIC code." },
];

const vatRules = [
  { scenario: "You are NOT VAT-registered", rule: "Do not charge VAT. State \"VAT not applicable\" or \"Supplier is not VAT registered\" on the invoice. You cannot collect VAT unless registered." },
  { scenario: "You ARE VAT-registered (annual turnover >AED 375,000)", rule: "Charge 5% VAT on all taxable services. Show your TRN (Tax Registration Number) on every invoice. Issue a proper tax invoice." },
  { scenario: "Exporting services to clients outside the UAE", rule: "Most exported services are zero-rated — you charge 0% VAT. Confirm with your accountant for your specific service type, as rules vary." },
];

export default function FreelanceInvoiceTemplateUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-10">

        
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">Freelance Invoice Template for UAE Clients (What to Inc</span>
        </nav>

        
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">TAX &amp; FINANCE</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Invoice Template for UAE Clients (What to Include + AED Format)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">What to include on a freelance invoice in the UAE — mandatory fields, VAT rules, AED formatting, payment terms, and how to create a professional invoice that gets paid on time.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>6 min read</span>
          </div>
        </div>


        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            A professional invoice does two things: it gets you paid, and it protects you if
            payment is ever disputed. In the UAE, having correct invoice fields is also important
            for VAT compliance if you are registered, and for your clients&apos; internal accounting
            processes. Here is exactly what to include.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Mandatory Invoice Fields for UAE Freelancers</h2>
            <div className="space-y-3 mt-4">
              {mandatoryFields.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.field}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">VAT Rules for UAE Freelance Invoices</h2>
            <div className="space-y-3 mt-4">
              {vatRules.map((item) => (
                <div key={item.scenario} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.scenario}</p>
                  <p className="text-xs text-gray-600">{item.rule}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3">
              VAT registration threshold: mandatory above AED 375,000 annual taxable turnover,
              optional above AED 187,500. If you are close to the threshold, speak to an accountant
              before deciding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Invoice Template (Copy-Paste Structure)</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm font-mono">
              <div className="space-y-1 text-gray-700">
                <p className="font-bold text-gray-900 text-base">INVOICE</p>
                <p className="mt-3"><strong>Invoice number:</strong> INV-2026-001</p>
                <p><strong>Date:</strong> [DD Month YYYY]</p>
                <p><strong>Due date:</strong> [DD Month YYYY]</p>

                <div className="grid grid-cols-2 gap-4 mt-4 border-t border-gray-200 pt-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">From</p>
                    <p>[Your full name / business name]</p>
                    <p>[Email address]</p>
                    <p>[Phone number]</p>
                    <p>[Business address / virtual office]</p>
                    <p>[TRN: XXXXXXXXXX — if VAT registered]</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">To</p>
                    <p>[Client company name]</p>
                    <p>[Client address]</p>
                    <p>[Client TRN — if they are VAT registered]</p>
                  </div>
                </div>

                <table className="w-full mt-4 border-t border-gray-200 pt-4 text-xs">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="text-left py-1">Description</th>
                      <th className="text-right py-1">Qty</th>
                      <th className="text-right py-1">Unit price</th>
                      <th className="text-right py-1">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="border-t border-gray-200">
                    <tr>
                      <td className="py-1">[Description of service — specific, per proposal]</td>
                      <td className="text-right py-1">1</td>
                      <td className="text-right py-1">AED [X]</td>
                      <td className="text-right py-1">AED [X]</td>
                    </tr>
                  </tbody>
                  <tfoot className="border-t border-gray-200">
                    <tr><td colSpan={3} className="text-right py-1 text-gray-500">Subtotal</td><td className="text-right py-1">AED [X]</td></tr>
                    <tr><td colSpan={3} className="text-right py-1 text-gray-500">VAT 5% (if applicable)</td><td className="text-right py-1">AED [X]</td></tr>
                    <tr><td colSpan={3} className="text-right py-1 font-bold">Total due</td><td className="text-right py-1 font-bold">AED [X]</td></tr>
                  </tfoot>
                </table>

                <div className="mt-4 border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900 mb-1">Payment details</p>
                  <p>Bank: [Bank name]</p>
                  <p>Account name: [Your name / business name]</p>
                  <p>IBAN: AE[XX XXXX XXXX XXXX XXXX XXX]</p>
                  <p>SWIFT/BIC: [XXXXXXXX]</p>
                </div>

                <p className="mt-4 text-gray-500 text-xs border-t border-gray-200 pt-4">
                  Payment due by [date]. Late payments may incur a [X]% monthly charge as per our agreement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Payment Terms That Get You Paid Faster</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li><strong>Net 15, not Net 30:</strong> Shorter terms lead to faster payment — most clients will not object to 15 days.</li>
              <li><strong>Specific dates only:</strong> Say &ldquo;due by 30 June 2026&rdquo; not &ldquo;due within 30 days.&rdquo; Ambiguity is always resolved in the client&apos;s favour.</li>
              <li><strong>State late payment charges:</strong> Even if you never enforce them, a 2% monthly late charge in the invoice footer reduces late payment significantly.</li>
              <li><strong>Send immediately:</strong> Send the invoice on the day work is delivered, not days later. The longer you wait, the longer you wait to get paid.</li>
              <li><strong>Follow up on day 1 overdue, not day 14:</strong> A friendly reminder the day after the due date signals that you track your invoices closely.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Tools for Creating Invoices in AED</h2>
            <div className="space-y-2 mt-3">
              {[
                { tool: "Wave (free)", note: "Excellent free invoicing with AED support, payment tracking, and basic accounting" },
                { tool: "FreshBooks (from USD 15/month)", note: "Professional invoicing with time tracking, expense management, and client portal" },
                { tool: "Zoho Invoice (free up to 1,000 invoices)", note: "Feature-rich, AED support, VAT-compliant tax invoices, good for UAE compliance" },
                { tool: "Notion / Google Docs + PDF", note: "Simple option for early-stage freelancers — use the template above and export to PDF" },
              ].map((item) => (
                <div key={item.tool} className="border border-gray-200 rounded-xl p-3">
                  <p className="font-semibold text-gray-900 text-sm">{item.tool}</p>
                  <p className="text-xs text-gray-600">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">When invoices go unpaid</p>
            <h3 className="text-lg font-bold mb-2">How to Chase Late Payments as a UAE Freelancer</h3>
            <p className="text-gray-400 text-sm mb-4">
              A 4-step follow-up sequence, prevention tactics, and the legal options available
              to UAE freelancers when a client simply will not pay.
            </p>
            <Link
              href="/blog/late-payment-freelance-uae"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Read the Late Payment Guide →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/late-payment-freelance-uae", title: "How to Chase Late Payments as a Freelancer in the UAE" },
                { href: "/blog/freelance-invoice-uae", title: "How to Invoice Clients in the UAE" },
                { href: "/blog/best-accounting-software-freelancers-uae", title: "Best Accounting Software for UAE Freelancers" },
                { href: "/blog/freelance-tax-uae", title: "Do Freelancers Pay Tax in the UAE?" },
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
