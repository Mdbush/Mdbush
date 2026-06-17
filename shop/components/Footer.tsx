import Link from "next/link";

const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@solokit51",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/14eUJCRLtjM/?mibextid=wwXIfr",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/getsolokit",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-bushara-b46b50416",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

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
              <Link href="/blog" className="block hover:text-gray-900 transition-colors">Blog (353 UAE &amp; GCC guides)</Link>
              <Link href="/guides" className="block hover:text-gray-900 transition-colors">All Guides</Link>
              <Link href="/start" className="block hover:text-gray-900 transition-colors">Product Quiz</Link>
              <Link href="/bundle" className="block hover:text-gray-900 transition-colors">Complete Bundle</Link>
              <Link href="/affiliates" className="block hover:text-gray-900 transition-colors">Affiliates</Link>
              <Link href="/faq" className="block hover:text-gray-900 transition-colors">FAQ</Link>
              <Link href="/for/designers" className="block hover:text-gray-900 transition-colors">For Designers</Link>
              <Link href="/for/developers" className="block hover:text-gray-900 transition-colors">For Developers</Link>
              <Link href="/for/marketers" className="block hover:text-gray-900 transition-colors">For Marketers</Link>
              <Link href="/for/saudi-arabia" className="block hover:text-gray-900 transition-colors">For Saudi Arabia (KSA)</Link>
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
              <Link href="/contact" className="block hover:text-gray-900 transition-colors">Contact</Link>
              <Link href="/testimonials" className="block hover:text-gray-900 transition-colors">Testimonials</Link>
              <Link href="/privacy" className="block hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-gray-900 transition-colors">Terms of Service</Link>
              <Link href="/refund" className="block hover:text-gray-900 transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} SoloKit · Dubai, UAE</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
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
