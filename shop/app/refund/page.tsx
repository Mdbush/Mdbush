import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — SoloKit",
  description:
    "SoloKit offers a 30-day money-back guarantee on all products. Not happy? Email us and get a full refund. No questions asked.",
  alternates: { canonical: "/refund" },
  openGraph: {
    title: "Refund Policy — SoloKit",
    description: "Not happy? Get a full refund within 30 days. No questions asked.",
    type: "website",
    url: "/refund",
  },
};

export default function RefundPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Refund Policy</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Legal</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">30-Day Money-Back Guarantee</h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              Not happy? Get a full refund within 30 days. No questions asked.
            </p>
          </div>

          {/* The Promise */}
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8 mb-10 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-xl font-bold text-emerald-900 mb-3">Our promise to you</h2>
            <p className="text-emerald-800 text-sm leading-relaxed max-w-lg mx-auto">
              Every SoloKit product comes with a full 30-day money-back guarantee. If you buy something
              and it&apos;s not right for you — for any reason at all — just email us and we&apos;ll refund
              every dirham. No forms to fill. No hoops to jump through.
            </p>
          </div>

          {/* Section: The guarantee */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What the guarantee covers
          </h2>
          <div className="space-y-3">
            {[
              {
                icon: "✓",
                title: "Any SoloKit product",
                desc: "The Freelancer Client CRM, Solopreneur OS, AI Prompt Pack Pro, SOP Starter Pack — all covered.",
              },
              {
                icon: "✓",
                title: "Any reason",
                desc: "It wasn't what you expected. You bought the wrong product. You changed your mind. You don't need to explain.",
              },
              {
                icon: "✓",
                title: "Full refund",
                desc: "100% of what you paid, no deductions, no restocking fees.",
              },
              {
                icon: "✓",
                title: "Within 30 days",
                desc: "Your 30-day window starts from the date of your purchase confirmation email.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 border border-emerald-200 bg-emerald-50/30 rounded-xl p-5">
                <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                  {item.icon}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section: How to request */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How to request a refund
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            It takes less than 2 minutes. Here&apos;s all you need to do:
          </p>
          <div className="space-y-3">
            {[
              {
                num: "1",
                title: "Find your order number",
                desc: 'Check your purchase confirmation email from Lemon Squeezy. Your order number looks like "LS-XXXXXX".',
              },
              {
                num: "2",
                title: "Email us",
                desc: "Send an email to hello@solokit.cloud with your order number in the subject line. That's it — no explanation needed.",
              },
              {
                num: "3",
                title: "Receive your refund",
                desc: "We'll process your refund within 1 business day. The money returns to your original payment method within 5–7 business days.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                  {step.num}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{step.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Email CTA */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6 text-center">
            <p className="text-sm text-gray-600 mb-3">Ready to request a refund?</p>
            <a
              href="mailto:hello@solokit.cloud?subject=Refund Request"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Email us now →
            </a>
            <p className="text-xs text-gray-400 mt-3">We reply within 24 hours, Mon–Fri</p>
          </div>

          {/* Section: What happens after */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What happens after you request
          </h2>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-sm mt-0.5 shrink-0">→</span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We process the refund in Lemon Squeezy, usually within 1 business day of receiving your email.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-sm mt-0.5 shrink-0">→</span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lemon Squeezy will send you a confirmation email once the refund has been issued.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-sm mt-0.5 shrink-0">→</span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The refund will appear on your original payment method within 5–7 business days,
                  depending on your bank or card issuer.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Edge cases */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            A few things to know
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">After 30 days</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                We can only process refunds within 30 days of purchase. If you&apos;re past this window and have
                a genuine issue, email us anyway — we&apos;ll do what we can to help.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Bundle purchases</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                If you purchased the Complete Bundle, a refund will cover the full bundle price.
                Individual products within a bundle cannot be refunded separately.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Missing delivery</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Didn&apos;t receive your product after purchase? Check your spam folder first. If it&apos;s not there,
                email us at hello@solokit.cloud and we&apos;ll resend it immediately — this is not a refund situation,
                just a delivery issue we&apos;ll sort out straight away.
              </p>
            </div>
          </div>

          {/* Section: Why we offer this */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Why we offer this guarantee
          </h2>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              We built SoloKit because we know how much it matters to spend money on tools that actually work.
              Buying a digital product can feel like a gamble — you can&apos;t try before you buy. The 30-day
              guarantee removes that risk completely. We&apos;re confident in our products, and we want you to feel
              the same confidence when you buy.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              The guarantee is a commitment, not a loophole. We honour it, no questions asked.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Risk-free</span>
            <h3 className="text-2xl font-bold mb-3">Try SoloKit — completely risk free</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              30-day money-back guarantee on every product. One-time payment. Instant delivery.
            </p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
