import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "How to Write a Freelance Bio That Gets You Hired in the UAE — SoloKit",
  description:
    "Most UAE freelancer bios are forgettable. Here is the 5-part structure that actually works, before/after examples for 4 freelance types, and an AI prompt to write yours in 5 minutes.",
  alternates: { canonical: "/blog/how-to-write-freelance-bio-uae" },
  openGraph: {
    title: "How to Write a Freelance Bio That Gets You Hired in the UAE",
    description:
      "Most UAE freelancer bios are forgettable. Here is the 5-part structure that actually works, before/after examples for 4 freelance types, and an AI prompt to write yours in 5 minutes.",
    type: "article",
    url: "/blog/how-to-write-freelance-bio-uae",
    publishedTime: "2026-06-16",
    authors: ["SoloKit"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Freelance Bio That Gets You Hired in the UAE",
    description:
      "Most UAE freelancer bios are forgettable. Here is the 5-part structure that actually works, before/after examples for 4 freelance types, and an AI prompt to write yours in 5 minutes.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Freelance Bio That Gets You Hired in the UAE",
  description:
    "Most UAE freelancer bios are forgettable. Here is the 5-part structure that actually works, before/after examples for 4 freelance types, and an AI prompt to write yours in 5 minutes.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  url: `${siteUrl}/blog/how-to-write-freelance-bio-uae`,
  mainEntityOfPage: `${siteUrl}/blog/how-to-write-freelance-bio-uae`,
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
          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Write a Freelance Bio That Gets You Hired in the UAE</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">Most UAE freelancer bios are forgettable. Here is the 5-part structure that actually works, before/after examples for 4 freelance types, and an AI prompt to write yours in 5 minutes.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>6 min read</span>
          </div>
        </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Write a Freelance Bio That Gets You Hired in the UAE
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Your bio is working 24/7 — on LinkedIn, your website, proposals, email signature, Upwork.
            Most freelancer bios are forgettable. Here is how to write one that is not.
          </p>
        </div>

        <div className="space-y-6 leading-relaxed">

          <p>
            While you sleep, your bio is talking to potential clients. It lives on your LinkedIn profile,
            your website about page, the top of every proposal you send, your Upwork profile, and the
            one-liner at the bottom of your emails. It works around the clock. The question is whether
            it is working <em>for</em> you or silently costing you clients.
          </p>

          <p>
            Most UAE freelancer bios have the same problem: they describe what the freelancer does
            instead of what the client gets. They are written from the inside out — starting with the
            freelancer&apos;s background, qualifications, and skill list — when they should be written from
            the outside in, starting with the client&apos;s problem. This guide gives you the structure to
            fix that, with real examples across four freelance categories.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Section 1: The 3 Deadly Mistakes in Most UAE Freelancer Bios</h2>

          <div className="space-y-5 my-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Starting with your job title and years of experience</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  &quot;I am a graphic designer with 7 years of experience&quot; is how almost every freelancer
                  opens their bio. Which means it says nothing — because every other freelancer is saying
                  the exact same thing. The first sentence of your bio is prime real estate. Using it
                  to state your job title is the equivalent of opening a conversation by saying your
                  name and then stopping. It gives the reader no reason to keep reading.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Listing skills instead of outcomes</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  There is a significant difference between &quot;I do SEO&quot; and &quot;I helped 3 Dubai F&amp;B brands
                  rank on the first page of Google within 90 days of launch.&quot; The first statement tells
                  a client what you know. The second tells them what they might get. Clients do not hire
                  skills — they hire results. A bio that reads like a CV skills section is not working
                  hard enough.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ending with nothing actionable</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Most bios just... stop. They describe the freelancer, list some skills, maybe name
                  a project or two, and then end. No instruction on what the reader should do next.
                  Every bio should end with a clear, low-friction next step — a DM invitation, an email
                  address, a booking link. If a potential client finishes reading your bio and has to
                  figure out how to reach you, you have already lost some of them.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Section 2: The 5-Part Bio Structure That Works</h2>

          <p>
            A bio that converts has five parts, in this order. Each part does a specific job.
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                num: "1",
                label: "Who you help",
                detail:
                  "Name a specific audience, not a vague category. \"Dubai F&B brands\" is specific. \"Businesses\" is not. \"Early-stage SaaS founders in the Gulf\" is specific. \"Companies of all sizes\" is not. The more specific you are, the more the right client will feel you are speaking directly to them.",
              },
              {
                num: "2",
                label: "What you help them do",
                detail:
                  "State a specific outcome, not a service description. \"I help them launch their app\" is a service. \"I help them go from idea to App Store in 90 days without the typical budget overruns\" is an outcome with a point of difference built in.",
              },
              {
                num: "3",
                label: "Why you",
                detail:
                  "Your unique angle — experience, methodology, location advantage, niche knowledge, or background that makes you the obvious choice for this specific audience. This is not a list of qualifications. It is the one thing that separates you from everyone who also does what you do.",
              },
              {
                num: "4",
                label: "Proof",
                detail:
                  "One concrete result, a notable client type, or a specific project that demonstrates the outcome you promised in part two. Keep it tight — one strong example beats five vague ones.",
              },
              {
                num: "5",
                label: "CTA",
                detail:
                  "Tell the reader exactly what to do next. \"DM me on LinkedIn,\" \"Email me at [address],\" \"Book a 20-minute call here [link].\" Make the action clear, specific, and low-effort. One CTA only — choice paralysis is real.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Section 3: Before/After Examples for 4 Freelance Types</h2>

          <p>
            The structure above is easier to understand with real examples. Here are four transformations
            across common UAE freelance categories.
          </p>

          <div className="space-y-6 my-6">

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Designer</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Before</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I am a graphic designer with 5 years of experience in branding, print, and digital
                    design. I am proficient in Adobe Illustrator, Photoshop, and Figma. I have worked with
                    clients in various industries and am passionate about creating beautiful designs.&quot;
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">After</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I help Dubai hospitality brands look premium before they open their doors — brand
                    identity, menus, signage, and social assets that match the quality of the experience
                    inside. My clients include three restaurants that launched in the past year and are
                    now fully booked on weekends. If you are opening a venue and want the branding done
                    right from day one, send me a DM.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Developer</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Before</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I am a full-stack developer with expertise in React, Node.js, and AWS. I have 6 years
                    of experience building web applications for startups and enterprises. I am detail-oriented,
                    communicative, and deliver on time.&quot;
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">After</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I build MVPs for Gulf-based SaaS founders who need to ship fast without accumulating
                    technical debt they will spend years undoing. In the past two years I have taken 4
                    products from wireframe to live in under 10 weeks each. If you have a product idea and
                    a launch date, email me and I will tell you honestly whether it is achievable.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Marketing Consultant</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Before</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I am a marketing consultant with experience in SEO, social media, email marketing,
                    and paid advertising. I help businesses grow their online presence. I am available for
                    freelance projects and retainers.&quot;
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">After</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I help UAE e-commerce brands reduce their dependency on paid ads — building organic
                    SEO and email revenue that compounds month over month. One client went from 80% paid
                    traffic to 55% organic in 8 months; their CAC dropped by 40%. If you are spending too
                    much to acquire customers you should be able to get for free, book a 20-minute call.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Business Coach</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Before</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I am a certified business coach with 8 years of experience helping entrepreneurs and
                    professionals achieve their goals. I offer 1-on-1 coaching, group programmes, and
                    workshops. I am passionate about helping people unlock their potential.&quot;
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">After</p>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &quot;I work with UAE founders who are stuck between AED 50K and AED 200K/month — doing
                    everything themselves, growing slowly, and not sure what to fix first. In 6 months
                    of 1:1 coaching, my clients typically systemise 60–70% of their day-to-day and reclaim
                    10+ hours per week without losing revenue. DM me if that sounds like where you are.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Section 4: Adapting Your Bio for Different Platforms</h2>

          <p>
            One bio does not fit everywhere. The same core message needs to be reformatted depending
            on how much space you have and what the reader is expecting to find.
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                platform: "LinkedIn",
                note: "Only the first 2 lines are visible before the \"...more\" cut-off on mobile. Front-load the hook — who you help and the main outcome — before any supporting detail. If someone does not click \"more\", those two lines are your entire pitch.",
              },
              {
                platform: "Upwork",
                note: "Algorithm-friendly, result-focused, keyword-dense. Clients search specific terms — include the services and outcomes they are searching for (e.g. \"React developer Dubai\", \"SEO for UAE brands\"). Your opening paragraph needs to earn the click; the rest earns the shortlist.",
              },
              {
                platform: "Website about page",
                note: "The most room to breathe — and the most room to over-write. More personal and story-driven than other platforms, but still structured. Start with who you help, tell a short story of why you do this work, back it up with proof, close with a CTA. Avoid the wall-of-text that most about pages become.",
              },
              {
                platform: "Proposal intro",
                note: "The most concise version — 2 to 3 sentences maximum. The proposal is about the client&apos;s project, not your biography. Your intro just needs to establish credibility quickly and get out of the way. Something like: \"I specialise in [specific niche], and have done [similar project type] for clients in [relevant sector]. Here is how I would approach your brief.\"",
              },
              {
                platform: "Email signature",
                note: "One line. It is not a bio — it is a label that reminds the recipient what you do after the email conversation has moved on. \"[Name] — Brand designer for UAE hospitality venues\" is enough.",
              },
            ].map((item) => (
              <div key={item.platform} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.platform}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>

          <p>
            For a deep dive on the LinkedIn version specifically, see{" "}
            <Link
              href="/blog/freelance-linkedin-profile-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              how to optimise your LinkedIn profile as a UAE freelancer
            </Link>
            {" "}and{" "}
            <Link
              href="/blog/how-to-get-clients-linkedin-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              how to get clients from LinkedIn in the UAE
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Section 5: The AI Prompt to Write Your Bio in 5 Minutes</h2>

          <p>
            If you know what you want to say but cannot get the words right, this prompt will do the
            heavy lifting. Paste it into ChatGPT, Claude, or any AI writing tool, fill in the brackets,
            and you will have a solid first draft in under a minute.
          </p>

          <div className="border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">AI bio writing prompt</p>
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-xs text-gray-700 leading-relaxed space-y-3">
              <p>
                Write a professional freelance bio for a [your job title, e.g. &quot;UX designer&quot;] based in
                the UAE.
              </p>
              <p>
                My target client is: [describe specifically, e.g. &quot;Dubai-based F&amp;B and hospitality
                brands opening new venues&quot;].
              </p>
              <p>
                The main outcome I deliver is: [describe a specific result, e.g. &quot;launch-ready brand
                identities delivered in 3 weeks&quot;].
              </p>
              <p>
                My unique angle is: [e.g. &quot;I have worked with 12 Dubai restaurant groups and understand
                the operational reality of a venue launch&quot;].
              </p>
              <p>
                My best proof point is: [one specific result or notable project, e.g. &quot;My last client
                was featured in Time Out Dubai within a month of opening&quot;].
              </p>
              <p>
                The CTA I want to use is: [e.g. &quot;DM me on LinkedIn&quot; or &quot;email me at [address]&quot; or
                &quot;book a call at [link]&quot;].
              </p>
              <p>
                Write three versions: (1) a LinkedIn summary of 4–5 sentences, (2) an Upwork overview
                opening paragraph of 3–4 sentences, and (3) a one-line email signature description.
                Tone: confident, specific, and direct. No clichés. No phrases like &quot;passionate about&quot;
                or &quot;results-driven.&quot;
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              The more specific your inputs, the better the output. Vague inputs like &quot;I help businesses
              grow&quot; will produce vague output. Run the prompt twice with slightly different inputs and
              take the best elements from each.
            </p>
          </div>

          <p>
            For a full library of prompts covering bio writing, proposals, client emails, LinkedIn
            content, and more, see the{" "}
            <Link
              href="/products/ai-prompt-pack-pro"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              AI Prompt Pack Pro
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Closing: Your Bio Is Not About You</h2>

          <p>
            The most important reframe: your bio is not a self-description. It is a sales document
            written in the voice of someone who does not need to sell. The subject of your bio is
            your client — their problem, their desired outcome, their hesitation, their next step.
            You appear in it only as the means by which they get from where they are to where they
            want to be.
          </p>

          <p>
            Write it that way, and it will do more client acquisition work in a week than a month of
            cold outreach. Rewrite it once a quarter as your niche sharpens, your proof points
            accumulate, and the clients you want to attract evolve. A bio is not a permanent document
            — it is a current one.
          </p>

          <p>
            For more on getting clients once your bio is working, see{" "}
            <Link
              href="/blog/get-freelance-clients-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              how to get freelance clients in the UAE
            </Link>
            {" "}and the guide on{" "}
            <Link
              href="/blog/freelance-proposal-tips-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              freelance proposal tips for UAE clients
            </Link>
            .
          </p>

          <div className="bg-gray-900 rounded-2xl p-6 my-8">
            <p className="text-white font-semibold mb-2">Write better bios, proposals, and emails — instantly</p>
            <p className="text-gray-400 text-sm mb-4">
              The{" "}
              <span className="text-white font-medium">AI Prompt Pack Pro (AED 109)</span>{" "}
              includes 200+ prompts for UAE freelancers — bio writing, Upwork profiles, LinkedIn summaries,
              client proposals, follow-up emails, rate negotiation, and more. Give the prompt your context
              and get a polished draft in seconds. Built for freelancers who know their value but struggle
              to put it into words.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get AI Prompt Pack Pro (AED 109) →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Also: guides on getting clients</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              A strong bio opens doors — but you still need to walk through them. The SoloKit blog
              covers the full client acquisition picture, from LinkedIn strategy to proposal writing
              to referral systems.
            </p>
            <Link
              href="/blog/get-freelance-clients-uae"
              className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              How to get freelance clients in the UAE →
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/blog/freelance-linkedin-profile-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Optimise Your LinkedIn Profile as a UAE Freelancer →
              </Link>
              <Link
                href="/blog/get-freelance-clients-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Get Freelance Clients in the UAE →
              </Link>
              <Link
                href="/blog/freelance-proposal-tips-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                Freelance Proposal Tips for UAE Clients →
              </Link>
              <Link
                href="/blog/how-to-get-clients-linkedin-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Get Clients from LinkedIn in the UAE →
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
