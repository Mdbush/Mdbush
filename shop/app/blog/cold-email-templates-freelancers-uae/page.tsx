import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "5 Cold Email Templates That Get UAE Freelancers Hired (2026) — SoloKit",
  description:
    "Proven cold email templates for UAE freelancers: subject lines, body copy, and follow-up sequences for tech startups, real estate, hospitality, government, and professional services clients.",
  alternates: { canonical: "/blog/cold-email-templates-freelancers-uae" },
  openGraph: {
    title: "5 Cold Email Templates That Get UAE Freelancers Hired (2026)",
    description:
      "Proven cold email templates for UAE freelancers: subject lines, body copy, and follow-up sequences for tech startups, real estate, hospitality, government, and professional services clients.",
    type: "article",
    url: "/blog/cold-email-templates-freelancers-uae",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Cold Email Templates That Get UAE Freelancers Hired (2026)",
    description:
      "Proven cold email templates for UAE freelancers: subject lines, body copy, and follow-up sequences for tech startups, real estate, hospitality, government, and professional services clients.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Cold Email Templates That Get UAE Freelancers Hired (2026)",
  description:
    "Proven cold email templates for UAE freelancers: subject lines, body copy, and follow-up sequences for tech startups, real estate, hospitality, government, and professional services clients.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: `${siteUrl}/blog/cold-email-templates-freelancers-uae`,
  mainEntityOfPage: `${siteUrl}/blog/cold-email-templates-freelancers-uae`,
  image: `${siteUrl}/og-image.png`,
  keywords: [
    "cold email templates UAE freelancers",
    "freelancer outreach UAE",
    "cold email subject lines UAE",
    "UAE freelancer business development",
    "follow-up email freelancer UAE",
    "win clients UAE freelancer 2026",
  ],
};

