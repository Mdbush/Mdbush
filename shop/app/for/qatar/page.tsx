import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "SoloKit for Qatar Freelancers — Freelance Tools & Guides for QAR",
  description:
    "Freelance business tools and guides for Qatar. Rates in QAR, QFC financial hub, QNV 2030 digitalization, and business systems for Qatar freelancers.",
  alternates: { canonical: "/for/qatar" },
  openGraph: {
    title: "SoloKit for Qatar Freelancers — Freelance Tools & Guides for QAR",
    description:
      "Notion templates, AI prompts, and SOPs built for Qatar freelancers. QAR pricing, QFC hub, and post-FIFA legacy freelance context.",
    type: "website",
    url: "/for/qatar",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoloKit for Qatar Freelancers — Freelance Tools & Guides for QAR",
    description:
      "Notion templates, AI prompts, and SOPs built for Qatar freelancers. QAR pricing, QFC hub, and post-FIFA legacy freelance context.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SoloKit for Qatar Freelancers",
  description:
    "Freelance business tools and guides for Qatar. Rates in QAR, QFC financial hub, QNV 2030 digitalization, and business systems for Qatar freelancers.",
  url: `${siteUrl}/for/qatar`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
};

const products = [
  {
    slug: "freelancer-client-crm",
    emoji: "📋",
    name: "Freelancer Client CRM",
    price: "QAR 66",
    why:
      "Track every Qatari client, project, and invoice in one Notion workspace. Pipeline tracking, milestone management, and an invoice log that shows exactly who owes what — in seconds.",
  },
  {
    slug: "solopreneur-os",
    emoji: "🚀",
    name: "Solopreneur OS",
    price: "QAR 94",
    why:
      "Revenue dashboard, 90-day goal planner, content calendar, and weekly review system. Run your Qatar freelance business like a real operation and hit your QNV 2030 income targets.",
  },
  {
    slug: "ai-prompt-pack-pro",
    emoji: "🤖",
    name: "AI Prompt Pack Pro",
    price: "QAR 41",
    why:
      "200 prompts for proposals, client emails, scope change replies, LinkedIn content, and service descriptions. Stop writing from scratch — generate polished client-facing copy in minutes.",
  },
  {
    slug: "sop-starter-pack",
    emoji: "📝",
    name: "SOP Starter Pack",
    price: "QAR 66",
    why:
      "Documented processes for client onboarding, project delivery, invoicing, and closeout. Consistent quality on every engagement — whether you're working with QFC firms or QatarEnergy contractors.",
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
  { slug: "freelance-rates-qatar", title: "Freelance Rates in Qatar: What to Charge in QAR", time: "8 min" },
  { slug: "freelance-visa-qatar", title: "How to Set Up as a Freelancer in Qatar", time: "7 min" },
];

export default function QatarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">For Qatar Freelancers</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Freelancing in Qatar: Build Your Practice in the Gulf&apos;s Richest Economy
            </h1>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-xl">
              Post-FIFA legacy boom. QatarEnergy sector. QFC financial hub. The right tools for QAR-denominated projects.
              SoloKit gives you the Notion templates, AI prompts, and SOPs to run your Qatar freelance business like a professional operation.
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
              Qatar freelance market at a glance
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { stat: "QAR 6–11k/day", label: "Senior consulting rate" },
                { stat: "0% Personal Tax", label: "No income tax in Qatar" },
                { stat: "10% QFC Rate", label: "Qatar Financial Centre corporate rate" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                  <p className="text-xl font-bold text-gray-900 mb-1">{item.stat}</p>
                  <p className="text-xs text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Why now is the time to go freelance in Qatar
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: "🏟️",
                  title: "FIFA World Cup 2022 legacy — still running",
                  body: "The infrastructure built for the World Cup — stadiums, metro lines, hospitality, and tech platforms — requires ongoing maintenance, consulting, and digital expertise. Legacy projects keep hiring freelancers at premium QAR rates.",
                },
                {
                  emoji: "🔋",
                  title: "QatarEnergy North Field LNG expansion",
                  body: "The world's largest LNG expansion project is underway. QatarEnergy and its international partners are actively seeking engineering consultants, project managers, environmental specialists, and digital transformation advisors.",
                },
                {
                  emoji: "🏦",
                  title: "Qatar Financial Centre (QFC)",
                  body: "The QFC is a dedicated financial and business hub with its own legal system, 10% corporate tax rate, and 100% foreign ownership. Finance, legal, consulting, and technology professionals can establish licensed operations directly in Doha.",
                },
                {
                  emoji: "🌆",
                  title: "Lusail City & QNV 2030 digitalization",
                  body: "Qatar National Vision 2030 is driving massive government digitalization and smart city investment. Lusail City — Qatar's largest urban development — is a live testbed for consultants, architects, and tech freelancers. Only 300k Qataris in a 2.8m population means enormous expat professional demand.",
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

        {/* Pain points */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
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
            What SoloKit Gives Qatar Freelancers
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Prices shown in QAR (1 AED ≈ 0.103 QAR). All products are delivered instantly as Notion templates and downloadable PDFs.
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
              — Ahmed R., Strategy Consultant, Doha
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
            Key Resources for Qatar Freelancers
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
            More Qatar-specific guides coming soon —{" "}
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
              Set Up in Qatar the Right Way
            </h2>
            <p className="text-gray-300 text-sm mb-8">
              One-time payment. Instant delivery. 30-day guarantee. Available across the entire GCC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/freelance-visa-qatar"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                How to set up in Qatar →
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
