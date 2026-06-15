import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} SoloKit. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/free" className="hover:text-gray-900 transition-colors">Free Prompts</Link>
            <a href="mailto:mohamed.bushara@woccars.com" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-400">
            <span>🔒 Secure checkout</span>
            <span>·</span>
            <span>⚡ Instant delivery</span>
            <span>·</span>
            <span>🛡️ 30-day guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
