import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "SoloKit for Kuwait Freelancers — Freelance Tools & Guides for KWD",
  description:
    "Freelance business tools and guides for Kuwait. Rates in KWD, Kuwait Vision 2035, KPC projects, and business systems for Kuwait consultants.",
  alternates: { canonical: "/for/kuwait" },
  openGraph: {
    title: "SoloKit for Kuwait Freelancers — Freelance Tools & Guides for KWD",
    description:
      "Notion templates, AI prompts, and SOPs built for Kuwait freelancers. KWD pricing, KPC projects, and Vision 2035 freelance context.",
    type: "website",
    url: "/for/kuwait",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoloKit for Kuwait Freelancers — Freelance Tools & Guides for KWD",
    description:
      "Notion templates, AI prompts, and SOPs built for Kuwait freelancers. KWD pricing, KPC projects, and Vision 2035 freelance context.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SoloKit for Kuwait Freelancers",
  description:
    "Freelance business tools and guides for Kuwait. Rates in KWD, Kuwait Vision 2035, KPC projects, and business systems for Kuwait consultants.",
  url: `${siteUrl}/for/kuwait`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
};

const products = [
  {
    slug: "freelancer-client-crm",
    emoji: "📋",
    name: "Freelancer Client CRM",
    price: "KWD 18",
    why:
      "Track every Kuwaiti client, project, and invoice in one Notion workspace. Pipeline tracking, milestone management, and an invoice log that shows exactly who owes what — in seconds.",
  },
  {
    slug: "solopreneur-os",
    emoji: "🚀",
    name: "Solopreneur OS",
    price: "KWD 26",
    why:
      "Revenue dashboard, 90-day goal planner, content calendar, and weekly review system. Run your Kuwait consulting business like a real operation and hit your Vision 2035 income targets.",
  },
  {
    slug: "ai-prompt-pack-pro",
    emoji: "🤖",
    name: "AI Prompt Pack Pro",
    price: "KWD 11",
    why:
      "200 prompts for proposals, client emails, scope change replies, LinkedIn content, and service descriptions. Stop writing from scratch — generate polished client-facing copy in minutes.",
  },
  {
    slug: "sop-starter-pack",
    emoji: "📝",
    name: "SOP Starter Pack",
    price: "KWD 18",
    why:
      "Documented processes for client onboarding, project delivery, invoicing, and closeout. Consistent quality on every engagement — whether you're working with KPC subsidiaries or NBK teams.",
  },
];

const painPoints = [
  "Tracking clients across WhatsApp, sticky notes, and spreadsheets",
  "Writing proposals and emails from scratch for every project",
  "No system for onboarding new clients consistently",
  "Losing track of invoices and who still owes payment",
  "Starting every project from zero with no reusable processes",
];

const relatedGuides = [
  { slug: "freelance-rates-kuwait", title: "Freelance Rates in Kuwait: What to Charge in KWD", time: "8 min" },
  { slug: "freelance-visa-kuwait", title: "How to Work with Kuwaiti Clients Legally", time: "7 min" },
];

