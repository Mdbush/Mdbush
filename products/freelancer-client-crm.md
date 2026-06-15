# Freelancer Client CRM — Complete Template Guide
### The Professional System for Managing Clients, Projects & Invoices
**Version 1.0 | Notion Template**

---

> **You paid for this. Use it.**
> This isn't a pretty template you screenshot and forget. Every section in this guide exists because freelancers lose money, time, and clients from disorganization — not lack of talent. Set this up once. Run your business from it forever.

---

## Table of Contents

1. Welcome & Setup Guide
2. The Client Database
3. The Projects Database
4. The Invoice Tracker
5. The Weekly Dashboard
6. 10 Email Templates
7. Pro Tips

---

## 1. Welcome & Setup Guide

### Duplicating the Template

To get started, open the template link you received after purchase in your browser while logged into your Notion account. In the top-right corner, click **"Duplicate"** — Notion will create a full copy of the workspace in your personal account. This takes 10–30 seconds depending on your connection. Once duplicated, the template lives entirely in your Notion account. You own it. You can rename it, restructure it, and share it with a virtual assistant or business partner by inviting them as a member of the page.

### Initial Setup (Do This First — Takes 15 Minutes)

Before you enter a single client, do three things. First, open the **Settings** page (included in the template) and fill in your business details: your name, business name, default hourly rate, standard payment terms (e.g., "Net 14"), and your preferred invoice currency. This information is referenced in the email templates so personalization is fast. Second, go to the **Client Database**, open the **Source** property, and customize the options to match how you actually get clients — remove any that don't apply (e.g., "Cold Email," "Referral," "LinkedIn," "Instagram," "Upwork," "Agency Partner"). Third, open the **Projects Database** and adjust the **Deliverables** field examples to reflect your service type — a copywriter's deliverables look nothing like a web developer's.

### How the Three Databases Connect

This CRM is built around three linked databases: **Clients**, **Projects**, and **Invoices**. A Client can have multiple Projects. A Project can have multiple Invoices. This means when you open a client record, you instantly see every project you've ever run for them and every invoice you've sent. When you open a project, you see its linked invoices and outstanding amounts without hunting through spreadsheets. The Weekly Dashboard pulls from all three databases to give you a single view of what needs attention this week. Think of it as your business at a glance — open it every Monday morning before you open your email.

---

## 2. The Client Database

**Database Name:** `Clients`
**Purpose:** Every person or company you've ever pitched, worked with, or plan to work with lives here. This is your central source of truth for all client relationships.

---

### Property Schema

#### Client Name
- **Type:** Title
- **Usage:** Use the format `First Last` or `Company Name (Contact Name)` — e.g., "Acme Corp (Sarah K.)". Consistent naming makes search and filtering instant. Never abbreviate here; abbreviate in your notes.

#### Status
- **Type:** Select
- **Options and Definitions:**
  - `Lead` — Someone you've identified as a potential client but haven't contacted yet. Add them here the moment you spot the opportunity so nothing falls through the cracks.
  - `Proposal Sent` — You've sent a proposal or quote. This is the most important status to monitor — leads sitting here more than 5 days without follow-up are quietly dying.
  - `Active` — A paying client with work currently in progress. These are your revenue-generating relationships.
  - `On Hold` — Project paused by either party. Don't delete these — clients come back. Set a follow-up date 30 days out and check in.
  - `Completed` — All deliverables delivered, final invoice paid. Move clients here after wrap-up, not before final payment clears.
  - `Lost` — They went with someone else, ghosted, or the project fell through. Keep this data. Filtering by "Lost" and reviewing the Source tells you which lead channels produce bad-fit prospects.

#### Email
- **Type:** Email
- **Usage:** Primary contact email. If a client has multiple contacts, put the decision-maker here and add others in the Notes field.

#### Phone
- **Type:** Phone
- **Usage:** Optional, but fill it in whenever you have it. Clients who only receive emails are harder to close. Having a phone number means you can send a quick voice note or WhatsApp message as a follow-up variation.

#### Company
- **Type:** Text
- **Usage:** The legal or trading name of their business. Useful for invoices (always invoice the company, not the individual) and for filtering if you work across multiple industries.

