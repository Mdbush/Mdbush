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

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-14">
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Growth</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">June 16, 2026</span>
            <span className="text-gray-200">·</span>
            <span className="text-xs text-gray-400">8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Optimize Your LinkedIn Profile as a UAE Freelancer (2026 Guide)
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Step-by-step LinkedIn profile optimization for UAE-based freelancers — headline, About section,
            services, featured posts, and the exact settings that make clients contact you first.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            Your LinkedIn profile is your 24/7 salesperson. The problem is that most UAE freelancers
            have it actively selling against them. A vague headline. An About section that reads like a
            CV. A Featured section that&apos;s completely empty. Skills nobody searches for. The profile exists
            — it just doesn&apos;t do any work.
          </p>

          <p>
            When a Dubai CMO, a procurement manager at an Abu Dhabi consultancy, or a startup founder
            in DIFC is looking for someone who does what you do, they&apos;re not going to Fiverr first.
            They&apos;re going to LinkedIn. They type in a skill or a job title, they look at the first
            five profiles that come up, and they click the one that looks most credible. If that&apos;s
            not you, it&apos;s your competitor.
          </p>

          <p>
            This guide covers every element of your profile that matters — in the order of impact —
            with specifics for the UAE market. By the end, your profile will do the work you&apos;re
            currently doing manually.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Why LinkedIn Matters More in the UAE</h2>

          <p>
            The UAE has one of the highest LinkedIn adoption rates among professionals in the world.
            Over 5 million LinkedIn users are based in the UAE, in a country of roughly 10 million people.
            The majority of decision-makers — C-suite, department heads, senior managers — are active
            on the platform weekly, if not daily.
          </p>

          <p>
            There are three specific dynamics that make LinkedIn more valuable for UAE freelancers than
            it is in most other markets:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Decision-makers are here",
                body: "Dubai&apos;s business culture is heavily concentrated in a few industry clusters — tech, finance, real estate, media, consulting. The heads of these functions are reachable on LinkedIn in a way that would be almost impossible elsewhere. You can reach the CMO of a Dubai retail brand or the CTO of a fintech startup directly, without going through a gatekeeper.",
              },
              {
                title: "Referrals start on LinkedIn",
                body: "The UAE business community is dense. When someone wants to hire a freelancer, the first thing they do is ask their network — often via a LinkedIn post or a direct message. Your LinkedIn activity determines whether you get recommended. Someone who posts regularly and has a credible profile gets mentioned. Someone who is invisible on LinkedIn doesn&apos;t.",
              },
              {
                title: "UAE B2B is relationship-driven",
                body: "Deals here are built on trust before they are built on capability. LinkedIn gives you the infrastructure to build that trust at scale — through consistent content, visible social proof, and a profile that communicates credibility before a single conversation happens. In a market where who you know matters enormously, LinkedIn is the tool for expanding who knows you.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The 7 Profile Elements That Actually Matter</h2>

          <p>
            LinkedIn has dozens of profile fields. Most of them are irrelevant to whether clients
            contact you. These seven determine almost everything:
          </p>

          <div className="space-y-5 my-6">
            {profileElements.map((el) => (
              <div key={el.num} className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {el.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">{el.name}</h3>
                  <p className="text-sm text-gray-500 italic mb-1">{el.summary}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{el.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Writing Your Headline</h2>

          <p>
            The formula: <strong>Role + Who You Help + Key Result.</strong> Keep it under 160 characters
            so it displays fully in search results without being truncated.
          </p>

          <div className="space-y-3 my-6">
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
              {
                role: "Finance Consultant",
                bad: "Freelance Finance Consultant | FCA | MBA",
                good: "Freelance CFO | Helping UAE SMEs get investor-ready and close their Series A faster",
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
                    <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-800 font-medium">{ex.good}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p>
            A useful test: read your headline out loud and ask, &quot;would a client who doesn&apos;t know me
            understand exactly what I do and who I do it for?&quot; If the answer is no, rewrite it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Writing the About Section</h2>

          <p>
            The About section should be 200–250 words and follow the structure:
            <strong> PROBLEM → SOLUTION → PROOF → CTA.</strong> Start with the client&apos;s pain
            point — not with &quot;I am a...&quot; or &quot;With over X years of experience...&quot;
          </p>

          <div className="space-y-4 my-6">
            <div className="border border-red-100 bg-red-50 rounded-xl p-4">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Generic (Before)</p>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                &quot;I am a passionate and dedicated freelance graphic designer with 6 years of experience
                in branding, visual identity, and digital design. I have worked with clients across
                various industries and am committed to delivering high-quality work. I hold a Bachelor&apos;s
                degree in Design from a top university and am proficient in Adobe Creative Suite. I am
                currently open to new freelance opportunities in Dubai and the wider GCC. Please feel
                free to reach out if you&apos;d like to discuss your project.&quot;
              </p>
            </div>
            <div className="border border-green-100 bg-green-50 rounded-xl p-4">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-2">Optimized (After)</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                &quot;Most Dubai startups don&apos;t have a branding problem — they have a trust problem. Their
                design looks inconsistent, their digital presence doesn&apos;t match the quality of their
                product, and potential investors or clients leave without converting.
                <br /><br />
                I fix that. I&apos;m a freelance brand designer based in Dubai, and I work with early-stage
                and growth-stage startups across the UAE to build visual identities that communicate
                credibility before anyone reads a word of copy.
                <br /><br />
                In the last 18 months: helped a Series A fintech raise their brand score from 4.2/10
                to 8.7/10 in client surveys. Built the visual identity for a Dubai logistics company
                that closed AED 2.3M in new contracts in Q1. Redesigned a SaaS product UI that
                increased trial-to-paid conversion by 28%.
                <br /><br />
                If you&apos;re building something in the UAE and the design isn&apos;t reflecting the quality
                of the product — let&apos;s talk. Message me here or email hello@[yourname].com.&quot;
              </p>
            </div>
          </div>

          <p>
            Notice what changed: the optimized version opens with the client&apos;s problem, not the
            freelancer&apos;s background. It mentions specific results with real numbers. It ends with
            a clear, direct CTA. It is less than 250 words. The generic version is longer and
            communicates less.
          </p>

          <p>
            One technical detail: the first two lines of your About section show before the
            &quot;see more&quot; click in LinkedIn&apos;s mobile app. Make those first two lines count —
            they should hook the reader into clicking to read the rest.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Services Page — Use All 10 Slots</h2>

          <p>
            LinkedIn&apos;s Services feature is a dedicated, searchable section for freelancers and
            consultants. It shows up on your profile, it can appear in search results, and clients
            can submit enquiries directly through it. Yet fewer than 20% of UAE freelancers have it
            set up properly.
          </p>

          <p>
            You can list up to 10 services. Use all of them. The trick is to think about how
            your client would search, not how you would describe your work. Add location context
            where the field allows it — &quot;Dubai brand strategy&quot; and &quot;UAE copywriting&quot;
            are different entries from &quot;brand strategy&quot; and &quot;copywriting&quot;.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-3">Example: Freelance Web Designer in Dubai</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Website Design",
                "Landing Page Design",
                "UI/UX Design",
                "Webflow Development",
                "E-commerce Design",
                "Brand Identity Design",
                "Mobile App Design",
                "Website Audit",
                "Conversion Rate Optimisation",
                "Design Consultation",
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0" />
                  {service}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">Each service increases your surface area in LinkedIn search. Use all 10.</p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Featured Section — 3 Billboard Slots</h2>

          <p>
            The Featured section sits directly below your About and is the most-clicked part of a
            freelancer&apos;s profile. LinkedIn displays up to 5 featured cards, with the first 3
            visible without scrolling. Each card is a link — it can go to an external URL,
            a LinkedIn post, or a document you upload.
          </p>

          <p>
            What to feature, in priority order:
          </p>

          <div className="space-y-3 my-6">
            {[
              {
                priority: "1",
                item: "A case study or portfolio piece",
                note: "Even a 1-page Google Doc with before/after results from a client project is more persuasive than a blank Featured section. Keep it visual. Put the outcome in the title.",
              },
              {
                priority: "2",
                item: "A client testimonial or recommendation screenshot",
                note: "A screenshot of a genuine LinkedIn recommendation (or a DM from a happy client, with permission) is concrete social proof. Much more powerful than text on your profile.",
              },
              {
                priority: "3",
                item: "A strong piece of content you wrote",
                note: "If you&apos;ve published an article or had a LinkedIn post that performed well, feature it. It demonstrates expertise and gives clients a sense of your thinking before they&apos;ve spoken to you.",
              },
              {
                priority: "4",
                item: "Your proposal or services deck",
                note: "Some freelancers feature a PDF overview of their services — what they do, who they help, what clients get. This turns your profile into a self-serve sales page.",
              },
            ].map((item) => (
              <div key={item.priority} className="flex gap-4">
                <div className="w-6 h-6 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {item.priority}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.item}</p>
                  <p className="text-sm text-gray-500">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Profile Settings That Matter</h2>

          <p>
            Beyond the visible content of your profile, three settings have a direct impact on
            how many inbound enquiries you receive:
          </p>

          <div className="space-y-4 my-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">Creator Mode — turn it on</p>
              <p className="text-sm text-gray-600">
                Creator Mode changes the primary button on your profile from &quot;Connect&quot; to &quot;Follow&quot;
                and gives you access to LinkedIn&apos;s content creator tools — profile link, hashtag topics,
                and featured newsletter. It signals to the algorithm that you are a content creator,
                which increases how widely your posts are distributed. If you post content at all,
                Creator Mode should be on.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">&quot;Open to Work&quot; vs Custom CTA</p>
              <p className="text-sm text-gray-600">
                The green &quot;Open to Work&quot; banner signals availability but can read as desperation to
                senior decision-makers. A better option: set your Service Marketplace page as active
                (which shows a &quot;Services&quot; badge instead) and use your headline to communicate availability.
                If you want inbound work, write &quot;Currently taking projects from Q3 2026&quot; in your About
                section CTA rather than turning on the public &quot;Open to Work&quot; frame.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">Contact info — make it fully visible</p>
              <p className="text-sm text-gray-600">
                Go to Settings → Visibility → Who can see your contact info. Set it to &quot;Anyone on LinkedIn&quot;.
                Then add your professional email address, your website if you have one, and optionally
                your WhatsApp business number. In the UAE specifically, a visible WhatsApp number on
                your profile dramatically increases conversion from profile view to enquiry.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Getting Your First 3 Recommendations</h2>

          <p>
            Recommendations are the one form of social proof on LinkedIn that cannot be faked and
            cannot be removed by the subject. They live on your profile permanently and are written
            in someone else&apos;s voice. Two strong recommendations from recognisable UAE brands will
            change how every client reads your profile.
          </p>

          <p>
            <strong>Who to ask:</strong> Previous clients first (specifically people senior enough
            to have approved your work or signed off on the engagement). If you don&apos;t have client
            relationships that fit, ask senior colleagues from previous roles or collaborators
            whose names carry weight in your industry.
          </p>

          <p>
            <strong>What to say in the request:</strong> A personalised request converts at 3–4x
            the rate of the generic LinkedIn request template. Here is a message that works:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6 font-mono text-sm text-gray-700 leading-relaxed">
            <p>Hi [Name],</p>
            <br />
            <p>
              I&apos;m updating my LinkedIn profile and would love a short recommendation from you if
              you&apos;re open to it — specifically around the [project name] work we did together.
            </p>
            <br />
            <p>
              If it would make it easier, here are a few things that might be worth mentioning:
              [list 2–3 specific outcomes or qualities you demonstrated on that project].
            </p>
            <br />
            <p>
              No pressure at all — and happy to return the favour if you ever want one from me.
            </p>
            <br />
            <p>Thanks,<br />[Your name]</p>
          </div>

          <p>
            The key detail: suggest specific things to mention. This removes the blank-page
            problem for the person writing it, makes it faster for them, and ensures the
            recommendation contains the specific proof points you actually want highlighted.
          </p>

          <p>
            <strong>Target:</strong> 3 recommendations minimum before your profile is complete.
            One from a client, one from a collaborator, one from a former employer. After that,
            request a new recommendation after every major project that goes well.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Activity and Consistency</h2>

          <p>
            An optimized profile with no activity is a static business card. LinkedIn&apos;s algorithm
            actively suppresses accounts that don&apos;t post — your profile gets shown in fewer searches,
            your content reaches fewer people, and you become effectively invisible even to your
            existing connections.
          </p>

          <p>
            The minimum for a UAE freelancer who wants inbound from LinkedIn: <strong>2–3 posts per week.</strong>
            That&apos;s not a lot. It&apos;s one post Monday, one Wednesday, one Friday. Each post takes
            10–20 minutes to write if you have a system.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-3">3 post types that get clients (not just likes)</p>
            <div className="flex flex-col gap-3">
              {[
                {
                  type: "Results post",
                  format: "\"I just finished [project type] for a [Dubai/UAE industry] client. Here&apos;s what happened: [specific result with a number].\"",
                  why: "Decision-makers want proof. One real outcome from a real project is worth more than a month of tips posts.",
                },
                {
                  type: "Insight post",
                  format: "\"3 things every UAE [client type] gets wrong about [your expertise] — and what to do instead.\"",
                  why: "Positions you as the expert without selling. This gets shared. The CMO who reshares it is pre-qualifying themselves as a potential client.",
                },
                {
                  type: "Story post",
                  format: "A project that went wrong and what you learned. A client conversation that changed how you work.",
                  why: "Human content builds trust faster than polished content. The algorithm amplifies it because it drives comments.",
                },
              ].map((post) => (
                <div key={post.type} className="border border-gray-100 rounded-xl p-3">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{post.type}</p>
                  <p className="text-xs text-gray-500 italic mb-1">{post.format}</p>
                  <p className="text-xs text-gray-400">{post.why}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            One rule that separates the freelancers who get clients from LinkedIn from those who
            just have followers: <strong>reply to every comment within 24 hours.</strong> Each
            reply extends the post&apos;s reach in the algorithm. The comments section of your posts
            is where decision-makers watch how you think and communicate. How you reply to a
            comment is a mini job interview.
          </p>

          <p>
            For a deeper breakdown of the posting strategy — content calendar, comment strategy,
            outreach after building presence — see{" "}
            <Link
              href="/blog/how-to-get-clients-linkedin-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              How to Get Freelance Clients on LinkedIn in the UAE
            </Link>
            . The profile optimization in this article is the foundation; the posting strategy
            is what activates it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">What an Optimized Profile Actually Produces</h2>

          <p>
            Here is what to realistically expect after completing everything in this guide and
            posting consistently for 8–12 weeks:
          </p>

          <div className="flex flex-col gap-3 my-6">
            {[
              {
                period: "Week 1–2",
                outcome: "Profile is complete. You appear in more searches. Profile views increase by 30–60% as you start posting.",
              },
              {
                period: "Week 3–6",
                outcome: "First inbound DMs from people who found you through posts or search. Quality of connection requests improves — more relevant industry people, fewer recruiters.",
              },
              {
                period: "Week 7–12",
                outcome: "Your name starts appearing in referral conversations. Colleagues mention you when someone asks for a recommendation. You receive 1–3 qualified enquiries per month.",
              },
              {
                period: "Month 4–6",
                outcome: "Consistent enquiry flow. You begin to choose which leads to respond to rather than chasing all of them. Rate negotiation gets easier because clients come to you, not the other way around.",
              },
            ].map((item) => (
              <div key={item.period} className="flex items-start gap-3 text-sm border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-900 shrink-0 w-24">{item.period}</span>
                <span className="text-gray-500">{item.outcome}</span>
              </div>
            ))}
          </div>

          <p>
            The freelancers who see no results from LinkedIn are the ones who set up the profile
            but don&apos;t post, or post occasionally but never reply to comments. Profile + content +
            engagement is the complete system. Remove any leg and it stops working.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Write your LinkedIn profile and posts faster with AI</p>
            <p className="text-sm text-gray-500 mb-3">
              SoloKit&apos;s{" "}
              <Link
                href="/products/ai-prompt-pack-pro"
                className="text-gray-900 font-semibold underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                AI Prompt Pack Pro (AED 109)
              </Link>{" "}
              includes prompts specifically for UAE freelancers: LinkedIn headline formula, About section
              structure, results post templates, and bio rewrites. Feed your project history in and
              get a complete LinkedIn overhaul drafted in under 30 minutes. Over 50 prompts built for
              the specific language and context of the UAE freelance market.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="inline-block bg-gray-900 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Get AI Prompt Pack Pro (AED 109) →
            </Link>
          </div>

          <p>
            If you want to track the leads that come in from your optimized profile — which service
            enquiry came from which post, what stage each lead is at, when to follow up — that&apos;s
            exactly what the{" "}
            <Link
              href="/products/freelancer-client-crm"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              Freelancer Client CRM (AED 175)
            </Link>{" "}
            is built for. As your LinkedIn starts working, you need somewhere to put the pipeline.
          </p>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/blog/how-to-get-clients-linkedin-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Get Freelance Clients on LinkedIn in the UAE (Posting Strategy) →
              </Link>
              <Link
                href="/blog/freelance-proposal-tips-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                Freelance Proposal Tips for UAE Clients →
              </Link>
              <Link
                href="/blog/freelance-rate-calculator-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Calculate Your Freelance Rate in the UAE →
              </Link>
              <Link
                href="/blog/get-freelance-clients-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Get Freelance Clients in the UAE (6 Strategies) →
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
