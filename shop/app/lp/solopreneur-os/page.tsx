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
        <section className="py-14 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto mb-5">
            Run your entire business from one Notion workspace
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            Goals, revenue, projects, content, and daily planning — all connected.
            Built for solopreneurs who are tired of jumping between 5 apps.
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
              <CheckoutButton productSlug="solopreneur-os" price={product.price} />
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
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            One OS. Everything connected.
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto">
            Duplicate the Solopreneur OS into Notion, fill in your goals and projects,
            and you&apos;ll have a complete business operating system in under an hour.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            Ready to run your business like a system?
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
            <CheckoutButton productSlug="solopreneur-os" price={product.price} />
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Questions? <a href="mailto:md.a.bushara@gmail.com" className="underline">Email us</a> — we respond within 24 hours.
          </p>
        </section>
      </main>
    </div>
  );
}
