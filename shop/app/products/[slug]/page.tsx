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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
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
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Back to all products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
          {/* Left — product info */}
          <div className="flex flex-col gap-5">
            <div className="text-5xl">{product.emoji}</div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                {product.category}
              </p>
              {product.badge && (
                <span className="inline-block bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
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
          </div>

          {/* Right — purchase box */}
          <div className="md:sticky md:top-20 self-start">
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-5 shadow-sm">
              <div>
                <p className="text-sm text-gray-400 mb-1">One-time payment · Launch price</p>
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</p>
                  {product.originalPrice && (
                    <p className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</p>
                  )}
                </div>
                {product.originalPrice && (
                  <p className="text-sm text-green-600 font-medium mt-1">
                    You save {formatPrice(product.originalPrice - product.price)}
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Instant digital delivery</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Lifetime access</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 30-day money-back guarantee</li>
              </ul>

              <CheckoutButton productSlug={product.slug} price={product.price} />

              <p className="text-xs text-gray-400 text-center">
                Secure checkout powered by Lemon Squeezy. Accepts all major cards.
              </p>
            </div>

            {/* Testimonial */}
            <div className="mt-4 border border-gray-100 rounded-2xl p-5 bg-gray-50">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                &ldquo;Saved me at least 4 hours setting up my client system. Worth every penny.&rdquo;
              </p>
              <p className="mt-2 text-xs text-gray-400 font-medium">— Alex R., freelance designer</p>
            </div>
          </div>
        </div>

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
