import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelancer Client CRM — Never Lose a Lead Again",
  description:
    "The complete Notion CRM for UAE freelancers. Track clients, projects, invoices, and follow-ups — all in one place. AED 175, instant download.",
  robots: { index: false },
};

const product = getProduct("freelancer-client-crm")!;

const features = [
  { emoji: "📋", title: "Client Pipeline", desc: "See every lead at a glance — from first contact to paid invoice. Never let a deal go cold again." },
  { emoji: "📅", title: "Project Timeline", desc: "Milestones, deadlines, and deliverables for every project. Know exactly where each one stands." },
  { emoji: "💸", title: "Invoice Tracker", desc: "Overdue invoices surface automatically. Stop manually checking who owes you money." },
  { emoji: "📊", title: "Revenue Dashboard", desc: "See your monthly and weekly revenue at a glance. Know if you're on track without touching a spreadsheet." },
  { emoji: "📧", title: "10 Email Templates", desc: "Proposal follow-up, overdue invoice, project kickoff, and more. Copy, customize, send." },
];

const testimonials = [
  { quote: "Saved me at least 4 hours setting up my client system. I had everything organized within a day.", name: "Alex R.", role: "Freelance UX Designer, Dubai" },
  { quote: "The invoice tracker alone made it worth it. I used to forget overdue invoices for weeks.", name: "Nour S.", role: "Marketing Consultant, Abu Dhabi" },
  { quote: "Finally a CRM that doesn't feel like enterprise software. Simple, clean, just works.", name: "Khalid M.", role: "Web Developer, Dubai" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <Link href="/" className="font-bold text-gray-900">SoloKit</Link>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="text-green-500">🔒</span> Secure checkout · 30-day guarantee
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
          <div className="text-6xl mb-6">📋</div>
          <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            Best Seller
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-5">
            Stop losing clients and invoices to <span className="text-gradient">WhatsApp chaos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            The complete Notion CRM for UAE freelancers. Track every client, project, and invoice
            in one place — set up in 20 minutes.
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
              <CheckoutButton productSlug="freelancer-client-crm" price={product.price} />
            </div>
            <p className="text-xs text-gray-400">Instant Notion access · Works on free Notion plan · 30-day money-back</p>
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
              "You forget to follow up on leads and lose deals",
              "Invoices go unpaid for weeks because you forgot to chase them",
              "You can't remember where a project stands without scrolling WhatsApp",
              "You're rebuilding your tracking system from scratch every month",
              "Your 'client list' is a mix of WhatsApp, email, and memory",
              "You have no idea what your revenue will be next month",
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
            One workspace fixes all of it
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Duplicate the CRM into Notion, add your real clients, and you'll have a
            complete system running within 20 minutes.
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
              { q: "Do I need to pay for Notion?", a: "No — the CRM works on Notion's free plan. You do not need a paid Notion subscription to use it." },
              { q: "How do I get access after purchasing?", a: "Instantly. After checkout, you'll receive a Notion template link. Click it, duplicate it to your workspace, and you're ready to use it in minutes." },
              { q: "I'm not tech-savvy. Is this easy to set up?", a: "Yes. It's designed for non-technical users. Setup involves duplicating a template and filling in your real client names — there's no coding or complex configuration." },
              { q: "Can I use this for multiple currencies (USD, EUR)?", a: "Yes. All currency symbols and amounts are editable text — you can use AED, USD, EUR, or any other currency." },
              { q: "What if it doesn't work for me?", a: "We offer a 30-day money-back guarantee. If you're not happy with the product, email us and we'll refund you fully — no questions asked." },
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
              Ready to get organized?
            </h2>
            <p className="text-gray-300 mb-6 max-w-sm mx-auto text-sm">
              One-time payment. Instant Notion access. 30-day money-back guarantee.
            </p>
            <div className="flex items-baseline gap-3 justify-center mb-4">
              <span className="text-4xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            <div className="max-w-xs mx-auto">
              <CheckoutButton productSlug="freelancer-client-crm" price={product.price} />
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
