import Link from "next/link";
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

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-14">

        {/* Hero */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Affiliate Program</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
            Earn 30% on every SoloKit sale you send
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
            Recommend tools that actually help UAE freelancers and solopreneurs —
            and earn passive income every time someone buys.
          </p>
          <a
            href="mailto:mohamed.bushara@woccars.com?subject=SoloKit%20Affiliate%20Program&body=Hi%2C%20I%27d%20like%20to%20join%20the%20SoloKit%20affiliate%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-700 transition-colors"
          >
            Apply by email →
          </a>
          <p className="mt-3 text-sm text-gray-400">Free to join · Email us to get your affiliate link</p>
        </div>

        {/* How it works */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: "1", title: "Join for free", desc: "Sign up via our affiliate portal. Get your unique tracking link in minutes." },
              { step: "2", title: "Share your link", desc: "Post on LinkedIn, Instagram, newsletters, or wherever your audience is. Use our free promo materials." },
              { step: "3", title: "Earn 30%", desc: "Every time someone buys through your link, you earn 30% commission. Tracked for 60 days per click." },
            ].map((item) => (
              <div key={item.step} className="border border-gray-200 rounded-2xl p-5 text-center">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Earnings example */}
        <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-14">
          <h2 className="text-lg font-bold text-gray-900 mb-4">What 30% commission looks like</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-semibold text-gray-700">Product</th>
                  <th className="text-left py-2 font-semibold text-gray-700">Price</th>
                  <th className="text-left py-2 font-semibold text-gray-700">Your cut</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2">Freelancer Client CRM</td>
                  <td className="py-2">AED 175</td>
                  <td className="py-2 font-semibold text-gray-900">AED 52.50</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Solopreneur OS</td>
                  <td className="py-2">AED 249</td>
                  <td className="py-2 font-semibold text-gray-900">AED 74.70</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">AI Prompt Pack Pro</td>
                  <td className="py-2">AED 109</td>
                  <td className="py-2 font-semibold text-gray-900">AED 32.70</td>
                </tr>
                <tr>
                  <td className="py-2">SOP Starter Pack</td>
                  <td className="py-2">AED 175</td>
                  <td className="py-2 font-semibold text-gray-900">AED 52.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Refer 10 Solopreneur OS sales/month = AED 747/month passive income.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to start earning?</h2>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto text-sm">
            Join the SoloKit affiliate program. Share tools you believe in,
            earn 30% on every sale, get paid monthly.
          </p>
          <a
            href="mailto:mohamed.bushara@woccars.com?subject=SoloKit%20Affiliate%20Program&body=Hi%2C%20I%27d%20like%20to%20join%20the%20SoloKit%20affiliate%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-700 transition-colors"
          >
            Apply by email →
          </a>
          <p className="mt-4 text-xs text-gray-400">
            Questions? <a href="mailto:mohamed.bushara@woccars.com" className="underline hover:text-gray-600">Email us</a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
