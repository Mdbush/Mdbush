import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-6xl mb-6">🔍</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
          <p className="text-gray-500">
            This page doesn&apos;t exist or has moved. Here&apos;s where you can go instead:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/#products", label: "Browse all products", desc: "Notion templates, AI prompts, SOPs", emoji: "🛍️" },
            { href: "/free", label: "10 free AI prompts", desc: "No email required", emoji: "🎁" },
            { href: "/blog", label: "Free guides", desc: "300 articles for UAE freelancers", emoji: "📚" },
            { href: "/start", label: "Product quiz", desc: "Find what's right for you in 30 sec", emoji: "🎯" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all flex items-start gap-4"
            >
              <span className="text-2xl shrink-0">{item.emoji}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            ← Back to homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
