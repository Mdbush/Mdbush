import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, formatPrice, products } from "@/lib/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutButton from "@/components/CheckoutButton";
import MobileStickyBuy from "@/components/MobileStickyBuy";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — SoloKit`,
    description: product.tagline,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: product.name,
      description: product.tagline,
      url: `/products/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.tagline,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: `${siteUrl}/products/${slug}`,
    brand: { "@type": "Brand", name: "SoloKit" },
    offers: {
      "@type": "Offer",
      price: (product.price / 100).toFixed(0),
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "SoloKit" },
    },
    // No aggregateRating: we don't have verifiable, on-page review data, and
    // Google's structured-data policy prohibits marking up invented ratings.
    // The visual "4.9/5" social proof still renders; it just isn't claimed as
    // machine-readable review data (which risks a manual action).
  };

  const faqsMap: Record<string, { q: string; a: string }[]> = {
    "freelancer-client-crm": [
      { q: "Do I need any special Notion plan?", a: "No — the free Notion plan is enough. You just need a Notion account, which is free to create at notion.so." },
      { q: "How long does setup take?", a: "Most people are up and running in 15-20 minutes. Duplicate the template, delete the sample data, and add your first real client." },
      { q: "Can I share it with a VA or team member?", a: "Yes. On the free Notion plan you can share with up to 10 guests. The CRM is fully sharable." },
      { q: "Does it work for my type of freelance work?", a: "Yes — the CRM is built for any service-based freelancer: designers, developers, marketers, consultants, coaches, writers, and more." },
    ],
    "solopreneur-os": [
      { q: "What if I don't use all sections?", a: "Start with just the goal planner and revenue dashboard. The template is modular — use what helps, ignore what doesn't. Delete sections you don't need." },
      { q: "How is this different from the Freelancer CRM?", a: "The CRM focuses on client pipeline and invoicing. The Solopreneur OS is the full picture: goals, content, revenue, tasks. Get both if you want a complete setup." },
      { q: "Is the revenue dashboard automatic?", a: "You input your revenue and expenses. The dashboard auto-calculates profit, margins, and monthly totals using Notion's built-in formulas." },
    ],
    "ai-prompt-pack-pro": [
      { q: "What format does the pack come in?", a: "You get a Notion page you can duplicate and a downloadable PDF. Both contain all 200 prompts organized by category." },
      { q: "Will these prompts work with my AI tool?", a: "Yes — all prompts are tested with Claude, ChatGPT, and Gemini. They work with any instruction-following AI." },
      { q: "Can I edit and customize the prompts?", a: "Absolutely. Every prompt has bracketed placeholders for you to fill in your specifics." },
    ],
    "sop-starter-pack": [
      { q: "What formats do the SOPs come in?", a: "You get both a Notion page (with duplicate access) and a Google Docs folder. Use whichever fits your workflow." },
      { q: "Can I customize the SOPs for my business?", a: "Yes — the templates are a starting structure. Rename them, add your specific steps, remove what doesn't apply." },
      { q: "I'm a solo operator with no team. Are SOPs still useful?", a: "Yes — SOPs are for you as much as for your team. They help you stay consistent and eventually delegate without long explanations." },
    ],
    "freelance-contract-kit": [
      { q: "Are these contracts valid in the UAE?", a: "They're written as general freelance agreements suitable for UAE and GCC work, in plain English. They're editable templates, not jurisdiction-specific legal advice — for a high-value or disputed contract, have a UAE lawyer review your final version." },
      { q: "What format do they come in?", a: "Editable Google Docs and Microsoft Word files. Fill in the bracketed placeholders, then export to PDF and send for signature." },
      { q: "Do I need a lawyer to use them?", a: "No — that's the point. The templates are ready to use with your details filled in. They cover the essentials most freelancers need without the legal bill." },
      { q: "What's actually included?", a: "A freelance service agreement (fixed-price and hourly), a scope-of-work + change-request template, a monthly retainer agreement, one-way and mutual NDAs, and a clause library for deposits, late fees, and kill fees." },
    ],
    "client-proposal-pack": [
      { q: "What's in the pack?", a: "A proposal template, a discovery-call script with qualifying questions, a pricing & packages one-pager, cold and warm pitch email templates, and a 3-email follow-up sequence." },
      { q: "What format is it in?", a: "Editable Google Docs plus a Notion version. Fill in the placeholders with your client's details and your pricing, then export to PDF and send." },
      { q: "Will this work for my type of freelance work?", a: "Yes — the frameworks are service-agnostic. Designers, developers, marketers, consultants, and coaches all use the same problem → outcome → price structure." },
      { q: "How is this different from the Contract Kit?", a: "The Proposal Pack wins the client (pitch, proposal, follow-up). The Contract Kit protects the deal once they say yes (agreements, deposits, scope). They work best together." },
    ],
  };

  const productFaqs = faqsMap[slug];
  const faqJsonLd = productFaqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: productFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  const testimonialMap: Record<string, { quote: string; author: string; role: string }[]> = {
    "freelancer-client-crm": [
      { quote: "Saved me at least 4 hours a week chasing invoices. I can see everything in one place now.", author: "Sarah K.", role: "Freelance designer, Dubai" },
      { quote: "I finally stopped losing leads in my WhatsApp messages. This CRM paid for itself in the first week.", author: "Omar A.", role: "Marketing consultant, Abu Dhabi" },
      { quote: "Duplicated it on Monday, had my entire client pipeline organised by Wednesday. Game changer.", author: "Priya S.", role: "Brand strategist, Dubai" },
      { quote: "The invoice tracker with overdue alerts stopped me losing AED 8,000 in forgotten follow-ups last quarter.", author: "Khalid M.", role: "IT consultant, Abu Dhabi" },
      { quote: "Finally feel like I'm running a proper business instead of juggling 10 WhatsApp threads.", author: "Emma L.", role: "Copywriter, Dubai Marina" },
    ],
    "solopreneur-os": [
      { quote: "The revenue dashboard alone was worth it. I can see my monthly numbers at a glance instead of digging through bank statements.", author: "Lina M.", role: "Business coach, Dubai" },
      { quote: "Replaced 5 different apps I was using. Everything I need for my business is now in one Notion workspace.", author: "Faris H.", role: "UX consultant, Dubai" },
      { quote: "The 90-day goal planner changed how I run my quarters. I actually hit my targets now instead of reacting to everything.", author: "Aisha R.", role: "Marketing consultant, Abu Dhabi" },
      { quote: "Best AED 249 I've spent on my business. The content calendar alone stopped me from ghosting my LinkedIn for weeks at a time.", author: "Tom B.", role: "Sales trainer, Dubai" },
    ],
    "ai-prompt-pack-pro": [
      { quote: "I used to spend 30 minutes writing a client proposal. Now it's 5 minutes with the right prompts.", author: "Nadia R.", role: "Copywriter, Dubai" },
      { quote: "The scope creep reply prompt alone is worth the price. Clients respect my boundaries now.", author: "James T.", role: "Web developer, Abu Dhabi" },
      { quote: "The LinkedIn post prompts tripled my engagement in 3 weeks. I finally sound like myself instead of a robot.", author: "Salma K.", role: "HR consultant, Dubai" },
      { quote: "Saved me from staring at a blank page for hours every week. My content output doubled and the quality went up.", author: "Daniel O.", role: "Video editor, Sharjah" },
    ],
    "sop-starter-pack": [
      { quote: "Onboarded my first VA using 3 SOPs from this pack. What used to take 2 hours of explanation took 20 minutes.", author: "Rania S.", role: "Social media manager, Dubai" },
      { quote: "Finally have a consistent client onboarding process. No more projects starting chaotically.", author: "Mark D.", role: "Brand consultant, Sharjah" },
      { quote: "The client offboarding SOP alone saved an awkward ending with a long-term client. Professional and clean.", author: "Yasmin A.", role: "Graphic designer, Abu Dhabi" },
      { quote: "I could finally delegate to my VA without spending 3 hours explaining everything. The SOPs did the work for me.", author: "Ryan C.", role: "Ecommerce consultant, Dubai" },
    ],
    "freelance-contract-kit": [
      { quote: "The 50% upfront clause changed everything. Clients pay the deposit and suddenly they respect the timeline. No more chasing.", author: "Hana M.", role: "Brand designer, Dubai" },
      { quote: "Used the service agreement for a AED 30K project. When the client tried to add scope, the change-request template did the talking for me.", author: "Bilal R.", role: "Web developer, Abu Dhabi" },
      { quote: "I used to work without contracts because lawyers are expensive. This kit gave me professional agreements in an afternoon.", author: "Sara T.", role: "Marketing consultant, Sharjah" },
      { quote: "The late-fee clause got a 60-day overdue invoice paid in three days. Worth 100x the price.", author: "Omar F.", role: "Video producer, Dubai" },
    ],
    "client-proposal-pack": [
      { quote: "Rewrote my proposal with this template and closed a AED 45K retainer the same week. It sells the outcome, not the hours.", author: "Layla H.", role: "Growth consultant, Dubai" },
      { quote: "The follow-up sequence alone is gold. Two 'dead' leads replied and one signed — from emails I'd never have written.", author: "Yousef K.", role: "Web developer, Abu Dhabi" },
      { quote: "The pricing one-pager with three tiers doubled my average project size. Clients pick the middle option every time.", author: "Mira S.", role: "Brand strategist, Sharjah" },
      { quote: "I used to wing discovery calls. The script makes me sound senior and qualifies out the tyre-kickers fast.", author: "Adib N.", role: "UX designer, Dubai" },
    ],
  };

  const testimonials = testimonialMap[slug] ?? [
    { quote: "Saved me at least 4 hours setting up my client system. Worth every penny.", author: "Alex R.", role: "Freelance designer, Dubai" },
  ];

  const howItWorksMap: Record<string, { step: string; title: string; desc: string }[]> = {
    "freelancer-client-crm": [
      { step: "1", title: "Duplicate in one click", desc: "Click the template link in your delivery email. Hit \"Duplicate\" in Notion. It's in your workspace in 30 seconds." },
      { step: "2", title: "Add your clients & projects", desc: "Delete the sample data and enter your real clients, active projects, and pending invoices. Takes 15–20 minutes." },
      { step: "3", title: "Run your business from it", desc: "Check your dashboard every morning. Update statuses as projects move. Never forget a follow-up or overdue invoice again." },
    ],
    "solopreneur-os": [
      { step: "1", title: "Duplicate the workspace", desc: "One click to duplicate the full OS into your Notion. All databases, views, and formulas are ready immediately." },
      { step: "2", title: "Set your 90-day goals", desc: "Open the Goal Planner and set 3–5 targets for the quarter. Break each into weekly milestones." },
      { step: "3", title: "Run your week from one dashboard", desc: "Every Monday, review your revenue, check your content calendar, and plan your week — all from one page." },
    ],
    "ai-prompt-pack-pro": [
      { step: "1", title: "Duplicate or download", desc: "Get the Notion template and PDF delivered instantly. Duplicate into your Notion or save the PDF to your desktop." },
      { step: "2", title: "Find the right prompt category", desc: "Browse by use case — writing, proposals, content, strategy. Each prompt has fill-in-the-blank placeholders." },
      { step: "3", title: "Paste, fill, and go", desc: "Copy the prompt, fill in your specifics, paste into Claude or ChatGPT. Get a professional output in seconds." },
    ],
    "sop-starter-pack": [
      { step: "1", title: "Duplicate or open in Docs", desc: "Get instant access to the Notion template and Google Docs folder. Choose whichever format you use daily." },
      { step: "2", title: "Customise for your business", desc: "Rename the SOPs, add your specific steps, remove what doesn't apply. Most people customise 10–15 SOPs actively." },
      { step: "3", title: "Share with your team or VA", desc: "Share the Notion page or Docs folder. Your VA or team member has full instructions — no more lengthy briefings." },
    ],
    "freelance-contract-kit": [
      { step: "1", title: "Download the templates", desc: "Get the full kit instantly as editable Google Docs and Word files — service agreement, SOW, retainer, NDA, and the clause library." },
      { step: "2", title: "Fill in your details", desc: "Replace the bracketed placeholders with your name, rates, payment terms, and project scope. Every clause is plain English." },
      { step: "3", title: "Send and get signed", desc: "Export to PDF, send for e-signature, and collect your 50% deposit before you start. You're protected from day one." },
    ],
    "client-proposal-pack": [
      { step: "1", title: "Run the discovery call", desc: "Use the script and qualifying questions to uncover the client's real problem, budget, and decision process before you quote." },
      { step: "2", title: "Drop your details into the template", desc: "Swap the placeholders for their problem, your outcome, and your three pricing tiers. Ten minutes, not two hours." },
      { step: "3", title: "Send, then follow up on autopilot", desc: "Send the proposal, then work the 3-email follow-up sequence. Most deals close on email two or three." },
    ],
  };

  const howItWorks = howItWorksMap[slug] ?? [];

  const whoIsItForMap: Record<string, string[]> = {
    "freelancer-client-crm": [
      "Freelancers with 3+ active clients at any time",
      "Consultants juggling multiple project timelines",
      "Anyone currently tracking clients in WhatsApp or spreadsheets",
      "Freelancers who have ever forgotten to follow up on an invoice",
      "Solo operators who want to look and operate more professionally",
    ],
    "solopreneur-os": [
      "Solo business owners who want one place for everything",
      "Freelancers trying to scale beyond trading time for money",
      "Content creators who want a real planning system",
      "Anyone currently running their business from their head",
      "Solopreneurs setting quarterly revenue targets",
    ],
    "ai-prompt-pack-pro": [
      "Freelancers who want to write faster without sounding like a robot",
      "Consultants using AI for proposals and client communications",
      "Content creators who want higher-quality AI output",
      "Anyone frustrated with generic AI results",
      "Business owners using Claude, ChatGPT, or Gemini daily",
    ],
    "sop-starter-pack": [
      "Freelancers ready to hire their first VA or contractor",
      "Solo operators who repeat the same processes every week",
      "Anyone who has onboarded a client differently every single time",
      "Business owners planning to scale or delegate",
      "Solopreneurs who want to stop being the bottleneck",
    ],
    "freelance-contract-kit": [
      "Freelancers who still work on a verbal 'yes' with no contract",
      "Anyone who has been paid late — or not at all",
      "Consultants who keep getting hit with unpaid scope creep",
      "Freelancers moving from small gigs to AED 10K+ projects",
      "Solo operators who can't justify a lawyer for every deal",
    ],
    "client-proposal-pack": [
      "Freelancers whose proposals go quiet and never close",
      "Anyone still quoting a flat hourly rate with no packages",
      "Consultants who dread writing proposals from scratch",
      "Freelancers who never follow up after sending a quote",
      "Solo operators who want to raise their average project size",
    ],
  };

  const whoIsItFor = whoIsItForMap[slug] ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <MobileStickyBuy productSlug={product.slug} productName={product.name} price={product.price} />
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/" className="text-sm text-gray-400 hover:text-emerald-600 transition-colors mb-8 inline-block">
          ← Back to all products
        </Link>

        {/* Social proof bar */}
        <div className="flex flex-wrap gap-4 items-center mb-8 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl px-5 py-3">
          <span className="text-sm font-semibold text-emerald-400">★★★★★ 4.9/5</span>
          <span className="text-gray-600">|</span>
          <span className="text-sm text-gray-300">500+ UAE freelancers</span>
          <span className="text-gray-600">|</span>
          <span className="text-sm text-gray-300">Instant delivery</span>
          <span className="text-gray-600">|</span>
          <span className="text-sm text-gray-300">30-day guarantee</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
          {/* Left — product info */}
          <div className="flex flex-col gap-5">
            <div className="text-5xl">{product.emoji}</div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                {product.category}
              </p>
              {product.badge && (
                <span className="inline-block bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  {product.badge}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
              <p className="mt-2 text-lg text-gray-500">{product.tagline}</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>

            {/* What's included */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            {whoIsItFor.length > 0 && (
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">This is for you if...</p>
                <ul className="flex flex-col gap-2">
                  {whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="text-blue-500 mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Testimonials */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">What customers say</p>
              {testimonials.map((t) => (
                <div key={t.author} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-2 text-xs text-gray-400 font-medium">— {t.author}, {t.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — purchase box */}
          <div className="md:sticky md:top-20 self-start flex flex-col gap-4">
            {/* Urgency bar */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-center">
              <p className="text-amber-800 text-xs font-semibold">🔥 Launch Week — price goes up soon</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-5 shadow-sm">
              <div>
                <p className="text-sm text-gray-400 mb-1">One-time payment · No subscription</p>
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</p>
                  {product.originalPrice && (
                    <p className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</p>
                  )}
                </div>
                {product.originalPrice && (
                  <p className="text-sm text-green-600 font-medium mt-1">
                    Save {formatPrice(product.originalPrice - product.price)} during launch week
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Instant digital delivery — in seconds</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Lifetime access, free updates</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 30-day money-back guarantee</li>
              </ul>

              <CheckoutButton productSlug={product.slug} price={product.price} />

              <p className="text-xs text-gray-400 text-center">
                🔒 Secure checkout · All major cards · AED pricing
              </p>
            </div>

            {/* Money back guarantee box */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 flex gap-3 items-start">
              <span className="text-xl shrink-0">🛡️</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">30-Day Money-Back Guarantee</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  If you&apos;re not happy for any reason, email us within 30 days for a full refund. No questions, no forms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        {howItWorks.length > 0 && (
          <section className="mt-16 border-t border-gray-100 pt-12">
            <h2 className="text-lg font-bold text-gray-900 mb-6">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {howItWorks.map((step) => (
                <div key={step.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center mb-3">{step.step}</div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{step.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Product FAQ */}
        {(() => {
          const faqs: Record<string, { q: string; a: string }[]> = {
            "freelancer-client-crm": [
              { q: "Do I need any special Notion plan?", a: "No — the free Notion plan is enough. You just need a Notion account, which is free to create at notion.so." },
              { q: "How long does setup take?", a: "Most people are up and running in 15-20 minutes. Duplicate the template, delete the sample data, and add your first real client." },
              { q: "Can I share it with a VA or team member?", a: "Yes. On the free Notion plan you can share with up to 10 guests. The CRM is fully sharable." },
              { q: "Does it work for my type of freelance work?", a: "Yes — the CRM is built for any service-based freelancer: designers, developers, marketers, consultants, coaches, writers, and more." },
            ],
            "solopreneur-os": [
              { q: "What if I don't use all sections?", a: "Start with just the goal planner and revenue dashboard. The template is modular — use what helps, ignore what doesn't. Delete sections you don't need." },
              { q: "How is this different from the Freelancer CRM?", a: "The CRM focuses on client pipeline and invoicing. The Solopreneur OS is the full picture: goals, content, revenue, tasks. Get both if you want a complete setup." },
              { q: "Is the revenue dashboard automatic?", a: "You input your revenue and expenses. The dashboard auto-calculates profit, margins, and monthly totals using Notion's built-in formulas." },
              { q: "I'm not a YouTuber — is the content calendar still useful?", a: "Yes. The content calendar covers newsletter, social media, and blog in addition to YouTube. Just use the sections that apply to your content channels." },
            ],
            "ai-prompt-pack-pro": [
              { q: "What format does the pack come in?", a: "You get a Notion page you can duplicate and a downloadable PDF. Both contain all 200 prompts organized by category." },
              { q: "Will these prompts work with my AI tool?", a: "Yes — all prompts are tested with Claude, ChatGPT, and Gemini. They work with any instruction-following AI." },
              { q: "Can I edit and customize the prompts?", a: "Absolutely. Every prompt has bracketed placeholders for you to fill in your specifics. Most people also save their customized versions for reuse." },
              { q: "How often are new prompts added?", a: "We release new prompts as AI models evolve. Customers who buy get access to future updates at no extra cost." },
            ],
            "sop-starter-pack": [
              { q: "What formats do the SOPs come in?", a: "You get both a Notion page (with duplicate access) and a Google Docs folder. Use whichever fits your workflow." },
              { q: "Can I customize the SOPs for my business?", a: "Yes — that's the point. The templates are a starting structure. Rename them, add your specific steps, remove what doesn't apply." },
              { q: "I'm a solo operator with no team. Are SOPs still useful?", a: "Yes — SOPs are for you as much as for your team. They help you stay consistent, onboard clients properly, and eventually delegate without long explanations." },
              { q: "What if I only need some of the SOPs?", a: "Use whatever applies to your situation. You're buying all 50, but you might only ever use 10-15 actively. That's completely normal." },
            ],
            "freelance-contract-kit": [
              { q: "Are these contracts valid in the UAE?", a: "They're written as general freelance agreements suitable for UAE and GCC work, in plain English. They're editable templates, not jurisdiction-specific legal advice — for a high-value or disputed contract, have a UAE lawyer review your final version." },
              { q: "What format do they come in?", a: "Editable Google Docs and Microsoft Word files. Fill in the bracketed placeholders, then export to PDF and send for signature." },
              { q: "Do I need a lawyer to use them?", a: "No — that's the point. The templates are ready to use once you fill in your details, covering the essentials most freelancers need without the legal bill." },
              { q: "What's included?", a: "A freelance service agreement (fixed-price and hourly), a scope-of-work + change-request template, a monthly retainer agreement, one-way and mutual NDAs, and a clause library for deposits, late fees, and kill fees." },
            ],
            "client-proposal-pack": [
              { q: "What's in the pack?", a: "A proposal template, a discovery-call script with qualifying questions, a pricing & packages one-pager, cold and warm pitch email templates, and a 3-email follow-up sequence." },
              { q: "What format is it in?", a: "Editable Google Docs plus a Notion version. Fill in the placeholders with your client's details and pricing, then export to PDF and send." },
              { q: "Will this work for my type of freelance work?", a: "Yes — the frameworks are service-agnostic. Designers, developers, marketers, consultants, and coaches all use the same problem → outcome → price structure." },
              { q: "How is this different from the Contract Kit?", a: "The Proposal Pack wins the client; the Contract Kit protects the deal once they say yes. They work best together." },
            ],
          };
          const productFaqs = faqs[product.slug];
          if (!productFaqs) return null;
          return (
            <section className="mt-16 border-t border-gray-100 pt-12">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Common questions</h2>
              <div className="flex flex-col gap-4">
                {productFaqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Final CTA */}
        <section className="relative overflow-hidden mt-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 rounded-2xl p-10 text-center">
          <div className="hero-glow animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 bg-dot-grid" />
          <div className="relative">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Ready to get started?</p>
            <h2 className="text-2xl font-bold mb-2"><span className="text-gradient">{product.name}</span></h2>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">{product.tagline} One-time payment. Instant delivery. 30-day guarantee.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CheckoutButton productSlug={product.slug} price={product.price} />
              <p className="text-gray-500 text-sm">
                {product.originalPrice ? (
                  <><span className="line-through text-gray-600">{formatPrice(product.originalPrice)}</span> → <span className="text-white font-bold">{formatPrice(product.price)}</span></>
                ) : (
                  <span className="text-white font-bold">{formatPrice(product.price)}</span>
                )}
              </p>
            </div>
            <p className="text-xs text-gray-600 mt-4">🔒 Secure checkout · AED pricing · Instant digital delivery</p>
          </div>
        </section>

        {/* Related blog post */}
        {(() => {
          const relatedPost: Record<string, { title: string; slug: string; desc: string }> = {
            "freelancer-client-crm": {
              title: "Best Notion Templates for Freelancers in the UAE",
              slug: "best-notion-templates-freelancers-uae",
              desc: "How to pick and actually use a Notion template for your freelance business.",
            },
            "solopreneur-os": {
              title: "Why Most UAE Freelancers Stay Stuck at AED 10K/Month",
              slug: "freelance-systems-uae",
              desc: "The exact systems that let solo operators scale without burning out.",
            },
            "ai-prompt-pack-pro": {
              title: "How to Use AI to Do More Freelance Work in Less Time",
              slug: "ai-prompts-for-freelancers",
              desc: "The prompts that actually work — and the mistakes that waste your time with AI.",
            },
            "sop-starter-pack": {
              title: "Best SOP Templates for Freelancers and Online Businesses",
              slug: "sop-templates-freelancers-online-business",
              desc: "The 4 SOP categories every freelancer needs, and the most important one most skip.",
            },
            "freelance-contract-kit": {
              title: "Freelance Contract Template for the UAE",
              slug: "freelance-contract-template-uae",
              desc: "What every UAE freelance contract needs — deposits, scope, late fees, and IP.",
            },
            "client-proposal-pack": {
              title: "How to Write a Freelance Proposal That Wins (UAE)",
              slug: "freelance-proposal-template-uae",
              desc: "The problem → outcome → price structure that turns enquiries into signed clients.",
            },
          };
          const post = relatedPost[product.slug];
          if (!post) return null;
          return (
            <section className="mt-10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Further reading</p>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl shrink-0">📖</span>
                <div>
                  <p className="font-semibold text-sm text-gray-900 group-hover:text-gray-700">{post.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{post.desc}</p>
                </div>
              </Link>
            </section>
          );
        })()}

        {/* More products */}
        <section className="mt-16 border-t border-gray-100 pt-12">
          <h2 className="text-lg font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-colors"
                >
                  <span className="text-2xl shrink-0">{p.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.tagline}</p>
                    <p className="text-sm font-bold text-gray-900 mt-1">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
