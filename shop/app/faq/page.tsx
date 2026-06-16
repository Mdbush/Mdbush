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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

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
        a: "Within seconds. After payment, Lemon Squeezy sends a receipt email with your download link immediately. If you don't see it within 5 minutes, check your spam folder. If it's still missing, email us at md.a.bushara@gmail.com.",
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
        a: "We offer a 30-day money-back guarantee on all products. If you're not satisfied for any reason within 30 days of purchase, email md.a.bushara@gmail.com with your order number and we'll issue a full refund — no questions, no forms.",
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

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Help</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Frequently Asked Questions</h1>
          <p className="text-gray-500 max-w-md mx-auto">
            Everything you need to know about SoloKit products, payment, delivery, and refunds.
          </p>
        </div>

        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {faqs.map((section) => (
            <a
              key={section.section}
              href={`#${section.section.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
            >
              {section.section}
            </a>
          ))}
        </div>

        {/* FAQ sections */}
        <div className="space-y-14">
          {faqs.map((section) => (
            <section key={section.section} id={section.section.toLowerCase().replace(/\s+/g, "-")}>
              <h2 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">
                {section.section}
              </h2>
              <div className="space-y-4">
                {section.items.map((faq) => (
                  <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still have questions */}
        <section className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <h2 className="font-bold text-gray-900 mb-2">Still have a question?</h2>
          <p className="text-sm text-gray-500 mb-5">
            Email us and we&apos;ll reply within 24 hours.
          </p>
          <a
            href="mailto:md.a.bushara@gmail.com"
            className="inline-block bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-700 transition-colors text-sm"
          >
            Email us →
          </a>
        </section>

        {/* Products CTA */}
        <section className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { emoji: "📋", name: "Client CRM", slug: "freelancer-client-crm", price: "AED 175" },
            { emoji: "🚀", name: "Solopreneur OS", slug: "solopreneur-os", price: "AED 249" },
            { emoji: "🤖", name: "AI Prompts", slug: "ai-prompt-pack-pro", price: "AED 109" },
            { emoji: "📝", name: "SOP Pack", slug: "sop-starter-pack", price: "AED 175" },
          ].map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all text-center"
            >
              <div className="text-2xl mb-1">{p.emoji}</div>
              <p className="text-xs font-semibold text-gray-700">{p.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{p.price}</p>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
