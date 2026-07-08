import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Proposal Pack — Win More Freelance Clients in the UAE",
  description:
    "Proposal templates, a discovery-call script, a pricing one-pager, pitch emails, and a follow-up sequence that turn enquiries into signed clients. AED 129, instant download.",
  robots: { index: false },
};

const product = getProduct("client-proposal-pack")!;

const features = [
  { emoji: "📄", title: "Winning Proposal Template", desc: "The problem → outcome → price structure that sells the result, not the hours." },
  { emoji: "🎙️", title: "Discovery-Call Script", desc: "Qualifying questions that surface budget and decision-makers before you quote." },
  { emoji: "💰", title: "Pricing One-Pager", desc: "Three-tier packages that anchor high and grow your average project size." },
  { emoji: "✉️", title: "Pitch Emails", desc: "Cold and warm templates that lead with a specific insight, not your CV." },
  { emoji: "🔁", title: "Follow-Up Sequence", desc: "A 3-email sequence that closes the ~60% of deals that close after the send." },
];

const testimonials = [
  { quote: "Rewrote my proposal with this template and closed a AED 45K retainer the same week.", name: "Layla H.", role: "Growth Consultant, Dubai" },
  { quote: "The follow-up sequence is gold. Two 'dead' leads replied and one signed.", name: "Yousef K.", role: "Web Developer, Abu Dhabi" },
  { quote: "The three-tier pricing one-pager doubled my average project size. Clients pick the middle option every time.", name: "Mira S.", role: "Brand Strategist, Sharjah" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <Link href="/" className="font-bold text-gray-900">SoloKit</Link>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="text-green-500">🔒</span> Secure · Instant download · 30-day guarantee
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-16 rounded-2xl mt-8 mb-6 text-center">
          <div className="hero-glow animate-float w-72 h-72 bg-emerald-500/25 -top-20 -left-10" />
          <div className="hero-glow animate-float w-64 h-64 bg-teal-400/20 -bottom-16 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 bg-dot-grid" />
          <div className="relative">
          <div className="text-6xl mb-6">🎯</div>
          <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            New Release
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-5">
            Send proposals that <span className="text-gradient">close themselves</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            A proposal template, discovery-call script, pricing one-pager, pitch emails, and a
            follow-up sequence — the exact system that turns enquiries into signed UAE clients.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-baseline gap-3 justify-center">
              <span className="text-4xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            {product.originalPrice && (
              <p className="text-sm text-emerald-400 font-medium">
                Launch price — save {formatPrice(product.originalPrice - product.price)}
              </p>
            )}
            <div className="mt-2 w-full max-w-xs">
              <CheckoutButton productSlug="client-proposal-pack" price={product.price} />
            </div>
            <p className="text-xs text-gray-400">Editable Google Docs + Notion · 30-day money-back</p>
          </div>
          </div>
        </section>

        {/* Social proof strip */}
        <div className="border-y border-gray-100 bg-gray-50 py-3">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-gray-500">
            <span>⭐ 4.9/5 rating</span>
            <span>📦 Instant delivery</span>
            <span>🔒 Secure checkout</span>
            <span>🛡️ 30-day guarantee</span>
          </div>
        </div>

        {/* Pain */}
        <section className="py-14">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Sound familiar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "You send a quote and never hear back",
              "You quote a flat hourly rate with no options",
              "Proposals take you two hours to write from scratch",
              "You feel awkward following up, so you don't",
              "Clients haggle because you led with price, not outcome",
              "Discovery calls wander and never qualify the budget",
            ].map((pain) => (
              <div key={pain} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                {pain}
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="py-14 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The whole pitch-to-close system, done for you
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Fill in the brackets and send. Every template is built to sell the outcome and make the
            yes easy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="border border-gray-200 rounded-2xl p-5 hover:border-emerald-400 transition-colors">
                <div className="text-2xl mb-3">{f.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What customers say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Frequently asked questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: "What's in the pack?", a: "A proposal template, a discovery-call script, a pricing & packages one-pager, cold and warm pitch emails, and a 3-email follow-up sequence." },
              { q: "What format is it in?", a: "Editable Google Docs plus a Notion version. Fill in the placeholders with your details and send." },
              { q: "Will it work for my kind of work?", a: "Yes — the frameworks are service-agnostic. Designers, developers, marketers, consultants, and coaches all use the same problem → outcome → price structure." },
              { q: "What if it doesn't work for me?", a: "30-day money-back guarantee. If it's not useful, email us for a full refund — no questions asked." },
            ].map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-2xl p-5">
                <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                <p className="text-sm text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-14 border-t border-gray-100">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-8 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Win the next client
            </h2>
            <p className="text-gray-300 mb-6 max-w-sm mx-auto text-sm">
              One-time payment. Instant download. 30-day money-back guarantee.
            </p>
            <div className="flex items-baseline gap-3 justify-center mb-4">
              <span className="text-4xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            <div className="max-w-xs mx-auto">
              <CheckoutButton productSlug="client-proposal-pack" price={product.price} />
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Questions? <a href="mailto:hello@solokit.cloud" className="underline">Email us</a> — we respond within 24 hours.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
