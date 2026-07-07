import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";
import MidPageCapture from "@/components/MidPageCapture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Free AI Prompts for UAE Freelancers — SoloKit",
  description:
    "10 battle-tested AI prompts for writing proposals, following up with clients, and creating content faster. Free — no credit card needed.",
  alternates: { canonical: "/free" },
  openGraph: {
    title: "10 Free AI Prompts for UAE Freelancers",
    description: "Copy-paste prompts for proposals, follow-ups, and client emails. Free from SoloKit.",
    type: "website",
    url: "/free",
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Free AI Prompts for UAE Freelancers",
    description: "Copy-paste prompts for proposals, follow-ups, and client emails. Free from SoloKit.",
  },
};

const prompts = [
  {
    category: "Client Proposals",
    emoji: "📄",
    prompt:
      "Write a professional project proposal for a [type of project] for [client industry]. Include: project overview, deliverables, timeline (X weeks), investment of [price], and a clear call to action. Tone: confident and friendly.",
    use: "Win more clients by sending polished proposals in minutes instead of hours.",
  },
  {
    category: "Follow-Up Emails",
    emoji: "📧",
    prompt:
      "Write a follow-up email to a client who hasn't responded to my proposal in 5 days. Keep it short, friendly, and not pushy. End with a simple yes/no question to re-open the conversation.",
    use: "Stop losing deals to silence — this prompt re-opens 30-40% of cold leads.",
  },
  {
    category: "Invoice Reminder",
    emoji: "💸",
    prompt:
      "Write a polite but firm overdue invoice reminder email. Invoice is [X] days overdue. Amount: [AED]. Keep it professional, mention consequences of further delay without sounding aggressive.",
    use: "Get paid faster without damaging client relationships.",
  },
  {
    category: "LinkedIn Bio",
    emoji: "💼",
    prompt:
      "Write a compelling LinkedIn About section for a freelance [your role] who specializes in [your niche] and works with [target clients]. Highlight results, not just skills. End with a clear CTA. Max 300 words.",
    use: "Attract inbound leads by making your profile do the selling for you.",
  },
  {
    category: "Content Ideas",
    emoji: "💡",
    prompt:
      "Generate 10 LinkedIn post ideas for a freelance [role] targeting [audience]. Each idea should provide value, show expertise, and be shareable. Format: hook + one-liner description.",
    use: "Never run out of content ideas — generate a month of posts in 2 minutes.",
  },
  {
    category: "Client Onboarding",
    emoji: "🤝",
    prompt:
      "Write a client onboarding welcome email for a new [project type] project. Include: what they can expect, what you need from them this week, and how to contact you. Warm and professional tone.",
    use: "Set expectations early and reduce back-and-forth from day one.",
  },
  {
    category: "Service Description",
    emoji: "🎯",
    prompt:
      "Write a punchy service description for my [service] package priced at [price]. Target audience: [who]. Format: 1 headline, 3 benefit bullets, 1 sentence who it's for, 1 CTA. No jargon.",
    use: "Use this for your website, proposals, and social profiles.",
  },
  {
    category: "Scope Creep Reply",
    emoji: "🛡️",
    prompt:
      "Write a professional email response to a client requesting work outside the original project scope. Be firm but friendly. Acknowledge the request, explain it falls outside scope, and offer a clear path to add it as paid work.",
    use: "Protect your time without damaging client relationships.",
  },
  {
    category: "Weekly Status Update",
    emoji: "📊",
    prompt:
      "Write a brief weekly project status update email to a client. This week's progress: [list]. Next week's plan: [list]. Any blockers or decisions needed: [list]. Keep it to 5 bullet points max. Professional and clear.",
    use: "Keep clients informed and build trust without spending 30 minutes on emails.",
  },
  {
    category: "Testimonial Request",
    emoji: "⭐",
    prompt:
      "Write a friendly email asking a happy client for a testimonial or Google review. Make it easy for them — suggest 3 specific questions they could answer. Keep it short and end with a direct link placeholder.",
    use: "More testimonials = more trust = more sales. Send this within 48 hours of project completion.",
  },
];

export default function FreePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
          {/* Dark gradient hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Free Resources</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              10 <span className="text-gradient">Free AI Prompts</span> for UAE Freelancers
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Copy-paste prompts for proposals, follow-ups, client emails, content, and more.
              Tested on real freelance work. Works with ChatGPT, Claude, and Gemini.
            </p>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold px-4 py-2 rounded-full">
              <span>✓</span> 100% free — no credit card required
            </div>
          </div>

          {/* Section header */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Prompts 1–5
          </h2>

          {/* Prompts — first 5 */}
          <div className="flex flex-col gap-5">
            {prompts.slice(0, 5).map((p, i) => (
              <div
                key={p.category}
                className="border-l-4 border-emerald-500 border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{p.emoji}</span>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                    Prompt #{i + 1} · {p.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-800 bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono leading-relaxed mb-3">
                  {p.prompt}
                </p>
                <p className="text-xs text-gray-500 italic">
                  <strong className="text-gray-700 not-italic">Why it works:</strong> {p.use}
                </p>
              </div>
            ))}
          </div>

          {/* Mid-page email capture */}
          <div className="my-8">
            <MidPageCapture />
          </div>

          {/* Section header */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Prompts 6–10
          </h2>

          {/* Prompts — last 5 */}
          <div className="flex flex-col gap-5 mb-12">
            {prompts.slice(5).map((p, i) => (
              <div
                key={p.category}
                className="border-l-4 border-emerald-500 border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{p.emoji}</span>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                    Prompt #{i + 6} · {p.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-800 bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono leading-relaxed mb-3">
                  {p.prompt}
                </p>
                <p className="text-xs text-gray-500 italic">
                  <strong className="text-gray-700 not-italic">Why it works:</strong> {p.use}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Want 190 more prompts?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              The AI Prompt Pack Pro includes 200 tested prompts organized by use case —
              writing, marketing, client work, and content. AED 109, instant download.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Get the full pack — AED 109 →
            </Link>
            <p className="mt-4 text-xs text-gray-500">30-day money-back guarantee. Instant delivery.</p>
          </div>

          {/* Email capture */}
          <EmailCapture />

          {/* Other products */}
          <div className="py-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Also from SoloKit
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { emoji: "📋", name: "Freelancer Client CRM", slug: "freelancer-client-crm", price: "AED 175" },
                { emoji: "🚀", name: "Solopreneur OS", slug: "solopreneur-os", price: "AED 249" },
                { emoji: "📝", name: "SOP Starter Pack", slug: "sop-starter-pack", price: "AED 175" },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="border border-gray-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-sm transition-all text-center"
                >
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.price}</p>
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
