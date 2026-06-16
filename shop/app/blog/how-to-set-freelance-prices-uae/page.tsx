import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Set Your Freelance Prices in the UAE: The Complete System (2026)",
  description:
    "A step-by-step pricing system for UAE freelancers — how to calculate your minimum viable rate, what your UAE market actually pays, when to raise prices, and how to present your rates to clients without losing the deal.",
  alternates: { canonical: "/blog/how-to-set-freelance-prices-uae" },
  openGraph: {
    title: "How to Set Your Freelance Prices in the UAE: The Complete System (2026)",
    description: "How UAE freelancers set profitable rates — minimum rate calculation, market positioning, price increases, and presenting rates to clients.",
    type: "article",
    url: "/blog/how-to-set-freelance-prices-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Your Freelance Prices in the UAE: The Complete System (2026)",
  description: "A step-by-step pricing system for UAE freelancers.",
  url: `${siteUrl}/blog/how-to-set-freelance-prices-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToSetFreelancePricesUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">How to Set Freelance Prices UAE</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing & Rates</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            How to Set Your Freelance Prices in the UAE: The Complete System (2026)
          </h1>
          <p className="text-gray-500 text-sm">9 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Most UAE freelancers set their rates wrong — either by copying what they see
            others charge without understanding the context, or by anchoring on their
            previous salary divided by working hours. Both approaches leave significant
            income on the table. Pricing is a skill, and in the UAE market — where rates
            vary enormously by client type, your perceived expertise, and how you frame
            your value — getting it right is worth tens of thousands of AED annually.
            Here is a complete pricing system for 2026.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-1">The core principle</p>
            <p className="text-gray-700">
              Freelance rates are not determined by what you think you&apos;re worth —
              they&apos;re determined by <strong>the value you create for the client</strong> and
              the <strong>alternatives the client has</strong>. A logo that helps a startup
              raise AED 5 million is worth far more than the time it took to design.
              Pricing from value, not from hours, is the single highest-leverage
              change most UAE freelancers can make.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 1: Calculate Your Minimum Viable Rate</h2>
            <p className="text-sm text-gray-600 mb-3">
              Before setting market rates, know your floor — the minimum you need to earn
              to cover costs and sustain your freelance career in the UAE.
            </p>
            <div className="space-y-3 mt-4">
              {[
                { step: "Monthly living costs", detail: "Add up: rent (AED 4,000–15,000+/month depending on area), utilities, food, transport, mobile, health insurance (mandatory in Dubai), and lifestyle spending. Total UAE freelancer living cost typically ranges from AED 8,000–25,000/month depending on lifestyle." },
                { step: "Business costs", detail: "Trade license renewal (AED 5,000–15,000/year ÷ 12), software subscriptions, equipment depreciation, co-working space (AED 800–3,000/month), professional insurance, accountant fees. Add AED 1,500–4,000/month for most freelancers." },
                { step: "Tax and savings buffer", detail: "UAE has no income tax, but you may have UAE corporate tax obligations. Add 15–20% buffer for savings, pension (UAE has no mandatory retirement system — you&apos;re building your own), and dry spell coverage (aim for 3 months expenses in reserve)." },
                { step: "Billable hours reality check", detail: "40 hours/week sounds achievable. Reality: 50–60% of your working time is non-billable (business development, admin, proposals, learning, unbillable revisions). A realistic estimate is 80–100 billable hours per month, not 160. Divide your required monthly income by 80–100 to get your true floor hourly rate." },
              ].map((item) => (
                <div key={item.step} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.step}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 2: Understand What the UAE Market Actually Pays</h2>
            <p className="text-sm text-gray-600 mb-3">
              The UAE has multiple rate tiers depending on the client type. The same
              service has different market rates depending on who&apos;s paying:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Client type</th>
                    <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Budget expectation</th>
                    <th className="text-left py-2 text-gray-500 font-semibold text-xs">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "UAE enterprise / government", budget: "High (AED 50,000–500,000+ projects)", notes: "Long procurement cycles, but large budgets. Procurement happens through RFP processes. Strong compliance requirements." },
                    { type: "DIFC-licensed multinational", budget: "High (AED 20,000–200,000+ projects)", notes: "DIFC companies operate on international rates. They expect premium quality and are willing to pay for it." },
                    { type: "UAE SME (established, 10+ years)", budget: "Mid-high (AED 5,000–50,000 projects)", notes: "Varies widely. Family businesses can be high-budget but slow-moving. Tech SMEs are faster." },
                    { type: "Dubai startup (seed to Series A)", budget: "Mid (AED 3,000–25,000 projects)", notes: "Startups are cost-conscious but quick to pay and quick to decide. Often become repeat clients as they grow." },
                    { type: "Individual entrepreneur / solopreneur", budget: "Low-mid (AED 500–8,000 projects)", notes: "Budget-sensitive. Position entry-level packages at this tier. High volume required to build meaningful income." },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-gray-900 text-xs">{row.type}</td>
                      <td className="py-3 pr-4 text-gray-600 text-xs">{row.budget}</td>
                      <td className="py-3 text-gray-600 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 3: The Three Pricing Models and When to Use Each</h2>
            <div className="space-y-3 mt-4">
              {[
                { model: "Hourly rates", when: "Use when scope is unclear, for ongoing advisory work, or when you&apos;re building a relationship with a new client where neither side knows the true scope.", pros: "Fair when work expands unexpectedly. Easy to understand.", cons: "Penalizes efficiency — the better you get, the less you earn for the same output. Clients can feel uncertain about the final bill." },
                { model: "Project (fixed) pricing", when: "Use when scope is clearly defined: a website with X pages, a logo with 3 concepts and 2 rounds of revisions, a 30-second video script.", pros: "Clients love certainty. You can earn more as you get faster. Cleaner for both parties.", cons: "Scope creep is costly. Requires careful scope definition and a watertight change order process." },
                { model: "Retainer / monthly fee", when: "Use for ongoing services (social media management, monthly content production, ongoing advisory). Best for services where deliverables repeat.", pros: "Predictable income. Deepens client relationship. Reduces new business development time.", cons: "Requires strong systems to manage multiple retainers without burnout. Difficult to exit if the relationship sours." },
              ].map((item) => (
                <div key={item.model} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.model}</p>
                  <p className="text-xs text-gray-500 mb-1"><strong>Use when:</strong> {item.when}</p>
                  <p className="text-xs text-gray-600 mb-1"><strong>Pros:</strong> {item.pros}</p>
                  <p className="text-xs text-gray-600"><strong>Watch out:</strong> {item.cons}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 4: How to Present Your Rates Without Losing the Deal</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li>• <strong>Anchor high first</strong> — The first number you mention anchors the negotiation. Lead with a premium option. If your target price is AED 8,000, your first option should be a AED 14,000 comprehensive package. AED 8,000 now looks like a reasonable mid-tier, not an expensive entry point</li>
              <li>• <strong>Use a tiered proposal</strong> — Present 3 options: an entry tier, a core tier (your preferred engagement), and a premium tier. Most clients choose the middle option. The premium tier makes the core look reasonable; the entry tier shows flexibility without making AED zero your floor</li>
              <li>• <strong>Never apologize for your rates</strong> — &quot;I know it&apos;s expensive, but...&quot; signals that you don&apos;t believe your own price. State your rate matter-of-factly. Silence after stating a price is normal — don&apos;t fill it by discounting</li>
              <li>• <strong>Talk value before price</strong> — Discuss the outcomes the client wants before you mention any numbers. A client who has articulated that they need to increase leads by 40% is primed to evaluate AED 15,000/month in a different context than a client who&apos;s just comparing service provider rates</li>
              <li>• <strong>Scope before you quote</strong> — Never quote from a brief alone. A 30-minute discovery call lets you understand actual scope, urgency, budget signals, and decision-making context. Quoting blind leads to either underquoting (you get the job, then resent it) or overquoting (you lose a project you could have won)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 5: When and How to Raise Your Rates</h2>
            <p className="text-sm text-gray-600 mb-3">
              In the UAE market, there are three reliable signals that it&apos;s time to raise rates:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>Your close rate exceeds 70%</strong> — If nearly everyone you quote says yes, you are underpriced. The right close rate for a healthy freelance business is 30–50% — you&apos;re winning the right clients and pricing out the wrong ones</li>
              <li>• <strong>You&apos;re fully booked with a waitlist</strong> — Supply constraint justifies a price increase. Existing clients get one final project at the old rate; new clients are quoted at the new rate</li>
              <li>• <strong>Your work quality has demonstrably improved</strong> — A portfolio that consistently delivers measurable results (revenue increase, lead volume, press coverage) should be priced to reflect that value, not your original entry-point rates</li>
              <li>• <strong>Annual review as standard practice</strong> — Review and adjust rates every January. Position it as market alignment: &quot;I review my rates annually — from Q1 my rate for [service] increases to AED X. Projects starting before December 31 are at the current rate.&quot; This creates both urgency and a professional precedent</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Build your pricing system</p>
            <h3 className="text-lg font-bold mb-2">Freelancer Rate Calculator — Know Your Floor Before You Quote</h3>
            <p className="text-gray-400 text-sm mb-4">
              Calculate your minimum viable rate based on your actual UAE living costs,
              business expenses, and target income — so you never quote below sustainable
              again.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Get the Rate Calculator →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?" },
                { href: "/blog/how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Rates Without Losing the Client" },
                { href: "/blog/how-to-raise-rates-existing-clients-uae", title: "How to Raise Your Freelance Rates With Existing Clients" },
                { href: "/blog/freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include" },
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