#### Budget
- **Type:** Number (formatted as Currency)
- **Usage:** The total budget discussed or estimated for this client relationship — not per project. If a client hires you for an ongoing retainer at 3,000/month, enter the annual value (36,000). This lets you sort your client list by value and focus your energy on the right relationships.

#### Source
- **Type:** Select
- **Recommended Options:** `Referral`, `Cold Email`, `LinkedIn`, `Instagram`, `Upwork`, `Fiverr`, `Agency Partner`, `Conference/Event`, `Inbound (Website)`, `Other`
- **Usage:** Track where every single client comes from. After 3 months, filter this column and count. You will discover that one or two sources produce almost all of your best clients. Stop trying to be everywhere. Double down on what works.

#### Notes
- **Type:** Text (Long-form)
- **Usage:** Everything that doesn't fit in a structured field. Communication preferences ("prefers WhatsApp"), personal details that build rapport ("has a daughter starting university"), red flags ("slow to approve, always wants revisions"), and a running log of key conversations. Date-stamp your notes: `[June 15] — Spoke on call, confirmed Q3 start.`

#### First Contact Date
- **Type:** Date
- **Usage:** The date you first reached out or were first contacted. Combined with the Status, this tells you how long a lead has been in your pipeline and whether you're letting opportunities go cold.

#### Next Follow-Up Date
- **Type:** Date
- **Usage:** The single most important field in the Clients database. Every Lead and Proposal Sent record must have a date here. The Weekly Dashboard surfaces all clients whose follow-up date falls within the next 7 days. If this field is blank, you're waiting for clients to come to you.

---

### Recommended Views for the Client Database

| View Name | Filter | Sort | Purpose |
|---|---|---|---|
| All Clients | None | Status | Master list |
| Active Pipeline | Status = Lead OR Proposal Sent | Next Follow-Up (ascending) | Daily sales focus |
| Active Work | Status = Active | Client Name | Current client roster |
| Follow Up Today | Next Follow-Up = Today | — | Morning action list |
| Revenue by Source | None | Source grouped | Quarterly review |

---

## 3. The Projects Database

**Database Name:** `Projects`
**Purpose:** Every discrete piece of work gets its own record here. One client can have 10 projects. Each project has its own timeline, budget, and deliverables — tracked independently.

---

### Property Schema

#### Project Name
- **Type:** Title
- **Usage:** Be specific and searchable. Instead of "Website Project," write "Acme Corp — 5-Page Brochure Website (June 2026)." Include the client name and month/year so you can instantly identify any project in a flat list without opening it.

#### Client
- **Type:** Relation → Clients Database
- **Usage:** Link every project to its client. This creates the two-way connection that makes the CRM work — open a client record and every project they've commissioned appears automatically in a linked Projects section.

#### Status
- **Type:** Select
- **Options and Definitions:**
  - `Not Started` — Contracted and scheduled but work hasn't begun. Useful for pipeline visibility — you can see upcoming workload before it arrives.
  - `In Progress` — Actively working on this right now.
  - `Review` — Work submitted, waiting on client feedback or approval. Filter by this status to know what's blocking your billing.
  - `Completed` — All deliverables accepted and final invoice paid.
  - `On Hold` — Paused. Always add a note with the reason and an expected restart date.

#### Start Date
- **Type:** Date
- **Usage:** The actual date work begins, not the date the contract was signed. This is your reference point for project timelines and workload planning.

#### Deadline
- **Type:** Date
- **Usage:** The client-facing due date. In the Timeline view, this creates a Gantt-style bar showing your project schedule. When you have 3 projects with overlapping deadlines, you see the problem before it becomes a crisis.

#### Budget
- **Type:** Number (Currency)
- **Usage:** The agreed total project fee — exactly as quoted in your proposal. Do not update this mid-project. If scope changes and the price increases, that's a new line item in invoices, not a change to the original budget.

#### Invoiced Amount
- **Type:** Rollup → from Invoices Database (Sum of Amount where Status ≠ Cancelled)
- **Usage:** This field automatically totals every invoice issued against this project. Comparing Budget vs. Invoiced Amount tells you immediately whether you've billed what you're owed. A Budget of 5,000 and Invoiced Amount of 2,500 means you haven't sent the second invoice yet.

