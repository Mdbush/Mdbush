import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Set Up a Freelance Business in the UAE (2026): Complete Guide",
  description:
    "Step-by-step guide to setting up a legal freelance business in the UAE — free zone permit vs mainland licence, costs, banking, tax registration, and invoicing setup for Dubai and Abu Dhabi.",
  alternates: { canonical: "/blog/how-to-set-up-freelance-business-uae" },
  openGraph: {
    title: "How to Set Up a Freelance Business in the UAE (2026): Complete Guide",
    description: "Complete guide to setting up a legal UAE freelance business — permits, costs, banking, tax, and invoicing.",
    type: "article",
    url: "/blog/how-to-set-up-freelance-business-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up a Freelance Business in the UAE (2026): Complete Guide",
  description: "Step-by-step guide to setting up a legal freelance business in the UAE.",
  url: `${siteUrl}/blog/how-to-set-up-freelance-business-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToSetUpFreelanceBusinessUAE() {
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
          <span className="text-gray-600">How to Set Up a Freelance Business in the UAE (2026): C</span>
        </nav>

        
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">GETTING STARTED</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Set Up a Freelance Business in the UAE (2026): Complete Guide</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">Step-by-step guide to setting up a legal freelance business in the UAE — free zone permit vs mainland licence, costs, banking, tax registration, and invoicing setup for Dubai and Abu Dhabi.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>10 min read</span>
          </div>
        </div>


        <div className="space-y-6 leading-relaxed">

          <p>
            Setting up a freelance business in the UAE legally is one of the most important
            things you can do as an independent professional. Working without a licence is
            technically illegal, limits your ability to open a business bank account, and prevents
            you from issuing proper invoices to corporate clients (many UAE companies require
            a valid TRN or trade licence on invoices before releasing payment). This guide covers
            every step — from choosing your licence type to getting your first client invoice paid.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-emerald-900 mb-1">Key numbers for 2026</p>
            <p className="text-blue-800">
              Free zone freelance permit: <strong>AED 7,500–15,000/year</strong> all-in.
              Mainland sole establishment: <strong>AED 15,000–25,000/year</strong> including DED licence.
              Most UAE freelancers start with a free zone permit — it&apos;s faster, cheaper, and sufficient for most client work.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Step 1: Choose Your Licence Type</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-gray-900 text-sm">Free Zone Freelance Permit</p>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">AED 7,500–15,000/yr</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  The most popular option for UAE freelancers. Key free zones offering freelance permits:
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• <strong>IFZA (International Free Zone Authority)</strong> — AED 7,500–10,000/year. Popular, efficient, no office required. Visa available</li>
                  <li>• <strong>Meydan Free Zone</strong> — AED 7,500–12,000/year. Dubai-based, good for UAE-focused freelancers</li>
                  <li>• <strong>Fujairah Creative City</strong> — AED 8,000–12,000/year. Good for creative and media professionals</li>
                  <li>• <strong>Shuraa / Dubai Silicon Oasis</strong> — Various packages depending on visa and activities included</li>
                  <li>• <strong>twofour54 (Abu Dhabi)</strong> — AED 8,000–15,000/year. Specifically for media, creative, and technology freelancers in Abu Dhabi</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2 italic">Recommended for: most freelancers starting out. Fast setup (3–7 days), no local sponsor required, visa option available</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-gray-900 text-sm">Mainland Sole Establishment (DED)</p>
                  <span className="text-xs font-bold text-blue-700 bg-emerald-50 px-2 py-0.5 rounded-full">AED 15,000–25,000/yr</span>
                </div>
                <p className="text-sm text-emerald-800">
                  A UAE mainland licence (Dubai Economic Department for Dubai, ADDED for Abu Dhabi)
                  allows you to work with UAE government clients and mainland companies without any
                  restrictions. More expensive and complex to set up than a free zone permit, but
                  required if you want to win government tenders or be on approved vendor lists for
                  certain large UAE corporates. Requires a physical office address or flexi-desk
                  arrangement and a UAE national local service agent (for some professional activities).
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">Recommended for: freelancers targeting government contracts or large UAE corporations that require mainland licences</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Step 2: Register Your Licence</h2>
            <ul className="space-y-2 text-sm text-gray-700 mt-3">
              <li className="flex gap-2"><span className="font-bold text-gray-500">1.</span> Choose your free zone and contact them directly (most have online applications)</li>
              <li className="flex gap-2"><span className="font-bold text-gray-500">2.</span> Select your business activity (e.g. &quot;Management Consultancy&quot;, &quot;Marketing Consultancy&quot;, &quot;IT Consultancy&quot;, &quot;Design Services&quot;) — pick activities that cover your services broadly</li>
              <li className="flex gap-2"><span className="font-bold text-gray-500">3.</span> Submit required documents: passport copy, visa/residency copy (if UAE resident), CV, passport photo, application form</li>
              <li className="flex gap-2"><span className="font-bold text-gray-500">4.</span> Pay licence fees — most free zones accept card payment online</li>
              <li className="flex gap-2"><span className="font-bold text-gray-500">5.</span> Receive your licence and establishment card (typically 3–7 working days)</li>
              <li className="flex gap-2"><span className="font-bold text-gray-500">6.</span> If you need a UAE resident visa: apply for an employment visa through the free zone at an additional cost (AED 3,000–5,000) — requires a medical test and Emirates ID application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Step 3: Open a Business Bank Account</h2>
            <p>
              A business bank account separates your personal and business finances, is required
              by many UAE corporate clients on invoices, and enables proper bookkeeping.
              Best options for UAE freelancers:
            </p>
            <div className="space-y-3 mt-4">
              {[
                { bank: "Wio Business (recommended for freelancers)", type: "Digital bank", detail: "Wio is Abu Dhabi&apos;s digital business bank — fast account opening (often same day with valid licence), no minimum balance, competitive transfer fees, and a good UAE mobile banking experience. Well-suited to freelancers and micro-businesses. IBAN issued immediately." },
                { bank: "Emirates NBD SME Account", type: "Traditional bank", detail: "One of the UAE&apos;s largest banks. SME accounts require a minimum balance (typically AED 10,000–50,000 depending on account type). Strong UAE corporate credibility — some large clients prefer suppliers who bank with major UAE banks. In-person setup required." },
                { bank: "FAB (First Abu Dhabi Bank) Business", type: "Traditional bank", detail: "Strong for Abu Dhabi-based freelancers. FAB is UAE&apos;s largest bank. Business accounts require a valid trade licence and in-person documentation. Good for freelancers doing significant work with government-linked entities." },
                { bank: "Wise Business (for international clients)", type: "Multi-currency", detail: "Not a UAE bank but highly useful for freelancers receiving USD, EUR, or GBP from international clients. Wise gives you local bank details in major currencies and converts to AED at mid-market rates. Use alongside a UAE business bank account." },
              ].map((item) => (
                <div key={item.bank} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{item.bank}</p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full shrink-0">{item.type}</span>
                  </div>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Step 4: Tax Registration</h2>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>VAT registration</strong> — Mandatory if your taxable supplies exceed AED 375,000/year. Optional (voluntary) above AED 187,500/year. Register via EmaraTax (tax.gov.ae). Being VAT-registered allows you to reclaim input VAT on business expenses</li>
              <li>• <strong>Corporate tax</strong> — UAE corporate tax at 9% applies on annual taxable income above AED 375,000. As a freelance business, you will be subject to corporate tax once your net profit exceeds this threshold. Register and file via EmaraTax. Small business relief (zero tax rate) applies to businesses with revenue below AED 3,000,000</li>
              <li>• <strong>EmaraTax registration</strong> — Register at tax.gov.ae using your trade licence details. Required for both VAT and corporate tax. Straightforward online registration process</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Step 5: Set Up Your Invoicing System</h2>
            <ul className="space-y-2 text-sm text-gray-700 mt-3">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Include on every invoice:</strong> Your trading name, trade licence number, TRN (Tax Registration Number if VAT registered), your bank account IBAN, invoice number and date, payment terms (Net 14 or Net 30), and clear description of services</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Accounting software:</strong> Zoho Books (AED 45–90/month) or QuickBooks Online (AED 80–160/month) both handle UAE VAT returns and are widely used by UAE freelancers. Worth the subscription from day one</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Currency:</strong> Always invoice in AED for UAE clients unless they specifically request USD. AED invoicing avoids exchange rate disputes and signals you operate professionally within the UAE market</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Payment terms:</strong> Start with Net 14 (payment within 14 days) rather than Net 30. Shorter terms improve your cash flow significantly in the early months</li>
            </ul>
          </section>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Run your freelance business like a pro</p>
            <h3 className="text-lg font-bold mb-2">SoloKit Freelance OS — Systems for UAE Freelancers</h3>
            <p className="text-gray-400 text-sm mb-4">
              Client CRM, invoice tracker, goal planner, and business systems — everything
              you need to run a professional UAE freelance business from one Notion workspace.
            </p>
            <Link
              href="/products/solokit-freelance-os"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Get SoloKit →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-visa-uae", title: "How to Get a Freelance Visa in the UAE (2026)" },
                { href: "/blog/best-banks-freelancers-uae", title: "Best Bank Accounts for UAE Freelancers (2026)" },
                { href: "/blog/freelance-tax-uae", title: "Do Freelancers Pay Tax in the UAE? (2026 Guide)" },
                { href: "/blog/how-to-invoice-as-a-freelancer-uae", title: "How to Invoice as a Freelancer in the UAE" },
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
