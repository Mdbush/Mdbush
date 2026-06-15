import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOP Starter Pack — 50 Ready-to-Use Business Processes for Freelancers",
  description:
    "Stop reinventing your client onboarding, content process, and finance workflow. 50 editable SOPs for freelancers and solopreneurs in Notion and Google Docs. AED 175.",
  robots: { index: false },
};

const product = getProduct("sop-starter-pack")!;

const categories = [
  {
    emoji: "🤝",
    title: "Client Management (12 SOPs)",
    items: ["New client intake process", "Contract signing checklist", "Kickoff call agenda", "Client offboarding + testimonial request", "Scope creep response", "Late payment follow-up"],
  },
  {
    emoji: "📝",
    title: "Content & Marketing (10 SOPs)",
    items: ["Blog post publishing workflow", "Social media scheduling", "LinkedIn content calendar", "Newsletter send checklist", "Video production process"],
  },
  {
    emoji: "💰",
    title: "Finance & Invoicing (8 SOPs)",
    items: ["Invoice creation and send", "Payment follow-up sequence", "Monthly revenue reconciliation", "Expense tracking workflow"],
  },
  {
    emoji: "⚙️",
    title: "Operations & Delegation (10 SOPs)",
    items: ["Hiring a contractor", "Task handoff checklist", "Weekly business review", "Tool and subscription audit", "Emergency contact plan"],
  },
];

const testimonials = [
  { quote: "My client onboarding used to be a mess. Now I follow the same process every time and clients notice the professionalism.", name: "Fatima A.", role: "Brand Strategist, Dubai" },
  { quote: "The scope creep SOP alone saved me from a nightmare client situation. Clear, professional, and it worked.", name: "James L.", role: "Web Developer, Abu Dhabi" },
  { quote: "I gave my VA the content SOPs and she handles everything now without asking me. That's the point.", name: "Rania H.", role: "Solopreneur & Coach, Dubai" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
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
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto mb-5">
            Stop reinventing your processes every single project
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            50 ready-to-use Standard Operating Procedures for freelancers and solopreneurs —
            client onboarding, content, finance, and delegation. In Notion and Google Docs.
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
              <CheckoutButton productSlug="sop-starter-pack" price={product.price} />
            </div>
            <p className="text-xs text-gray-400">50 editable SOPs · Notion + Google Docs · 30-day money-back</p>
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
            Does any of this sound familiar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Every new client means starting your onboarding from scratch",
              "You explain the same process to every contractor you hire",
              "Scope creep happens because you have no documented process",
              "Your VA or team member asks questions you've answered 10 times",
              "Your content publishing is inconsistent because there's no workflow",
              "You're the bottleneck in every process because only you know how it works",
            ].map((pain) => (
              <div key={pain} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                {pain}
              </div>
            ))}
          </div>
        </section>

        {/* SOPs breakdown */}
        <section className="py-14 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            50 SOPs across 4 core business areas
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Each SOP is fully editable. Customize once, use forever.
            Hand off to contractors or VAs without explaining anything twice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <div key={cat.title} className="border border-gray-200 rounded-2xl p-5">
                <div className="text-2xl mb-2">{cat.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-3">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-5">+ 10 more SOPs for weekly reviews, tool audits, and emergency planning</p>
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
            Build your business so it runs without you
          </h2>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            One-time payment. Instant access to 50 editable SOPs. 30-day money-back guarantee.
          </p>
          <div className="flex items-baseline gap-3 justify-center mb-4">
            <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className="max-w-xs mx-auto">
            <CheckoutButton productSlug="sop-starter-pack" price={product.price} />
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Questions? <a href="mailto:md.a.bushara@gmail.com" className="underline">Email us</a> — we respond within 24 hours.
          </p>
        </section>
      </main>
    </div>
  );
}
