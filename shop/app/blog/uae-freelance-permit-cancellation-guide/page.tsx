import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Cancel a UAE Freelance Permit — Step-by-Step Guide 2026",
  description:
    "Cancelling a UAE freelance permit or licence: MOHRE, free zone, and mainland processes, cancellation costs, timelines, and what happens if you do not cancel properly.",
  alternates: { canonical: "/blog/uae-freelance-permit-cancellation-guide" },
  openGraph: {
    title: "How to Cancel a UAE Freelance Permit — Step-by-Step Guide 2026",
    description: "How to properly cancel a UAE freelance permit, avoid penalties, and get your deposit back.",
    type: "article",
    url: "/blog/uae-freelance-permit-cancellation-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Cancel a UAE Freelance Permit — Step-by-Step Guide 2026",
  description: "How to properly cancel a UAE freelance permit, avoid penalties, and get your deposit back.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/uae-freelance-permit-cancellation-guide",
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
            <span className="text-gray-600">UAE Freelance Permit Cancellation Guide</span>
          </nav>

          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Legal & Admin</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Cancel a UAE Freelance Permit — 2026 Guide
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Leaving the UAE, switching to employment, or moving to a company licence? Cancelling your freelance permit
              incorrectly can result in fines, blocked Emirates IDs, and complications for future visas. This guide
              covers the exact cancellation process for MOHRE permits, free zone licences, and mainland setups.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            The cancellation process differs significantly depending on how your freelance permit is structured. There
            are three main categories: MOHRE-issued freelance permits (mainland), free zone freelance permits (DMCC,
            twofour54, Dubai Media City, etc.), and onshore licences under a mainland trade licence. Each has its own
            authority, timeline, and cancellation fee structure.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Before You Cancel — Checklist
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { point: "Settle all outstanding invoices", detail: "Ensure all client invoices are paid. Once your licence is cancelled, collecting on UAE commercial claims becomes significantly harder." },
              { point: "Notify active retainer clients", detail: "Give retainer clients formal written notice (check your contract — typically 30–60 days). Cancelling mid-retainer without notice is a breach of contract." },
              { point: "Close or transfer your business bank account", detail: "Most UAE business accounts require an active licence. Contact your bank before or immediately after cancellation to transfer or close the account." },
              { point: "File any pending VAT returns", detail: "If you are VAT-registered, de-register with the Federal Tax Authority (FTA) and file final VAT returns before or during the licence cancellation process." },
              { point: "Cancel your UAE visa (if tied to the permit)", detail: "If your residence visa is sponsored by your freelance licence, the visa must be cancelled first — or simultaneously. You cannot cancel a visa-linked licence without cancelling the visa." },
            ].map(({ point, detail }) => (
              <li key={point} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                <span><strong className="text-gray-900">{point}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Cancellation Process by Permit Type
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                type: "MOHRE Freelance Permit (Mainland)",
                steps: [
                  "Log into the MOHRE Smart Services portal or visit a MOHRE service centre",
                  "Submit a permit cancellation request (under 'Business Establishment' or 'Work Permit' category)",
                  "Pay outstanding fees or fines, if any",
                  "Wait for MOHRE confirmation (typically 3–7 business days)",
                  "If your Emirates ID is tied to the permit, update your ID status through ICA (Federal Authority for Identity and Citizenship)",
                ],
                cost: "AED 0–500 depending on outstanding obligations",
                timeline: "3–10 business days",
                note: "MOHRE permits without visa sponsorship are simpler to cancel — just the permit termination. If the permit sponsored your visa, cancel visa first through ICA.",
              },
              {
                type: "Free Zone Freelance Permit (DMCC, twofour54, Dubai Media City, etc.)",
                steps: [
                  "Submit cancellation request through the free zone's online portal or customer service centre",
                  "Settle any outstanding flexi-desk or facility fees",
                  "Return any access cards, locker keys, or office equipment",
                  "Request and receive the NOC (No Objection Certificate) from the free zone confirming cancellation",
                  "Use the NOC to cancel the residence visa through GDRFA (Dubai) or ADNEC (Abu Dhabi)",
                  "Submit the NOC to your bank to close or transfer the business account",
                ],
                cost: "AED 500–2,000 in cancellation/processing fees (varies by free zone)",
                timeline: "5–15 business days",
                note: "Some free zones (like DMCC) refund a portion of the annual permit fee if cancelled before the renewal date. Check your permit start date and pro-rate eligibility.",
              },
              {
                type: "VAT De-registration (if applicable)",
                steps: [
                  "Log into the FTA EmaraTax portal",
                  "File a deregistration application under 'VAT' → 'Deregistration'",
                  "Submit all pending VAT returns and pay any outstanding VAT",
                  "FTA will review and approve — this can take 20–40 business days",
                  "Receive confirmation of VAT deregistration",
                ],
                cost: "AED 0 (no fee for deregistration itself)",
                timeline: "20–40 business days (FTA review)",
                note: "Start the VAT deregistration process early — it often takes longer than the licence cancellation itself. You can cancel the licence while the VAT deregistration is pending, but you must continue filing returns until approved.",
              },
            ].map(({ type, steps, cost, timeline, note }) => (
              <div key={type} className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 text-base mb-3">{type}</h3>
                <ol className="space-y-1.5 mb-3">
                  {steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-xs">
                    <p className="font-semibold text-gray-700">Cost</p>
                    <p className="text-gray-600 mt-0.5">{cost}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-xs">
                    <p className="font-semibold text-gray-700">Timeline</p>
                    <p className="text-gray-600 mt-0.5">{timeline}</p>
                  </div>
                </div>
                {note && <p className="text-xs text-emerald-700 bg-emerald-50 rounded-lg p-3 mt-3">{note}</p>}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What Happens If You Do Not Cancel Properly
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Issue</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Consequence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Permit expires without cancellation", "Outstanding renewal fees accumulate — you still owe the renewal even if you stopped operating"],
                  ["Visa not cancelled before leaving", "Travel ban or overstay fine on return to UAE (AED 200/day overstay)"],
                  ["Business bank account not closed", "Banks may charge maintenance fees indefinitely; account may be flagged"],
                  ["VAT not deregistered (if registered)", "Ongoing filing obligations and potential penalties for missed returns"],
                  ["Free zone NOC not obtained", "Cannot prove business is legally closed — complicates future UAE applications"],
                ].map(([issue, consequence]) => (
                  <tr key={issue}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{issue}</td>
                    <td className="px-4 py-3 text-red-600 text-xs">{consequence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Switching to Employment — Special Case</p>
            <p className="text-sm text-emerald-800">
              If you are cancelling your freelance permit because you have accepted a full-time role, your new employer
              will typically handle the visa transfer. You still need to independently cancel the freelance permit/licence
              itself — your new employer's visa does not automatically cancel the old permit. Get written confirmation
              from both your new employer and the issuing authority.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools Built for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and SOPs — everything to run or wind down a professional freelance business in the UAE.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/dmcc-freelance-licence-guide" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ DMCC Freelance Permit Guide 2026</Link>
              <Link href="/blog/freelance-visa-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Get a Freelance Permit in the UAE</Link>
              <Link href="/blog/corporate-tax-uae-freelancers-2026" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ UAE Corporate Tax for Freelancers 2026</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
