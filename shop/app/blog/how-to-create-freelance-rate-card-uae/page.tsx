import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create a Freelance Rate Card in the UAE (2026): Templates & Pricing Strategy",
  description:
    "How to create a professional rate card for your UAE freelance services. What to include, pricing structures, how to present rates to clients, when to share your rate card, and rate card templates for Dubai freelancers.",
  alternates: { canonical: "/blog/how-to-create-freelance-rate-card-uae" },
  openGraph: {
    title: "How to Create a Freelance Rate Card in the UAE (2026)",
    description:
      "Professional rate card templates and pricing strategy for UAE freelancers in Dubai and Abu Dhabi.",
    type: "article",
    url: "/blog/how-to-create-freelance-rate-card-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create a Freelance Rate Card in the UAE (2026): Templates & Pricing Strategy",
  description:
    "How to create a professional rate card for your UAE freelance services.",
  url: `${siteUrl}/blog/how-to-create-freelance-rate-card-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function HowToCreateFreelanceRateCardUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Freelance Rate Card UAE</span>
          </nav>

          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Create a Freelance Rate Card in the UAE (2026): Templates & Pricing Strategy</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">How to create a professional rate card for your UAE freelance services. What to include, pricing structures, how to present rates to clients, when to share your rate card, and rate card templates for Dubai freelancers.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>


          <h2 className="text-2xl font-bold text-gray-900 mb-4">What a Rate Card Is (and Isn&apos;t)</h2>
          <p className="text-gray-600 mb-6">
            A rate card is not a proposal. It doesn&apos;t include project-specific details, timelines, or
            custom scoping. It&apos;s a standardized reference document that shows a prospective client
            what type of work you do, how you price it, and roughly what budget they need to work
            with you. Think of it as the document you share before a proposal, not instead of one.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The 6 Elements of a UAE Freelancer Rate Card</h2>
          <div className="space-y-4 mb-10">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">1. Your Name, Title & Contact Details</h3>
              <p className="text-gray-600 text-sm">
                Simple header: your name, professional title (e.g., &quot;Freelance UX Designer — Dubai&quot;),
                email, WhatsApp number, and website or portfolio URL. UAE clients expect WhatsApp
                to be listed — it&apos;s the primary business communication channel. Adding &quot;Available for
                projects in Dubai & Abu Dhabi&quot; signals local availability without being limiting.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">2. Services (What You Do)</h3>
              <p className="text-gray-600 text-sm">
                List your core service offerings — 3 to 6 maximum. More than six and you look like
                a generalist who can&apos;t say no. Each service should be a clear, outcome-oriented
                description of what you deliver, not a list of tools. &quot;Brand identity design —
                logo, typography, color, brand guidelines document&quot; is more useful than &quot;I do
                graphic design.&quot; UAE clients buy outcomes, not skill lists.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">3. Pricing (AED Format)</h3>
              <p className="text-gray-600 text-sm">
                Price in AED. Even if you&apos;re targeting international clients, your UAE rate card
                should show AED — it anchors you to the local market, avoids FX confusion, and
                signals that you understand the UAE business context. Use one of:
              </p>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li><strong>Day rate</strong> — best for consulting, development, and advisory work (e.g., &quot;AED 2,200/day&quot;)</li>
                <li><strong>Package price</strong> — best for defined deliverables (e.g., &quot;Brand Identity Package — from AED 8,500&quot;)</li>
                <li><strong>Retainer</strong> — best for ongoing work (e.g., &quot;Monthly Social Media Management — AED 4,500/month&quot;)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">4. What&apos;s Included & Excluded</h3>
              <p className="text-gray-600 text-sm">
                The most important section for preventing scope creep conversations later. For each
                service or package, list what&apos;s included (e.g., &quot;2 revision rounds, Figma file
                delivery, brand guidelines PDF&quot;) and explicitly what&apos;s not (e.g., &quot;printing,
                social media setup, additional revision rounds — charged at AED 300/round&quot;).
                UAE clients appreciate clarity upfront; it avoids awkward scope conversations later.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">5. Payment Terms</h3>
              <p className="text-gray-600 text-sm">
                State your standard payment terms on the rate card so they&apos;re visible before any
                proposal. Typical UAE freelancer terms: &quot;50% deposit required to commence work.
                Balance due on delivery. Payment via UAE bank transfer, Wise, or SWIFT.&quot; Having
                this on your rate card normalizes the deposit requirement before you get into
                project-specific negotiations.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">6. Availability & Lead Time</h3>
              <p className="text-gray-600 text-sm">
                Include current availability (e.g., &quot;Available from [month]. Next availability
                for new projects: [X] weeks&quot;) and standard project lead time. Scarcity
                signals are legitimate — UAE clients who know you&apos;re booking in advance are
                more likely to commit quickly and less likely to negotiate on price.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Card Pricing Strategies</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Strategy</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">What it is</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { strategy: "Starting from (minimum price)", what: "List a \"from\" price rather than an exact price — \"Brand Identity Package from AED 7,500\"", best: "When project scope varies significantly; prevents sticker shock while anchoring value" },
                  { strategy: "Tiered packages (Good / Better / Best)", what: "Three price tiers for the same service, with more included at higher tiers", best: "Content creation, social media, SEO, copywriting — services where scope can be easily tiered" },
                  { strategy: "Day rate + minimum days", what: "State a day rate AND a minimum engagement (e.g., \"AED 2,500/day, 3-day minimum\")", best: "Consulting, development, strategy work — prevents being hired for 2-hour jobs at your day rate" },
                  { strategy: "Flat project fees", what: "Fixed price per defined deliverable", best: "Logo design, website builds, specific audits — well-defined scope with clear output" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-800">{row.strategy}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.what}</td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Share Your Rate Card in the UAE</h2>
          <ul className="space-y-2 mb-10 text-gray-700">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>Before the first call, when the client asks about pricing</strong> — Send your rate card immediately. It qualifies the client before you spend 45 minutes on a call with someone whose budget is a tenth of your minimum.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>After a networking event or LinkedIn connection</strong> — Following up with &quot;great to connect — here&apos;s what I do and what it costs&quot; removes ambiguity and respects both parties&apos; time.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>In your email footer or website</strong> — Some freelancers add &quot;Download my rate card&quot; as a link in their email signature or website. This pre-qualifies inbound enquiries significantly.</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> <strong>When a referral sends you a new contact</strong> — Ask your referrer to share your rate card when they make the intro. It primes the new contact before they reach out, shortening the discovery process.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common UAE Rate Card Mistakes</h2>
          <ul className="space-y-2 mb-10 text-gray-700text-sm">
            <li className="flex gap-2 text-gray-700"><span className="text-red-400 font-bold">✗</span> <strong>Listing too many services</strong> — a rate card with 12 services says &quot;I&apos;ll do anything for anyone.&quot; Keep it to your core 3–6 most profitable services.</li>
            <li className="flex gap-2 text-gray-700"><span className="text-red-400 font-bold">✗</span> <strong>Using USD pricing for UAE clients</strong> — AED pricing is cleaner, locally relevant, and avoids exchange rate confusion. Convert to USD only when invoicing international clients.</li>
            <li className="flex gap-2 text-gray-700"><span className="text-red-400 font-bold">✗</span> <strong>Underpricing to look accessible</strong> — A rate card with prices far below market rates signals inexperience or lack of confidence. UAE clients — especially corporate ones — correlate price with quality.</li>
            <li className="flex gap-2 text-gray-700"><span className="text-red-400 font-bold">✗</span> <strong>Never updating it</strong> — Your rate card should be reviewed and updated every 6 months. Prices that haven&apos;t changed in 3 years are either too high (you haven&apos;t grown) or too low (inflation has eroded your value).</li>
          </ul>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Rate Card & Proposal Templates for UAE Freelancers
            </h2>
            <p className="text-gray-300 mb-6">
              SoloKit includes rate card templates, proposal frameworks, and pricing SOPs designed
              for UAE freelancers who want to communicate their value clearly.
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
                { href: "/blog/how-to-price-freelance-services-uae", label: "How to Price Your Freelance Services in the UAE" },
                { href: "/blog/how-to-set-freelance-prices-uae", label: "How to Set Your Freelance Prices in the UAE" },
                { href: "/blog/how-to-negotiate-freelance-rates-uae", label: "How to Negotiate Rates Without Losing the Client" },
                { href: "/blog/freelance-proposal-template-uae", label: "Freelance Proposal Template UAE (Copy-Paste)" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-emerald-700 hover:text-emerald-900 text-sm">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        
      </main>
      <Footer />
    </>
  );
}
