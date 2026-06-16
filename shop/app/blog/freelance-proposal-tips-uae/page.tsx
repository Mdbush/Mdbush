import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Freelance Proposal That Wins Clients in the UAE — SoloKit",
  description:
    "Most freelance proposals are rejected because they talk about the freelancer, not the client. Here's how to write proposals that consistently win projects in the UAE.",
  alternates: { canonical: "/blog/freelance-proposal-tips-uae" },
  openGraph: {
    title: "How to Write a Freelance Proposal That Wins Clients in the UAE",
    description: "Stop sending proposals that get ignored. Here's what actually works in Dubai and Abu Dhabi.",
    type: "article",
    url: "/blog/freelance-proposal-tips-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Freelance Proposal That Wins Clients in the UAE",
  description:
    "Most freelance proposals are rejected because they talk about the freelancer, not the client. Here's how to write proposals that consistently win projects in the UAE.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-proposal-tips-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/freelance-proposal-tips-uae",
};

const mistakes = [
  {
    mistake: "Starting with 'I am a freelance designer with 5 years of experience…'",
    fix: "Start with the client's problem. 'You're launching a new product line and need a brand identity that positions you as premium…'",
  },
  {
    mistake: "Listing every skill and tool you use",
    fix: "Only mention skills that are directly relevant to this project. Everything else is noise.",
  },
  {
    mistake: "Sending a price without context",
    fix: "Always anchor the price to the value it creates. AED 8,000 for a website sounds expensive. AED 8,000 for a site that generates AED 50K in leads sounds cheap.",
  },
  {
    mistake: "Vague timelines ('project takes 2-4 weeks')",
    fix: "Specific timelines build confidence. 'Week 1: discovery and wireframes. Week 2: design. Week 3: revisions and delivery.'",
  },
  {
    mistake: "No clear next step",
    fix: "End with a specific call to action: 'Can we schedule a 20-minute call this week to confirm scope?'",
  },
];

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
          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">CLIENT WORK</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Write a Freelance Proposal That Wins Clients in the UAE</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">Most freelance proposals are rejected because they talk about the freelancer, not the client. Here's how to write proposals that consistently win projects in the UAE.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Write a Freelance Proposal That Wins Clients in the UAE
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Most proposals get ignored because they&apos;re about you. The ones that win are about the client.
            Here&apos;s how to write proposals that get replies — and projects.
          </p>
        </div>

        <div className="space-y-6 leading-relaxed">

          <p>
            You spent two hours writing a detailed proposal. You outlined your experience, listed your tools,
            attached your portfolio, and set a fair price.
          </p>

          <p>
            Then nothing. No reply. Not even a "thanks but no thanks."
          </p>

          <p>
            Here&apos;s what probably happened: the client scanned it, didn&apos;t immediately see their problem
            being solved, and moved on to the next proposal.
          </p>

          <p>
            The fix isn&apos;t a better portfolio or lower price. It&apos;s a different structure.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Why Most Proposals Fail</h2>

          <p>
            The average freelance proposal looks like this:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Intro about the freelancer&apos;s background</li>
            <li>List of services they offer</li>
            <li>Portfolio links</li>
            <li>Price</li>
            <li>"Looking forward to working with you"</li>
          </ul>

          <p>
            This is a CV, not a proposal. It&apos;s entirely about the freelancer.
            Clients don&apos;t care about your experience in the abstract — they care about
            whether you understand their specific problem and can solve it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>The Structure of a Winning Proposal</h2>

          <p>
            A proposal that wins follows this structure, in order:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                num: "1",
                title: "Restate the problem",
                body: "Show you listened. Summarize what the client told you they need — in their language, not yours. This alone puts you ahead of 80% of proposals.",
              },
              {
                num: "2",
                title: "Explain your approach",
                body: "Not what you'll do — how you'll solve their specific problem. 'I'll design a checkout flow that reduces friction at the payment step, based on what you said about your drop-off rate.'",
              },
              {
                num: "3",
                title: "Outline deliverables and timeline",
                body: "Be specific. List exactly what they'll receive and when. Week-by-week or phase-by-phase is best. Vague timelines create anxiety.",
              },
              {
                num: "4",
                title: "State the investment",
                body: "Use 'investment', not 'cost'. Anchor it to value: 'AED 6,000 for a complete brand identity that positions you for the premium market segment you're targeting.'",
              },
              {
                num: "5",
                title: "Clear next step",
                body: "Tell them exactly what to do next. Don't say 'let me know if you have questions.' Say 'Can we schedule a 20-minute call on Tuesday or Wednesday to confirm the scope?'",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Common Proposal Mistakes (and the Fix)</h2>

          <div className="flex flex-col gap-4 my-6">
            {mistakes.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-red-600 mb-1">✗ {item.mistake}</p>
                <p className="text-sm text-gray-600">✓ {item.fix}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Length: Shorter Than You Think</h2>

          <p>
            The best proposals for most freelance work in the UAE are 300–600 words.
            That&apos;s roughly one page.
          </p>

          <p>
            Long proposals signal that you don&apos;t know what&apos;s actually important.
            They also take more time to read — and busy clients won&apos;t.
          </p>

          <p>
            Exception: large enterprise projects or government RFPs where a full proposal document
            is expected. Even then, lead with a one-page executive summary.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Follow Up — Without Being Annoying</h2>

          <p>
            Send a follow-up if you haven&apos;t heard back in 3 business days.
            One line is enough:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-4 text-sm text-gray-700 italic">
            &ldquo;Hi [Name], following up on the proposal I sent on [date]. Happy to jump on a quick call
            if that&apos;s easier than email. Let me know either way.&rdquo;
          </div>

          <p>
            If still no reply after 5 more days, send one final follow-up and then move on.
            Two follow-ups is professional. Three is desperate.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-1">📋 Freelancer Client CRM — AED 175</p>
            <p className="text-sm text-gray-500 mb-3">
              Includes 10 email and proposal templates — client proposal, follow-up sequence,
              scope clarification, and more. Pre-written, ready to customize.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Get the Freelancer CRM →
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Winning the Project Before You Send the Proposal</h2>

          <p>
            The best proposals are almost formalities — the client already wants to work with you
            before they read a single word.
          </p>

          <p>
            How? Through the discovery conversation. If you ask the right questions upfront —
            what&apos;s the business goal, what does success look like, what&apos;s the budget range,
            what&apos;s the timeline pressure — you can tailor the proposal so precisely that it feels
            like it was written just for them. Because it was.
          </p>

          <p>
            The freelancers who win consistently don&apos;t send 20 proposals a week.
            They send 3 very targeted ones and close 2 of them.
          </p>

          <div className="bg-gray-900 text-white rounded-2xl p-6 mt-10">
            <p className="text-sm font-semibold text-gray-300 mb-1">Need a system to track all this?</p>
            <p className="text-xl font-bold mb-3">Freelancer Client CRM — AED 175</p>
            <p className="text-gray-400 text-sm mb-4">
              Client pipeline, proposal tracker, follow-up reminders, and 10 email templates.
              Know exactly where every deal stands — no more lost leads.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get the CRM →
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/how-to-price-freelance-services-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Price Your Freelance Services in the UAE →
              </Link>
              <Link href="/blog/get-freelance-clients-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Get Freelance Clients in the UAE (6 Strategies That Work) →
              </Link>
              <Link href="/blog/freelance-systems-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                Why Most UAE Freelancers Stay Stuck at AED 10K/Month →
              </Link>
              <Link href="/blog/client-onboarding-freelance-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                Client Onboarding Process for UAE Freelancers (Step-by-Step) →
              </Link>
            </div>
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
