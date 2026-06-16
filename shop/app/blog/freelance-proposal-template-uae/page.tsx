import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Proposal Template UAE (Copy-Paste Ready for Dubai Clients) — SoloKit",
  description:
    "A complete copy-paste freelance proposal template for UAE clients, plus the structure, common mistakes, and AI prompts to write winning proposals in 20 minutes.",
  alternates: { canonical: "/blog/freelance-proposal-template-uae" },
  openGraph: {
    title: "Freelance Proposal Template UAE (Copy-Paste Ready for Dubai Clients)",
    description:
      "A complete copy-paste freelance proposal template for UAE clients, plus the structure and AI prompts to write winning proposals in 20 minutes.",
    type: "article",
    url: "/blog/freelance-proposal-template-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Proposal Template UAE (Copy-Paste Ready for Dubai Clients)",
  description:
    "A complete copy-paste freelance proposal template for UAE clients, plus the structure, common mistakes, and AI prompts to write winning proposals in 20 minutes.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-proposal-template-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-proposal-template-uae",
};

const proposalTemplate = `Subject: [Project name] — Proposal for [Client company]

Hi [Name],

[Opening — 2 sentences describing their specific problem as you understand it from the brief.]

──────────────────────────────────
WHAT I'LL BUILD FOR YOU
──────────────────────────────────

[2–3 sentences on the solution — outcome-focused, not process-focused.]

Specifically:
→ [Deliverable 1]
→ [Deliverable 2]
→ [Deliverable 3]

Not included in this proposal: [List 2–3 things that might create scope creep]

──────────────────────────────────
SIMILAR WORK I'VE DONE
──────────────────────────────────

[1 sentence describing a relevant past project and a specific metric result]

──────────────────────────────────
TIMELINE
──────────────────────────────────

Week 1:   [Milestone name and deliverable]
Week 2–3: [Milestone name and deliverable]
Week [X]: Final delivery and handover

──────────────────────────────────
INVESTMENT
──────────────────────────────────

[Project name]: AED [amount]

Payment: 50% (AED [amount]) due before work begins.
         50% (AED [amount]) due on final delivery.

──────────────────────────────────
YOUR NEXT STEPS
──────────────────────────────────

If you'd like to proceed: reply to this email or WhatsApp me and
I'll send the contract and invoice for the deposit.

Questions? I'm available for a 20-minute call at [Calendly link].

[Your name]
[Your phone]
[solokit.cloud/your-profile (if applicable)]`;

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Business</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">June 15, 2026</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Freelance Proposal Template UAE (Copy-Paste Ready for Dubai Clients)
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Most freelance proposals are rejected before the client reaches the price.
            Here&apos;s the structure that fixes that — with a full template you can use today.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Why Most Proposals Fail</h2>

          <p>
            The most common proposal mistake isn&apos;t pricing too high. It&apos;s opening with yourself.
          </p>

          <p>
            &quot;I am a Dubai-based freelance designer with 6 years of experience in...&quot; — this is the first line
            in the majority of proposals UAE clients receive. The client doesn&apos;t care yet. They want to know
            if you understand their problem.
          </p>

          <p>
            Proposals win or lose in the first two paragraphs. If you open by describing the client&apos;s
            situation back to them — accurately, specifically, in a way that makes them think &quot;this person
            gets it&quot; — your close rate jumps significantly. Everything else (your credentials, your process,
            your pricing) is easier to accept once the client trusts that you understand them.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            The 7-Section Proposal Structure That Works for UAE Clients
          </h2>

          <ol className="list-decimal pl-5 space-y-4 text-gray-600">
            <li>
              <strong className="text-gray-900">Opening — the problem statement.</strong>{" "}
              Start here, not with your bio. Describe their specific situation in 2 sentences.
              Show you read the brief and understood what&apos;s actually broken or missing.
            </li>
            <li>
              <strong className="text-gray-900">Your solution.</strong>{" "}
              What you&apos;ll deliver — outcome-focused, not a list of activities.
              &quot;A landing page that converts paid traffic to leads&quot; beats &quot;I will design, develop, and deploy a page.&quot;
            </li>
            <li>
              <strong className="text-gray-900">Why you — 1 relevant case study with a result.</strong>{" "}
              Not a full CV. One sentence about a similar project and what it achieved.
              Numbers are better than adjectives: &quot;reduced client acquisition cost by 40%&quot; beats &quot;excellent results.&quot;
            </li>
            <li>
              <strong className="text-gray-900">Scope — what&apos;s included and what&apos;s NOT.</strong>{" "}
              This section is critical for UAE clients. Scope creep expectations often start in
              the proposal stage. Naming what&apos;s excluded protects you and signals professionalism.
            </li>
            <li>
              <strong className="text-gray-900">Timeline — milestone-based, not vague.</strong>{" "}
              &quot;2–3 weeks&quot; is meaningless. &quot;Week 1: wireframes + copy draft. Week 2: design. Week 3: dev and launch&quot;
              shows you&apos;ve actually thought about the work.
            </li>
            <li>
              <strong className="text-gray-900">Investment — clear pricing and what happens when they say yes.</strong>{" "}
              Show the total, the split (50/50 is standard), and the amounts in AED.
              Don&apos;t make the client calculate anything.
            </li>
            <li>
              <strong className="text-gray-900">Next steps — a 2-click decision.</strong>{" "}
              Tell them exactly what to do if they want to proceed. Remove all ambiguity.
              A clear call to action at the end is the difference between &quot;I&apos;ll think about it&quot; and a signed contract.
            </li>
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Full Template (Copy-Paste Ready)</h2>

          <p>
            Use this as your base. Personalise the bracketed sections for each client.
            The structure should stay consistent — the content inside it changes every time.
          </p>

          <div className="relative my-6">
            <pre className="bg-gray-950 text-gray-100 rounded-2xl p-5 text-sm leading-relaxed overflow-x-auto whitespace-pre font-mono select-all">
              {proposalTemplate}
            </pre>
            <p className="text-xs text-gray-400 mt-2 text-right">
              Click anywhere in the template to select all, then copy
            </p>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 mt-6">
            <p className="text-sm font-semibold text-gray-300 mb-1">Write proposals in 10 minutes with AI</p>
            <p className="text-xl font-bold mb-3">AI Prompt Pack Pro</p>
            <p className="text-gray-400 text-sm mb-4">
              Includes the full proposal-writing prompt framework — paste your brief, run the prompt,
              get a complete first draft in under 60 seconds. 50+ prompts for UAE freelancers.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get AI Prompt Pack Pro →
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">5 Common UAE Proposal Mistakes</h2>

          <ol className="list-decimal pl-5 space-y-4 text-gray-600">
            <li>
              <strong className="text-gray-900">No clear scope boundary.</strong>{" "}
              Saying &quot;we can sort the details later&quot; is how you end up doing three extra rounds of
              revisions for free. Every proposal needs an explicit list of what&apos;s not included.
            </li>
            <li>
              <strong className="text-gray-900">Not specifying payment terms upfront.</strong>{" "}
              Then getting surprised when the client wants Net 60. UAE corporate clients often default
              to long payment terms unless you state yours clearly and early. &quot;50% before work begins&quot;
              in the proposal means it&apos;s already agreed before the contract arrives.
            </li>
            <li>
              <strong className="text-gray-900">Pricing too low to appear competitive.</strong>{" "}
              In most Dubai business contexts, a very low price signals inexperience, not value.
              Clients who can afford quality know what quality costs. Price too low and you
              attract exactly the wrong buyers.
            </li>
            <li>
              <strong className="text-gray-900">Sending a PDF without a clear next step.</strong>{" "}
              A proposal without a specific call to action creates decision paralysis.
              Always end with: &quot;Reply to this email or WhatsApp me to proceed.&quot; Make it a two-second decision.
            </li>
            <li>
              <strong className="text-gray-900">Not following up.</strong>{" "}
              Roughly 60% of won proposals came after at least one follow-up. Wait 3–4 business days,
              then send a single short message: &quot;Hi [Name], just checking if you had any questions
              about the proposal I sent on [date]. Happy to jump on a quick call.&quot; That&apos;s it.
            </li>
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">How to Use AI to Write Proposals Faster</h2>

          <p>
            AI won&apos;t write a great proposal from nothing — but it&apos;s excellent at turning your raw
            inputs into polished first drafts. Give it three things:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>The client&apos;s brief (copy-paste it directly)</li>
            <li>Your relevant past project results (even one sentence with a number)</li>
            <li>Your pricing and timeline</li>
          </ul>

          <p>
            Then use this prompt framework with Claude or ChatGPT:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-4">
            <p className="text-sm font-semibold text-gray-900 mb-2">Prompt framework</p>
            <p className="text-sm text-gray-600 italic">
              &quot;Write a freelance proposal opening that focuses on the client&apos;s problem:
              [paste their brief]. My solution is: [your solution]. Don&apos;t mention my experience until
              paragraph 3. Keep it under 200 words. Tone: direct and confident, not salesy.&quot;
            </p>
          </div>

          <p>
            The AI Prompt Pack Pro at{" "}
            <Link href="/products/ai-prompt-pack-pro" className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors">
              solokit.cloud/products/ai-prompt-pack-pro
            </Link>{" "}
            has the full expanded version of this prompt, including how to handle edge cases like
            short briefs, budget objections, and multi-service proposals.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Quick answer: How long should a UAE freelance proposal be?
            </p>
            <p className="text-sm text-blue-800">
              1 page for projects under AED 20K. 2–3 pages for larger or more complex projects.
              Decision-makers in Dubai are busy. A shorter, crisper proposal almost always outperforms
              a longer one — provided the structure is right. If you&apos;re tempted to add more pages,
              cut instead.
            </p>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
          <div className="flex flex-col gap-2">
            <Link href="/blog/how-to-price-freelance-services-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
              How to Price Your Freelance Services in the UAE →
            </Link>
            <Link href="/blog/how-to-scale-freelance-business-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
              How to Scale a Freelance Business in the UAE — From Solo to AED 100K/Month →
            </Link>
            <Link href="/blog/get-freelance-clients-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
              How to Get Freelance Clients in the UAE (6 Strategies) →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
