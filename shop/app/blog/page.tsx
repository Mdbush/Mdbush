import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — SoloKit",
  description: "Practical guides and resources for freelancers and solopreneurs in the UAE.",
};

const posts = [
  {
    slug: "best-notion-templates-freelancers-uae",
    title: "Best Notion Templates for Freelancers in the UAE (2026)",
    description:
      "Stop building your client tracker, invoice log, and project board from scratch. These Notion templates will save you 10+ hours this month.",
    date: "June 12, 2026",
    readTime: "5 min read",
    category: "Notion",
  },
  {
    slug: "ai-prompts-for-freelancers",
    title: "How to Use AI to Do More Freelance Work in Less Time",
    description:
      "The exact AI prompts I use for proposals, follow-ups, client emails, and content — plus the mistakes that waste your time with AI.",
    date: "June 10, 2026",
    readTime: "7 min read",
    category: "AI Tools",
  },
  {
    slug: "freelance-systems-uae",
    title: "Why Most Freelancers in the UAE Stay Stuck at AED 10K/Month",
    description:
      "It's not a skills problem. It's a systems problem. Here's the exact setup that lets solo operators scale without hiring.",
    date: "June 8, 2026",
    readTime: "6 min read",
    category: "Business",
  },
  {
    slug: "sop-templates-freelancers-online-business",
    title: "Best SOP Templates for Freelancers and Online Businesses (2026)",
    description:
      "Stop reinventing your client onboarding and content workflow every time. 50 SOPs that cover every repeatable process in your business.",
    date: "June 14, 2026",
    readTime: "5 min read",
    category: "SOPs & Systems",
  },
  {
    slug: "how-to-price-freelance-services-uae",
    title: "How to Price Your Freelance Services in the UAE (2026 Guide)",
    description:
      "Market rate benchmarks, value-based vs hourly pricing, and the most common mistakes UAE freelancers make when setting their rates.",
    date: "June 15, 2026",
    readTime: "6 min read",
    category: "Business",
  },
  {
    slug: "get-freelance-clients-uae",
    title: "How to Get Freelance Clients in the UAE (6 Strategies That Work)",
    description:
      "LinkedIn outreach, referral systems, local networking, and the platforms that pay well in Dubai and Abu Dhabi.",
    date: "June 15, 2026",
    readTime: "7 min read",
    category: "Business",
  },
  {
    slug: "freelance-proposal-tips-uae",
    title: "How to Write a Freelance Proposal That Wins Clients in the UAE",
    description:
      "Most proposals get ignored because they talk about the freelancer, not the client. Here's the structure that consistently wins projects in Dubai and Abu Dhabi.",
    date: "June 15, 2026",
    readTime: "7 min read",
    category: "Business",
  },
  {
    slug: "late-payment-freelance-uae",
    title: "How to Chase Late Payments as a Freelancer in the UAE",
    description:
      "Late invoices kill cash flow. Here's a 4-step follow-up sequence, prevention tactics, and legal options for UAE freelancers dealing with clients who don't pay on time.",
    date: "June 15, 2026",
    readTime: "6 min read",
    category: "Business",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-500">Guides and resources for freelancers and solopreneurs.</p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-gray-200">·</span>
                <span className="text-xs text-gray-400">{post.date}</span>
                <span className="text-gray-200">·</span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
              <p className="mt-3 text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
