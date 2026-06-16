import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Setup — SoloKit",
  robots: { index: false, follow: false },
};

const sequences = [
  {
    id: 1,
    name: "Welcome Sequence (new subscriber)",
    trigger: "When someone signs up via the email capture form on the site",
    emails: [
      {
        delay: "Immediately",
        subject: "Your 10 free AI prompts + something extra",
        preview: "Here are the prompts — and one more thing...",
        body: `Hi there,

Welcome to SoloKit — glad you're here.

Here are your 10 free AI prompts:
👉 solokit.cloud/free

These are the same prompts I use in my own freelance work. Copy them, fill the brackets, and use them today.

A few you'll probably use first:
→ Prompt #1 (Client Proposals) — saves 1-2 hours per proposal
→ Prompt #3 (Invoice Reminder) — gets invoices paid faster
→ Prompt #8 (Scope Creep Reply) — the polite but firm response

One thing to know about SoloKit: everything is built for UAE freelancers specifically. AED pricing, free zone context, Dubai market rates. Not US or UK freelance advice repackaged.

I'll send you one useful tip per week. No noise.

Mohamed
Founder, SoloKit
solokit.cloud`,
      },
      {
        delay: "3 days later",
        subject: "The #1 reason UAE freelancers stay stuck at AED 10K/month",
        preview: "It's not your skills or your clients",
        body: `Hi,

Most UAE freelancers I speak to aren't stuck because of skills.

They're stuck because of systems.

Specifically, three missing systems:

1. No way to track clients and pipeline
→ Leads fall through. Invoices get forgotten. Follow-ups never happen.

2. No templates for repeating tasks
→ Every proposal, onboarding email, and client update starts from scratch.

3. No standard process for projects
→ Every project feels different. Onboarding is chaotic. Revisions are endless.

These three problems have direct solutions:

The Freelancer Client CRM solves #1.
The AI Prompt Pack solves #2.
The SOP Starter Pack solves #3.

Or get all three (plus the Solopreneur OS) for AED 708 total.

Browse everything: solokit.cloud

30-day money-back guarantee on everything.

Mohamed`,
      },
      {
        delay: "7 days later",
        subject: "Quick question",
        preview: "What's your biggest challenge right now?",
        body: `Hi,

Quick one — what's the biggest challenge in your freelance business right now?

a) Finding consistent clients
b) Getting paid on time
c) Managing too many projects at once
d) Setting the right rates

Just hit reply and let me know. I read every response and will send you the most relevant resource for your situation.

Mohamed`,
      },
    ],
  },
  {
    id: 2,
    name: "Post-Purchase Sequence (product buyer)",
    trigger: "When a customer buys any SoloKit product (via Lemon Squeezy webhook → Brevo)",
    emails: [
      {
        delay: "Immediately (receipt email via Lemon Squeezy)",
        subject: "Your SoloKit purchase — download inside",
        preview: "Everything you need to get started",
        body: `Hi,

Thank you for your purchase! Here's everything you need:

📥 Download your product: [Lemon Squeezy link]

Getting started:
→ Notion templates: open the link → click "Duplicate" → add to your workspace
→ AI Prompt Pack: open the PDF or Notion doc → start copying prompts
→ SOP Pack: open the Notion doc → read the intro → adapt to your business

Any issues? Reply to this email and I'll sort it out within 24 hours.

Mohamed
SoloKit`,
      },
      {
        delay: "2 days later",
        subject: "Have you set it up yet?",
        preview: "Quick tips to get the most out of [Product Name]",
        body: `Hi,

Just checking in — have you had a chance to set up [Product Name]?

The most common question I get after purchase:

"How long does setup take?"

Answer: 10-20 minutes if you follow the setup guide included in the product. The hardest part is usually the first duplication into your own Notion workspace.

If you're stuck anywhere, hit reply and tell me where you're at.

If you're already using it — I'd love to know how it's going. Early feedback shapes future updates.

Mohamed`,
      },
      {
        delay: "7 days later",
        subject: "One tip for [Product Name] you might have missed",
        preview: "Most people don't use this feature",
        body: `Hi,

One tip for getting even more out of [Product Name]:

[Specific power-user tip relevant to the product — e.g., for CRM: use the Relationship Status filter to find "Nurture" clients who are ready for outreach]

This alone saves most users 30-60 minutes per week.

If you're enjoying [Product Name], two quick asks:

1. Leave a review on the product page (helps other UAE freelancers find it)
2. Know someone who could use this? Forward this email — 30% affiliate commission available at solokit.cloud/affiliates

Thank you for being a customer.

Mohamed`,
      },
      {
        delay: "21 days later",
        subject: "How's it going? (+ you might want this)",
        preview: "3 weeks in",
        body: `Hi,

It's been 3 weeks since you picked up [Product Name].

By now you should be saving [X] hours per week / seeing [specific outcome].

If you haven't set it up yet — no judgment. Hit reply and I'll help you get started in 15 minutes.

If it's working well, you might want to look at what pairs with it:

[If they bought CRM → recommend AI Prompt Pack]
[If they bought AI Prompts → recommend CRM]
[If they bought SOP Pack → recommend Solopreneur OS]

Browse the full store: solokit.cloud

30-day guarantee covers everything.

Mohamed`,
      },
    ],
  },
  {
    id: 3,
    name: "Weekly Newsletter (all subscribers)",
    trigger: "Every Monday — manually send or automate in Brevo",
    emails: [
      {
        delay: "Weekly (Monday 8am UAE)",
        subject: "One freelance tip for this week",
        preview: "Short. Practical. UAE-specific.",
        body: `Hi,

One tip for this week:

[Pick one from the social post library — reformat as email]

---

This week on SoloKit:
→ [New blog article if any]
→ [Product highlight or use case]

That's it. See you next Monday.

Mohamed
solokit.cloud

(Unsubscribe anytime — link below)`,
      },
    ],
  },
];

