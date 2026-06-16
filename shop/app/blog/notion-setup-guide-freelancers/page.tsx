import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notion Setup Guide for UAE Freelancers (From Blank Page to Full Business OS) — SoloKit",
  description:
    "Step-by-step guide to setting up Notion as your freelance business HQ — client database, project tracker, invoice log, and daily workflow in one workspace.",
  alternates: { canonical: "/blog/notion-setup-guide-freelancers" },
  openGraph: {
    title: "Notion Setup Guide for UAE Freelancers (From Blank Page to Full Business OS)",
    description:
      "Step-by-step guide to setting up Notion as your freelance business HQ — client database, project tracker, invoice log, and daily workflow in one workspace.",
    type: "article",
    url: "/blog/notion-setup-guide-freelancers",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Notion Setup Guide for UAE Freelancers (From Blank Page to Full Business OS)",
  description:
    "Step-by-step guide to setting up Notion as your freelance business HQ — client database, project tracker, invoice log, and daily workflow in one workspace.",
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/notion-setup-guide-freelancers",
  mainEntityOfPage: "https://solokit.cloud/blog/notion-setup-guide-freelancers",
};

const fiveThings = [
  {
    num: "1",
    title: "Client Database",
    body: "Every client gets a row. Columns: name, company, contact info, status (prospect / active / past), contract value, payment status. This is your source of truth — not a WhatsApp thread.",
  },
  {
    num: "2",
    title: "Projects Database",
    body: "Linked to your client database via a relation property. Columns: project name, linked client, status (briefing / active / review / done), deadline, deliverable. You can now see every active project across all clients in one filtered view.",
  },
  {
    num: "3",
    title: "Invoice Tracker",
    body: "Invoice number, linked client, amount (AED), due date, status (sent / overdue / paid). Filter by 'overdue' every Monday morning. This alone has recovered thousands of dirhams for freelancers who lost track of outstanding payments.",
  },
  {
    num: "4",
    title: "Proposal Library",
    body: "Past proposals stored as Notion pages inside a database. When you win a new brief, duplicate the closest past proposal and edit it — not write from scratch. Saves 2–3 hours per pitch.",
  },
  {
    num: "5",
    title: "Daily Tasks",
    body: "A simple task list linked to your projects database. Checkbox view. Every morning you check 3 tasks you'll complete today. At end of day, anything unchecked moves to tomorrow. No backlog spiral.",
  },
];

