import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SoloKit — Get Help",
  description:
    "Questions about SoloKit products, orders, or custom work? Email us at hello@solokit.cloud — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SoloKit — Get Help",
    description: "Questions about products, orders, or custom work? We reply within 24 hours.",
    type: "website",
    url: "/contact",
  },
};

const quickAnswers = [
  {
    q: "I haven't received my product after purchase.",
    a: "Check your spam or junk folder first — delivery emails from Lemon Squeezy sometimes land there. If it's not there within 10 minutes, email us with your order number and we'll resend immediately.",
  },
  {
    q: "Do I need a paid Notion account?",
    a: "No — a free Notion account is all you need. Go to notion.so and create one if you don't have one, then duplicate the template link from your delivery email.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. We offer a 30-day money-back guarantee with no questions asked. Email us with your order number and we'll process the refund within 1 business day.",
  },
  {
    q: "Do you offer custom templates or bespoke work?",
    a: "Sometimes — it depends on the project. Email us with what you have in mind and we'll let you know if it's something we can help with.",
  },
  {
    q: "Can I use these templates with my team?",
    a: "SoloKit products come with a personal license for your own use. If you need a team or commercial license, email us and we can discuss options.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Contact</span>
          </nav>

          {/* Hero */}
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
            <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
            <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 -z-10 bg-dot-grid" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Support</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              Questions about products, orders, or custom work? We reply within 24 hours.
            </p>
          </div>

          {/* Before you email box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-amber-800 mb-2">Before you email</p>
            <p className="text-sm text-amber-700 leading-relaxed mb-3">
              Many questions are answered in our help pages — you might get a faster answer there:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/faq"
                className="text-xs font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-full transition-colors"
              >
                FAQ →
              </Link>
              <Link
                href="/refund"
                className="text-xs font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-full transition-colors"
              >
                Refund Policy →
              </Link>
            </div>
          </div>

          {/* Contact methods */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How to reach us
          </h2>

          {/* Email card */}
          <div className="border-2 border-emerald-200 bg-emerald-50 rounded-2xl p-6 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <a
                  href="mailto:hello@solokit.cloud"
                  className="text-lg font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  hello@solokit.cloud
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  The best way to reach us. Include your order number for order-related questions.
                </p>
              </div>
            </div>
          </div>

          {/* Response time card */}
          <div className="border border-gray-200 rounded-xl p-5 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Response time</p>
                <p className="text-sm text-gray-600">We reply within 24 hours, Mon–Fri (Dubai time, GST+4).</p>
                <p className="text-xs text-gray-400 mt-1">Weekend emails are answered first thing Monday.</p>
              </div>
            </div>
          </div>

          {/* WhatsApp card */}
          <div className="border border-gray-200 rounded-xl p-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                <p className="text-sm text-gray-600 mb-2">
                  Based in the UAE? You can also reach us on WhatsApp at{" "}
                  <span className="font-semibold text-gray-800">+971</span>.
                </p>
                <a
                  href="https://wa.me/971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Quick answers */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Common questions
          </h2>
          <div className="space-y-3 mb-4">
            {quickAnswers.map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-xl p-5 hover:border-emerald-200 transition-colors">
                <p className="font-semibold text-gray-900 text-sm mb-2">{item.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            See all FAQs →
          </Link>

          {/* What to include when emailing */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What to include in your email
          </h2>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              To help us reply faster, include the following if relevant:
            </p>
            <div className="space-y-2">
              {[
                "Your order number (from the Lemon Squeezy confirmation email)",
                "Which product you purchased",
                "A brief description of the issue or question",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 shrink-0">→</span>
                  <p className="text-sm text-gray-500">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Ready to explore SoloKit?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              Notion templates and AI prompts for UAE freelancers. 30-day money-back guarantee.
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
