import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Subcontract Freelance Work in the UAE (2026 Guide)",
  description:
    "How UAE freelancers build a subcontracting network to take on larger projects, handle overflow, and scale without going agency. Finding subcontractors, setting rates, contracts, quality control, and client communication.",
  alternates: { canonical: "/blog/how-to-subcontract-freelance-work-uae" },
  openGraph: {
    title: "How to Subcontract Freelance Work in the UAE (2026)",
    description:
      "How UAE freelancers subcontract work to scale capacity — finding contractors, rates, contracts, and client communication.",
    type: "article",
    url: "/blog/how-to-subcontract-freelance-work-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Subcontract Freelance Work in the UAE (2026 Guide)",
  description:
    "How UAE freelancers build a subcontracting network to scale without going agency.",
  url: `${siteUrl}/blog/how-to-subcontract-freelance-work-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToSubcontractFreelanceWorkUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Subcontracting Freelance Work UAE</span>
          </nav>

          <div className="mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Business & Mindset
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How to Subcontract Freelance Work in the UAE (2026)
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Subcontracting — hiring other freelancers to work under your name on projects you&apos;ve
              sold — is the most common way UAE freelancers scale past the ceiling of their own
              available hours without formally starting an agency. Done well, it lets you take on
              larger projects, serve more clients, and earn margin on others&apos; work. Done badly,
              it creates quality control problems, margin compression, and client relationship
              risks. This guide covers how to build a reliable subcontractor network in the UAE
              and manage the workflow, contracts, and communication professionally.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>June 16, 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Start Subcontracting</h2>
          <p className="text-gray-600 mb-6">
            Subcontracting makes sense when you are consistently turning down work that fits your
            client profile — not because you don&apos;t want it, but because you don&apos;t have time. The
            wrong trigger is one busy period; the right trigger is turning down 3–4 projects in
            a 6-week window. A single overflow project is better handled by referring it to a
            peer. Ongoing overflow is when you start building a subcontractor bench.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Your UAE Subcontractor Network</h2>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Where to Find UAE Subcontractors</h3>
              <p className="text-gray-600 text-sm">
                The UAE freelance community is your primary sourcing pool. LinkedIn search (UAE +
                your specialism + freelancer/consultant), UAE freelance Facebook and WhatsApp
                groups, Upwork UAE talent, and your own network of peers are all valid sources.
                The best subcontractors are people you have already observed doing good work —
                someone whose LinkedIn content you respect, someone who spoke at an event you
                attended, or someone you collaborated with on a past project. Cold sourcing
                requires more vetting; warm-network sourcing is faster and lower risk.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Vetting Before You Commit</h3>
              <p className="text-gray-600 text-sm">
                Before committing to a subcontractor on a client project: review their portfolio
                critically (not just the highlights), speak to at least one person who has worked
                with them, and run a small paid test task if possible — a 2–4 hour paid brief
                that simulates the type of work you&apos;d give them. UAE freelancers who skip the
                vetting step and onboard a subcontractor directly into a client project risk their
                own client relationship if quality falls short.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Setting Subcontractor Rates</h3>
              <p className="text-gray-600 text-sm">
                Your margin as the lead freelancer should be 20–40% of what you charge the client.
                If you charge a client AED 1,500/day for design work, you pay your subcontractor
                AED 900–1,200/day. This margin covers your project management time, quality review,
                client communication, and the relationship risk you carry. Being transparent with
                subcontractors about the existence of a margin is optional but generally maintains
                better relationships than concealing it — experienced freelancers know it exists.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subcontracting Contracts and Agreements</h2>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">What Your Subcontractor Agreement Must Cover</h3>
              <ul className="text-gray-600 text-sm space-y-1 mt-2">
                <li><strong>Scope and deliverables:</strong> Exactly what the subcontractor is responsible for, in the same specificity as your own SOW with the client</li>
                <li><strong>Payment terms:</strong> When and how you pay the subcontractor (typically net 7–14 from your receipt of client payment, or at project milestones)</li>
                <li><strong>Confidentiality:</strong> The subcontractor must not disclose the client&apos;s identity, project details, or your business arrangements</li>
                <li><strong>Non-solicitation:</strong> The subcontractor must not approach your client directly for at least 12–24 months after the project ends</li>
                <li><strong>IP ownership:</strong> All work produced is owned by you (and licensed to your client) — not by the subcontractor</li>
                <li><strong>Revision obligations:</strong> Subcontractor must complete reasonable revisions as part of the agreed scope</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Do Not Introduce Subcontractors to Your Client</h3>
              <p className="text-gray-600 text-sm">
                Unless you have explicitly told the client that you use subcontractors (and they&apos;re
                comfortable with it), do not introduce your subcontractor to the client — via email,
                in a meeting, or by CC&apos;ing them on communications. Your client bought your work
                and your responsibility. The subcontractor works for you, not for them. Introducing
                the subcontractor creates a direct relationship that can lead to the client
                approaching them for future work, bypassing you.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Control and Client Communication</h2>
          <ul className="space-y-2 mb-10 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>You are always responsible</strong> — Whatever your subcontractor delivers, you present it to the client as your work and you own the quality. If the subcontractor misses a deadline or produces poor quality, you fix it before it reaches the client — even if it means doing the work yourself. Never blame a subcontractor to a client.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Buffer deadlines</strong> — Set subcontractor deadlines 2–3 days before your client deadline. This gives you a quality review window and a safety buffer if revisions are needed. UAE freelancers who pass subcontractor deadlines directly to clients have no buffer when something goes wrong.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Brief to the same standard as the client briefed you</strong> — Poor briefing is the most common cause of subcontractor quality problems. Write a detailed brief — the same quality you would want from a client — covering objectives, deliverables, tone, format requirements, reference examples, and what good looks like. A vague brief produces a vague output.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Pay on time, always</strong> — Your subcontractors are running their own businesses and depending on your payment. Late payment damages trust and makes it harder to call on them next time you need capacity. Set up a system that pays subcontractor invoices within 7 days of receipt, regardless of when your client pays you.</li>
          </ul>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Subcontractor Agreement Templates for UAE Freelancers
            </h2>
            <p className="text-gray-300 mb-6">
              SoloKit includes subcontractor agreement templates, briefing document frameworks,
              and project management SOPs for UAE freelancers building a subcontractor model.
            </p>
            <Link
              href="/products/solokit-freelance-os"
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get SoloKit
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-build-a-freelance-team-uae", label: "How to Build a Freelance Team in the UAE" },
                { href: "/blog/how-to-build-freelance-agency-uae", label: "How to Build a Freelance Agency in the UAE" },
                { href: "/blog/freelance-contract-template-uae", label: "Freelance Contract Template UAE" },
                { href: "/blog/how-to-manage-multiple-clients-uae", label: "How to Manage Multiple Clients as a UAE Freelancer" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-blue-600 hover:text-blue-800 text-sm">
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