#### Deliverables
- **Type:** Text (Long-form)
- **Usage:** A bulleted list of exactly what you're producing — pulled from your proposal. This is your scope definition. When a client asks for something that wasn't agreed, you open this field and point to it. Ambiguity in deliverables is how projects become unprofitable.

  **Example format:**
  ```
  - Homepage (design + development)
  - About page
  - Services page (3 service sections)
  - Contact page with form integration
  - Mobile-responsive across all pages
  - 2 rounds of revisions included
  - Excludes: copywriting, photography, SEO setup
  ```

#### Priority
- **Type:** Select
- **Options:** `Low`, `Medium`, `High`, `Urgent`
- **Usage:** Set this at project start based on deadline proximity and client value. Reassess weekly. `Urgent` should be rare — if everything is urgent, nothing is. Use the Priority filter on your Weekly Dashboard to identify what to work on first each morning.

---

### Recommended Views for the Projects Database

| View Name | Filter | Sort | Purpose |
|---|---|---|---|
| Active Projects | Status = In Progress OR Review | Priority (desc), Deadline (asc) | Daily work view |
| Full Pipeline | Status ≠ Completed, Lost | Start Date | Workload overview |
| Timeline | None | — | Gantt view for scheduling |
| Completed Archive | Status = Completed | Deadline (desc) | Portfolio reference |
| Awaiting Approval | Status = Review | Deadline | Chasing client feedback |

---

## 4. The Invoice Tracker

**Database Name:** `Invoices`
**Purpose:** Every invoice you generate — regardless of status — lives here. This database is your accounting backbone. At a glance, you know what you're owed, what's overdue, and what's been paid this month.

---

### Property Schema

#### Invoice #
- **Type:** Title
- **Usage:** Use a consistent numbering format from day one. Recommended: `INV-[YEAR]-[NUMBER]` — e.g., `INV-2026-001`. This format is searchable, sortable, and looks professional on sent invoices. Never reuse a number, even for cancelled invoices.

#### Client
- **Type:** Relation → Clients Database
- **Usage:** Links the invoice to the client for two-way visibility. Opening a client record in the Clients database shows every invoice ever issued to them — outstanding balances, payment history, everything.

#### Project
- **Type:** Relation → Projects Database
- **Usage:** Links the invoice to the specific project it covers. This powers the Invoiced Amount rollup in the Projects database. One project can have multiple invoices (e.g., 50% deposit + 50% on delivery).

#### Amount
- **Type:** Number (Currency)
- **Usage:** The exact amount due on this specific invoice — not the total project value. For a 6,000 project with a 50/50 split, each invoice shows 3,000.

#### Issue Date
- **Type:** Date
- **Usage:** The date you send the invoice. This is the start of your payment terms countdown. If your terms are Net 14, Issue Date + 14 days = Due Date.

#### Due Date
- **Type:** Date
- **Usage:** The date payment must be received. This field drives the overdue alerts on your Weekly Dashboard. Any invoice with a Due Date in the past and Status ≠ Paid is immediately flagged for follow-up action.

#### Status
- **Type:** Select
- **Options and Definitions:**
  - `Draft` — Created but not yet sent. Build invoices here before you send them.
  - `Sent` — Issued to the client. Payment clock is running.
  - `Overdue` — Past the due date, payment not received. Change status manually when the due date passes, or use a Notion formula to automate this.
  - `Paid` — Payment confirmed and received in your account. Not when promised — when received.
  - `Cancelled` — Invoice voided. Keep the record; exclude it from revenue totals using filters.

#### Payment Method
- **Type:** Select
- **Options:** `Bank Transfer`, `PayPal`, `Stripe`, `Wise`, `Cash`, `Cheque`, `Crypto`, `Other`
- **Usage:** Tracking payment methods tells you which are fastest to collect. If 80% of late payments come via cheque but bank transfers always arrive on time, you have a data-backed reason to stop accepting cheques.

