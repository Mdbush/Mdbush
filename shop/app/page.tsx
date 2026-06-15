import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdbush.vercel.app";

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            Digital Tools for Solopreneurs & Freelancers
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
            Stop building from scratch.{" "}
            <span className="text-gray-500">Plug in and go.</span>
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Ready-to-use Notion templates, AI prompt packs, and SOP systems built for
            freelancers and solo business owners who want to move fast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="bg-gray-900 text-white font-semibold px-7 py-3 rounded-xl hover:bg-gray-700 transition-colors text-sm"
            >
              Browse Products →
            </a>
            <span className="text-sm text-gray-400">Instant download · 30-day guarantee</span>
          </div>
        </section>

        {/* Social proof bar */}
        <section className="border-y border-gray-100 bg-gray-50 py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-gray-500">
            <span>⭐ 4.9/5 average rating</span>
            <span>📦 500+ happy customers</span>
            <span>⚡ Instant delivery</span>
            <span>🔒 Secure checkout via Lemon Squeezy</span>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">All Products</h2>
            <p className="mt-2 text-gray-500 text-sm">Built for freelancers, tested on real businesses.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Why us */}
        <section className="bg-gray-50 border-t border-gray-100 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Why buy here?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Instant delivery",
                  desc: "Download your product immediately after purchase. No waiting.",
                },
                {
                  icon: "🎯",
                  title: "Built for a specific person",
                  desc: "Every product is made for one job. No bloat, no filler.",
                },
                {
                  icon: "🛡️",
                  title: "30-day guarantee",
                  desc: "Not happy? Email mohamed.bushara@woccars.com within 30 days and we'll refund you. No questions.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">FAQ</h2>
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
      </main>

      <Footer />
    </>
  );
}
