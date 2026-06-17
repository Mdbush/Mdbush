import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — SoloKit",
  description:
    "The terms governing use of SoloKit digital products and services. Covers digital delivery, refunds, licensing, and UAE governing law.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — SoloKit",
    description: "The rules governing use of SoloKit products and services.",
    type: "website",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Terms of Service</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Legal</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Terms of Service</h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              The rules governing use of SoloKit products and services.
            </p>
            <p className="text-gray-500 text-xs mt-4">Last updated: June 2026</p>
          </div>

          {/* Intro */}
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            By purchasing from or using solokit.cloud, you agree to these Terms of Service. Please read them carefully.
            If you have questions, email us at{" "}
            <a href="mailto:hello@solokit.cloud" className="text-emerald-600 underline">hello@solokit.cloud</a>{" "}
            before purchasing.
          </p>

          {/* Section: Products */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Products &amp; digital delivery
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Digital products only</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                All SoloKit products are digital downloads. There is no physical delivery. After purchase,
                you will receive an email from Lemon Squeezy with your download link or access instructions,
                typically within seconds of payment.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">No subscription</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                All products are sold as one-time purchases. You pay once and own the product forever.
                There are no recurring charges or subscription fees.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Product access</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Notion templates are delivered as shareable links you duplicate into your own Notion workspace.
                You are responsible for having or creating a free Notion account. AI Prompt Packs are delivered
                as downloadable files. SOP Packs include both Notion and Google Docs access.
              </p>
            </div>
          </div>

          {/* Section: Payment */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Payment
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Payment processor</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                All payments are processed securely by Lemon Squeezy. SoloKit never stores your payment
                card details. Lemon Squeezy is PCI-DSS compliant and accepts Visa, Mastercard, American Express,
                Apple Pay, and Google Pay.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Currency</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Prices are displayed in AED (UAE Dirhams). Your bank may apply foreign currency conversion
                fees depending on your location and payment method.
              </p>
            </div>
          </div>

          {/* Section: Refunds */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            30-day refund policy
          </h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-4">
            <p className="text-sm font-semibold text-emerald-900 mb-2">Full refund within 30 days, no questions asked.</p>
            <p className="text-sm text-emerald-800 leading-relaxed">
              If you are not satisfied with any SoloKit product for any reason, email us at hello@solokit.cloud
              within 30 days of purchase with your order number and we will issue a full refund. No explanation required.
              See our full{" "}
              <Link href="/refund" className="underline hover:text-emerald-700">Refund Policy</Link>{" "}
              for details.
            </p>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Refund requests received after 30 days of purchase cannot be processed. Refunds are issued to
            the original payment method within 5–7 business days.
          </p>

          {/* Section: Prohibited uses */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Prohibited uses
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            When you purchase a SoloKit product, you agree not to:
          </p>
          <div className="space-y-2">
            {[
              "Resell, redistribute, or transfer the product to any third party",
              "Share, publish, or upload the product files publicly (e.g., on a public Notion page, file sharing site, or social media)",
              "Claim the product as your own creation or remove SoloKit branding",
              "Use the product to create competing products for resale",
              "Provide the product as part of a bundle, course, or paid service without written permission",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-red-100 bg-red-50 rounded-xl p-4">
                <span className="text-red-400 font-bold text-sm mt-0.5 shrink-0">✕</span>
                <p className="text-sm text-red-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Violations may result in termination of your license and legal action. If you are unsure whether
            a particular use is permitted, email us first.
          </p>

          {/* Section: Intellectual property */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Intellectual property &amp; license
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Personal license</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Purchasing a SoloKit product grants you a personal, non-exclusive, non-transferable license
                to use the product for your own freelance or business use. You may customise and edit the
                product for your own use. You may not resell or redistribute it.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Ownership</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                All SoloKit products, including templates, content, design, and prompts, remain the intellectual
                property of SoloKit. Purchasing a product does not transfer ownership or copyright.
              </p>
            </div>
          </div>

          {/* Section: Liability */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Limitation of liability
          </h2>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-500 leading-relaxed">
              SoloKit products are provided &ldquo;as is&rdquo; without warranty of any kind. SoloKit is not liable for
              any indirect, incidental, or consequential damages arising from the use or inability to use
              our products. Our total liability to you will not exceed the amount you paid for the product
              in question. These limitations do not affect your statutory consumer rights under UAE law.
            </p>
          </div>

          {/* Section: Governing law */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Governing law
          </h2>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-500 leading-relaxed">
              These Terms of Service are governed by the laws of the United Arab Emirates. Any disputes
              arising from these terms or your use of SoloKit products shall be subject to the exclusive
              jurisdiction of the courts of Dubai, UAE.
            </p>
          </div>

          {/* Section: Changes */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Changes to these terms
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We may update these Terms of Service from time to time. Material changes will be noted with
            an updated &ldquo;Last updated&rdquo; date at the top of this page. Continued use of solokit.cloud
            after changes constitutes acceptance of the revised terms.
          </p>

          {/* Contact */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-8">
            <p className="text-sm font-semibold text-gray-900 mb-2">Questions about these terms?</p>
            <p className="text-sm text-gray-500 mb-3">
              Email us and we&apos;ll respond within 24 hours.
            </p>
            <a
              href="mailto:hello@solokit.cloud"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 underline"
            >
              hello@solokit.cloud
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Browse our products</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              Notion templates and AI prompts for UAE freelancers. 30-day money-back guarantee on everything.
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
