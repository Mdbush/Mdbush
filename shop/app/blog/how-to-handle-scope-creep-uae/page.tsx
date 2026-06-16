import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Handle Scope Creep as a UAE Freelancer (Scripts & Systems)",
  description:
    "How UAE freelancers prevent and handle scope creep — defining scope in contracts, spotting scope creep early, how to say no professionally, change order process, and word-for-word scripts for UAE clients.",
  alternates: { canonical: "/blog/how-to-handle-scope-creep-uae" },
  openGraph: {
    title: "How to Handle Scope Creep as a UAE Freelancer (Scripts & Systems)",
    description: "How UAE freelancers prevent and handle scope creep — contract language, change orders, and word-for-word scripts.",
    type: "article",
    url: "/blog/how-to-handle-scope-creep-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Handle Scope Creep as a UAE Freelancer (Scripts & Systems)",
  description: "How UAE freelancers prevent and handle scope creep — contract language, change orders, and scripts.",
  url: `${siteUrl}/blog/how-to-handle-scope-creep-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const warningSignals = [
  { signal: "\"Can you just add...\"", explanation: "The word 'just' is the most common scope creep signal in the UAE market. No task is 'just' anything — if it wasn't in the original scope, it's an addition." },
  { signal: "\"While we're at it...\"", explanation: "Signals a task expansion that the client hasn't formally requested — they're testing whether you'll absorb it silently." },
  { signal: "\"Can you take a quick look at this too?\"", explanation: "A second project disguised as a favor. Common in UAE WhatsApp communications where the boundary between conversation and work request is blurred." },
  { signal: "\"We've changed direction, so can you...\"", explanation: "Legitimate directional changes happen — but they reset the scope. The previous work is wasted, and the new direction requires new time and effort. Price it." },
  { signal: "\"Our CEO wants to see this differently\"", explanation: "A new stakeholder has entered the project. This almost always means rework that wasn't accounted for. Introduce a change order before starting." },
];

export default function HowToHandleScopeCreepUAE() {
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
          <span className="text-gray-600">How to Handle Scope Creep UAE</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Client Work & Proposals</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            How to Handle Scope Creep as a UAE Freelancer (Scripts & Systems)
          </h1>
          <p className="text-gray-500 text-sm">7 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Scope creep is the silent income killer for UAE freelancers. A project starts
            at AED 15,000. By the end, you&apos;ve done AED 25,000 of work. The client pays
            AED 15,000 — because that&apos;s what the contract said. The additional work was
            added gradually, each request small enough to seem unreasonable to push back on.
            This is scope creep, and in the UAE market — where WhatsApp communication blurs
            professional boundaries and &quot;relationship culture&quot; makes saying no feel rude —
            it is especially common. Here is the system to prevent and handle it.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-1">The honest truth about UAE scope creep</p>
            <p className="text-gray-700">
              Scope creep in the UAE is almost never malicious. Most clients genuinely
              do not track what they have asked for versus what was originally agreed.
              The responsibility for managing scope rests entirely with you — the
              freelancer — not the client. The client&apos;s job is to need more; your job
              is to make sure &quot;more&quot; has a price attached.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Prevention: Define Scope Before You Start</h2>
            <p>
              The most effective scope creep management happens before the project begins.
              The three things your proposal and contract must define clearly:
            </p>
            <div className="space-y-3 mt-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">1. Deliverables (exactly what is included)</p>
                <p className="text-sm text-gray-700">
                  List every deliverable specifically. Not &quot;website design&quot; — but &quot;design of
                  5 page types (Home, About, Services, Blog listing, Contact) as desktop and
                  mobile Figma mockups.&quot; Not &quot;social media content&quot; — but &quot;12 Instagram posts
                  per month as static graphics with captions, scheduled via Buffer.&quot; Specificity
                  is the only protection.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">2. What is explicitly NOT included</p>
                <p className="text-sm text-gray-700">
                  Add a &quot;Not included in this scope&quot; section to your proposal. Example: &quot;This
                  proposal does not include: copywriting, translation into Arabic, website
                  development, photography, or stock image licensing.&quot; UAE clients frequently
                  assume these are included unless stated otherwise. Surprises become disputes.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">3. Revision rounds</p>
                <p className="text-sm text-gray-700">
                  State the number of revision rounds explicitly. &quot;This proposal includes
                  2 rounds of revisions. Additional revision rounds are available at AED [X]
                  per round.&quot; UAE clients who expect unlimited revisions are not unusual.
                  If this is not in writing, your estimate of 2 rounds and the client&apos;s
                  expectation of unlimited are both valid from their perspective.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Early Warning Signals of Scope Creep</h2>
            <div className="space-y-3 mt-4">
              {warningSignals.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-sm mb-1 font-mono">{item.signal}</p>
                  <p className="text-xs text-gray-600">{item.explanation}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Change Order Process (Word-for-Word)</h2>
            <p>
              When scope creep appears, you need a clear, professional process to acknowledge
              the request, price it, and get approval before doing the work. Here are the
              exact messages to use (WhatsApp or email):
            </p>
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-gray-900 mb-2">Situation: Client asks for something outside scope</p>
                <p className="text-gray-700 italic">
                  &quot;Happy to include this. Just to keep us aligned: this [task] sits outside the
                  original scope we agreed, so I&apos;ll put together a quick change order for your
                  approval before we proceed. Shouldn&apos;t take long to sort — I&apos;ll send it today.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">Why this works: You are not saying no. You are creating process. The tone is helpful, not defensive.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-gray-900 mb-2">Situation: Small request that feels awkward to charge for</p>
                <p className="text-gray-700 italic">
                  &quot;This is a small one — AED [amount]. I&apos;ll add it to the project invoice at the
                  end. If you&apos;d prefer I can send a separate change order now, just let me know.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">Why this works: Normalizes charging for additions without creating friction over a small amount. Client is informed and comfortable.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-gray-900 mb-2">Situation: Client wants a major direction change after work is delivered</p>
                <p className="text-gray-700 italic">
                  &quot;Understood — direction changes happen and I want to make sure we get this
                  right. The work delivered so far has been completed as per our original brief,
                  so the new direction will be a fresh scope. I&apos;ll put together a proposal for
                  the revised brief and we can discuss timeline and investment. The existing
                  work will be available to you in case there are elements you want to retain.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">Why this works: Acknowledges the change without blame. Positions the rework as a new paid engagement — not a free revision.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Writing a Change Order (Template)</h2>
            <p>
              A change order does not need to be elaborate. It needs to be written, specific,
              and signed off by the client before work begins:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm mt-3 font-mono text-gray-700">
              <p className="font-bold not-italic mb-2">CHANGE ORDER #001 — [Project Name]</p>
              <p>Date: [Date]</p>
              <p className="mt-2"><strong>Description of change:</strong> [What is being added or changed]</p>
              <p className="mt-2"><strong>Reason for change:</strong> This work was not included in the original scope dated [date].</p>
              <p className="mt-2"><strong>Additional fee:</strong> AED [amount]</p>
              <p className="mt-2"><strong>Timeline impact:</strong> [Any impact on project completion date]</p>
              <p className="mt-2"><strong>Payment terms:</strong> Payable on [date/milestone]</p>
              <p className="mt-3">Please confirm approval by replying to this message or signing below.</p>
            </div>
            <p className="mt-3 text-sm">
              Send this by email (not WhatsApp) so there is a documented paper trail.
              WhatsApp approvals are legally valid in the UAE — but email provides clearer
              documentation if a payment dispute arises later.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When to Do the Work First, Invoice Later</h2>
            <p>
              There are situations where sending a formal change order will damage the
              client relationship more than absorbing a small addition. Use judgment:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>Absorb without comment</strong> — If the addition takes less than 20 minutes and the project fee is large (AED 20,000+), absorbing it is a relationship investment</li>
              <li>• <strong>Invoice later, no formal CO</strong> — Small additions (AED 500–1,500) that you complete and note on the final invoice: &quot;Additional: [item], AED [amount].&quot; Client sees it when they pay — rarely pushes back</li>
              <li>• <strong>Formal change order before starting</strong> — All additions above AED 1,500 or additions that will take more than 2–3 hours. Non-negotiable for anything that shifts the project timeline.</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Protect your projects from the start</p>
            <h3 className="text-lg font-bold mb-2">Freelance Contract: 9 Clauses You Must Include</h3>
            <p className="text-gray-400 text-sm mb-4">
              The specific contract clauses that prevent scope creep, protect against non-payment,
              and give you legal standing in UAE commercial disputes.
            </p>
            <Link
              href="/blog/freelance-contract-template-uae"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Read the Contract Guide →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include" },
                { href: "/blog/client-communication-tips-freelancers-uae", title: "Client Communication for UAE Freelancers: Scripts That Work" },
                { href: "/blog/late-payment-freelance-uae", title: "How to Chase Late Payments as a Freelancer in the UAE" },
                { href: "/blog/client-red-flags-uae", title: "10 Client Red Flags for UAE Freelancers (How to Spot Them Before You Sign)" },
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
