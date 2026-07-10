import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — SoloKit",
  robots: { index: false, follow: false },
};

const sections = [
  {
    heading: "Content Creation",
    items: [
      {
        href: "/tiktok",
        title: "TikTok Scripts",
        desc: "20 ready-to-record video scripts for UAE freelancer content. Each takes 5-10 min to record.",
        badge: "20 scripts",
      },
      {
        href: "/instagram",
        title: "Instagram Content",
        desc: "10 Reels + 3 static posts with full captions, slide outlines, and hashtags.",
        badge: "13 posts",
      },
      {
        href: "/linkedin",
        title: "LinkedIn Posts",
        desc: "12 ready-to-post text posts + profile optimization before/after guide.",
        badge: "12 posts",
      },
      {
        href: "/facebook",
        title: "Facebook Posts",
        desc: "12 posts with engagement questions. Separate from the automated cron posts.",
        badge: "12 posts",
      },
    ],
  },
  {
    heading: "Brand & Setup",
    items: [
      {
        href: "/brand",
        title: "Brand Assets",
        desc: "Download profile photos and cover banners. Copy-paste bios for LinkedIn, Facebook, Instagram.",
        badge: "4 images + bios",
      },
      {
        href: "/email-setup",
        title: "Email Setup (Brevo)",
        desc: "Brevo setup guide + 3 ready-to-copy email sequences: welcome, post-purchase, newsletter.",
        badge: "3 sequences",
      },
    ],
  },
  {
    heading: "Automation",
    items: [
      {
        href: "/api/cron/social-post",
        title: "Social Post Cron",
        desc: "Auto-posts to LinkedIn and Facebook (Sun–Fri 7am UAE). Requires LINKEDIN_ACCESS_TOKEN and FACEBOOK_PAGE_ACCESS_TOKEN env vars.",
        badge: "40 posts in rotation",
      },
    ],
  },
  {
    heading: "Blog (public, indexed)",
    items: [
      { href: "/blog", title: "Blog Index", desc: "400+ articles covering UAE freelance visa, tax, rates, clients, contracts, AI tools, and more.", badge: "400+ articles" },
    ],
  },
];

const envVars = [
  { key: "NEXT_PUBLIC_SITE_URL", value: "https://solokit.cloud", status: "required" },
  { key: "CRON_SECRET", value: "Set in Vercel", status: "required for cron" },
  { key: "BREVO_API_KEY", value: "Set in Vercel", status: "required for email" },
  { key: "LINKEDIN_ACCESS_TOKEN", value: "OAuth token from LinkedIn", status: "required for auto-post" },
  { key: "FACEBOOK_PAGE_ACCESS_TOKEN", value: "Page token from Meta", status: "required for auto-post" },
  { key: "LEMON_SQUEEZY_WEBHOOK_SECRET", value: "Set in Vercel", status: "required for purchases" },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16">
          {/* Dark gradient hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Internal</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Content Operations Dashboard</h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              All internal pages, content libraries, and setup guides in one place. Not indexed by search engines.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
                {section.heading}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {section.items.map(({ href, title, desc, badge }) => (
                  <a
                    key={href}
                    href={href}
                    className="border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-sm transition-all bg-white"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded-full shrink-0 font-medium">{badge}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    <p className="text-xs text-emerald-600 font-semibold mt-2">Open →</p>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Env vars checklist */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Vercel Environment Variables
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6">
              <p className="text-xs text-gray-400 mb-4">Set all env vars in: Vercel dashboard → Project → Settings → Environment Variables</p>
              <div className="space-y-3">
                {envVars.map(({ key, value, status }) => (
                  <div key={key} className="flex items-start gap-3 text-xs">
                    <span className="text-emerald-400 shrink-0">✅</span>
                    <code className="text-emerald-300 shrink-0 font-mono">{key}</code>
                    <span className="text-gray-500">→</span>
                    <span className="text-gray-300">{value}</span>
                    <span className="text-gray-600 ml-auto shrink-0 whitespace-nowrap">({status})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Go to the public site</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Visit the public storefront to see products, guides, and free resources for UAE freelancers.
            </p>
            <Link
              href="/"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Go to SoloKit →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
