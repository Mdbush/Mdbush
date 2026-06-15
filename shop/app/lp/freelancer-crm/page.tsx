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
        <section className="py-14 text-center">
          <div className="text-6xl mb-6">📋</div>
          <div className="inline-block bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
            Best Seller
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto mb-5">
            Stop losing clients and invoices to WhatsApp chaos
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            The complete Notion CRM for UAE freelancers. Track every client, project, and invoice
            in one place — set up in 20 minutes.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-baseline gap-3 justify-center">
              <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            {product.originalPrice && (
              <p className="text-sm text-green-600 font-medium">
                Launch price — save {formatPrice(product.originalPrice - product.price)}
              </p>
            )}
            <div className="mt-2 w-full max-w-xs">
              <CheckoutButton productSlug="freelancer-client-crm" price={product.price} />
            </div>
            <p className="text-xs text-gray-400">Instant Notion access · Works on free Notion plan · 30-day money-back</p>
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
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
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
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            One workspace fixes all of it
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Duplicate the CRM into Notion, add your real clients, and you'll have a
            complete system running within 20 minutes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="border border-gray-200 rounded-2xl p-5">
                <div className="text-2xl mb-3">{f.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">What customers say</h2>
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

        {/* Final CTA */}
        <section className="py-14 border-t border-gray-100 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Ready to get organized?
          </h2>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            One-time payment. Instant Notion access. 30-day money-back guarantee.
          </p>
          <div className="flex items-baseline gap-3 justify-center mb-4">
            <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className="max-w-xs mx-auto">
            <CheckoutButton productSlug="freelancer-client-crm" price={product.price} />
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Questions? <a href="mailto:mohamed.bushara@woccars.com" className="underline">Email us</a> — we respond within 24 hours.
          </p>
        </section>
      </main>
    </div>
  );
}
