import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Invoice International Clients as a UAE Freelancer (2026)",
  description:
    "How UAE freelancers get paid in USD, EUR, and GBP from international clients — SWIFT transfers, Wise, payment gateways, invoice format requirements, currency clauses, and FX management for 2026.",
  alternates: { canonical: "/blog/how-to-invoice-international-clients-uae" },
  openGraph: {
    title: "How to Invoice International Clients as a UAE Freelancer (2026)",
    description: "Getting paid in USD/EUR from international clients as a UAE freelancer — SWIFT, Wise, payment gateways, invoice format, and currency clauses.",
    type: "article",
    url: "/blog/how-to-invoice-international-clients-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Invoice International Clients as a UAE Freelancer (2026)",
  description: "How UAE freelancers get paid in USD, EUR, and GBP from international clients.",
  url: `${siteUrl}/blog/how-to-invoice-international-clients-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const paymentMethods = [
  {
    method: "SWIFT / International Bank Transfer",
    speed: "2–5 business days",
    cost: "AED 75–200 sender fee + FX spread (1–3%)",
    bestFor: "Large invoices (AED 10,000+), established client relationships",
    notes: "Your UAE bank provides IBAN, SWIFT/BIC, bank address. Request client pays fees on their end (OUR payment type). UAE banks: ENBD, FAB, Mashreq, ADCB all support inbound international wires.",
  },
  {
    method: "Wise (formerly TransferWise)",
    speed: "1–3 business days",
    cost: "0.4–1.5% of transfer amount",
    bestFor: "Regular USD/EUR/GBP invoices under AED 100,000",
    notes: "Get a Wise Business account for AED, USD, EUR, GBP account details. Send clients USD or EUR account details — they pay domestically. Wise converts to AED at mid-market rate. Far cheaper than SWIFT on fees and FX.",
  },
  {
    method: "PayPal Business",
    speed: "Instant (to PayPal balance), 1–3 days withdrawal",
    cost: "3.49% + fixed fee (sender pays) or 1.99% if you absorb",
    bestFor: "Small invoices, US clients who insist on PayPal",
    notes: "High fees make it expensive for large amounts. Withdrawal to UAE bank adds 2–5 days. Use only when clients require it — negotiate that client covers fees.",
  },
  {
    method: "Stripe (payment link / invoice)",
    speed: "7–14 days to bank (new accounts), 2 days (established)",
    cost: "2.9% + $0.30 per transaction (card); 0.8% ACH/SEPA",
    bestFor: "Clients paying by card or ACH; agencies and digital product clients",
    notes: "Stripe supports UAE businesses (Stripe UAE). Send a payment link with your invoice. Client pays by card or bank transfer. Payouts to UAE bank account in AED or USD.",
  },
  {
    method: "Payoneer",
    speed: "1–3 business days",
    cost: "1–3% receiving fee depending on method",
    bestFor: "Freelance platform payouts (Upwork, Fiverr), US clients",
    notes: "Payoneer provides USD/EUR/GBP virtual accounts. Popular with US and EU companies who want to pay domestically. Withdraw to UAE bank at 2% FX fee or use Payoneer card.",
  },
];

export default function HowToInvoiceInternationalClientsUAE() {
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
          <span className="text-gray-600">How to Invoice International Clients as a UAE Freelance</span>
        </nav>

        
        {/* Dark hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
          <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 -z-10 bg-dot-grid" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">TAX &amp; FINANCE</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Invoice International Clients as a UAE Freelancer (2026)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">How UAE freelancers get paid in USD, EUR, and GBP from international clients — SWIFT transfers, Wise, payment gateways, invoice format requirements, currency clauses, and FX management for 2026.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>8 min read</span>
          </div>
        </div>


        <div className="space-y-6 leading-relaxed">

          <p>
            The UAE&apos;s geographic position between Europe, Asia, and Africa makes it a natural
            base for freelancers serving international clients. Working with US, UK, EU, and
            Asia-Pacific clients from Dubai or Abu Dhabi is increasingly common — but getting
            paid internationally involves more moving parts than local AED invoicing. Fees,
            FX rates, payment timing, and compliance requirements all matter. Here&apos;s how to
            set up efficient cross-border payment systems in 2026.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-sm font-bold text-emerald-800 mb-2">The core principle</p>
            <p className="text-gray-700">
              Your goal is to minimize the gap between what the client pays and what lands
              in your UAE bank account. SWIFT wire + UAE bank FX = you lose 3–5% on every
              payment. <strong>Wise Business or Stripe reduces that to under 1.5%</strong> on
              most currencies. For a freelancer billing AED 300,000/year in international
              work, the difference is AED 10,000–15,000 in fees annually.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Payment Methods Compared</h2>
            <div className="space-y-3">
              {paymentMethods.map((m) => (
                <div key={m.method} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-semibold text-gray-900 text-sm">{m.method}</p>
                    <span className="text-xs font-bold text-blue-700 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">{m.speed}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1"><strong>Cost:</strong> {m.cost}</p>
                  <p className="text-xs text-gray-500 mb-2"><strong>Best for:</strong> {m.bestFor}</p>
                  <p className="text-xs text-gray-600">{m.notes}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>What Your International Invoice Must Include</h2>
            <p className="text-sm text-gray-600 mb-3">
              International invoices need more detail than domestic AED invoices — your client&apos;s
              accounts payable team and banking system need complete information to process payment.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li>• <strong>Your full legal name and UAE business address</strong> — matches your trade license or freelance permit. Required for their bookkeeping and tax compliance (especially EU clients with VAT requirements)</li>
              <li>• <strong>Your bank details in full</strong> — Bank name, branch address, IBAN (UAE IBANs are 23 characters), SWIFT/BIC code, account number, account currency. A single missing field can cause the payment to fail or be returned</li>
              <li>• <strong>Invoice currency stated clearly</strong> — State whether invoice is in USD, EUR, GBP, or AED. If in foreign currency, include a note: &quot;Payable in USD — equivalent AED amount for reference only: AED X&quot;</li>
              <li>• <strong>Payment terms</strong> — &quot;Net 14&quot; or &quot;Net 30&quot; is standard internationally. Include due date (not just &quot;14 days&quot;) e.g., &quot;Payment due: 30 June 2026&quot;</li>
              <li>• <strong>VAT status</strong> — UAE VAT does not apply to services provided to clients outside the UAE (zero-rated export of services). State: &quot;Services exported outside UAE — VAT 0% per UAE VAT Law Article 31&quot;. This protects you and helps your client understand why there&apos;s no VAT charged</li>
              <li>• <strong>Purchase Order reference</strong> — Large companies (especially US corporations) require their PO number on the invoice. Ask for PO before sending invoice</li>
              <li>• <strong>W-8BEN form (US clients)</strong> — US companies paying non-US contractors may request a W-8BEN form (Certificate of Foreign Status). Complete this to confirm you are not a US person — prevents them from withholding 30% US tax on your payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Currency Clauses: Protecting Yourself from FX Risk</h2>
            <p className="text-sm text-gray-600 mb-3">
              The AED is pegged to the USD at 3.6725 — fixed since 1997. This means USD invoices
              carry zero FX risk for UAE freelancers. EUR, GBP, and other currencies do fluctuate
              against AED. Protect yourself with clear contract language:
            </p>
            <div className="space-y-3 mt-4">
              {[
                {
                  clause: "Invoice in USD (safest for UAE freelancers)",
                  text: "\"All fees quoted and invoiced in USD. AED equivalent provided for reference only.\"",
                  why: "USD = AED peg means no currency risk. Most international clients are comfortable paying in USD.",
                },
                {
                  clause: "FX adjustment clause (for EUR/GBP invoices)",
                  text: "\"If the EUR/AED exchange rate at payment date differs by more than 3% from the rate at contract signing, fees will be adjusted proportionally.\"",
                  why: "Rare to enforce but protects against large currency swings on EUR/GBP-denominated work.",
                },
                {
                  clause: "Late payment FX clause",
                  text: "\"Payments received after the due date will be recalculated at the exchange rate on the actual payment date, not the invoice date.\"",
                  why: "Prevents clients from benefiting from currency moves by delaying payment.",
                },
              ].map((item) => (
                <div key={item.clause} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.clause}</p>
                  <p className="text-xs font-mono bg-gray-50 rounded p-2 mb-2 text-gray-700">{item.text}</p>
                  <p className="text-xs text-gray-600">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>UAE Tax and Compliance Considerations</h2>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>VAT registration</strong> — If your annual turnover exceeds AED 375,000, you must register for UAE VAT. Services exported outside the UAE are zero-rated (0% VAT), so they count towards the AED 375,000 threshold but you charge 0% VAT</li>
              <li>• <strong>Corporate tax</strong> — UAE corporate tax (9% above AED 375,000 profit) applies from 2023 onwards. International income is subject to UAE corporate tax if you are registered in the UAE. Freelancers using the Small Business Relief (under AED 3M turnover) may be exempt through 2026 — confirm with a UAE tax professional</li>
              <li>• <strong>Bank compliance (AML/KYC)</strong> — UAE banks are required to understand the nature of large incoming international transfers. Keep records of your contracts, invoices, and client details. If your UAE bank flags an incoming transfer, provide a copy of the invoice and contract promptly</li>
              <li>• <strong>EmaraTax</strong> — If VAT-registered, report international (export) income as zero-rated supplies on your VAT return. You can still claim input VAT credits on UAE-purchased business expenses even when your sales are zero-rated exports</li>
              <li>• <strong>No income tax on freelancers</strong> — UAE has no personal income tax. International income you receive is not subject to UAE income tax (there is none). Corporate tax applies to the business entity, not the individual</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Recommended Setup for UAE Freelancers with International Clients</h2>
            <div className="space-y-3 mt-4">
              {[
                { step: "1. Open a Wise Business account", detail: "Get USD, EUR, and GBP virtual account numbers. Send these to clients instead of your UAE IBAN — they pay domestically, Wise converts to AED. No international wire fees on the client side." },
                { step: "2. Use Stripe for card-paying clients", detail: "Tech companies and smaller Western clients often prefer to pay by card. Set up Stripe UAE to issue payment links with your invoices. Especially useful for retainers and subscription-style arrangements." },
                { step: "3. Keep your UAE bank IBAN for large transfers", detail: "For transfers above AED 50,000 from established clients who prefer SWIFT, your UAE IBAN is still the most straightforward. Negotiate OUR payment type so client covers the SWIFT fee." },
                { step: "4. Invoice in USD as default", detail: "USD invoicing eliminates all FX risk. Most international clients accept USD. State AED equivalent for your records, but the billable amount in USD." },
                { step: "5. Issue W-8BEN for US clients", detail: "Download IRS Form W-8BEN, complete it (Part I: your name, UAE address, country of citizenship, date of birth), sign and send to US clients before first payment. This prevents US withholding tax." },
              ].map((item) => (
                <div key={item.step} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.step}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Manage international invoicing</p>
            <h3 className="text-lg font-bold mb-2">Freelancer Invoice Templates — International & Local</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ready-to-send invoice templates for UAE freelancers — USD international
              invoices, VAT-compliant AED invoices, and retainer billing formats. Built
              in Notion, customizable in minutes.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Get the Invoice Templates →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-invoice-uae", title: "How to Invoice as a Freelancer in the UAE" },
                { href: "/blog/how-to-get-paid-faster-uae", title: "How to Get Paid Faster as a UAE Freelancer" },
                { href: "/blog/how-to-get-international-clients-uae", title: "How to Get International Clients as a UAE Freelancer" },
                { href: "/blog/freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">
                  → {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
