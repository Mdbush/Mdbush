import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Bank Accounts for UAE Freelancers in 2026 — SoloKit",
  description:
    "Compare the best bank accounts for UAE freelancers in 2026. Find accounts with low fees, easy setup, multi-currency support, and freelance-friendly onboarding.",
};

const banks = [
  {
    name: "Emirates NBD Business Account",
    type: "Traditional bank",
    minBalance: "AED 10,000–50,000",
    monthlyFee: "AED 0 if minimum maintained",
    bestFor: "Established freelancers billing AED 30,000+ per month who need cheque books and corporate banking",
    pros: ["Largest bank network in UAE", "Strong online banking", "Cheque book available", "Good for large transfers"],
    cons: ["High minimum balance", "Lengthy KYC process (2–6 weeks)", "Branch visits often required"],
  },
  {
    name: "Mashreq Neo Business",
    type: "Digital business account",
    minBalance: "AED 0",
    monthlyFee: "AED 0",
    bestFor: "Freelancers who want a fully digital account with no minimum balance and a fast setup process",
    pros: ["No minimum balance", "Online-only onboarding", "Free transfers", "Good mobile app"],
    cons: ["Limited branch support", "International transfers can be slower", "No cheque book"],
  },
  {
    name: "RAKBANK Business One",
    type: "Traditional bank — SME focus",
    minBalance: "AED 25,000",
    monthlyFee: "AED 0 if minimum maintained",
    bestFor: "Freelancers with steady income wanting competitive rates and strong SME features",
    pros: ["SME-focused products", "Competitive transfer rates", "Good relationship banking", "Branches across UAE"],
    cons: ["Minimum balance required", "Not the fastest onboarding"],
  },
  {
    name: "Wise Business",
    type: "Fintech / multi-currency",
    minBalance: "AED 0",
    monthlyFee: "AED 0 (transfer fees apply)",
    bestFor: "Freelancers with international clients who want to receive and hold USD, EUR, GBP without conversion losses",
    pros: ["Multi-currency accounts (50+ currencies)", "Real exchange rate (no hidden markup)", "Fast international transfers", "No monthly fees"],
    cons: ["Not a UAE bank — can't receive AED IBAN from some UAE clients", "Not accepted by all UAE government entities", "No cash deposits"],
  },
  {
    name: "Wio Business",
    type: "Digital bank (ADGM licensed)",
    minBalance: "AED 0",
    monthlyFee: "AED 0–149 depending on plan",
    bestFor: "Freelancers who want a modern UAE digital bank with quick setup and good accounting integrations",
    pros: ["UAE banking license (ADGM)", "Fast onboarding (days, not weeks)", "No minimum balance", "Integrates with accounting tools"],
    cons: ["Relatively new bank", "Fewer physical touchpoints", "Some large corporate clients may not recognise it"],
  },
];

const steps = [
  {
    num: "1",
    title: "Separate business and personal finances immediately",
    body: "This is the single most important financial move you can make as a freelancer. Mixing accounts makes VAT filing a nightmare, makes it impossible to understand your true profitability, and creates chaos during tax registration. Open a dedicated business account before your first client invoice.",
  },
  {
    num: "2",
    title: "Check if your free zone has a preferred banking partner",
    body: "Many UAE free zones (IFZA, RAKEZ, Meydan, etc.) have partnership agreements with specific banks that fast-track business account opening for their license holders. IFZA-licensed freelancers, for example, have a preferred arrangement with certain banks that cuts KYC time significantly.",
  },
  {
    num: "3",
    title: "Prepare your documents in advance",
    body: "Typical requirements: trade license, Emirates ID, passport copy, proof of address (utility bill or Ejari), and 3–6 months of business activity description. Have these ready in one folder before you approach any bank.",
  },
  {
    num: "4",
    title: "Start with a digital account while your traditional bank processes",
    body: "Traditional bank accounts take 2–6 weeks to open. Open a digital account (Mashreq Neo, Wio) immediately so you can receive payments while the main account is being processed. Most clients can pay to a digital account without issue.",
  },
];

