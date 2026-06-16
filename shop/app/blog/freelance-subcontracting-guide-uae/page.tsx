import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Subcontract as a UAE Freelancer — 2026 Guide",
  description:
    "How UAE freelancers subcontract work: finding subcontractors, contracts, payment structures, managing quality, legal considerations, and when to build a team vs stay solo.",
  alternates: { canonical: "/blog/freelance-subcontracting-guide-uae" },
  openGraph: {
    title: "How to Subcontract as a UAE Freelancer — 2026 Guide",
    description: "Subcontracting guide for UAE freelancers: how to find, contract, and manage subcontractors.",
    type: "article",
    url: "/blog/freelance-subcontracting-guide-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Subcontract as a UAE Freelancer",
  description: "Subcontracting guide for UAE freelancers: how to find, contract, and manage subcontractors.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-subcontracting-guide-uae",
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
            <span className="text-gray-600">Freelance Subcontracting Guide UAE</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Business Growth</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Subcontract as a UAE Freelancer
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Subcontracting is how solo UAE freelancers take on bigger projects, serve more clients, and earn
              more without working more hours. It is also one of the fastest ways to damage your reputation
              if done wrong. This guide covers how to do it right — finding, contracting, managing, and
              paying subcontractors in the UAE.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Subcontracting is when you bring in another freelancer or specialist to help deliver a project
            you have won. You remain responsible to the client for everything — quality, timeline, communication.
            Your subcontractor is responsible to you. Done well, it multiplies your capacity. Done poorly,
            it multiplies your problems.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            When to Subcontract vs Stay Solo
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Situation</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Subcontract?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Project requires a skill you don't have (e.g. you're a strategist, client needs design too)", "Yes — bring in a specialist subcontractor"],
                  ["Project is too large to deliver solo in the timeline", "Yes — subcontract the overflow"],
                  ["You're at capacity but don't want to turn away a great client", "Yes — subcontract while you manage the relationship"],
                  ["You want to start building a small team model", "Yes — subcontracting is the low-risk way to test it"],
                  ["The project margin is too thin to pay a subcontractor fairly", "No — take smaller projects you can deliver solo"],
                  ["You don't trust the quality of available subcontractors in this niche", "No — your reputation is on the line"],
                ].map(([situation, answer]) => (
                  <tr key={situation}>
                    <td className="px-4 py-3 text-gray-700 text-xs">{situation}</td>
                    <td className="px-4 py-3 text-xs font-semibold text-emerald-700">{answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Finding Subcontractors in the UAE
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { point: "Your professional network first", detail: "The safest subcontractors are people you have worked with, studied with, or who come recommended by someone you trust. In the UAE, network-sourced subcontractors have far lower quality risk than strangers from platforms." },
              { point: "LinkedIn — targeted search", detail: "Search for freelancers with the specific skill in the UAE. Look for people who have worked at recognizable companies, have UAE client experience, and have a professional profile. Message with a specific brief, not a generic 'are you available?'" },
              { point: "Specialist communities", detail: "UAE freelance WhatsApp groups, Slack communities (e.g. UAE tech freelancers, UAE designers), and industry associations often have talent directories or referral channels. Niche communities produce better subcontractors than general platforms." },
              { point: "Upwork for low-risk first engagements", detail: "For initial test engagements with someone you don't know, Upwork provides payment protection and a verifiable track record. Use it to test a subcontractor on a small, lower-stakes deliverable before trusting them with client-facing work." },
            ].map(({ point, detail }) => (
              <li key={point} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{point}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The Subcontractor Agreement — What to Include
          </h2>

          <ol className="space-y-3 mb-6">
            {[
              { step: "1", title: "Confidentiality (NDA)", detail: "Your subcontractor must not reveal the client's name, the project details, or contact the client directly. This is the single most important clause. A subcontractor who approaches your client directly is a business threat." },
              { step: "2", title: "Deliverables and timeline", detail: "Identical specificity to your SOW with the client, but with tighter deadlines (build in 2–3 days buffer between their delivery and your client deadline). Never tell subcontractors your client deadline." },
              { step: "3", title: "IP transfer", detail: "All IP created by the subcontractor transfers to you (and through you, to the client) on full payment. This must be explicit — without this clause, the subcontractor technically owns their work." },
              { step: "4", title: "Payment terms", detail: "Standard UAE subcontractor payment: 30–50% upfront, remainder on approved delivery. Pay within 14 days of their invoice — reputation in the UAE freelance community depends on being a reliable payer." },
              { step: "5", title: "Non-solicitation", detail: "Subcontractor agrees not to approach your client for 12–24 months after project completion. This protects your client relationship from being poached." },
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

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Subcontractor Pricing — Your Margin
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm">
            Your margin on subcontracted work should be 20–40% minimum. If you charge a client AED 20,000
            for a project and pay a subcontractor AED 16,000, your 20% margin (AED 4,000) covers your time
            managing the project, your client relationship, and your liability. Below 20% margin, the risk is
            not worth the headache.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Never Reveal Your Client to Your Subcontractor</p>
            <p className="text-sm text-emerald-800">
              Always refer to the client as "our client" or "the end client" with your subcontractor. Share
              enough context for them to do good work, but never the client's company name, contact details,
              or the specific amount you are being paid. This is standard practice in agency subcontracting
              worldwide and protects both the client relationship and your commercial position.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools Built for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Subcontractor agreement templates, project management SOPs, and Notion dashboards for UAE freelancers scaling to a team.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-build-a-freelance-team-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Build a Freelance Team in the UAE</Link>
              <Link href="/blog/how-to-manage-freelance-subcontractors-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Manage Freelance Subcontractors in the UAE</Link>
              <Link href="/blog/freelance-contract-template-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Contract: 9 Clauses You Must Include</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
