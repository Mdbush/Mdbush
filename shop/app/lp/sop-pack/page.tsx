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
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-16 rounded-2xl mt-8 mb-6 text-center">
          <div className="hero-glow animate-float w-72 h-72 bg-emerald-500/25 -top-20 -left-10" />
          <div className="hero-glow animate-float w-64 h-64 bg-teal-400/20 -bottom-16 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 bg-dot-grid" />
          <div className="relative">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-5">
            Stop reinventing your processes <span className="text-gradient">every single project</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            50 ready-to-use Standard Operating Procedures for freelancers and solopreneurs —
            client onboarding, content, finance, and delegation. In Notion and Google Docs.
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
              <CheckoutButton productSlug="sop-starter-pack" price={product.price} />
            </div>
            <p className="text-xs text-gray-400">50 editable SOPs · Notion + Google Docs · 30-day money-back</p>
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
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            50 SOPs across 4 core business areas
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Each SOP is fully editable. Customize once, use forever.
            Hand off to contractors or VAs without explaining anything twice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <div key={cat.title} className="border border-gray-200 rounded-2xl p-5 hover:border-emerald-400 transition-colors">
                <div className="text-2xl mb-2">{cat.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-3">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
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
              { q: "What format are the SOPs in?", a: "Both Notion and Google Docs. You get the full pack in Notion (a duplicatable template) and Google Docs (shareable with contractors and VAs). Use whichever suits you." },
              { q: "Are these UAE-specific?", a: "The workflows themselves are universal (client onboarding, invoice follow-up, content publishing). The context and examples reference UAE business norms — things like WhatsApp communication preferences and dirham pricing." },
              { q: "Can I customize them?", a: "Yes — that's the whole point. Every SOP is a starting document that you make your own. Add your brand voice, your specific tools, your actual process steps. Most take 10–20 minutes to personalize." },
              { q: "I'm a solo freelancer, not a team. Do I still need SOPs?", a: "SOPs are just documented processes — useful even if you're solo. They help you stay consistent across clients, save time when you're tired, and prepare you to delegate when you're ready to." },
              { q: "What if I need a refund?", a: "30-day money-back guarantee. Email us and we'll refund you fully — no questions, no conditions." },
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
              Build your business so it runs without you
            </h2>
            <p className="text-gray-300 mb-6 max-w-sm mx-auto text-sm">
              One-time payment. Instant access to 50 editable SOPs. 30-day money-back guarantee.
            </p>
            <div className="flex items-baseline gap-3 justify-center mb-4">
              <span className="text-4xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            <div className="max-w-xs mx-auto">
              <CheckoutButton productSlug="sop-starter-pack" price={product.price} />
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
