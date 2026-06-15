import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Freelance Clients on LinkedIn in the UAE (Step-by-Step) — SoloKit",
  description:
    "Practical, non-cringe LinkedIn strategy for UAE-based freelancers to attract inbound clients — what to post, how to optimize your profile, and outreach that actually works.",
  alternates: { canonical: "/blog/how-to-get-clients-linkedin-uae" },
  openGraph: {
    title: "How to Get Freelance Clients on LinkedIn in the UAE (Step-by-Step)",
    description:
      "Practical, non-cringe LinkedIn strategy for UAE-based freelancers to attract inbound clients — what to post, how to optimize your profile, and outreach that actually works.",
    type: "article",
    url: "/blog/how-to-get-clients-linkedin-uae",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Freelance Clients on LinkedIn in the UAE (Step-by-Step)",
  description:
    "Practical, non-cringe LinkedIn strategy for UAE-based freelancers to attract inbound clients — what to post, how to optimize your profile, and outreach that actually works.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-get-clients-linkedin-uae",
  mainEntityOfPage: "https://solokit.cloud/blog/how-to-get-clients-linkedin-uae",
};

const postTypes = [
  {
    type: "Results posts",
    format: '"I built X for a Dubai [industry] client. Here\'s what happened."',
    why: "Decision-makers want proof. A real outcome — even a small one — beats any amount of brand content. Include a number if you can: 'response rate went from 2% to 18%'.",
  },
  {
    type: "Tips posts",
    format: '"3 things every Dubai company should know about [your expertise]"',
    why: "Positions you as an expert without selling. Readers share this. Decision-makers who see it start associating your name with the problem they need solved.",
  },
  {
    type: "Story posts",
    format: "Behind-the-scenes, lessons learned, mistakes you made",
    why: "Human content builds trust faster than polished content. A post about a project that went wrong — and what you did about it — generates more DMs than a portfolio showcase.",
  },
];

