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
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Freelance Invoice UAE</span>
          </nav>

          {/* Hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Finance</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Invoice Clients in the UAE (AED Invoicing Guide for Freelancers)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Getting paid is the whole point. Here&apos;s exactly what your UAE freelance invoice needs to include —
              from IBAN to VAT rules to the late payment clause most freelancers forget.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 375K", label: "VAT registration threshold" },
              { value: "2%/month", label: "Recommended late payment fee" },
              { value: "Net 14", label: "Recommended payment terms" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            You finished the project. The client is happy. Now you need to get paid — and in the UAE, a
            poorly formatted invoice is one of the fastest ways to delay that payment by weeks.
          </p>

          {/* What to Include */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            What a UAE Freelance Invoice Must Include
          </h2>

          <ul className="space-y-3 mb-6">
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
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{item.label}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          {/* VAT */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            VAT Invoices vs Non-VAT Invoices
          </h2>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-2">Quick Answer: Do UAE freelancers need to issue VAT invoices?</p>
            <p className="text-sm text-emerald-800 leading-relaxed">
              Only if you are registered for VAT. VAT registration is mandatory only when your taxable UAE revenue
              exceeds <strong>AED 375,000 per year</strong>. Below that threshold, you do not register, you do not
              charge VAT, and you do not include any VAT line on your invoice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Below AED 375K threshold</h3>
              <p className="text-sm text-gray-600">
                Issue a standard invoice with no VAT. Your total is the total. No TRN needed.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Above AED 375K (VAT registered)</h3>
              <p className="text-sm text-gray-600">
                Every invoice must include your TRN, a separate 5% VAT line, and both the net amount and
                VAT-inclusive total. Header must read &ldquo;Tax Invoice&rdquo;.
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Payment Terms: What to Specify
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                term: "Net 14",
                recommendation: "Recommended",
                note: "Two weeks is plenty of time for a finance team to process a payment. Short enough that delays are obvious quickly.",
              },
              {
                term: "Net 30",
                recommendation: "Corporate clients",
                note: "Large companies often have fixed payment runs. Net 30 accommodates this. Don't offer it unless they ask.",
              },
              {
                term: "Net 60",
                recommendation: "Avoid",
                note: "Two months without payment creates serious cash flow pressure. Only accept for very large, very reliable clients.",
              },
            ].map((item) => (
              <div key={item.term} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{item.term}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block ${item.term === "Net 14" ? "bg-emerald-100 text-emerald-700" : item.term === "Net 60" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"}`}>{item.recommendation}</span>
                <p className="text-sm text-gray-600 mt-2">{item.note}</p>
              </div>
            ))}
          </div>

          {/* Late Payment Clause */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Late Payment Clause
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Add this to the footer of every invoice you send. It takes ten seconds and changes how
            seriously clients treat your due date:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-gray-700 italic">
              &ldquo;A 2% per month late fee applies to invoices overdue by more than 14 days.&rdquo;
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Most clients will never trigger this clause. But having it there signals that you are a professional
            who tracks payments and follows up — which makes late payment less likely in the first place.
          </p>

          {/* How to Number */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            How to Number Your Invoices
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Use the format <strong>INV-YEAR-NNN</strong>: INV-2026-001, INV-2026-002, and so on.
            Never reset to 001 at the start of a new year — this matters for your accounting software
            and in the event of an audit.
          </p>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Common Invoicing Mistakes (and the Fix)
          </h2>

          <div className="space-y-3 mb-6">
            {commonMistakes.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-red-600 mb-1">✗ {item.mistake}</p>
                <p className="text-sm text-gray-600">✓ {item.fix}</p>
              </div>
            ))}
          </div>

          {/* Payment Confirmation */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The Payment Confirmation Trick
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The moment you send an invoice, WhatsApp the finance contact directly:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-gray-700 italic">
              &ldquo;Hi [Name], just sent over Invoice INV-2026-041 for AED 8,500 to [email]. Due date is 29 June.
              Let me know if you need anything else from my end to process it.&rdquo;
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Pro Tip</p>
            <p className="text-sm text-emerald-800">
              This does three things: confirms the email arrived, establishes who the finance contact is, and
              puts a human face on the invoice. Payments that get a WhatsApp confirmation get processed significantly
              faster than ones that sit silently in an inbox.
            </p>
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
              <Link href="/blog/how-to-price-freelance-services-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Price Your Freelance Services in the UAE</Link>
              <Link href="/blog/emaratax-registration-freelancers-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Register on EmaraTax as a UAE Freelancer</Link>
              <Link href="/blog/freelance-proposal-tips-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Write a Freelance Proposal That Wins Clients in the UAE</Link>
              <Link href="/blog/client-onboarding-freelance-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Client Onboarding Process for UAE Freelancers</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
