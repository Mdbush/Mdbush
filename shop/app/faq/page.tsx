import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — SoloKit",
  description:
    "Answers to common questions about SoloKit products, Notion templates, payment, delivery, refunds, and how everything works.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — SoloKit",
    description: "Everything you need to know about SoloKit products, payment, delivery, and refunds.",
    type: "website",
    url: "/faq",
  },
  twitter: {
    card: "summary",
    title: "FAQ — SoloKit",
    description: "Everything you need to know about SoloKit products, payment, delivery, and refunds.",
  },
};

const faqs = [
  {
    section: "Products",
    items: [
      {
        q: "What exactly do I get when I buy a SoloKit product?",
        a: "You get a digital product delivered instantly via email from Lemon Squeezy. Notion templates come as a shareable link you duplicate into your workspace. The AI Prompt Pack comes as a Notion page and downloadable PDF. The SOP Starter Pack includes both a Notion workspace and a Google Docs folder.",
      },
      {
        q: "Do I need a paid Notion account to use the templates?",
        a: "No — the free Notion plan is enough for all SoloKit Notion templates. You just need a free account at notion.so. Create one if you don't have one, then duplicate the template.",
      },
      {
        q: "How long does setup take?",
        a: "Most people are running with a new template in 15–30 minutes. The Freelancer Client CRM takes about 20 minutes (delete the sample data, add your first real client). The Solopreneur OS takes 30 minutes to customize for your goals and setup. The AI Prompt Pack and SOP Pack are ready to use immediately.",
      },
      {
        q: "Will these products work for my type of freelance work?",
        a: "Yes — all SoloKit products are built for service-based freelancers regardless of niche: designers, developers, marketers, consultants, coaches, copywriters, photographers, social media managers, and more. The templates use placeholder text you replace with your own specifics.",
      },
      {
        q: "How is the Freelancer CRM different from the Solopreneur OS?",
        a: "The Freelancer Client CRM is focused entirely on client and project management: pipeline, invoices, follow-ups, and revenue tracking by client. The Solopreneur OS is the complete business operating system: goals, tasks, content, and revenue — think of it as the bigger picture around the CRM. Many users have both.",
      },
    ],
  },
  {
    section: "Payment & Delivery",
    items: [
      {
        q: "What currencies and payment methods do you accept?",
        a: "All prices are in AED (UAE Dirhams). Checkout is processed securely by Lemon Squeezy and accepts all major credit and debit cards (Visa, Mastercard, Amex) plus Apple Pay and Google Pay. No extra fees for UAE cards.",
      },
      {
        q: "When will I receive my product?",
        a: "Within seconds. After payment, Lemon Squeezy sends a receipt email with your download link immediately. If you don't see it within 5 minutes, check your spam folder. If it's still missing, email us at hello@solokit.cloud.",
      },
      {
        q: "Is there a subscription? Will I be charged again?",
        a: "No. Every SoloKit product is a one-time payment. You pay once and own it forever — no recurring charges, no subscription required.",
      },
      {
        q: "Is checkout secure?",
        a: "Yes. All payments are processed by Lemon Squeezy, a PCI-compliant payment processor. SoloKit never sees or stores your card details.",
      },
    ],
  },
  {
    section: "Refunds & Guarantee",
    items: [
      {
        q: "What is your refund policy?",
        a: "We offer a 30-day money-back guarantee on all products. If you're not satisfied for any reason within 30 days of purchase, email hello@solokit.cloud with your order number and we'll issue a full refund — no questions, no forms.",
      },
      {
        q: "Do I need to explain why I want a refund?",
        a: "No. Email us within 30 days of purchase and we'll refund you, no explanation required.",
      },
    ],
  },
  {
    section: "AI Prompt Pack Pro",
    items: [
      {
        q: "Which AI tools do the prompts work with?",
        a: "All 200 prompts are tested and work with Claude, ChatGPT (GPT-4 and above), and Google Gemini. They work with any instruction-following AI assistant.",
      },
      {
        q: "Can I customize the prompts?",
        a: "Yes — that's the point. Every prompt has bracketed placeholders like [your niche] or [client name] that you fill in with your specifics. Most people also save their personalized versions to reuse.",
      },
      {
        q: "Will new prompts be added?",
        a: "Yes. When we release prompt updates (as AI models evolve or we add new use cases), existing customers get them for free. No need to repurchase.",
      },
    ],
  },
  {
    section: "SOP Starter Pack",
    items: [
      {
        q: "What formats do the SOPs come in?",
        a: "You get a Notion workspace (duplicate once to your account) and a Google Docs folder. Both contain all 50 SOPs. Use whichever fits your workflow.",
      },
      {
        q: "I'm a solo operator with no team — are SOPs useful for me?",
        a: "Yes. SOPs are for you as much as for a team. They help you stay consistent across projects, onboard clients professionally, and eventually delegate without long explanations. Most solo freelancers find the client onboarding and invoicing SOPs save them hours every week.",
      },
      {
        q: "Can I edit and rename the SOPs for my business?",
        a: "Absolutely — they're designed to be customized. Rename them, add your specific steps, remove what doesn't apply. The templates are a starting framework, not a fixed system.",
      },
    ],
  },
  {
    section: "Affiliates",
    items: [
      {
        q: "Do you have an affiliate program?",
        a: "Yes — we pay 30% commission on every sale you refer. There's no minimum payout, no approval process, and commissions are paid monthly. Join at solokit.cloud/affiliates.",
      },
      {
        q: "How are affiliate commissions tracked?",
        a: "Affiliate tracking is handled by Lemon Squeezy. When you join the program and share your unique affiliate link, every purchase made through it is tracked automatically.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Dark gradient hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Help Center</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mb-6">
            Everything you need to know about SoloKit products, payment, delivery, and refunds.
          </p>
          {/* Quick nav pills inside hero */}
          <div className="flex flex-wrap gap-2">
            {faqs.map((section) => (
              <a
                key={section.section}
                href={`#${section.section.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors border border-white/20"
              >
                {section.section}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ sections */}
        <div className="space-y-12">
          {faqs.map((section) => (
            <section key={section.section} id={section.section.toLowerCase().replace(/\s+/g, "-")}>
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
                {section.section}
              </h2>
              <div className="space-y-3">
                {section.items.map((faq) => (
                  <div key={faq.q} className="border border-gray-200 rounded-xl p-5 hover:border-emerald-200 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
          <h2 className="font-bold text-emerald-900 mb-2">Still have a question?</h2>
          <p className="text-sm text-emerald-700 mb-5">
            Email us and we&apos;ll reply within 24 hours.
          </p>
          <a
            href="mailto:hello@solokit.cloud"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Email us →
          </a>
        </div>

        {/* Products grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { emoji: "📋", name: "Client CRM", slug: "freelancer-client-crm", price: "AED 175" },
            { emoji: "🚀", name: "Solopreneur OS", slug: "solopreneur-os", price: "AED 249" },
            { emoji: "🤖", name: "AI Prompts", slug: "ai-prompt-pack-pro", price: "AED 109" },
            { emoji: "📝", name: "SOP Pack", slug: "sop-starter-pack", price: "AED 175" },
          ].map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="border border-gray-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-sm transition-all text-center"
            >
              <div className="text-2xl mb-1">{p.emoji}</div>
              <p className="text-xs font-semibold text-gray-700">{p.name}</p>
              <p className="text-xs text-emerald-600 font-semibold mt-0.5">{p.price}</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
