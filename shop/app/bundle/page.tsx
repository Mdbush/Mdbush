import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete SoloKit Bundle — All 4 Products for AED 708",
  description:
    "Get the Freelancer CRM, Solopreneur OS, AI Prompt Pack, and SOP Starter Pack in one complete toolkit. Everything a UAE freelancer needs to run a professional business — save AED 288.",
  alternates: { canonical: "/bundle" },
  openGraph: {
    title: "Complete SoloKit Bundle — All 4 Products",
    description: "Everything a UAE freelancer needs to run a professional business. Save AED 288.",
    url: "/bundle",
    type: "website",
  },
};

const bundleProducts = [
  {
    slug: "freelancer-client-crm",
    emoji: "📋",
    name: "Freelancer Client CRM",
    price: 17500,
    highlight: "Stop tracking clients in WhatsApp",
    keyFeature: "Client pipeline + invoice log + 10 email templates",
  },
  {
    slug: "solopreneur-os",
    emoji: "🚀",
    name: "Solopreneur OS",
    price: 24900,
    highlight: "Your entire business in one Notion workspace",
    keyFeature: "Revenue dashboard + 90-day planner + content calendar",
  },
  {
    slug: "ai-prompt-pack-pro",
    emoji: "🤖",
    name: "AI Prompt Pack Pro",
    price: 10900,
    highlight: "200 prompts for proposals, emails, and content",
    keyFeature: "Works with Claude, ChatGPT, Gemini — copy and paste",
  },
  {
    slug: "sop-starter-pack",
    emoji: "📝",
    name: "SOP Starter Pack",
    price: 17500,
    highlight: "50 plug-in-play systems for your business",
    keyFeature: "Client onboarding, content workflow, finance, delegation",
  },
];

const totalPrice = bundleProducts.reduce((sum, p) => sum + p.price, 0);
const bundlePrice = 70800;
const savings = totalPrice - bundlePrice;

const timeline = [
  { day: "Day 1", action: "Set up the CRM", result: "All your clients and leads in one place — done in 20 minutes" },
  { day: "Day 2", action: "Duplicate the Solopreneur OS", result: "Revenue tracker running, 90-day goals set" },
  { day: "Day 3", action: "Open the AI Prompt Pack", result: "First proposal written in 5 minutes instead of 45" },
  { day: "Week 2", action: "Implement 3 SOPs", result: "Client onboarding, invoice flow, and content workflow on autopilot" },
  { day: "Month 1", action: "Review your revenue dashboard", result: "First time seeing your numbers clearly — know where to push" },
];

export default function BundlePage() {
  return (
    <>
      <Header />

      <main className="flex-1">

        {/* Dark gradient hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">
              Complete Stack
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Everything you need to run a professional freelance business
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Get all 4 SoloKit products — the CRM, OS, AI prompts, and SOPs — at launch pricing.
              Together they replace 5+ tools you&apos;d otherwise pay monthly for.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-8">
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Bundle price</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-white">{formatPrice(bundlePrice)}</span>
                  <span className="text-xl text-gray-500 line-through">{formatPrice(totalPrice)}</span>
                </div>
              </div>
              <div className="bg-emerald-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shrink-0">
                Save {formatPrice(savings)}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {bundleProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="text-xs text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {p.emoji} {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's in the bundle */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <span className="w-1 h-7 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              What you get
            </h2>
            <p className="text-gray-500 text-sm">4 products · Instant delivery · Lifetime access · 30-day guarantee</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {bundleProducts.map((p) => (
              <div key={p.slug} className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-emerald-400 hover:shadow-sm transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{p.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{formatPrice(p.price)} individually</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-900">{p.highlight}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{p.keyFeature}</p>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-500 transition-colors mt-auto"
                >
                  View details →
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Bundle vs buying separately
            </h3>
            <div className="flex flex-col gap-2 mb-4">
              {bundleProducts.map((p) => (
                <div key={p.slug} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{p.emoji} {p.name}</span>
                  <span className="text-gray-900 font-medium">{formatPrice(p.price)}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3 flex items-center justify-between text-sm">
                <span className="text-gray-500">If bought separately</span>
                <span className="text-gray-500 line-through">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">Bundle price</span>
                <span className="font-bold text-gray-900 text-lg">{formatPrice(bundlePrice)}</span>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
              <span className="text-emerald-700 font-semibold text-sm">Your savings</span>
              <span className="text-emerald-700 font-bold">{formatPrice(savings)}</span>
            </div>
          </div>

          {/* Buy each product CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center mb-12">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-xl font-bold mb-2">Ready to get the full stack?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Add all 4 products to your library. Each is a one-time payment — no subscriptions, no renewal fees.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-6">
              {bundleProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="flex items-center justify-between gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span>{p.emoji}</span>
                    <span className="font-medium">{p.name}</span>
                  </span>
                  <span className="text-emerald-400 font-bold shrink-0">{formatPrice(p.price)}</span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500">All products include lifetime access + 30-day money-back guarantee</p>
          </div>

          {/* Setup timeline */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Your first month with SoloKit
            </h2>
            <div className="flex flex-col gap-4">
              {timeline.map((item) => (
                <div key={item.day} className="flex items-start gap-4 border border-gray-100 rounded-xl p-4 hover:border-emerald-200 transition-colors">
                  <div className="bg-emerald-500 text-white text-xs font-bold rounded-lg px-3 py-1.5 shrink-0 whitespace-nowrap">
                    {item.day}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.action}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center mb-10">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-bold text-emerald-900 mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-sm text-emerald-800 max-w-sm mx-auto">
              Not satisfied with any product? Email us within 30 days for a full refund.
              No forms, no questions, no drama.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Link
              href="/#products"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Browse all products and buy →
            </Link>
            <p className="mt-3 text-xs text-gray-400">
              Questions?{" "}
              <a href="mailto:md.a.bushara@gmail.com" className="underline hover:text-gray-600">
                Email us
              </a>{" "}
              — we respond within 24 hours.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
