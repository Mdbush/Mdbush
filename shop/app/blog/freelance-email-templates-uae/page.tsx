import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Email Templates for UAE Clients (Copy-Paste)",
  description:
    "10 copy-paste email templates for UAE freelancers — proposals, follow-ups, late payments, project kickoffs, scope changes, and client onboarding. Ready to use.",
  alternates: { canonical: "/blog/freelance-email-templates-uae" },
  openGraph: {
    title: "Freelance Email Templates for UAE Clients (Copy-Paste)",
    description: "10 ready-to-use email templates for UAE freelancers — proposals, follow-ups, late payments, and more.",
    type: "article",
    url: "/blog/freelance-email-templates-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Email Templates for UAE Clients (Copy-Paste)",
  description: "10 copy-paste email templates for UAE freelancers.",
  url: `${siteUrl}/blog/freelance-email-templates-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

const templates = [
  {
    title: "1. Cold outreach to a potential UAE client",
    note: "Keep it brief and specific — UAE decision-makers receive many cold messages.",
    body: `Subject: [Their company name] — [specific service]

Hi [First name],

I noticed [specific observation about their business — a recent project, award, or gap you spotted].

I work with [type of company] in the UAE on [your service]. [One specific result you have delivered].

Would it make sense to have a quick 20-minute call to see if there is a fit?

[Your name]
[Your title] | [Your contact]`,
  },
  {
    title: "2. Proposal follow-up (3 days after sending)",
    note: "Most lost deals are not rejections — they are follow-ups that never happened.",
    body: `Subject: Re: [Project name] proposal

Hi [Name],

Just wanted to check in on the proposal I sent on [date] — happy to answer any questions or talk through any part of it.

If the timing has changed, no problem at all — just let me know and we can pick this up when it makes sense.

Best,
[Your name]`,
  },
  {
    title: "3. Project kickoff confirmation",
    note: "Send this once a contract is signed and deposit is received.",
    body: `Subject: [Project name] — We are good to start

Hi [Name],

Excited to get started. Here is what happens next:

1. I will send over a brief for you to review/complete by [date]
2. Our kickoff call is scheduled for [date/time]
3. First deliverable: [description] by [date]

Please confirm you have received this email and the brief.

Looking forward to working together.

[Your name]`,
  },
  {
    title: "4. Scope creep response",
    note: "Say yes first, then price it — never say no outright.",
    body: `Subject: Re: [Additional request]

Hi [Name],

Happy to include that — it is a good addition.

This falls outside our original scope, so I will put together a short add-on proposal (AED [X]) and send it across today. Once approved, I can incorporate it into the timeline without impacting the original delivery.

Let me know if you want to discuss before I send the proposal.

[Your name]`,
  },
  {
    title: "5. First invoice follow-up (3 days after due date)",
    note: "Friendly, non-confrontational — most late payments are administrative delays.",
    body: `Subject: Invoice [#] — Quick check-in

Hi [Name],

Just checking in on Invoice [number] for AED [amount], which was due [date]. Let me know if you need me to resend it or if there is anything I can help with on your end.

[Your name]`,
  },
  {
    title: "6. Project delay notification",
    note: "Send early — before the deadline, not after.",
    body: `Subject: [Project name] — Updated timeline

Hi [Name],

I want to flag a change to our original timeline. [Brief explanation of what happened — be honest and specific].

I have adjusted the delivery date to [new date] to ensure the quality is where it needs to be. Here is what I am doing to minimize the impact: [specific steps].

Apologies for the change. I wanted to give you as much notice as possible rather than surprise you at the deadline.

[Your name]`,
  },
  {
    title: "7. Requesting a testimonial",
    note: "Best sent 1–2 weeks after project delivery, when the client is satisfied.",
    body: `Subject: Quick favour — [Project name]

Hi [Name],

It was great working together on [project]. I hope you are happy with how it came out.

Would you be willing to leave a short testimonial? Even 2–3 sentences would be incredibly helpful — I can feature it on my website and proposals.

If you prefer, I can draft a few words based on what we worked on and you can edit as you see fit.

Thank you in advance.

[Your name]`,
  },
  {
    title: "8. Ending a client relationship professionally",
    note: "Give enough notice and recommend a replacement where possible.",
    body: `Subject: [Project/Retainer] — Notice period

Hi [Name],

I have appreciated working with you on [project/account]. After careful consideration, I need to transition away from our current engagement.

My last day will be [date — minimum 2–4 weeks notice]. During this period, I am happy to ensure a smooth handover and document anything that would help your next [freelancer/agency].

If you would like, I can also recommend a few contacts who might be a good fit for what you need next.

Thank you for the work together.

[Your name]`,
  },
  {
    title: "9. Rate increase notice to existing client",
    note: "Give 30–60 days notice. State the new rate clearly and do not over-apologize.",
    body: `Subject: Rate update — [Your name]

Hi [Name],

I am writing to let you know that from [date], my rate will be [new rate] — an increase from [current rate].

I have kept my rates consistent for [X months/years] and this adjustment reflects [market rates / increased demand / scope of our work].

All projects or retainers starting before [date] will continue at the current rate.

Please let me know if you have any questions. I appreciate the continued collaboration.

[Your name]`,
  },
  {
    title: "10. Referral request to existing client",
    note: "Time this after delivering a successful project — when satisfaction is highest.",
    body: `Subject: A small ask

Hi [Name],

I am glad [project/result] has been going well.

I am looking to take on a few new clients this quarter. If you know anyone in [their industry or similar companies] who might benefit from [what you do], I would really appreciate an introduction.

I will always make sure anyone you refer gets excellent attention.

Thanks in advance,
[Your name]`,
  },
];

export default function FreelanceEmailTemplatesUAE() {
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
          <span className="text-gray-600">Freelance Email Templates for UAE Clients (Copy-Paste)</span>
        </nav>

        
        {/* Dark hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
          <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 -z-10 bg-dot-grid" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance Email Templates for UAE Clients (Copy-Paste)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">10 copy-paste email templates for UAE freelancers — proposals, follow-ups, late payments, project kickoffs, scope changes, and client onboarding. Ready to use.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>


        <div className="space-y-6 leading-relaxed">

          <p>
            Writing client emails from scratch is slow, inconsistent, and often leads to poor
            results because you are writing under pressure. These 10 templates cover the most
            common freelance email situations in the UAE — from cold outreach to rate increases.
            Copy, customize, send.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-900 mb-1">How to use these templates</p>
            <p className="text-amber-800">
              Replace everything in [brackets] with your real information. Read the template
              out loud before sending — if it does not sound like you, adjust the tone. These
              are starting points, not scripts to copy word-for-word.
            </p>
          </div>

          <div className="space-y-8 mt-6">
            {templates.map((template, i) => (
              <section key={i}>
                <h2 className="text-lg font-bold text-gray-900 mb-1">{template.title}</h2>
                <p className="text-sm text-gray-500 italic mb-3">{template.note}</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                    {template.body}
                  </pre>
                </div>
              </section>
            ))}
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>UAE Email Etiquette Tips</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li><strong>Reply speed matters:</strong> UAE business culture values responsiveness. Aim to reply within 4 hours during business hours, even if just to acknowledge receipt.</li>
              <li><strong>WhatsApp vs email:</strong> Many UAE clients prefer WhatsApp for quick exchanges. Use email for anything requiring a record: proposals, scope agreements, invoice disputes.</li>
              <li><strong>Ramadan and public holidays:</strong> Response times slow significantly during Ramadan and around national holidays (UAE National Day in December, Eid). Build this into your follow-up timelines.</li>
              <li><strong>Business week:</strong> UAE business days are Sunday–Thursday. Do not expect responses on Fridays — it is the start of the weekend.</li>
              <li><strong>Arabic greetings:</strong> Opening with &ldquo;As-salamu alaykum&rdquo; is appropriate if you know your contact is Muslim. &ldquo;Hi/Hello [name]&rdquo; is universally safe.</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">200 more templates for every situation</p>
            <h3 className="text-lg font-bold mb-2">The AI Prompt Pack Pro — write anything in minutes</h3>
            <p className="text-gray-400 text-sm mb-4">
              200 AI prompts covering proposals, follow-ups, content, social media, strategy, and business development.
              Generate any email, post, or document in under 5 minutes.
            </p>
            <Link
              href="/products/ai-prompt-pack-pro"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              See the AI Prompt Pack →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/client-communication-tips-freelancers-uae", title: "Client Communication for UAE Freelancers: Scripts That Work" },
                { href: "/blog/freelance-proposal-template-uae", title: "Freelance Proposal Template UAE (Copy-Paste)" },
                { href: "/blog/late-payment-freelance-uae", title: "How to Chase Late Payments as a Freelancer in the UAE" },
                { href: "/blog/get-referrals-freelance-uae", title: "How to Get Referrals as a UAE Freelancer" },
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
