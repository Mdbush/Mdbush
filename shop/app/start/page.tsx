import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Which SoloKit Product Is Right for You? — SoloKit",
  description:
    "Not sure where to start? Answer 3 quick questions and we'll point you to the right product for your freelance or solopreneur business.",
};

const paths = [
  {
    emoji: "📋",
    title: "I'm losing track of clients and invoices",
    desc: "You need a client pipeline, invoice tracker, and follow-up system.",
    cta: "Get the Freelancer CRM",
    slug: "freelancer-client-crm",
    price: "AED 175",
    badge: "Best Seller",
    features: ["Client deal pipeline", "Invoice log with overdue alerts", "10 email templates", "Weekly revenue view"],
  },
  {
    emoji: "🚀",
    title: "I want to run my entire business in one place",
    desc: "You need a complete OS: goals, content, tasks, revenue, and projects.",
    cta: "Get the Solopreneur OS",
    slug: "solopreneur-os",
    price: "AED 249",
    badge: null,
    features: ["90-day goal planner", "Revenue & expense dashboard", "Content calendar", "Daily planning system"],
  },
  {
    emoji: "🤖",
    title: "I waste hours on AI that gives me generic garbage",
    desc: "You need tested prompts that actually produce usable output for your work.",
    cta: "Get the AI Prompt Pack",
    slug: "ai-prompt-pack-pro",
    price: "AED 109",
    badge: "New",
    features: ["200 prompts by category", "Works with Claude, ChatGPT, Gemini", "Proposals, emails, content", "Instant Notion + PDF access"],
  },
  {
    emoji: "📝",
    title: "I keep reinventing my processes and procedures",
    desc: "You need ready-to-use SOPs for onboarding, content, finance, and delegation.",
    cta: "Get the SOP Pack",
    slug: "sop-starter-pack",
    price: "AED 175",
    badge: null,
    features: ["50 editable SOPs", "Client onboarding & offboarding", "Finance & invoicing", "Notion + Google Docs"],
  },
];

export default function StartPage() {
  return (
    <>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Start Here</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">
            Which SoloKit product is right for you?
          </h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Pick the statement that best describes your biggest challenge right now.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {paths.map((path) => (
            <div
              key={path.slug}
              className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0 mt-0.5">{path.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h2 className="text-base font-bold text-gray-900 leading-snug">{path.title}</h2>
                    {path.badge && (
                      <span className="shrink-0 bg-gray-900 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        {path.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{path.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {path.features.map((f) => (
                      <span key={f} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-lg">
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{path.price}</span>
                    <Link
                      href={`/products/${path.slug}`}
                      className="bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-700 transition-colors"
                    >
                      {path.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Not sure? <Link href="/free" className="underline hover:text-gray-600">Start with 10 free AI prompts</Link> — no sign-up required.</p>
          <p className="mt-1">All products: instant download · 30-day money-back guarantee.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
