import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-gray-900 hover:text-gray-700">
          DigitalTools
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Products
          </Link>
          <Link href="/#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
