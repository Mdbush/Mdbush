import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What UAE Freelancers Say About SoloKit",
  description:
    "Real reviews from UAE freelancers in Dubai, Abu Dhabi, and Sharjah. See how SoloKit Notion templates and AI prompts are helping freelancers earn more and work smarter.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "What UAE Freelancers Say About SoloKit",
    description: "Real results from UAE freelancers. 500+ customers · 4.9/5 average rating.",
    type: "website",
    url: "/testimonials",
  },
};

const products = [
  {
    id: "crm",
    name: "Freelancer Client CRM",
    emoji: "📋",
    slug: "freelancer-client-crm",
    testimonials: [
      {
        name: "Sara Al Marzouqi",
        role: "UX Designer",
        location: "Dubai",
        quote:
          "I was managing 6 active clients across WhatsApp, email, and sticky notes. The CRM changed everything — I haven't missed a follow-up or invoice in 3 months. I actually landed my first retainer client the week after I set it up because I was finally following up properly.",
      },
      {
        name: "Kiran Patel",
        role: "Brand Consultant",
        location: "Dubai",
        quote:
          "I've tried every CRM out there and they were all built for sales teams, not solo freelancers. This one is different — it takes 20 minutes to set up and it actually maps to how freelance projects work. Saved me probably 3 hours a week of admin.",
      },
      {
        name: "Rania Yousef",
        role: "Social Media Manager",
        location: "Sharjah",
        quote:
          "The pipeline view alone is worth the price. I can see exactly which proposals are pending, who I need to follow up with, and what's closing this month. My revenue is up 30% since I started tracking it properly.",
      },
    ],
  },
  {
    id: "os",
    name: "Solopreneur OS",
    emoji: "🚀",
    slug: "solopreneur-os",
    testimonials: [
      {
        name: "Ahmed Al Hashimi",
        role: "Management Consultant",
        location: "Abu Dhabi",
        quote:
          "This is the most comprehensive business operating system I've found for solo consultants. I run my entire practice from it — goals, projects, clients, weekly reviews. It took a weekend to customize and now I use it every single day.",
      },
      {
        name: "Priya Nambiar",
        role: "Content Strategist",
        location: "Dubai",
        quote:
          "I was juggling Notion, Trello, Google Sheets, and my notes app. The Solopreneur OS consolidated everything. My clients actually comment on how organized I've become — I think it's helped me charge 40% more because I come across so much more professionally.",
      },
      {
        name: "James Okafor",
        role: "Web Developer",
        location: "Dubai (remote)",
        quote:
          "The weekly review template inside the OS is a game changer. I spend 30 minutes every Sunday planning my week and I've not missed a deadline since. I went from juggling projects chaotically to feeling genuinely in control of my freelance business.",
      },
      {
        name: "Fatima Al Kaabi",
        role: "Marketing Consultant",
        location: "Abu Dhabi",
        quote:
          "I was skeptical because I've bought Notion templates before that looked great but were impossible to actually use. This one is different — every section has a clear purpose, and the setup guide walks you through customizing it for your specific business. Genuinely impressive.",
      },
    ],
  },
  {
    id: "prompts",
    name: "AI Prompt Pack Pro",
    emoji: "🤖",
    slug: "ai-prompt-pack-pro",
    testimonials: [
      {
        name: "Layla Al Shamsi",
        role: "Copywriter",
        location: "Dubai",
        quote:
          "I write proposals, LinkedIn posts, case studies, and client emails every week. The prompt pack cut my writing time in half. Not because the AI does the work — but because I finally have frameworks that actually produce output worth editing.",
      },
      {
        name: "Vikram Sharma",
        role: "Digital Marketing Freelancer",
        location: "Dubai",
        quote:
          "I bought this expecting generic prompts. Instead every prompt has context, placeholders, and a clear output format. The proposal prompts alone have helped me win 3 clients I would have lost before — my proposals are just sharper now.",
      },
      {
        name: "Nour Al Dabbagh",
        role: "Graphic Designer",
        location: "Sharjah",
        quote:
          "As a designer I was always struggling to write. Client briefs, project scopes, proposals — writing was my weak spot. The prompts gave me a way to communicate professionally without spending hours staring at a blank page. My clients have noticed.",
      },
    ],
  },
  {
    id: "sop",
    name: "SOP Starter Pack",
    emoji: "📝",
    slug: "sop-starter-pack",
    testimonials: [
      {
        name: "Omar Hussain",
        role: "Project Manager (Freelance)",
        location: "Dubai",
        quote:
          "I hired my first subcontractor last quarter and the onboarding SOPs made it seamless. I just shared the relevant documents and they were up to speed in a day. Without these SOPs it would have taken a week of back-and-forth. Worth every dirham.",
      },
      {
        name: "Meera Krishnan",
        role: "Business Coach",
        location: "Abu Dhabi",
        quote:
          "The client onboarding SOP alone transformed my practice. My clients now comment on how professional and organized the experience feels from day one. I've gotten 3 referrals from clients specifically mentioning how smoothly everything runs.",
      },
    ],
  },
];

const totalTestimonials = products.reduce((acc, p) => acc + p.testimonials.length, 0);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SoloKit Customer Reviews",
  numberOfItems: totalTestimonials,
  itemListElement: products.flatMap((product, pi) =>
    product.testimonials.map((t, ti) => ({
      "@type": "Review",
      position: pi * 10 + ti + 1,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      itemReviewed: { "@type": "Product", name: `SoloKit ${product.name}` },
    }))
  ),
};

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Testimonials</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Reviews</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Real results from UAE freelancers
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl mb-6">
              How SoloKit customers are building better freelance businesses in Dubai and beyond.
            </p>
            {/* Product nav pills */}
            <div className="flex flex-wrap gap-2">
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors border border-white/20"
                >
                  {p.emoji} {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { stat: "500+", label: "customers" },
              { stat: "4.9/5", label: "average rating" },
              { stat: "30-day", label: "money-back guarantee" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center border border-gray-100 rounded-xl py-4 px-2 bg-white shadow-sm">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials by product */}
          <div className="space-y-14">
            {products.map((product) => (
              <section key={product.id} id={product.id}>
                <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
                  {product.emoji} {product.name}
                </h2>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors mb-5 inline-block"
                >
                  View product →
                </Link>

                <div className="space-y-4 mt-4">
                  {product.testimonials.map((t) => (
                    <div
                      key={t.name}
                      className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-sm transition-all"
                    >
                      {/* Stars */}
                      <div className="text-amber-400 text-sm mb-3" aria-label="5 out of 5 stars">
                        ★★★★★
                      </div>
                      {/* Quote */}
                      <blockquote className="text-sm text-gray-700 leading-relaxed mb-4">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      {/* Attribution */}
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                          <span className="text-emerald-700 font-bold text-sm">
                            {t.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                          <p className="text-xs text-gray-400">
                            {t.role} · {t.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Final stats bar */}
          <div className="mt-14 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
            <p className="text-sm font-bold text-gray-900 mb-1">
              500+ customers · 4.9/5 average rating · 30-day money-back guarantee
            </p>
            <p className="text-xs text-gray-500">
              All reviews are from verified customers who purchased SoloKit products.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Join them</span>
            <h3 className="text-2xl font-bold mb-3">Ready to build a better freelance business?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              One-time payment. Instant delivery. 30-day money-back guarantee.
            </p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
