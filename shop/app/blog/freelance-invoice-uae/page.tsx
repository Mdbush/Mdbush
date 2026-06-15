import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Invoice Clients in the UAE (AED Invoicing Guide for Freelancers) — SoloKit",
  description:
    "Step-by-step guide on invoicing clients in Dubai and UAE as a freelancer — what to include, VAT requirements, late payment clauses, and free invoice templates.",
  alternates: { canonical: "/blog/freelance-invoice-uae" },
  openGraph: {
    title: "How to Invoice Clients in the UAE (AED Invoicing Guide for Freelancers)",
    description:
      "Step-by-step guide on invoicing clients in Dubai and UAE as a freelancer — what to include, VAT requirements, late payment clauses, and free invoice templates.",
    type: "article",
    url: "/blog/freelance-invoice-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Invoice Clients in the UAE (AED Invoicing Guide for Freelancers)",
  description:
    "Step-by-step guide on invoicing clients in Dubai and UAE as a freelancer — what to include, VAT requirements, late payment clauses, and free invoice templates.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-invoice-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-invoice-uae",
};

const commonMistakes = [
  {
    mistake: "Not including your IBAN",
    fix: "Clients can't pay you without your bank details. Add your full IBAN and bank name on every invoice.",
  },
  {
    mistake: "Sending to the wrong contact",
    fix: "Always ask upfront: 'Who should I send the invoice to?' The project manager is rarely the finance person.",
  },
  {
    mistake: "No due date on the invoice",
    fix: "Without a due date, 'Net 30' is invisible. Write the actual calendar date: 'Due by 29 June 2026'.",
  },
  {
    mistake: "No late payment clause",
    fix: "Add it to the footer of every invoice so it's always visible. Most clients will never trigger it — but it changes how seriously they treat your deadline.",
  },
  {
    mistake: "Restarting invoice numbers at 001 each year",
    fix: "Use sequential numbering: INV-2026-042 after INV-2026-041. Never go back to 001. It looks amateur and can confuse accounting software.",
  },
];

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Finance</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">June 15, 2026</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">5 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Invoice Clients in the UAE (AED Invoicing Guide for Freelancers)
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Getting paid is the whole point. Here&apos;s exactly what your UAE freelance invoice needs to include —
            from IBAN to VAT rules to the late payment clause most freelancers forget.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            You finished the project. The client is happy. Now you need to get paid — and in the UAE, a
            poorly formatted invoice is one of the fastest ways to delay that payment by weeks.
          </p>

          <p>
            This guide covers exactly what a UAE freelance invoice must include, when you need to add VAT,
            how to structure payment terms, and the one clause that significantly improves your on-time
            payment rate.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">What a UAE Freelance Invoice Must Include</h2>

          <p>
            Whether you&apos;re working with a startup in Dubai or a corporation in Abu Dhabi, every invoice
            you send should have these elements:
          </p>

          <div className="space-y-3 my-6">
            {[
              { label: "Your full name or trade name", detail: "Exactly as it appears on your freelance permit or commercial licence." },
              { label: "Your emirate", detail: "E.g. Dubai, Abu Dhabi, Sharjah. Clients need this for their records." },
              { label: "Invoice number", detail: "Sequential format: INV-2026-001. Never repeat numbers." },
              { label: "Invoice date and due date", detail: "Both dates, not just one. Write the actual calendar due date, not just 'Net 30'." },
              { label: "Client's full name and address", detail: "Company name + address as it appears on their trade licence if billing a company." },
              { label: "Itemised services", detail: "Line by line — what was done, the unit rate, quantity, and line total. No vague line items like 'design work'." },
              { label: "Total in AED", detail: "Always in AED unless the client explicitly requested a foreign currency." },
              { label: "Your bank details", detail: "Full IBAN, bank name, and account name. Without this, payment is impossible." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">VAT Invoices vs Non-VAT Invoices</h2>

          <p>
            Most UAE freelancers don&apos;t need to worry about VAT — but you need to know the threshold.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-blue-900 mb-2">Quick Answer: Do UAE freelancers need to issue VAT invoices?</p>
            <p className="text-sm text-blue-800">
              Only if you are registered for VAT. VAT registration is mandatory only when your taxable UAE revenue
              exceeds <strong>AED 375,000 per year</strong>. Below that threshold, you do not register, you do not
              charge VAT, and you do not include any VAT line on your invoice.
            </p>
          </div>

          <p>
            If you are below the AED 375K threshold (most freelancers are): issue a standard invoice with no VAT.
            Your total is the total. No TRN needed.
          </p>

          <p>
            If you have crossed the threshold and registered for VAT: every invoice must include your Tax
            Registration Number (TRN), a separate 5% VAT line, and both the net amount and the VAT-inclusive total.
            Your invoice header should read &ldquo;Tax Invoice&rdquo; rather than just &ldquo;Invoice&rdquo;.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Payment Terms: What to Specify</h2>

          <p>
            The payment term you set determines when you can expect to get paid — and how quickly a late
            payment becomes a problem you can escalate.
          </p>

          <div className="flex flex-col gap-3 my-6">
            {[
              {
                term: "Net 14",
                use: "Recommended for most UAE freelance projects.",
                note: "Two weeks is plenty of time for a finance team to process a payment. Short enough that delays are obvious quickly.",
              },
              {
                term: "Net 30",
                use: "Standard for larger corporate clients.",
                note: "Large companies often have fixed payment runs. Net 30 accommodates this. Don't offer it unless they ask.",
              },
              {
                term: "Net 60",
                use: "Avoid unless you have no choice.",
                note: "Two months without payment creates serious cash flow pressure. Only accept this for very large, very reliable clients.",
              },
            ].map((item) => (
              <div key={item.term} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm">{item.term} — {item.use}</p>
                <p className="text-sm text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Late Payment Clause</h2>

          <p>
            Add this to the footer of every invoice you send. It takes ten seconds to add and changes how
            seriously clients treat your due date:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-4 text-sm text-gray-700 italic">
            &ldquo;A 2% per month late fee applies to invoices overdue by more than 14 days.&rdquo;
          </div>

          <p>
            Most clients will never trigger this clause. But having it there signals that you are a professional
            who tracks payments and follows up — which makes late payment less likely in the first place.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">How to Number Your Invoices</h2>

          <p>
            Use the format <strong>INV-YEAR-NNN</strong>: INV-2026-001, INV-2026-002, and so on.
          </p>

          <p>
            Never reset to 001 at the start of a new year. Continue sequentially: INV-2026-099 becomes
            INV-2026-100, not INV-2027-001. This matters for two reasons: your accounting software tracks
            invoice sequences, and tax authorities (if you ever get audited) will notice gaps or restarts.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Tools UAE Freelancers Use for Invoicing</h2>

          <p>
            You don&apos;t need expensive software to invoice professionally. Three options work well for UAE freelancers:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>Wave</strong> — completely free, handles AED invoices, tracks payments. Best free option.</li>
            <li><strong>Zoho Invoice</strong> — free tier supports up to 1,000 invoices/year, VAT compliant for UAE.</li>
            <li><strong>Notion (with a CRM template)</strong> — if you already live in Notion, a good CRM template includes an invoice tracker, payment status column, and client history in one place.</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-1">Freelancer Client CRM — AED 175</p>
            <p className="text-sm text-gray-500 mb-3">
              Built-in invoice tracker with payment status, due date alerts, and client billing history.
              Send fewer follow-up emails — the system tells you exactly what&apos;s outstanding and what&apos;s late.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Get the Freelancer CRM →
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Common Invoicing Mistakes (and the Fix)</h2>

          <div className="flex flex-col gap-4 my-6">
            {commonMistakes.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-red-600 mb-1">✗ {item.mistake}</p>
                <p className="text-sm text-gray-600">✓ {item.fix}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Payment Confirmation Trick</h2>

          <p>
            The moment you send an invoice, WhatsApp the finance contact directly:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-4 text-sm text-gray-700 italic">
            &ldquo;Hi [Name], just sent over Invoice INV-2026-041 for AED 8,500 to [email]. Due date is 29 June.
            Let me know if you need anything else from my end to process it.&rdquo;
          </div>

          <p>
            This does three things: confirms the email arrived, establishes who the finance contact is, and
            puts a human face on the invoice. Payments that get a WhatsApp confirmation get processed significantly
            faster than ones that sit silently in an inbox.
          </p>

          <div className="bg-gray-900 text-white rounded-2xl p-6 mt-10">
            <p className="text-sm font-semibold text-gray-300 mb-1">Track every invoice in one place</p>
            <p className="text-xl font-bold mb-3">Freelancer Client CRM — AED 175</p>
            <p className="text-gray-400 text-sm mb-4">
              Invoice tracker, client pipeline, proposal templates, and payment history — all in Notion.
              Know exactly which invoices are outstanding before you have to guess.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get the CRM →
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/how-to-price-freelance-services-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Price Your Freelance Services in the UAE →
              </Link>
              <Link href="/blog/how-to-negotiate-freelance-rates-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Negotiate Freelance Rates in the UAE (Without Losing the Client) →
              </Link>
              <Link href="/blog/freelance-proposal-tips-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Write a Freelance Proposal That Wins Clients in the UAE →
              </Link>
              <Link href="/blog/client-onboarding-freelance-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                Client Onboarding Process for UAE Freelancers (Step-by-Step) →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
