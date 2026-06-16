import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "Freelance LinkedIn Profile Optimization UAE (2026 Guide) — SoloKit",
  description:
    "Step-by-step LinkedIn profile optimization for UAE-based freelancers — headline, About section, services, featured posts, and the exact settings that make clients contact you first.",
  alternates: { canonical: "/blog/freelance-linkedin-profile-uae" },
  openGraph: {
    title: "How to Optimize Your LinkedIn Profile as a UAE Freelancer (2026 Guide)",
    description:
      "Step-by-step LinkedIn profile optimization for UAE-based freelancers — headline, About section, services, featured posts, and the exact settings that make clients contact you first.",
    type: "article",
    url: "/blog/freelance-linkedin-profile-uae",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Optimize Your LinkedIn Profile as a UAE Freelancer (2026 Guide)",
    description:
      "Step-by-step LinkedIn profile optimization for UAE-based freelancers — headline, About section, services, featured posts, and the exact settings that make clients contact you first.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Optimize Your LinkedIn Profile as a UAE Freelancer (2026 Guide)",
  description:
    "Step-by-step LinkedIn profile optimization for UAE-based freelancers — headline, About section, services, featured posts, and the exact settings that make clients contact you first.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  url: `${siteUrl}/blog/freelance-linkedin-profile-uae`,
  mainEntityOfPage: `${siteUrl}/blog/freelance-linkedin-profile-uae`,
};