const mistakes = [
  {
    mistake: "Too many databases with no relations",
    fix: "If your clients list and your projects list have nothing connecting them, you'll always be copy-pasting. Use relation properties to link them — one change updates both.",
  },
  {
    mistake: "No status column anywhere",
    fix: "Without a status property, you can't filter. You can't see 'all active projects' or 'all unpaid invoices'. Add a Select property called Status to every database you create.",
  },
  {
    mistake: "Not using filtered views",
    fix: "The same database can look like 5 different tools depending on filters. Your client database with filter 'status = active' is your pipeline. With filter 'payment status = overdue' it's your collections list. One database, multiple views.",
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
          
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Notion Setup Guide for UAE Freelancers (From Blank Page to Full Business OS)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">Step-by-step guide to setting up Notion as your freelance business HQ — client database, project tracker, invoice log, and daily workflow in one workspace.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>5 min read</span>
          </div>
        </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Notion Setup Guide for UAE Freelancers (From Blank Page to Full Business OS)
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Step-by-step guide to setting up Notion as your freelance business HQ — client database,
            project tracker, invoice log, and daily workflow in one workspace.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            Most UAE freelancers manage their business across five different places: a WhatsApp group for client
            messages, an Excel sheet for invoices, a Notes app for project ideas, email for proposals, and their
            memory for everything else. This is how things fall through the cracks.
          </p>

          <p>
            Notion solves this. One workspace, everything linked, accessible on your phone in a client meeting
            in Business Bay. And unlike expensive CRM tools, the free plan works for most solo freelancers.
            Here&apos;s how to build it properly.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Why Notion Beats Spreadsheets for Freelancers</h2>

          <p>
            Spreadsheets are flat. You have a clients sheet, a projects sheet, an invoices sheet — and no
            connection between them. Change a client name in one place and it&apos;s wrong everywhere else.
          </p>

          <p>
            Notion uses <strong>relational databases</strong>. Your projects are linked to your clients.
            Your invoices are linked to your projects. When a client pays, you mark it once and it reflects
            everywhere. No duplicate data, no manual cross-referencing. It also works well on mobile —
            the Notion app in Dubai is fast enough to take notes during client meetings without switching apps.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The 5 Things Every Freelancer Needs in Their Notion Workspace</h2>

          <div className="space-y-4 my-6">
            {fiveThings.map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">How to Create a Linked Database in Notion (Client → Projects)</h2>

          <p>
            This is the most powerful thing you can learn in Notion and it takes about 3 minutes:
          </p>

          <div className="space-y-3 my-4">
            {[
              { step: "1", text: 'Create your Clients database. Add columns: Name, Company, Status (Select), Contract Value (Number), Payment Status (Select).' },
              { step: "2", text: 'Create your Projects database. Add columns: Project Name, Status (Select), Deadline (Date), Deliverable (Text).' },
              { step: "3", text: 'In the Projects database, add a new property. Choose "Relation" as the type. Connect it to your Clients database.' },
              { step: "4", text: 'Now each project row has a field where you select the client it belongs to. Open any client row and you\'ll see all their projects listed automatically.' },
              { step: "5", text: 'Add a Rollup property to your Clients database to show the total number of active projects per client — useful for spotting who you\'re actually working for.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 text-sm">
                <span className="w-6 h-6 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center font-semibold shrink-0 mt-0.5">{item.step}</span>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The 15-Minute Friday Review Template</h2>

          <p>
            High-performing freelancers do a short weekly review. Here&apos;s the exact routine to run every Friday at 4pm:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6 text-sm space-y-2">
            <p className="font-semibold text-gray-900 mb-3">Weekly Review (15 min)</p>
            {[
              "Open Invoice Tracker → filter by 'overdue'. Send one follow-up message for each.",
              "Open Projects database → filter by 'active'. Check each has a clear next action.",
              "Open Clients database → filter by 'prospect'. Did any go cold this week? Mark them.",
              "Write 3 priorities for next week in your Daily Tasks. Do it now, not Monday morning.",
              "Check your revenue dashboard: are you on track for your monthly target?",
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-600">
                <span className="text-gray-400 shrink-0">✓</span>
                <span>{task}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">How to Add a Revenue Dashboard</h2>

          <p>
            In your Invoice Tracker database, add a formula property called <strong>Revenue (Paid)</strong>.
            Use a filter view that only shows invoices with status = &quot;paid&quot;. At the bottom of any Number
            column in a Notion table, you can click to show the <strong>Sum</strong> — this gives you your
            total paid revenue at a glance.
          </p>

          <p>
            For a full dashboard, create a new page with linked database views embedded side by side:
            active projects on the left, outstanding invoices on the right. This is your business
            command centre. Open it every Monday morning.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Common Notion Mistakes Freelancers Make</h2>

          <div className="flex flex-col gap-4 my-4">
            {mistakes.map((item) => (
              <div key={item.mistake} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-red-600 mb-1">✗ {item.mistake}</p>
                <p className="text-sm text-gray-600">{item.fix}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Using Notion on Mobile in Dubai</h2>

          <p>
            The Notion mobile app works well — fast enough for a 4G connection at a café in DIFC.
            Use it during client meetings to take structured notes directly into a linked project page.
            Set up a widget on your iPhone or Android home screen pointing to your Daily Tasks database
            so your 3 priorities for the day are visible the moment you pick up your phone.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-1">💡 Quick answer: Is Notion free?</p>
            <p className="text-sm text-gray-500">
              Yes. The free plan works for most freelancers — unlimited pages, unlimited blocks, and up to 10 guests.
              Notion Plus (around AED 19/month) adds unlimited file uploads and version history, but it&apos;s not
              required to build a full business system. Start free, upgrade only if you hit a limit.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">The Shortcut: Skip the Setup</h2>

          <p>
            Building a full Notion workspace from scratch takes 3–5 hours if you&apos;ve never done it before.
            Getting the relations right, the views configured, the formulas working — it&apos;s a real time investment.
          </p>

          <p>
            SoloKit&apos;s{" "}
            <Link
              href="https://solokit.cloud/products/freelancer-client-crm"
              className="text-gray-900 font-semibold underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              Freelancer Client CRM
            </Link>{" "}
            is a pre-built Notion workspace with all 5 systems already connected: client database,
            projects tracker, invoice log, proposal library, and daily task view. Duplicate it to your
            Notion account and you&apos;re operational in 10 minutes — not 5 hours.
          </p>

          <div className="bg-gray-900 rounded-2xl p-6 my-8">
            <p className="text-white font-semibold mb-2">Freelancer Client CRM — Pre-built Notion Workspace</p>
            <p className="text-gray-400 text-sm mb-4">
              All 5 databases pre-built and linked. Revenue dashboard included. Weekly review template
              inside. Duplicate once, run your business forever.
            </p>
            <Link
              href="https://solokit.cloud/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get the Freelancer Client CRM →
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/freelance-systems-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                Why Most UAE Freelancers Stay Stuck at AED 10K/Month →
              </Link>
              <Link href="/blog/how-to-price-freelance-services-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Price Your Freelance Services in the UAE →
              </Link>
              <Link href="/blog/how-to-get-clients-linkedin-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Get Freelance Clients on LinkedIn in the UAE →
              </Link>
              <Link href="/blog/freelancer-burnout-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                Freelancer Burnout in Dubai: How to Recognize It and Fix It →
              </Link>
            </div>
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
