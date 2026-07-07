import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solopreneur OS — Run Your Entire Business in One Notion Workspace",
  description:
    "Goals, projects, revenue, content, and daily planning — all in one Notion system built for UAE solopreneurs. AED 249, instant download.",
  robots: { index: false },
};

const product = getProduct("solopreneur-os")!;

const features = [
  { emoji: "🎯", title: "90-Day Goal Planner", desc: "Break annual goals into 90-day sprints and weekly actions. Always know what to focus on." },
  { emoji: "📊", title: "Revenue Dashboard", desc: "Income, expenses, and profit at a glance. Monthly and annual views. No spreadsheets." },
  { emoji: "📅", title: "Content Calendar", desc: "Plan and track posts, newsletters, and videos in one place. Never miss a publish date." },
  { emoji: "✅", title: "Daily Planning System", desc: "Morning review, priority queue, and end-of-day reflection. Get the right things done every day." },
  { emoji: "🚀", title: "Project Pipeline", desc: "Active projects, next actions, and deadlines — all visible in one workspace." },
  { emoji: "🔗", title: "Everything Connected", desc: "Goals link to projects, projects link to tasks, tasks link to your calendar. Nothing falls through the cracks." },
];

const testimonials = [
  { quote: "I was running my business across 5 different apps. Now everything is in one place. I feel in control for the first time.", name: "Sarah K.", role: "Content Creator & Consultant, Dubai" },
  { quote: "The 90-day goal system alone changed how I plan my quarter. I actually hit my targets now.", name: "Ahmed T.", role: "Digital Marketing Freelancer, Abu Dhabi" },
  { quote: "Worth every dirham. I stopped losing track of projects and my revenue visibility improved immediately.", name: "Priya M.", role: "UX Designer, Dubai" },
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
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-5">
            Run your entire business from <span className="text-gradient">one Notion workspace</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            Goals, revenue, projects, content, and daily planning — all connected.
            Built for solopreneurs who are tired of jumping between 5 apps.
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
              <CheckoutButton productSlug="solopreneur-os" price={product.price} />
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
            Does this sound like your business?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Your goals are in your head, not a system",
              "You end the week unsure if you made progress on what matters",
              "Revenue tracking is a mess of bank statements and guesses",
              "Content ideas disappear because you have no place to capture them",
              "You juggle Trello, Notion, Notes, and WhatsApp just to run one business",
              "You're reactive — never proactive — because there's no plan",
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
            One OS. Everything connected.
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Duplicate the Solopreneur OS into Notion, fill in your goals and projects,
            and you&apos;ll have a complete business operating system in under an hour.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              { q: "Do I need a paid Notion plan?", a: "No. The Solopreneur OS works on Notion's free plan. You can upgrade to Notion Plus later if you want more storage or sharing features, but it's not required." },
              { q: "How long does setup take?", a: "Most users are fully set up within 60 minutes. You duplicate the template, add your goals and current projects, and you're running. There's a setup guide included." },
              { q: "I'm already using another Notion template. Will this conflict?", a: "No. Each Notion workspace or page is independent. You can either use the Solopreneur OS as a standalone workspace or integrate it alongside existing pages — your choice." },
              { q: "Is this a subscription?", a: "No. This is a one-time payment. You get permanent access to the template and any future updates we push to it." },
              { q: "What if it's not right for me?", a: "30-day money-back guarantee. Email us within 30 days of purchase and we'll refund you fully — no questions asked." },
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
              Ready to run your business like a system?
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
              <CheckoutButton productSlug="solopreneur-os" price={product.price} />
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
