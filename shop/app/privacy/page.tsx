import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — SoloKit",
  description:
    "How SoloKit collects, uses, and protects your personal data. UAE-compliant privacy policy covering data collection, third parties, cookies, and your rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — SoloKit",
    description: "How SoloKit collects, uses, and protects your data.",
    type: "website",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Privacy Policy</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Legal</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              How SoloKit collects, uses, and protects your data.
            </p>
            <p className="text-gray-500 text-xs mt-4">Last updated: June 2026</p>
          </div>

          {/* Intro */}
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            SoloKit (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates solokit.cloud. This Privacy Policy explains
            what personal data we collect, how we use it, and your rights regarding that data.
            We take your privacy seriously and only collect what we need to operate SoloKit.
          </p>

          {/* Section: Data collected */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What data we collect
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Purchase information</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                When you buy a product, your name, email address, and payment method are collected by Lemon Squeezy
                (our payment processor). SoloKit receives your name and email address so we can deliver your
                product and provide customer support. We do not store your card details.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Email subscriptions</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                If you subscribe to our newsletter or download a free resource, we collect your email address
                via Brevo (our email platform). You can unsubscribe at any time using the link in any email.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-2">Usage data</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                We use Vercel Analytics to understand how visitors use solokit.cloud. This is privacy-preserving
                analytics — it does not use cookies, does not track individuals across sites, and does not
                collect personal information. We see aggregate data such as page views and country.
              </p>
            </div>
          </div>

          {/* Section: How it's used */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How we use your data
          </h2>
          <div className="space-y-3">
            {[
              { num: "1", title: "Order fulfillment", desc: "We use your email to send your product download link immediately after purchase." },
              { num: "2", title: "Customer support", desc: "If you contact us about an order or product issue, we use your name and email to respond." },
              { num: "3", title: "Email communications", desc: "If you subscribed, we send occasional product updates, new releases, and freelance tips. You can unsubscribe at any time." },
              { num: "4", title: "Site improvement", desc: "Aggregate analytics help us understand what content is useful and improve the site." },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4 border border-gray-200 rounded-xl p-5">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Third parties */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Third-party services
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            SoloKit uses a small number of trusted third-party services to operate. Each has its own privacy policy.
          </p>
          <div className="space-y-3">
            {[
              {
                name: "Lemon Squeezy",
                role: "Payment processing & product delivery",
                link: "https://www.lemonsqueezy.com/privacy",
                desc: "Handles checkout, payment processing, and sends your product delivery email. PCI-DSS compliant.",
              },
              {
                name: "Brevo",
                role: "Email marketing",
                link: "https://www.brevo.com/legal/privacypolicy/",
                desc: "Manages our email subscriber list and sends newsletters. GDPR compliant.",
              },
              {
                name: "Vercel",
                role: "Website hosting & analytics",
                link: "https://vercel.com/legal/privacy-policy",
                desc: "Hosts solokit.cloud and provides privacy-preserving, cookie-free analytics.",
              },
            ].map((service) => (
              <div key={service.name} className="border border-gray-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{service.name}</p>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{service.role}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">{service.desc}</p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-600 hover:text-emerald-700 underline"
                >
                  Privacy policy →
                </a>
              </div>
            ))}
          </div>

          {/* Section: Cookies */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Cookies &amp; tracking
          </h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-emerald-900 mb-2">We do not use tracking cookies.</p>
            <p className="text-sm text-emerald-800 leading-relaxed">
              SoloKit uses Vercel Analytics, which is cookie-free and does not track you across other websites.
              We do not use Google Analytics, Facebook Pixel, or any advertising tracking. The only functional
              cookies on this site are those set by Lemon Squeezy during the checkout process.
            </p>
          </div>

          {/* Section: Data retention */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Data retention
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-1">Customer purchase records</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Purchase records (name and email) are retained for 3 years to support customer service,
                refund requests, and legal/accounting requirements. After 3 years, they are deleted.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 text-sm mb-1">Email subscribers</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Email addresses are kept until you unsubscribe. Every email includes an unsubscribe link.
                You can also email us at hello@solokit.cloud to be removed from all communications.
              </p>
            </div>
          </div>

          {/* Section: Your rights */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Your rights
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            You have the right to access, correct, or delete your personal data at any time. To exercise any of these rights:
          </p>
          <div className="space-y-3">
            {[
              { right: "Access your data", desc: "Email us and we will confirm what data we hold about you." },
              { right: "Delete your data", desc: "Request deletion of your personal data. We will action this within 14 days." },
              { right: "Correct your data", desc: "If any information we hold is inaccurate, we will correct it on request." },
              { right: "Unsubscribe", desc: "Use the unsubscribe link in any email, or email us directly." },
            ].map((item) => (
              <div key={item.right} className="flex items-start gap-3 border border-gray-200 rounded-xl p-4">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0"></span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.right}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Contact */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Contact &amp; questions
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              For any privacy-related questions, data requests, or concerns, contact us at:
            </p>
            <a
              href="mailto:hello@solokit.cloud"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 underline"
            >
              hello@solokit.cloud
            </a>
            <p className="text-xs text-gray-400 mt-3">
              SoloKit · Dubai, United Arab Emirates
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-6 leading-relaxed">
            This policy may be updated from time to time. Material changes will be noted at the top of this page
            with an updated &ldquo;Last updated&rdquo; date. Continued use of solokit.cloud after changes constitutes
            acceptance of the revised policy.
          </p>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Ready to explore SoloKit?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              Notion templates and AI prompts built for UAE freelancers. One-time payment, instant delivery.
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