const outreachSteps = [
  {
    num: "1",
    title: "Warm the relationship first",
    body: "For 2 weeks, comment meaningfully on 5 posts per week from decision-makers in your target industry. Not 'Great post!' — a real sentence that adds value or asks a genuine question. They will notice you.",
  },
  {
    num: "2",
    title: "Send a specific connection request",
    body: '"Followed your posts on [topic]. I\'m a [service] specialist in Dubai — would love to connect." Short, specific, no pitch. Connection rate goes from ~20% to ~55% with a personalised note.',
  },
  {
    num: "3",
    title: "Wait 5 days, then send one message",
    body: '"Thanks for connecting. Not pitching anything — but if you ever need [service], I\'m around. Here\'s a recent project: [link]." That\'s it. No follow-up chase. You\'ve planted the seed.',
  },
];

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
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Growth</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">June 15, 2026</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">5 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Get Freelance Clients on LinkedIn in the UAE (Step-by-Step)
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Practical, non-cringe LinkedIn strategy for UAE-based freelancers to attract inbound clients —
            what to post, how to optimize your profile, and outreach that actually works.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            LinkedIn works differently in Dubai than it does anywhere else. The city has one of the highest
            concentrations of C-suite decision-makers per square kilometre on the planet. Everyone is within
            2 degrees of everyone else. And unlike Western markets where LinkedIn DMs go ignored for weeks,
            Dubai professionals move fast — often straight to WhatsApp within 48 hours of an initial connection.
          </p>

          <p>
            If you&apos;re a UAE-based freelancer and you&apos;re not active on LinkedIn, you are invisible to
            a huge segment of your potential clients. Here&apos;s how to fix that without posting cringe
            content or cold-pitching strangers.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Profile Optimisation (10 Minutes)</h2>

          <p>
            Your profile is a landing page. Most freelancers treat it like a CV. That&apos;s the wrong frame.
            A client visiting your profile is asking one question: <em>can this person solve my problem?</em>
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                field: "Headline",
                bad: "Freelance Designer",
                good: "I help Dubai brands convert website visitors into clients | Freelance Web Designer",
                note: "Lead with the outcome, not the job title. Decision-makers search for results, not roles.",
              },
              {
                field: "About section",
                bad: "I have 8 years of experience in...",
                good: "3 paragraphs: what you do, who you do it for, what they get. No life story.",
                note: "The first 2 lines show before the 'see more' cut-off — make them count.",
              },
              {
                field: "Featured section",
                bad: "Empty, or LinkedIn posts",
                good: "3 best client results, portfolio pieces, or case studies. Link out.",
                note: "This is prime real estate. Treat it like 3 billboard slots.",
              },
              {
                field: "Location",
                bad: "UAE",
                good: "Dubai, United Arab Emirates",
                note: "LinkedIn search filters by location. 'Dubai' surfaces you in city-level searches that 'UAE' misses.",
              },
              {
                field: "Skills",
                bad: "20 skills nobody searches for",
                good: "Top 5 most relevant, endorsed by 3 real past colleagues or clients",
                note: "Ask endorsements specifically — 'would you mind endorsing my [skill] on LinkedIn?' converts at ~70%.",
              },
            ].map((item) => (
              <div key={item.field} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">{item.field}</p>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span className="text-gray-500">{item.bad}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    <span className="text-gray-700 font-medium">{item.good}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">{item.note}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Content Strategy That Actually Gets Clients</h2>

          <p>
            Most freelancers post service announcements ("I&apos;m available for web design projects!") or
            generic motivational content. Neither attracts clients. Here are the 3 post types that do:
          </p>

          <div className="flex flex-col gap-4 my-6">
            {postTypes.map((item) => (
              <div key={item.type} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.type}</p>
                <p className="text-sm text-gray-600 italic mb-2">{item.format}</p>
                <p className="text-xs text-gray-500">{item.why}</p>
              </div>
            ))}
          </div>

          <p>
            Post frequency: <strong>3x per week minimum.</strong> Consistency beats quality.
            A decent post every Monday, Wednesday, Friday outperforms a brilliant post once a month.
            The LinkedIn algorithm rewards regular posting with progressive reach — stop for 2 weeks
            and you restart from zero.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-1">What NOT to post</p>
            <div className="space-y-1 text-sm text-gray-500 mt-2">
              {[
                "\"I'm excited to announce I'm open to new freelance opportunities\"",
                "General motivational quotes with no connection to your work",
                "Service announcements with no proof, results, or story",
                "Reposts of other people's content with no added commentary",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Writing LinkedIn posts faster</p>
            <p className="text-sm text-gray-500 mb-3">
              SoloKit&apos;s{" "}
              <Link
                href="https://solokit.cloud/products/ai-prompt-pack-pro"
                className="text-gray-900 font-semibold underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                AI Prompt Pack Pro
              </Link>{" "}
              includes ready-made prompts for writing all 3 LinkedIn post types — results posts, tips posts, and story
              posts — tailored for UAE freelancers. Feed your project notes in and get a post draft in 2 minutes.
            </p>
            <Link
              href="https://solokit.cloud/products/ai-prompt-pack-pro"
              className="inline-block bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Get AI Prompt Pack Pro →
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Outreach Formula (Non-Spammy)</h2>

          <p>
            Cold DMs that open with "Hi, I&apos;m a [service] provider and I&apos;d love to work with you"
            get ignored. Here&apos;s the 3-step approach that actually gets replies:
          </p>

          <div className="space-y-4 my-6">
            {outreachSteps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            What to realistically expect: a <strong>10–15% reply rate</strong> and 2–3 discovery calls per
            month from 30 outreach messages sent. That&apos;s not a small number — 2 calls per month can
            convert to 1 new client, which for a mid-tier Dubai freelancer is AED 8,000–15,000 of new work.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The UAE Specific: Move to WhatsApp</h2>

          <p>
            Dubai professionals read LinkedIn but they respond on WhatsApp. Once you&apos;ve had a meaningful
            exchange on LinkedIn and they&apos;ve expressed interest, suggest moving the conversation:
            <em>"Happy to share more — easiest if we hop on WhatsApp, here&apos;s my number."</em>
          </p>

          <p>
            This is not unusual in the UAE context. Decision-makers expect it. WhatsApp voice notes
            are a completely normal way to send a brief here. Lean into the local communication culture
            instead of insisting on formal email chains.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Timeline: What to Expect</h2>

          <div className="flex flex-col gap-3 my-4">
            {[
              { period: "Weeks 1–2", outcome: "Profile optimised, posting routine established. Little visible traction — this is normal." },
              { period: "Weeks 3–6", outcome: "Posts start getting traction from your existing network. First inbound DMs or profile views from decision-makers." },
              { period: "Months 2–3", outcome: "Consistent posting builds a small but real reputation in your niche. Referrals from LinkedIn connections start." },
              { period: "Month 6+", outcome: "You stop needing outreach. Inbound is consistent enough that you choose clients rather than chase them." },
            ].map((item) => (
              <div key={item.period} className="flex items-start gap-3 text-sm border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-900 shrink-0 w-24">{item.period}</span>
                <span className="text-gray-500">{item.outcome}</span>
              </div>
            ))}
          </div>

          <p>
            The freelancers who fail at LinkedIn give up at week 3 when they don&apos;t see immediate results.
            The ones who succeed treat it like a 6-month compounding investment — uncomfortable at first,
            then increasingly valuable.
          </p>

          <div className="bg-gray-900 rounded-2xl p-6 my-8">
            <p className="text-white font-semibold mb-2">Write better LinkedIn posts, faster</p>
            <p className="text-gray-400 text-sm mb-4">
              The AI Prompt Pack Pro includes 50+ battle-tested prompts for UAE freelancers — LinkedIn posts,
              client emails, proposals, and more. Write a week of content in under an hour.
            </p>
            <Link
              href="https://solokit.cloud/products/ai-prompt-pack-pro"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get AI Prompt Pack Pro →
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/get-freelance-clients-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Get Freelance Clients in the UAE (6 Strategies) →
              </Link>
              <Link href="/blog/how-to-price-freelance-services-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Price Your Freelance Services in the UAE →
              </Link>
              <Link href="/blog/notion-setup-guide-freelancers" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                Notion Setup Guide for UAE Freelancers →
              </Link>
              <Link href="/blog/freelancer-burnout-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                Freelancer Burnout in Dubai: How to Recognize It and Fix It →
              </Link>
            </div>
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
