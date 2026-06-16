import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Designer Rates in the UAE (2026): What to Charge",
  description:
    "Real freelance design rates in the UAE by specialization — graphic design, UI/UX, motion, brand identity. AED pricing for junior, mid, and senior level.",
  alternates: { canonical: "/blog/freelance-designer-rates-uae" },
  openGraph: {
    title: "Freelance Designer Rates in the UAE (2026): What to Charge",
    description: "Real AED hourly and project rates for UAE freelance designers by specialization and seniority.",
    type: "article",
    url: "/blog/freelance-designer-rates-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Designer Rates in the UAE (2026): What to Charge",
  description: "Real freelance design rates in the UAE by specialization — graphic design, UI/UX, motion, brand identity.",
  url: `${siteUrl}/blog/freelance-designer-rates-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const rates = [
  {
    specialization: "Graphic / Visual Designer",
    junior: { hourly: "AED 80–120", project: "AED 800–2,000" },
    mid: { hourly: "AED 150–220", project: "AED 2,500–6,000" },
    senior: { hourly: "AED 250–400", project: "AED 6,000–15,000" },
  },
  {
    specialization: "UI/UX Designer",
    junior: { hourly: "AED 100–160", project: "AED 3,000–8,000" },
    mid: { hourly: "AED 200–300", project: "AED 8,000–20,000" },
    senior: { hourly: "AED 350–550", project: "AED 20,000–50,000" },
  },
  {
    specialization: "Brand Identity Designer",
    junior: { hourly: "AED 90–140", project: "AED 2,000–5,000" },
    mid: { hourly: "AED 160–260", project: "AED 5,000–15,000" },
    senior: { hourly: "AED 300–500", project: "AED 15,000–40,000" },
  },
  {
    specialization: "Motion / Video Designer",
    junior: { hourly: "AED 80–130", project: "AED 1,500–4,000" },
    mid: { hourly: "AED 150–250", project: "AED 4,000–10,000" },
    senior: { hourly: "AED 280–450", project: "AED 10,000–25,000" },
  },
  {
    specialization: "Presentation / Pitch Deck Designer",
    junior: { hourly: "AED 70–110", project: "AED 800–2,500" },
    mid: { hourly: "AED 130–200", project: "AED 2,500–7,000" },
    senior: { hourly: "AED 220–350", project: "AED 7,000–18,000" },
  },
  {
    specialization: "Social Media Designer",
    junior: { hourly: "AED 60–100", project: "AED 500–1,500/mo" },
    mid: { hourly: "AED 110–180", project: "AED 1,500–4,000/mo" },
    senior: { hourly: "AED 200–320", project: "AED 4,000–8,000/mo" },
  },
];

export default function FreelanceDesignerRatesUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Freelance Designer Rates UAE</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing & Rates</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Freelance Designer Rates in the UAE (2026): What to Charge
          </h1>
          <p className="text-gray-500 text-sm">8 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Design is one of the most underpriced services in the UAE freelance market. Junior designers
            often charge AED 50–70/hour for work that experienced studios charge AED 350+ for.
            Whether you are starting out or trying to justify a rate increase, this guide gives you
            real market data broken down by specialization and seniority — sourced from active
            freelancers working in Dubai and Abu Dhabi.
          </p>

          {/* Rate table */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">UAE Freelance Designer Rate Table (2026)</h2>
            <p className="text-sm text-gray-500 mb-4">
              Hourly rates are for client-facing billable hours. Project rates are estimates for typical
              project scopes — always scope carefully before quoting a fixed price.
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Specialization</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Junior (0–2 yrs)</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Mid (3–5 yrs)</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Senior (6+ yrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.specialization}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">
                        <div>{row.junior.hourly}/hr</div>
                        <div className="text-xs text-gray-400">{row.junior.project}</div>
                      </td>
                      <td className="p-3 border border-gray-200 text-gray-600">
                        <div>{row.mid.hourly}/hr</div>
                        <div className="text-xs text-gray-400">{row.mid.project}</div>
                      </td>
                      <td className="p-3 border border-gray-200 text-gray-600">
                        <div>{row.senior.hourly}/hr</div>
                        <div className="text-xs text-gray-400">{row.senior.project}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Rates reflect the Dubai/Abu Dhabi market as of 2026. International clients and luxury brands often pay 30–50% above these figures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Drives Design Rates in the UAE</h2>

            <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">1. Specialization premium</h3>
            <p>
              UI/UX commands the highest rates because the work directly impacts product revenue —
              clients can calculate an ROI. Brand identity work also earns a significant premium
              because it is strategic, not just aesthetic. Social media design, by contrast, is
              commoditized: clients see it as repeatable execution, so rates are lower.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">2. Portfolio depth and case studies</h3>
            <p>
              In the UAE, clients respond to recognizable brand names in your portfolio — if you
              have done work for a well-known Dubai retailer, hotel, or government entity, that
              signals credibility more than years of experience. A designer with 2 years of
              experience and 5 case studies showing measurable results (traffic, conversions,
              engagement) will consistently out-earn a designer with 8 years and a generic portfolio.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">3. Client type</h3>
            <p>
              UAE clients fall into distinct tiers. Startups typically want to spend less but move
              faster. SMEs value reliability over creativity. Large corporates and government entities
              run procurement processes that take time but pay well. Expat-run businesses often have
              international benchmarks and will pay London or New York rates for the right designer.
              Know which type you are targeting and price accordingly.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">4. Language and cultural fit</h3>
            <p>
              Designers who can work in Arabic — or who understand the visual sensibilities of
              GCC audiences — command a significant premium in the UAE. Many global design agencies
              have struggled here precisely because they do not understand local aesthetics, colour
              preferences, or the right-to-left layout requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Hourly vs Project Pricing: Which Is Right for You?</h2>

            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Hourly pricing works when:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Scope is unclear or likely to change</li>
                  <li>• You are doing ongoing retainer work</li>
                  <li>• The client wants multiple rounds of revision</li>
                  <li>• You are doing research or strategy phases</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Project pricing works when:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• You can define deliverables precisely</li>
                  <li>• You work faster than average (keeps margin high)</li>
                  <li>• Client is outcome-focused, not process-focused</li>
                  <li>• You want to scale without trading hours for AED</li>
                </ul>
              </div>
            </div>

            <p>
              Most experienced UAE freelance designers use a hybrid: hourly for discovery and
              unclear scopes, project pricing for execution once scope is locked. This protects
              you from scope creep while letting you earn more on projects you can execute
              efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Common Pricing Mistakes UAE Designers Make</h2>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Pricing based on time, not value</h3>
            <p>
              A logo that takes you 3 hours is not worth AED 400 just because you charge AED 133/hour.
              If that logo will go on every storefront, vehicle, and product a business owns for the
              next decade, it is worth AED 5,000–15,000. Price based on what the output is worth
              to the client, not how long it takes you.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Not including revision limits</h3>
            <p>
              The biggest margin killer in design is unlimited revisions. Always state in your
              proposal: "Includes 2 rounds of revisions. Additional rounds billed at AED X/hour."
              Most clients will not use more than 2 rounds if they know additional rounds cost extra.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Discounting to close deals</h3>
            <p>
              Discounting trains clients to expect discounts. If your rate is AED 200/hour and a
              client says it is too high, do not drop to AED 150. Instead, reduce the scope: fewer
              deliverables, fewer rounds of revisions, a shorter timeline. This holds your rate
              while still accommodating budget constraints.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">Ignoring usage rights</h3>
            <p>
              In the UAE, most clients expect unlimited commercial usage rights. If a client wants
              to use your work internationally, across media, or license it to other entities, that
              should cost more. Include a simple usage rights section in every proposal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Clients in the UAE Actually Pay</h2>
            <p>
              Based on what freelancers report in the UAE market, here are typical project budgets
              by client type:
            </p>

            <div className="space-y-3 my-4">
              {[
                { client: "Startup (pre-revenue)", typical: "AED 2,000–8,000 for full brand kit", note: "Often negotiate, expect fast turnaround" },
                { client: "SME (established)", typical: "AED 5,000–20,000 for brand refresh", note: "Good payers, need hand-holding through process" },
                { client: "Corporate / Enterprise", typical: "AED 20,000–80,000+", note: "Long approval chains, but budget is there" },
                { client: "Government / Semi-government", typical: "AED 15,000–100,000+", note: "Procurement processes, 45–90 day payment terms" },
                { client: "Agency (subcontract)", typical: "AED 80–180/hr (lower than direct)", note: "Faster pipeline, less client management" },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-gray-900 text-sm">{item.client}</p>
                    <p className="text-sm font-bold text-gray-900 shrink-0">{item.typical}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to Increase Your Design Rates</h2>

            <p className="font-semibold text-gray-900 mb-2">1. Get a measurable outcome from one client</p>
            <p>
              One case study where your rebrand led to a 40% increase in walk-in customers, or your
              UI redesign reduced app churn by 15%, is worth more than ten generic portfolio pieces.
              Ask your best clients for outcome data and build case studies around it.
            </p>

            <p className="font-semibold text-gray-900 mt-4 mb-2">2. Add a high-value service</p>
            <p>
              UI/UX strategy, design system creation, and Figma component library builds all command
              significantly higher rates than execution work. If you are a graphic designer, learning
              Figma and the basics of UX research can double your earning potential within 6–12 months.
            </p>

            <p className="font-semibold text-gray-900 mt-4 mb-2">3. Raise rates with new clients first</p>
            <p>
              Never raise your rate mid-project. For existing clients, give 30 days notice and a
              clear explanation: "My rates are increasing from AED X to AED Y from [date] as I have
              expanded my service offering and am now fully booked at my current rate." For new
              clients, simply quote the higher rate — you will be surprised how rarely they push back.
            </p>

            <p className="font-semibold text-gray-900 mt-4 mb-2">4. Target international clients</p>
            <p>
              UAE-based designers working with UK, European, or US clients can often charge 50–100%
              more than local market rates. Your lower cost of living (compared to London or NYC)
              means you are still competitive from their perspective while earning significantly more.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Retainer vs One-Off Projects</h2>
            <p>
              A monthly retainer is the most stable income model for UAE freelance designers.
              Typical retainers range from AED 2,000/month (5–8 hours of social media content)
              to AED 15,000–25,000/month (dedicated brand or product design support). Retainers
              are easier to budget for clients and give you predictable income — pitch them after
              completing a successful one-off project.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Set better rates</p>
            <h3 className="text-lg font-bold mb-2">The Freelancer Client CRM tracks every deal</h3>
            <p className="text-gray-400 text-sm mb-4">
              Log project rates, track client history, and see at a glance which clients pay the most
              — so you know exactly who to prioritize and when to raise your rates.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              See the CRM →
            </Link>
          </div>

          {/* Related */}
          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Rates Without Losing the Client" },
                { href: "/blog/how-to-raise-rates-existing-clients-uae", title: "How to Raise Your Rates With Existing Clients" },
                { href: "/blog/freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?" },
                { href: "/blog/freelance-proposal-tips-uae", title: "How to Write a Proposal That Wins Clients in the UAE" },
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
