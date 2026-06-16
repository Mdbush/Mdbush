import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goal Setting for UAE Freelancers: How to Plan a Profitable Year",
  description:
    "How UAE freelancers set annual income targets, reverse-engineer them into monthly and weekly actions, and track progress without a manager or performance review.",
  alternates: { canonical: "/blog/freelance-goals-setting-uae" },
  openGraph: {
    title: "Goal Setting for UAE Freelancers: How to Plan a Profitable Year",
    description: "How UAE freelancers set revenue targets and reverse-engineer them into actionable weekly plans.",
    type: "article",
    url: "/blog/freelance-goals-setting-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Goal Setting for UAE Freelancers: How to Plan a Profitable Year",
  description: "How UAE freelancers set annual income targets and plan their business.",
  url: `${siteUrl}/blog/freelance-goals-setting-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

export default function FreelanceGoalsSettingUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Goal Setting for UAE Freelancers</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Business & Mindset</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Goal Setting for UAE Freelancers: How to Plan a Profitable Year
          </h1>
          <p className="text-gray-500 text-sm">7 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Most freelancers do not set goals — they respond to whatever comes in. That approach
            works when business is good. When it is not, there is no plan to fall back on.
            Setting clear annual targets and reverse-engineering them into monthly and weekly
            actions is the difference between a reactive freelance career and an intentional one.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 1: Set Your Annual Revenue Target</h2>
            <p>
              Start with the number you want to earn this year in take-home AED. Not gross
              revenue — what you actually want in your account after all business costs.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-4">
              <p className="font-semibold text-gray-900 mb-3">Annual revenue target formula</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Target take-home:</strong> AED [X] (what you want after costs)</p>
                <p><strong>Annual business costs:</strong> AED [Y] (license, software, health insurance, etc.)</p>
                <p><strong>Tax provision (if applicable):</strong> AED [Z] (5% VAT float, CT provision)</p>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <p className="font-semibold">Required gross revenue = Target take-home + Business costs + Tax provision</p>
                </div>
              </div>
            </div>
            <p>
              Example: If you want AED 25,000/month take-home, your annual target is AED 300,000.
              Add AED 30,000 for business costs and AED 10,000 for tax provisions → you need
              to bill AED 340,000/year, or roughly AED 28,300/month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 2: Reverse-Engineer into Monthly Targets</h2>
            <p>
              Divide your annual gross revenue target by your active working months. In the UAE,
              most freelancers effectively have 10–10.5 productive months — Ramadan slows down
              significantly, and August sees many clients traveling. Plan for 10 months of full
              revenue and treat December and Ramadan as recovery/preparation periods.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm my-4">
              <p className="font-semibold text-gray-900 mb-2">Example calculation</p>
              <p className="text-gray-700">Annual target: AED 340,000 ÷ 10 months = AED 34,000/month</p>
              <p className="text-gray-700 mt-1">Monthly revenue can come from:</p>
              <ul className="mt-1 space-y-0.5">
                <li className="text-gray-700">• 2 retainer clients × AED 8,000 = AED 16,000</li>
                <li className="text-gray-700">• 2 project clients × AED 9,000 = AED 18,000</li>
                <li className="text-gray-700">Total: AED 34,000 ✓</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 3: Set Non-Revenue Goals</h2>
            <p>
              Revenue is the result, not the method. Set goals for the inputs that drive revenue:
            </p>
            <div className="space-y-3 mt-3">
              {[
                { area: "Client acquisition", examples: ["Land 2 new retainer clients by Q2", "Send 10 warm outreach messages per month", "Ask for 1 referral per completed project"] },
                { area: "Rate increases", examples: ["Increase project rate from AED 5,000 to AED 7,000 by June", "Add a premium tier to all new proposals", "Test 20% higher rate on next 5 new client quotes"] },
                { area: "Visibility", examples: ["Publish 2 LinkedIn posts per week", "Publish 1 case study per quarter", "Attend 1 networking event per month"] },
                { area: "Skills", examples: ["Complete 1 relevant course per quarter", "Read 2 books in your specialty area", "Learn one new tool that improves client output"] },
              ].map((item) => (
                <div key={item.area} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-2">{item.area}</p>
                  <ul className="space-y-1">
                    {item.examples.map((ex) => <li key={ex} className="text-xs text-gray-600">→ {ex}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 4: Weekly Review (5 Minutes Every Sunday)</h2>
            <p>
              A weekly review turns goals from aspirations into actions. Every Sunday (start of
              UAE business week):
            </p>
            <ol className="space-y-2 text-sm text-gray-600 mt-3">
              <li>1. <strong>Revenue check:</strong> Where are you vs monthly target? How many days of the month remain?</li>
              <li>2. <strong>Pipeline check:</strong> What proposals are outstanding? What follow-ups are needed?</li>
              <li>3. <strong>Priority for this week:</strong> The one thing that most moves toward your goals</li>
              <li>4. <strong>Outstanding invoices:</strong> Anything overdue that needs chasing?</li>
            </ol>
            <p className="mt-3">
              This takes 5–10 minutes if you keep it simple. Do not turn it into a therapy session.
              The goal is clarity on what matters this week, not a comprehensive audit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Step 5: Quarterly Reset</h2>
            <p>
              Goals set in January often do not survive contact with reality. Every quarter,
              assess what happened vs what you planned and adjust:
            </p>
            <ul className="space-y-1 text-sm text-gray-600 mt-3">
              <li>• Revenue: on track, ahead, or behind? By how much?</li>
              <li>• Client mix: are you working with the right clients, or has scope crept into lower-value work?</li>
              <li>• Time: are you working the hours you planned, or more?</li>
              <li>• What to stop, start, or continue in the next 3 months?</li>
            </ul>
            <p className="mt-3">
              Quarterly resets prevent the common freelance pattern of grinding through a bad
              quarter without ever changing the approach. The UAE market also shifts seasonally
              — Q1 (post-New Year) and Q3 (post-summer) are typically the strongest. Plan for
              slower Q2 (Ramadan overlap) and Q4 (end-of-year budget freezes) accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">UAE Calendar Considerations for Freelance Planning</h2>
            <div className="space-y-3 mt-3">
              {[
                { period: "January–March (Q1)", note: "Strongest client acquisition window. New budgets approved. High decision-maker availability. Push hard on business development." },
                { period: "Ramadan (March/April — varies)", note: "Decision-making slows. Revenue often dips 20–40%. Use this time for case studies, website updates, and skill development." },
                { period: "April–June (Q2)", note: "Recovery period. Good for project work already in pipeline. Start Q3 planning." },
                { period: "July–August", note: "Many clients and senior decision-makers travel. New project starts slow. Maintain existing clients, do not expect new contract signings." },
                { period: "September–November (Q3)", note: "Second strongest window. Clients return from summer, budget often available. Strong outreach period." },
                { period: "December", note: "Year-end budget spending (some clients spend to use up remaining budget). New projects slow from mid-December. Begin Q1 pipeline for next year." },
              ].map((item) => (
                <div key={item.period} className="border border-gray-200 rounded-xl p-3">
                  <p className="font-semibold text-gray-900 text-sm">{item.period}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Build the financial foundation</p>
            <h3 className="text-lg font-bold mb-2">Financial Planning for UAE Freelancers</h3>
            <p className="text-gray-400 text-sm mb-4">
              Goal setting is the strategy — financial planning is the infrastructure. The
              4-pillar system for UAE freelancers covering income smoothing, emergency fund,
              business vs personal money, and long-term wealth.
            </p>
            <Link
              href="/blog/freelance-financial-planning-uae"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Read the Financial Planning Guide →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/freelance-financial-planning-uae", title: "Financial Planning for UAE Freelancers: Save, Invest, and Retire" },
                { href: "/blog/how-to-scale-freelance-business-uae", title: "How to Scale Your Freelance Business to AED 100K/Month" },
                { href: "/blog/freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?" },
                { href: "/blog/freelance-morning-routine-uae", title: "The Freelancer Morning Routine That Works in the UAE" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">
                  → {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
