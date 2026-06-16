import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "Freelance Developer Rates in the UAE (2026): How Much Should You Charge? — SoloKit",
  description:
    "AED 80/hr to AED 600/hr — the range is huge. Here is a complete breakdown of UAE freelance developer rates by specialization, seniority, and project size, plus a formula for setting your own rate.",
  alternates: { canonical: "/blog/freelance-developer-rates-uae" },
  openGraph: {
    title: "Freelance Developer Rates in the UAE (2026): How Much Should You Charge?",
    description:
      "AED 80/hr to AED 600/hr — the range is huge. Here is a complete breakdown of UAE freelance developer rates by specialization, seniority, and project size, plus a formula for setting your own rate.",
    type: "article",
    url: "/blog/freelance-developer-rates-uae",
    publishedTime: "2026-06-16",
    authors: ["SoloKit"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Developer Rates in the UAE (2026): How Much Should You Charge?",
    description:
      "AED 80/hr to AED 600/hr — the range is huge. Here is a complete breakdown of UAE freelance developer rates by specialization, seniority, and project size, plus a formula for setting your own rate.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Developer Rates in the UAE (2026): How Much Should You Charge?",
  description:
    "AED 80/hr to AED 600/hr — the range is huge. Here is a complete breakdown of UAE freelance developer rates by specialization, seniority, and project size, plus a formula for setting your own rate.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  url: `${siteUrl}/blog/freelance-developer-rates-uae`,
  mainEntityOfPage: `${siteUrl}/blog/freelance-developer-rates-uae`,
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Pricing &amp; Rates</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">June 16, 2026</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Freelance Developer Rates in the UAE (2026): How Much Should You Charge?
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            AED 80/hr to AED 600/hr — the range is enormous. What determines where you fall, and how do
            you make sure you are not leaving money on the table?
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            Ask ten UAE-based developers what they charge and you will get ten very different answers.
            A junior frontend developer fresh from a bootcamp might bill AED 80–100 per hour. A senior
            AI/ML specialist with a track record of shipping production models might command AED 600 or
            more. Both are working as freelancers in the same market.
          </p>

          <p>
            The difference is not talent alone — it is specialization, seniority, positioning, and how
            well each person understands the value of what they deliver. This guide breaks down current
            UAE developer rates across every major specialization and gives you a practical formula for
            setting a number you can actually defend to clients.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 1: UAE Developer Rates by Specialization and Seniority
          </h2>

          <p>
            The table below reflects rates observed across UAE freelance platforms, community surveys,
            and direct market data as of mid-2026. Ranges account for variation in client type (startup
            vs enterprise), project complexity, and individual positioning.
          </p>

          <div className="overflow-x-auto my-6 -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Specialization</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Junior (&lt;3 yrs)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Mid (3–6 yrs)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Senior (6+ yrs)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    role: "Frontend Dev",
                    junior: "AED 100–150/hr",
                    mid: "AED 180–280/hr",
                    senior: "AED 280–420/hr",
                  },
                  {
                    role: "Backend Dev",
                    junior: "AED 120–180/hr",
                    mid: "AED 200–320/hr",
                    senior: "AED 320–480/hr",
                  },
                  {
                    role: "Full Stack",
                    junior: "AED 130–200/hr",
                    mid: "AED 220–350/hr",
                    senior: "AED 350–550/hr",
                  },
                  {
                    role: "Mobile (iOS/Android)",
                    junior: "AED 150–220/hr",
                    mid: "AED 240–380/hr",
                    senior: "AED 380–580/hr",
                  },
                  {
                    role: "DevOps / Cloud",
                    junior: "AED 150–240/hr",
                    mid: "AED 260–400/hr",
                    senior: "AED 400–600/hr",
                  },
                  {
                    role: "AI / ML Specialist",
                    junior: "AED 200–320/hr",
                    mid: "AED 340–520/hr",
                    senior: "AED 500–800/hr",
                  },
                ].map((row, i) => (
                  <tr key={row.role} className={i % 2 === 0 ? "border-b border-gray-100" : "bg-gray-50/50 border-b border-gray-100"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.role}</td>
                    <td className="px-4 py-3 text-gray-600">{row.junior}</td>
                    <td className="px-4 py-3 text-gray-600">{row.mid}</td>
                    <td className="px-4 py-3 text-gray-600">{row.senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500">
            These are hourly rates for direct client work. Platform rates (Upwork, Freelancer.com)
            typically run 10–20% lower due to platform fees and lower-end commoditisation. Retainer
            and project rates are covered separately in Section 3.
          </p>

          <p>
            Two observations worth calling out: AI/ML rates are significantly higher than any other
            specialization at every seniority level — and they are still rising. DevOps and Cloud have
            also outpaced traditional development roles, driven by demand from UAE companies migrating
            infrastructure and regional SaaS businesses scaling quickly. If you are deciding where to
            invest skill development, the rate table tells part of the story.
          </p>

          <p>
            For a deeper look at earnings across all freelance categories, see{" "}
            <Link
              href="/blog/how-much-do-uae-freelancers-earn"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              how much UAE freelancers earn
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 2: Why UAE Developer Rates Are Lower Than Western Markets — and Why That Is Changing
          </h2>

          <p>
            A senior full-stack developer in London or New York typically charges USD 150–250/hr
            (AED 550–920/hr). A Berlin-based equivalent is slightly lower, around EUR 110–180/hr
            (AED 430–700/hr). UAE senior developers currently sit at AED 350–550/hr — a 30–50% gap
            depending on city and specialization.
          </p>

          <p>
            That gap exists for three main reasons: a younger freelance ecosystem with less established
            rate norms, a historically cost-conscious local market, and a talent supply that skews toward
            mid-market generalists rather than deep specialists. But all three are shifting.
          </p>

          <div className="space-y-3 my-6">
            {[
              {
                point: "The international client opportunity",
                detail:
                  "UAE-based developers who work with international clients — particularly UK and US companies — can charge 40–60% less than a local equivalent in those markets while still earning at the top of the UAE range. A UK startup pays AED 400/hr instead of AED 700/hr, saves significantly, and gets time-zone overlap with European hours. For the developer, that rate is still senior-tier UAE income. This arbitrage window will not stay open forever.",
              },
              {
                point: "The specialist premium is real",
                detail:
                  "The gap between a generalist mid-level developer and a specialist (mobile, AI/ML, cloud) is widening. Clients are willing to pay significantly more for someone who clearly owns a niche than for a developer who can do many things adequately. Specialization is not just a career strategy — it directly affects what rate the market will accept.",
              },
              {
                point: "Rate norms are rising",
                detail:
                  "The UAE freelance community is increasingly sharing rate information, and the average is trending upward. Developers who set rates based on 2023 norms are often 20–30% behind where the market has moved. The data in this article represents current benchmarks, not historical ones.",
              },
            ].map((item) => (
              <div key={item.point} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.point}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 3: Hourly vs Project vs Retainer — When to Use Which
          </h2>

          <p>
            Not all work should be billed hourly. The right pricing model depends on project size, scope
            clarity, and the nature of the client relationship. Here is how to think about it in AED terms:
          </p>

          <div className="space-y-4 my-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-semibold text-gray-900">Hourly billing</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">Projects under AED 10K</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Best for small, undefined, or exploratory work — bug fixes, audits, consultation calls,
                short feature additions. Hourly protects you when scope is unclear and the client is
                unlikely to request detailed time breakdowns. Below AED 10K, the overhead of fixed-project
                negotiation often exceeds the benefit.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-semibold text-gray-900">Fixed project pricing</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">AED 10K – 50K</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Recommended for medium-sized projects with reasonably defined scope — an MVP build, a
                specific integration, a redesign with a clear deliverable list. Fixed pricing reduces
                the client&apos;s risk (they know what they are paying) and rewards you for working efficiently
                rather than slowly. Add a clear change-request clause to handle scope creep.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-semibold text-gray-900">Monthly retainer</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap">AED 8K – 25K/month</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The most income-stable structure for large or ongoing engagements — ongoing product
                development, technical advisory, embedded development within a product team. A retainer
                provides predictable income and reduces client acquisition overhead. Mid-level developers
                typically sit at AED 8K–14K/month; senior developers with product responsibility at
                AED 14K–25K/month. Retainers should specify deliverables or hours, not just availability.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 4: How to Set Your Rate — The Formula
          </h2>

          <p>
            Most developers set rates by guessing what feels reasonable, or by anchoring to the lowest
            rate they have seen accepted. Neither approach is reliable. Here is the formula that actually
            works:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">The rate formula</p>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Step 1.</span> Determine your target monthly take-home income (AED).</p>
              <p><span className="font-semibold">Step 2.</span> Add your monthly business costs: visa renewals (amortised), health insurance, software subscriptions, and a slow-month buffer (typically 25–30% of take-home).</p>
              <p><span className="font-semibold">Step 3.</span> This gives you your required monthly revenue.</p>
              <p><span className="font-semibold">Step 4.</span> Divide by your realistic billable hours per month (not total working hours — typically 80–100 hrs/month for a full-time freelancer).</p>
              <p><span className="font-semibold">Step 5.</span> The result is your minimum viable hourly rate. Your market rate should be above this.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Worked example — mid-level full-stack developer</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Target monthly take-home</span>
                <span className="font-medium text-gray-900">AED 25,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Visa (amortised monthly)</span>
                <span className="font-medium text-gray-900">AED 700</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Health insurance</span>
                <span className="font-medium text-gray-900">AED 600</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Software &amp; tools</span>
                <span className="font-medium text-gray-900">AED 400</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Slow-month buffer (25%)</span>
                <span className="font-medium text-gray-900">AED 6,250</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2 font-semibold text-gray-900">
                <span>Required monthly revenue</span>
                <span>AED 32,950</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Billable hours per month (25 hrs/week)</span>
                <span className="font-medium text-gray-900">~100 hrs</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-gray-900">
                <span>Minimum viable hourly rate</span>
                <span>≈ AED 330/hr</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              AED 330/hr is the floor, not the ceiling. Market rate for a mid-level full-stack developer
              in the UAE is AED 220–350/hr — so this developer should be charging at or above mid-market,
              not below it.
            </p>
          </div>

          <p>
            Use the{" "}
            <Link
              href="/blog/freelance-rate-calculator-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              UAE freelance rate calculator
            </Link>{" "}
            to run this formula against your own numbers.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 5: Should You List Your Rate Publicly?
          </h2>

          <p>
            There is no universally right answer — but the common fear that listing your rate will lose
            you clients is largely unfounded for developers in the mid-to-senior range.
          </p>

          <p>
            Publishing a rate on your website or LinkedIn filters enquiries in two useful ways: it removes
            low-budget prospects before they waste your time, and it signals confidence and market
            awareness to serious clients. A developer who lists &quot;from AED 300/hr&quot; on their site is
            telling the market they know their worth.
          </p>

          <p>
            If you prefer not to list publicly, here is what to say when a client asks your rate in
            a DM or first call: &quot;My rate for this type of work typically sits between AED [X] and
            AED [Y] depending on scope and timeline — once we&apos;ve scoped the project I can give you a
            precise number.&quot; This anchors the conversation without committing before you know what
            you are being asked to build.
          </p>

          <p>
            For negotiation tactics once you are in the conversation, see{" "}
            <Link
              href="/blog/how-to-negotiate-freelance-rates-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              how to negotiate freelance rates in the UAE
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 6: Red Flags — Clients Who Will Undervalue Your Work
          </h2>

          <p>
            Some clients will push your rate down regardless of what you bring to the table. Knowing
            the patterns early saves you the cost of a bad engagement:
          </p>

          <div className="space-y-3 my-6">
            {[
              {
                flag: "They open with \"what&apos;s your cheapest rate?\"",
                why: "Clients who lead with cost minimisation rarely reframe around value. They are looking for the lowest available number and will apply that frame to every scope discussion.",
              },
              {
                flag: "They reference a friend who does it for much less",
                why: "Comparison to unnamed cheaper alternatives is a pressure tactic. Ask what they paid and what they got — the answer usually explains the price difference.",
              },
              {
                flag: "They want a large unpaid trial or spec work",
                why: "Speculative work requests signal that the client does not see your time as having inherent value. Paid discovery or paid scoping is standard; unpaid spec work is not.",
              },
              {
                flag: "They cannot explain what success looks like",
                why: "Vague requirements with no defined outcomes make scope creep inevitable. Without clarity on what done looks like, any fixed project price is a liability.",
              },
              {
                flag: "They need it done yesterday, with no budget discussion",
                why: "Urgency without rate discussion often means they expect urgency to be included in the original price. It should not be — rush work should command a premium, not a discount.",
              },
            ].map((item) => (
              <div key={item.flag} className="flex gap-3">
                <span className="text-gray-300 mt-1 shrink-0">—</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.flag}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 7: How to Justify a Premium Rate to UAE Clients
          </h2>

          <p>
            A rate is only as defensible as the story behind it. Developers who command the top of
            their range do not just have the skills — they communicate the value clearly. Here is how:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Portfolio anchored to results, not technologies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  &quot;Built a React app&quot; tells a client nothing useful. &quot;Rebuilt the checkout flow for a Dubai
                  e-commerce brand — reduced cart abandonment by 23% and increased mobile conversion by 18%&quot;
                  tells them exactly what they are buying. Results-led portfolios justify premium rates;
                  technology-led portfolios do not.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Specialization beats breadth</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A developer who &quot;does everything&quot; can be compared to anyone. A developer who is the
                  go-to for fintech backend integrations in the UAE, or for React Native apps in the
                  hospitality sector, is in a different market segment entirely. Specialists have fewer
                  direct competitors and more pricing power.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Frame the rate as risk reduction</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For UAE clients, particularly in enterprise and government-adjacent sectors, reliability
                  and risk are major decision factors. A developer with a track record costs AED 400/hr;
                  the cost of a failed project and a re-build is AED 300K+. Framing your rate as an
                  investment in certainty — not just execution — changes the conversation.
                </p>
              </div>
            </div>
          </div>

          <p>
            See also:{" "}
            <Link
              href="/blog/how-to-negotiate-freelance-rates-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              how to negotiate freelance rates in the UAE
            </Link>{" "}
            for specific tactics around the pricing conversation itself.
          </p>

          <div className="bg-gray-900 rounded-2xl p-6 my-8">
            <p className="text-white font-semibold mb-2">Track every project, client, and rate in one place</p>
            <p className="text-gray-400 text-sm mb-4">
              The{" "}
              <span className="text-white font-medium">Freelancer Client CRM (AED 175)</span>{" "}
              is built for UAE developers managing multiple clients — log projects, track hours and rates,
              follow up on invoices, and see your rate history per client in a single dashboard. No more
              digging through emails to find what you quoted six months ago.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get Freelancer Client CRM (AED 175) →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Also useful: AI Prompt Pack Pro</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              The{" "}
              <span className="font-medium text-gray-700">AI Prompt Pack Pro (AED 109)</span>{" "}
              includes prompts specifically for rate negotiation emails — give it the context of your
              situation (what you charge, what you want to charge, the client relationship) and it
              drafts a polished message in seconds. Useful for anyone who knows what they want to say
              but needs help with how to say it.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              See AI Prompt Pack Pro →
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/blog/freelance-rate-calculator-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                Freelance Rate Calculator for UAE — What Should You Charge? →
              </Link>
              <Link
                href="/blog/how-to-negotiate-freelance-rates-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Negotiate Freelance Rates in the UAE →
              </Link>
              <Link
                href="/blog/how-much-do-uae-freelancers-earn"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How Much Do UAE Freelancers Earn? →
              </Link>
              <Link
                href="/blog/get-freelance-clients-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Get Freelance Clients in the UAE →
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/#products"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-2"
            >
              Browse all SoloKit products →
            </Link>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
