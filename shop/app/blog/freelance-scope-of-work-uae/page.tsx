import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Scope of Work as a UAE Freelancer — 2026 Templates",
  description:
    "How to write a clear scope of work (SOW) for UAE freelance projects: what to include, how to prevent scope creep, SOW templates for consultants and creatives, and what happens without one.",
  alternates: { canonical: "/blog/freelance-scope-of-work-uae" },
  openGraph: {
    title: "How to Write a Scope of Work as a UAE Freelancer — 2026 Templates",
    description: "Scope of work templates and guide for UAE freelancers — prevent scope creep, protect your time.",
    type: "article",
    url: "/blog/freelance-scope-of-work-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Scope of Work as a UAE Freelancer",
  description: "Scope of work templates and guide for UAE freelancers.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-scope-of-work-uae",
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
            <span className="text-gray-600">Freelance Scope of Work UAE</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Client Management</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Write a Scope of Work as a UAE Freelancer
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Scope creep — delivering more than agreed without extra pay — costs UAE freelancers an estimated
              20–30% of their effective income. The fix is a clear scope of work document attached to every
              project. Here is how to write one that protects your time and prevents disputes.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            A scope of work (SOW) is the single most important document in a freelance engagement — more
            important than the contract in day-to-day terms, because it defines exactly what is included,
            what is excluded, and what triggers additional fees. Without a clear SOW, every client request
            starts a negotiation you did not plan for.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What Every SOW Must Include
          </h2>

          <div className="space-y-3 mb-8">
            {[
              {
                section: "1. Project Overview",
                content: "2–3 sentences describing the project in plain language. Reference the client's goal, not your service. 'This engagement covers the development of a brand identity for [Company]'s expansion into the Saudi Arabia market, to be used across digital and print applications.'",
              },
              {
                section: "2. Deliverables (be exhaustive)",
                content: "List every specific item you will deliver. Not 'brand identity' — but: (1) Logo in 3 variants (primary, horizontal, icon), (2) Color palette with HEX/CMYK/RGB codes, (3) Typography system (2 fonts), (4) Brand guidelines PDF (15–20 pages), (5) Business card design (front and back). The more specific, the less room for 'can you just add...'",
              },
              {
                section: "3. What Is NOT Included (equally important)",
                content: "Explicitly list exclusions: 'This SOW does not include: website design, social media templates, photography, Arabic language adaptations, or print production management.' Clients often assume everything adjacent to the project is included. State the opposite clearly.",
              },
              {
                section: "4. Timeline and Milestones",
                content: "Week 1: Discovery call and brief sign-off. Week 2–3: Initial concepts (3 directions). Week 4: Refinement of selected direction. Week 5: Final delivery. Note that the timeline assumes timely client feedback — specify: 'Client to provide feedback within 5 business days of each milestone, or timeline extends accordingly.'",
              },
              {
                section: "5. Revision Policy",
                content: "'This SOW includes 2 rounds of revisions per deliverable. A revision round means one set of consolidated feedback from the client. Additional revision rounds are charged at AED [X]/hour.' This is the most important clause — it defines what happens when a client sends revision 6 of 4.",
              },
              {
                section: "6. Client Responsibilities",
                content: "What the client must provide for the project to proceed: briefing documents, existing assets, access credentials, feedback sign-off, and payment on schedule. 'Project timelines and budgets assume client delivers [X] by [date]. Delays in client inputs may affect delivery dates.'",
              },
              {
                section: "7. Investment and Payment Schedule",
                content: "'Total project investment: AED [X], exclusive of VAT. Payment schedule: 50% (AED [X]) upon project kick-off, 50% (AED [X]) upon final delivery. Work pauses if payment is more than 7 days overdue.'",
              },
            ].map(({ section, content }) => (
              <div key={section} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-2">{section}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How to Handle Scope Creep When It Happens
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { point: "Acknowledge the request, reference the SOW", detail: "'That is a great idea — it falls outside the current scope, but I can absolutely add it. Let me put together a quick quote for the additional work.' Never say 'no' to a request — redirect it." },
              { point: "Send a written change order", detail: "For any out-of-scope addition: send a one-paragraph change order email specifying what is added, what the additional cost is, and that work will begin on receipt of approval. Small additions without a change order create a pattern where clients expect everything for free." },
              { point: "Use the SOW as a shield, not a weapon", detail: "Reference your SOW as a document you both agreed on, not as a legal threat. 'Looking at our agreed scope, this is an addition — would you like me to price it up?' keeps the relationship positive while protecting your time." },
            ].map(({ point, detail }) => (
              <li key={point} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{point}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">SOW vs Contract — What is the Difference?</p>
            <p className="text-sm text-emerald-800">
              A contract covers the legal relationship (IP ownership, liability, payment terms, termination).
              A scope of work covers the operational agreement (what is delivered, by when, at what cost,
              with what revisions). The SOW is usually attached to and referenced by the contract. In UAE
              freelancing, many practitioners use a single 2–3 page document that combines both. What matters
              is that it is signed by both parties before work begins.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">SOW Templates for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Ready-to-use scope of work templates, contract templates, and change order documents — built for UAE freelancers.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-handle-scope-creep-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Handle Scope Creep as a UAE Freelancer</Link>
              <Link href="/blog/freelance-contract-template-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Freelance Contract: 9 Clauses You Must Include</Link>
              <Link href="/blog/client-onboarding-freelance-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Client Onboarding Process for UAE Freelancers</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
