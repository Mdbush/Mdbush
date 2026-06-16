import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Register on EmaraTax as a UAE Freelancer (Step-by-Step 2026) — SoloKit",
  description:
    "Since 2023, all UAE businesses (including freelancers) must register on EmaraTax.ae for corporate tax — even if they owe zero. Here's the exact step-by-step process.",
  alternates: { canonical: "/blog/emaratax-registration-freelancers-uae" },
  openGraph: {
    title: "How to Register on EmaraTax as a UAE Freelancer (Step-by-Step 2026)",
    description:
      "All UAE freelancers must register on EmaraTax.ae — even if you owe zero tax. Here's the exact process and what happens after.",
    type: "article",
    url: "/blog/emaratax-registration-freelancers-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Register on EmaraTax as a UAE Freelancer (Step-by-Step 2026)",
  description:
    "Since 2023, all UAE businesses (including freelancers) must register on EmaraTax.ae for corporate tax — even if they owe zero. Here's the exact step-by-step process.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/emaratax-registration-freelancers-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/emaratax-registration-freelancers-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "EmaraTax registration UAE freelancer",
    "UAE corporate tax registration",
    "EmaraTax how to register",
    "UAE freelancer corporate tax",
    "TRN UAE freelancer",
    "emaratax.ae freelancer",
  ],
};

