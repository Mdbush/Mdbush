import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Price Workshops and Discovery Sessions as a UAE Freelancer — 2026",
  description:
    "How much to charge for workshops, strategy sessions, and discovery calls in the UAE. Pricing frameworks, what to include, and how to position paid workshops vs free discovery calls.",
  alternates: { canonical: "/blog/how-to-price-workshops-discovery-uae" },
  openGraph: {
    title: "How to Price Workshops and Discovery Sessions as a UAE Freelancer — 2026",
    description: "Pricing frameworks for UAE freelance workshops, strategy sessions, and discovery calls.",
    type: "article",
    url: "/blog/how-to-price-workshops-discovery-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Price Workshops and Discovery Sessions as a UAE Freelancer",
  description: "Pricing frameworks for UAE freelance workshops, strategy sessions, and discovery calls.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-price-workshops-discovery-uae",
};

export default function Article() {
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
            <span className="text-gray-600">How to Price Workshops and Discovery Sessions UAE</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Pricing Strategy</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Price Workshops and Discovery Sessions in the UAE
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Too many UAE freelancers give away hours of strategic thinking for free in "discovery calls" that never
              convert. The fix is a clear product: a paid discovery session or workshop that delivers immediate value
              and positions you to win the larger engagement. Here is how to price it.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            In the UAE, corporate clients have large budgets and high expectations. A free 60-minute "discovery call"
            signals low value. A paid AED 3,000 "Strategy Audit" signals expertise. Both accomplish the same
            initial goal — understanding the client's problem — but one positions you as a premium consultant and
            creates revenue even if the larger project does not proceed.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Free vs Paid Discovery — When to Use Each
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Session Type</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">When to Use</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Duration</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Free intro call", "Warm referrals, small projects under AED 10k", "20–30 min", "Free"],
                  ["Paid discovery session", "Corporate clients, projects AED 15k+, high-value retainers", "60–90 min + written summary", "AED 1,500–4,000"],
                  ["Half-day strategy workshop", "Teams, complex problems, roadmap planning", "4 hrs + deliverable", "AED 6,000–18,000"],
                  ["Full-day executive workshop", "Board-level strategy, organizational change", "7–8 hrs + report", "AED 15,000–40,000"],
                  ["Training workshop (group)", "Upskilling teams (5–20 people)", "Half or full day", "AED 8,000–25,000"],
                ].map(([type, when, duration, price]) => (
                  <tr key={type}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{type}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{when}</td>
                    <td className="px-4 py-3 text-gray-600">{duration}</td>
                    <td className="px-4 py-3 text-emerald-600 font-semibold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How to Price a Paid Discovery Session
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The pricing formula for a paid discovery session: <strong>your hourly rate × session hours + deliverable time</strong>.
            A 90-minute session requires approximately 2–3 hours of total work (prep, session, written summary).
            At AED 800/hr, that is AED 1,600–2,400. Round to AED 2,000–2,500. Always include a written output —
            it is what justifies the fee to procurement teams.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                label: "What to include in a paid discovery session",
                items: [
                  "30-min pre-session questionnaire sent to the client (reduces wasted session time)",
                  "60–90 min live session (video call or in-person) — structured with agenda",
                  "2–5 page written summary delivered within 48 hours (findings, gaps, recommended next steps)",
                  "A clear recommendation for whether a larger engagement makes sense — and what that would look like",
                ],
              },
              {
                label: "How to position it (not a pitch)",
                items: [
                  "'Before committing to a 3-month engagement, this session gives you a clear picture of the problem and options — with no pressure to proceed.'",
                  "'The summary document is yours to keep and act on regardless of whether we work together.'",
                  "'The session fee is credited toward the project if you choose to move forward within 30 days.'",
                  "The credit-toward-project offer reduces the psychological barrier to booking — most clients who book a discovery session convert.",
                ],
              },
            ].map(({ label, items }) => (
              <div key={label} className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{label}</h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Workshop Pricing by Niche — UAE Market Rates
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Workshop Type</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Half Day</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Full Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Brand strategy workshop", "AED 8,000–12,000", "AED 15,000–22,000"],
                  ["Marketing / growth strategy", "AED 7,000–11,000", "AED 14,000–20,000"],
                  ["UX / product discovery", "AED 8,000–14,000", "AED 16,000–25,000"],
                  ["Leadership / executive coaching", "AED 10,000–18,000", "AED 20,000–35,000"],
                  ["Technical architecture review", "AED 9,000–15,000", "AED 18,000–28,000"],
                  ["ESG / sustainability planning", "AED 10,000–16,000", "AED 20,000–32,000"],
                  ["Team training (skills-based)", "AED 6,000–10,000", "AED 10,000–18,000"],
                ].map(([type, half, full]) => (
                  <tr key={type}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{type}</td>
                    <td className="px-4 py-3 text-emerald-600 font-semibold">{half}</td>
                    <td className="px-4 py-3 text-emerald-600 font-semibold">{full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm">
            These rates reflect solo facilitator fees. For workshops requiring 2 facilitators or significant
            pre-work (surveys, interviews, competitor research), add 30–50% to cover preparation. Government and
            semi-government clients in the UAE often have procurement categories for "training and consulting" with
            per-day rate caps — ask the procurement team for the category code before quoting.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What to Include in a Workshop Proposal
          </h2>

          <ol className="space-y-3 mb-6">
            {[
              { step: "1", title: "Objective", detail: "One clear sentence: 'At the end of this workshop, [team] will have [specific output].' Vague objectives = vague proposals = rejected quotes." },
              { step: "2", title: "Agenda", detail: "Time-blocked agenda for the day. Shows professionalism and helps procurement justify the spend: 9:00 Welcome / context-setting, 9:30 Current state mapping, 11:00 Gap analysis, 12:00 Break, etc." },
              { step: "3", title: "Deliverables", detail: "List what they receive: facilitated session, workshop slides, summary report (3–5 pages), action plan template, 30-day follow-up check-in. Tangible outputs justify premium pricing." },
              { step: "4", title: "Investment", detail: "Present the fee as a single number. Add a line: 'This includes all preparation, facilitation, and post-workshop documentation.' Break it down only if asked." },
              { step: "5", title: "Your facilitation approach", detail: "2–3 sentences on how you run workshops. 'I use a structured diverge-converge model to move teams from problem definition to prioritized solutions within a single session.' Differentiates you from generic trainers." },
            ].map(({ step, title, detail }) => (
              <li key={step} className="flex gap-4 border border-gray-200 rounded-xl p-4">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">{step}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Always Take a 50% Deposit</p>
            <p className="text-sm text-emerald-800">
              Workshop cancellations in the UAE are common — especially for government clients around Ramadan or
              budget cycles. Always take 50% upfront, non-refundable if cancelled within 5 business days of the
              workshop date. Include this clearly in your proposal and the contract. Your preparation time is
              not recoverable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">AI Prompts for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Workshop proposals, discovery session templates, and pricing scripts — 200 AI prompts built for UAE freelancers.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-close-high-ticket-clients-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Close High-Ticket Clients in the UAE</Link>
              <Link href="/blog/how-to-negotiate-freelance-rates-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Negotiate Your Freelance Rates</Link>
              <Link href="/blog/freelance-rate-calculator-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Rate Calculator UAE</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
