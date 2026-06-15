import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-gray-900 hover:text-gray-700">
          SoloKit
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/#products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Products
          </Link>
          <Link href="/free" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Free Prompts
          </Link>
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link
            href="/#products"
            className="bg-gray-900 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Shop →
          </Link>
        </nav>
      </div>
    </header>
  );
}
