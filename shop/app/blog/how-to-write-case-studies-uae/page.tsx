import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write Case Studies That Win UAE Clients (With Template)",
  description:
    "How UAE freelancers write case studies that convert prospects to clients — the exact structure, questions to answer, what UAE decision-makers care about, and a copy-paste template.",
  alternates: { canonical: "/blog/how-to-write-case-studies-uae" },
  openGraph: {
    title: "How to Write Case Studies That Win UAE Clients (With Template)",
    description: "Case study writing system for UAE freelancers — structure, questions, what UAE buyers care about, and a copy-paste template.",
    type: "article",
    url: "/blog/how-to-write-case-studies-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write Case Studies That Win UAE Clients (With Template)",
  description: "How UAE freelancers write case studies that convert prospects to clients.",
  url: `${siteUrl}/blog/how-to-write-case-studies-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const mistakes = [
  { mistake: "Describing what you did instead of what changed", fix: "Replace 'I redesigned the website' with 'Website conversion rate increased from 1.2% to 3.8% in 90 days'. The client cares about their outcome, not your process." },
  { mistake: "Vague results ('improved performance', 'better engagement')", fix: "Every result must be specific and, where possible, quantified. If you cannot use numbers, use qualitative specifics: 'The client renewed for a second year and referred two additional clients.'" },
  { mistake: "Skipping the problem context", fix: "UAE clients reading a case study want to see themselves in it. Open with the client's situation before you arrived. The more specific the problem description, the more relevant it feels to a prospect with the same problem." },
  { mistake: "Making the case study about you", fix: "The client is the hero. You are the guide. Every sentence should be about what the client achieved, not how talented you are. Frame your expertise as the tool that helped them succeed." },
  { mistake: "No client quote or social proof", fix: "A single strong client quote ('Working with [Name] was the best investment we made in Q1') increases case study credibility more than any amount of self-description. Get approval to use quotes in writing." },
];

export default function HowToWriteCaseStudiesUAE() {
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
          <span className="text-gray-600">How to Write Case Studies UAE</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Client Work & Proposals</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            How to Write Case Studies That Win UAE Clients (With Template)
          </h1>
          <p className="text-gray-500 text-sm">7 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Most UAE freelancers skip case studies entirely — or write versions so vague
            they carry no persuasive weight. A well-written case study is one of the most
            powerful sales tools you can have: it shows a prospect exactly what you do,
            who you do it for, and what happens as a result. In the UAE B2B market, where
            referrals and demonstrated results drive hiring decisions, a specific, credible
            case study converts better than any brochure. Here is the system.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-1">Why case studies matter more in the UAE</p>
            <p className="text-gray-700">
              UAE B2B buyers are risk-averse about new freelancer relationships. The
              question they are constantly asking is: &quot;Has this person done this before,
              for someone like me?&quot; A case study answers that question directly. It
              reduces perceived risk and shortens the sales cycle. Three strong case
              studies are worth more than 50 generic portfolio samples.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The 5-Part Case Study Structure</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">1. Client context (2–3 sentences)</p>
                <p className="text-sm text-gray-700">
                  Who was the client — industry, size, and the specific situation they were
                  in when they hired you. Do not name the client unless they have explicitly
                  given permission. If confidential: &quot;A Dubai-based fintech startup with
                  50 employees, preparing for Series A fundraising.&quot; Specific enough to
                  be real, anonymized enough to protect the relationship.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">2. The problem (3–5 sentences)</p>
                <p className="text-sm text-gray-700">
                  What was broken, stuck, or missing before you arrived? Write this from
                  the client&apos;s perspective, not yours. What were they experiencing?
                  What was the cost of the problem (lost revenue, wasted time, missed
                  opportunities, reputational risk)? The problem section is where your
                  prospect sees themselves.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">3. Your approach (3–5 sentences)</p>
                <p className="text-sm text-gray-700">
                  What did you do, and why? This is the only section about your methodology —
                  keep it brief. Describe your process in a way that shows strategic thinking,
                  not just execution. &quot;We started with a 2-week audit to identify the highest-
                  impact levers before recommending any changes.&quot; Show that you had a
                  framework, not just skills.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">4. The results (3–5 bullets)</p>
                <p className="text-sm text-gray-700">
                  The most important section. Lead with the number, then the context:
                  &quot;Revenue increased 38% in the quarter following the rebrand.&quot; Not:
                  &quot;The rebrand was well-received.&quot; Use as many quantified metrics as
                  the client will allow you to share. If numbers are confidential, use
                  percentage changes or relative comparisons (&quot;3x improvement in&quot;,
                  &quot;reduced from X weeks to X days&quot;).
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">5. Client quote + what happened next</p>
                <p className="text-sm text-gray-700">
                  One strong client quote authenticates everything above. Follow it with
                  a sentence about continuity: &quot;The client renewed for a 6-month retainer
                  following project completion.&quot; or &quot;Referred us to their CFO for a
                  separate engagement.&quot; Renewal and referrals are the strongest possible
                  social proof.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5 Common Case Study Mistakes (and How to Fix Them)</h2>
            <div className="space-y-3 mt-4">
              {mistakes.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-bold text-red-600 text-sm mb-1">✗ {item.mistake}</p>
                  <p className="text-xs text-gray-600"><strong>Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Copy-Paste Case Study Template</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm font-mono text-gray-700 mt-3">
              <p className="font-bold not-italic mb-3">CASE STUDY: [Headline with specific result]</p>
              <p className="font-bold not-italic mt-2">Client</p>
              <p>[Industry], [company size or context], [location in UAE if relevant]</p>
              <p className="font-bold not-italic mt-3">The challenge</p>
              <p>[2–3 sentences describing the client&apos;s situation and what the problem was costing them]</p>
              <p className="font-bold not-italic mt-3">What we did</p>
              <p>[2–3 sentences on your approach — the what and why, not the how]</p>
              <p className="font-bold not-italic mt-3">Results</p>
              <p>• [Quantified result 1]</p>
              <p>• [Quantified result 2]</p>
              <p>• [Qualitative result or ongoing outcome]</p>
              <p className="font-bold not-italic mt-3">What the client said</p>
              <p className="italic">&quot;[Direct client quote — keep it under 2 sentences, focused on result or experience]&quot;</p>
              <p className="not-italic mt-1">— [First name or role, e.g., &quot;Marketing Director, Dubai-based retail brand&quot;]</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to Get Client Permission to Publish</h2>
            <p>
              The most common reason UAE freelancers avoid case studies is fear of asking.
              Here is the message that works:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm mt-3">
              <p className="font-semibold text-gray-900 mb-2">Script: Asking for case study permission</p>
              <p className="text-gray-700 italic">
                &quot;[Name], I&apos;m putting together a short case study from our work together —
                mainly the results we achieved on [project]. Would you be comfortable with
                me sharing this with prospective clients? I would keep it anonymous (no
                company name or identifying details) and send it to you for approval
                before publishing. I can also include a quote from you if you&apos;re
                open to it.&quot;
              </p>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• Most clients say yes — especially if the results were strong and they like you</li>
              <li>• Offer full anonymization first; named attribution is a bonus if they agree</li>
              <li>• Always send the final case study for client approval before publishing</li>
              <li>• If they decline, ask if you can use the results without identifying details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Where to Use Case Studies in the UAE</h2>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>Proposals</strong> — Attach 1–2 relevant case studies. The most powerful sales move: show a prospect a case study from a client in their industry</li>
              <li>• <strong>LinkedIn</strong> — Post case study highlights as articles or posts. &quot;How I helped a Dubai F&B brand reduce customer acquisition cost by 40%&quot; outperforms any general thought leadership</li>
              <li>• <strong>Website portfolio</strong> — Replace generic portfolio samples with structured case studies. &quot;Project: Brand Identity for Fintech Startup — Result: 3x investor meeting bookings&quot;</li>
              <li>• <strong>Pitch deck / credentials deck</strong> — If you pitch enterprise clients or government entities, a credentials deck with 3–5 case studies is the standard format for UAE B2B presentations</li>
              <li>• <strong>Email follow-up sequences</strong> — After a discovery call, send a case study relevant to what the prospect shared. Shows you listened and that you have done this before</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Win more UAE clients</p>
            <h3 className="text-lg font-bold mb-2">Freelance Proposal Template — Copy-Paste Format That Wins</h3>
            <p className="text-gray-400 text-sm mb-4">
              A structured proposal template designed for UAE clients — with the sections
              that convert, space for case study integration, and pricing presentation
              that frames your value correctly.
            </p>
            <Link
              href="/blog/freelance-proposal-template-uae"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Get the Proposal Template →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-proposal-template-uae", title: "Freelance Proposal Template UAE (Copy-Paste)" },
                { href: "/blog/how-to-build-freelance-portfolio-uae", title: "How to Build a Freelance Portfolio in the UAE" },
                { href: "/blog/client-communication-tips-freelancers-uae", title: "Client Communication for UAE Freelancers: Scripts That Work" },
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
