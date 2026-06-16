import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How UAE Freelancers Set Up Google Workspace 2026 — SoloKit",
  description:
    "Step-by-step guide for UAE freelancers setting up Google Workspace: custom email, Drive, Meet, Calendar. Costs in AED and what each plan includes.",
  alternates: { canonical: "/blog/how-to-set-up-google-workspace-freelancer" },
  openGraph: {
    title: "How UAE Freelancers Set Up Google Workspace 2026",
    description:
      "Step-by-step guide for UAE freelancers setting up Google Workspace: custom email, Drive, Meet, Calendar. Costs in AED and what each plan includes.",
    type: "article",
    url: "/blog/how-to-set-up-google-workspace-freelancer",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How UAE Freelancers Set Up Google Workspace 2026",
  description:
    "Step-by-step guide for UAE freelancers setting up Google Workspace: custom email, Drive, Meet, Calendar. Costs in AED and what each plan includes.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-set-up-google-workspace-freelancer",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-set-up-google-workspace-freelancer",
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Google Workspace Setup for UAE Freelancers</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Tools & Setup</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How UAE Freelancers Set Up Google Workspace
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Sending proposals from a Gmail address undercuts your credibility before a client reads a single word.
              A custom domain email via Google Workspace fixes that — and gives you professional Drive storage, Meet,
              and Calendar. Here&apos;s how to set it up properly as a UAE freelancer.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Google Workspace (formerly G Suite) is the productivity stack of choice for most UAE solo freelancers and
            small agencies. It handles your professional email, cloud storage, video calls, and calendar in one
            subscription — and at USD 6–12/month per user (approximately AED 22–44/month at mid-2026 rates), it is
            one of the cheapest credibility upgrades you can make to your business. This guide walks through every
            step from buying a domain to sending your first professional email.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Step 1: Buy a Domain Name
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Before you can set up Google Workspace you need a domain — the &quot;yourname.com&quot; or &quot;yourstudio.ae&quot; part of
            your email address. You buy this from a domain registrar, not from Google directly (though Google Domains
            exists, it is not always the cheapest option in the UAE market).
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Recommended registrars used by UAE freelancers:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              { name: "Namecheap", detail: ".com domains from ~USD 9/year (~AED 33). Good interface, no upsell pressure." },
              { name: "GoDaddy UAE", detail: "AED-priced checkout, local support number. Slightly pricier than Namecheap but easier billing if you need a UAE receipt." },
              { name: "Google Domains", detail: "Integrates neatly into Workspace setup but costs a bit more. Now operated by Squarespace in some regions." },
              { name: "nic.ae (for .ae domains)", detail: "Required if you want a .ae address. Registration requires a UAE trade licence. AED 250–400/year." },
            ].map(({ name, detail }) => (
              <li key={name} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{name}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-bold text-emerald-800 mb-2">Domain Tip for UAE Freelancers</p>
            <p className="text-sm text-emerald-800">
              If you are a sole operator, &quot;yourfullname.com&quot; or &quot;yourname.studio&quot; signals personal brand. If you plan
              to eventually scale or sell the business, a non-name domain like &quot;meridianstrategy.ae&quot; positions you
              as an agency. UAE clients respond well to .ae domains if you can get one — it signals local establishment.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Step 2: Choose a Google Workspace Plan
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Google Workspace has four main tiers. For most freelancers, Business Starter is enough.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Plan</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Price/user/month</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Storage</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Business Starter", "USD 6 (~AED 22)", "30 GB pooled", "Custom email, Meet (100 participants), basic security"],
                  ["Business Standard", "USD 12 (~AED 44)", "2 TB pooled", "Meet recording to Drive, eSignature, noise cancellation"],
                  ["Business Plus", "USD 18 (~AED 66)", "5 TB pooled", "Enhanced Vault, Meet 500 participants, advanced audit"],
                  ["Enterprise", "Custom pricing", "Unlimited", "DLP, SIEM integration, dedicated support"],
                ].map(([plan, price, storage, features]) => (
                  <tr key={plan}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{plan}</td>
                    <td className="px-4 py-3 text-gray-600">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{storage}</td>
                    <td className="px-4 py-3 text-gray-600">{features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Most UAE freelancers run on Business Starter at AED 22/month and never hit its limits. The main reason
            to upgrade to Business Standard is if you need to record client calls to Drive — a common requirement for
            coaches, trainers, and consultants who deliver remote sessions and need a record.
          </p>

          {/* Section 3 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Step 3: Sign Up and Verify Your Domain
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Go to workspace.google.com and click &quot;Get Started.&quot; You&apos;ll enter your domain name, create your first
            admin email (e.g. you@yourcompany.com), and begin a 14-day free trial. No credit card is required to
            start the trial, but you&apos;ll need one to continue.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The key step is domain verification. Google needs to confirm you own the domain before it will activate
            email routing. There are three methods:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              { method: "TXT Record (recommended)", detail: "Go to your registrar's DNS settings, add a TXT record with the value Google provides, and wait 15–60 minutes for propagation. This is the fastest and most reliable method." },
              { method: "CNAME Record", detail: "Similar to TXT but uses a CNAME entry. Some registrars make this easier than TXT." },
              { method: "HTML File Upload", detail: "Download a small verification file and upload it to your website root. Requires an existing website — not ideal during initial setup." },
            ].map(({ method, detail }) => (
              <li key={method} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{method}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Step 4: Configure MX Records for Email
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Verifying the domain does not automatically activate email delivery. You need to update your domain&apos;s
            MX (Mail Exchanger) records to route incoming email to Google&apos;s servers. Go back to your registrar&apos;s DNS
            settings and delete any existing MX records, then add Google&apos;s five MX records:
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Priority</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Mail Server</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["1", "ASPMX.L.GOOGLE.COM"],
                  ["5", "ALT1.ASPMX.L.GOOGLE.COM"],
                  ["5", "ALT2.ASPMX.L.GOOGLE.COM"],
                  ["10", "ALT3.ASPMX.L.GOOGLE.COM"],
                  ["10", "ALT4.ASPMX.L.GOOGLE.COM"],
                ].map(([priority, server]) => (
                  <tr key={server}>
                    <td className="px-4 py-3 text-gray-700">{priority}</td>
                    <td className="px-4 py-3 text-gray-700 font-mono text-xs">{server}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            DNS changes typically propagate within 1–4 hours but can take up to 48 hours. Once propagated, email sent
            to your custom domain will arrive in Gmail, accessible at mail.google.com or via the Gmail app with your
            new professional account signed in.
          </p>

          {/* Section 5 */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Step 5: Set Up Drive, Calendar, and Meet
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Once email is live, configure the rest of the suite for your freelance workflow:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              { app: "Google Drive", tip: "Create a folder structure that mirrors your client roster. Recommended: /Clients/[ClientName]/[Project]/[Deliverables | Drafts | Briefs]. Share client-specific folders directly with clients rather than emailing large files." },
              { app: "Google Calendar", tip: "Set your working hours under Settings → Working Hours. Enable appointment scheduling (formerly Calendly-style booking built in) under Settings → Appointment Schedules. Share a booking link with clients for discovery calls." },
              { app: "Google Meet", tip: "Create a personal meeting room link (meet.google.com/lookup/yourname) and add it to your email signature so clients always know how to reach you for a call." },
              { app: "Gmail Signature", tip: "Include: Name, role/title, phone number, website URL, and Meet link. Keep it under 6 lines — UAE corporate clients scan signatures on mobile." },
            ].map(({ app, tip }) => (
              <li key={app} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{app}:</strong> {tip}</span>
              </li>
            ))}
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-bold text-emerald-800 mb-2">Total Annual Cost</p>
            <p className="text-sm text-emerald-800">
              Domain (~AED 33–400/year) + Google Workspace Business Starter (~AED 264/year) = AED 297–664/year total.
              That is less than AED 55/month for a fully professional email, cloud storage, and video calling setup.
              It is one of the best ROI technology investments a UAE freelancer can make.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools Built for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and SOPs — everything to run a professional freelance business.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          {/* Related */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/best-tools-freelancers-uae-2026" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Best Tools for UAE Freelancers 2026</Link>
              <Link href="/blog/best-accounting-software-freelancers-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Best Accounting Software for UAE Freelancers</Link>
              <Link href="/blog/best-project-management-tools-freelancers" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Best Project Management Tools for Freelancers</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
