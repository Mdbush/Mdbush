import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Run Discovery Workshops with UAE Clients (2026 Guide)",
  description:
    "How UAE freelancers and consultants run paid discovery workshops to scope projects, align stakeholders, and increase average project value. Workshop structure, facilitation tips, pricing, and what to deliver afterwards.",
  alternates: { canonical: "/blog/how-to-run-discovery-workshops-uae" },
  openGraph: {
    title: "How to Run Discovery Workshops with UAE Clients (2026)",
    description:
      "How UAE freelancers run paid discovery workshops to scope projects and increase project value.",
    type: "article",
    url: "/blog/how-to-run-discovery-workshops-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Run Discovery Workshops with UAE Clients (2026 Guide)",
  description:
    "How UAE freelancers and consultants run paid discovery workshops to scope projects.",
  url: `${siteUrl}/blog/how-to-run-discovery-workshops-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToRunDiscoveryWorkshopsUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Discovery Workshops UAE</span>
          </nav>

          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Run Discovery Workshops with UAE Clients (2026 Guide)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">How UAE freelancers and consultants run paid discovery workshops to scope projects, align stakeholders, and increase average project value. Workshop structure, facilitation tips, pricing, and what to deliver afterwards.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>


          <h2 className="text-2xl font-bold text-gray-900 mb-4">When a Discovery Workshop Makes Sense</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Good Fit for Discovery Workshop</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Not a Good Fit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { good: "Multiple stakeholders with potentially different priorities", not: "Small, single-person client who knows exactly what they want" },
                  { good: "Project scope is unclear or complex", not: "Repeatable, well-defined project (e.g. standard website template)" },
                  { good: "Client has tried and failed to solve this before", not: "Client needs a quick, transactional deliverable under AED 5,000" },
                  { good: "Project value likely AED 30,000+", not: "Client has a fixed scope and fixed budget — just needs a quote" },
                  { good: "Multiple solutions are possible and need evaluation", not: "You already know the solution and scope is clear to both parties" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 text-green-700 font-medium">✓ {row.good}</td>
                    <td className="p-3 border border-gray-200 text-gray-500">✗ {row.not}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Discovery Workshop Structure</h2>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Half-Day Format (3–4 hours): AED 3,000–6,000</h3>
              <p className="text-gray-600 text-sm mb-2">Best for smaller projects (AED 15,000–50,000) or when stakeholders are limited (2–4 people).</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Opening (30 min):</strong> Introductions, workshop purpose and expected outcomes, agenda walkthrough, ground rules</li>
                <li><strong>Current state (45 min):</strong> What exists today — process mapping, pain points, stakeholder perspectives, what has been tried before</li>
                <li><strong>Future state (45 min):</strong> What success looks like — outcomes, constraints, non-negotiables, success metrics</li>
                <li><strong>Gap and options (30 min):</strong> What needs to change, what solutions exist, initial feasibility discussion</li>
                <li><strong>Alignment and next steps (30 min):</strong> Capturing decisions, confirming scope direction, timeline discussion, proposal process</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Full-Day Format (6–7 hours): AED 6,000–15,000</h3>
              <p className="text-gray-600 text-sm mb-2">For complex projects (AED 50,000+), multiple workstreams, or cross-functional stakeholder groups.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Morning session (3 hrs):</strong> Current state deep-dive, stakeholder perspectives, problem framing, root cause analysis</li>
                <li><strong>Lunch break (1 hr):</strong> Working lunch with informal relationship-building — important in UAE business culture</li>
                <li><strong>Afternoon session (3 hrs):</strong> Future state visioning, solution options workshop, prioritisation, constraint mapping, scope definition</li>
                <li><strong>Close (30 min):</strong> Summary of decisions, open questions, next steps, proposal timeline</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Deliver After the Workshop</h2>
          <p className="text-gray-600 mb-4">
            A discovery workshop without a clear deliverable is just a long meeting. Within
            5 business days of the workshop, deliver a written Discovery Summary — typically
            8–15 pages — covering:
          </p>
          <ul className="space-y-2 mb-10 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Current state summary:</strong> What you heard — the existing situation, pain points, constraints, and context. Showing you listened and understood creates trust.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Future state definition:</strong> The agreed-upon outcomes and success metrics from the workshop. If stakeholders disagreed during the session, surface the tension here so it can be resolved before the project starts.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Recommended approach:</strong> Your professional recommendation — what you&apos;d do, why, and in what sequence. This is your expertise adding value beyond facilitation.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Scope and investment estimate:</strong> A clear indication of project scope, timeline, and investment range — not a locked quote, but enough for the client to make a go/no-go decision before receiving your full proposal.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Open questions:</strong> What information is still needed, what decisions need to be made, and what could materially change scope or timeline if it changes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">UAE-Specific Discovery Workshop Tips</h2>
          <ul className="space-y-2 mb-10 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Confirm the right stakeholders will attend</strong> — UAE corporate culture often has formal approval hierarchies. A workshop with the right working-level team but without the decision-maker present may produce insights but cannot generate alignment. Confirm upfront whether the project sponsor or budget holder will participate, and redesign the agenda accordingly if they cannot attend for the full session.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Allow for cultural deference in group settings</strong> — In a mixed UAE audience, junior team members may not openly challenge senior colleagues even when they have important information. Build in smaller-group breakouts, anonymous input methods (post-it notes, online polling), and one-to-one conversations alongside plenary sessions to surface the full picture.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Position the workshop as an investment, not a cost</strong> — UAE clients may push back on paying for a discovery workshop if they see it as admin before the &quot;real work&quot; starts. Frame it as AED [X] in workshop fees preventing AED [Y] in rework costs — the most common cause of project failure is unclear scope, not poor execution.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Deduct the workshop fee from the project cost</strong> — A common and effective approach: offer to deduct the discovery workshop fee from the full project cost if the client proceeds. This reduces the perceived risk for clients and significantly increases conversion from workshop to full engagement.</li>
          </ul>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Discovery Workshop Templates for UAE Consultants
            </h2>
            <p className="text-gray-300 mb-6">
              SoloKit includes discovery workshop agendas, facilitation guides, discovery summary
              templates, and workshop pricing frameworks for UAE freelancers and consultants.
            </p>
            <Link
              href="/products/solokit-freelance-os"
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get SoloKit
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-price-discovery-calls-uae", label: "Should UAE Freelancers Charge for Discovery Calls?" },
                { href: "/blog/how-to-handle-scope-creep-uae", label: "How to Handle Scope Creep as a UAE Freelancer" },
                { href: "/blog/freelance-proposal-template-uae", label: "Freelance Proposal Template UAE" },
                { href: "/blog/how-to-set-payment-terms-uae", label: "How to Set Payment Terms as a UAE Freelancer" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-emerald-700 hover:text-emerald-900 text-sm">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        
      </main>
      <Footer />
    </>
  );
}
