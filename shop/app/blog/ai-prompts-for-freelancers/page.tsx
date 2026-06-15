import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use AI to Do More Freelance Work in Less Time — SoloKit",
  description:
    "The exact AI prompts I use for client proposals, follow-up emails, content creation, and more — plus the mistakes that waste your time with ChatGPT and Claude.",
  alternates: { canonical: "/blog/ai-prompts-for-freelancers" },
  openGraph: {
    title: "How to Use AI to Do More Freelance Work in Less Time",
    description: "The exact prompts freelancers need for proposals, emails, and content creation.",
    type: "article",
    url: "/blog/ai-prompts-for-freelancers",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use AI to Do More Freelance Work in Less Time",
  description:
    "The exact AI prompts I use for client proposals, follow-up emails, content creation, and more — plus the mistakes that waste your time with ChatGPT and Claude.",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/ai-prompts-for-freelancers",
  mainEntityOfPage: "https://solokit.cloud/blog/ai-prompts-for-freelancers",
};

const prompts = [
  {
    label: "Write a project proposal",
    prompt:
      'Write a professional project proposal for a [website redesign] for a [real estate company]. Include: project overview, deliverables, timeline (4 weeks), investment of [AED 5,000], and a clear CTA. Tone: confident and friendly.',
  },
  {
    label: "Follow up on a cold lead",
    prompt:
      "Write a follow-up email to a client who hasn't responded to my proposal in 5 days. Short, friendly, not pushy. End with a yes/no question to re-open the conversation.",
  },
  {
    label: "Chase an overdue invoice",
    prompt:
      "Write a polite but firm overdue invoice reminder. Invoice is 10 days overdue. Amount: AED 3,500. Professional, mentions consequences without being aggressive.",
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
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">AI Tools</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">June 10, 2026</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Use AI to Do More Freelance Work in Less Time
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Most freelancers use ChatGPT like a search engine and wonder why the output is generic.
            The problem isn't the AI — it's the prompts.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            I've been using Claude and ChatGPT daily in my work for over a year. These tools can genuinely
            save you 5-10 hours a week — but only if you know how to talk to them.
          </p>

          <p>
            Here's what actually works, what doesn't, and the prompts I use most often.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The #1 Mistake Freelancers Make With AI</h2>

          <p>
            They ask vague questions and get vague answers.
          </p>

          <p>
            "Write me a proposal" → garbage output.
            <br />
            "Write a proposal for a website redesign project for a Dubai real estate company, 4-week timeline,
            AED 5,000, confident and friendly tone" → something you can actually send.
          </p>

          <p>
            The rule: the more specific your input, the more useful the output.
            AI is a thinking partner, not a mind reader.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The 3 Things AI Is Actually Good At for Freelancers</h2>

          <ol className="list-decimal pl-5 space-y-4 text-gray-600">
            <li>
              <strong className="text-gray-900">First drafts of client communication.</strong>{" "}
              Proposals, follow-ups, invoice reminders, onboarding emails. You review and personalize —
              AI handles the blank page.
            </li>
            <li>
              <strong className="text-gray-900">Content creation at volume.</strong>{" "}
              10 LinkedIn post ideas in 2 minutes. A week of newsletter content in 30 minutes.
              The ideas are rough — you refine and post.
            </li>
            <li>
              <strong className="text-gray-900">Thinking out loud.</strong>{" "}
              Explain your pricing strategy to Claude and ask it to poke holes. Describe a difficult
              client situation and ask for scripts. AI as a sounding board is underrated.
            </li>
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Copy-Paste Prompts That Work</h2>

          <p>These are real prompts — not theoretical ones. Paste them in, fill in the brackets.</p>

          <div className="flex flex-col gap-4 my-6">
            {prompts.map((p) => (
              <div key={p.label} className="border border-gray-200 rounded-2xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{p.label}</p>
                <p className="text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-3 font-mono leading-relaxed">
                  {p.prompt}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm text-gray-500 mb-3">
              Want 10 more free prompts (no email required)?
            </p>
            <Link
              href="/free"
              className="inline-block bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Get 10 free prompts →
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">When AI Wastes Your Time</h2>

          <p>There are situations where AI slows you down rather than speeds you up:</p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-900">Editing AI output that misses the mark.</strong>{" "}
              If you write a bad prompt and get bad output, you spend 20 minutes fixing it.
              Better to write a good prompt the first time.
            </li>
            <li>
              <strong className="text-gray-900">Using AI for tasks that need human judgment.</strong>{" "}
              Pricing strategy, client relationships, creative direction — AI can inform these,
              but not replace the judgment call.
            </li>
            <li>
              <strong className="text-gray-900">Over-relying on AI for your voice.</strong>{" "}
              The best freelancers have a distinctive way of writing and communicating. Use AI as a
              starting point, not the final output.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Which AI Tool Is Best for Freelancers?</h2>

          <p>
            For writing and client work: <strong>Claude</strong> (by Anthropic) is consistently better
            at following tone instructions and writing naturally. It's less likely to sound robotic.
          </p>

          <p>
            For research and analysis: <strong>ChatGPT with web browsing</strong> is useful for
            looking up competitors, market research, and getting data.
          </p>

          <p>
            For speed and simplicity: <strong>Gemini</strong> is integrated into Google Workspace,
            so if you're already using Google Docs, it's right there.
          </p>

          <p>
            All three work with every prompt on this site.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Bottom Line</h2>

          <p>
            AI won't make you a better freelancer by itself. But it will save you 5-10 hours a week
            on the work that isn't your zone of genius: emails, proposals, content, admin.
          </p>

          <p>
            That's 20-40 extra hours a month you can spend on billable work — or just not working.
          </p>

          <div className="bg-gray-900 text-white rounded-2xl p-6 mt-10">
            <p className="text-sm font-semibold text-gray-300 mb-1">Ready to move faster?</p>
            <p className="text-xl font-bold mb-3">200 tested prompts for freelancers</p>
            <p className="text-gray-400 text-sm mb-4">
              Organized by use case. Works with Claude, ChatGPT, and Gemini. AED 109, instant download.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get the AI Prompt Pack →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
          <div className="flex flex-col gap-2">
            <Link href="/blog/freelance-proposal-tips-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
              How to Write a Freelance Proposal That Wins Clients →
            </Link>
            <Link href="/blog/get-freelance-clients-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
              How to Get Freelance Clients in the UAE (6 Strategies) →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
