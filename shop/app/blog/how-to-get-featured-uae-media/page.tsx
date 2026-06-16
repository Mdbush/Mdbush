import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Featured in UAE Business Media as a Freelancer — 2026 Guide",
  description:
    "How UAE freelancers get quoted in Gulf News, Arabian Business, Forbes Middle East, and The National: pitching editors, press releases, HARO alternatives, and building a media profile.",
  alternates: { canonical: "/blog/how-to-get-featured-uae-media" },
  openGraph: {
    title: "How to Get Featured in UAE Business Media as a Freelancer — 2026 Guide",
    description: "How UAE freelancers get quoted in Gulf News, Arabian Business, and Forbes Middle East.",
    type: "article",
    url: "/blog/how-to-get-featured-uae-media",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Featured in UAE Business Media as a Freelancer",
  description: "How UAE freelancers get quoted and featured in major business publications.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/how-to-get-featured-uae-media",
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">How to Get Featured in UAE Media</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Personal Brand</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Get Featured in UAE Business Media as a Freelancer
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              A single quote in Gulf News or a contributed article in Arabian Business can generate more client
              inquiries than six months of LinkedIn posts. Media coverage creates instant credibility, Google
              presence, and social proof that no amount of self-promotion can replicate. Here is how UAE
              freelancers get featured.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            UAE journalists and editors are constantly looking for expert sources — freelancers and consultants
            who can speak credibly about specific industries or topics. Most of the freelancers they quote are
            not famous. They are simply the people who made themselves easy to find and relevant to approach.
            Getting featured is more accessible than most freelancers think.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The UAE Business Media Landscape
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Publication</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Best For</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Gulf News", "Broad UAE business, personal finance, real estate", "Expert quotes on trending topics; contributor articles"],
                  ["Arabian Business", "SME, startup, general business community", "Expert interviews, opinion pieces, contributed articles"],
                  ["The National", "High-quality journalism, broader regional readership", "Expert quotes on economic/business topics"],
                  ["Forbes Middle East", "C-suite readership, high-end brand positioning", "Lists (30 Under 30, etc.), interviews, thought leadership"],
                  ["Khaleej Times", "General UAE audience, strong digital readership", "Expert commentary, business section opinion pieces"],
                  ["Entrepreneur ME", "Startup and entrepreneurship community", "Founder stories, expert tips, contributed how-to articles"],
                  ["Wamda", "Tech and startup ecosystem", "Analysis pieces, expert commentary on tech topics"],
                ].map(([pub, bestFor, approach]) => (
                  <tr key={pub}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{pub}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{bestFor}</td>
                    <td className="px-4 py-3 text-emerald-700 text-xs">{approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The 4 Ways UAE Freelancers Get Featured
          </h2>

          <ol className="space-y-4 mb-8">
            {[
              {
                step: "1",
                title: "Responding to journalist requests",
                detail: "UAE journalists actively look for expert sources on Cision (PR software), directly via LinkedIn, and through PR agency networks. Follow journalists covering your niche on LinkedIn and Twitter/X. When they post looking for sources on your topic, respond immediately with a 2–3 sentence comment showing your relevant expertise. Speed matters — first response often gets quoted.",
              },
              {
                step: "2",
                title: "Pitching a contributed article",
                detail: "Most UAE publications accept contributed opinion pieces (1–2 per month). Find the editor's email on the masthead or LinkedIn. Pitch with: (1) A one-sentence angle that is newsworthy or contrarian, (2) Why you are the right person to write it, (3) Your proposed word count and deadline. Keep the pitch under 150 words. Do not send the full article in a cold pitch — just the angle.",
              },
              {
                step: "3",
                title: "Proactive PR around news events",
                detail: "When a major UAE business event happens (GITEX, Abu Dhabi Finance Week, new government regulation, economic data release), pitch yourself as a commentator within 24 hours. Journalists are desperate for expert sources immediately after news breaks. A timely, specific quote about an event's implications in your niche is highly likely to get used.",
              },
              {
                step: "4",
                title: "Building relationships with journalists directly",
                detail: "Connect with 5–10 journalists who cover your niche on LinkedIn. Engage genuinely with their articles (substantive comments, shares with your take). After 4–6 weeks of genuine engagement, introduce yourself: 'I am a [niche] specialist based in Dubai — happy to be a resource for any stories you're working on in [area].' This plants you in their mind for future stories.",
              },
            ].map(({ step, title, detail }) => (
              <li key={step} className="flex gap-4 border border-gray-200 rounded-xl p-4">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">{step}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Your Expert Media Profile
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Before pitching any publication, make sure your online presence matches your claimed expertise.
            Journalists Google every expert source before quoting them. Your media profile should include:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              { point: "A professional one-line bio", detail: "'[Name] is a [niche] consultant based in Dubai with [X] years advising [client type] companies in the UAE.' Clear, credible, searchable." },
              { point: "A professional headshot", detail: "Publications that feature you will ask for a high-resolution photo. Have one ready — a professional headshot taken in good lighting, not a selfie." },
              { point: "LinkedIn profile as your public CV", detail: "Journalists verify expertise via LinkedIn. Your LinkedIn must reflect the expertise you are claiming in your pitch. No gaps, clear niche, client logos if possible." },
              { point: "A selection of your existing writing", detail: "Even LinkedIn articles count as previous writing. If you have none, write 2–3 LinkedIn articles on your topic before pitching major publications." },
              { point: "A quick media inquiry response system", detail: "When a journalist reaches out, respond within 2 hours during business hours. Delayed responses lose placements. Set up email alerts and check LinkedIn DMs regularly." },
            ].map(({ point, detail }) => (
              <li key={point} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span><strong className="text-gray-900">{point}:</strong> {detail}</span>
              </li>
            ))}
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Once You Get Featured — Maximise It</p>
            <p className="text-sm text-emerald-800">
              A media mention has a short shelf life unless you amplify it. Share on LinkedIn and tag the
              publication and journalist. Add "As seen in [Publication]" to your website and LinkedIn About
              section. Reference it in client proposals: "I frequently comment on [topic] for [Publication]."
              One good feature can become a credential that generates opportunities for 2–3 years.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">AI Prompts for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Media pitch templates, expert bio writing, LinkedIn article prompts, and personal brand content — built for UAE freelancers.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/personal-brand-freelancer-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Building a Personal Brand as a UAE Freelancer</Link>
              <Link href="/blog/how-to-get-speaking-engagements-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Get Speaking Engagements in the UAE</Link>
              <Link href="/blog/how-to-write-linkedin-content-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ How to Write LinkedIn Content That Gets DMs</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
