import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TikTok Content Scripts — SoloKit",
  robots: { index: false, follow: false },
};

const setupChecklist = [
  "Switch to a Business account (Settings → Account → Switch to Business)",
  "Category: Software / Digital Content / Business Services",
  "Bio: 'Notion templates & AI tools for UAE freelancers 🇦🇪 | solokit.cloud'",
  "Username: @solokitco (or @solokit.ae / @solokithq)",
  "Profile photo: download from solokit.cloud/brand",
  "Link in bio: https://solokit.cloud",
  "Post 1 video per day for first 30 days — consistency beats production quality",
];

const scripts = [
  {
    id: 1,
    title: "How much do Dubai freelancers actually earn?",
    hook: "Nobody talks about the real numbers of freelancing in Dubai — so I will.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK (first 3 seconds — say this looking directly at camera):
"Nobody talks about the real numbers of freelancing in Dubai — so I will."

BODY:
"I'm going to break down what freelancers in Dubai actually earn in 2026.

Entry level — 0 to 2 years: AED 8,000 to 15,000 per month.

Mid level — 3 to 6 years: AED 15,000 to 35,000 per month.

Senior — 6 plus years: AED 35,000 to 80,000 per month.

But here's the thing nobody tells you — your billing rate is not your income.

To take home AED 20,000 a month, you need to bill about AED 25,600 a month.

The gap? Your freelance visa costs AED 7,500 a year. Health insurance — AED 5,000. Slow months — always factor in a 15% buffer.

So if you want real financial freedom in Dubai, you need a system, not just clients.

I built that system. Link in bio."

OUTRO: Point to phone/camera → "Follow for more UAE freelance content"

HASHTAGS: #DubaiFreelancer #FreelanceUAE #UAE #Dubai #Freelancing #HowMuchDoIEarn #DubaiSalary`,
  },
  {
    id: 2,
    title: "Freelance visa UAE — everything you need to know in 60 seconds",
    hook: "You don't need a company sponsor to live and work legally in Dubai.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"You don't need a company sponsor to live and work legally in Dubai. Let me explain."

BODY:
"In the UAE, freelancers can get their own visa through a free zone permit.

Step one — pick a free zone. The cheapest options are SHAMS or RAKEZ, starting at around AED 6,000 a year for the permit.

Step two — apply for your residence visa. That's another AED 3,500 to 5,000.

Step three — medical fitness test and Emirates ID. About AED 800.

Total first year: AED 10,000 to 16,000.

After that, you just renew the permit annually.

This gives you a legal UAE residence visa, the right to open a bank account, sponsor your family, and work with any client.

The most common question I get: is it worth it?

If you're billing AED 15,000 or more a month — absolutely yes.

Under AED 10,000 — run the numbers first.

Full breakdown in my bio."

HASHTAGS: #FreelanceVisaUAE #DubaiVisa #UAEFreelancer #Dubai #UAE #FreelanceLife`,
  },
  {
    id: 3,
    title: "3 mistakes that keep UAE freelancers broke",
    hook: "I watched 3 talented freelancers in Dubai fail in the same year. Same 3 mistakes.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"I watched 3 talented freelancers in Dubai fail in the same year. Same 3 mistakes every time."

BODY:
"Mistake number one — no upfront payment.

Every single one of them started projects with zero deposit. Clients disappeared. Invoices went unpaid. One guy lost AED 22,000.

Always get 50% upfront. Always.

Mistake number two — no system for leads.

When work was busy, they stopped marketing. Then work dried up and they panicked. The feast and famine cycle is a system problem, not a skill problem.

Mistake number three — no contract.

'We work on trust here' — famous last words. I cannot tell you how many times I've heard that from a client who then added 3 months of extra work for free.

One page, signed before you start. That's all it takes.

I made all three of these mistakes. Now I help Dubai freelancers fix them.

Link in bio — free tools to sort all three."

HASHTAGS: #FreelanceMistakes #DubaiFreelancer #FreelanceUAE #UAE #Freelancing #ClientWork`,
  },
  {
    id: 4,
    title: "Day in my life — UAE freelancer",
    hook: "What does a real workday look like as a freelancer in Dubai?",
    duration: "30-45 sec",
    viral: false,
    script: `HOOK:
"What does a real workday look like as a freelancer in Dubai? No fluff, real talk."

BODY (shoot as B-roll of your day):
"8 AM — I check my Notion CRM. I can see every client, every project, every outstanding invoice at a glance.

9 to 12 — deep work. Client deliverables only. Phone on silent.

12 to 1 — lunch. One of the benefits of freelancing in Dubai — I actually eat lunch.

1 to 3 — admin. Emails, proposals, follow-ups. I use AI prompts for all of these — takes me 20 minutes instead of 2 hours.

3 to 4 — business development. LinkedIn. Outreach. Referral follow-ups.

4 PM — done.

That's 7 hours of focused work. My employed friends work 9 hours and earn half what I do.

Freelancing isn't for everyone. But for the ones who build the right system? It's incredible."

HASHTAGS: #DayInMyLife #DubaiFreelancer #FreelanceLife #UAE #WorkFromDubai #Solopreneur`,
  },
  {
    id: 5,
    title: "How I got my first freelance client in Dubai with zero followers",
    hook: "I had zero followers, zero LinkedIn connections, and no portfolio. Here's how I got my first paying client in Dubai.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"I had zero followers, zero LinkedIn connections, and no portfolio. Here's how I got my first paying client in Dubai."

BODY:
"Step one — I made a list of 20 people I already knew who worked in companies.

Not strangers. People I knew. Former colleagues, classmates, people from my last job.

Step two — I sent each one a personal WhatsApp message.

Not a broadcast, not a sales pitch. Something like: 'Hey, I've started freelancing in [your field]. If you ever need help with [specific thing], I'd love to help. And if you know anyone who might — I'd really appreciate the referral.'

Step three — one of them said yes. I delivered the best work of my life.

Step four — I asked for a LinkedIn recommendation the day I delivered.

That recommendation got me my second client. And my third.

Your network is your pipeline. You just have to activate it.

Zero followers, zero budget. This still works."

HASHTAGS: #FirstClient #DubaiFreelancer #FreelanceUAE #GettingClients #UAE #Freelancing`,
  },
  {
    id: 6,
    title: "UAE tax explained for freelancers in 60 seconds",
    hook: "People keep asking me about taxes in Dubai. Here's the honest answer.",
    duration: "30-45 sec",
    viral: true,
    script: `HOOK:
"People keep asking me about taxes in Dubai. Here's the honest answer."

BODY:
"Personal income tax in the UAE: zero. That means your salary, your freelance income, your business profit — you keep it all.

But since 2023, there is a 9% corporate tax on business profits over AED 375,000 per year.

If you earn under that — which most freelancers do — you pay zero corporate tax too.

VAT is 5%, but only applies if your revenue from UAE clients exceeds AED 375,000 per year.

Most freelancers in Dubai effectively pay no tax at all.

But — and this is important — you DO still need to register for corporate tax on EmaraTax, even if you owe zero.

Full breakdown with everything you need to know is in my bio."

HASHTAGS: #UAETax #DubaiTax #FreelanceUAE #TaxFree #UAE #Dubai #DubaiFreelancer`,
  },
  {
    id: 7,
    title: "The AED 267 rule — what every UAE freelancer needs to know",
    hook: "If you're charging less than AED 267 per hour in Dubai, you're probably losing money.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"If you're a freelancer in Dubai charging less than AED 267 per hour, you're probably losing money. Let me show you why."

BODY:
"Most freelancers set rates by guessing. Here's the math instead.

Say you want to take home AED 20,000 a month.

Sounds straightforward — but add your annual costs:
Freelance visa: AED 7,500
Health insurance: AED 5,000
Software and tools: AED 3,600
That's AED 27,500 of annual overhead before you pay yourself.

Then factor in that you're only billing about 25 hours a week — the rest is admin, proposals, marketing.

That's 1,150 billable hours a year.

Divide your required annual revenue by 1,150 — and your minimum hourly rate is AED 267.

Most freelancers I talk to are charging AED 100 to 150.

They wonder why they feel broke despite being busy.

The rate calculator is in my bio — free to use."

HASHTAGS: #FreelanceRates #DubaiFreelancer #FreelanceUAE #HowMuchToCharge #UAE #Freelancing`,
  },
  {
    id: 8,
    title: "Best freelance platforms for UAE — ranked",
    hook: "I ranked every freelance platform for UAE-based freelancers so you don't have to waste time on the wrong ones.",
    duration: "45-60 sec",
    viral: false,
    script: `HOOK:
"I ranked every major freelance platform for UAE-based freelancers so you don't waste time on the wrong ones."

BODY:
"Starting out? Fiverr.
No proposals needed. You set up a gig, clients find you. Great for building your first 10 reviews.

Mid level? Upwork.
Biggest pool of international clients. 20% fee but it drops as you earn more. Billing in USD is great when you live in the UAE.

Top performers? Toptal.
Only 3% of applicants get accepted. But if you do — 80 to 200 dollars per hour and Fortune 500 clients.

For local UAE clients? LinkedIn.
Not a marketplace but it's where Dubai decision-makers actually are. Post 3 times a week about your results — not your services.

For Arab world clients? Nabbesh.
Dubai-based platform. AED-denominated projects. Lower competition than Upwork.

My recommendation: pick TWO and commit for 90 days.

Don't spread yourself across 5 platforms and do nothing well on any of them."

HASHTAGS: #FreelancePlatforms #DubaiFreelancer #Upwork #Fiverr #UAE #Freelancing #GetClients`,
  },
  {
    id: 9,
    title: "What a AED 50K/month freelancer does differently",
    hook: "I've spoken to freelancers earning AED 10K per month and AED 50K per month. Same skills. Completely different habits.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"I've spoken to freelancers earning AED 10K per month and AED 50K per month in Dubai. Same skills. Completely different habits."

BODY:
"AED 10K freelancer:
Sends hourly quotes.
Takes any project.
Does unlimited revisions.
Responds to everyone immediately.
Has no follow-up system.

AED 50K freelancer:
Sells project packages with fixed outcomes.
Turns down bad-fit clients.
2 revision rounds in the contract.
Has a 4-hour response window.
Follows up with every past client quarterly.

The difference isn't talent.
It's not even experience.

It's the systems and boundaries around the work.

I help UAE freelancers build those systems.

Start with my free tools — link in bio."

HASHTAGS: #FreelanceIncome #DubaiFreelancer #FreelanceUAE #Solopreneur #UAE #Freelancing`,
  },
  {
    id: 10,
    title: "POV: You just got a late payment notice from a UAE freelancer",
    hook: "POV: You're a client who didn't pay on time.",
    duration: "30-45 sec",
    viral: true,
    script: `HOOK (say this in a slightly firm, professional tone):
"POV: You're a client who just ignored a freelancer's invoice for 14 days."

BODY:
"Day 1: 'Hi, just confirming you received the invoice — it was due today.'

Day 7: 'Invoice is now 7 days overdue. Can you confirm payment is coming?'

Day 14: [show typing on screen] 'Per our contract, a 2% late payment fee has now been applied. I've sent an updated invoice. Please confirm payment by [date] or work on the next phase will be paused.'

[pause]

The client paid in 2 hours.

Late payment fees aren't aggressive. They're professional.

Every freelancer in Dubai needs three things in their contract: 50% upfront, late fees, and work pause clauses.

Template is in my bio."

HASHTAGS: #LatePayment #DubaiFreelancer #FreelanceUAE #GetPaid #ClientWork #UAE #Freelancing`,
  },
  {
    id: 11,
    title: "3 things Dubai clients say that are red flags",
    hook: "3 things a client says on a discovery call that should make you walk away.",
    duration: "30-45 sec",
    viral: true,
    script: `HOOK:
"3 things a client says on a discovery call that should make you walk away. Immediately."

BODY:
"Red flag one: 'We work on trust here — no need for a contract.'

That's not trust. That's a client who knows a contract protects you.

Red flag two: 'The last three freelancers didn't deliver what we wanted.'

Three in a row? The problem isn't the freelancers.

Red flag three: 'Can you do a small test project first, no charge?'

Your skills are already proven. No professional works for free to audition.

Bonus red flag: 'We have a tight budget but lots of exposure.'

Exposure doesn't pay the visa renewal.

Learn to say no. The pipeline you build with great clients is worth more than any one 'opportunity.'

Tools to run a better freelance business are in my bio."

HASHTAGS: #RedFlags #DubaiFreelancer #FreelanceUAE #ClientTips #Freelancing #UAE`,
  },
  {
    id: 12,
    title: "The AED 10K vs AED 50K freelancer morning routine",
    hook: "Same alarm time. Completely different first hour.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"Same alarm time. Same skills. Completely different first hour."

BODY:
"AED 10K/month freelancer morning:
Opens WhatsApp immediately.
Responds to every message within 5 minutes.
Checks email before getting out of bed.
Reacts to whatever's loudest.

AED 50K/month freelancer morning:
Phone on silent until 9am.
30-minute planning session first.
Reviews the week's priorities.
Blocks deep work time before opening any messages.

The AED 10K freelancer responds to everyone.
The AED 50K freelancer responds on their terms.

This isn't about being rude to clients.
It's about designing your day instead of reacting to everyone else's.

Your clients respect a freelancer with a system.
They take advantage of one who's always available.

Notion template for this in my bio."

HASHTAGS: #MorningRoutine #DubaiFreelancer #FreelanceUAE #Productivity #UAE #Solopreneur`,
  },
  {
    id: 13,
    title: "UAE freelancer tax explained in 30 seconds",
    hook: "Your UAE freelance income is tax-free. But there's one thing you still need to do.",
    duration: "30-45 sec",
    viral: true,
    script: `HOOK:
"Your UAE freelance income is tax-free. But there's one thing most people miss."

BODY:
"Personal income tax in UAE: zero.

Corporate tax: 9% — but only on profits over AED 375,000 per year.

If you earn under that? Zero corporate tax.

VAT: 5% — but only if your UAE client revenue exceeds AED 375,000 per year.

Most freelancers in Dubai effectively pay no tax at all.

Here's what you DO need to do: register on EmaraTax.ae, even if you owe nothing.

It's free. It takes 20 minutes. And skipping it creates problems later.

Full breakdown with the exact steps in my bio."

HASHTAGS: #UAETax #DubaiTax #FreelanceUAE #TaxFree #Dubai #UAE #DubaiFreelancer`,
  },
  {
    id: 14,
    title: "What I wish I knew before freelancing in Dubai",
    hook: "3 years freelancing in Dubai. 3 things I wish someone had told me.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"3 years of freelancing in Dubai. 3 things I wish someone had told me before I started."

BODY:
"One: The cost of living here will surprise you.

AED 175,000 a year sounds amazing. Until you pay AED 90,000 in rent, AED 7,500 for your visa, AED 5,000 for health insurance.

Calculate your real take-home before you celebrate your income.

Two: Networking here is not optional. It's the business model.

Dubai is a relationship city. The best projects come from people you know, not platforms.

One real coffee meeting a week beats 50 Upwork proposals.

Three: You will have a terrible month. Plan for it now.

Keep 2 months of expenses in reserve before you need it.

The freelancers who quit were always the ones who didn't plan for the dip.

Full guide to the UAE freelance setup in my bio."

HASHTAGS: #DubaiFreelancer #FreelanceUAE #Freelancing #Dubai #UAE #Solopreneur`,
  },
  {
    id: 15,
    title: "How to raise your freelance rate without losing clients",
    hook: "I raised my rate by 40% and kept every client. Here's the exact email I sent.",
    duration: "30-45 sec",
    viral: true,
    script: `HOOK:
"I raised my rate 40% and kept every single client. Here's the exact email I sent."

BODY:
"Subject: Updated rates for 2026

Hi [name],

Just a quick note — my rates are updating from [date].

[Current rate] → [New rate]

For projects we start before [date], I'll honor my current pricing.

Thank you for the continued work — genuinely looking forward to what we do next.

[Your name]"

That's it. No apology. No five-paragraph explanation. No asking for permission.

The clients who left? They were already looking for cheaper options.

The clients who stayed? They stayed because of the work, not the rate.

You've earned the rate you're charging. Communicate it like you believe it.

Rate calculator in my bio to find your real number."

HASHTAGS: #FreelanceRates #RaiseYourRates #DubaiFreelancer #FreelanceUAE #UAE #Pricing`,
  },
  {
    id: 16,
    title: "How to get your first client in Dubai with zero followers and zero experience",
    hook: "No portfolio. No followers. No platform. Here's the only strategy that works from zero.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"No portfolio. No followers. No platform. Here's the only strategy that works from zero."

BODY:
"Forget job boards. Forget cold emails to strangers.

Start with who you know.

Write a list of 20 people you actually know who work in companies.

Former colleagues. University friends. People from your last job.

Message each one directly — not a broadcast, a personal message:

'Hey [name], I've started taking on freelance [work]. If you ever need help with [specific thing], or know anyone who might — I'd love to get connected.'

One of them will say yes. Or connect you to someone who does.

When you get that first project: do the best work you've ever done.

Ask for a LinkedIn recommendation the day you deliver.

Use that recommendation in the next message.

Your network is a pipeline. You just have to turn it on.

Free guide to getting your first UAE client in my bio."

HASHTAGS: #FirstClient #DubaiFreelancer #FreelanceUAE #GettingClients #UAE #Freelancing`,
  },
  {
    id: 17,
    title: "Notion for freelancers — the 5-minute setup",
    hook: "You don't need a complicated system. You need this one Notion page.",
    duration: "30-45 sec",
    viral: false,
    script: `HOOK:
"You don't need a complicated system. You need this one Notion page."

BODY:
"Here's the only Notion setup a freelancer actually needs.

One database. Five columns.

Client name.
Project status — briefing, active, delivered, invoice sent, paid.
Project value in AED.
Invoice due date.
Notes.

That's your entire business in one view.

Filter by 'active' — that's your workload.
Filter by 'invoice sent' — that's your accounts receivable.
Filter by 'paid' — that's your revenue this month.

No complicated templates. No 40-page system.

One database. Five columns. Takes 20 minutes to set up.

Or skip the setup entirely — I built a pre-made version.

Link in bio."

HASHTAGS: #Notion #NotionTips #DubaiFreelancer #FreelanceUAE #Productivity #UAE`,
  },
  {
    id: 18,
    title: "Why you keep getting ghosted by Dubai clients",
    hook: "Dubai clients who ghost after a proposal are not being rude. They're showing you a system problem.",
    duration: "30-45 sec",
    viral: true,
    script: `HOOK:
"Dubai clients who ghost your proposal aren't being rude. They're showing you a system problem."

BODY:
"The #1 reason proposals get ignored in Dubai:

They answered the wrong question.

The client asked: 'Can you solve my problem?'

Your proposal answered: 'Here's everything I can do and my experience and my rates.'

Fix: Start every proposal with their problem, not your bio.

'Your website currently has no lead capture. This proposal outlines how to fix that in 3 weeks for AED 6,500.'

First sentence. Their problem. Your solution. Timeline. Price.

If they're still interested, they'll read the rest.

If they're not interested at that — no bio paragraph would have saved it.

The proposal template I use is in my bio."

HASHTAGS: #FreelanceProposals #DubaiFreelancer #ClientWork #FreelanceUAE #UAE #GetClients`,
  },
  {
    id: 19,
    title: "The freelance visa UAE walkthrough — step by step",
    hook: "I got my UAE freelance visa in 6 weeks. Here's every step.",
    duration: "45-60 sec",
    viral: true,
    script: `HOOK:
"I got my UAE freelance permit in 6 weeks. Here are all the steps no one explains clearly."

BODY:
"Step one: Pick your free zone.

Cheapest options: SHAMS or RAKEZ. Starting around AED 6,000 a year for the permit.

Step two: Apply for the freelance permit.

This takes 2-3 weeks. You'll submit your passport, CV, and service category.

Step three: Use the permit to apply for a UAE residence visa.

Another AED 3,500 to 5,000. Takes 2 weeks.

Step four: Medical fitness test and Emirates ID.

Around AED 800. Walk-in at most government health centers.

Total: AED 10,000 to 16,000 first year.

After that, you renew the permit annually at the same free zone.

Is it worth it?

If you're billing AED 15,000 a month: yes, immediately.
Under AED 10,000: run the numbers first.

Full breakdown with free zone comparison in my bio."

HASHTAGS: #FreelanceVisaUAE #UAEVisa #DubaiFreelancer #UAE #Dubai #Freelancing #FreelancePermit`,
  },
  {
    id: 20,
    title: "Stop using WhatsApp to run your freelance business",
    hook: "Your WhatsApp is not a CRM. And it's costing you clients.",
    duration: "30-45 sec",
    viral: true,
    script: `HOOK:
"Your WhatsApp is not a CRM. And it's silently costing you clients and money."

BODY:
"Signs you're running your business from WhatsApp:

You have to scroll back 3 weeks to remember what you quoted someone.

You're not sure if invoice number 7 was paid or not.

You've accidentally missed a follow-up because the message got buried.

A client asked about project status and you had to check 5 different chats.

This isn't a discipline problem. It's a system problem.

When everything lives in WhatsApp, you can't filter, sort, or track anything.

The fix: a simple client database.

Not expensive software. Not a complicated CRM.

A Notion table with 5 columns.

Client, project status, invoice amount, due date, notes.

Everything visible. Nothing lost.

Template for exactly this is in my bio. Free to duplicate."

HASHTAGS: #DubaiFreelancer #FreelanceUAE #Notion #Productivity #ClientWork #UAE #Freelancing`,
  },
];

