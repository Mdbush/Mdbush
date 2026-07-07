import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Email for UAE Freelancers: Scripts That Get Replies (2026)",
  description:
    "Cold email scripts and outreach systems that work for UAE freelancers — subject lines, email structure, follow-up sequences, and what UAE clients actually respond to. Copy-paste templates included.",
  alternates: { canonical: "/blog/how-to-cold-email-clients-uae" },
  openGraph: {
    title: "Cold Email for UAE Freelancers: Scripts That Get Replies (2026)",
    description: "Cold email scripts and outreach systems for UAE freelancers — subject lines, templates, and follow-up sequences.",
    type: "article",
    url: "/blog/how-to-cold-email-clients-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cold Email for UAE Freelancers: Scripts That Get Replies (2026)",
  description: "Cold email scripts and outreach systems that work for UAE freelancers.",
  url: `${siteUrl}/blog/how-to-cold-email-clients-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const templates = [
  {
    label: "The specific observation email",
    use: "When you have researched the prospect and noticed something specific",
    subject: "Quick question re: [Company's] [specific thing you noticed]",
    body: `Hi [Name],

I was looking at [Company's] [website/LinkedIn/recent news] and noticed [specific observation — a problem, gap, or opportunity that your service addresses].

I work with [type of client] in [UAE sector] to [specific outcome you deliver]. [One-sentence proof: e.g., "Most recently I helped [similar company] reduce [X] by [Y]."]

Would it make sense to have a 15-minute call this week to see if there's a fit?

[Your name]`,
  },
  {
    label: "The referral-adjacent email",
    use: "When someone mutual can be name-dropped honestly",
    subject: "Re: intro from [Mutual Contact]",
    body: `Hi [Name],

[Mutual contact] mentioned you're [their current situation / what they're working on]. I work in that space — specifically [what you do] for [type of client].

I've [relevant credential or recent result in 1 sentence].

Happy to share how I approach this if it's useful — 20 minutes this week?

[Your name]`,
  },
  {
    label: "The problem-focused email",
    use: "When you know the industry pain point cold",
    subject: "Most [industry] companies in Dubai struggle with [specific problem]",
    body: `Hi [Name],

A common challenge I see with [company type] in the UAE is [specific problem]. It's usually caused by [root cause], and it ends up costing [outcome of not solving it].

I help [company type] solve this by [your approach in 1 sentence]. [Brief proof point].

Is this something you're dealing with? Happy to share how I've approached it if so.

[Your name]`,
  },
  {
    label: "The results-first email",
    use: "When you have a strong, directly relevant case study",
    subject: "How [Similar Company] [achieved specific result] in [timeframe]",
    body: `Hi [Name],

I recently helped [similar company type] in Dubai [achieve specific result] in [timeframe] by [your approach in 1 sentence].

I think something similar could work for [prospect's company] because [1 sentence connecting their situation to your case study].

Worth a quick call to explore? I'm available [day/time options].

[Your name]`,
  },
];

export default function HowToColdEmailClientsUAE() {
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
          <span className="text-gray-600">Cold Email for UAE Freelancers: Scripts That Get Replie</span>
        </nav>

        
        {/* Dark hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
          <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 -z-10 bg-dot-grid" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">CLIENT WORK</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Cold Email for UAE Freelancers: Scripts That Get Replies (2026)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">Cold email scripts and outreach systems that work for UAE freelancers — subject lines, email structure, follow-up sequences, and what UAE clients actually respond to. Copy-paste templates included.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>8 min read</span>
          </div>
        </div>


        <div className="space-y-6 leading-relaxed">

          <p>
            Cold email is the most scalable client acquisition method available to UAE freelancers.
            Unlike referrals (passive) or LinkedIn posting (slow), cold email lets you reach
            decision-makers at specific companies with a targeted message — on your timeline.
            The challenge is that most cold emails fail because they are generic, long, or
            about the sender rather than the recipient. This guide gives you the frameworks
            and scripts that actually get replies from UAE business owners and directors.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-900 mb-1">Realistic expectations for UAE cold email</p>
            <p className="text-amber-800">
              A well-targeted cold email campaign to UAE business owners or C-suite contacts
              generates 5–15% open rates and 1–4% reply rates with good copy and a specific offer.
              That means from 100 targeted emails, expect 1–4 conversations. This is not a
              volume game — it&apos;s a targeting and relevance game. 20 highly targeted emails
              outperform 200 generic ones every time.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>What Makes UAE Cold Emails Different</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li>• <strong>WhatsApp is often preferred over email:</strong> After your email generates interest, many UAE executives prefer to switch to WhatsApp. Include your number in the email signature — it signals local presence.</li>
              <li>• <strong>Decision-makers are more accessible:</strong> UAE companies tend to be flatter than their Western counterparts. The CEO of a 50-person company is reachable by direct email in a way that would be unusual in the UK or US.</li>
              <li>• <strong>Trust is relationship-driven:</strong> Name-dropping a mutual contact or industry event you both attended significantly increases reply rates. Cold email works better warm-ish than truly cold.</li>
              <li>• <strong>Brevity is essential:</strong> UAE executives are time-constrained. A 3-paragraph email outperforms a 7-paragraph email consistently. If your email requires scrolling, it will be skipped.</li>
              <li>• <strong>Professional email addresses:</strong> Use your domain email (you@yourname.com), not Gmail. A professional domain is basic credibility in the UAE market.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>The Anatomy of a High-Converting UAE Cold Email</h2>
            <div className="space-y-3 mt-4">
              {[
                { element: "Subject line", rule: "Specific, not clever. Reference their company name, industry, or a specific situation. Avoid: 'Partnership opportunity' or 'Quick question'. Use: 'Re: [Company]'s [specific thing]' or '[Industry problem] — solution that worked for [similar company]'" },
                { element: "Opening line", rule: "One specific observation about them. Not 'I hope this finds you well.' Not 'My name is X and I am a Y.' Something that shows you spent 5 minutes on their LinkedIn or website." },
                { element: "Value statement", rule: "One sentence: what you do and for whom. 'I help [type of company] in [industry] to [outcome].' No more. No paragraph of your biography." },
                { element: "Proof point", rule: "One concrete result: 'Most recently I helped [similar company type] achieve [specific measurable result].' No generic testimonials. Specific outcomes only." },
                { element: "Single CTA", rule: "One specific ask, not multiple options. 'Would a 15-minute call this week make sense?' Do not ask them to 'check out your website' or 'review your portfolio.' Ask for a conversation." },
              ].map((item) => (
                <div key={item.element} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-sm mb-2">{item.element}</p>
                  <p className="text-xs text-gray-600">{item.rule}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>4 Cold Email Templates (Copy-Paste)</h2>
            <div className="space-y-5 mt-4">
              {templates.map((t) => (
                <div key={t.label} className="border border-gray-200 rounded-2xl p-5">
                  <p className="font-bold text-gray-900 text-sm mb-1">{t.label}</p>
                  <p className="text-xs text-gray-500 mb-3">{t.use}</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 space-y-2">
                    <p className="text-xs font-semibold text-gray-500">Subject: <span className="font-normal text-gray-700">{t.subject}</span></p>
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">{t.body}</pre>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>The Follow-Up Sequence</h2>
            <p>
              80% of positive replies come after the first follow-up. Most freelancers give
              up after one email. Here is a 3-touch sequence that is assertive without being
              annoying:
            </p>
            <div className="space-y-3 mt-4">
              {[
                { day: "Day 1", action: "Send initial email" },
                { day: "Day 4", action: "Follow-up #1: 2 sentences. 'Just bumping this up in case it got buried. Still happy to chat if timing works.' No new content — just visibility." },
                { day: "Day 10", action: "Follow-up #2: Add a new piece of value. 'Thought this might be relevant to what you're working on: [link to useful article or a brief insight]. Still open for a call if useful.'" },
                { day: "Day 21", action: "Break-up email: 'I'll stop following up after this. If the timing is ever right for [outcome you provide], I'm [your name] at [email].' This generates more replies than any other follow-up in the sequence." },
              ].map((step) => (
                <div key={step.day} className="flex gap-4 border border-gray-200 rounded-xl p-4">
                  <span className="text-xs font-bold text-blue-700 bg-emerald-50 px-2 py-1 rounded-lg shrink-0 h-fit">{step.day}</span>
                  <p className="text-sm text-emerald-800">{step.action}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>Where to Find UAE Decision-Maker Emails</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li>• <strong>LinkedIn Sales Navigator:</strong> Paid but the most accurate source for UAE decision-maker profiles and company intelligence</li>
              <li>• <strong>Apollo.io / Hunter.io:</strong> Email finding tools. Verify all emails before sending — bounce rates above 5% hurt your domain reputation</li>
              <li>• <strong>Company websites:</strong> UAE companies often list direct emails on About/Team pages — especially SMEs and startups</li>
              <li>• <strong>Dubai Chamber member directory:</strong> Companies registered with Dubai Chamber are searchable by industry</li>
              <li>• <strong>Bayut / Dubizzle Jobs / LinkedIn Jobs:</strong> Companies actively hiring often have budget for freelance support too — reach hiring managers directly</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Get copy-paste email templates</p>
            <h3 className="text-lg font-bold mb-2">Freelance Email Templates for UAE Clients (Copy-Paste)</h3>
            <p className="text-gray-400 text-sm mb-4">
              10 done-for-you email templates — follow-ups, proposals, invoices, and client
              communication scripts built for the UAE market.
            </p>
            <Link
              href="/blog/freelance-email-templates-uae"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Get the Email Templates →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/get-freelance-clients-uae", title: "How to Get Freelance Clients in the UAE" },
                { href: "/blog/freelance-proposal-tips-uae", title: "How to Write a Proposal That Wins Clients in the UAE" },
                { href: "/blog/how-to-get-clients-linkedin-uae", title: "How to Get Clients on LinkedIn in the UAE" },
                { href: "/blog/freelance-email-templates-uae", title: "Freelance Email Templates for UAE Clients (Copy-Paste)" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">
                  → {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
