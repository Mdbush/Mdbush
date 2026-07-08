import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Contract Kit — Get Paid On Time in the UAE",
  description:
    "Ready-to-use freelance contract templates for UAE freelancers: service agreement, scope of work, retainer, NDA, and a late-payment clause library. AED 149, instant download.",
  robots: { index: false },
};

const product = getProduct("freelance-contract-kit")!;

const features = [
  { emoji: "📝", title: "Service Agreement", desc: "Fixed-price and hourly versions with the deposit, IP, and termination clauses that protect you." },
  { emoji: "📐", title: "Scope of Work", desc: "A milestones + change-request template so scope creep has somewhere to go — and a price." },
  { emoji: "🔁", title: "Retainer Agreement", desc: "Lock in predictable monthly income with clear terms on hours, rollover, and notice." },
  { emoji: "🔒", title: "NDA (1-way & mutual)", desc: "Sign before the pitch. Keep the client's secrets — and your process — protected." },
  { emoji: "⚖️", title: "Clause Library", desc: "Deposit, late-fee, kill-fee, scope-creep, and IP clauses. Copy the ones that get you paid." },
];

const testimonials = [
  { quote: "The 50% upfront clause changed everything. Clients pay the deposit and suddenly they respect the timeline.", name: "Hana M.", role: "Brand Designer, Dubai" },
  { quote: "Used the service agreement on a AED 30K project. When the client tried to add scope, the template did the talking.", name: "Bilal R.", role: "Web Developer, Abu Dhabi" },
  { quote: "The late-fee clause got a 60-day overdue invoice paid in three days. Worth 100x the price.", name: "Omar F.", role: "Video Producer, Dubai" },
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
          <div className="text-6xl mb-6">📑</div>
          <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            New Release
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-5">
            Stop working without a contract and <span className="text-gradient">getting paid late</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            Five ready-to-use contract templates for UAE freelancers — service agreement, scope of work,
            retainer, NDA, and a clause library. Fill in the brackets and get signed today.
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
              <CheckoutButton productSlug="freelance-contract-kit" price={product.price} />
            </div>
            <p className="text-xs text-gray-400">Editable Google Docs + Word · 30-day money-back</p>
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
              "You start work on a verbal 'yes' and no deposit",
              "Clients pay 30, 60, even 90 days late",
              "Scope keeps growing but the fee never does",
              "You've never had a proper contract to send",
              "A lawyer wants AED 1,500+ just for a template",
              "You lost money on a project that fell apart mid-way",
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
            Everything you need to get paid, in one kit
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Plain-English templates you can fill in and send in an afternoon — no lawyer required.
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
              { q: "Are these contracts valid in the UAE?", a: "They're general freelance agreements suitable for UAE and GCC work, in plain English. They're editable templates, not jurisdiction-specific legal advice — for high-value or disputed contracts, have a UAE lawyer review your final version." },
              { q: "What format do they come in?", a: "Editable Google Docs and Microsoft Word files. Fill in the placeholders, export to PDF, and send for signature." },
              { q: "Do I really not need a lawyer?", a: "For everyday freelance work, no. The templates cover the essentials — deposits, scope, late fees, IP — without the legal bill. Bring in a lawyer for big or unusual deals." },
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
              Get paid on time, every time
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
              <CheckoutButton productSlug="freelance-contract-kit" price={product.price} />
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