export default function TikTokPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-pink-400 shrink-0" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">SoloKit Content Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">TikTok Content Scripts</h1>
            <p className="text-gray-300 text-lg mb-6 max-w-xl">20 ready-to-record scripts targeting UAE freelancer searches. Each video takes 5–10 minutes to record on your phone.</p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Account</span>
                <span className="ml-2 font-semibold text-white">@solokitco</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Format</span>
                <span className="ml-2 font-semibold text-white">Vertical 9:16 · 30–60 sec</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Best times (UAE)</span>
                <span className="ml-2 font-semibold text-white">7–9 AM · 12–2 PM · 7–9 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-10">

          {/* Setup checklist */}
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-5">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Account setup checklist — do this first
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 shadow-sm">
            <ul className="space-y-3">
              {setupChecklist.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Scripts */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
              Script library ({scripts.length} videos)
            </h2>
            <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">🔥 Highest viral first</span>
          </div>

          <div className="space-y-5 mb-12">
            {scripts.map((s) => (
              <div key={s.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center shrink-0">
                    {s.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {s.viral && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">High viral potential</span>
                      )}
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{s.duration}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug">{s.title}</h3>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Opening hook — say in first 2–3 seconds</p>
                  <p className="text-sm text-gray-900 font-semibold italic mb-4 pl-3 border-l-2 border-emerald-400">&ldquo;{s.hook}&rdquo;</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full script — copy &amp; record</p>
                  <pre className="text-xs text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                    {s.script}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Posting strategy</span>
            <h2 className="text-xl font-bold mb-5">TikTok growth playbook</h2>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Week 1–2</p>
                <p>Post scripts #1, #3, #6, #7, #9 (highest viral potential). One per day.</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Week 3–4</p>
                <p>Post scripts #11, #13, #14, #15, #16, #18, #20. Still one per day.</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Week 5–6</p>
                <p>Post remaining scripts. Repost the best performing video from week 1–2 with a different hook.</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">Ongoing</p>
                <p>Every time you publish a new blog article on SoloKit, record a 45-second TikTok version of the key insight.</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="font-semibold text-white mb-0.5">CTA on every video</p>
                <p>&ldquo;Link in bio → solokit.cloud&rdquo;</p>
              </div>
              <div className="border-l-2 border-gray-600 pl-4">
                <p className="font-semibold text-gray-400 mb-0.5">Don&apos;t</p>
                <p>Edit heavily, use complex transitions, or wait for perfect lighting. Just record and post.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link href="/blog" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
                Browse blog articles to turn into scripts →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