#### Notes
- **Type:** Text
- **Usage:** Payment confirmation references, partial payment logs, client communication about the invoice, and any disputes. Example: `[June 20] — Client confirmed payment sent via Wise. Ref: XYZ123. Received June 21.`

---

### Recommended Views for the Invoice Tracker

| View Name | Filter | Sort | Purpose |
|---|---|---|---|
| Outstanding | Status = Sent OR Overdue | Due Date (asc) | Cash flow priority |
| Overdue | Status = Overdue | Due Date (asc) | Urgent follow-up |
| Paid This Month | Status = Paid, Issue Date = This Month | — | Monthly revenue |
| All Invoices | None | Issue Date (desc) | Complete record |
| By Client | Grouped by Client | — | Client billing history |

---

### Revenue Formula (Add to Your Dashboard)

Create a **Linked Database** view of Invoices on your Dashboard, filtered to `Status = Paid` and `Issue Date = This Month`. Add a **Sum** aggregation on the Amount property at the bottom of the column. This gives you your real-time monthly revenue total without opening a spreadsheet.

---

## 5. The Weekly Dashboard

**Database Name:** `Weekly Dashboard` (Master Page)
**Purpose:** Your command center. Open this every Monday morning. It surfaces everything requiring attention this week without you having to dig through individual databases.

---

### What the Dashboard Shows

The Weekly Dashboard is a single Notion page containing six linked database views, each filtered to show only what's relevant right now:

**Section 1 — Follow-Ups Due This Week**
A filtered view of the Clients database showing every record where `Next Follow-Up Date` falls within the next 7 days, sorted by date ascending. This is your sales and relationship maintenance list. Work through it every morning before doing project work.

