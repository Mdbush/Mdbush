import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "SoloKit for Saudi Arabia Freelancers — Freelance Tools & Guides for KSA",
  description:
    "Freelance business tools and guides for Saudi Arabia. Rates in SAR, ZATCA VAT, Vision 2030 freelance opportunities, and business systems for Saudi freelancers.",
  alternates: { canonical: "/for/saudi-arabia" },
  openGraph: {
    title: "SoloKit for Saudi Arabia Freelancers — Freelance Tools & Guides for KSA",
    description:
      "Notion templates, AI prompts, and SOPs built for KSA freelancers. SAR pricing, ZATCA VAT, and Vision 2030 freelance context.",
    type: "website",
    url: "/for/saudi-arabia",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoloKit for Saudi Arabia Freelancers — Freelance Tools & Guides for KSA",
    description:
      "Notion templates, AI prompts, and SOPs built for KSA freelancers. SAR pricing, ZATCA VAT, and Vision 2030 freelance context.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SoloKit for Saudi Arabia Freelancers",
  description:
    "Freelance business tools and guides for Saudi Arabia. Rates in SAR, ZATCA VAT, Vision 2030 freelance opportunities, and business systems for Saudi freelancers.",
  url: `${siteUrl}/for/saudi-arabia`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
};

const products = [
  {
    slug: "freelancer-client-crm",
    emoji: "📋",
    name: "Freelancer Client CRM",
    price: "SAR 180",
    why:
      "Track every Saudi client, project, and invoice in one Notion workspace. Pipeline tracking, milestone management, and an invoice log that shows exactly who owes what — in seconds.",
  },
  {
    slug: "solopreneur-os",
    emoji: "🚀",
    name: "Solopreneur OS",
    price: "SAR 255",
    why:
      "Revenue dashboard, 90-day goal planner, content calendar, and weekly review system. Run your KSA freelance business like a real business and hit your Vision 2030 income targets.",
  },
  {
    slug: "ai-prompt-pack-pro",
    emoji: "🤖",
    name: "AI Prompt Pack Pro",
    price: "SAR 112",
    why:
      "200 prompts for proposals, client emails, scope change replies, LinkedIn content, and service descriptions. Stop writing from scratch — generate polished client-facing copy in minutes.",
  },
  {
    slug: "sop-starter-pack",
    emoji: "📝",
    name: "SOP Starter Pack",
    price: "SAR 180",
    why:
      "Documented processes for client onboarding, project delivery, invoicing, and closeout. Consistent quality on every engagement — whether you're working with Riyadh corporates or international clients.",
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
  { slug: "freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?", time: "8 min" },
  { slug: "freelance-proposal-tips-uae", title: "How to Write a Proposal That Wins Clients", time: "7 min" },
  { slug: "freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include", time: "9 min" },
  { slug: "client-onboarding-freelance-uae", title: "Client Onboarding Process for Freelancers", time: "6 min" },
  { slug: "how-to-get-clients-linkedin-uae", title: "How to Get Clients on LinkedIn in the Gulf", time: "7 min" },
  { slug: "ai-prompts-for-freelancers", title: "How to Use AI to Do More Freelance Work in Less Time", time: "7 min" },
];

export default function SaudiArabiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              For Saudi Arabia (KSA) Freelancers
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
              Built for Saudi Freelancers
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Saudi Arabia&apos;s freelance economy is growing fast — Vision 2030, Al-Qudurat, Musaned, and a surge in
              high-SAR day rates have made independent work a real career path in the Kingdom.
              SoloKit gives you the Notion templates, AI prompts, and SOPs to run your KSA freelance business like a professional operation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#products"
                className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors text-sm"
              >
                Browse all products →
              </Link>
              <Link
                href="/free"
                className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-gray-400 transition-colors text-sm"
              >
                10 free AI prompts
              </Link>
            </div>
          </div>
        </section>

        {/* Why Saudi Arabia's freelance market is booming */}
        <section className="bg-gray-50 border-y border-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
              Why now is the time to go freelance in Saudi Arabia
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: "🏗️",
                  title: "Vision 2030 is creating massive demand",
                  body: "NEOM, Red Sea Project, Diriyah, and hundreds of giga-projects mean Saudi companies are actively hiring skilled freelancers — designers, engineers, consultants, and digital specialists — at premium SAR day rates.",
                },
                {
                  emoji: "📋",
                  title: "Al-Qudurat & the freelance platform ecosystem",
                  body: "Saudi Arabia now has government-backed freelance platforms and a formal freelance permit system. It has never been easier to operate legally as an independent professional in the Kingdom.",
                },
                {
                  emoji: "💰",
                  title: "ZATCA VAT: 15% you need to understand",
                  body: "Saudi Arabia's VAT rate is 15% — higher than the UAE's 5%. If your annual revenues exceed the registration threshold (SAR 375,000), you must register with ZATCA, file returns, and issue VAT-compliant invoices.",
                },
                {
                  emoji: "📈",
                  title: "High SAR day rates — but you need professional systems",
                  body: "Senior Saudi freelancers in tech, finance, and strategy command SAR 2,000–8,000 per day. To win clients at that level you need professional proposals, airtight contracts, and consistent onboarding — not WhatsApp threads.",
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
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
            Sound familiar?
          </p>
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
          <div className="mb-10">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">What SoloKit gives Saudi freelancers</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">
              Four tools. One system. Everything a KSA freelancer needs.
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Prices shown in SAR (1 AED ≈ 1.02 SAR). All products are delivered instantly as Notion templates and downloadable PDFs.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl shrink-0">{product.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-sm font-semibold text-gray-500">{product.price}</p>
                  </div>
                  {i === 0 && (
                    <span className="ml-auto text-xs font-semibold bg-gray-900 text-white px-2 py-1 rounded-full shrink-0">
                      Start here
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{product.why}</p>
                <p className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                  View product →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-gray-950 text-white py-14">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xl font-medium leading-relaxed text-gray-200 mb-6">
              &ldquo;I duplicated the CRM on Monday and had my entire client pipeline organized by Wednesday.
              Saves me hours every week that I used to waste on WhatsApp and spreadsheets.&rdquo;
            </p>
            <p className="text-sm text-gray-500">
              — Khalid T., Digital Marketing Consultant, Riyadh
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-start gap-5 border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <span className="text-3xl shrink-0">🛡️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">30-Day Money-Back Guarantee</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                If any SoloKit product isn&apos;t right for you, email us within 30 days for a full refund.
                No questions asked, no forms to fill, no hassle. One-time payment — no subscriptions.
              </p>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Free reading</p>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Key resources for Saudi freelancers
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group flex items-start justify-between gap-3 border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 leading-snug">
                  {guide.title}
                </p>
                <span className="text-xs text-gray-400 shrink-0 whitespace-nowrap mt-0.5">{guide.time}</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            More Saudi Arabia-specific guides coming soon —{" "}
            <Link href="/blog" className="underline underline-offset-2 hover:text-gray-700 transition-colors">
              browse the full blog
            </Link>{" "}
            for the latest freelance resources across the GCC.
          </p>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-50 border-t border-gray-100 py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to run a more professional freelance business in Saudi Arabia?
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              One-time payment. Instant delivery. 30-day guarantee. Available across the entire GCC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#products"
                className="bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-700 transition-colors text-sm"
              >
                Browse all products →
              </Link>
              <Link
                href="/free"
                className="border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-xl hover:border-gray-400 transition-colors text-sm"
              >
                Try 10 free prompts first
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
