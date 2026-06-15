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
      <main className="max-w-2xl mx-auto px-4 py-12 text-gray-900">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-gray-700">Blog</Link>
          <span className="mx-2">›</span>
          <span>EmaraTax Registration for Freelancers</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Tax &amp; Finance
          </div>
          <h1 className="text-3xl font-bold leading-tight mb-4">
            How to Register on EmaraTax as a UAE Freelancer (Step-by-Step 2026)
          </h1>
          <p className="text-gray-500 text-sm mb-4">Updated June 2026 · 7 min read</p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When the UAE introduced its 9% corporate tax in 2023, it came with a requirement that
            applies to <strong>every UAE business</strong> — including individual freelancers on a
            permit or trade license. You must register on EmaraTax.ae, even if you earn well below
            the taxable threshold and will owe exactly zero dirhams.
          </p>
        </header>

        {/* Quick answer box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-amber-900 mb-3">Do I need to register on EmaraTax?</h2>
          <p className="text-amber-800 text-sm leading-relaxed mb-3">
            <strong>Yes</strong> — if you hold any of the following in the UAE:
          </p>
          <ul className="space-y-1 text-amber-800 text-sm list-disc pl-5">
            <li>A freelance permit from any free zone (SHAMS, RAKEZ, DMC, DIC, etc.)</li>
            <li>A mainland trade license</li>
            <li>Any other UAE business license</li>
          </ul>
          <p className="text-amber-800 text-sm mt-3">
            Registration is required <strong>regardless of your income level</strong>. Earning under
            AED 375,000 does not exempt you from registering — it exempts you from paying tax.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">1. Who Needs to Register (and Who Doesn&apos;t)</h2>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-700">Must register on EmaraTax</h3>
              <ul className="space-y-1 text-gray-700 text-sm list-disc pl-5">
                <li>All juridical persons (LLCs, FZCOs, etc.)</li>
                <li>Natural persons (individuals) conducting business in the UAE</li>
                <li>Freelance permit holders from any UAE free zone</li>
                <li>Mainland sole proprietors with a trade license</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-green-700">Likely exempt from registration</h3>
              <ul className="space-y-1 text-gray-700 text-sm list-disc pl-5">
                <li>Salaried employees on a company employment visa (the company handles CT)</li>
                <li>People on a Digital Nomad / Remote Work Visa with no UAE business license</li>
                <li>Students and dependents with no business activity</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-900 text-sm">
              <strong>Key distinction:</strong> Corporate tax is on <em>business profits</em>, not
              personal income. As a freelancer, your business is the taxable entity. Even if you
              pay yourself a salary from your own freelance earnings, that salary is not separately
              taxed as personal income — but your business still has to register.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">2. Step-by-Step: How to Register on EmaraTax</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The registration process is done entirely online at{" "}
            <strong>EmaraTax.ae</strong> (the Federal Tax Authority&apos;s portal). Here&apos;s the
            exact sequence for a freelancer registering as a natural person:
          </p>

          <div className="space-y-4">
            {[
              {
                step: "Step 1",
                title: "Go to EmaraTax.ae → Create Account",
                body: "Visit emaratax.gov.ae and click \"Create Account.\" Enter your email address and create a password. You'll need access to a UAE mobile number for OTP verification.",
              },
              {
                step: "Step 2",
                title: "Verify Your Mobile Number and Email",
                body: "EmaraTax requires a UAE mobile number for two-factor authentication. Enter the OTP sent to your phone, then confirm your email address via the verification link.",
              },
              {
                step: "Step 3",
                title: "Select Entity Type → Natural Person",
                body: "When prompted to select your entity type, choose \"Natural Person\" if you operate as an individual freelancer. Only choose \"Legal Person\" if you have a company (FZCO, LLC, etc.) rather than a personal freelance permit.",
              },
              {
                step: "Step 4",
                title: "Enter Emirates ID and Complete Face Verification",
                body: "Enter your Emirates ID number. You'll be prompted to complete a digital face verification step (similar to opening a UAE bank account). Have your phone ready — this is done via camera scan.",
              },
              {
                step: "Step 5",
                title: "Enter Business Information",
                body: "Provide your free zone permit number, your registered business activity type (e.g., \"Media,\" \"Technology,\" \"Consulting\" — as listed on your permit), and your registered business address.",
              },
              {
                step: "Step 6",
                title: "Upload Supporting Documents",
                body: "Upload clear copies of: (1) your Emirates ID (front and back), and (2) your freelance permit or trade license. Ensure documents are not expired and are clearly legible.",
              },
              {
                step: "Step 7",
                title: "Submit Registration",
                body: "Review all details, then submit. The FTA typically processes registrations within 5–7 business days. You'll receive a confirmation email when approved.",
              },
              {
                step: "Step 8",
                title: "Receive Your TRN and File Your First Return",
                body: "Once approved, you'll receive a Tax Registration Number (TRN). Your first corporate tax return will be due within 9 months of your financial year end — even if your income was zero or below the threshold.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gray-950 text-white text-xs font-bold flex items-center justify-center">
                    {step.replace("Step ", "")}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">3. What Happens After Registration</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Annual Profit</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Tax Rate</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Filing Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Under AED 375,000</td>
                  <td className="p-3 border border-gray-200 text-green-700 font-medium">0%</td>
                  <td className="p-3 border border-gray-200">Yes — file a nil return</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Over AED 375,000</td>
                  <td className="p-3 border border-gray-200 text-amber-700 font-medium">9% on profits above threshold</td>
                  <td className="p-3 border border-gray-200">Yes — file and pay</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Revenue under AED 3 million (Small Business Relief)</td>
                  <td className="p-3 border border-gray-200 text-green-700 font-medium">0% if SBR elected</td>
                  <td className="p-3 border border-gray-200">Yes — simplified return</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold mb-3">Small Business Relief (SBR)</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If your revenue is under AED 3 million, you can elect for Small Business Relief — a
            simplified filing mechanism that treats your taxable income as zero. This is available
            for tax periods ending before 31 December 2026 and is renewable. Most freelancers
            qualify and should elect for this when filing.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-900 text-sm">
              <strong>Practical impact for most freelancers:</strong> Register, get your TRN,
              elect Small Business Relief, file a simplified return once a year, owe nothing.
              The entire process is administrative — but skipping it carries real fines.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">4. Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-700">Confusing corporate tax with income tax</h3>
              <p className="text-gray-700 text-sm">
                Corporate tax applies to your <em>business profits</em>. Personal income tax does
                not exist in the UAE. You are not taxed on your salary or personal earnings — only
                on business profit above AED 375,000.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-700">Not registering because &quot;I earn less than AED 375K&quot;</h3>
              <p className="text-gray-700 text-sm">
                Registration is mandatory for all UAE businesses regardless of income level.
                The AED 375,000 threshold determines whether you <em>pay</em> tax — not whether
                you register.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-700">Missing filing deadlines after registration</h3>
              <p className="text-gray-700 text-sm">
                Once registered, you must file annual CT returns within 9 months of your financial
                year end. Missing a deadline triggers fines even if no tax is owed.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-700">Delaying registration indefinitely</h3>
              <p className="text-gray-700 text-sm">
                There is no grace period for new registrations. If you have an active freelance
                permit and haven&apos;t registered, do it now. Late registration fines range from
                AED 500 to AED 20,000 depending on the period and violation type.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Fines */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">5. Fines for Non-Compliance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Violation</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Fine Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Failure to register for corporate tax</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-medium">AED 10,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Late filing of CT return</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-medium">AED 500–1,000/month</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Failure to maintain records</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-medium">AED 10,000–20,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Providing incorrect information</td>
                  <td className="p-3 border border-gray-200 text-red-700 font-medium">AED 500–20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary */}
        <div className="bg-gray-950 text-white rounded-xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-4">EmaraTax Registration: The Short Version</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex gap-2"><span className="text-amber-400">!</span> Register even if you earn under AED 375,000 — it&apos;s mandatory</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> Go to EmaraTax.ae → Create Account → Natural Person</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> Have Emirates ID, freelance permit, and UAE phone number ready</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> TRN issued in 5–7 business days</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> Elect Small Business Relief if revenue under AED 3M</li>
            <li className="flex gap-2"><span className="text-amber-400">!</span> File annual return within 9 months of your financial year end</li>
          </ul>
        </div>

        {/* Product CTA */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10 text-center">
          <p className="text-sm text-gray-500 mb-2">Keep your income and expenses organised for tax filing</p>
          <h2 className="text-xl font-bold mb-3">Freelancer Client CRM — Notion Template</h2>
          <p className="text-gray-600 text-sm mb-6">
            Track every invoice, expense, and client payment in one place. When your CT return
            is due, your numbers are already organised — no scrambling through bank statements.
            Built for UAE freelancers.
          </p>
          <Link
            href="/#products"
            className="inline-block bg-gray-950 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            See the Freelancer CRM →
          </Link>
        </div>

        {/* Further Reading */}
        <section>
          <h2 className="text-lg font-bold mb-4">Further Reading</h2>
          <div className="grid gap-3">
            {[
              { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE? (2026 Complete Guide)" },
              { href: "/blog/freelance-visa-uae", label: "How to Get a Freelance Visa in UAE (2026)" },
              { href: "/blog/best-banks-freelancers-uae", label: "Best Banks for UAE Freelancers (2026)" },
              { href: "/blog/freelance-rate-calculator-uae", label: "Freelance Rate Calculator: How to Price Your Work in AED" },
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

      </main>
      <Footer />
    </>
  );
}