const profileElements = [
  {
    num: "1",
    name: "Headline",
    summary: "The first thing anyone sees — on search results, in notifications, in DMs.",
    detail:
      "Most freelancers write their job title here. Mistake. Your headline is 220 characters of prime real estate. Use the formula: Role + Who You Help + Key Result. The goal is for a Dubai marketing director scrolling through a search result to immediately understand what you solve for them.",
  },
  {
    num: "2",
    name: "About section",
    summary: "A 2,600-character field that 90% of freelancers waste on a résumé summary.",
    detail:
      "Clients reading your About section want to know: do you understand my problem, can you fix it, and have you done it before? Write it as PROBLEM → SOLUTION → PROOF → CTA. Start with the client's pain, not your bio.",
  },
  {
    num: "3",
    name: "Services page",
    summary: "LinkedIn lets freelancers list up to 10 services. Almost nobody fills all 10.",
    detail:
      "This is a dedicated searchable section specifically for freelance and consulting work. LinkedIn surfaces it in search. Use UAE-specific language — 'Dubai brand identity', 'Abu Dhabi copywriting', 'UAE social media management' — because clients search with location terms.",
  },
  {
    num: "4",
    name: "Featured section",
    summary: "Three to five cards displayed prominently below your About. Use every slot.",
    detail:
      "Link to a case study (even a simple Google Doc), a client testimonial screenshot, a strong piece of work, or your best article. This section gets more clicks than any other part of a profile. Treat each card like a billboard.",
  },
  {
    num: "5",
    name: "Experience",
    summary: "Frame it as a track record of results, not a list of duties.",
    detail:
      "For each role — including your freelance work — write 2–3 bullet points that describe outcomes, not activities. 'Redesigned checkout flow → 34% increase in conversions' beats 'Responsible for UX design'. Include client logos where you have permission to.",
  },
  {
    num: "6",
    name: "Skills",
    summary: "Choose 5–10 that clients actually search for. Get them endorsed.",
    detail:
      "LinkedIn's algorithm uses skills in its search index. Generic skills (Communication, Teamwork) dilute your profile. Specific skills (Figma, Brand Identity, CRM Implementation) surface you in the right searches. Ask 3 previous clients or colleagues for endorsements — a short WhatsApp message converts at 60–70%.",
  },
  {
    num: "7",
    name: "Recommendations",
    summary: "Social proof that lives on your profile permanently and shows up in search.",
    detail:
      "Even two strong recommendations transform how a client reads everything else on your profile. A recommendation from a recognisable Dubai company name is worth more than five from unknown individuals. We cover exactly how to get recommendations further below.",
  },
];

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
            <span className="text-gray-600">LinkedIn Profile UAE</span>
          </nav>

          {/* Hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Growth</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Optimize Your LinkedIn Profile as a UAE Freelancer (2026 Guide)
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              Step-by-step LinkedIn profile optimization for UAE-based freelancers — headline, About section,
              services, featured posts, and the exact settings that make clients contact you first.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 16, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { value: "5M+", label: "LinkedIn users in UAE" },
              { value: "7", label: "Profile elements that actually matter" },
              { value: "60–70%", label: "Endorsement request conversion rate" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Your LinkedIn profile is your 24/7 salesperson. The problem is that most UAE freelancers
            have it actively selling against them. A vague headline. An About section that reads like a
            CV. A Featured section that&apos;s completely empty. Skills nobody searches for. The profile exists
            — it just doesn&apos;t do any work.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            When a Dubai CMO, a procurement manager at an Abu Dhabi consultancy, or a startup founder
            in DIFC is looking for someone who does what you do, they&apos;re not going to Fiverr first.
            They&apos;re going to LinkedIn. They type in a skill or a job title, they look at the first
            five profiles that come up, and they click the one that looks most credible. If that&apos;s
            not you, it&apos;s your competitor.
          </p>

          {/* Why LinkedIn Matters */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Why LinkedIn Matters More in the UAE
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The UAE has one of the highest LinkedIn adoption rates among professionals in the world.
            Over 5 million LinkedIn users are based in the UAE, in a country of roughly 10 million people.
            The majority of decision-makers — C-suite, department heads, senior managers — are active
            on the platform weekly, if not daily.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Decision-makers are here",
                body: "Dubai's business culture is heavily concentrated in a few industry clusters — tech, finance, real estate, media, consulting. The heads of these functions are reachable on LinkedIn directly, without going through a gatekeeper.",
              },
              {
                title: "Referrals start on LinkedIn",
                body: "When someone wants to hire a freelancer, the first thing they do is ask their network — often via a LinkedIn post or direct message. Your LinkedIn activity determines whether you get recommended.",
              },
              {
                title: "UAE B2B is relationship-driven",
                body: "Deals here are built on trust before they are built on capability. LinkedIn gives you the infrastructure to build that trust at scale — through consistent content, visible social proof, and a credible profile.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* 7 Profile Elements */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            The 7 Profile Elements That Actually Matter
          </h2>

          <ul className="space-y-3 mb-6">
            {profileElements.map((el) => (
              <li key={el.num} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span>
                  <strong className="text-gray-900">{el.name}:</strong> {el.summary} {el.detail}
                </span>
              </li>
            ))}
          </ul>

          {/* Writing Your Headline */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Writing Your Headline
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The formula: <strong>Role + Who You Help + Key Result.</strong> Keep it under 160 characters
            so it displays fully in search results without being truncated.
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                role: "UX Designer",
                bad: "Freelance UX Designer | Available for Projects",
                good: "Freelance UX Designer | Helping Dubai startups convert visitors into customers",
              },
              {
                role: "Copywriter",
                bad: "Freelance Copywriter | B2B and B2C | 7 years experience",
                good: "B2B Copywriter | I write proposals, case studies & emails that close deals in the UAE",
              },
              {
                role: "Social Media Manager",
                bad: "Social Media Manager | Content Creator | UAE",
                good: "Freelance Social Media Manager | Helping UAE brands build audiences that buy, not just follow",
              },
            ].map((ex) => (
              <div key={ex.role} className="border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{ex.role}</p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                    <span className="text-gray-400 line-through">{ex.bad}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-800 font-medium">{ex.good}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Writing the About Section
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The About section should be 200–250 words and follow the structure:
            <strong> PROBLEM → SOLUTION → PROOF → CTA.</strong> Start with the client&apos;s pain
            point — not with &quot;I am a...&quot; or &quot;With over X years of experience...&quot;
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-red-100 bg-red-50 rounded-xl p-5">
              <h3 className="font-semibold text-red-700 mb-2">Generic (Before)</h3>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                &quot;I am a passionate and dedicated freelance graphic designer with 6 years of experience
                in branding, visual identity, and digital design. I have worked with clients across
                various industries and am currently open to new freelance opportunities in Dubai.&quot;
              </p>
            </div>
            <div className="border border-emerald-100 bg-emerald-50 rounded-xl p-5">
              <h3 className="font-semibold text-emerald-700 mb-2">Optimized (After)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                &quot;Most Dubai startups don&apos;t have a branding problem — they have a trust problem.
                Their design looks inconsistent, their digital presence doesn&apos;t match the quality of
                their product. I fix that. In the last 18 months: helped a Series A fintech raise their
                brand score from 4.2/10 to 8.7/10. Built a visual identity for a Dubai logistics company
                that closed AED 2.3M in new contracts in Q1.&quot;
              </p>
            </div>
          </div>

          {/* Profile Settings */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Profile Settings That Matter
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              { title: "Creator Mode — turn it on", detail: "Changes the primary button on your profile from 'Connect' to 'Follow' and gives you access to LinkedIn's content creator tools. It signals to the algorithm that you are a content creator, which increases how widely your posts are distributed." },
              { title: "'Open to Work' vs Custom CTA", detail: "The green 'Open to Work' banner can read as desperation to senior decision-makers. Better option: use your headline to communicate availability. Write 'Currently taking projects from Q3 2026' in your About section CTA." },
              { title: "Contact info — make it fully visible", detail: "Go to Settings → Visibility → Who can see your contact info. Set it to 'Anyone on LinkedIn'. Add your professional email, website, and WhatsApp business number. In the UAE, a visible WhatsApp number dramatically increases conversion." },
            ].map((item) => (
              <li key={item.title} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{item.title}:</strong> {item.detail}</span>
              </li>
            ))}
          </ul>

          {/* Recommendations */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            Getting Your First 3 Recommendations
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Recommendations are the one form of social proof on LinkedIn that cannot be faked.
            Two strong recommendations from recognisable UAE brands will change how every client reads your profile.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-semibold text-emerald-900 mb-1">💡 Pro Tip: What to say in the request</p>
            <p className="text-sm text-emerald-800">
              A personalised request converts at 3–4x the rate of the generic LinkedIn request template.
              Suggest specific things to mention — this removes the blank-page problem and ensures the
              recommendation contains the specific proof points you actually want highlighted.
            </p>
          </div>

          {/* What an Optimized Profile Produces */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
            What an Optimized Profile Actually Produces
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { period: "Week 1–2", outcome: "Profile is complete. You appear in more searches. Profile views increase by 30–60% as you start posting." },
              { period: "Week 3–6", outcome: "First inbound DMs from people who found you through posts or search. Quality of connection requests improves." },
              { period: "Week 7–12", outcome: "Your name starts appearing in referral conversations. You receive 1–3 qualified enquiries per month." },
              { period: "Month 4–6", outcome: "Consistent enquiry flow. You begin to choose which leads to respond to rather than chasing all of them." },
            ].map((item) => (
              <div key={item.period} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.period}</h3>
                <p className="text-sm text-gray-600">{item.outcome}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Run Your UAE Freelance Business Like a Pro</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">Templates, SOPs, and systems built for UAE freelancers.</p>
            <Link href="/products/solokit-freelance-os" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">Get SoloKit →</Link>
          </div>

          {/* Related links */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/how-to-get-clients-linkedin-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ How to Get Freelance Clients on LinkedIn in the UAE (Posting Strategy)</Link>
              <Link href="/blog/personal-brand-freelancer-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ How to Build a Personal Brand as a UAE Freelancer</Link>
              <Link href="/blog/get-freelance-clients-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ How to Get Freelance Clients in the UAE (6 Strategies)</Link>
              <Link href="/blog/freelance-rate-calculator-uae" className="block text-blue-600 hover:text-blue-800 text-sm">→ Freelance Rate Calculator UAE</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
