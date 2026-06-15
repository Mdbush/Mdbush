import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Rate Calculator UAE: How Much to Charge (2026) — SoloKit",
  description:
    "Calculate your minimum freelance rate in AED. Covers your target salary, overhead costs, taxes, client acquisition, and the formula UAE freelancers use to set profitable rates.",
  alternates: { canonical: "/blog/freelance-rate-calculator-uae" },
  openGraph: {
    title: "Freelance Rate Calculator UAE: How Much to Charge (2026)",
    description: "The exact formula UAE freelancers use to calculate their minimum hourly and project rates in AED.",
    type: "article",
    url: "/blog/freelance-rate-calculator-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Rate Calculator UAE: How Much to Charge (2026)",
  description:
    "Calculate your minimum freelance rate in AED. Covers target salary, overhead, taxes, and the formula UAE freelancers use to set profitable rates.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-rate-calculator-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-rate-calculator-uae",
  image: "https://solokit.cloud/og-image.png",
  keywords: [
    "freelance rate calculator UAE",
    "how much to charge freelance UAE",
    "freelancer hourly rate Dubai",
    "freelance pricing UAE",
    "AED freelance rates",
    "minimum freelance rate calculator",
  ],
};

export default function FreelanceRateCalculatorUAEPage() {
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
          <span>Freelance Rate Calculator UAE</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Business
          </div>
          <h1 className="text-3xl font-bold leading-tight mb-4">
            Freelance Rate Calculator UAE: How Much Should You Charge? (2026)
          </h1>
          <p className="text-gray-500 text-sm mb-4">Updated June 2026 · 8 min read</p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Most UAE freelancers set rates by guessing — either copying what they see on job boards or
            undercutting competitors. Both strategies leave money on the table. Here&apos;s the formula
            that works backwards from what you actually need to earn.
          </p>
        </header>

        {/* Core formula */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">The Minimum Rate Formula</h2>
          <div className="bg-gray-950 text-white rounded-xl p-6 mb-6 font-mono text-sm">
            <p className="text-gray-400 mb-2">// Step 1: Annual target income</p>
            <p className="mb-4">Target Take-Home × 12 = Annual Target</p>
            <p className="text-gray-400 mb-2">// Step 2: Add overhead</p>
            <p className="mb-4">Annual Target + Business Costs = Gross Revenue Needed</p>
            <p className="text-gray-400 mb-2">// Step 3: Account for non-billable time</p>
            <p className="mb-4">Gross Revenue ÷ Billable Hours Per Year = Minimum Hourly Rate</p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            The most common mistake is skipping step 3. You don&apos;t bill 40 hours a week — you bill
            maybe 20-25 hours. The rest is admin, marketing, proposals, learning, and client calls.
            Your rate must cover all of that time, not just the hours you invoice.
          </p>
        </section>

        {/* Worked example */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6">Worked Example: AED 20K/Month Target</h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-gray-950 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">1</span>
                Set your monthly take-home target
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-2 text-gray-600">Monthly rent (Dubai 1BR)</td>
                      <td className="py-2 text-right font-medium">AED 8,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Food & transport</td>
                      <td className="py-2 text-right font-medium">AED 3,500</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Lifestyle & savings</td>
                      <td className="py-2 text-right font-medium">AED 5,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Emergency buffer</td>
                      <td className="py-2 text-right font-medium">AED 3,500</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="pt-3 font-semibold">Monthly target take-home</td>
                      <td className="pt-3 text-right font-bold text-lg">AED 20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-gray-950 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">2</span>
                Add annual business overhead
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-2 text-gray-600">Freelance permit/visa (SHAMS or IFZA)</td>
                      <td className="py-2 text-right font-medium">AED 7,500/yr</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Health insurance</td>
                      <td className="py-2 text-right font-medium">AED 5,000/yr</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Software (Notion, Zoom, Adobe, etc.)</td>
                      <td className="py-2 text-right font-medium">AED 3,600/yr</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Co-working / equipment</td>
                      <td className="py-2 text-right font-medium">AED 6,000/yr</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Accounting & banking</td>
                      <td className="py-2 text-right font-medium">AED 3,000/yr</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Marketing & proposals</td>
                      <td className="py-2 text-right font-medium">AED 2,400/yr</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="pt-3 font-semibold">Annual overhead</td>
                      <td className="pt-3 text-right font-bold">AED 27,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-gray-950 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">3</span>
                Calculate gross revenue needed
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-2 text-gray-600">Annual take-home target</td>
                      <td className="py-2 text-right font-medium">AED 240,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Annual overhead</td>
                      <td className="py-2 text-right font-medium">AED 27,500</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Income gap buffer (15% — slow months)</td>
                      <td className="py-2 text-right font-medium">AED 40,125</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="pt-3 font-semibold">Gross annual revenue needed</td>
                      <td className="pt-3 text-right font-bold">AED 307,625</td>
                    </tr>
                    <tr>
                      <td className="pt-1 font-semibold">Per month</td>
                      <td className="pt-1 text-right font-bold text-lg">≈ AED 25,635</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                To take home AED 20K/month, you need to bill approximately AED 25,600/month — a 28% premium over your target.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="bg-gray-950 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono">4</span>
                Convert to hourly rate
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-2 text-gray-600">Working weeks per year</td>
                      <td className="py-2 text-right font-medium">46 (after leave & holidays)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Billable hours per week</td>
                      <td className="py-2 text-right font-medium">25 hours</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">Annual billable hours</td>
                      <td className="py-2 text-right font-medium">1,150 hours</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="pt-3 font-semibold">Minimum hourly rate</td>
                      <td className="pt-3 text-right font-bold text-lg">AED 267/hr</td>
                    </tr>
                    <tr>
                      <td className="pt-1 text-xs text-gray-500">(AED 307,625 ÷ 1,150)</td>
                      <td className="pt-1 text-right text-xs text-gray-500">≈ $72 USD/hr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
                <p className="text-amber-900 text-xs">
                  <strong>This is your floor, not your ceiling.</strong> This rate covers your costs
                  and hits your target — it doesn&apos;t account for profit margin, scaling, or the premium
                  you charge for expertise. Add 20-30% to this number for a sustainable, growing business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rate benchmarks by profession */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Market Rates by Profession (UAE, 2026)</h2>
          <p className="text-gray-700 text-sm mb-4">
            Use these as a sanity check against your calculated minimum. If your formula says AED 150/hr
            but the market pays AED 400/hr, charge AED 400/hr.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Profession</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Mid-Level Rate</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Senior Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Graphic Designer</td>
                  <td className="p-3 border border-gray-200">AED 150–250/hr</td>
                  <td className="p-3 border border-gray-200">AED 300–500/hr</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Web Developer (Frontend)</td>
                  <td className="p-3 border border-gray-200">AED 200–350/hr</td>
                  <td className="p-3 border border-gray-200">AED 400–700/hr</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Web Developer (Full Stack)</td>
                  <td className="p-3 border border-gray-200">AED 300–450/hr</td>
                  <td className="p-3 border border-gray-200">AED 500–900/hr</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Copywriter / Content Writer</td>
                  <td className="p-3 border border-gray-200">AED 120–200/hr</td>
                  <td className="p-3 border border-gray-200">AED 250–450/hr</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Social Media Manager</td>
                  <td className="p-3 border border-gray-200">AED 100–200/hr</td>
                  <td className="p-3 border border-gray-200">AED 250–400/hr</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Marketing Consultant</td>
                  <td className="p-3 border border-gray-200">AED 300–500/hr</td>
                  <td className="p-3 border border-gray-200">AED 600–1,200/hr</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Video Editor</td>
                  <td className="p-3 border border-gray-200">AED 150–250/hr</td>
                  <td className="p-3 border border-gray-200">AED 300–550/hr</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">UI/UX Designer</td>
                  <td className="p-3 border border-gray-200">AED 250–400/hr</td>
                  <td className="p-3 border border-gray-200">AED 500–800/hr</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Business Consultant</td>
                  <td className="p-3 border border-gray-200">AED 400–700/hr</td>
                  <td className="p-3 border border-gray-200">AED 800–2,000/hr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Rates vary significantly by niche, client type (SME vs corporate), and your portfolio. These are
            market averages — specialists with proven ROI charge 2-3× these figures.
          </p>
        </section>

        {/* Project vs hourly */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Project Rate vs Hourly Rate</h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Most experienced UAE freelancers move away from hourly billing as soon as possible. Here&apos;s why:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-red-100 bg-red-50 rounded-xl p-5">
              <h3 className="font-semibold text-red-900 mb-3">Hourly Billing Problems</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>→ Punishes you for getting faster</li>
                <li>→ Client always watching the clock</li>
                <li>→ Income caps at hours worked</li>
                <li>→ Scope creep is hard to charge for</li>
                <li>→ Race to the bottom with competitors</li>
              </ul>
            </div>
            <div className="border border-green-100 bg-green-50 rounded-xl p-5">
              <h3 className="font-semibold text-green-900 mb-3">Project Pricing Benefits</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>→ Rewards efficiency</li>
                <li>→ Client focused on outcome</li>
                <li>→ Predictable cash flow</li>
                <li>→ Easier to justify with deliverables</li>
                <li>→ Scales with value, not time</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4 leading-relaxed">
            <strong>How to convert:</strong> Estimate hours × your hourly rate, then add 20% for surprises.
            If a website redesign takes 40 hours at AED 300/hr, your minimum project price is
            AED 14,400. Quote AED 15,000–18,000 based on client budget and scope complexity.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">5 Rate Mistakes UAE Freelancers Make</h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Matching the cheapest competitor",
                text: "Clients who pick based on price alone are the worst clients. Competing on price attracts budget clients and destroys your margins. Compete on outcomes, not cost.",
              },
              {
                n: "2",
                title: "Not charging for revisions",
                text: "First define what's included, then charge for anything beyond. 'Unlimited revisions' kills profitability. Cap revisions at 2 rounds in your proposal.",
              },
              {
                n: "3",
                title: "Quoting the same rate to all clients",
                text: "A startup and a corporate client should pay differently. Your rate for a multinational can be 2-3× your SME rate. The work is the same; the value isn't.",
              },
              {
                n: "4",
                title: "Not raising rates annually",
                text: "Dubai inflation is real. If you haven't raised rates in 2+ years, you're earning less in real terms. Raise by 10-15% each January. Existing clients get a 3-month notice.",
              },
              {
                n: "5",
                title: "Discounting to close faster",
                text: "Discounting signals you were overpriced or desperate. Instead, offer a smaller scope at the same rate: 'I can do X for that budget, but Y would need to be a Phase 2.'",
              },
            ].map(({ n, title, text }) => (
              <div key={n} className="flex gap-4">
                <span className="bg-red-100 text-red-800 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick calculator table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Quick Rate Reference Table</h2>
          <p className="text-gray-700 text-sm mb-4">
            Based on the formula above, here&apos;s what minimum hourly rate you need at different income
            targets (assuming AED 27,500 overhead, 1,150 billable hours, 15% buffer):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Monthly Take-Home Target</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Revenue Needed / Month</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Minimum Hourly Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { target: "AED 10,000", revenue: "AED 13,200", rate: "AED 138/hr" },
                  { target: "AED 15,000", revenue: "AED 19,400", rate: "AED 202/hr" },
                  { target: "AED 20,000", revenue: "AED 25,600", rate: "AED 267/hr" },
                  { target: "AED 30,000", revenue: "AED 38,000", rate: "AED 397/hr" },
                  { target: "AED 50,000", revenue: "AED 62,800", rate: "AED 656/hr" },
                ].map(({ target, revenue, rate }, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-3 border border-gray-200 font-medium">{target}</td>
                    <td className="p-3 border border-gray-200">{revenue}</td>
                    <td className="p-3 border border-gray-200 font-semibold">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-950 text-white rounded-xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-3">Track Your Rates and Revenue in Notion</h2>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            The Freelancer Client CRM includes an income dashboard where you can log every project,
            track your effective hourly rate per client, and see at a glance whether you&apos;re hitting
            your monthly AED targets.
          </p>
          <Link
            href="/#products"
            className="inline-block bg-white text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            See All Products →
          </Link>
        </div>

        {/* Further Reading */}
        <section>
          <h2 className="text-lg font-bold mb-4">Further Reading</h2>
          <div className="grid gap-3">
            {[
              { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in the UAE" },
              { href: "/blog/freelance-vs-salary-uae", label: "Freelance vs Salary in UAE — The Real Numbers" },
              { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE?" },
              { href: "/blog/get-freelance-clients-uae", label: "How to Get Freelance Clients in the UAE" },
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