export default function ColdEmailTemplatesFreelancersUAEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span>Cold Email Templates for UAE Freelancers</span>
        </nav>

        {/* Dark hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
          <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 -z-10 bg-dot-grid" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING · BUSINESS DEVELOPMENT</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">5 Cold Email Templates That Get UAE Freelancers Hired</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            Subject lines, body structure, and follow-up sequences that work in the UAE market —
            with industry-specific versions for tech, real estate, hospitality, government, and
            professional services.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Cold outreach is still the fastest way to win your first clients as a UAE freelancer — faster
          than building an audience, faster than waiting for referrals, and far more controllable than
          relying on platforms like Bayt.com or LinkedIn job listings where you are competing with
          hundreds of other candidates.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          The UAE market has its own dynamics. Decision-makers in Dubai and Abu Dhabi receive a high
          volume of outreach and are quick to delete generic messages. The templates below are built
          around the specifics of UAE business culture: they are direct but warm, reference local
          context, and are designed to open a conversation rather than close a deal in the first email.
        </p>

        {/* Timing tip box */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-10">
          <h2 className="font-bold text-emerald-900 mb-2">When to Send Cold Emails in the UAE</h2>
          <p className="text-emerald-800 text-sm leading-relaxed mb-3">
            The UAE working week runs <strong>Sunday to Thursday</strong>. Friday and Saturday are the
            weekend — avoid sending outreach on these days entirely.
          </p>
          <ul className="space-y-1 text-sm text-emerald-800">
            <li><strong>Best days:</strong> Sunday, Monday, Tuesday (highest open rates)</li>
            <li><strong>Best time:</strong> 9:00–11:00am UAE time (GST, UTC+4)</li>
            <li><strong>Avoid:</strong> After 4pm, during Ramadan working hours (reduced schedules), and the week of national holidays</li>
            <li><strong>LinkedIn DMs:</strong> Follow the same timing pattern — Sunday morning outreach consistently outperforms Thursday afternoon</li>
          </ul>
        </div>

        {/* Language note */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Arabic vs English: When to Use Which
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Communication preferences in the UAE market</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            English is the primary language of business in the UAE for international companies, startups,
            and most private sector firms. Cold emails to contacts at multinational companies, DIFC or
            ADGM-registered businesses, or expat-founded SMEs should always be in English.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            For government entities, semi-government organisations, and family-owned businesses — especially
            outside of Dubai — Arabic can be a meaningful differentiator. A brief Arabic greeting
            (<em>Assalamu Alaikum</em> or <em>Ahlan wa Sahlan</em>) at the opening of an otherwise
            English email is well-received by Emirati decision-makers and signals cultural awareness
            without requiring full Arabic fluency.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            If you are pitching Abu Dhabi government or ADNOC-adjacent entities, consider having a
            native Arabic speaker review your email before sending. A poorly translated Arabic email
            is significantly worse than a well-written English one.
          </p>
        </section>

        {/* Template 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Template 1: Tech Startup / Scale-up
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Best for: DIFC Fintech Hive, Hub71, in5 companies, SaaS startups</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 font-mono text-sm">
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Subject line options</p>
            <p className="mb-2 text-gray-800">&ldquo;Quick question about [Company]&apos;s [specific challenge]&rdquo;</p>
            <p className="mb-4 text-gray-800">&ldquo;[Mutual connection] suggested I reach out — [your skill] for [Company]&rdquo;</p>
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Body</p>
            <p className="text-gray-800 leading-relaxed">
              Hi [First Name],<br /><br />
              I noticed [Company] recently [specific trigger: raised a round / launched in KSA / hired for X role on LinkedIn]. Congratulations — that&apos;s a significant milestone.<br /><br />
              I&apos;m [Your Name], a freelance [your specialty] based in Dubai. I work with early-to-growth stage tech companies in the MENA region on [specific outcome: reducing onboarding drop-off / scaling content production / automating finance workflows].<br /><br />
              One thing I&apos;ve seen consistently at this stage: [one-sentence insight relevant to their situation]. I&apos;d love to explore whether there&apos;s a fit — would a 20-minute call this week or next work for you?<br /><br />
              [Your Name]<br />
              [LinkedIn URL] · [Website]
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            The trigger in line two is critical. Researching the company on LinkedIn and Crunchbase for
            5 minutes before sending will double your response rate. Generic outreach to startups gets
            ignored — startup founders and operators are pattern-matching for people who have done their
            homework.
          </p>
        </section>

        {/* Template 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Template 2: Real Estate
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Best for: developers, brokerages, PropTech companies, property managers</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 font-mono text-sm">
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Subject line options</p>
            <p className="mb-2 text-gray-800">&ldquo;[Your skill] for [Company] — Dubai market timing&rdquo;</p>
            <p className="mb-4 text-gray-800">&ldquo;Helping Dubai developers [specific outcome] — worth 15 mins?&rdquo;</p>
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Body</p>
            <p className="text-gray-800 leading-relaxed">
              Hi [First Name],<br /><br />
              I&apos;ve been following [Company]&apos;s projects — [specific project or development] is impressive work.<br /><br />
              I&apos;m a freelance [copywriter / digital marketer / financial modeller / interior designer] specialising in UAE real estate. I&apos;ve worked with [type of client: mid-size developers / off-plan sales teams / property managers] on [specific deliverable: launch campaign materials / investor decks / 3D visualisations / annual service charge reconciliations].<br /><br />
              Given the current pace of off-plan launches in Dubai, I&apos;m reaching out to a small number of developers and brokerages to see if there&apos;s a project where I could add value — without the overhead of a full agency retainer.<br /><br />
              Happy to share relevant work samples. Is there a project on your side where a freelancer would be useful right now?<br /><br />
              [Your Name]<br />
              [LinkedIn URL] · [Website or portfolio]
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Real estate contacts in Dubai respond well to the &quot;without the overhead of a full agency&quot;
            framing — cost efficiency is a real concern for many mid-size developers who use agencies
            for large campaigns but want leaner support for ongoing needs. Research on Property Finder,
            Bayut, and company LinkedIn pages takes minutes and dramatically improves relevance.
          </p>
        </section>

        {/* Template 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Template 3: Hospitality and F&amp;B
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Best for: hotels, restaurant groups, F&B consultants, catering businesses</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 font-mono text-sm">
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Subject line options</p>
            <p className="mb-2 text-gray-800">&ldquo;[Your skill] · [Restaurant/Hotel Name] · quick intro&rdquo;</p>
            <p className="mb-4 text-gray-800">&ldquo;Social content idea for [Brand] — take a look?&rdquo;</p>
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Body</p>
            <p className="text-gray-800 leading-relaxed">
              Hi [First Name],<br /><br />
              I had dinner at [Venue] last month — the [specific dish or experience] was exceptional. Genuinely one of the best [cuisine type] meals I&apos;ve had in Dubai.<br /><br />
              I&apos;m [Your Name], a freelance [food photographer / social media manager / menu consultant / F&amp;B concept developer] based in [Dubai/Abu Dhabi]. I work with independent restaurants and hotel F&amp;B teams on [specific area: Instagram content / menu engineering / staff training / concept launches].<br /><br />
              I noticed [specific observation: your Instagram engagement has strong reach but low saves / the new menu doesn&apos;t feature your signature dishes prominently]. I have a few ideas that might be relevant — would it make sense to connect for a quick call?<br /><br />
              [Your Name]<br />
              [Portfolio link] · [Instagram handle if relevant]
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Hospitality decision-makers — GMs, F&amp;B directors, marketing managers — are busy and
            bombarded with agency pitches. A genuine, specific reference to their venue cuts through.
            Visit in person if you can; the &quot;I was actually a customer&quot; opening is almost impossible
            to ignore.
          </p>
        </section>

        {/* Template 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Template 4: Government and Semi-Government
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Best for: government entities, ADNOC group, Emirates Group affiliates, quasi-government bodies</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 font-mono text-sm">
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Subject line options</p>
            <p className="mb-2 text-gray-800">&ldquo;[Your specialty] consultant — UAE national projects&rdquo;</p>
            <p className="mb-4 text-gray-800">&ldquo;Introduction: [Your Name], [specialty] specialist&rdquo;</p>
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Body</p>
            <p className="text-gray-800 leading-relaxed">
              Assalamu Alaikum [or Dear] [First Name],<br /><br />
              My name is [Your Name]. I am a freelance [your specialty] with [X] years of experience working with [type of organisation: federal entities / Abu Dhabi government bodies / UAE national champions] on [specific type of work].<br /><br />
              I am writing to introduce myself as an independent consultant available for project-based engagements. My recent work includes [brief, factual description of a relevant project — outcome-focused, not tool-focused].<br /><br />
              I would welcome the opportunity to discuss any upcoming initiatives where specialist support might be useful. I am available for a brief meeting at your convenience.<br /><br />
              With respect,<br />
              [Your Name]<br />
              [Credentials / qualifications]<br />
              [Contact details]
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Government and semi-government outreach requires a more formal tone than private sector
            emails. Keep it measured, factual, and credentials-forward. Avoid casual language, slang,
            or overly sales-oriented phrasing. Decision-making cycles are longer in this sector — expect
            weeks rather than days before a response, and follow up formally through multiple channels
            including LinkedIn and phone.
          </p>
        </section>

        {/* Template 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Template 5: Professional Services (Legal, Finance, Consulting)
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Best for: law firms, Big Four, management consultancies, financial services</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 font-mono text-sm">
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Subject line options</p>
            <p className="mb-2 text-gray-800">&ldquo;Freelance [specialty] resource — capacity for Q[X] projects&rdquo;</p>
            <p className="mb-4 text-gray-800">&ldquo;[Your Name] — [Qualification], available for project work&rdquo;</p>
            <p className="text-gray-500 text-xs mb-3 font-sans font-semibold uppercase tracking-wide">Body</p>
            <p className="text-gray-800 leading-relaxed">
              Dear [First Name],<br /><br />
              I am [Your Name], a freelance [financial modeller / technical writer / legal researcher / UX designer] with a background at [former employer type if relevant: Big Four / Magic Circle firm / DIFC-regulated entity].<br /><br />
              I am reaching out to explore whether [Firm] has periodic need for specialist project support. Professional services firms in the UAE frequently use freelancers to manage capacity peaks — particularly around audit seasons, deal execution, and regulatory submissions — and I have experience working within the confidentiality and quality standards these environments require.<br /><br />
              I am available on both short notice and longer-term project basis. If it would be helpful, I am happy to share my CV and relevant work examples. Would a brief call make sense?<br /><br />
              Best regards,<br />
              [Your Name]<br />
              [Qualifications, e.g., ACA, CFA, CIPP]<br />
              [LinkedIn URL]
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Professional services partners and managers respond best to credibility signals: former
            employer names, professional qualifications, and explicit acknowledgement of their standards
            around confidentiality and quality. Position yourself as a known quantity, not an unknown
            variable. Find contacts on LinkedIn and look for second-degree connections who can provide
            an introduction — a warm referral from a mutual connection dramatically increases response
            rates in this sector.
          </p>
        </section>

        {/* Follow-up sequence */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Follow-Up Sequence: Day 3, Day 7, Day 14</h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Most replies to cold emails come from follow-ups, not the initial message. A three-touch
            sequence over two weeks is the professional standard — more than that without a response
            moves into territory most UAE business contacts find intrusive.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full shrink-0">Day 3</span>
                <h3 className="font-semibold text-sm">Gentle bump</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-mono bg-gray-50 rounded-lg p-4">
                Hi [First Name], just bumping this up in case it got buried. Happy to share a few examples of relevant work if that would help. Either way, hope you have a good week.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full shrink-0">Day 7</span>
                <h3 className="font-semibold text-sm">Add value</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-mono bg-gray-50 rounded-lg p-4">
                Hi [First Name], I know you are busy — I will keep this short. I thought of [Company] when I read [relevant article/development] this week. [One sentence of why it is relevant]. If there is a project where I could be useful, I am easy to reach. If not, no worries at all.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded-full shrink-0">Day 14</span>
                <h3 className="font-semibold text-sm">The close</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-mono bg-gray-50 rounded-lg p-4">
                Hi [First Name], I will not keep following up after this — I know timing matters and this may simply not be the right moment. If things change, my details are below. I genuinely think there could be a good fit between what I do and what [Company] is building. Wishing you and the team a great [quarter / season].
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-sm mt-4 leading-relaxed">
            The Day 14 email is the most important follow-up. The &quot;I will not keep following up&quot;
            line reliably generates responses from contacts who were interested but had not made time.
            It creates a genuine close that respects their time while leaving the door open.
          </p>
        </section>

        {/* Platforms */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Where to Find Contacts in the UAE</h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Email outreach requires finding the right person first. These are the most effective channels
            for UAE freelancers:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Platform</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Best For</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">LinkedIn</td>
                  <td className="p-3 border border-gray-200">All sectors</td>
                  <td className="p-3 border border-gray-200">Primary B2B research tool in UAE; use Sales Navigator for scale</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Bayt.com</td>
                  <td className="p-3 border border-gray-200">Regional companies</td>
                  <td className="p-3 border border-gray-200">Large MENA company database; reveals hiring managers and HR contacts</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">DIFC/ADGM registers</td>
                  <td className="p-3 border border-gray-200">Financial services</td>
                  <td className="p-3 border border-gray-200">Public company registers with director names</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">Gulf Business / Entrepreneur ME</td>
                  <td className="p-3 border border-gray-200">SMEs and entrepreneurs</td>
                  <td className="p-3 border border-gray-200">Feature articles name decision-makers; use as trigger events</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Events / Gitex / Index</td>
                  <td className="p-3 border border-gray-200">Tech, design, trade sectors</td>
                  <td className="p-3 border border-gray-200">Exhibitor lists are gold — decision-makers attend in person</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            LinkedIn remains the single most effective research and outreach channel for UAE B2B
            freelancers. Many contacts prefer a LinkedIn connection request with a brief note before
            a cold email — it warms the relationship and increases email open rates significantly.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 mb-10">
          <p className="text-sm text-gray-400 mb-2">Sending outreach at scale?</p>
          <h2 className="text-xl font-bold mb-3">Freelancer Client CRM — Track Every Prospect and Follow-Up</h2>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            The Freelancer Client CRM is a Notion-based pipeline for UAE freelancers managing active
            outreach. Track every prospect from cold email through to proposal sent, follow-up due,
            and contract signed — without losing a lead in your inbox.
          </p>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Built for freelancers who are serious about business development: pipeline views by stage,
            follow-up date reminders, and a simple win/loss tracker to understand what is working.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors text-sm"
            >
              Get Freelancer Client CRM — AED 175
            </Link>
            <Link
              href="/products/solopreneur-os"
              className="inline-block border border-gray-600 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-sm"
            >
              Solopreneur OS — AED 249
            </Link>
          </div>
        </div>

        {/* Related guides */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid gap-3">
            {[
              { href: "/blog/freelance-rate-calculator-uae", label: "How to Calculate Your Freelance Rate in the UAE" },
              { href: "/blog/freelance-hr-consultant-rates-uae", label: "Freelance HR Consultant Rates UAE 2026" },
              { href: "/blog/freelance-accountant-bookkeeper-rates-uae", label: "Freelance Accountant and Bookkeeper Rates UAE 2026" },
              { href: "/blog/freelance-invoice-uae", label: "How to Invoice Clients as a UAE Freelancer" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-400">→</span>
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <Link
            href="/#products"
            className="inline-block text-gray-600 hover:text-gray-900 text-sm font-semibold border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-500 transition-colors"
          >
            Browse all SoloKit products →
          </Link>
        </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
