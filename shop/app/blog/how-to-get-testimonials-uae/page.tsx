import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Client Testimonials as a UAE Freelancer (Scripts & System)",
  description:
    "How UAE freelancers collect, write, and use client testimonials to win more clients — when to ask, word-for-word scripts, how to make it easy for UAE clients, and where to use testimonials.",
  alternates: { canonical: "/blog/how-to-get-testimonials-uae" },
  openGraph: {
    title: "How to Get Client Testimonials as a UAE Freelancer (Scripts & System)",
    description: "Testimonial collection system for UAE freelancers — scripts, timing, how to make it easy, and where to use testimonials.",
    type: "article",
    url: "/blog/how-to-get-testimonials-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Client Testimonials as a UAE Freelancer (Scripts & System)",
  description: "How UAE freelancers collect, write, and use client testimonials to win more clients.",
  url: `${siteUrl}/blog/how-to-get-testimonials-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToGetTestimonialsUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-10">

        
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">How to Get Client Testimonials as a UAE Freelancer (Scr</span>
        </nav>

        
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Get Client Testimonials as a UAE Freelancer (Scripts & System)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">How UAE freelancers collect, write, and use client testimonials to win more clients — when to ask, word-for-word scripts, how to make it easy for UAE clients, and where to use testimonials.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>6 min read</span>
          </div>
        </div>


        <div className="space-y-6 leading-relaxed">

          <p>
            Testimonials are the most underused sales asset in UAE freelancing. Most
            freelancers either never ask, ask too late, or ask in a way that makes it
            easy for the client to say &quot;I&apos;ll do it later&quot; — and never do. A systematic
            approach to collecting testimonials turns every completed project into future
            business. Here is the complete system.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-sm font-bold text-emerald-800 mb-2">Why testimonials matter more in the UAE</p>
            <p className="text-gray-700">
              The UAE B2B market runs on trust and referrals. Prospective clients
              are much more likely to hire you if they can see evidence that someone
              like them has hired you before and had a good experience. Three strong,
              specific testimonials from recognizable company names (or recognizable
              positions) convert better than any amount of self-promotion. In a small
              market where everyone knows everyone, social proof compounds fast.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>When to Ask (Timing Is Everything)</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">The best moment: right after delivery, when the client is happiest</p>
                <p className="text-sm text-emerald-800">
                  The optimal window for asking is within 48 hours of delivering a
                  successful project — when client enthusiasm is highest and the
                  results are fresh in their mind. If you wait a week, the positive
                  feeling fades. If you wait a month, they have moved on to new
                  problems. The day you send the final deliverable is the day you
                  ask for the testimonial.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">Second-best moment: at the positive milestone (not the end)</p>
                <p className="text-sm text-emerald-800">
                  If a client says something like &quot;this is exactly what we needed&quot;
                  or &quot;the feedback has been amazing&quot; during a project — that is your
                  moment. Ask immediately: &quot;I&apos;m really glad. Would you be willing
                  to put something like that in writing? It would mean a lot to my
                  practice.&quot; Strike while the emotion is live.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">Never ask when there is an unresolved issue</p>
                <p className="text-sm text-emerald-800">
                  Do not ask for a testimonial while there is an outstanding invoice,
                  a pending revision, or any friction in the relationship. Asking for
                  a favor when there is a unresolved obligation creates awkwardness.
                  Resolve all open items first, then ask.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>How to Ask: Word-for-Word Scripts</h2>
            <div className="space-y-4 mt-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">The easy ask (WhatsApp, at project completion)</p>
                <p className="text-gray-700 italic">
                  &quot;[Name], really glad we got to work on this together — the outcome
                  was exactly what I hoped for. I&apos;m building out my portfolio and
                  would really appreciate a short testimonial from you if you&apos;re
                  open to it. Even 2–3 sentences about what we worked on and how it
                  went would be brilliant. No pressure at all — but it would genuinely
                  help my practice.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">This works in the UAE because: it is personal, low-pressure, and specific about what you need (2–3 sentences).</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">The guided ask (when you want a specific testimonial)</p>
                <p className="text-gray-700 italic">
                  &quot;[Name], if you were happy with what we produced together, I&apos;d love
                  a short testimonial. To make it easy — could you answer 2 questions?
                  (1) What was the challenge you needed help with? (2) What changed
                  after working together? I can draft something from your answers and
                  send it back for your approval — or you can write it yourself,
                  whichever is easier.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">This works because: it structures the client&apos;s thinking and offers to do the work for them (drafting). UAE professionals are often busy — reducing effort increases response rate.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">The LinkedIn recommendation ask</p>
                <p className="text-gray-700 italic">
                  &quot;[Name], I&apos;d love to connect on LinkedIn if we are not already.
                  If you have a moment, a LinkedIn recommendation from you would be
                  incredible — it means a lot when it comes from someone like you in
                  [industry]. I&apos;m happy to write a draft recommendation for you to
                  edit and post, if that makes it easier.&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">LinkedIn recommendations are public and appear on your profile permanently. A recommendation from a recognizable UAE company name carries significant weight with B2B prospects.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>What Makes a Good vs. Bad Testimonial</h2>
            <div className="space-y-3 mt-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-red-600 text-sm mb-1">✗ Weak testimonial (vague, general)</p>
                <p className="text-xs text-gray-600 italic">&quot;Excellent work. Very professional. Would recommend.&quot;</p>
                <p className="text-xs text-gray-500 mt-1">Zero useful information. Could be about anyone, anything. Carries no weight.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-green-700 text-sm mb-1">✓ Strong testimonial (specific, result-oriented)</p>
                <p className="text-xs text-gray-600 italic">&quot;We hired [Name] to redesign our onboarding experience after our conversion rate stalled at 12%. Within 6 weeks of the redesign going live, we were at 19%. The process was collaborative and she completely understood our fintech constraints — would bring her back for the next project without hesitation.&quot;</p>
                <p className="text-xs text-gray-500 mt-1">Specific problem, specific result (numbers), specific context, strong recommendation. This converts.</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4">
              If a client gives you a weak testimonial, you can respectfully guide it:
              &quot;This is great, thank you. Could I ask — do you remember roughly what
              the [result metric] was before and after? Even approximately would make
              it much more impactful.&quot;
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Where to Use Testimonials in the UAE</h2>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• <strong>Website</strong> — Dedicated testimonials or social proof section. Name, role, company (or industry if anonymous), and the quote. Add a headshot if possible</li>
              <li>• <strong>Proposals</strong> — Include 2–3 testimonials from clients in similar industries to the prospect. Seeing social proof from a peer company is the highest-converting placement</li>
              <li>• <strong>LinkedIn profile</strong> — LinkedIn recommendations appear on your profile publicly. Collect at least 5 from recognizable UAE contacts</li>
              <li>• <strong>LinkedIn posts</strong> — Share client success stories with permission. &quot;[Client type] in Dubai increased [metric] by [X] after we worked on [project]&quot; performs well</li>
              <li>• <strong>Email signature</strong> — A single short testimonial line (&quot;[Name] helped us reduce cost per lead by 35% — [Company Name]&quot;) in your email signature is a passive but persistent trust signal</li>
              <li>• <strong>Pitch decks / credentials documents</strong> — For enterprise clients and government, include testimonials in your credentials deck with job title and company</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Dealing with the UAE Privacy Culture</h2>
            <p>
              Some UAE clients — particularly in financial services, government-adjacent
              industries, and family businesses — are reluctant to allow use of their
              name or company publicly. Manage this:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• Always ask permission before using any name, role, or company detail</li>
              <li>• Offer full anonymization as the default: &quot;I can use this with no identifying information — just the industry and role&quot;</li>
              <li>• Even anonymized testimonials (&quot;Head of Marketing, Dubai-based FMCG brand&quot;) carry weight — readers can identify the type of client even without the name</li>
              <li>• The best practice: always send the final testimonial text to the client for approval before publishing anywhere</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Build your client portfolio</p>
            <h3 className="text-lg font-bold mb-2">How to Write Case Studies That Win UAE Clients</h3>
            <p className="text-gray-400 text-sm mb-4">
              Turn your best testimonials into structured case studies — with the exact
              format, template, and permission scripts that work in the UAE market.
            </p>
            <Link
              href="/blog/how-to-write-case-studies-uae"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Read the Case Study Guide →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-write-case-studies-uae", title: "How to Write Case Studies That Win UAE Clients (With Template)" },
                { href: "/blog/how-to-build-freelance-portfolio-uae", title: "How to Build a Freelance Portfolio in the UAE" },
                { href: "/blog/get-referrals-freelance-uae", title: "How to Get Referrals as a UAE Freelancer" },
                { href: "/blog/client-communication-tips-freelancers-uae", title: "Client Communication for UAE Freelancers: Scripts That Work" },
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
