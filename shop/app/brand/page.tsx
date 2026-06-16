import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Assets — SoloKit",
  robots: { index: false, follow: false },
};

const SITE_URL = "https://solokit.cloud";

export default function BrandPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-900">

      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-8 rounded-2xl mb-10">
        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">Internal</span>
        <h1 className="text-2xl font-bold mb-2">Brand Setup</h1>
        <p className="text-gray-400 text-sm">
          Download your profile images and copy the exact text for each platform.
        </p>
      </div>

      {/* Internal Content Hub */}
      <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-5">
        <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block shrink-0"></span>
          Internal content pages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "TikTok Scripts", href: "/tiktok", desc: "20 ready-to-record video scripts" },
            { label: "Instagram Content", href: "/instagram", desc: "10 Reels + 3 static posts with captions" },
            { label: "LinkedIn Posts", href: "/linkedin", desc: "12 posts + profile optimization guide" },
          ].map(({ label, href, desc }) => (
            <a key={label} href={href} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-emerald-400 transition-colors">
              <p className="font-semibold text-sm text-gray-900 mb-1">{label}</p>
              <p className="text-xs text-gray-500">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Images */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block shrink-0"></span>
          Brand Images
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Profile Photo (all platforms)",
              desc: "800×800 — upload as profile picture on LinkedIn, Facebook, Instagram",
              url: `${SITE_URL}/api/og/profile`,
            },
            {
              label: "LinkedIn Cover",
              desc: "1584×396 — upload as background banner on LinkedIn company page",
              url: `${SITE_URL}/api/og/cover?p=li`,
            },
            {
              label: "Facebook Cover",
              desc: "820×312 — upload as cover photo on Facebook page",
              url: `${SITE_URL}/api/og/cover?p=fb`,
            },
            {
              label: "Twitter/X Banner",
              desc: "1500×500 — upload as header image on Twitter/X",
              url: `${SITE_URL}/api/og/cover?p=tw`,
            },
          ].map(({ label, desc, url }) => (
            <div key={label} className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-sm mb-1">{label}</p>
              <p className="text-xs text-gray-500 mb-3">{desc}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Open / Download →
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">
          To download: right-click the opened image → Save Image As. Or screenshot if needed.
        </p>
      </section>

      {/* LinkedIn */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block shrink-0"></span>
          LinkedIn Company Page
        </h2>
        <p className="text-xs text-gray-400 mb-4">Go to your LinkedIn company page → Edit page → paste each field below</p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Page Name</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">SoloKit</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Tagline (120 chars max)</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all whitespace-pre-wrap">Notion templates, AI prompts & SOPs for freelancers and solopreneurs in the UAE.</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">About (2000 chars)</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all whitespace-pre-wrap">{`SoloKit builds ready-to-use tools for freelancers and solopreneurs in the UAE and Gulf region.

Every product is designed to solve one specific problem — not a course that teaches you how, but the actual thing ready to use within minutes of buying.

What we build:
→ Notion templates: Client CRMs, business operating systems, project trackers
→ AI prompt packs: 200+ tested prompts for writing, proposals, content, and strategy
→ SOPs & systems: Standard operating procedures for onboarding, finance, content, and delegation

Who it's for:
Designers, developers, consultants, marketers, coaches, and any solo operator in Dubai, Abu Dhabi, or across the Gulf who wants to run a more professional, more profitable business — without the overhead of enterprise software.

All products come with a 30-day money-back guarantee.

Website: solokit.cloud`}</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Specialties</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">Notion Templates, AI Prompts, SOPs, Freelance Tools, Productivity, UAE Business, Solopreneur</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Industry / Category</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">Software / E-Learning / Professional Services</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Website</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">https://solokit.cloud</code>
          </div>
        </div>
      </section>

      {/* Facebook */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block shrink-0"></span>
          Facebook Page
        </h2>
        <p className="text-xs text-gray-400 mb-4">Go to your Facebook page → Edit page info → paste each field below</p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Page Name</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">SoloKit</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Category</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">Software Company · Digital Products · Online Education</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Short Description (255 chars)</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all whitespace-pre-wrap">Ready-to-use Notion templates, AI prompts, and SOPs for freelancers in the UAE. Stop starting from scratch — plug in and go. 30-day money-back guarantee.</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Website</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">https://solokit.cloud</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Email</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">md.a.bushara@gmail.com</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Location</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">Dubai, United Arab Emirates</code>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block shrink-0"></span>
          Instagram Business Account
        </h2>
        <p className="text-xs text-gray-400 mb-4">Go to Edit Profile → paste each field below</p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Name (displays under username)</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">SoloKit — Tools for UAE Freelancers</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Username</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">@getsolokit</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Bio (150 chars)</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all whitespace-pre-wrap">{`Notion templates · AI prompts · SOPs
Built for UAE freelancers 🇦🇪
Stop starting from scratch ↓`}</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Website (Link in Bio)</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">https://solokit.cloud</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Category</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg select-all">Software Company</code>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Instagram Story Highlights to create</p>
            <code className="text-sm text-gray-900 bg-gray-50 block p-3 rounded-lg whitespace-pre-wrap">{`1. "Free Prompts" → link to solokit.cloud/free
2. "Products" → screenshots of each product
3. "Reviews" → screenshot testimonials
4. "How It Works" → 3 steps: buy, download, use
5. "Tips" → archive your best educational posts`}</code>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block shrink-0"></span>
          Profile Setup Checklist
        </h2>
        <div className="space-y-2 text-sm text-gray-300">
          {[
            "Profile photo uploaded (use the image above)",
            "Cover/banner uploaded (LinkedIn + Facebook)",
            "Bio / About section filled in",
            "Website URL set to solokit.cloud",
            "Location set to Dubai, UAE",
            "Contact email set to md.a.bushara@gmail.com",
            "Category/Industry set correctly",
            "First 3 posts published (educational, not ads)",
            "Instagram Highlights created",
            "Facebook CTA button set to 'Shop Now' → solokit.cloud",
          ].map((item) => (
            <div key={item} className="flex gap-2">
              <span className="text-emerald-500 shrink-0">□</span>
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
