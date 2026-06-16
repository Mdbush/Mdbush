import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SoloKit — Digital Tools for UAE Freelancers",
  description:
    "SoloKit builds ready-to-use Notion templates, AI prompt packs, and SOPs for freelancers and solopreneurs in the UAE and Gulf region.",
  alternates: { canonical: "/about" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SoloKit",
  url: siteUrl,
  description: "Ready-to-use Notion templates, AI prompt packs, and SOPs for freelancers and solopreneurs in the UAE.",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Mohamed Bushara" },
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  contactPoint: { "@type": "ContactPoint", email: "md.a.bushara@gmail.com", contactType: "customer service" },
  sameAs: [],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Dark gradient hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">About SoloKit</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Built by a UAE freelancer, for UAE freelancers
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mb-8">
            Every tool in SoloKit was built from years of freelancing in Dubai — where the market is different,
            the clients are different, and the existing tools don&apos;t quite fit.
          </p>

          {/* Founder card inside hero */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-900 border-2 border-emerald-500 flex items-center justify-center shrink-0 text-emerald-400 font-bold text-lg">
                M
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Mohamed Bushara</p>
                <p className="text-xs text-gray-400 mb-3">Founder, SoloKit · Dubai, UAE</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  &ldquo;I spent years freelancing in Dubai while managing everything from a mess of spreadsheets,
                  WhatsApp threads, and sticky notes. I built SoloKit because every tool I tried was either
                  built for the US market, too complex, or too generic. These are the systems I actually use.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { stat: "500+", label: "customers" },
            { stat: "4", label: "ready-to-use products" },
            { stat: "30-day", label: "money-back guarantee" },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center border border-gray-100 rounded-xl py-4 px-2 bg-white shadow-sm">
              <p className="text-2xl font-bold text-gray-900">{stat}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Why SoloKit exists
          </h2>

          <p>
            Most productivity tools are built for teams. Most freelance advice is built for the US or UK market.
            Most Notion templates are gorgeous but take 6 hours to figure out.
          </p>

          <p>
            SoloKit builds tools that work in the UAE context — AED pricing, free zone considerations,
            client communication styles, and the reality that you&apos;re doing everything yourself.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What we build
          </h2>

          <p>
            Every product is built for one specific job. Not a course. Not a bloated platform. The actual
            tool — ready to use within 10 minutes of buying.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { emoji: "📋", label: "Notion Templates", desc: "Client CRMs, business OS, project trackers. Duplicate once, use forever." },
              { emoji: "🤖", label: "AI Prompt Packs", desc: "200 tested prompts that produce real output. Works with ChatGPT, Claude, Gemini." },
              { emoji: "📝", label: "SOPs & Systems", desc: "Standard operating procedures for onboarding, content, finance, and delegation." },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all">
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-semibold text-gray-900 mt-2 mb-1 text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Who this is for
          </h2>

          <p>
            Designers, developers, consultants, marketers, coaches — any solo operator in Dubai, Abu Dhabi,
            or across the Gulf who wants to run a more professional, more profitable business without
            the overhead of enterprise software.
          </p>

          <p>
            If you&apos;re billing AED 10K–80K/month and your back-office is still a mess of WhatsApp messages
            and spreadsheets — this is for you.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Our guarantee
          </h2>

          <p>
            Every product comes with a 30-day money-back guarantee. No questions asked, no forms to fill.
            Email within 30 days and you get a full refund.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mt-4">
            <p className="text-sm font-bold text-emerald-800 mb-2">Questions or feedback?</p>
            <p className="text-sm text-emerald-800 mb-1">
              Email:{" "}
              <a href="mailto:md.a.bushara@gmail.com" className="underline hover:text-emerald-600">
                md.a.bushara@gmail.com
              </a>
            </p>
            <p className="text-sm text-emerald-800">We respond within 24 hours.</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
          <h3 className="text-2xl font-bold mb-3">Ready to build a better freelance business?</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
            One-time payment. Instant delivery. 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#products" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Browse all products →
            </Link>
            <Link href="/free" className="inline-block border border-white/20 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm">
              10 free prompts first
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
