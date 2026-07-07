import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create a Freelance Pitch Deck in the UAE — 2026 Guide",
  description:
    "Should UAE freelancers use pitch decks? When a pitch deck wins clients, what slides to include, how to structure a credentials deck, and how to present it in UAE corporate meetings.",
  alternates: { canonical: "/blog/freelance-pitch-deck-uae" },
  openGraph: {
    title: "How to Create a Freelance Pitch Deck in the UAE — 2026 Guide",
    description: "Pitch deck guide for UAE freelancers: when to use one, what to include, and how to present it.",
    type: "article",
    url: "/blog/freelance-pitch-deck-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create a Freelance Pitch Deck in the UAE",
  description: "Pitch deck guide for UAE freelancers: when to use one, what to include, and how to present it.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-pitch-deck-uae",
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
            <span className="text-gray-600">Freelance Pitch Deck UAE</span>
          </nav>

          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Client Acquisition</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Create a Freelance Pitch Deck in the UAE
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              For corporate and government clients in the UAE, a professional pitch deck or credentials presentation
              can be the difference between winning a AED 50,000 contract and losing it to a larger agency.
              Most freelancers skip this step — which is exactly why the ones who create a credentials deck
              stand out so dramatically.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            A pitch deck (also called a credentials deck or capability statement) is a visual presentation —
            typically 8–12 slides — that you use in client meetings to present who you are, what you do,
            who you have worked with, and how you work. It is most valuable for corporate and government
            clients in the UAE who expect a formal presentation before engaging any consultant.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Do You Need a Pitch Deck? — When to Use One
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Client Type</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Pitch Deck?</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["UAE government / semi-government entity", "Essential", "Formal procurement expects structured credentials presentation"],
                  ["Large UAE corporate (500+ employees)", "Strongly recommended", "Multiple stakeholders need to see you before sign-off; procurement requires it"],
                  ["Mid-size UAE company (50–500 employees)", "Useful for first meeting", "Differentiates you from freelancers who just bring their CV"],
                  ["SME / startup", "Optional — keep it short", "A 2-page PDF overview may be more appropriate than a full deck"],
                  ["Referral-sourced direct contact", "Not usually needed", "Trust is already established; let the conversation flow naturally"],
                ].map(([client, deck, why]) => (
                  <tr key={client}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{client}</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">{deck}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The 10-Slide UAE Freelancer Credentials Deck
          </h2>

          <div className="space-y-3 mb-8">
            {[
              { slide: "Slide 1 — Title slide", content: "Your name, your positioning statement (not job title), and contact information. Clean, professional design. No stock photos of handshakes." },
              { slide: "Slide 2 — The problem you solve", content: "One slide, one problem. 'UAE companies scaling into new markets often lack the internal [marketing/tech/finance] expertise to execute properly — resulting in delayed launches and wasted budget.' Make them feel the pain." },
              { slide: "Slide 3 — Your solution", content: "How you solve it. Keep to 3–4 bullet points. Focus on outcomes, not activities. 'I help companies execute [X] without hiring full-time — giving you senior expertise on a project or retainer basis.'" },
              { slide: "Slide 4 — Your credentials", content: "Years of experience, key industries, notable companies worked with (logo parade if possible), certifications. Do not make this a CV — make it a confidence-builder. 2–3 key credentials are more powerful than a list of 15." },
              { slide: "Slide 5 — How you work (process)", content: "A simple 4–5 step process diagram. Discovery → Strategy → Execution → Review → Delivery. Shows you have a system, not just ad hoc services. Reduces perceived risk." },
              { slide: "Slide 6–8 — Case studies (1–3)", content: "Each case study: Client type (anonymous if needed), Challenge, What you did, Result (with numbers). 3-bullet format per case study. 'Helped a Dubai fintech reduce customer acquisition cost by 40% in 90 days through [X].' Numbers are essential." },
              { slide: "Slide 9 — Client logos and testimonials", content: "If you have permission: 6–8 recognizable UAE client logos. If not: 2–3 direct quotes from decision-makers (anonymized by role and company type). Testimonials from titles (CFO at a UAE bank, CMO at a Series B startup) carry more weight than just names." },
              { slide: "Slide 10 — Next steps", content: "A clear call to action: 'I typically start with a 60-minute discovery session to understand your specific situation — available for meetings [timeframes]. Contact: [email / phone / WhatsApp].' End with an action, not a thank-you." },
            ].map(({ slide, content }) => (
              <div key={slide} className="flex gap-3 border border-gray-200 rounded-xl p-4">
                <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold">{slide.split(" ")[1]}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{slide}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{content}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Presenting in UAE Corporate Meetings
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { point: "Bring printed copies", detail: "UAE corporate meetings often have multiple decision-makers who will share a printed copy around the table. Print 3–5 color copies even if you plan to present digitally. A physical deck leaves behind a lasting impression." },
              { point: "Present, do not read", detail: "Know your deck well enough to speak to each slide without reading from it. The slide is a visual aid — you are the presentation. Decision-makers in UAE corporates value confident, fluent delivery." },
              { point: "Customize one slide per meeting", detail: "Swap one case study for one that is specifically relevant to the client's industry. A one-slide customization shows you have done your research and is far more effective than a generic deck." },
              { point: "End every meeting with a clear next step", detail: "Never leave a meeting without agreeing what happens next: 'Shall I send over a proposal by [date]?' or 'Can we schedule a follow-up with [stakeholder]?' The UAE market respects directness when done with confidence." },
            ].map(({ point, detail }) => (
              <li key={point} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{point}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">AI Prompts for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Credentials deck outlines, slide copy, case study templates, and proposal scripts — 200 AI prompts built for UAE freelancers.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-close-high-ticket-clients-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Close High-Ticket Clients in the UAE</Link>
              <Link href="/blog/freelance-proposal-tips-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Write a Freelance Proposal That Wins</Link>
              <Link href="/blog/how-to-write-case-studies-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Write Case Studies as a UAE Freelancer</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
