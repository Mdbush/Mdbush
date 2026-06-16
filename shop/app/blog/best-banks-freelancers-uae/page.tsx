import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Banks for Freelancers in the UAE (2026) — SoloKit",
  description:
    "The best bank accounts for UAE freelancers in 2026. Compare HSBC, Emirates NBD, Mashreq Neo, Liv, and digital-only options. No minimum balance picks included.",
  alternates: { canonical: "/blog/best-banks-freelancers-uae" },
  openGraph: {
    title: "Best Banks for Freelancers in the UAE (2026)",
    description: "Compare the best UAE bank accounts for freelancers — minimum balance, fees, online banking, and which ones actually approve you.",
    type: "article",
    url: "/blog/best-banks-freelancers-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Banks for Freelancers in the UAE (2026)",
  description:
    "The best bank accounts for UAE freelancers in 2026. Compare HSBC, Emirates NBD, Mashreq Neo, Liv, and digital-only options.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/best-banks-freelancers-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/best-banks-freelancers-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "best bank for freelancers UAE",
    "freelancer bank account UAE",
    "UAE bank account no minimum balance",
    "business bank account Dubai freelancer",
    "Mashreq Neo freelancer",
    "Liv bank UAE",
  ],
};

const bankTable = [
  { bank: "Liv (Emirates NBD)", minBalance: "AED 0", monthlyFee: "AED 0", bestFor: "Easy setup, young freelancers" },
  { bank: "Mashreq Neo", minBalance: "AED 0", monthlyFee: "AED 0", bestFor: "Expense tracking, digital-first" },
  { bank: "Wio Bank", minBalance: "AED 0", monthlyFee: "AED 0", bestFor: "Business/freelance digital account" },
  { bank: "Emirates NBD", minBalance: "AED 3,000", monthlyFee: "AED 25 if below", bestFor: "Overall reliability, branch access" },
  { bank: "ADCB", minBalance: "AED 3,000", monthlyFee: "AED 25 if below", bestFor: "Abu Dhabi freelancers" },
  { bank: "RAK Bank", minBalance: "AED 3,000", monthlyFee: "AED 25 if below", bestFor: "SME-friendly, easier approval" },
  { bank: "HSBC", minBalance: "AED 25,000", monthlyFee: "AED 75 if below", bestFor: "International transfers, high earners" },
];

export default function BestBanksFreelancersUAEPage() {
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
            <span className="text-gray-600">Best Banks for UAE Freelancers</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">FINANCE</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Best Banks for Freelancers in the UAE (2026)</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Opening a bank account as a UAE freelancer is harder than it should be — many banks want a trade license, proof of income, and a minimum balance. Here&apos;s a clear comparison of which accounts actually work for solopreneurs.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>

          {/* Quick picks */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">Quick Picks</p>
            <ul className="space-y-1.5 text-sm text-emerald-800">
              <li>🏆 <strong>Best overall:</strong> Emirates NBD (branch + digital, widely accepted)</li>
              <li>⚡ <strong>Easiest to open:</strong> Liv by Emirates NBD (app-only, no min balance)</li>
              <li>💰 <strong>Best no-min-balance:</strong> Mashreq Neo or Liv</li>
              <li>🌍 <strong>Best for international transfers:</strong> HSBC or Wise (non-bank)</li>
              <li>📊 <strong>Best for expense tracking:</strong> Mashreq Neo (built-in categories)</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            2026 Bank Account Comparison
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h2 className="text-sm font-bold text-white">UAE Bank Accounts for Freelancers</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {bankTable.map((row, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{row.bank}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{row.bestFor}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap block mb-1">Min: {row.minBalance}</span>
                    <span className="text-xs text-gray-400">Fee: {row.monthlyFee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Detailed Reviews
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Liv by Emirates NBD</h3>
              <p className="text-sm text-gray-600 mb-3">Digital-only bank, easiest to open — just download the app and upload your Emirates ID. No minimum balance, no monthly fees, instant approval in most cases.</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>✅ Zero balance · Free debit card · Opens in minutes</p>
                <p>⚠️ Personal account · No cheque facility</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Mashreq Neo</h3>
              <p className="text-sm text-gray-600 mb-3">Built-in expense categorization that actually works. For freelancers who want to track income vs expenses without separate software. Zero minimum balance.</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>✅ Zero balance · Smart expense categorization</p>
                <p>⚠️ Personal account · App UX less polished</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Wio Bank</h3>
              <p className="text-sm text-gray-600 mb-3">UAE-licensed digital bank built for freelancers and SMEs. Business account with invoicing tools, multi-currency support, and accounting integrations.</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>✅ Business features · Invoicing built in · Multi-currency</p>
                <p>⚠️ Requires trade license for business tier</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Emirates NBD</h3>
              <p className="text-sm text-gray-600 mb-3">The UAE&apos;s largest bank. Carries the most credibility with clients, suppliers, and corporate partners. Requires AED 3,000 minimum balance.</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>✅ Most recognized bank · Strong mobile app · International transfers</p>
                <p>⚠️ AED 3,000 min balance · Branch visits often required</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Also Consider: Wise (Not a UAE Bank)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Wise isn&apos;t a UAE bank — it&apos;s a UK-licensed money transfer service — but many UAE freelancers use it alongside a local bank account for receiving international client payments. You get local account details in 10+ currencies (USD, EUR, GBP, etc.), and convert to AED at mid-market rates with transparent fees.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Receive USD/EUR from international clients at local rates",
              "Convert to AED when the rate is good",
              "Much cheaper than UAE bank SWIFT transfers",
              "Cannot be your only account — UAE employers/clients need a UAE IBAN",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Documents You&apos;ll Need
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Personal Account</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>→ Emirates ID (front &amp; back)</li>
                <li>→ Valid UAE residence visa</li>
                <li>→ Passport copy</li>
                <li>→ UAE mobile number</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Business Account</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>→ Trade license / freelance permit</li>
                <li>→ Emirates ID</li>
                <li>→ Passport copy</li>
                <li>→ Proof of address</li>
                <li>→ 3–6 months bank statements (some banks)</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Our Recommendation</p>
            <p className="text-sm text-emerald-800">Start with <strong>Liv</strong> (if you just need something quick with no fees) or <strong>Emirates NBD</strong> (if you want the most credible account). Add <strong>Wise</strong> as a second account for international clients. Once you get your trade license, upgrade to a proper business account — <strong>Wio</strong> or Emirates NBD business are the best picks.</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Track Your Invoices and Income in One Place</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Log every invoice, track outstanding payments, and monitor your monthly revenue. Works with any UAE bank account.</p>
            <Link href="/products/freelancer-client-crm" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get the Freelancer CRM →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE? (2026)" },
                { href: "/blog/freelance-visa-uae", label: "How to Get a Freelance Visa in the UAE" },
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in AED" },
                { href: "/blog/how-to-become-freelancer-uae", label: "How to Become a Freelancer in the UAE" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-blue-600 hover:text-blue-800 text-sm">
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
