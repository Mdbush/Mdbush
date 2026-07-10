/**
 * Social post queue — the live rotation the social-post cron publishes from.
 *
 * This is the single source of truth for scheduled LinkedIn/Facebook posts.
 * The seed set below is hand-authored; the growth-engine social agent appends
 * reviewed posts here (via scripts/agents/lib/social.mjs) so that a *merged PR*
 * is what promotes a generated post into the live rotation — nothing publishes
 * without review. Educational, expert-voice posts — not ads.
 */
import { SITE_URL } from "./site";

export type SocialPost = {
  text: string;
  /** Optional theme/topic label (set on agent-generated posts). */
  theme?: string;
  /** Optional branded card / image URL (set on agent-generated posts). */
  imageUrl?: string;
};

export const socialPosts: SocialPost[] = [
  // ── TIPS & INSIGHTS ──
  {
    text: `Most UAE freelancers lose 2-3 hours every day on things that should take 20 minutes.

Not because they're slow. Because they have no system.

The three biggest time drains I see:
→ Manually tracking who owes money
→ Writing proposals from scratch
→ Re-explaining the same onboarding steps

Each one is a 1-hour fix. Build the system once, save the hour forever.

What's the one thing in your business you're still doing manually?

#FreelanceUAE #Productivity #Solopreneur #Dubai`,
  },
  {
    text: `Honest truth about freelancing in Dubai:

Your rate is not your income.

AED 300/hour sounds great until you account for:
→ 2 weeks unpaid vacation = AED 0
→ Health insurance: ~AED 400/month
→ Freelance visa renewal: ~AED 600/month averaged
→ Slow months: 15% buffer minimum

To take home AED 20K/month you need to bill ~AED 25,600/month.

That's the number most people ignore when they set rates.

#FreelanceUAE #FreelanceTips #DubaiFreelancer #SoloKit`,
  },
  {
    text: `Stop pitching services. Start selling outcomes.

"I design websites" → weak
"I build websites that convert visitors into clients" → stronger
"I built a landing page for a Dubai consultant that booked 8 clients in the first month" → wins

Clients don't buy what you do. They buy what they get.

Every time you update your proposal, ask: "Does this describe the result, or just the task?"

#FreelanceTips #UAE #ClientAcquisition #SoloKit`,
  },
  {
    text: `I've seen UAE freelancers get paid in 1 day and in 6 months.

The difference? The contract.

The 3 clauses that get you paid faster:
1. 50% upfront before work starts
2. Late payment fee (2% per week after due date)
3. Work pauses if payment is 14+ days overdue

Most clients pay immediately once they see clause 3. They don't want you to stop.

#FreelanceUAE #FreelanceContracts #GetPaid #SoloKit`,
  },
  {
    text: `Client fired you? Good.

That sounds harsh but hear me out.

The clients worth keeping:
✓ Pay on time (or early)
✓ Respect your process
✓ Give clear feedback
✓ Refer you to others

The clients worth firing:
✗ Pay late every time
✗ Add scope without asking
✗ Disappear then demand overnight delivery
✗ Negotiate after the contract is signed

One good client at AED 20K/month is worth more than 5 bad ones at AED 5K.

#FreelanceUAE #ClientManagement #Dubai #SoloKit`,
  },
  {
    text: `The fastest way to double your freelance income in UAE:

Stop finding new clients.

Keep the ones you have.

A client who pays AED 10K for a project is worth AED 50K+ over 2 years if you:
→ Deliver great work
→ Follow up 3 months later
→ Offer a retainer or next phase
→ Ask for a referral

Most freelancers spend 80% of their time on client acquisition and 20% on client retention.

Flip that ratio.

#FreelanceUAE #ClientRetention #Retainers #SoloKit`,
  },
  {
    text: `Free Notion template for UAE freelancers:

10 AI prompts you can use today:
→ Proposal that wins clients
→ Scope creep reply (polite but firm)
→ Invoice reminder (not awkward)
→ Client onboarding welcome email
→ LinkedIn bio that gets attention

No email required. No upsell on the page.

Just copy, fill the brackets, use immediately.

${SITE_URL}/free

#FreelanceUAE #AITools #ChatGPT #SoloKit`,
  },
  {
    text: `UAE freelance reality check:

Most freelancers don't fail because of bad work.

They fail because:
→ No consistent lead source
→ Feast-or-famine income
→ Clients that take 90 days to pay
→ No system to repeat what's working

Systems don't replace skill. They protect it.

What's the biggest operational headache in your freelance business right now?

#FreelanceUAE #FreelanceTips #Dubai #SoloKit`,
  },
  {
    text: `5 things successful UAE freelancers do differently:

1. They track revenue weekly, not monthly
   (Monthly is too late to course-correct)

2. They have a CRM — even a simple Notion table
   (No client falls through the cracks)

3. They raise rates every 12 months
   (Inflation in Dubai is real)

4. They have 2 months expenses in reserve
   (Slow months exist — plan for them)

5. They get referrals systematically
   (Not just when they remember to ask)

Which one are you still not doing?

#FreelanceUAE #Solopreneur #DubaiFreelancer #SoloKit`,
  },
  {
    text: `The hardest part of freelancing in Dubai isn't getting clients.

It's getting GOOD clients.

Red flags before you sign:
🚩 "This is a simple project" (it never is)
🚩 "We have a tight budget" before even discussing scope
🚩 "We've worked with 3 freelancers who all disappointed us"
🚩 "Can you do a small test project for free?"
🚩 No contract — "we work on trust here"

You can say no. Your pipeline is worth protecting.

#FreelanceUAE #ClientVetting #Dubai #SoloKit`,
  },
  {
    text: `What a AED 50K/month freelancer's week looks like vs AED 10K/month:

AED 10K/month:
→ Responds to every inquiry immediately
→ Proposes hourly rates
→ Does revisions until client is "happy"
→ No follow-up system
→ Takes any project

AED 50K/month:
→ Has a discovery call before quoting
→ Sells project packages
→ Limits revisions to 2 rounds (in writing)
→ Follows up with past clients quarterly
→ Turns down bad-fit projects

Same skills. Different systems.

#FreelanceUAE #FreelanceTips #Solopreneur #SoloKit`,
  },
  {
    text: `LinkedIn tip for UAE freelancers:

Post about your client results, not your services.

Instead of: "I offer social media management services"

Post: "Helped a Dubai F&B brand grow from 2K to 18K followers in 4 months. Here's the 3-part content strategy that did it."

One gets scrolled past. The other gets saved, shared, and leads to DMs.

The best freelance marketing isn't marketing. It's proof.

#FreelanceUAE #LinkedIn #ContentMarketing #SoloKit`,
  },
  {
    text: `Freelance visa reality in UAE (2026):

The cheapest legal way to work independently:
→ SHAMS or RAKEZ: ~AED 6,000-7,500/year for permit
→ Residency visa on top: ~AED 3,500-5,000
→ Total first year: ~AED 10,000-16,000

After that, renewal is just the annual permit fee.

Worth it? If you bill AED 15K+/month: yes, easily.
Under AED 10K/month: consider if the math works for you first.

Full breakdown: ${SITE_URL}/blog/freelance-visa-uae

#FreelanceUAE #UAEVisa #DubaiFreelancer #SoloKit`,
  },
  {
    text: `Most freelance proposals get rejected in the first paragraph.

Not because the price is wrong.

Because the opening line is always the same:

"My name is [X] and I am a freelance [Y] with [Z] years of experience."

The client doesn't care. Not yet.

Better opening: Start with their problem.

"Your website currently has no way to capture leads. This proposal outlines how to fix that in 3 weeks."

Same project. Completely different first impression.

Full guide: ${SITE_URL}/blog/freelance-proposal-tips-uae

#FreelanceProposals #UAE #ClientWork #SoloKit`,
  },
  {
    text: `Unpopular opinion: UAE freelancers should raise their rates right now.

Not because you can charge anything you want.

Because the market has moved.

Mid-level designer rates in Dubai:
2022: AED 100-150/hr
2026: AED 180-280/hr

Mid-level developer rates:
2022: AED 150-200/hr
2026: AED 250-400/hr

If you haven't raised rates since 2022 or 2023, you've taken a pay cut.

January is the easiest time to raise. "New year, updated rates." Give clients 30 days notice.

#FreelanceUAE #FreelanceRates #DubaiFreelancer #SoloKit`,
  },
  {
    text: `The 3-email sequence that gets UAE freelancers paid faster:

Email 1 (day invoice is due):
"Hi [name], just confirming you received invoice #X due today. Let me know if you need anything."

Email 2 (7 days overdue):
"Invoice #X is now 7 days past due. Can you confirm an ETA for payment?"

Email 3 (14 days overdue):
"Per our contract, a 2% late fee is now applied. I've sent an updated invoice. Please confirm payment by [date]."

Most get paid at Email 1 or 2. Email 3 is for people who actually need to see consequences.

#FreelanceUAE #GetPaid #Invoicing #SoloKit`,
  },
  {
    text: `Notion for freelancers — the actual setup that works:

Most people download a template and never use it.

What makes it stick:
1. One database for clients (not a spreadsheet)
2. Projects linked to clients (not a separate list)
3. Invoice log with status column (paid/unpaid/overdue)
4. Weekly revenue number visible on your home page
5. Daily task list that clears at end of day

That's it. 5 views. One workspace.

We built exactly this: ${SITE_URL}/products/freelancer-client-crm

#Notion #FreelanceUAE #Productivity #SoloKit`,
  },
  {
    text: `Every UAE freelancer eventually learns this the hard way:

50% upfront. Always.

Not because clients are dishonest.
Because projects change, decisions change, priorities change.

When a client has paid 50% upfront:
→ They show up to calls on time
→ They give feedback faster
→ They don't ghost when you deliver

The deposit isn't about trust.
It's about shared commitment to the project.

If a client refuses a deposit, that tells you something important.

#FreelanceUAE #FreelanceTips #ClientManagement #SoloKit`,
  },
  {
    text: `How to get your first 3 freelance clients in Dubai with zero budget:

Step 1: Make a list of 20 people you know who work in companies that could use your service.

Step 2: Message them individually. Not a broadcast. Not a pitch deck.
"Hey [name] — I've started taking on freelance [projects]. If you ever need [X], I'd love to help. Know anyone who might?"

Step 3: Deliver exceptional work for the first client. Ask for a LinkedIn recommendation immediately after.

Step 4: Use that recommendation in your next outreach.

That's the whole playbook.

#FreelanceUAE #GettingClients #Dubai #SoloKit`,
  },
  {
    text: `AI is changing freelancing — but not in the way most people think.

It's not replacing freelancers.
It's replacing slow freelancers.

A designer who uses AI to generate 20 concept directions in 1 hour beats a designer who presents 3 directions after a week.

A copywriter who uses AI to draft, then edits for voice and accuracy, produces better work faster.

The freelancers who will struggle: those who ignore AI entirely.
The freelancers who will thrive: those who use it as a productivity layer.

10 free AI prompts for freelancers: ${SITE_URL}/free

#AI #FreelanceUAE #ChatGPT #SoloKit`,
  },
  {
    text: `SOPs are not just for big companies.

If you do something more than twice, write down how you do it.

The 5 SOPs every freelancer needs first:
1. Client onboarding (first 72 hours of every project)
2. Proposal → contract → deposit sequence
3. Revision request handling
4. Invoice + follow-up sequence
5. Project closeout + testimonial request

Once these are documented, you can delegate any of them.
Before they're documented, every project starts from zero.

#FreelanceUAE #SOPs #Productivity #SoloKit`,
  },

  // ── BATCH 2 ──
  {
    text: `The discovery call is where projects are won or lost.

Not at proposal stage. Not at contract stage.

What to ask on every discovery call:
1. "What does success look like for this project?"
2. "What's the timeline, and is there a hard deadline?"
3. "Who else is involved in the decision to move forward?"
4. "What happened with the last freelancer/agency you worked with?"

Question 4 tells you everything. If they avoided the question or said "it didn't work out" — dig deeper before you agree to anything.

The discovery call is free. The mess of a bad project is not.

#FreelanceUAE #ClientWork #Dubai #SoloKit`,
  },
  {
    text: `Retainer vs project pricing — when to push for which:

Go retainer when:
→ The client needs you every month (ongoing content, maintenance, monthly reports)
→ You want predictable income
→ The relationship is strong and they trust your judgment

Go project when:
→ It's a one-time scope (website, branding, strategy doc)
→ You're still proving your value
→ The client doesn't have ongoing budget approved

The goal: land the project, deliver great work, then propose a retainer.

"I'd love to keep supporting you after launch — I offer monthly retainers from AED X. Want to discuss?"

Most clients say yes. Most freelancers never ask.

#Retainer #FreelanceUAE #Income #SoloKit`,
  },
  {
    text: `Niching down feels scary. It's actually your fastest path to higher rates.

"I do social media management" → you're competing with everyone

"I do LinkedIn content for B2B SaaS companies in the UAE" → you're the obvious choice for a specific buyer

When you niche:
→ Your proposals take 20 minutes instead of 2 hours
→ Your rates are higher because you're the specialist
→ Referrals happen naturally ("you need to speak to [your name], she does exactly this")
→ Your content attracts exactly the right clients

The niche doesn't need to be tiny. It needs to be specific enough that clients immediately see themselves in it.

#FreelanceNiche #DubaiFreelancer #FreelanceUAE #SoloKit`,
  },
  {
    text: `How to close a proposal that's been sitting for 2 weeks:

Don't send "just checking in."

Send this instead:

"Hi [name], I wanted to flag that I'm holding your project slot until [date]. After that, my schedule opens to new clients and I can't guarantee the same timeline.

Happy to adjust the scope or payment terms if that would help move things forward.

What's the current status on your end?"

This works because:
1. It creates real urgency (not fake)
2. It gives them an out (scope/payment adjustment)
3. It asks a direct question they can't ignore

About 40% of stalled proposals close within 48 hours of this message.

#FreelanceProposals #ClosingDeals #DubaiFreelancer #SoloKit`,
  },
  {
    text: `Your freelance business has a revenue ceiling you can't see.

It's your hourly rate multiplied by your available hours.

At AED 150/hr × 25 billable hours/week × 48 weeks = AED 180,000/year.

That's the ceiling. You cannot earn more by working harder.

To break through:
→ Raise your hourly rate (hardest but fastest)
→ Move to project pricing (stop selling hours)
→ Create a product (our store is proof this works)
→ Hire a subcontractor and take a margin

Most UAE freelancers plateau at AED 15-25K/month for years without realizing why.

The ceiling is always a business model problem, not a skills problem.

#FreelanceIncome #UAE #BusinessModel #SoloKit`,
  },
  {
    text: `The client ghosted after you sent the proposal.

Here's what actually happened:

50% of the time: they got busy and forgot to reply
25% of the time: someone internally pushed back on the budget
15% of the time: they went with another freelancer and feel awkward telling you
10% of the time: your proposal didn't address their real concern

What to do:
→ Wait 5 business days after submission
→ Send one short follow-up (not an essay)
→ If no reply after 3 more days, send a final close: "Closing this out — if timing changes, reach out."

Then move on.

Chasing ghosts is the biggest waste of time in freelancing. Build a pipeline so you can afford to let them go.

#FreelanceUAE #ProposalTips #DubaiFreelancer #SoloKit`,
  },
  {
    text: `How UAE freelancers should handle slow months:

Do NOT:
✗ Drop your rates to fill the calendar
✗ Take projects you'd normally decline
✗ Panic and burn through savings

DO:
✓ Double down on outreach to past clients
✓ Post more content (slow month = more time to create)
✓ Build something (template, guide, product)
✓ Review and raise your rates for when busy season returns
✓ Network — Dubai is a relationship-based economy

Slow months are planning months. Every freelancer who runs a sustainable business has learned to use them this way.

Budget rule: 2 months of expenses in reserve means a slow month is a strategy choice, not a crisis.

#FreelanceUAE #SlowMonth #Dubai #FreelanceTips #SoloKit`,
  },
  {
    text: `January is the best time to raise your freelance rates. Here's the script:

Email subject: "Updated rates for 2026"

"Hi [name],

I wanted to let you know that my rates will be updated from [date].

[Current rate] → [New rate]

For any projects we kick off before [date], I'm happy to honor my current pricing.

As always, thank you for the continued work — it's been great collaborating with you.

[Your name]"

That's it. No apology, no long explanation, no asking for permission.

Clients who respect your work will stay. Clients who leave over a reasonable rate increase were never the clients you wanted long-term.

#FreelanceRates #RaiseYourRates #DubaiFreelancer #SoloKit`,
  },
  {
    text: `The freelance financial review every UAE solopreneur should do in December:

1. Total revenue for the year (in AED)
2. Total expenses (visa, insurance, software, coworking)
3. Actual take-home (revenue minus expenses)
4. Average monthly revenue
5. Top 3 clients by revenue — are they coming back?
6. Rate in January vs December — did it go up?
7. Biggest lost deal — what could you have done differently?
8. Best project — why? Do more of that.

Most freelancers have no idea what they actually earned until tax season.

Running a business means knowing your numbers monthly, not annually.

Template for tracking this: ${SITE_URL}/products/freelancer-client-crm

#FreelanceFinance #UAE #EndOfYear #SoloKit`,
  },
  {
    text: `How to handle a client asking you to lower your rate:

What they say: "We love your work but the budget is AED 8,000 — can you match that?"
Your target: AED 12,000

Don't say: "Okay, I can do AED 9,000."

Do say: "I can work within AED 8,000. Here's what that covers: [reduced scope]. If you need [original scope], the investment is AED 12,000. Which option works better for your goals?"

You've done three things:
1. You didn't say no
2. You protected your rate
3. You made them choose between value and price — not between you and a cheaper freelancer

Most will pick the full scope. Some will take the reduced version. Very few will go elsewhere.

#FreelanceRates #Negotiation #Dubai #SoloKit`,
  },
  {
    text: `Dubai's real freelance advantage nobody talks about:

It's not the tax-free income.
It's not the lifestyle.

It's the density.

More than 3 million professionals in one city. Most companies are SMEs. Decision-makers are accessible.

In Dubai, you can go from "meeting someone at a networking event" to "signed contract" in 3 weeks.

In London or New York, that same path takes 3 months of procurement processes.

If you're a UAE freelancer not networking: you're leaving the biggest advantage of your location on the table.

One coffee meeting a week = 52 meetings a year = a pipeline that doesn't dry up.

#DubaiFreelancer #Dubai #Networking #FreelanceUAE #SoloKit`,
  },
  {
    text: `The 3-sentence client brief that saves hours of revision:

Before starting any project, send this to your client:

"Before I begin, I want to confirm my understanding:

[1 sentence: the problem you're solving]
[1 sentence: what the deliverable looks like]
[1 sentence: how success will be measured]

Does this match what you're expecting?"

Takes 2 minutes to write. Saves 10 hours of revision.

Most freelancers skip this step because it feels over-formal. But misaligned expectations are the #1 cause of scope creep, client dissatisfaction, and unpaid extra work.

The best projects start with the clearest briefs.

#FreelanceTips #DubaiFreelancer #ClientWork #SoloKit`,
  },
  {
    text: `Building a referral system in Dubai is easier than you think:

1. Deliver exceptional work
2. Ask for a testimonial the day you deliver
3. Ask: "Do you know anyone who could use [your service]?"
4. Send a WhatsApp follow-up 3 months later: "How's everything going? Happy to help if you have anything new."
5. When someone refers you — send a thank you gift or discount for their next project

That's the system. Most people only do step 1 and then wonder why referrals are rare.

In Dubai, business runs on relationships and trust. One referral client is worth AED 20,000+ over a year.

How many past clients have you followed up with in the last 90 days?

#FreelanceUAE #Referrals #Dubai #ClientRetention #SoloKit`,
  },
  {
    text: `Pricing in AED vs USD as a UAE freelancer:

Charge in AED when:
→ Your client is a UAE-based company
→ They have a UAE bank account
→ The project is local work

Charge in USD when:
→ Client is international
→ Project involves US/EU market work
→ Platform billing is in USD (Upwork, Toptal)

Why USD matters: USD/AED is pegged at 3.67. USD billing means your rate looks lower internationally ($100/hr vs AED 367/hr) while being identical in value.

On international platforms: USD pricing is standard. Don't convert to AED — you'll look out of place.

For local Dubai clients: AED is more professional and avoids conversion confusion.

#FreelanceUAE #Pricing #Dubai #Freelancing #SoloKit`,
  },
  {
    text: `One Notion tip that changed how I manage clients:

Create a "relationship status" property on every client record.

Options:
→ Active (current project)
→ Delivered (finished, awaiting testimonial)
→ Nurture (past client, follow up in 90 days)
→ Prospect (in conversation)
→ On hold (paused)

Filter to "Nurture" every Monday. Send a short WhatsApp to 2-3 people.

"Hey [name], hope the [project] has been working well. If you have anything new coming up, I'd love to help."

Response rate: around 30%. Conversion to project: around 50% of those.

This simple filter generates AED 3-5K in revenue a month from clients you've already won.

Free CRM template with this built in: ${SITE_URL}/products/freelancer-client-crm

#Notion #FreelanceUAE #ClientRetention #SoloKit`,
  },
  {
    text: `What no one tells you about freelancing in Ramadan in the UAE:

→ Business slows significantly in weeks 1-2
→ Decision-making stalls as people focus inward
→ Then weeks 3-4 pick back up as Eid approaches
→ Post-Eid: 2-week burst of activity as everyone tries to close Q2

How to use this pattern:

Before Ramadan: close projects, collect outstanding invoices
During Ramadan weeks 1-2: content creation, planning, proposal drafting
During Ramadan weeks 3-4: outreach ramps up ahead of Eid
Post-Eid: available and ready for new projects

Freelancers who understand this cycle don't panic in slow weeks.
They plan around it like the professionals they are.

#DubaiFreelancer #Ramadan #UAE #FreelanceTips #SoloKit`,
  },
  {
    text: `Hot take: the UAE freelance market is underpriced.

Compared to equivalent markets:

UAE senior developer hourly:    AED 250-400
London senior developer hourly: AED 700-1,100
NYC senior developer hourly:    AED 1,100-1,800

Same skills. Same deliverables. 40-70% cheaper in UAE.

Why?
→ Many UAE freelancers benchmark locally, not globally
→ International clients don't know UAE market rates
→ Platform buyers see "Dubai" and assume it's expensive (it's not)

Opportunity: International clients on platforms like Upwork and Toptal get UAE-quality work at a massive discount. That's your pitch.

"Senior-level work. UAE-based. Competitive international rates."

#FreelanceUAE #InternationalClients #DubaiFreelancer #SoloKit`,
  },
  {
    text: `The email signature every freelance professional needs:

[Your Name]
[Your Title, e.g. Freelance UX Designer]
solokit.cloud | +971 XX XXX XXXX
[LinkedIn URL]

[2-line portfolio teaser, e.g.: "Recent work: Dubai retail brand refresh → 34% increase in online sales"]

30-second reply policy: I aim to respond within 24hrs Mon-Fri.

Why this works:
→ Your title tells them what you do immediately
→ Website + LinkedIn = two proof points without asking
→ Portfolio teaser = social proof in every email
→ Response policy = sets expectations, reduces pressure

Most freelancers have no signature or a default one with just their name.

This costs nothing and works every time someone opens an email from you.

#FreelanceUAE #PersonalBrand #DubaiFreelancer #SoloKit`,
  },
  {
    text: `How to onboard a new client in 72 hours without wasting 3 emails:

Hour 0 — Deposit received:
Send welcome email with:
→ Project start date
→ What you need from them this week
→ Communication channel (WhatsApp/email/Slack)
→ Your working hours

Day 2 — Kick-off call (30 minutes):
→ Confirm goals and success criteria
→ Walk through timeline
→ Identify decision-maker and review contact
→ Agree on revision process

Day 3 — Brief confirmation email:
→ "Per our call, here's what we agreed…"
→ First milestone date
→ Next communication point

Clients who feel organized in the first 72 hours become your longest-term clients.

SOP template for this: ${SITE_URL}/products/sop-starter-pack

#ClientOnboarding #FreelanceUAE #DubaiFreelancer #SoloKit`,
  },
  {
    text: `The fastest way to build a personal brand in Dubai as a freelancer:

Not a personal website.
Not a logo.
Not 10,000 LinkedIn followers.

One sentence that says exactly what you do and for whom.

"I help Dubai F&B brands grow Instagram accounts that drive restaurant bookings."

Not: "I'm a social media manager."

When you can say it in one sentence, strangers immediately know if they're your client.

When your clients can repeat it, you get referrals.

When your LinkedIn headline says it, people click through.

Write your one sentence. Test it in real conversations.
If they say "oh, interesting — do you work with companies like [X]?" you've got it right.

#PersonalBrand #DubaiFreelancer #Freelancing #UAE #SoloKit`,
  },
  {
    text: `The cheapest insurance a UAE freelancer can buy: a 50% deposit clause.

Not because clients are dishonest — because projects change, priorities shift, and people get busy.

When a client has paid 50% upfront:
→ They show up to calls
→ They give feedback faster
→ They don't ghost on delivery

If a client won't pay a deposit, that's the contract telling you something.

We put the exact clause in the Contract Kit: solokit.cloud/products/freelance-contract-kit

#FreelanceUAE #GetPaid #Contracts #SoloKit`,
    theme: "contracts",
  },
  {
    text: `Stop sending one price. Send three.

Freelancers who quote a single number get haggled. Freelancers who offer three tiers get chosen.

→ Essential (the "just enough" option)
→ Recommended (where you actually want to land)
→ Complete (the anchor that makes Recommended look sensible)

Most clients pick the middle. So price the middle where you want to be.

The pricing one-pager is in the Proposal Pack: solokit.cloud/products/client-proposal-pack

#FreelanceUAE #Pricing #Proposals #SoloKit`,
    theme: "pricing",
  },
  {
    text: `~60% of freelance deals close in the follow-up — not the proposal.

Yet most freelancers send a quote and go silent because "just checking in" feels awkward.

The fix: never "check in." Add value instead.

Email 2 in a good sequence says: "While this is on your desk, one idea — [a specific, useful suggestion for their problem]."

That's not chasing. That's demonstrating what working with you feels like.

#FreelanceUAE #ClientAcquisition #Proposals #SoloKit`,
    theme: "getting clients",
  },
  {
    text: `A UAE freelancer's late-payment escalation that actually works:

Day 0 (due): "Just confirming invoice #X is due today."
Day 7: "Invoice #X is 7 days overdue — can you confirm an ETA?"
Day 14: "Per our contract, a 2% weekly late fee now applies."

Most clients pay at step 1 or 2. Step 3 is for the ones who need to see the clause exists.

Which is why the clause has to exist before you send the first invoice.

#FreelanceUAE #GetPaid #Invoicing #SoloKit`,
    theme: "admin",
  },
  {
    text: `If you do something more than twice, write it down.

The 5 systems that save UAE freelancers the most time:
1. Client onboarding (first 72 hours)
2. Proposal → contract → deposit
3. Revision handling
4. Invoice + follow-up
5. Project closeout + testimonial

Documented once, these run without you thinking. Undocumented, every project starts from zero.

#FreelanceUAE #SOPs #Productivity #SoloKit`,
    theme: "systems",
  },
  {
    text: `Your freelance rate has a ceiling you can't see.

It's your hourly rate × your available hours. At AED 150/hr × 25 hrs × 48 weeks, that's AED 180K/year — hard stop.

You don't break it by working more. You break it by changing the model:
→ Raise the rate
→ Sell packages, not hours
→ Build a product
→ Subcontract and take a margin

Most freelancers plateau for years without realising the ceiling is a business-model problem, not an effort problem.

#FreelanceUAE #BusinessModel #Solopreneur #SoloKit`,
    theme: "mindset",
  },
  {
    text: `The discovery call is where the deal is won — before the proposal exists.

Four questions that qualify a UAE client fast:
1. "What does success look like 90 days after this is done?"
2. "What's this costing you today?"
3. "Is there a budget range you're working within?"
4. "Who else is involved in the decision?"

Answer these and your proposal writes itself. Skip them and you're guessing.

#FreelanceUAE #Sales #Proposals #SoloKit`,
    theme: "getting clients",
  },
  {
    text: `Scope creep isn't a client problem. It's a documentation problem.

If your agreement lists what's IN scope — and explicitly what's OUT — every "quick extra" has somewhere to go: a change request with a price.

"Happy to add that. Here's the change request — AED [X], adds [Y] days."

You didn't say no. You made scope a decision, not an assumption.

#FreelanceUAE #Contracts #ScopeCreep #SoloKit`,
    theme: "admin",
  },
  {
    text: `The 3-sentence brief that saves 10 hours of revisions:

Before you start any project, send:
"Before I begin, confirming my understanding —
[the problem you're solving]
[what the deliverable looks like]
[how success is measured]
Does this match what you expect?"

Two minutes to write. Saves a week of "that's not what I meant."

#FreelanceUAE #FreelanceTips #ClientWork #SoloKit`,
    theme: "productivity",
  },
  {
    text: `The fastest way to grow freelance income in the UAE isn't new clients.

It's keeping the ones you have.

A client who pays AED 10K once is worth AED 50K+ over two years if you:
→ Deliver great work
→ Follow up 3 months later
→ Offer a retainer or next phase
→ Ask for a referral

Most freelancers spend 80% of their energy on acquisition and 20% on retention. Flip it.

#FreelanceUAE #ClientRetention #Retainers #SoloKit`,
    theme: "retention",
  },
  {
    text: `"I do social media" → you compete with everyone.
"I do LinkedIn content for B2B SaaS in the UAE" → you're the obvious choice.

Niching down feels risky. It's actually your fastest path to higher rates:
→ Proposals take 20 minutes, not 2 hours
→ Referrals happen naturally
→ Your content attracts exactly the right clients

The niche doesn't need to be tiny. It needs to be specific enough that the right client sees themselves in it.

#FreelanceUAE #Positioning #DubaiFreelancer #SoloKit`,
    theme: "positioning",
  },
  {
    text: `AED 300/hour is not AED 300/hour of income.

Before you set a UAE freelance rate, subtract:
→ Unpaid holidays
→ Health insurance (~AED 400/mo)
→ Freelance permit + visa (averaged monthly)
→ A 15% buffer for slow months

To take home AED 20K/month, you often need to bill closer to AED 26K. Price for the business, not just the hour.

#FreelanceUAE #FreelanceRates #Finance #SoloKit`,
    theme: "finance",
  },
];
