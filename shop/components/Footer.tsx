import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Products</p>
            <div className="space-y-2 text-sm text-gray-500">
              <Link href="/products/freelancer-client-crm" className="block hover:text-gray-900 transition-colors">Freelancer CRM</Link>
              <Link href="/products/solopreneur-os" className="block hover:text-gray-900 transition-colors">Solopreneur OS</Link>
              <Link href="/products/ai-prompt-pack-pro" className="block hover:text-gray-900 transition-colors">AI Prompt Pack</Link>
              <Link href="/products/sop-starter-pack" className="block hover:text-gray-900 transition-colors">SOP Starter Pack</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Resources</p>
            <div className="space-y-2 text-sm text-gray-500">
              <Link href="/free" className="block hover:text-gray-900 transition-colors">Free Prompts</Link>
              <Link href="/blog" className="block hover:text-gray-900 transition-colors">Blog (336 guides)</Link>
              <Link href="/guides" className="block hover:text-gray-900 transition-colors">All Guides</Link>
              <Link href="/start" className="block hover:text-gray-900 transition-colors">Product Quiz</Link>
              <Link href="/bundle" className="block hover:text-gray-900 transition-colors">Complete Bundle</Link>
              <Link href="/affiliates" className="block hover:text-gray-900 transition-colors">Affiliates</Link>
              <Link href="/faq" className="block hover:text-gray-900 transition-colors">FAQ</Link>
              <Link href="/for/designers" className="block hover:text-gray-900 transition-colors">For Designers</Link>
              <Link href="/for/developers" className="block hover:text-gray-900 transition-colors">For Developers</Link>
              <Link href="/for/marketers" className="block hover:text-gray-900 transition-colors">For Marketers</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Top guides</p>
            <div className="space-y-2 text-sm text-gray-500">
              <Link href="/blog/freelance-visa-uae" className="block hover:text-gray-900 transition-colors">Freelance Visa UAE</Link>
              <Link href="/blog/freelance-tax-uae" className="block hover:text-gray-900 transition-colors">UAE Tax for Freelancers</Link>
              <Link href="/blog/freelance-rate-calculator-uae" className="block hover:text-gray-900 transition-colors">Rate Calculator</Link>
              <Link href="/blog/how-to-become-freelancer-uae" className="block hover:text-gray-900 transition-colors">How to Start Freelancing</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">SoloKit</p>
            <div className="space-y-2 text-sm text-gray-500">
              <Link href="/about" className="block hover:text-gray-900 transition-colors">About</Link>
              <a href="mailto:md.a.bushara@gmail.com" className="block hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} SoloKit · Dubai, UAE</p>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>🔒 Secure checkout</span>
            <span>⚡ Instant delivery</span>
            <span>🛡️ 30-day guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
