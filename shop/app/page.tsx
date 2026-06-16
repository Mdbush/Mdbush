import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import EmailCapture from "@/components/EmailCapture";
import { products } from "@/lib/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "SoloKit",
  url: siteUrl,
  description: "Ready-to-use Notion templates, AI prompt packs, and SOPs for freelancers and solopreneurs.",
  currenciesAccepted: "AED",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SoloKit Digital Products",
    itemListElement: products.map((p) => ({
      "@type": "Product",
      name: p.name,
      description: p.tagline,
      url: `${siteUrl}/products/${p.slug}`,
      offers: {
        "@type": "Offer",
        price: (p.price / 100).toFixed(0),
        priceCurrency: "AED",
        availability: "https://schema.org/InStock",
      },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What format are the products in?",
      acceptedAnswer: { "@type": "Answer", text: "Notion templates are delivered as a Notion page link you can duplicate instantly. AI prompt packs and SOPs come as a downloadable PDF and Notion page." },
    },
    {
      "@type": "Question",
      name: "Do I need a Notion account?",
      acceptedAnswer: { "@type": "Answer", text: "For Notion templates, yes — Notion is free to use. AI prompt packs and SOP documents also come in Google Docs format." },
    },
    {
      "@type": "Question",
      name: "How do I get the product after buying?",
      acceptedAnswer: { "@type": "Answer", text: "You'll receive an email with a download link immediately after checkout. You can also access your purchase anytime from the Lemon Squeezy receipt." },
    },
    {
      "@type": "Question",
      name: "What if I'm not satisfied?",
      acceptedAnswer: { "@type": "Answer", text: "Email us within 30 days of purchase and we'll give you a full refund. No questions asked." },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main className="flex-1">

        {/* Hero — dark, punchy, direct */}
        <section className="bg-gray-950 text-white py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              🇦🇪 For UAE &amp; GCC Freelancers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Stop running your business from WhatsApp.
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Ready-to-use Notion templates, AI prompts, and SOPs for freelancers across the UAE, Saudi Arabia, and the wider GCC. Save 10+ hours a week, starting today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href="#products"
                className="bg-white text-gray-900 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm w-full sm:w-auto"
              >
                Browse Products →
              </a>
              <a
                href="/free"
                className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:border-white/60 hover:bg-white/5 transition-colors text-sm w-full sm:w-auto"
              >
                Get 10 Free Prompts
              </a>
            </div>
            <p className="text-sm text-gray-400">
              ★★★★★ 4.9/5 · 500+ customers · Instant download · 30-day guarantee
            </p>
          </div>
        </section>

        {/* Pain points strip */}
        <section className="bg-white py-12 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-8">
              Sound familiar?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  emoji: "😩",
                  pain: "Tracking clients across WhatsApp, sticky notes, and spreadsheets",
                  fix: "→ Freelancer CRM fixes this",
                },
                {
                  emoji: "⏰",
                  pain: "Writing proposals and emails from scratch every single time",
                  fix: "→ AI Prompt Pack fixes this",
                },
                {
                  emoji: "🔁",
                  pain: "No systems — every project starts from square one",
                  fix: "→ SOP Pack fixes this",
                },
              ].map((item) => (
                <div
                  key={item.pain}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-3"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.pain}</p>
                  <p className="text-xs font-semibold text-green-600">{item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Everything you need to run a professional solo business
              </h2>
              <p className="mt-2 text-gray-500 text-sm">
                Built for freelancers. Tested on real businesses. Used across the UAE &amp; GCC.
              </p>
              <a
                href="/start"
                className="inline-block mt-3 text-sm text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors"
              >
                Not sure which one? Take 30 seconds to find your fit →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Browse by profession */}
        <section className="py-10 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-5">
              Tools for your type of work
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: "Designers", href: "/for/designers" },
                { label: "Developers", href: "/for/developers" },
                { label: "Marketers", href: "/for/marketers" },
                { label: "Consultants", href: "/for/consultants" },
                { label: "Coaches", href: "/for/coaches" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 px-5 py-2 rounded-full transition-colors"
                >
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Stack callout */}
        <section className="bg-gray-950 text-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Complete Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Get all 4 products — save AED 288
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm max-w-xl mx-auto">
              The Freelancer CRM, Solopreneur OS, AI Prompt Pack, and SOP Pack work better together.
              At launch prices, you get everything for <strong className="text-white">AED 708</strong> — down from AED 996 at full price.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-sm">
              {[
                { emoji: "📋", name: "Client CRM", price: "AED 175" },
                { emoji: "🚀", name: "Solopreneur OS", price: "AED 249" },
                { emoji: "🤖", name: "AI Prompts", price: "AED 109" },
                { emoji: "📝", name: "SOP Pack", price: "AED 175" },
              ].map((p) => (
                <div key={p.name} className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl mb-1">{p.emoji}</div>
                  <p className="text-xs text-gray-300">{p.name}</p>
                  <p className="font-bold text-white">{p.price}</p>
                </div>
              ))}
            </div>
            <a
              href="#products"
              className="inline-block bg-white text-gray-900 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Buy each product below →
            </a>
            <p className="text-xs text-gray-500 mt-3">All products include lifetime access + 30-day guarantee</p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gray-50 py-14 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Buy once",
                  desc: "One-time payment. No subscription. No upsells.",
                },
                {
                  step: "2",
                  title: "Download instantly",
                  desc: "You get the product the second you pay. Direct to your inbox.",
                },
                {
                  step: "3",
                  title: "Plug in and go",
                  desc: "Duplicate to Notion or open in Google Docs. Start using in minutes.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Step {item.step}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
              What freelancers across the UAE &amp; GCC say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  quote:
                    "Duplicated the CRM on Monday, had my entire pipeline organized by Wednesday. Saves me hours every week.",
                  name: "Sarah K.",
                  role: "Freelance UX Designer, Dubai",
                },
                {
                  quote:
                    "The SOP pack alone paid for itself in the first week. My onboarding went from a mess of WhatsApp messages to a clean system.",
                  name: "Omar R.",
                  role: "Marketing Consultant, Abu Dhabi",
                },
                {
                  quote:
                    "The AI prompt pack is genuinely different. Real prompts that produce real output — not generic stuff.",
                  name: "Layla M.",
                  role: "Copywriter, Dubai",
                },
                {
                  quote:
                    "Bought all four products in one go. The CRM and Solopreneur OS together basically replaced three separate tools I was paying monthly for.",
                  name: "Khalid T.",
                  role: "Digital Marketing Consultant, Dubai",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-7 flex flex-col gap-4"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-base">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="bg-gray-950 text-white py-14 px-4 sm:px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold mb-3">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Not satisfied? Email us within 30 days for a full refund. No questions, no drama. We&apos;re confident you&apos;ll love it.
            </p>
            <p className="text-xs text-gray-500">
              Secure checkout via Lemon Squeezy. Your payment info is never stored.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
            <Link href="/faq" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
              All questions →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "What format are the products in?",
                a: "Notion templates are delivered as a Notion page link you can duplicate instantly. AI prompt packs and SOPs come as a downloadable PDF and Notion page.",
              },
              {
                q: "Do I need a Notion account?",
                a: "For Notion templates, yes — Notion is free to use. AI prompt packs and SOP documents also come in Google Docs format.",
              },
              {
                q: "How do I get the product after buying?",
                a: "You'll receive an email with a download link immediately after checkout. You can also access your purchase anytime from the Lemon Squeezy receipt.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "Email us within 30 days of purchase and we'll give you a full refund. No questions asked.",
              },
            ].map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog teaser */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Free guides for UAE &amp; GCC freelancers</h2>
              <p className="text-sm text-gray-500 mt-1">350 practical articles — no fluff</p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors shrink-0">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                slug: "freelance-visa-uae",
                title: "How to Get a Freelance Visa in the UAE",
                category: "Visa & Legal",
                time: "8 min read",
              },
              {
                slug: "freelance-rate-calculator-uae",
                title: "Freelance Rate Calculator: How Much Should You Charge?",
                category: "Pricing",
                time: "8 min read",
              },
              {
                slug: "freelance-tax-uae",
                title: "Do Freelancers Pay Tax in the UAE?",
                category: "Tax & Finance",
                time: "8 min read",
              },
              {
                slug: "get-freelance-clients-uae",
                title: "How to Get Freelance Clients in the UAE",
                category: "Client Acquisition",
                time: "7 min read",
              },
              {
                slug: "best-ai-tools-uae-freelancers",
                title: "Best AI Tools for UAE Freelancers in 2026",
                category: "AI Tools",
                time: "5 min read",
              },
              {
                slug: "freelance-contract-template-uae",
                title: "Freelance Contract: 9 Clauses You Must Include",
                category: "Legal",
                time: "9 min read",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-2">
                  {post.category}
                </span>
                <p className="text-sm font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-snug mb-2">
                  {post.title}
                </p>
                <p className="text-xs text-gray-400">{post.time}</p>
              </Link>
            ))}
          </div>
        </section>

        <EmailCapture />
      </main>

      <Footer />
    </>
  );
}
