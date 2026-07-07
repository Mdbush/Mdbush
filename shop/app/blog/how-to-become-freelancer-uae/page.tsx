import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Become a Freelancer in the UAE — Complete 2026 Guide — SoloKit",
  description:
    "The complete step-by-step guide to starting freelancing in the UAE. Covers getting your first client, the freelance visa, bank accounts, rates, and what to do before you quit your job.",
  alternates: { canonical: "/blog/how-to-become-freelancer-uae" },
  openGraph: {
    title: "How to Become a Freelancer in the UAE — Complete 2026 Guide",
    description:
      "The complete step-by-step guide to starting freelancing in the UAE. Covers getting your first client, the freelance visa, bank accounts, rates, and what to do before you quit your job.",
    type: "article",
    url: "/blog/how-to-become-freelancer-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Become a Freelancer in the UAE — Complete 2026 Guide",
  description:
    "The complete step-by-step guide to starting freelancing in the UAE. Covers getting your first client, the freelance visa, bank accounts, rates, and what to do before you quit your job.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-become-freelancer-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-become-freelancer-uae",
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">How to Become a Freelancer UAE</span>
          </nav>

          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">GETTING STARTED</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Become a Freelancer in the UAE — Complete 2026 Guide</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Starting freelancing in the UAE takes more than handing in your notice. Here&apos;s the exact sequence — from landing your first client to getting your freelance permit, setting your rates, and building the systems that make it sustainable.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 15, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>

          {/* Key stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "AED 25–50K", label: "Recommended runway" },
              { value: "7,500–12K", label: "Permit cost (AED/yr)" },
              { value: "90 days", label: "Realistic launch plan" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Is Freelancing in the UAE Right for You?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Before anything else, run this quick self-assessment. Freelancing in the UAE works extremely well for some people and fails fast for others. Three questions to ask yourself honestly:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              { q: "Do you have a specific skill clients pay for?", detail: "Not \"I'm good at communication\" — something concrete. Development, design, copywriting, finance consulting, marketing strategy, video production. If you can't name the skill in three words, you're not ready." },
              { q: "Could you bill AED 10,000+ per month at market rates?", detail: "That's around AED 500–700/hr for 15–20 billable hours per week. If your skill commands less than that, freelancing in the UAE will be financially painful." },
              { q: "Are you self-motivated without structure?", detail: "Nobody will tell you what to do. No manager, no morning standup, no team. If you need external accountability to do your best work, build systems for that before you quit — not after." },
            ].map((row) => (
              <li key={row.q} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{row.q}</strong> {row.detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            5 Things to Do Before You Quit Your Job
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Most freelancers in the UAE who fail do one thing: they quit first and figure it out after. Don&apos;t do this. The UAE&apos;s cost of living — rent, visa fees, health insurance, groceries — means you have almost no margin for a slow start.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                num: "1",
                title: "Land your first client (or a firm commitment) while still employed",
                body: "This is the most important step. Not a \"maybe\" or \"I know someone who might need this.\" A real client who has agreed to pay you for real work. Even one AED 5,000 project changes everything psychologically and financially.",
              },
              {
                num: "2",
                title: "Save 3 months of expenses minimum",
                body: "In the UAE, 3 months of expenses typically means: rent (AED 4,000–12,000/month), health insurance (AED 400–1,500/month), food and transport (AED 2,000–4,000/month), plus your freelance permit fees (AED 7,500–15,000 all-in). Budget AED 25,000–50,000 as a safe runway.",
              },
              {
                num: "3",
                title: "Research your freelance permit options",
                body: "The main options are SHAMS (Sharjah Media City) and RAKEZ (Ras Al Khaimah Economic Zone) — both are affordable freelance permits that include UAE residence visa eligibility.",
              },
              {
                num: "4",
                title: "Open a UAE bank account in your personal name",
                body: "Banks in the UAE are notoriously strict with self-employed applicants. Your employed status makes opening an account much easier. Do this now, not after you leave.",
              },
              {
                num: "5",
                title: "Draft your first contract template",
                body: "You will need a contract for your first client. Cover: scope, rate, payment terms (50% upfront is standard), revision policy, and what happens if either party cancels.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Your Legal Options as a UAE Freelancer
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Freelance Permit</h3>
              <p className="text-sm text-gray-600">SHAMS or RAKEZ. AED 7,500–12,000/year all-in. Includes UAE residence visa. Best for most solopreneurs.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Mainland Company</h3>
              <p className="text-sm text-gray-600">AED 15,000–25,000+. More complex, but allows you to invoice any UAE company including government. Best if you plan to hire.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Sponsored Visa</h3>
              <p className="text-sm text-gray-600">If you&apos;re on a spouse&apos;s visa, you may already have the right to work. Check your visa conditions carefully with a PRO.</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Key Insight</p>
            <p className="text-sm text-emerald-800">You need either a UAE residence visa through employment or family, or a freelance permit, to legally work as a freelancer. Working without either is illegal. Get the permit — at AED 7,500–12,000/year it pays for itself with a single client.</p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Common Mistakes When Starting
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              { mistake: "Quitting before you have a client.", detail: "The urgency of needing income does not make clients appear faster. It makes you desperate, and clients can sense desperation." },
              { mistake: "Underpricing for \"experience.\"", detail: "You are doing real work. Charge real money. Discounting your rate because you're new trains clients to expect low prices." },
              { mistake: "Skipping the contract with the first client.", detail: "The first client is usually someone you know. That's exactly why you need a contract. Personal relationships make scope creep far more likely without one." },
              { mistake: "Not tracking income from day one.", detail: "You cannot manage what you don't measure. Set up a simple income and expense tracker on day one, even if it's a spreadsheet." },
            ].map((row) => (
              <li key={row.mistake} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{row.mistake}</strong> {row.detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Realistic 90-Day Plan
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Days 1–30: Foundation</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Land your first paying client</li>
                <li>• Set up income and expense tracking</li>
                <li>• Draft and send your first contract</li>
                <li>• Research freelance permit options</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Days 31–60: Stabilise</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Reach 2–3 concurrent clients</li>
                <li>• Apply for your freelance permit</li>
                <li>• Implement a client CRM</li>
                <li>• Confirm bank account setup</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Days 61–90: Build</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Build a consistent pipeline</li>
                <li>• Raise rates with new clients</li>
                <li>• Establish weekly review habits</li>
                <li>• Set a 6-month revenue target</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Build Your Freelance Business on a Real System</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Goals, projects, clients, finance tracking, and weekly reviews — everything a UAE freelancer needs from day one.</p>
            <Link href="/bundle" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Get SoloKit →
            </Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              {[
                { href: "/blog/freelance-visa-uae", label: "UAE Freelance Visa — SHAMS vs RAKEZ vs Free Zone Options" },
                { href: "/blog/get-freelance-clients-uae", label: "How to Get Freelance Clients in the UAE (6 Strategies)" },
                { href: "/blog/freelance-rate-calculator-uae", label: "Freelance Rate Calculator UAE — What Should You Charge?" },
                { href: "/blog/best-banks-freelancers-uae", label: "Best Bank Accounts for UAE Freelancers (2026)" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-emerald-700 hover:text-emerald-900 text-sm">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
