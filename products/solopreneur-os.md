# Solopreneur OS — Complete Notion Workspace Setup Guide

**Your all-in-one operating system for running a solo business with clarity, calm, and control.**

Version 1.0 | $67 USD / 249 AED
Created for solo founders, freelancers, consultants, and creators.

---

## Table of Contents

1. [Welcome & Philosophy](#1-welcome--philosophy)
2. [The 5 Core Databases](#2-the-5-core-databases)
   - [Revenue Tracker](#a-revenue-tracker)
   - [Goal Planner](#b-goal-planner)
   - [Task Manager](#c-task-manager)
   - [Content Calendar](#d-content-calendar)
   - [Idea Capture](#e-idea-capture)
3. [The 4 Dashboard Views](#3-the-4-dashboard-views)
4. [The Weekly Review System](#4-the-weekly-review-system)
5. [The Daily Startup Routine](#5-the-daily-startup-routine)
6. [Keyboard Shortcuts & Power Tips](#6-keyboard-shortcuts--power-tips)
7. [90-Day Quick-Start Plan](#7-90-day-quick-start-plan)

---

## 1. Welcome & Philosophy

### Why This System Exists

Most solopreneurs don't fail because they lack talent, ambition, or ideas. They fail because they're drowning in context-switching — answering DMs while half-writing an invoice, remembering a goal they set in January only when December arrives, storing half their business in sticky notes and the other half in three different apps that don't talk to each other. The cognitive overhead of running a solo business is enormous, and it's invisible — you don't see it on a spreadsheet, but you feel it every morning when you sit down and don't know where to start.

The Solopreneur OS was built around one central belief: **your brain is for thinking, not for storing.** When everything that matters — your money, your goals, your tasks, your content, and your best ideas — lives in one interconnected workspace, you stop managing your system and start running your business. The five databases in this OS are not arbitrary. They were chosen because they represent the five things every solo business owner must have visibility into at all times: what money is coming in and going out, what they're building toward, what they need to do today, what they're publishing, and what's worth building next.

This system is intentionally minimalist. You will not find 30 databases, 15 automations, and a 400-page manual here. You will find exactly what you need to make good decisions, ship good work, and close the laptop at a reasonable hour knowing that nothing important has fallen through the cracks. The philosophy is simple: **less friction, more output.** Set it up once this week, use it for 10 minutes a day, and in 90 days you will have a clearer picture of your business than most people with a full team ever get.

---

## 2. The 5 Core Databases

> **How to create each database in Notion:** Click the `+` button on any page, select "Table - Full Page," and name it exactly as shown. Then add each property using the `+` button in the table header. Set property types precisely as listed — they affect filtering, formulas, and rollups throughout the system.

---

### A. Revenue Tracker

**Database Name:** `Revenue Tracker`

This is the financial backbone of your OS. Split into two linked views — Income and Expenses — it gives you real-time clarity on your cash position without opening a spreadsheet or waiting for your accountant.

#### Income Table Schema

| Property Name | Property Type | Options / Notes |
|---|---|---|
| Income Source | Title | The name of the payment or project |
| Amount | Number | Format: Currency (USD or AED) |
| Date | Date | Date payment was received or expected |
| Category | Select | `Service` / `Product` / `Affiliate` / `Other` |
| Client | Text | Client or company name |
| Invoice # | Text | Your invoice reference number |
| Status | Select | `Expected` / `Received` |
| Notes | Text | Payment method, partial payment notes, etc. |
| Month | Formula | `formatDate(prop("Date"), "MMMM YYYY")` |

#### Expense Table Schema

> Create this as a second database on the same page, or as a separate view using a "Type" property on the same database.

**Option A (Recommended): Add an entry type toggle**

Add the following property to the same Revenue Tracker database:

| Property Name | Property Type | Options / Notes |
|---|---|---|
| Entry Type | Select | `Income` / `Expense` |
| Vendor | Text | Who you paid (only relevant for expenses) |
| Tax Deductible | Checkbox | Check if this expense is deductible |
| Expense Category | Select | `Software` / `Advertising` / `Contractor` / `Equipment` / `Education` / `Travel` / `Other` |

This allows you to filter the same database into two views: one showing only Income entries, one showing only Expense entries.

#### Formulas

**Monthly Revenue (filter by current month, Status = "Received"):**
Create a filtered view called `This Month — Income` with filter: `Entry Type is Income` AND `Date is within this month` AND `Status is Received`. Use the "Sum" aggregation on the Amount column to see your total.

**Monthly Expenses (filter by current month, Entry Type = Expense):**
Create a filtered view called `This Month — Expenses` with filter: `Entry Type is Expense` AND `Date is within this month`. Use the "Sum" aggregation on Amount.

**Net Profit:**
This is best tracked in a "Monthly Summary" linked database or a simple calculation page. Create a page called `Monthly P&L` and type:

```
Monthly Revenue: [link to sum view]
Monthly Expenses: [link to sum view]
Net Profit: Revenue - Expenses (manual or synced block)
```

For a formula-based approach, add a dedicated `Monthly Totals` database with one row per month and rollup properties linked to Revenue Tracker.

#### Key Views to Create

| View Name | Type | Filter | Sort |
|---|---|---|---|
| All Income | Table | Entry Type = Income | Date descending |
| All Expenses | Table | Entry Type = Expense | Date descending |
| Expected Payments | Table | Status = Expected | Date ascending |
| This Month | Table | Date = This month | Entry Type ascending |
| By Category | Board | Entry Type = Income | Group by: Category |

#### Pro Setup Tip

Create a `Clients` database (simple: Name, Email, Total Paid) and link it to Revenue Tracker using a **Relation** property. Then use a **Rollup** on the Clients database to automatically calculate total revenue per client. This takes 10 minutes to set up and gives you instant client lifetime value data.

---

### B. Goal Planner

**Database Name:** `Goal Planner`

Goals without a system are just wishes. This database turns annual aspirations into quarterly commitments with weekly actions — the only structure proven to work for solo operators who don't have a manager holding them accountable.

#### Full Schema

| Property Name | Property Type | Options / Notes |
|---|---|---|
| Goal | Title | Write the goal as a specific outcome, not a vague intention |
| Category | Select | `Revenue` / `Health` / `Business Growth` / `Skills` / `Personal` / `Relationships` |
| Quarter | Select | `Q1 (Jan-Mar)` / `Q2 (Apr-Jun)` / `Q3 (Jul-Sep)` / `Q4 (Oct-Dec)` |
| Year | Number | e.g. 2025, 2026 |
| Status | Select | `Not Started` / `In Progress` / `Completed` / `Abandoned` |
| Success Metric | Text | How will you know, with certainty, that this goal is achieved? (be specific: numbers, dates, evidence) |
| Why It Matters | Text | The real reason behind this goal — your "so that..." statement |
| Weekly Actions | Text | The 1-3 recurring weekly behaviors that will move this goal forward |
| Progress % | Number | Format: Percent. Update weekly during your review |
| Review Notes | Text | Running notes from each weekly review — what's working, what isn't |
| Target Date | Date | The specific deadline for this goal |

#### Key Views to Create

| View Name | Type | Filter | Sort |
|---|---|---|---|
| Current Quarter | Table | Quarter = [current] AND Year = [current] | Category ascending |
| By Category | Board | Active goals | Group by: Category |
| Annual Goals | Gallery | Year = [current] | Quarter ascending |
| Completed | Table | Status = Completed | Target Date descending |
| Abandoned (for learning) | Table | Status = Abandoned | — |

#### How to Use This Database Well

**The goal entry rule:** Every goal in this database must have a filled-in Success Metric before it's considered "active." A goal without a success metric is just a category, not a goal. Bad example: `Grow my audience`. Good example: `Reach 5,000 newsletter subscribers by September 30`.

**The weekly update rule:** Every Sunday during your Weekly Review (Section 4), open this database and update two things only: the Progress % and one sentence in Review Notes. This takes under 5 minutes and gives you a full history of your goal journey.

**The quarterly reset ritual:** On the last Sunday of each quarter, mark all goals as either Completed or Abandoned, read through your Review Notes, and create next quarter's goals in fresh entries. Do not carry forward zombie goals indefinitely — Abandoned is a valid and honest outcome.

---

### C. Task Manager

**Database Name:** `Task Manager`

Your daily execution engine. This is where intention becomes action. The priority system here is deliberately simple — three levels, not five — because in practice, everything labeled P4 or P5 never gets done. Be honest about what's actually important.

#### Full Schema

| Property Name | Property Type | Options / Notes |
|---|---|---|
| Task | Title | Start with a verb: "Write," "Send," "Review," "Fix," "Call" |
| Project | Select | Add your active projects as options (update as projects change) |
| Priority | Select | `P1 — Must do today` / `P2 — Should do this week` / `P3 — Nice to have` / `Someday — No urgency` |
| Status | Select | `Backlog` / `Today` / `In Progress` / `Done` / `Waiting` |
| Due Date | Date | Use sparingly — only set when there's a real external deadline |
| Time Estimate | Select | `15 min` / `30 min` / `1 hour` / `2 hours` / `Half day` / `Full day` |
| Energy Level | Select | `High — Deep thinking required` / `Medium — Moderate focus` / `Low — Admin, routine` |
| Recurring | Checkbox | Check for tasks that repeat weekly or monthly |
| Linked Goal | Relation | Link to Goal Planner database |
| Notes | Text | Context, links, subtask notes |

#### Key Views to Create

| View Name | Type | Filter | Sort |
|---|---|---|---|
| Today | Board | Status = Today OR In Progress | Priority ascending |
| Backlog | Table | Status = Backlog | Priority ascending |
| P1 Only | Table | Priority = P1 | Due Date ascending |
| By Project | Board | Status is not Done | Group by: Project |
| Done This Week | Table | Status = Done AND Last Edited = This week | — |
| High Energy Tasks | Table | Energy Level = High AND Status != Done | Priority ascending |

#### The Priority Assignment Rule

Before adding a task, ask yourself: "If I could only do three things tomorrow, would this be one of them?" If yes, P1. If it genuinely matters this week but not tomorrow, P2. If you'd do it only after P1 and P2 are clear, P3. If you're adding it so you don't forget but have no real plan to do it, Someday.

**The daily cap:** Never assign more than 3 tasks to P1 status on any given day. If you find yourself with 8 P1s, you're not prioritizing — you're panicking. Reprioritize ruthlessly.

#### Managing Recurring Tasks

For recurring tasks (weekly content publishing, monthly invoicing, quarterly tax review), check the Recurring box and duplicate the task at the start of each cycle rather than leaving it permanently in your backlog. This keeps your active task list clean and gives you a satisfying Done count each week.

---

### D. Content Calendar

**Database Name:** `Content Calendar`

Content is the primary marketing channel for most solopreneurs. This database makes sure nothing falls through the cracks from idea to published — and gives you a visual overview of your publishing rhythm.

#### Full Schema

| Property Name | Property Type | Options / Notes |
|---|---|---|
| Content Piece | Title | Headline or working title of the piece |
| Platform | Multi-select | `Newsletter` / `LinkedIn` / `Instagram` / `YouTube` / `Twitter/X` / `TikTok` / `Podcast` / `Blog` |
| Status | Select | `Idea` / `Outline` / `Draft` / `Editing` / `Scheduled` / `Published` |
| Publish Date | Date | Target or actual publish date |
| Content Type | Select | `Educational` / `Story/Personal` / `Promotional` / `Engagement` / `Curated` / `Behind the Scenes` |
| Hook / Headline | Text | The opening line or scroll-stopping hook — write this first |
| Call to Action | Text | What should the reader/viewer do after consuming this? |
| Linked Goal | Relation | Connect to a Goal Planner entry (e.g., "Grow newsletter to 5,000") |
| Performance Notes | Text | After publishing: views, clicks, replies, key learnings |
| Notes | Text | Links to research, assets, drafts in other tools |
| Repurpose From | Relation | Self-relation — link to the original piece this was repurposed from |

#### Key Views to Create

| View Name | Type | Filter | Sort |
|---|---|---|---|
| Calendar View | Calendar | All entries | Group by: Publish Date |
| Pipeline | Board | All entries | Group by: Status |
| This Week | Table | Publish Date = This week | Platform ascending |
| Ideas Bank | Table | Status = Idea | — |
| By Platform | Board | All entries | Group by: Platform |
| Published | Table | Status = Published | Publish Date descending |

#### The Repurposing System

Use the `Repurpose From` relation to build a content tree. When you publish a newsletter, create LinkedIn, Twitter, and Instagram entries all linked back to it. Over time you'll see which original pieces generated the most repurposed content — those are your evergreen topics.

#### Hook Writing Rule

The `Hook / Headline` field is not optional. Research consistently shows that 80% of content success is determined by the first line. Before a piece can move from Idea to Outline status, the Hook must be filled in. Think of it as the gate that separates "I had a thought" from "I'm actually going to publish this."

---

### E. Idea Capture

**Database Name:** `Idea Capture`

The graveyard of most solopreneurs isn't a lack of ideas — it's great ideas lost to the void because there was no system to catch them. This database is your idea net. The goal is frictionless capture first, rigorous evaluation later.

#### Full Schema

| Property Name | Property Type | Options / Notes |
|---|---|---|
| Idea | Title | Write the idea fast — don't edit yourself at this stage |
| Category | Select | `Product` / `Content` / `Service Offer` / `Partnership` / `Process Improvement` / `Tool/Resource` / `Other` |
| Status | Select | `Raw` / `Exploring` / `Validated` / `Building` / `Killed` |
| Potential Revenue | Select | `Under $1K` / `$1K–$5K` / `$5K–$20K` / `$20K+` / `Unsure` |
| Effort to Execute | Select | `Low — Under 10 hours` / `Medium — 10–40 hours` / `High — 40+ hours` |
| Excitement Level | Select | `Low` / `Medium` / `High` / `Can't stop thinking about it` |
| Related Goal | Relation | Link to Goal Planner |
| Next Action | Text | The single smallest step to move this forward if you decide to pursue it |
| Notes | Text | Research, links, inspiration, conversations that sparked this |
| Date Captured | Date | Auto-populate with today's date |
| Decision Date | Date | When you plan to decide whether to pursue or kill this |

#### Key Views to Create

| View Name | Type | Filter | Sort |
|---|---|---|---|
| All Ideas | Table | All | Date Captured descending |
| Evaluate These | Table | Status = Raw | Excitement Level descending |
| Active Pursuits | Table | Status = Exploring OR Building | — |
| Validated Pipeline | Board | Status = Validated OR Building | Group by: Category |
| Killed (for learning) | Table | Status = Killed | — |
| High Potential | Table | Potential Revenue = $5K–$20K OR $20K+ | Effort ascending |

#### The Idea Evaluation Protocol

When an idea has been sitting in `Raw` status for 2+ weeks and still excites you, move it to `Exploring` and spend one 90-minute session answering three questions:
1. **Who will pay for this, and why?** Name at least three specific people you know.
2. **Have others built something similar?** Existence of competitors is validation, not a deterrent.
3. **What is the minimum version of this I could test in under two weeks?**

If you can't answer all three, it's not time to build yet. If you can, update the Status to `Validated` and create a Goal entry for it.

---

## 3. The 4 Dashboard Views

Dashboards in Notion are pages that pull together filtered views from multiple databases into a single command center. To build each dashboard, create a new page and use `/linked view` (or "Create linked database view") to embed filtered views from your core databases without duplicating data.

---

### Daily Dashboard

**Page Name:** `Today — [Date]` (or pin a single "Daily" page and update it each morning)

**Purpose:** Answer one question before you start working: *What actually matters today?*

**What this dashboard shows:**

- **Today's Tasks** — Linked view of Task Manager filtered to `Status = Today` or `Priority = P1`, sorted by Energy Level (High first). Gives you a single list of what to execute.
- **In Progress** — Linked view of Task Manager filtered to `Status = In Progress`. Anything you started yesterday that isn't done.
- **Revenue Today** — Linked view of Revenue Tracker filtered to `Date = Today`. Shows you what payments are expected or confirmed today.
- **Content Due Today** — Linked view of Content Calendar filtered to `Publish Date = Today` and `Status = Scheduled`. Your publishing commitments for the day.
- **One Active Goal** — A single prominent text block (or callout) where you write, each morning, which quarterly goal today's work is primarily serving. This is manual — write it in 10 seconds. It keeps you tethered to strategy while executing tactically.

**How to build it:**

```
Create a new Notion page named "Daily Dashboard"
Add a Callout block at the top: "Today's Focus Goal: [type manually each morning]"
/linked view → Task Manager → Filter: Status = Today → View: Board or List
/linked view → Task Manager → Filter: Status = In Progress
/linked view → Revenue Tracker → Filter: Date = Today
/linked view → Content Calendar → Filter: Publish Date = Today
```

---

### Weekly Review Dashboard

**Page Name:** `Weekly Review — Week [#], [Month] [Year]`

**Purpose:** Step back from daily execution to assess the week's performance and plan the next one with intention.

**What this dashboard shows:**

- **Goals Progress This Week** — Linked view of Goal Planner filtered to `Status = In Progress` and `Quarter = Current`. Shows Progress % for each active goal so you can update them.
- **Tasks Completed This Week** — Linked view of Task Manager filtered to `Status = Done` and `Last Edited = This Week`. Your evidence of output.
- **Tasks Not Done (Backlog review)** — Linked view of Task Manager filtered to `Status = Backlog` and `Priority = P1 or P2`. Forces you to reassess or delete anything that keeps getting ignored.
- **Content Due This Week** — Linked view of Content Calendar filtered to `Publish Date = This Week`. See what's scheduled and what's at risk.
- **Revenue This Week** — Linked view of Revenue Tracker filtered to `Date = This Week`. Income received and expected.
- **Ideas to Evaluate** — Linked view of Idea Capture filtered to `Status = Raw` and `Date Captured = Past 7 days`. New ideas from the week that need a decision.

**How to build it:**

```
Create a new page each Sunday (or duplicate a template)
Add a "Week in Review" callout with prompts:
  - What went well this week?
  - What didn't?
  - What am I carrying into next week?
Then add all linked views as described above.
```

> **Tip:** Create a "Weekly Review Template" page and duplicate it each Sunday. Takes 30 seconds to set up fresh.

---

### Monthly Overview Dashboard

**Page Name:** `[Month] [Year] — Overview`

**Purpose:** Zoom out to the month level. Catch trends before they become problems and celebrate real progress.

**What this dashboard shows:**

- **Revenue vs. Goal** — A callout block where you manually note your monthly revenue target and the actual (pulled from Revenue Tracker sum). Below it, a linked view of Revenue Tracker filtered to `Date = This Month` and `Entry Type = Income` with Amount summed.
- **Expenses This Month** — Linked view of Revenue Tracker filtered to `Entry Type = Expense` and `Date = This Month` with Amount summed.
- **Content Published** — Linked view of Content Calendar filtered to `Status = Published` and `Publish Date = This Month`. Count of pieces across platforms.
- **Goals Progress** — Linked view of Goal Planner filtered to `Quarter = Current` with Progress % column visible. Review which goals need attention.
- **Tasks by Project** — Linked view of Task Manager filtered to `Status = Done` and `Due Date = This Month`, grouped by Project. Shows where your time actually went.
- **Ideas This Month** — Linked view of Idea Capture filtered to `Date Captured = This Month`. How many ideas did you capture? How many were acted on?

**Monthly P&L Block (add manually or link):**
```
Revenue:   $[X]
Expenses:  $[X]
Net Profit: $[X]
Revenue Goal: $[X]
Goal Hit?: Yes / No / Partial
```

---

### 90-Day Command Center

**Page Name:** `Q[#] [Year] — Command Center`

**Purpose:** Your highest-altitude view. Where quarterly strategy meets weekly execution. Review this page monthly, not daily.

**What this dashboard shows:**

- **Quarterly Goals** — Linked view of Goal Planner filtered to `Quarter = Current` and `Year = Current`. All goals for this quarter, with Status and Progress %.
- **Revenue Pipeline** — Linked view of Revenue Tracker filtered to `Status = Expected` (all months in the quarter). Shows confirmed but not-yet-received income.
- **Content Strategy** — Linked view of Content Calendar filtered to `Publish Date = within this quarter`, grouped by Platform. Your full content output for the quarter.
- **Ideas Under Evaluation** — Linked view of Idea Capture filtered to `Status = Exploring or Validated`. What are you considering building this quarter?
- **Quarterly P&L Summary** — Three callout blocks, one per month, showing Revenue / Expenses / Net for each month. Update monthly.
- **Key Wins & Lessons** — A free-text block at the bottom. At quarter end, write 3 wins and 3 lessons before creating the next quarter's command center.

**Template structure:**
```
[Callout] Q[#] Theme / Intention: [write in one sentence what this quarter is about]
[Linked View] Quarterly Goals — Goal Planner
[Linked View] Expected Revenue — Revenue Tracker  
[Linked View] Content This Quarter — Content Calendar
[Linked View] Ideas Pipeline — Idea Capture
[Divider]
[Text] Monthly Summaries
  January: Revenue $X | Expenses $X | Net $X
  February: Revenue $X | Expenses $X | Net $X
  March: Revenue $X | Expenses $X | Net $X
[Divider]
[Text] Quarter End Reflection (fill in at quarter close)
```

---

## 4. The Weekly Review System

**Time required:** 15 minutes, every Sunday (or your last workday of the week)
**Where to do it:** Open your Weekly Review Dashboard and follow this checklist in order.

The weekly review is the highest-leverage 15 minutes in your work week. It is the difference between a business that runs you and a business you run. Do not skip it. Do not abbreviate it. Fifteen minutes, every single week, without exception.

---

### The 15-Minute Weekly Review Checklist

**Step 1: Clear Your Capture Inboxes (2 minutes)**
Before opening Notion, clear all other capture points. Check your notes app, voice memos, email drafts, and any sticky notes from the week. Move any tasks to Task Manager and any ideas to Idea Capture. Start the review with empty inboxes — otherwise you're reviewing an incomplete picture.

**Step 2: Review Last Week's Completed Tasks (1 minute)**
Open Task Manager → Done This Week view. Scroll through what you shipped. Do not skip this step — most solopreneurs dramatically underestimate their output. Read the list slowly. Acknowledge it. This is real work that happened.

**Step 3: Process Incomplete P1 and P2 Tasks (2 minutes)**
Open Task Manager → Backlog view filtered to P1/P2. For every task that didn't get done this week, make a decision: Delete it (it wasn't actually important), reschedule it (set a new due date), or downgrade it (move from P1 to P2 or P3). Never let a P1 task quietly age in your backlog.

**Step 4: Update All Active Goal Progress (2 minutes)**
Open Goal Planner → Current Quarter view. For each In Progress goal, update the Progress % honestly. Add one sentence to Review Notes: what moved this week, what didn't, and why. This creates a searchable history of your goal journey.

**Step 5: Review Revenue Tracker (1 minute)**
Open Revenue Tracker → This Month view. Confirm all received payments are marked `Received`. Check if any Expected payments are overdue. Note this week's revenue total in your Weekly Review page.

**Step 6: Plan Next Week's Content (2 minutes)**
Open Content Calendar → This Week view (set to next week). Confirm every scheduled piece has a Hook filled in and is in at least `Draft` status before Friday. If anything is still in `Idea` status and is due next week, either write the hook now or move the publish date.

**Step 7: Set Your P1 Tasks for the Coming Week (2 minutes)**
Open Task Manager. Based on your goal progress, content calendar, and any client commitments, tag 3–5 tasks as P1 for the coming week. No more than 5. This is your contract with yourself about what next week is actually for.

**Step 8: Evaluate New Ideas (1 minute)**
Open Idea Capture → Evaluate These view. For any idea that's been in `Raw` status for more than 2 weeks and still excites you, move it to `Exploring` and fill in the Next Action field. Ideas that don't excite you after two weeks: mark `Killed` without guilt.

**Step 9: Check Your 90-Day Command Center (30 seconds)**
Quickly scan the Quarterly Goals. Is the quarter on track? Are you spending time on the right things? This takes 30 seconds and recalibrates your direction before the new week starts.

**Step 10: Write Your Weekly Intention (1 minute)**
At the top of your Weekly Review Dashboard, write one sentence: "This week, success looks like ___________." It should connect directly to your quarterly goals. This sentence is your north star when Monday morning chaos hits.

**Step 11: Schedule Your Wins (30 seconds)**
Look at your task list and identify one thing on it that, when done, will make you feel genuinely proud. Star it, highlight it, or add a "Win" tag. Knowing which task is your "win task" for the week dramatically increases the chance you do it early rather than endlessly deferring it.

**Step 12: Close Every Tab and Start Fresh (30 seconds)**
Close all browser tabs. Archive last week's review page. Open next week's fresh dashboard. You're done. You just made next week 10x more likely to go well.

---

## 5. The Daily Startup Routine

**Time required:** 5 minutes, every morning before you start working
**Where to do it:** Open your Daily Dashboard — nothing else

The daily startup routine has one purpose: eliminate the "where do I even start?" paralysis that kills the first 30–60 minutes of most solopreneurs' days. Five minutes of intentional setup pays for itself within the first hour.

---

### The 5-Minute Morning Routine

**Step 1: Open Daily Dashboard Only (30 seconds)**
Resist the urge to open email, Slack, Instagram, or anything else first. Open Notion. Open Daily Dashboard. That's it. The rest of the world can wait 5 minutes.

**Step 2: Read Your Weekly Intention (15 seconds)**
This is the sentence you wrote on Sunday: "This week, success looks like ___________." Read it. Let it land. Everything you do today should serve it in some way.

**Step 3: Scan Yesterday's "In Progress" Tasks (30 seconds)**
Open Task Manager → In Progress view. Anything still there from yesterday? Decide in under 10 seconds: continue today, move to backlog, or kill it. Do not let In Progress become a place where tasks go to age.

**Step 4: Set Your Three Non-Negotiables (1 minute)**
These are the three things that, if done today, make today a success regardless of what else happens. They should come directly from your P1 tasks. Write them at the top of your Daily Dashboard in a Callout block:
```
Today's Three:
1. [Task]
2. [Task]
3. [Task]
```

**Step 5: Check Revenue and Content Commitments (1 minute)**
Scan Revenue Tracker for any expected payments due today or invoices that need sending. Check Content Calendar for anything scheduled to publish. If something is publishing today and it's not ready, this is when you know — not at 4pm.

**Step 6: Assign Time Blocks (1 minute)**
Look at your three non-negotiables and their Time Estimate properties. Mentally (or in a calendar) assign them to specific blocks in your day. Don't plan the whole day in detail — just decide when you'll do your most important thing. High-energy tasks go in your peak hours (usually morning for most people). Low-energy tasks (email, admin) go in your lowest-energy window.

**Step 7: Write the Day's One-Line Intention (30 seconds)**
In a text block on your Daily Dashboard, write: "Today I will ___________." This should be even more specific than your weekly intention. Example: "Today I will finish the first draft of the client proposal and send March invoices." Writing this takes 20 seconds and serves as a micro-commitment to yourself.

**Step 8: Close Everything Else and Start (30 seconds)**
Put your phone on Do Not Disturb. Close all browser tabs except the one Notion tab. Start with Task #1 from your Three Non-Negotiables. Do not check email first. The whole point of this system is that you already know what matters — trust it.

---

## 6. Keyboard Shortcuts & Power Tips

These tips are specific to working inside the Solopreneur OS. They are not generic Notion tips — each one is designed to make your daily use of these five databases faster and more effective.

---

### Tip 1: Use `/` Commands to Add Entries Without Leaving Your Dashboard

When a new task, idea, or revenue entry comes up while you're on your Daily Dashboard, you don't need to navigate to the source database. Click inside any linked database view on your dashboard and press `/` to add a new entry directly. It auto-populates to that database. This removes 3–4 navigation clicks per entry and means you'll actually capture things instead of saying "I'll add it later."

**Shortcut:** Click inside linked view → `↓` arrow to the last row → `Enter` to create new entry

---

### Tip 2: Master the Filter Lock for Clean Views

Each of your database views has filters set. To prevent accidentally changing a filter while working in a view, click on the `Filter` button in the top right of any database view, then click the lock icon (if using Notion's team or shared workspace). For personal workspaces, create a naming convention: views named with `[LOCKED]` in the title are your permanent views — don't modify them. Create new views for any experimental filtering.

**Shortcut:** Duplicate a view before experimenting with new filters: Click the `...` next to any view name → `Duplicate`

---

### Tip 3: The Quick Capture Keyboard Shortcut

Create a Notion page called `Quick Capture` and pin it to your sidebar. Every morning, before your Daily Startup Routine, spend 60 seconds sorting whatever landed in Quick Capture overnight into the right database. To navigate to it instantly: `Ctrl/Cmd + K` → type "Quick Capture" → `Enter`. This replaces the scattered note-taking across apps that makes most people lose good ideas.

**Shortcut:** `Ctrl/Cmd + K` opens the universal search/navigation bar — it's the fastest way to jump between any of your 5 databases without using the sidebar

---

### Tip 4: Use Status Property Keyboard Shortcuts in Board Views

When you drag a task from Today to Done (or any status-to-status move), you can also do it without the mouse. Click on any entry in a Board view → a modal opens → click the Status property field → type the first letter of the status you want → `Enter`. This is 2x faster than drag-and-drop, especially on laptops.

**Shortcut:** Inside any open entry: `Ctrl/Cmd + Shift + P` opens the property quick-edit panel in some Notion versions

---

### Tip 5: Batch Status Updates with Multi-Select

When closing out a week's tasks or updating multiple goals at once, use Notion's multi-select to update properties in bulk. In any table view: hold `Ctrl/Cmd` and click multiple rows → a properties panel appears at the bottom → change Status, Priority, or any Select property for all selected entries at once.

**Shortcut:** Click first row → hold `Shift` → click last row to select a range; hold `Ctrl/Cmd` to select individual rows

---

### Tip 6: Create a "Today" Button with the Date Filter

In your Task Manager, create a filtered view called `Today's Board` with these filters: `Status = Today OR Status = In Progress`. Then go to the view options and set the **default view** for the Task Manager to this view. Now every time you navigate to Task Manager, you see today's focused list — not the entire backlog. Change the default by clicking on the current default view name → `Set as default`.

**Shortcut:** To toggle between views quickly, use `Ctrl/Cmd + \` to collapse/expand the sidebar and give yourself more viewing space for complex databases

---

### Tip 7: Link Entries Across Databases with @-Mentions

When writing a task note that references a specific goal, type `@` followed by the goal name — Notion will suggest a link to that Goal Planner entry. This creates a soft cross-reference without using a formal Relation property. Similarly, in Content Calendar entries, you can `@` mention a Revenue Tracker entry to link a content piece to a specific product launch. These mentions are searchable.

**Shortcut:** `@` in any text field → start typing the page or entry name → `Enter` to create the link

---

### Tip 8: The Duplicate-and-Clear Weekly Review Template

Instead of building your Weekly Review Dashboard from scratch each week, use a template. Open your best Weekly Review page → `Ctrl/Cmd + D` (or right-click → Duplicate) → rename with the new week's date → clear the free-text sections (keep the linked views, which auto-update). This takes 45 seconds instead of 5 minutes and ensures you never skip a review because "setting it up feels like too much work."

**Advanced:** Create a Notion Template Button on your main workspace page. Type `/template` → create a button called "New Weekly Review" → paste in your template structure. Now every Sunday you just click the button and your fresh review page appears.

---

## 7. 90-Day Quick-Start Plan

The first 90 days with any new system are the difference between a tool you use daily for years and one you abandon by week three. This plan is designed to build the system progressively — you will be fully operational by Day 30, and spending those operations on the right things by Day 90.

---

### Week 1: Build the Foundation (Days 1–7)

**Day 1 — Database Construction**
Create all 5 databases with their full schemas. Don't add any real data yet. Focus on getting the property names, types, and select options exactly right. This is your infrastructure. Estimated time: 90–120 minutes.

**Day 2 — Add Existing Data**
Populate Revenue Tracker with the last 3 months of income and expenses from your bank statements or previous system. This is tedious and worth it — you will immediately see patterns you've never noticed. Estimated time: 45–60 minutes.

**Day 3 — Build Your Goal Planner**
Add your current quarter's goals. If you don't have formal goals yet, this is the day to create them. Aim for 3–5 goals for the quarter: at minimum one Revenue goal, one Business Growth goal, and one personal goal. Fill in Success Metric and Why It Matters for each before closing Notion. Estimated time: 30 minutes.

**Day 4 — Populate Task Manager**
Do a full brain dump. Every task, project, commitment, and "I should really..." floating in your head goes into Task Manager. All of it. Set them all to Backlog status. Then spend 15 minutes sorting: assign Priority, Project, and Time Estimate to each. Estimated time: 45–60 minutes.

**Day 5 — Build Content Calendar**
Add all content ideas you have (even half-formed ones) to Idea Capture. Add any pieces you've committed to publishing in the next 4 weeks to Content Calendar. Set their Status and Publish Dates. Estimated time: 30 minutes.

**Day 6 — Build the Daily Dashboard**
Follow the dashboard instructions in Section 3. Create your Daily Dashboard with linked views for Tasks, Revenue, and Content. Estimated time: 20–30 minutes.

**Day 7 — First Weekly Review**
Run through the 15-minute weekly review from Section 4, even though you've only used the system for a week. The point is to practice the habit and identify any friction points in your setup. Fix them before Week 2.

---

### Week 2: First Real Operations (Days 8–14)

**Day 8 (Monday): First Daily Startup Routine**
Follow the 5-minute morning routine exactly as written. Don't modify it yet. Use it as written for at least 2 weeks before you decide what to change. Set a recurring alarm for 5 minutes before you'd normally start working labeled "Solopreneur OS Morning."

**Days 8–12: Execute and Capture Everything**
Use the system for all tasks, ideas, and revenue entries this week. When something new comes up — a task, an idea, a payment — stop and add it to the right database before continuing. This friction is intentional. You're rewiring a habit.

**Day 12 (Friday): Identify Friction Points**
Make a note of every moment this week where using the OS felt annoying, slow, or unclear. Don't fix them yet — just document them. Common friction points: views that show too much, missing project options in Task Manager, content platform options you don't use.

**Day 14 (Sunday): Second Weekly Review + System Tuning**
Run your second weekly review. After completing it, spend 15 minutes fixing the friction points you identified on Day 12. Adjust select options, rename views, and simplify anything that felt clunky.

---

### Week 3: Deepen the System (Days 15–21)

**This Week's Focus: Cross-Database Connections**
Set up Relation properties to link your databases. Specifically:
- Link Task Manager entries to Goal Planner (which goal does this task serve?)
- Link Content Calendar entries to Goal Planner (which goal does this content serve?)
- Link Idea Capture entries to Goal Planner (which goal might this idea become?)

Spend 30 minutes adding these relations to existing entries. Going forward, add them at entry creation.

**Mid-Week: Build the Weekly Review Dashboard**
Create your permanent Weekly Review template following Section 3. Set up all linked views with proper filters. Duplicate it on Sunday for your Week 4 review.

**Day 21: Third Weekly Review**
This review should feel faster and cleaner than the first two. If it still takes more than 20 minutes, something in your setup has too many steps. Simplify.

---

### Week 4: Build the 90-Day Command Center (Days 22–28)

**Day 22: Build the Quarterly Dashboard**
Create your Q[current] Command Center following Section 3. This is the first time you'll have a true bird's-eye view of your quarter. Look at it. Does the work you've been doing this week connect to your quarterly goals? If not, that's important information.

**Day 25: Idea Evaluation Session**
By now you should have 10–20 ideas in Idea Capture. Spend 45 minutes evaluating each raw idea using the three questions from Section 2E. Move the best 1–2 ideas to `Exploring`. Kill the ones that don't excite you after two weeks.

**Day 28: Month 1 Review**
Create your first Monthly Overview Dashboard. Fill in your Month 1 P&L (Revenue, Expenses, Net Profit). Write 3 things the month revealed about your business that you didn't know before.

---

### Weeks 5–8: Optimize and Automate (Days 29–56)

**Week 5: Content Rhythm**
By now, your Content Calendar should have at least 3–4 weeks of planned content. This week, create your first "Repurpose Tree": take your best-performing piece from last month and create 3–5 entries in Content Calendar all linking back to it with `Repurpose From` filled in. This week, also set up your By Platform board view and assess: are you showing up where your audience actually is?

**Week 6: Revenue Analysis**
Review your Revenue Tracker for the past 30 days. Answer: What is your average revenue per client? What is your highest-revenue category? What was your biggest unexpected expense? What payment is most overdue? These answers should inform at least one Goal Planner update.

**Week 7: Task System Refinement**
Look at your Done tasks from the past 4 weeks, grouped by Project. Which projects consumed the most time? Did that time align with your goals? If your top time-consuming project is not connected to any active goal, that's a significant finding. Consider whether that project belongs in your Q[next] planning.

**Week 8: System Audit**
Ask yourself these four questions about each database:
1. Am I adding entries consistently? (If not, there's friction to remove)
2. Are the views I use most actually giving me useful information?
3. Is there any data I'm tracking that I never look at? (Remove it)
4. Is there data I wish I had that I'm not tracking? (Add it)

---

### Weeks 9–12: Level Up (Days 57–84)

**Week 9: Advanced Filtering**
Create two new "power views" you don't currently have. Suggestions: a "High Value, Low Effort" view in Idea Capture (filter: Potential Revenue = $5K+ AND Effort = Low), or an "Overdue Invoices" view in Revenue Tracker (filter: Status = Expected AND Date = before today).

**Week 10: Prepare for Quarter End**
You're 10 weeks into your OS. Begin preparing your quarterly transition: review all goals in Goal Planner and update their final Progress %. Start creating next quarter's goals in new entries so you have a draft ready before Q-end.

**Week 11: 90-Day Retrospective**
Write a retrospective page answering:
- What did the system reveal about my business that surprised me?
- Which database did I use most? Which did I underuse?
- What goal am I most proud of progressing on?
- What goal did I neglect and why?
- What's the one change I'm making to the OS for next quarter?

**Week 12: Quarter Close and Reset**
- Mark all completed goals as `Completed` in Goal Planner
- Mark any abandoned goals as `Abandoned` and write one sentence on why
- Archive or move old tasks (Status = Done, older than 60 days) to an Archive database
- Create Q[next] Command Center with fresh goals
- Read back through your Monthly Overview pages for the quarter
- Set your Q[next] revenue goal based on Q[current] actuals — not hope

**After Week 12:** You now have a business OS that most solopreneurs never build. You have 90 days of financial data, goal history, content output, and captured ideas. Every quarter from here gets easier because you're building on evidence, not guesswork.

---

## Final Notes

### Your System Is a Living Document

The Solopreneur OS you build today will not look the same in a year — and that's correct. Your business changes, your workflows evolve, and your priorities shift. Give yourself permission to modify any database schema, rename any view, or add entirely new components as your needs grow.

The one thing you should not change: the 15-minute weekly review and the 5-minute daily startup. These are the habits the system runs on. The databases are the structure. The routines are the engine. Protect the routines.

### What to Do When the System Breaks Down

Every system falls apart occasionally. You'll skip three weekly reviews in a row. Your task backlog will grow to 200 items. You'll stop opening Notion for a week. This is normal and recoverable.

When it happens: run one emergency reset session. Open every database. Archive anything older than 60 days that isn't done. Do one honest weekly review. Set 3 P1 tasks for tomorrow. That's it. You're back.

The system works not because it's perfect, but because it's always there when you come back to it.

### You Built Something Real

Most people who buy productivity systems read them once and forget them. You're different — you built this, entry by entry, view by view. That process is part of the value. You now understand your business in a way you didn't before, because you had to think explicitly about your revenue, your goals, your tasks, your content, and your ideas in order to structure them.

That clarity is the real product. The Notion workspace is just where you keep it.

---

*Solopreneur OS v1.0 | Built for solo founders who want to run their business, not be run by it.*
*Support: For questions about this guide, refer to the setup instructions or community resources shared with your purchase.*