export default function KuwaitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">For Kuwait Freelancers & Consultants</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Freelancing in Kuwait: The World&apos;s Highest-Value Currency for GCC Consultants
            </h1>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-xl">
              KWD is worth more than any other currency. Senior consultants earn KWD 1,500–3,500/day.
              Here&apos;s how to work with Kuwaiti clients legally — and the tools to run your practice professionally.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#products" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                Browse all products →
              </Link>
              <Link href="/free" className="border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:border-white/40 transition-colors text-sm">
                10 free AI prompts
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-50 border-y border-gray-100 py-12 mt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Kuwait freelance market at a glance
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { stat: "KWD 3.25 = 1 USD", label: "World's highest-value currency" },
                { stat: "KWD 1,000–3,500/day", label: "Senior consulting rate" },
                { stat: "0% Personal Tax", label: "No income tax in Kuwait" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                  <p className="text-xl font-bold text-gray-900 mb-1">{item.stat}</p>
                  <p className="text-xs text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Why Kuwait is a premium market for GCC consultants
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: "🛢️",
                  title: "Kuwait Petroleum Corporation & KPC subsidiaries",
                  body: "KPC and its subsidiaries — including Kuwait Oil Company, KIPIC, and Petrochemical Industries — are constant sources of engineering, management consulting, and digital transformation projects at high KWD day rates.",
                },
                {
                  emoji: "💼",
                  title: "Kuwait Investment Authority — world's 4th largest SWF",
                  body: "The KIA manages over $800bn in assets. Its investment activity, portfolio management, and reporting requirements drive ongoing demand for finance, legal, strategy, and technology consultants.",
                },
                {
                  emoji: "🏦",
                  title: "National Bank of Kuwait & Islamic finance",
                  body: "NBK and Kuwait Finance House are GCC banking pillars. The Islamic finance sector — takaful, sukuk, and Sharia-compliant advisory — is a fast-growing niche for specialized consultants and legal advisors.",
                },
                {
                  emoji: "🏗️",
                  title: "New Kuwait Vision 2035 & KIPIC Petro City",
                  body: "Vision 2035 is accelerating government digitalization, smart city projects, and infrastructure upgrades. The Al-Zour KIPIC Petro City megaproject alone requires thousands of specialist contractors and consultants across its multi-year timeline.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <span className="text-2xl mb-3 block">{item.emoji}</span>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to work with Kuwaiti clients */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How to Work with Kuwaiti Clients Legally
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                emoji: "🇦🇪",
                title: "UAE-base strategy",
                body: "Establish an IFZA or RAKEZ freelance licence in the UAE, then engage Kuwaiti clients cross-border. Business visit visas allow you to attend meetings in Kuwait for project work.",
              },
              {
                emoji: "💻",
                title: "Remote consulting",
                body: "Digital, advisory, and knowledge-based work can be delivered 100% remotely. Finance, strategy, IT, legal, and marketing consultants regularly serve Kuwaiti clients without a local presence.",
              },
              {
                emoji: "✈️",
                title: "Gulf Shuttle for short engagements",
                body: "Short project engagements — workshops, audits, assessments — can be delivered on business visit visas with regular travel between the UAE and Kuwait City.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pain points */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Sound Familiar?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {painPoints.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-orange-400 shrink-0 mt-0.5">⚠</span>
                <p className="text-sm text-gray-600">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What SoloKit Gives Kuwait Consultants
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Prices shown in KWD (1 AED ≈ 0.103 KWD). All products are delivered instantly as Notion templates and downloadable PDFs.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl shrink-0">{product.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-sm font-semibold text-emerald-600">{product.price}</p>
                  </div>
                  {i === 0 && (
                    <span className="ml-auto text-xs font-semibold bg-emerald-500 text-white px-2 py-1 rounded-full shrink-0">
                      Start here
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{product.why}</p>
                <p className="mt-4 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                  View product →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-14">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xl font-medium leading-relaxed text-gray-200 mb-6">
              &ldquo;I duplicated the CRM on Monday and had my entire client pipeline organized by Wednesday.
              Saves me hours every week that I used to waste on WhatsApp and spreadsheets.&rdquo;
            </p>
            <p className="text-sm text-gray-400">
              — Fatima A., Management Consultant, Kuwait City
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-start gap-5 border border-emerald-200 rounded-2xl p-6 bg-emerald-50">
            <span className="text-3xl shrink-0">🛡️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">30-Day Money-Back Guarantee</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                If any SoloKit product isn&apos;t right for you, email us within 30 days for a full refund.
                No questions asked, no forms to fill, no hassle. One-time payment — no subscriptions.
              </p>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Key Resources for Kuwait Consultants
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group flex items-start justify-between gap-3 border border-gray-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 leading-snug">
                  {guide.title}
                </p>
                <span className="text-xs text-gray-400 shrink-0 whitespace-nowrap mt-0.5">{guide.time}</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            More Kuwait-specific guides coming soon —{" "}
            <Link href="/blog" className="underline underline-offset-2 hover:text-gray-700 transition-colors">
              browse the full blog
            </Link>{" "}
            for the latest freelance resources across the GCC.
          </p>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h2 className="text-2xl font-bold text-white mb-3">
              Work with Kuwaiti Clients the Right Way
            </h2>
            <p className="text-gray-300 text-sm mb-8">
              One-time payment. Instant delivery. 30-day guarantee. Available across the entire GCC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/freelance-visa-kuwait"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                How to work with Kuwaiti clients →
              </Link>
              <Link
                href="/#products"
                className="border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:border-white/40 transition-colors text-sm"
              >
                Browse all products
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
