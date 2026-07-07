import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program — SoloKit",
  description:
    "Earn 30% commission on every SoloKit sale you refer. Share tools you believe in and earn passive income. Instant payouts via Lemon Squeezy.",
};

const faqs = [
  { q: "How much do I earn?", a: "30% commission on every sale you refer. On a AED 175 product, that's AED 52.50 per sale — paid directly to you." },
  { q: "When do I get paid?", a: "Lemon Squeezy pays out on a 30-day rolling basis after each sale clears. Minimum payout is $50 USD. Payments via PayPal or bank transfer." },
  { q: "How do I track my referrals?", a: "You get a unique affiliate link and a dashboard showing clicks, conversions, and earnings in real time." },
  { q: "What do I need to join?", a: "Nothing special — just an email address and a PayPal or bank account for payouts. There's no approval process." },
  { q: "Can I promote on social media?", a: "Yes — you can promote on LinkedIn, Instagram, Twitter, YouTube, newsletters, or anywhere else. We provide promotional materials on request." },
  { q: "Is there a minimum traffic requirement?", a: "No. Whether you refer 1 sale a month or 100, the program is open to you." },
];

export default function AffiliatesPage() {
  return (
    <>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Dark gradient hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Affiliate Program</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Earn 30% on every SoloKit sale you send
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mb-8">
            Recommend tools that actually help UAE freelancers and solopreneurs —
            and earn passive income every time someone buys.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:md.a.bushara@gmail.com?subject=SoloKit%20Affiliate%20Program&body=Hi%2C%20I%27d%20like%20to%20join%20the%20SoloKit%20affiliate%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm text-center"
            >
              Apply by email →
            </a>
            <p className="text-sm text-gray-400 flex items-center">Free to join · No approval needed</p>
          </div>
        </div>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: "1", title: "Join for free", desc: "Sign up via our affiliate portal. Get your unique tracking link in minutes." },
              { step: "2", title: "Share your link", desc: "Post on LinkedIn, Instagram, newsletters, or wherever your audience is. Use our free promo materials." },
              { step: "3", title: "Earn 30%", desc: "Every time someone buys through your link, you earn 30% commission. Tracked for 60 days per click." },
            ].map((item) => (
              <div key={item.step} className="border border-gray-200 rounded-2xl p-5 text-center hover:border-emerald-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Earnings example */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What 30% commission looks like
          </h2>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-emerald-500 px-5 py-3 grid grid-cols-3">
              <span className="text-sm font-bold text-white">Product</span>
              <span className="text-sm font-bold text-white">Price</span>
              <span className="text-sm font-bold text-white">Your cut</span>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { name: "Freelancer Client CRM", price: "AED 175", cut: "AED 52.50" },
                { name: "Solopreneur OS", price: "AED 249", cut: "AED 74.70" },
                { name: "AI Prompt Pack Pro", price: "AED 109", cut: "AED 32.70" },
                { name: "SOP Starter Pack", price: "AED 175", cut: "AED 52.50" },
              ].map((row) => (
                <div key={row.name} className="px-5 py-3 grid grid-cols-3">
                  <span className="text-sm text-gray-700">{row.name}</span>
                  <span className="text-sm text-gray-700">{row.price}</span>
                  <span className="text-sm font-bold text-emerald-600">{row.cut}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 px-1">
            Refer 10 Solopreneur OS sales/month = AED 747/month passive income.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            FAQ
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-5 hover:border-emerald-200 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit Affiliates</span>
          <h3 className="text-2xl font-bold mb-3">Ready to start earning?</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
            Join the SoloKit affiliate program. Share tools you believe in,
            earn 30% on every sale, get paid monthly.
          </p>
          <a
            href="mailto:md.a.bushara@gmail.com?subject=SoloKit%20Affiliate%20Program&body=Hi%2C%20I%27d%20like%20to%20join%20the%20SoloKit%20affiliate%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            Apply by email →
          </a>
          <p className="mt-4 text-xs text-gray-500">
            Questions? <a href="mailto:md.a.bushara@gmail.com" className="underline hover:text-gray-300">Email us</a>
          </p>
        </div>

      </main>

      <Footer />
    </>
  );
}
