import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should UAE Freelancers Charge for Discovery Calls? (2026 Guide)",
  description:
    "Whether to charge for discovery calls as a UAE freelancer. When to charge, when to offer free consultations, how to structure paid discovery sessions, and how to handle the pricing conversation in Dubai and Abu Dhabi.",
  alternates: { canonical: "/blog/how-to-price-discovery-calls-uae" },
  openGraph: {
    title: "Should UAE Freelancers Charge for Discovery Calls? (2026)",
    description:
      "A practical guide to whether and how to charge for discovery/intro calls as a UAE freelancer.",
    type: "article",
    url: "/blog/how-to-price-discovery-calls-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Should UAE Freelancers Charge for Discovery Calls? (2026 Guide)",
  description:
    "Whether to charge for discovery calls as a UAE freelancer.",
  url: `${siteUrl}/blog/how-to-price-discovery-calls-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToPriceDiscoveryCallsUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Pricing Discovery Calls UAE</span>
          </nav>

          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Should UAE Freelancers Charge for Discovery Calls? (2026 Guide)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">Whether to charge for discovery calls as a UAE freelancer. When to charge, when to offer free consultations, how to structure paid discovery sessions, and how to handle the pricing conversation in Dubai and Abu Dhabi.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>


          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Case for Free Discovery Calls</h2>
          <p className="text-gray-600 mb-4">
            A free 30-minute discovery call is a qualified lead generation tool, not a
            consultation. When done correctly, it&apos;s not you giving advice — it&apos;s you
            asking questions, diagnosing fit, and deciding whether to write a proposal. The
            value exchange is the client&apos;s time explaining their problem in exchange for
            your assessment of whether you can help. In the UAE market specifically:
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> UAE corporate buyers — especially in government and banking — expect a pre-sales discovery process before committing to any vendor. Charging for this initial conversation creates friction that competitors who offer free initial consultations don&apos;t have.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> UAE business culture is relationship-first. The discovery call is the start of that relationship. Monetizing it immediately signals that you treat every interaction as a transaction — which can feel abrasive in a relationship-driven culture.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> If your conversion rate from discovery call to paid project is high (above 30–40%), free discovery calls are an efficient use of your time.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Case for Paid Discovery Sessions</h2>
          <p className="text-gray-600 mb-4">
            A paid discovery session is something different from a free discovery call — it&apos;s
            a structured, deliverable-focused engagement that produces something the client
            keeps. Charging for a paid discovery makes sense when:
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> The &quot;discovery&quot; requires more than 30–60 minutes — it involves reviewing documents, analysing data, visiting a site, or interviewing multiple stakeholders.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> You produce a concrete output — a needs assessment, a process map, a technical brief, a roadmap document — that has standalone value to the client regardless of whether they hire you for the main project.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> You&apos;re established enough that clients readily pay for your thinking — typically 5+ years of experience and a visible track record.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> You are suffering from too many unqualified discovery calls eating your week — paid sessions filter for serious buyers.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The UAE Decision Framework</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Situation</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Approach</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { situation: "Prospect reached out via LinkedIn / referral", approach: "Free 30-min discovery call", why: "They&apos;ve already qualified themselves; the call is relationship building, not advice-giving" },
                  { situation: "Expert asking complex strategic questions upfront", approach: "Paid strategy session (AED 1,000–3,000)", why: "The inquiry itself requires expert thinking; a free call wastes your expertise" },
                  { situation: "You need to review their existing systems/documents", approach: "Paid audit or assessment", why: "You&apos;re doing work, not discovery; the output has standalone value" },
                  { situation: "General enquiry from unknown source with unclear fit", approach: "Screen by email first; then free 20-min fit call", why: "Email screening pre-qualifies before investing your time in a call" },
                  { situation: "Repeat client asking about a new project", approach: "Free — it&apos;s relationship maintenance", why: "Existing relationship; conversion rate is near 100%; charging disrupts trust" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-800">{row.situation}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.approach}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Introduce a Paid Discovery Session in the UAE</h2>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Frame It as a Deliverable, Not a Meeting</h3>
              <p className="text-gray-600 text-sm">
                &quot;I&apos;d like to offer a 2-hour Strategy Session — we&apos;ll map your current process,
                identify the 3 highest-leverage areas to address, and you&apos;ll leave with a written
                summary and recommended next steps. I charge AED 2,500 for this session, credited
                toward the project if you proceed.&quot; The credit-toward-project structure is
                particularly effective in UAE corporate buying — it removes the perceived
                risk of paying for an introduction.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Use an Intake Form to Pre-Qualify for Free Calls</h3>
              <p className="text-gray-600 text-sm">
                If you&apos;re offering free discovery calls but getting too many unqualified
                enquiries, introduce a short intake form before scheduling: company name,
                project description, timeline, and budget range. UAE buyers who are serious
                will complete it. Browsers won&apos;t. A 3-question form on your Calendly or
                Google Form booking page reduces your wasted discovery calls by 40–60%.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Don&apos;t Consult on Free Discovery Calls</h3>
              <p className="text-gray-600 text-sm">
                The most common discovery call mistake UAE freelancers make is giving away
                consulting on a free call — answering detailed how-to questions, proposing
                solutions, and educating the prospect for free. A discovery call should be
                80% you asking questions, 20% you describing how you work. Save the solution
                for the proposal (or the paid session). If a prospect is pressing for
                detailed answers on a free call, that&apos;s a signal to introduce your paid
                strategy session structure.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Discovery Call & Proposal Templates for UAE Freelancers
            </h2>
            <p className="text-gray-300 mb-6">
              SoloKit includes discovery call scripts, intake form templates, paid strategy session
              frameworks, and proposal templates designed for UAE freelancers.
            </p>
            <Link
              href="/bundle"
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get SoloKit
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in the UAE" },
                { href: "/blog/how-to-create-freelance-rate-card-uae", label: "How to Create a Freelance Rate Card in the UAE" },
                { href: "/blog/freelance-proposal-tips-uae", label: "How to Write a Proposal That Wins Clients" },
                { href: "/blog/how-to-negotiate-freelance-rates-uae", label: "How to Negotiate Rates Without Losing the Client" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-emerald-700 hover:text-emerald-900 text-sm">
                  → {link.label}
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
