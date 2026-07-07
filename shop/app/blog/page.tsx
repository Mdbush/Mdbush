import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Free Guides for UAE & GCC Freelancers — SoloKit",
  description: "400+ free guides for freelancers and solopreneurs across the UAE, Saudi Arabia, and GCC. Visa, tax, rates, proposals, AI tools, contracts, and more. No fluff.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Free Guides for UAE & GCC Freelancers — SoloKit Blog",
    description: "400+ practical guides covering everything UAE and GCC freelancers need. No fluff.",
    url: "/blog",
    type: "website",
  },
};

const featured = [
  "freelance-visa-uae",
  "freelance-rate-calculator-uae",
  "freelance-tax-uae",
];

type Props = { searchParams: Promise<{ category?: string }> };

export default async function BlogPage({ searchParams }: Props) {
  const { category: activeCategory } = await searchParams;

  const allCategories = Array.from(new Set(posts.map((p) => p.category))).sort();

  const featuredPosts = posts.filter((p) => featured.includes(p.slug));
  const otherPosts = posts.filter((p) => !featured.includes(p.slug));
  const filteredPosts = activeCategory
    ? otherPosts.filter((p) => p.category === activeCategory)
    : otherPosts;

  return (
    <>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white rounded-2xl px-6 py-12 mb-10 text-center">
          <div className="hero-glow animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 bg-dot-grid" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 bg-white/10 ring-1 ring-white/15 backdrop-blur text-white text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              🇦🇪 400+ free guides
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              The <span className="text-gradient">SoloKit</span> Blog
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
              Practical guides for freelancers and solopreneurs across the UAE, Saudi Arabia &amp; GCC. No fluff.
            </p>
          </div>
        </div>

        {/* Featured — only shown when no category filter */}
        {!activeCategory && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Most read</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden border border-gray-200 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-200 bg-gray-50"
                >
                  <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-sm font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gray-500">{post.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/blog"
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              !activeCategory
                ? "bg-emerald-500 text-white border-emerald-500"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            All ({posts.length})
          </Link>
          {allCategories.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {cat} ({count})
              </Link>
            );
          })}
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {post.category}
                </span>
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

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-400 py-12">No articles in this category yet.</p>
        )}
      </main>

      <Footer />
    </>
  );
}