**Section 2 — Active Projects (This Week's Work)**
A filtered view of Projects where `Status = In Progress` and `Deadline` falls within the next 14 days, sorted by Priority (High/Urgent first), then Deadline. This answers the question: "What do I need to finish, and in what order?"

**Section 3 — Awaiting Client Approval**
Projects with `Status = Review`. These are completed deliverables sitting in the client's inbox. Revenue blocked here cannot be invoiced until approved. Follow up on anything in Review for more than 3 business days.

**Section 4 — Outstanding Invoices**
Invoices with `Status = Sent OR Overdue`, sorted by Due Date ascending. The overdue ones appear at the top in red (using Notion's color coding by status). These represent money earned but not yet collected.

**Section 5 — Payments Received This Month**
A filtered, summed view of Invoices with `Status = Paid` and `Issue Date = This Month`. Shows the count and total value. This is your month-to-date revenue number.

**Section 6 — Upcoming Project Starts**
Projects with `Status = Not Started` and `Start Date` within the next 14 days. Gives you visibility into incoming workload so you can prepare, brief yourself, and avoid overbooking.

---

### How to Use the Dashboard

**Monday (15 minutes):** Open the Dashboard. Review Follow-Ups Due and action each one — send emails, make calls, or update the Next Follow-Up Date. Check Outstanding Invoices and send reminders for anything overdue.

**Daily (5 minutes):** Open Section 2 (Active Projects). Pick your top 1-3 priorities for the day based on Priority and Deadline. Close the Dashboard and do the work.

**Friday (10 minutes):** Review Awaiting Approval — follow up on anything that's been in review all week. Update project statuses to reflect where things actually stand. Move any completed projects to `Completed` status.

**Monthly (30 minutes):** Filter completed projects and paid invoices. Review your Source data in the Clients database to see which lead channels performed best. Update your client records with any outstanding notes.

---

## 6. Ten Email Templates

> **How to use these templates:** Every template uses `[BRACKETS]` for fields you replace with real information. Your business name, rates, and standard terms should be stored in the Settings page so you're copying and pasting — not writing from memory under pressure.

---

### Template 1 — First Outreach to a Lead

**Subject:** [Your Service] for [Company Name] — a quick idea

---

Hi [First Name],

I came across [Company Name] through [where you found them — e.g., your LinkedIn post about X / your website / a mutual connection] and I think there's something worth talking about.

I'm [Your Name] — I work with [type of client, e.g., e-commerce brands / SaaS founders / independent consultants] on [your service — e.g., conversion copywriting / brand identity / web development]. I noticed [one specific, genuine observation about their business — e.g., your product pages have strong photography but the copy doesn't give me a reason to act / your site does a great job explaining features but buries the pricing].

I have a specific idea for how [Company Name] could [concrete outcome — e.g., improve conversion on the homepage / reduce bounce rate on mobile / strengthen the brand voice across social]. It's not a generic pitch — it's based on what I actually saw.

Would it be worth a 20-minute call this week to walk through it? No commitment from your side — just a conversation.

[Your Name]
[Your Website / LinkedIn]
[Your Email / Phone]

---

### Template 2 — Follow-Up After No Reply (Day 3)

**Subject:** Re: [Your Service] for [Company Name] — a quick idea

---

Hi [First Name],

Just following up on my email from [day — e.g., Monday]. I know inboxes get buried fast.

I wanted to make sure my original message didn't get lost. The short version: I had a specific idea for [Company Name] around [the one thing you mentioned] and thought it might be worth a 20-minute conversation.

If the timing is off or it's not a priority right now, just say the word — I appreciate a quick reply either way.

[Your Name]

---

### Template 3 — Follow-Up After No Reply (Day 7)

**Subject:** Last follow-up — [Company Name] + [Your Service]

---

Hi [First Name],

I'll keep this short — I know you're busy.

I've reached out twice about [the specific opportunity] for [Company Name]. I don't want to keep filling your inbox if it's not relevant, so this is my last follow-up.

If the timing is better in the future — or if you'd like to be connected when I have capacity available — just reply and I'll make a note.

Either way, I wish you and the team a strong [quarter/season].

[Your Name]
[Your Website]

---

*Note: After sending this, update the client's Status to `Lead` (keep) or `Lost` in your CRM, and set a Next Follow-Up Date 60–90 days out if you want to try again in a new quarter.*

---

### Template 4 — Proposal Send Email

**Subject:** Your Proposal — [Project Description] | [Your Name/Business]

---

Hi [First Name],

It was great speaking with you on [day of call/meeting]. As promised, I've put together a proposal for [Project Name / Description].

**What's attached:**
- Full project scope and deliverables
- Timeline from [estimated start] to [estimated completion]
- Investment: [total fee or fee structure — e.g., 4,500 total / 50% to begin, 50% on delivery]
- My standard terms and revision policy

I've built the timeline around [a specific detail they mentioned — e.g., your June launch date / getting this live before Q3]. If anything needs adjusting — budget, scope, or timing — I'd rather know now so I can build you something that actually works.

I'm holding [start date] on my calendar for this project. I'll need your decision by [decision deadline — typically 5–7 days] to guarantee that slot.

Questions? Reply here or book a 15-minute call: [your scheduling link]

Looking forward to working with you.

[Your Name]
[Title / Business Name]
[Phone]

---

### Template 5 — Project Kickoff Email

**Subject:** We're live — [Project Name] Kickoff

---

Hi [First Name],

The deposit has landed and we're officially underway on [Project Name]. Here's everything you need to know about how we'll work together.

**Your Project at a Glance**
- Start Date: [Date]
- Delivery Date: [Date]
- Deliverables: [Short bulleted list from the Deliverables field in your CRM]

**How We'll Communicate**
My working hours are [e.g., Monday–Friday, 9am–6pm GST]. I respond to emails within [e.g., 24 hours on weekdays]. For anything urgent, [phone/WhatsApp is/is not] appropriate.

**What I Need From You**
To hit your delivery date, I'll need the following from your side:
- [Item 1 — e.g., Brand assets (logo files, color codes, fonts) by [date]]
- [Item 2 — e.g., Draft copy / content brief by [date]]
- [Item 3 — e.g., Access to your website CMS by [date]]

**Feedback & Revisions**
Your proposal includes [X] rounds of revisions. When I send you work to review, I'll ask for consolidated feedback in a single response within [e.g., 3 business days]. Feedback spread across multiple emails or calls tends to create delays — I'll flag if we're approaching that situation.

**First Update**
You'll hear from me by [date] with a progress update.

Excited to get started.

[Your Name]

---

### Template 6 — Weekly Update to Client

**Subject:** [Project Name] — Week [#] Update

---

Hi [First Name],

Here's where things stand on [Project Name] as of [date].

**Completed this week:**
- [Specific item 1]
- [Specific item 2]

**In progress / up next:**
- [What you're working on this week]
- [Any items pending their input]

**Blockers (if any):**
[Either: "Nothing blocking us right now — we're on schedule." OR: "I'm waiting on [specific thing] from your side. I need this by [date] to stay on track for your [delivery date]."]

**Timeline Status:** [On track / Slightly behind — new ETA: X / Ahead of schedule]

No action needed from you unless I've flagged something above. Next update: [date].

[Your Name]

---

### Template 7 — Requesting Feedback / Testimonial

**Subject:** A quick favor — your experience working with me

---

Hi [First Name],

It's been [time period] since we wrapped up [Project Name] and I hope [the website / the campaign / the design] is doing what it's supposed to do for you.

I'm building up testimonials from clients I've genuinely enjoyed working with, and you're at the top of that list.

If you're open to it, a short paragraph (3–5 sentences) covering:
1. What problem you came to me with
2. What the experience of working together was like
3. What result or outcome you've seen

...would mean a lot and take you about 5 minutes.

You can send it as a reply to this email, or if you'd prefer I send you a couple of guiding questions first, just say so.

If you'd also be open to leaving a review on [Google / LinkedIn / Clutch / the platform you use], I'll send you the direct link.

Thank you — genuinely. It was a pleasure working on [Project Name].

[Your Name]

---

### Template 8 — Invoice Send Email

**Subject:** Invoice [INV-XXXX] for [Project Name] — [Amount]

---

Hi [First Name],

Please find attached Invoice [INV-XXXX] for [description of what is being invoiced — e.g., the second milestone of the Acme Corp website project].

**Invoice Summary:**
- Invoice Number: [INV-XXXX]
- Amount Due: [Currency + Amount]
- Issue Date: [Date]
- Due Date: [Date — X days from issue]
- Payment Method: [Bank transfer / PayPal / Wise — include relevant account details]

[Bank details block if applicable:]
> Bank: [Bank Name]
> Account Name: [Your Name / Business Name]
> IBAN / Account Number: [XXXXXX]
> Reference: [INV-XXXX]

Please use the invoice number as your payment reference so I can match it quickly on my end.

If there are any questions about this invoice, reply to this email or reach me at [phone]. Otherwise, I'll look out for the payment by [due date].

Thank you for a great project.

[Your Name]
[Business Name]

---

### Template 9 — Payment Overdue Reminder (Friendly)

**Subject:** Gentle reminder — Invoice [INV-XXXX] due [Date]

---

Hi [First Name],

I hope things are going well at [Company].

I wanted to send a quick note about Invoice [INV-XXXX] for [Project Name], which was due on [due date]. I haven't received payment yet — I'm sure it's just slipped through the cracks during a busy week.

**Invoice Details:**
- Invoice: [INV-XXXX]
- Amount: [Currency + Amount]
- Original Due Date: [Date]
- Payment Instructions: [Bank / PayPal / Wise + account details]

If payment has already been sent, please ignore this — and do send me the reference number so I can match it.

If there's an issue with the invoice or you need a different payment arrangement, just reply and we can sort it out quickly.

Thank you,
[Your Name]

---

### Template 10 — Payment Overdue Reminder (Firm)

**Subject:** Outstanding Payment — Invoice [INV-XXXX] — [X] Days Overdue

---

Hi [First Name],

I'm following up on Invoice [INV-XXXX] for [Currency + Amount], which was due on [due date] and remains unpaid after [X] days.

I've sent a previous reminder on [date of last email]. At this point, I need to ask that payment is made within the next **[5 business days — by DATE]**.

**Outstanding Invoice:**
- Invoice Number: [INV-XXXX]
- Project: [Project Name]
- Amount Due: [Currency + Amount]
- Payment Details: [Account details]

I want to keep our professional relationship positive, and I'm confident this is an oversight. However, I do need to address this promptly. If there is a specific issue — whether that's a dispute about the invoice, a cash flow challenge, or an administrative delay on your side — please reply to this email today so we can find a solution.

If I don't receive payment or hear from you by [deadline date], I'll need to escalate this matter, which I'd prefer to avoid.

Thank you for your prompt attention to this.

[Your Name]
[Business Name]
[Phone]

---

## 7. Pro Tips — Five Power-User Moves

---

### Pro Tip 1 — Use the "Follow-Up Date" Field as a Revenue Engine

Most freelancers treat the follow-up date as a reminder system. It's actually a revenue engine. Every time you move a Lead to `Proposal Sent`, set the Next Follow-Up Date to exactly 3 days later — not "whenever you remember," not "early next week." Three days. Your Weekly Dashboard will surface it automatically. The freelancers who follow up consistently and on schedule close 2–3x more proposals than those who send once and wait. The data supports it: most clients need 2–4 touchpoints before they decide. Your competitors give up after one.

---

### Pro Tip 2 — Build a "Lost" Analysis Ritual

Every month, filter your Clients database by Status = `Lost`. Count how many leads you lost and look at two things: the Source (where they came from) and the Notes (why they didn't convert). After 3 months, patterns emerge. You'll find that leads from one particular channel consistently ghosted you, or that clients lost due to budget always came in under-qualified. This isn't failure data — it's targeting data. Use it to refine where you spend your lead generation energy and what questions you ask in discovery calls to qualify faster.

---

### Pro Tip 3 — Scope Every Project With a "Deliverables" Field That Would Hold Up in a Dispute

The Deliverables field in your Projects database isn't a note-to-self — it's your contract backup. Write it exactly as it appears in your proposal. Include what's excluded, not just what's included. `Excludes: copywriting, hosting setup, ongoing maintenance` is as important as the list of inclusions. When a client says "I thought you were also going to handle the email newsletter," you open this field, copy the deliverables into an email, and say "Here's what we agreed to scope — I'd be happy to quote a separate phase for the newsletter." Scope creep stops when deliverables are documented in the same system you work from every day.

---

### Pro Tip 4 — Use the Source Field to Make Budget Decisions

Once you have 20–30 closed clients in the database, run this analysis: filter by Source, then look at the average Budget value per source. You'll almost certainly find that one channel produces high-value clients (e.g., referrals, inbound from your website) and another produces low-value clients who take more effort to close and manage. Now look at where you spend your marketing time. Most freelancers spend 80% of their prospecting energy on the channels that produce their worst clients, because those channels feel more active. This analysis gives you permission to stop — and to invest that time where it actually produces revenue.

---

### Pro Tip 5 — Invoice on Delivery, Not on Completion

The single most impactful billing habit is this: send the invoice the moment deliverables leave your hands — not after the client approves them, not after revisions, not "once everything's wrapped up." The moment you press send on a draft, a design file, or a finished recording, you open the Invoice tracker and create the invoice. Two reasons. First, your payment clock starts immediately — every day you delay sending is a day added to your wait. Second, it creates professional urgency: the client now has a financial incentive to review your work promptly and send feedback, because the invoice is already running. Clients who owe money give faster approvals than clients who don't.

---

## Quick-Reference Cheat Sheet

| Situation | Action | Field to Update |
|---|---|---|
| New lead identified | Add to Clients database | Status = Lead, Source, First Contact, Next Follow-Up (3 days) |
| Proposal sent | Update status | Status = Proposal Sent, Next Follow-Up = +3 days |
| Client signed | Create project record | Link to Client, Status = Not Started or In Progress |
| Deliverables submitted | Change project status + send invoice | Project Status = Review, create Invoice (Draft → Sent) |
| Client approves work | Final status update | Project Status = Completed |
| Invoice paid | Confirm and log | Invoice Status = Paid, add payment reference to Notes |
| Client goes quiet | Note and schedule follow-up | Notes (date-stamped), Next Follow-Up = +3 days |
| Project stalls | Document and hold | Project Status = On Hold, Client Status = On Hold |

---

*Freelancer Client CRM Template Guide — Version 1.0*
*For questions or support, contact: [your support email]*
*Template updates are free for life for all buyers.*
