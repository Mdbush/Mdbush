import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SoloKit — Digital Tools for UAE Freelancers",
  description:
    "SoloKit builds ready-to-use Notion templates, AI prompt packs, and SOPs for freelancers and solopreneurs in the UAE and Gulf region.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-10">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">About</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Built for people who do the work</h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            SoloKit exists because the tools freelancers and solopreneurs need are either buried in bloated
            software or scattered across 12 different apps. We built the ones we wished existed.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-gray-900">What we build</h2>

          <p>
            Every product in the SoloKit store is built for one specific job. Not a generic template you
            spend hours adapting. Not a course that teaches you to do the thing. The actual thing — ready
            to use within 10 minutes of buying.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {[
              { emoji: "📋", label: "Notion Templates", desc: "Client CRMs, business operating systems, and project trackers. Duplicate once, use forever." },
              { emoji: "🤖", label: "AI Prompt Packs", desc: "Tested prompts that produce real output. No more generic AI responses." },
              { emoji: "📝", label: "SOPs & Systems", desc: "Standard Operating Procedures for client onboarding, content, finance, and team management." },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-xl p-4">
                <span className="text-2xl">{item.emoji}</span>
                <p className="font-semibold text-gray-900 mt-2 mb-1">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900">Who this is for</h2>

          <p>
            SoloKit is built specifically for freelancers and solopreneurs in the UAE and Gulf region.
            The pricing is in AED. The examples and use cases are built around the reality of
            running a solo service business in the region.
          </p>

          <p>
            If you're a designer, developer, consultant, marketer, coach, or any other kind of solo operator
            in Dubai, Abu Dhabi, or elsewhere in the Gulf — this was made for you.
          </p>

          <h2 className="text-xl font-bold text-gray-900">Our guarantee</h2>

          <p>
            Every product comes with a 30-day money-back guarantee. No questions, no forms, no hoops.
            Email us within 30 days and you'll get a full refund.
          </p>

          <p>
            We stand behind everything we sell because we use these systems ourselves.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mt-8">
            <p className="text-sm font-semibold text-gray-900 mb-2">Questions or feedback?</p>
            <p className="text-sm text-gray-500 mb-1">
              Email: <a href="mailto:mohamed.bushara@woccars.com" className="text-gray-900 underline hover:text-gray-600">
                mohamed.bushara@woccars.com
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