const breveSetupSteps = [
  {
    step: 1,
    title: "Create a Brevo account",
    detail: "Go to brevo.com → Sign up free. Free plan: 300 emails/day, unlimited contacts.",
  },
  {
    step: 2,
    title: "Create a contact list",
    detail: "Lists → Create a list → Name: 'SoloKit Subscribers'. All form signups go here.",
  },
  {
    step: 3,
    title: "Verify your sender domain",
    detail: "Settings → Senders & IP → Add a sender domain → Add DNS records to Namecheap/GoDaddy for solokit.cloud.",
  },
  {
    step: 4,
    title: "Create the Welcome Automation",
    detail: "Automations → Create workflow → Trigger: 'Contact added to list' → Add emails with 0-day, 3-day, 7-day delays.",
  },
  {
    step: 5,
    title: "Create the Post-Purchase Automation",
    detail: "Automations → Create workflow → Trigger: 'API call from Lemon Squeezy webhook' → Add 4 emails with delays.",
  },
  {
    step: 6,
    title: "Test both flows",
    detail: "Add your own email to the subscriber list → Check you receive the welcome email. Buy a test product → Check receipt arrives.",
  },
  {
    step: 7,
    title: "Set up weekly newsletter",
    detail: "Campaigns → Email campaigns → Schedule for Monday 8am. Import template from below.",
  },
];

export default function EmailSetupPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Email Setup Guide</h1>
        <p className="text-gray-500 text-sm mb-4">
          Step-by-step Brevo setup with ready-to-copy email sequences for SoloKit subscribers and customers.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm mb-6">
          <p className="font-semibold text-amber-900 mb-1">Brevo API key</p>
          <p className="text-amber-800 text-xs">Already set as <code className="bg-amber-100 px-1 rounded">BREVO_API_KEY</code> in Vercel environment variables. Find it in your Brevo dashboard under Settings → SMTP & API → API Keys.</p>
        </div>
      </div>

      {/* Setup steps */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-4">Brevo account setup (do once)</h2>
        <div className="space-y-3">
          {breveSetupSteps.map(({ step, title, detail }) => (
            <div key={step} className="flex gap-4 border border-gray-200 rounded-xl p-4">
              <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                {step}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email sequences */}
      <h2 className="text-lg font-bold mb-4">Email sequences</h2>
      <div className="space-y-10">
        {sequences.map((seq) => (
          <div key={seq.id} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-900 text-white px-5 py-4">
              <p className="font-bold text-sm">{seq.name}</p>
              <p className="text-xs text-gray-400 mt-1">Trigger: {seq.trigger}</p>
            </div>
            <div className="divide-y divide-gray-100">
              {seq.emails.map((email, i) => (
                <div key={i} className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-semibold">{email.delay}</span>
                  </div>
                  <div className="mb-2">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Subject</p>
                    <p className="text-sm font-semibold text-gray-900">{email.subject}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Preview text</p>
                    <p className="text-sm text-gray-600 italic">{email.preview}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Email body (copy-paste into Brevo)</p>
                    <pre className="text-xs text-gray-700 bg-gray-50 rounded-lg p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                      {email.body}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gray-950 text-white rounded-xl p-8">
        <h2 className="font-bold text-lg mb-3">Current automation status</h2>
        <div className="space-y-3 text-sm text-gray-300">
          <p><span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mr-2">LIVE</span><strong className="text-white">Welcome email:</strong> /api/subscribe sends prompts email immediately. Set BREVO_API_KEY in Vercel to activate. Contact added to list 2.</p>
          <p><span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mr-2">LIVE</span><strong className="text-white">Purchase confirmation:</strong> /api/webhook sends branded confirmation email + adds buyer to Brevo list 3. Requires BREVO_API_KEY + LEMONSQUEEZY_WEBHOOK_SECRET in Vercel.</p>
          <p><span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded mr-2">TODO</span><strong className="text-white">Welcome sequence emails 2 & 3:</strong> Set up 3-day and 7-day Brevo automations on list 2. Content above is ready to copy.</p>
          <p><span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded mr-2">TODO</span><strong className="text-white">Post-purchase follow-ups (day 2, 7, 21):</strong> Set up Brevo automations on list 3. The immediate confirmation is already sent by the webhook.</p>
          <p><span className="bg-gray-600 text-white text-xs font-bold px-2 py-0.5 rounded mr-2">MANUAL</span><strong className="text-white">Weekly newsletter:</strong> Schedule 30 min on Sunday. Use Brevo Campaigns → Email campaigns → schedule for Monday 8am UAE.</p>
          <p className="text-gray-500 text-xs mt-2">Brevo free plan: 300 emails/day. With 500 subscribers weekly = 500 emails/week. Within limits.</p>
        </div>
      </div>
    </main>
  );
}