export default function EmarataxRegistrationFreelancersUAEPage() {
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
            <span className="text-gray-600">EmaraTax Registration for Freelancers</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Tax &amp; Finance</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Register on EmaraTax as a UAE Freelancer (Step-by-Step 2026)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              When the UAE introduced its 9% corporate tax in 2023, it came with a requirement that
              applies to <strong className="text-white">every UAE business</strong> — including individual freelancers on a
              permit or trade license. You must register on EmaraTax.ae, even if you owe exactly zero dirhams.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>Updated June 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 10,000", label: "Fine for failure to register" },
              { value: "9%", label: "Corporate tax rate above AED 375K profit" },
              { value: "5–7 days", label: "Processing time after submission" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Answer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-amber-900 mb-2">Do I need to register on EmaraTax?</p>
            <p className="text-sm text-amber-800 leading-relaxed mb-2">
              <strong>Yes</strong> — if you hold any of the following in the UAE:
            </p>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>→ A freelance permit from any free zone (SHAMS, RAKEZ, DMC, DIC, etc.)</li>
              <li>→ A mainland trade license</li>
              <li>→ Any other UAE business license</li>
            </ul>
            <p className="text-sm text-amber-800 mt-3">
              Registration is required <strong>regardless of your income level</strong>. Earning under
              AED 375,000 does not exempt you from registering — it exempts you from paying tax.
            </p>
          </div>

          {/* Who Needs to Register */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            1. Who Needs to Register (and Who Doesn&apos;t)
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-red-200 rounded-xl p-5">
              <h3 className="font-semibold text-red-700 mb-3">Must register on EmaraTax</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-red-500 shrink-0">!</span>All juridical persons (LLCs, FZCOs, etc.)</li>
                <li className="flex gap-2"><span className="text-red-500 shrink-0">!</span>Natural persons (individuals) conducting business in the UAE</li>
                <li className="flex gap-2"><span className="text-red-500 shrink-0">!</span>Freelance permit holders from any UAE free zone</li>
                <li className="flex gap-2"><span className="text-red-500 shrink-0">!</span>Mainland sole proprietors with a trade license</li>
              </ul>
            </div>
            <div className="border border-emerald-200 rounded-xl p-5">
              <h3 className="font-semibold text-emerald-700 mb-3">Likely exempt from registration</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>Salaried employees on a company employment visa</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>People on a Digital Nomad / Remote Work Visa with no UAE business license</li>
                <li className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>Students and dependents with no business activity</li>
              </ul>
            </div>
          </div>

          {/* Step-by-Step Registration */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            2. Step-by-Step: How to Register on EmaraTax
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The registration process is done entirely online at <strong>EmaraTax.ae</strong>.
            Here&apos;s the exact sequence for a freelancer registering as a natural person:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              { step: "1", title: "Go to EmaraTax.ae → Create Account", body: "Visit emaratax.gov.ae and click \"Create Account.\" Enter your email address and create a password. You'll need access to a UAE mobile number for OTP verification." },
              { step: "2", title: "Verify Your Mobile Number and Email", body: "EmaraTax requires a UAE mobile number for two-factor authentication. Enter the OTP sent to your phone, then confirm your email address via the verification link." },
              { step: "3", title: "Select Entity Type → Natural Person", body: "Choose \"Natural Person\" if you operate as an individual freelancer. Only choose \"Legal Person\" if you have a company (FZCO, LLC, etc.) rather than a personal freelance permit." },
              { step: "4", title: "Enter Emirates ID and Complete Face Verification", body: "Enter your Emirates ID number. You'll be prompted to complete a digital face verification step (similar to opening a UAE bank account). Have your phone ready — done via camera scan." },
              { step: "5", title: "Enter Business Information", body: "Provide your free zone permit number, your registered business activity type (as listed on your permit), and your registered business address." },
              { step: "6", title: "Upload Supporting Documents", body: "Upload clear copies of: (1) your Emirates ID (front and back), and (2) your freelance permit or trade license. Documents must not be expired and must be clearly legible." },
              { step: "7", title: "Submit Registration", body: "Review all details, then submit. The FTA typically processes registrations within 5–7 business days. You'll receive a confirmation email when approved." },
              { step: "8", title: "Receive Your TRN and File Your First Return", body: "Once approved, you'll receive a Tax Registration Number (TRN). Your first corporate tax return will be due within 9 months of your financial year end — even if your income was zero or below the threshold." },
            ].map((item) => (
              <li key={item.step} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">Step {item.step} — {item.title}:</strong> {item.body}</span>
              </li>
            ))}
          </ul>

          {/* What Happens After */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            3. What Happens After Registration
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 border border-gray-700 font-semibold">Annual Profit</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Tax Rate</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Filing Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Under AED 375,000</td>
                  <td className="p-3 border border-gray-200 text-emerald-700 font-medium">0%</td>
                  <td className="p-3 border border-gray-200">Yes — file a nil return</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Over AED 375,000</td>
                  <td className="p-3 border border-gray-200 text-amber-700 font-medium">9% on profits above threshold</td>
                  <td className="p-3 border border-gray-200">Yes — file and pay</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Revenue under AED 3 million (Small Business Relief)</td>
                  <td className="p-3 border border-gray-200 text-emerald-700 font-medium">0% if SBR elected</td>
                  <td className="p-3 border border-gray-200">Yes — simplified return</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Small Business Relief (SBR)</p>
            <p className="text-sm text-emerald-800 leading-relaxed">
              If your revenue is under AED 3 million, you can elect for Small Business Relief — a
              simplified filing mechanism that treats your taxable income as zero. Available for tax periods
              ending before 31 December 2026. Most freelancers qualify and should elect for this when filing.
              Practical impact: register, get your TRN, elect SBR, file a simplified return once a year, owe nothing.
            </p>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            4. Common Mistakes to Avoid
          </h2>

          <div className="space-y-3 mb-8">
            {[
              { mistake: "Confusing corporate tax with income tax", detail: "Corporate tax applies to your business profits. Personal income tax does not exist in the UAE. You are not taxed on your salary or personal earnings — only on business profit above AED 375,000." },
              { mistake: "Not registering because 'I earn less than AED 375K'", detail: "Registration is mandatory for all UAE businesses regardless of income level. The AED 375,000 threshold determines whether you pay tax — not whether you register." },
              { mistake: "Missing filing deadlines after registration", detail: "Once registered, you must file annual CT returns within 9 months of your financial year end. Missing a deadline triggers fines even if no tax is owed." },
              { mistake: "Delaying registration indefinitely", detail: "There is no grace period for new registrations. If you have an active freelance permit and haven't registered, do it now. Late registration fines range from AED 500 to AED 20,000." },
            ].map((item) => (
              <div key={item.mistake} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-red-700 mb-1">✗ {item.mistake}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Fines Table */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            5. Fines for Non-Compliance
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 border border-gray-700 font-semibold">Violation</th>
                  <th className="text-left p-3 border border-gray-700 font-semibold">Fine Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { violation: "Failure to register for corporate tax", fine: "AED 10,000" },
                  { violation: "Late filing of CT return", fine: "AED 500–1,000/month" },
                  { violation: "Failure to maintain records", fine: "AED 10,000–20,000" },
                  { violation: "Providing incorrect information", fine: "AED 500–20,000" },
                ].map((row, i) => (
                  <tr key={row.violation} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-3 border border-gray-200">{row.violation}</td>
                    <td className="p-3 border border-gray-200 text-red-700 font-medium">{row.fine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-3">EmaraTax Registration: The Short Version</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">!</span>Register even if you earn under AED 375,000 — it&apos;s mandatory</li>
              <li className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>Go to EmaraTax.ae → Create Account → Natural Person</li>
              <li className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>Have Emirates ID, freelance permit, and UAE phone number ready</li>
              <li className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>TRN issued in 5–7 business days</li>
              <li className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>Elect Small Business Relief if revenue under AED 3M</li>
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">!</span>File annual return within 9 months of your financial year end</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/products/solokit-freelance-os" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/freelance-tax-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Do Freelancers Pay Tax in the UAE? (2026 Complete Guide)</Link>
              <Link href="/blog/freelance-invoice-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Invoice Clients in the UAE (AED Invoicing Guide)</Link>
              <Link href="/blog/freelance-visa-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Get a Freelance Visa in UAE (2026)</Link>
              <Link href="/blog/best-banks-freelancers-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Best Banks for UAE Freelancers (2026)</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
