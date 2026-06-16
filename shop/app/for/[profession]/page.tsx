import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

type ProfessionData = {
  slug: string;
  name: string;
  namePlural: string;
  headline: string;
  subheadline: string;
  painPoints: string[];
  products: {
    slug: string;
    emoji: string;
    name: string;
    price: string;
    why: string;
  }[];
  relatedGuides: { slug: string; title: string; time: string }[];
  testimonial: { quote: string; author: string; role: string };
  metaTitle: string;
  metaDescription: string;
};

const professions: Record<string, ProfessionData> = {
  designers: {
    slug: "designers",
    name: "designer",
    namePlural: "designers",
    headline: "Tools Built for Freelance Designers in the UAE",
    subheadline:
      "Stop tracking clients in your WhatsApp and quoting projects from memory. These Notion templates and AI prompt packs run your creative business in AED — not USD.",
    painPoints: [
      "Losing track of which client revision you're on",
      "Writing proposals from scratch for every project",
      "Clients changing scope mid-project with no paper trail",
      "Forgetting to follow up on unpaid design invoices",
      "Starting every onboarding call from zero",
    ],
    products: [
      {
        slug: "freelancer-client-crm",
        emoji: "📋",
        name: "Freelancer Client CRM",
        price: "AED 175",
        why: "Every design project, client, and invoice in one Notion workspace. Revision tracking, project milestones, and an invoice log that tells you who owes what — in seconds.",
      },
      {
        slug: "ai-prompt-pack-pro",
        emoji: "🤖",
        name: "AI Prompt Pack Pro",
        price: "AED 109",
        why: "200 prompts for design proposals, scope creep replies, client onboarding emails, and creative briefs. Stop staring at a blank email and start winning projects.",
      },
      {
        slug: "sop-starter-pack",
        emoji: "📝",
        name: "SOP Starter Pack",
        price: "AED 175",
        why: "Consistent client onboarding, revision handling, and handoff process — documented once, reused forever. Your design projects run smoother because every step is written down.",
      },
      {
        slug: "solopreneur-os",
        emoji: "🚀",
        name: "Solopreneur OS",
        price: "AED 249",
        why: "Revenue dashboard, 90-day goal planner, content calendar, and weekly planning — all in one Notion workspace. Treat your design business like a business.",
      },
    ],
    relatedGuides: [
      { slug: "freelance-proposal-tips-uae", title: "How to Write a Freelance Proposal That Wins Clients", time: "7 min" },
      { slug: "freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?", time: "8 min" },
      { slug: "how-to-build-freelance-portfolio-uae", title: "How to Build a Freelance Portfolio in the UAE", time: "7 min" },
      { slug: "client-onboarding-freelance-uae", title: "Client Onboarding Process for UAE Freelancers", time: "6 min" },
    ],
    testimonial: {
      quote: "Saved me at least 4 hours a week chasing invoices. I can see everything in one place now — clients, projects, what's been paid and what hasn't.",
      author: "Sarah K.",
      role: "Freelance designer, Dubai",
    },
    metaTitle: "Notion Templates & Tools for Freelance Designers in the UAE — SoloKit",
    metaDescription:
      "CRM, proposal prompts, and SOP templates built for UAE freelance designers. Track clients, projects, and invoices in AED. Instant download.",
  },
  developers: {
    slug: "developers",
    name: "developer",
    namePlural: "developers",
    headline: "Tools Built for Freelance Developers in the UAE",
    subheadline:
      "Manage clients, track projects, and get paid on time — without building the system yourself. Notion workspaces and AI prompts designed for UAE-based freelance developers.",
    painPoints: [
      "Juggling multiple projects with no central system",
      "Scope creep eating into project profitability",
      "Late payments from UAE clients with 60-day payment terms",
      "Writing project proposals that accurately scope technical work",
      "Onboarding new clients without repeating the same setup every time",
    ],
    products: [
      {
        slug: "freelancer-client-crm",
        emoji: "📋",
        name: "Freelancer Client CRM",
        price: "AED 175",
        why: "Project pipeline, milestone tracking, invoice log, and weekly revenue dashboard — for developers who need to track multiple simultaneous projects without losing scope.",
      },
      {
        slug: "sop-starter-pack",
        emoji: "📝",
        name: "SOP Starter Pack",
        price: "AED 175",
        why: "Documented processes for client onboarding, sprint handoffs, bug reports, and project closeout. Onboard clients faster and hand off cleaner when you move to the next project.",
      },
      {
        slug: "ai-prompt-pack-pro",
        emoji: "🤖",
        name: "AI Prompt Pack Pro",
        price: "AED 109",
        why: "Technical proposal writing, scope change emails, client status updates, and LinkedIn content prompts. Write client-facing communications in minutes, not hours.",
      },
      {
        slug: "solopreneur-os",
        emoji: "🚀",
        name: "Solopreneur OS",
        price: "AED 249",
        why: "Revenue tracking, project pipeline, and quarterly goal planning in one Notion workspace. Build a development business that grows, not just a job that pays.",
      },
    ],
    relatedGuides: [
      { slug: "freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?", time: "8 min" },
      { slug: "freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include", time: "9 min" },
      { slug: "how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Rates Without Losing the Client", time: "6 min" },
      { slug: "late-payment-freelance-uae", title: "How to Chase Late Payments as a UAE Freelancer", time: "6 min" },
    ],
    testimonial: {
      quote: "I was tracking everything in a spreadsheet and WhatsApp. The CRM paid for itself in the first week — I found two invoices I forgot to send.",
      author: "James T.",
      role: "Freelance web developer, Abu Dhabi",
    },
    metaTitle: "Notion Templates & Tools for Freelance Developers in the UAE — SoloKit",
    metaDescription:
      "Client CRM, proposal prompts, and SOP templates for UAE freelance developers. Track projects, manage scope, and get paid on time. AED pricing.",
  },
  marketers: {
    slug: "marketers",
    name: "marketer",
    namePlural: "marketers",
    headline: "Tools Built for Freelance Marketers in the UAE",
    subheadline:
      "From content strategy to paid ads consulting — manage clients, proposals, and campaigns in one Notion system. AI prompts built for the work you actually do.",
    painPoints: [
      "Managing multiple client campaigns with no single source of truth",
      "Writing the same reporting email every month",
      "Tracking deliverables across WhatsApp, email, and Google Drive",
      "Getting clients to approve campaign briefs before you start",
      "Proving ROI and justifying your retainer each month",
    ],
    products: [
      {
        slug: "ai-prompt-pack-pro",
        emoji: "🤖",
        name: "AI Prompt Pack Pro",
        price: "AED 109",
        why: "200 prompts for campaign briefs, monthly reports, content calendars, ad copy, client pitches, and strategy decks. Write faster and spend more time on the work that actually matters.",
      },
      {
        slug: "freelancer-client-crm",
        emoji: "📋",
        name: "Freelancer Client CRM",
        price: "AED 175",
        why: "Client database, retainer tracking, invoice log, and campaign milestone tracking. Know exactly what each client is worth and when they last paid — without digging through emails.",
      },
      {
        slug: "solopreneur-os",
        emoji: "🚀",
        name: "Solopreneur OS",
        price: "AED 249",
        why: "Content calendar, revenue dashboard, and 90-day planning in one workspace. Build your marketing business, not just manage your clients'.",
      },
      {
        slug: "sop-starter-pack",
        emoji: "📝",
        name: "SOP Starter Pack",
        price: "AED 175",
        why: "Campaign kickoff SOP, monthly reporting process, client onboarding flow — documented once, used for every new client. Stop reinventing your process every time.",
      },
    ],
    relatedGuides: [
      { slug: "ai-prompts-for-freelancers", title: "How to Use AI to Do More Freelance Work in Less Time", time: "7 min" },
      { slug: "how-to-get-clients-linkedin-uae", title: "How to Get Clients on LinkedIn in the UAE", time: "7 min" },
      { slug: "freelance-proposal-template-uae", title: "Freelance Proposal Template UAE: Copy-Paste Structure", time: "6 min" },
      { slug: "how-to-scale-freelance-business-uae", title: "How to Scale Your Freelance Business to AED 100K/Month", time: "9 min" },
    ],
    testimonial: {
      quote: "The AI prompts for monthly client reports alone save me 3 hours a month. I generate a draft in 10 minutes and spend the rest of the time on analysis.",
      author: "Nadia R.",
      role: "Freelance digital marketer, Dubai",
    },
    metaTitle: "Notion Templates & AI Tools for Freelance Marketers in the UAE — SoloKit",
    metaDescription:
      "AI prompt packs, client CRM, and SOP templates for UAE freelance marketers. Write faster, manage campaigns, and retain clients. AED pricing.",
  },
  consultants: {
    slug: "consultants",
    name: "consultant",
    namePlural: "consultants",
    headline: "Tools Built for Independent Consultants in the UAE",
    subheadline:
      "Whether you're in strategy, finance, operations, or HR — manage your consulting business like a business. Notion systems and AI prompts built for high-value client work.",
    painPoints: [
      "Proposals that take 4+ hours to write for every new engagement",
      "No consistent onboarding process for new retainer clients",
      "Tracking deliverables and milestones across email threads",
      "Following up on outstanding invoices without sounding desperate",
      "Losing track of leads while delivering for current clients",
    ],
    products: [
      {
        slug: "solopreneur-os",
        emoji: "🚀",
        name: "Solopreneur OS",
        price: "AED 249",
        why: "Revenue tracking, goal planning, project pipeline, and weekly reviews — the full business operating system for a solo consultant who needs visibility across multiple engagements.",
      },
      {
        slug: "freelancer-client-crm",
        emoji: "📋",
        name: "Freelancer Client CRM",
        price: "AED 175",
        why: "Client database, proposal tracking, invoice log, and retainer management. Never lose a lead or forget a follow-up when you're busy delivering for current clients.",
      },
      {
        slug: "ai-prompt-pack-pro",
        emoji: "🤖",
        name: "AI Prompt Pack Pro",
        price: "AED 109",
        why: "Executive proposals, engagement scope documents, client status updates, and consulting framework summaries. Write high-quality deliverables faster than you thought possible.",
      },
      {
        slug: "sop-starter-pack",
        emoji: "📝",
        name: "SOP Starter Pack",
        price: "AED 175",
        why: "Standardized processes for client intake, discovery sessions, deliverable reviews, and project closeout. Consistent quality across every engagement — without starting from scratch.",
      },
    ],
    relatedGuides: [
      { slug: "freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include", time: "9 min" },
      { slug: "how-to-raise-rates-existing-clients-uae", title: "How to Raise Your Rates With Existing Clients", time: "7 min" },
      { slug: "client-onboarding-freelance-uae", title: "Client Onboarding Process for UAE Freelancers", time: "6 min" },
      { slug: "freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?", time: "8 min" },
    ],
    testimonial: {
      quote: "Replaced 5 different apps I was using. Everything I need for my consulting business is now in one Notion workspace — goals, clients, revenue, tasks.",
      author: "Faris H.",
      role: "Independent strategy consultant, Dubai",
    },
    metaTitle: "Notion Templates & Tools for Independent Consultants in the UAE — SoloKit",
    metaDescription:
      "CRM, AI prompt packs, and SOP templates for UAE-based independent consultants. Manage proposals, retainers, and deliverables in AED. Instant download.",
  },
  coaches: {
    slug: "coaches",
    name: "coach",
    namePlural: "coaches",
    headline: "Tools Built for Freelance Coaches & Trainers in the UAE",
    subheadline:
      "Manage clients, package your services, and grow your coaching practice in Dubai and Abu Dhabi. Systems that handle the admin so you can focus on the coaching.",
    painPoints: [
      "Losing track of where each coaching client is in their journey",
      "Manually scheduling, following up, and sending session notes",
      "No consistent intake process for new coaching clients",
      "Undercharging because you're pricing hourly instead of by outcome",
      "No system for following up with past clients for renewals",
    ],
    products: [
      {
        slug: "freelancer-client-crm",
        emoji: "📋",
        name: "Freelancer Client CRM",
        price: "AED 175",
        why: "Track every coaching client — session progress, invoices, renewal dates, and referral status — in one Notion workspace. No more lost clients or forgotten follow-ups.",
      },
      {
        slug: "ai-prompt-pack-pro",
        emoji: "🤖",
        name: "AI Prompt Pack Pro",
        price: "AED 109",
        why: "Coaching intake forms, session recap emails, package proposal templates, LinkedIn content about your methodology, and testimonial request emails — all pre-written and ready to customize.",
      },
      {
        slug: "solopreneur-os",
        emoji: "🚀",
        name: "Solopreneur OS",
        price: "AED 249",
        why: "Revenue dashboard, 90-day business goals, content calendar for thought leadership, and weekly reviews. Run your coaching practice like the business it is.",
      },
      {
        slug: "sop-starter-pack",
        emoji: "📝",
        name: "SOP Starter Pack",
        price: "AED 175",
        why: "Documented processes for new client intake, session prep, milestone check-ins, and program completion — consistent quality across every coaching relationship.",
      },
    ],
    relatedGuides: [
      { slug: "how-to-price-freelance-services-uae", title: "How to Price Your Freelance Services in the UAE", time: "6 min" },
      { slug: "get-freelance-clients-uae", title: "How to Get Freelance Clients in the UAE", time: "7 min" },
      { slug: "freelance-passive-income-uae", title: "How UAE Freelancers Build Passive Income", time: "8 min" },
      { slug: "how-to-get-clients-linkedin-uae", title: "How to Get Clients on LinkedIn in the UAE", time: "7 min" },
    ],
    testimonial: {
      quote: "The client CRM tracks where each coaching client is in their program. I know who's on session 3, who hasn't paid for the next block, and who's up for renewal.",
      author: "Lina M.",
      role: "Business coach, Dubai",
    },
    metaTitle: "Notion Templates & Tools for Freelance Coaches in the UAE — SoloKit",
    metaDescription:
      "Client CRM, AI prompts, and SOP templates for UAE-based coaches and trainers. Package your services, track clients, and grow your coaching business. AED pricing.",
  },
};