export default function BlogPostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '[{"@context":"https://schema.org","@type":"BlogPosting","headline":"Best Bank Accounts for UAE Freelancers in 2026","description":"Compare the best bank accounts for UAE freelancers in 2026. Find accounts with low fees, easy setup, multi-currency support, and freelance-friendly onboarding.","datePublished":"2026-07-04","dateModified":"2026-07-04","author":{"@type":"Organization","name":"SoloKit","url":"https://solokit.cloud"},"publisher":{"@type":"Organization","name":"SoloKit","url":"https://solokit.cloud"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://solokit.cloud/blog/freelance-bank-account-uae"},"url":"https://solokit.cloud/blog/freelance-bank-account-uae","articleSection":"Tax & Finance","inLanguage":"en"},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://solokit.cloud"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://solokit.cloud/blog"},{"@type":"ListItem","position":3,"name":"Best Bank Accounts for UAE Freelancers in 2026","item":"https://solokit.cloud/blog/freelance-bank-account-uae"}]}]' }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Best Bank Accounts UAE Freelancers</span>
          </nav>

          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">FINANCE</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Best Bank Accounts for UAE Freelancers in 2026
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              A clear comparison of UAE business bank accounts for freelancers — covering fees, minimum balances, setup speed, and which account suits which type of solo business.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Opening a business bank account is one of the first practical steps after getting your UAE freelance license — and one of the most frustrating. Traditional banks move slowly, digital options are growing but not universally accepted, and the difference between accounts can mean thousands of dirhams a year in fees and transfer costs. This guide covers the accounts that actually work for UAE freelancers in 2026.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The Main Options: Compared
          </h2>

          <div className="space-y-5 mb-8">
            {banks.map((bank, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-base">{bank.name}</h3>
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">{bank.type}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                  <span>Min balance: {bank.minBalance}</span>
                  <span>Monthly fee: {bank.monthlyFee}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3"><span className="font-medium text-gray-900">Best for:</span> {bank.bestFor}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-emerald-700 mb-1">Pros</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {bank.pros.map((p, j) => <li key={j}>+ {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 mb-1">Cons</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {bank.cons.map((c, j) => <li key={j}>− {c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            4 Steps to Set Up Your Freelance Banking Correctly
          </h2>

          <div className="space-y-4 mb-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            International Clients: The Multi-Currency Problem
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            If you bill clients outside the UAE — UK, Europe, US, India — you will lose money on every payment unless you handle currency correctly. A UAE AED account receiving GBP via SWIFT conversion typically loses 3–5% on the exchange rate. On AED 50,000 worth of international income, that&apos;s AED 1,500–2,500 per month in unnecessary losses.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The cleanest solution for most freelancers is a Wise Business account alongside a UAE account. Invoice international clients in their currency, receive into Wise in that currency, convert at the real exchange rate when you choose, and transfer to your UAE account when needed. Many UAE freelancers save AED 10,000–30,000 per year this way.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-amber-900 mb-1">VAT note</p>
            <p className="text-sm text-amber-800">
              If your UAE taxable supply exceeds AED 375,000 annually, you must register for VAT. Having a separate business account with clean transaction history is mandatory for this — auditors need to see business income clearly separated from personal spending. Do not wait until you hit the threshold to separate your finances.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Our Recommendation by Freelancer Stage
          </h2>

          <div className="space-y-3 mb-8">
            {[
              { stage: "Just starting (0–AED 10K/month)", rec: "Mashreq Neo Business or Wio Business. Zero minimum balance, fast onboarding, no fees. Get operational immediately." },
              { stage: "Growing (AED 10K–40K/month)", rec: "Add Wise Business for international clients. Keep digital account for day-to-day. Start the application for a traditional account in parallel." },
              { stage: "Established (AED 40K+/month)", rec: "Emirates NBD or RAKBANK for credibility and cheque book access. Keep Wise for international payments. Consider a finance tracker or bookkeeper." },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.stage}</p>
                <p className="text-sm text-gray-600">{item.rec}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/freelance-tax-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                UAE Freelance Tax Guide: VAT, Corporate Tax, and What You Owe →
              </Link>
              <Link href="/blog/how-to-manage-freelance-finances-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Manage Your Freelance Finances in UAE →
              </Link>
              <Link href="/blog/freelance-invoice-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Invoice as a UAE Freelancer →
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <p className="font-bold text-lg mb-2">Track Your Freelance Income the Smart Way</p>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              SoloKit&apos;s finance templates help UAE freelancers track invoices, payments, expenses, and monthly revenue — all in Notion, no spreadsheet chaos required.
            </p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
