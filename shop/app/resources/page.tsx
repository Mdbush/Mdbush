import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — SoloKit",
  robots: { index: false, follow: false },
};

const sections = [
  {
    heading: "Content creation",
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
    heading: "Brand & setup",
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
      { href: "/blog", title: "Blog Index", desc: "318 articles covering UAE freelance visa, tax, rates, clients, contracts, AI tools, and more.", badge: "318 articles" },
    ],
  },
];

const envVars = [
  { key: "NEXT_PUBLIC_SITE_URL", value: "https://solokit.cloud", status: "required" },
  { key: "CRON_SECRET", value: "solokit2026secure", status: "required for cron" },
  { key: "BREVO_API_KEY", value: "Set in Vercel", status: "required for email" },
  { key: "LINKEDIN_ACCESS_TOKEN", value: "OAuth token from LinkedIn", status: "required for auto-post" },
  { key: "FACEBOOK_PAGE_ACCESS_TOKEN", value: "Page token from Meta", status: "required for auto-post" },
  { key: "LEMON_SQUEEZY_WEBHOOK_SECRET", value: "Set in Vercel", status: "required for purchases" },
];

export default function ResourcesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Resources Hub</h1>
        <p className="text-gray-500 text-sm">All internal pages, content libraries, and setup guides in one place.</p>
      </div>

      {sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{section.heading}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.items.map(({ href, title, desc, badge }) => (
              <a
                key={href}
                href={href}
                className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full shrink-0">{badge}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* Env vars */}
      <section className="bg-gray-950 text-white rounded-xl p-6">
        <h2 className="font-bold text-sm mb-4">Vercel environment variables checklist</h2>
        <div className="space-y-2">
          {envVars.map(({ key, value, status }) => (
            <div key={key} className="flex items-start gap-3 text-xs">
              <code className="text-green-400 shrink-0 font-mono">{key}</code>
              <span className="text-gray-500">→</span>
              <span className="text-gray-300">{value}</span>
              <span className="text-gray-600 ml-auto shrink-0">({status})</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">Set all env vars in: Vercel dashboard → Project → Settings → Environment Variables</p>
      </section>
    </main>
  );
}
