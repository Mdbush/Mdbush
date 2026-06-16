import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Paid Faster as a UAE Freelancer (7 Practical Strategies)",
  description:
    "7 proven strategies for UAE freelancers to get paid faster — upfront deposits, payment term negotiation, invoice timing, late fees, and what actually works with UAE clients.",
  alternates: { canonical: "/blog/how-to-get-paid-faster-uae" },
  openGraph: {
    title: "How to Get Paid Faster as a UAE Freelancer (7 Practical Strategies)",
    description: "How to reduce payment delays as a UAE freelancer — deposits, terms, timing, and what actually works.",
    type: "article",
    url: "/blog/how-to-get-paid-faster-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Paid Faster as a UAE Freelancer (7 Practical Strategies)",
  description: "7 strategies for UAE freelancers to reduce payment delays.",
  url: `${siteUrl}/blog/how-to-get-paid-faster-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const strategies = [
  {
    number: "01",
    title: "Always collect a deposit before starting",
    detail: "A deposit of 30–50% before any work begins does two things: it qualifies the client (if they will not pay a deposit, they will not pay the invoice) and it protects you if the project falls through mid-way. For project rates under AED 2,000, 100% upfront is a reasonable ask. For larger projects, 50% upfront and 50% on delivery is standard.",
    script: "\"My standard payment structure is 50% deposit before we start and 50% on delivery. Once the deposit is received, I will send you a start date and project timeline.\"",
  },
  {
    number: "02",
    title: "Send invoices immediately — not days later",
    detail: "Every day you delay sending an invoice is a day added to your payment wait. Send the invoice on the same day you complete the deliverable, ideally within hours. Clients are most receptive to payment when the work is fresh and their satisfaction is highest.",
    script: "No script needed — build a habit of invoicing the same day, every time. Set a Notion reminder or calendar alert for delivery dates.",
  },
  {
    number: "03",
    title: "Use specific due dates, not \"Net 30\"",
    detail: "\"Payment due within 30 days\" is vague. Clients interpret vague terms generously. \"Payment due by 30 June 2026\" is specific and creates a psychological commitment to a date. Use 15-day terms by default — if a client needs 30 days due to internal processes, they will tell you.",
    script: "On your invoice: \"Payment due: [specific date 15 days from invoice date]\"",
  },
  {
    number: "04",
    title: "Add a late payment fee (even if you never charge it)",
    detail: "Research consistently shows that invoices with a stated late fee are paid faster than those without, even when the fee is never enforced. Add a 2–3% monthly charge for overdue invoices in your invoice footer. Most clients never incur it — but they see it.",
    script: "Invoice footer: \"Invoices overdue by more than 7 days are subject to a 2% monthly late fee as per our agreement.\"",
  },
  {
    number: "05",
    title: "Follow up the day after the due date",
    detail: "Most UAE freelancers wait 7–14 days before following up on an overdue invoice. The result: the client loses urgency, accounting departments deprioritize it, and payment gets pushed further. Following up on day 1 of overdue signals that you track your invoices closely — and it triggers faster payment from clients who genuinely forgot.",
    script: "\"Hi [Name], just flagging that Invoice [#] for AED [X] was due yesterday. Could you confirm it has been processed, or let me know if there is anything needed from my end?\"",
  },
  {
    number: "06",
    title: "Know your client's payment cycle",
    detail: "Many UAE companies run payment runs on specific days — the 1st and 15th is common, or end-of-month only. If you know a client pays on the 15th, invoice before the 10th to catch the next run rather than missing it by a day and waiting another month. Ask during onboarding: \"When does your team usually process supplier payments? I will time invoices accordingly.\"",
    script: "\"When does your accounts payable team usually process payments? I want to make sure I time invoices so they do not miss your payment run.\"",
  },
  {
    number: "07",
    title: "Accept multiple payment methods",
    detail: "If you only accept bank transfer, you lose payment velocity from clients who prefer card payments, and you make international clients jump through extra steps. Consider setting up: local bank transfer (IBAN), Stripe or PayPal for card payments and international clients, Wise for international transfers with lower fees.",
    script: "On your invoice: \"Payment accepted via bank transfer (IBAN details below), card payment via [Stripe link], or international transfer via Wise.\"",
  },
];

export default function HowToGetPaidFasterUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">How to Get Paid Faster as a UAE Freelancer</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Client Work & Proposals</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            How to Get Paid Faster as a UAE Freelancer (7 Practical Strategies)
          </h1>
          <p className="text-gray-500 text-sm">6 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Late payments are one of the biggest cash flow problems for UAE freelancers — not
            because clients refuse to pay, but because payment processes are slow, invoicing
            is inconsistent, and most freelancers wait too long to follow up. These 7 strategies
            do not require legal escalation or confrontational conversations. They are structural
            changes that put you in control of your payment timeline.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-gray-900 mb-1">The single most important change</p>
            <p className="text-gray-700">
              If you implement only one thing from this guide, make it a deposit before starting.
              A deposit changes the entire payment dynamic — it signals professionalism, creates
              commitment, and means you are never starting work with zero money in hand.
            </p>
          </div>

          <div className="space-y-6 mt-4">
            {strategies.map((s) => (
              <section key={s.number} className="border border-gray-200 rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl font-black text-gray-200 leading-none shrink-0">{s.number}</span>
                  <h2 className="font-bold text-gray-900">{s.title}</h2>
                </div>
                <p className="text-sm text-gray-700 mb-3">{s.detail}</p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Script / template</p>
                  <p className="text-xs text-gray-700 italic">{s.script}</p>
                </div>
              </section>
            ))}
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">UAE-Specific Payment Context</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li><strong>Payment via WhatsApp is common for small amounts:</strong> Some UAE clients prefer quick bank transfers organized over WhatsApp. Always follow up with a formal invoice for your records, even if payment was agreed informally.</li>
              <li><strong>Large companies move slowly:</strong> Multinationals in Dubai often have 45–60 day payment terms internally. If your client is a large corporate, discuss payment terms before signing any contract — or ask to have your contact approve the invoice directly rather than routing through central accounts payable.</li>
              <li><strong>Free zone vs mainland companies:</strong> There is no material payment difference based on license type, but free zone companies occasionally have additional accounting steps. Build this into your payment timeline expectations.</li>
              <li><strong>Ramadan and holiday periods:</strong> Finance teams often slow down during Ramadan and around National Day. If an invoice falls due during these periods, send it at least 10 days early so it can be processed before the slowdown.</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">When the invoice is already overdue</p>
            <h3 className="text-lg font-bold mb-2">How to Chase Late Payments as a UAE Freelancer</h3>
            <p className="text-gray-400 text-sm mb-4">
              A 4-step follow-up sequence from friendly reminder to formal notice — with
              word-for-word scripts and the legal options available in the UAE.
            </p>
            <Link
              href="/blog/late-payment-freelance-uae"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Read the Late Payment Guide →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/late-payment-freelance-uae", title: "How to Chase Late Payments as a Freelancer in the UAE" },
                { href: "/blog/freelance-invoice-template-uae", title: "Freelance Invoice Template for UAE Clients (What to Include)" },
                { href: "/blog/freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include" },
                { href: "/blog/freelance-invoice-uae", title: "How to Invoice Clients in the UAE" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">
                  → {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