export function generateStaticParams() {
  return Object.keys(professions).map((p) => ({ profession: p }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ profession: string }>;
}): Promise<Metadata> {
  const { profession } = await params;
  const data = professions[profession];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/for/${profession}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
      url: `/for/${profession}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function ProfessionPage({
  params,
}: {
  params: Promise<{ profession: string }>;
}) {
  const { profession } = await params;
  const data = professions[profession];
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.metaTitle,
    description: data.metaDescription,
    url: `${siteUrl}/for/${profession}`,
    publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              For UAE Freelance {data.namePlural.charAt(0).toUpperCase() + data.namePlural.slice(1)}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
              {data.headline}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">{data.subheadline}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#products"
                className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors text-sm"
              >
                Browse all products →
              </Link>
              <Link
                href="/free"
                className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-gray-400 transition-colors text-sm"
              >
                10 free AI prompts
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="bg-gray-50 border-y border-gray-100 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
              Sound familiar?
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {data.painPoints.map((p) => (
                <div key={p} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <span className="text-orange-400 shrink-0 mt-0.5">⚠</span>
                  <p className="text-sm text-gray-600">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-10">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">The fix</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">
              Tools that solve these problems — built for UAE {data.namePlural}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {data.products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl shrink-0">{product.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-sm font-semibold text-gray-500">{product.price}</p>
                  </div>
                  {i === 0 && (
                    <span className="ml-auto text-xs font-semibold bg-gray-900 text-white px-2 py-1 rounded-full shrink-0">
                      Best for you
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{product.why}</p>
                <p className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                  View product →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-gray-950 text-white py-14">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xl font-medium leading-relaxed text-gray-200 mb-6">
              &ldquo;{data.testimonial.quote}&rdquo;
            </p>
            <p className="text-sm text-gray-500">
              — {data.testimonial.author}, {data.testimonial.role}
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-start gap-5 border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <span className="text-3xl shrink-0">🛡️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">30-Day Money-Back Guarantee</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                If any SoloKit product isn&apos;t right for you, email us within 30 days for a full refund.
                No questions asked, no forms to fill, no hassle. That&apos;s the deal.
              </p>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Free reading</p>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Guides for UAE freelance {data.namePlural}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group flex items-start justify-between gap-3 border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 leading-snug">
                  {guide.title}
                </p>
                <span className="text-xs text-gray-400 shrink-0 whitespace-nowrap mt-0.5">{guide.time}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-50 border-t border-gray-100 py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to run a more organized freelance {data.name} business?
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              One-time payment. Instant delivery. 30-day guarantee. AED pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#products"
                className="bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-700 transition-colors text-sm"
              >
                Browse all products →
              </Link>
              <Link
                href="/free"
                className="border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-xl hover:border-gray-400 transition-colors text-sm"
              >
                Try 10 free prompts first
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
