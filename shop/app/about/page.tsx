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

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-14">
        {/* Founder section */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">About</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Built by a UAE freelancer, for UAE freelancers</h1>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center shrink-0 text-white font-bold text-xl">
                M
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Mohamed Bushara</p>
                <p className="text-xs text-gray-500 mb-3">Founder, SoloKit · Dubai, UAE</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  "I spent years freelancing in Dubai while managing everything from a mess of spreadsheets,
                  WhatsApp threads, and sticky notes. I built SoloKit because every tool I tried was either
                  built for the US market, too complex, or too generic. These are the systems I actually use."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { stat: "500+", label: "customers" },
              { stat: "4", label: "ready-to-use products" },
              { stat: "30-day", label: "money-back guarantee" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center border border-gray-100 rounded-xl py-4 px-2">
                <p className="text-2xl font-bold text-gray-900">{stat}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Why SoloKit exists</h2>

          <p>
            Most productivity tools are built for teams. Most freelance advice is built for the US or UK market.
            Most Notion templates are gorgeous but take 6 hours to figure out.
          </p>

          <p>
            SoloKit builds tools that work in the UAE context — AED pricing, free zone considerations,
            client communication styles, and the reality that you're doing everything yourself.
          </p>

          <h2 className="text-xl font-bold text-gray-900">What we build</h2>

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
              <div key={item.label} className="border border-gray-200 rounded-xl p-4">
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-semibold text-gray-900 mt-2 mb-1 text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900">Who this is for</h2>

          <p>
            Designers, developers, consultants, marketers, coaches — any solo operator in Dubai, Abu Dhabi,
            or across the Gulf who wants to run a more professional, more profitable business without
            the overhead of enterprise software.
          </p>

          <p>
            If you&apos;re billing AED 10K–80K/month and your back-office is still a mess of WhatsApp messages
            and spreadsheets — this is for you.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Our guarantee</h2>

          <p>
            Every product comes with a 30-day money-back guarantee. No questions asked, no forms to fill.
            Email within 30 days and you get a full refund.
          </p>

          <p>
            We stand behind everything because we use these systems ourselves daily.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mt-8">
            <p className="text-sm font-semibold text-gray-900 mb-2">Questions or feedback?</p>
            <p className="text-sm text-gray-500 mb-1">
              Email:{" "}
              <a href="mailto:md.a.bushara@gmail.com" className="text-gray-900 underline hover:text-gray-600">
                md.a.bushara@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500">We respond within 24 hours.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6">
          <Link href="/#products" className="text-sm text-gray-900 font-semibold hover:text-gray-600 transition-colors">
            Browse all products →
          </Link>
          <Link href="/free" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Get 10 free prompts
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
