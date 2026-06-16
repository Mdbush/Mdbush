import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Offboard Freelance Clients in the UAE — Checklist & Templates 2026",
  description:
    "A professional client offboarding process for UAE freelancers: what to deliver, how to get testimonials, how to close projects cleanly, and how to stay top of mind for referrals.",
  alternates: { canonical: "/blog/freelance-client-offboarding-uae" },
  openGraph: {
    title: "How to Offboard Freelance Clients in the UAE — Checklist & Templates 2026",
    description: "Professional client offboarding process for UAE freelancers: checklists, testimonial requests, and referral asks.",
    type: "article",
    url: "/blog/freelance-client-offboarding-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Offboard Freelance Clients in the UAE",
  description: "Professional client offboarding process for UAE freelancers.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/freelance-client-offboarding-uae",
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
            <span className="text-gray-600">Freelance Client Offboarding UAE</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Client Management</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Offboard Freelance Clients in the UAE
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              How you end a project matters as much as how you start it. A professional offboarding process
              generates testimonials, referrals, and return business. Most UAE freelancers just stop working
              and send a final invoice. The ones who grow their business treat project endings as a growth
              opportunity.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            The final impression of a project is disproportionately powerful. A client who received excellent
            work but a messy, unclear project ending is less likely to refer you than a client who received
            good (not excellent) work but a clean, professional close. Offboarding is where you convert satisfied
            clients into active advocates.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The Client Offboarding Checklist
          </h2>

          <div className="space-y-3 mb-8">
            {[
              {
                phase: "2 weeks before project end",
                items: [
                  "Send a project closing notification: 'We are 2 weeks from project completion — here is what remains and the delivery timeline.'",
                  "Confirm all outstanding deliverables and agree on final delivery date in writing",
                  "Send the final invoice (or schedule it for the delivery date)",
                  "Identify any knowledge transfer needed — documentation, handover notes, access credentials",
                ],
              },
              {
                phase: "Final delivery",
                items: [
                  "Deliver all assets in agreed formats (organized, clearly labeled — not a messy zip file)",
                  "Send a project summary email: what was delivered, key decisions made, results achieved to date",
                  "Transfer all relevant logins, files, or access credentials securely",
                  "Confirm the client has everything they need to continue independently",
                ],
              },
              {
                phase: "1 week after final delivery",
                items: [
                  "Send a brief check-in: 'Hope everything is working well — just checking in to confirm you have everything you need.'",
                  "Request a testimonial (see template below)",
                  "Ask about future needs: 'Is there anything else I can help with, or shall I check back in [timeframe]?'",
                  "Offer a referral ask if the project went well (see template below)",
                ],
              },
              {
                phase: "30 days post-project",
                items: [
                  "Optional: send a 30-day results check-in — 'Just wanted to follow up to see how [deliverable] has been performing.'",
                  "Add client to your quarterly newsletter or LinkedIn connection if not already",
                  "Note in your CRM: follow up again in 3–6 months about new projects",
                ],
              },
            ].map(({ phase, items }) => (
              <div key={phase} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block"></span>
                  {phase}
                </p>
                <ul className="space-y-1.5">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs text-gray-600">
                      <span className="text-emerald-500 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Testimonial Request Template
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Email or WhatsApp message</p>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>Hi [Name],</p>
              <p>
                It was a real pleasure working together on [project]. I hope [deliverable] is already making a
                difference for the team.
              </p>
              <p>
                If you have 5 minutes, I would really appreciate a short testimonial — either for my LinkedIn
                profile or website. Something simple about your experience working together and the outcome
                would mean a lot.
              </p>
              <p>
                To make it easy, here are a couple of prompts if helpful:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>What was the challenge you were trying to solve?</li>
                <li>What was it like working with [your name]?</li>
                <li>What would you tell someone considering working with them?</li>
              </ul>
              <p>
                Of course, completely fine if timing is not right. Thank you again for a great project.
              </p>
              <p>Best,<br />[Your name]</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Referral Ask Template
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Best sent 1–2 weeks after project closes</p>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>Hi [Name],</p>
              <p>
                Really glad we got to work together on [project]. I am currently taking on new clients and
                would love to work with more companies like [their company].
              </p>
              <p>
                If you know anyone who might benefit from [what you do], I would be incredibly grateful for
                an introduction. Even a quick "you should talk to [your name]" message goes a long way.
              </p>
              <p>
                Of course, no pressure at all — just wanted to mention it in case it comes up naturally.
                Thank you again!
              </p>
              <p>Best,<br />[Your name]</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Timing the Referral Ask Right</p>
            <p className="text-sm text-emerald-800">
              In the UAE, the referral ask is most effective 1–3 weeks after project completion — when the client
              is still excited about the results but has had enough time to see early wins. Asking during the
              final delivery meeting (too early — they have not seen results) or 3 months later (too late —
              they have moved on) are both suboptimal. Strike while the trust is highest.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Client Management Templates for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Offboarding checklists, testimonial scripts, referral templates, and client SOPs — built for UAE freelancers.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-get-testimonials-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Get Client Testimonials in the UAE</Link>
              <Link href="/blog/how-to-ask-for-referrals-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Ask for Referrals as a UAE Freelancer</Link>
              <Link href="/blog/client-onboarding-freelance-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Client Onboarding Process for UAE Freelancers</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
