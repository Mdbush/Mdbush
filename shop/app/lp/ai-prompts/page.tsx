import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "200 AI Prompts for Freelancers — AED 109 Instant Download",
  description:
    "Stop wasting time on bad AI outputs. 200 battle-tested prompts for writing, client work, content, and marketing. Works with ChatGPT, Claude, and Gemini.",
  robots: { index: false },
};

const product = getProduct("ai-prompt-pack-pro")!;

const categories = [
  { label: "Writing & Copywriting", count: 60, examples: ["Sales page copy", "Email sequences", "Product descriptions", "LinkedIn posts"] },
  { label: "Client & Proposals", count: 40, examples: ["Project proposals", "Follow-up emails", "Scope of work", "Invoice reminders"] },
  { label: "Content & Social", count: 60, examples: ["Blog outlines", "Instagram captions", "Newsletter sections", "YouTube scripts"] },
  { label: "Business Strategy", count: 40, examples: ["SWOT analysis", "Competitor research", "Pricing strategy", "Growth ideas"] },
];

const testimonials = [
  { quote: "I used to spend 2 hours writing a proposal. Now it's 20 minutes. The proposal prompts alone paid for this pack 10x over.", name: "Rania K.", role: "Freelance Copywriter, Dubai" },
  { quote: "The AI output I was getting before this pack was generic garbage. These prompts finally made Claude and ChatGPT useful for my actual work.", name: "James T.", role: "Marketing Consultant, Abu Dhabi" },
  { quote: "200 prompts organized by category with example outputs. This is what I needed. Saved me from the chaos of trial and error.", name: "Sara M.", role: "Content Creator, Dubai" },
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
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-14 rounded-2xl mt-8 mb-6 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            New Release
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-5">
            200 AI prompts that actually work for freelancers
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            Stop getting generic outputs. These 200 battle-tested prompts are built for real freelance work —
            proposals, emails, content, and marketing. Works with ChatGPT, Claude, and Gemini.
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
              <CheckoutButton productSlug="ai-prompt-pack-pro" price={product.price} />
            </div>
            <p className="text-xs text-gray-400">Notion page + PDF download · 30-day money-back</p>
          </div>
        </section>

        {/* Social proof */}
        <div className="border-y border-gray-100 bg-gray-50 py-3">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-gray-500">
            <span>✓ Works with ChatGPT, Claude & Gemini</span>
            <span>✓ 200 prompts organized by category</span>
            <span>✓ Instant Notion + PDF access</span>
          </div>
        </div>

        {/* Before/After */}
        <section className="py-14">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The difference a good prompt makes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-red-200 bg-red-50 rounded-2xl p-5">
              <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-3">❌ Bad prompt</p>
              <p className="text-sm font-mono text-gray-700 bg-white border border-red-100 rounded-xl p-3 mb-3">
                &ldquo;Write me a proposal for my client.&rdquo;
              </p>
              <p className="text-sm text-gray-500">Output: Generic, doesn&apos;t mention your client, wrong tone, unusable.</p>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-2xl p-5">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-3">✓ From our pack</p>
              <p className="text-sm font-mono text-gray-700 bg-white border border-green-100 rounded-xl p-3 mb-3">
                &ldquo;Write a professional proposal for a [website redesign] for a [real estate company]. Include: deliverables, 4-week timeline, AED 5,000 investment, confident and friendly tone.&rdquo;
              </p>
              <p className="text-sm text-gray-600">Output: Ready to send in 10 minutes, not 2 hours.</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-14 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 flex items-center justify-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What&apos;s inside the pack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <div key={cat.label} className="border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-900">{cat.label}</p>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {cat.count} prompts
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="bg-gray-50 border border-gray-200 text-xs text-gray-600 px-2.5 py-1 rounded-lg">
                      {ex}
                    </span>
                  ))}
                </div>
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
              { q: "Which AI tools do these prompts work with?", a: "All of them. The prompts are AI-agnostic — they work with ChatGPT, Claude, Gemini, Grok, and any other text-based AI model. They're written in plain language, not for any specific platform." },
              { q: "What format do I receive them in?", a: "Two formats: a Notion page (fully searchable, with categories and tags) and a PDF (for offline reference or printing). Both are included in your purchase." },
              { q: "I'm not a copywriter. Will these work for my type of freelance work?", a: "Yes. The pack covers proposals, follow-ups, client emails, business strategy, and content — not just copywriting. Most prompts are designed to be adapted to any service-based business." },
              { q: "200 prompts sounds like a lot. Will I actually use them all?", a: "You won't use all of them every week — but you'll use different ones for different situations. The pack is organized by category so you can find what you need quickly without scrolling through everything." },
              { q: "Is there a money-back guarantee?", a: "Yes — 30 days. If you're not happy with the quality of the prompts, email us and we'll refund you fully." },
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
              Stop wasting hours on bad AI outputs
            </h2>
            <p className="text-gray-300 mb-6 max-w-sm mx-auto text-sm">
              200 prompts. Instant Notion + PDF access. 30-day money-back guarantee.
            </p>
            <div className="flex items-baseline gap-3 justify-center mb-4">
              <span className="text-4xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            <div className="max-w-xs mx-auto">
              <CheckoutButton productSlug="ai-prompt-pack-pro" price={product.price} />
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Questions? <a href="mailto:hello@solokit.cloud" className="underline">Email us</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
