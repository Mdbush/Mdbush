import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — 65 Free Guides for UAE Freelancers — SoloKit",
  description: "101 free guides for freelancers and solopreneurs in the UAE. Visa, tax, rates, proposals, AI tools, contracts, and more. No fluff.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Free Guides for UAE Freelancers — SoloKit Blog",
    description: "339 practical guides covering everything UAE freelancers need. No fluff.",
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
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-500">Practical guides for freelancers and solopreneurs in the UAE. No fluff.</p>
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
                  className="group border border-gray-200 rounded-2xl p-5 hover:border-gray-400 hover:shadow-sm transition-all bg-gray-50"
                >
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
                ? "bg-gray-900 text-white border-gray-900"
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
                    ? "bg-gray-900 text-white border-gray-900"
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
              className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-sm transition-all"
            >
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
