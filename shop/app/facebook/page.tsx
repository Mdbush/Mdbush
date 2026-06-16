import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Facebook Content Library — SoloKit",
  robots: { index: false, follow: false },
};

const posts = [
  {
    id: 1,
    type: "Educational",
    viral: true,
    hook: "Nobody talks about the real cost of freelancing in Dubai.",
    content: `Nobody talks about the real cost of freelancing in Dubai. So I will.

Your freelance visa: AED 7,500/year
Health insurance: AED 5,000/year
Software tools: AED 3,600/year
Slow months (15% buffer on income)

To actually take home AED 20,000/month, you need to bill AED 25,600+.

That's what most people ignore when they set their rates.

If you're a UAE freelancer wondering why you're always "busy but broke" — this is why.

👉 Free rate calculator at solokit.cloud/blog/freelance-rate-calculator-uae`,
  },
  {
    id: 2,
    type: "Tips",
    viral: true,
    hook: "3 contract clauses every UAE freelancer needs — and most don't have.",
    content: `3 contract clauses every UAE freelancer needs — and most don't have:

1️⃣ "50% deposit due before work commences"
→ Stops clients from ghosting at delivery
→ Makes clients take the project seriously

2️⃣ "Revisions limited to 2 rounds per deliverable"
→ Ends unlimited change requests
→ Clients give better, more focused feedback

3️⃣ "Work pauses if payment is 14+ days overdue"
→ The single most effective clause for getting paid on time
→ Most clients pay immediately when they see this

One page. Signed before every project. Changes everything.

Which one do you wish you'd had earlier? Comment below 👇`,
  },
  {
    id: 3,
    type: "Motivational/Relatable",
    viral: true,
    hook: "Signs you're actually running a real freelance business vs just being busy.",
    content: `Signs you're actually running a real freelance business (vs just being very busy):

✅ You know exactly what you billed last month
✅ You have a contract signed before every project
✅ You take 50% upfront — always
✅ You have a pipeline, not just WhatsApp messages
✅ You raise your rates every 12 months
✅ Past clients hear from you every 90 days

❌ You're still figuring this out? That's what systems are for.

Most UAE freelancers have the skills. Very few have the system.

Which one are you still working on? 👇`,
  },
  {
    id: 4,
    type: "Question/Poll",
    viral: false,
    hook: "Dubai freelancers: what's your biggest challenge right now?",
    content: `Dubai freelancers — what's your biggest challenge right now?

A) Finding consistent clients
B) Getting paid on time
C) Setting the right rates
D) Managing too many clients at once

Drop your answer in the comments 👇

(I'll share specific tips for whichever gets the most votes)`,
  },
  {
    id: 5,
    type: "Story/Personal",
    viral: true,
    hook: "A client once tried to add 3 months of extra work after we signed a contract.",
    content: `A client once tried to add 3 months of extra work after we signed a contract.

"Oh, and while you're at it, could you also..."

Old me: said yes. Worked for free for months. Resented every minute.

New me uses 6 words: "That falls outside our agreed scope."

Then I offer to quote for it separately.

Result: the client either pays for the extra work, or realizes it wasn't that important.

Both outcomes are fine.

Your contract protects both of you. Use it.

Have you ever said yes to scope creep you regret? 👇`,
  },
  {
    id: 6,
    type: "Educational (quick tip)",
    viral: false,
    hook: "UAE tax for freelancers — the 60-second version.",
    content: `UAE tax for freelancers — the 60-second version:

Personal income tax: 0% ✅
Freelance income: tax-free ✅
Corporate tax: 9% — only if profits exceed AED 375,000/year
VAT: 5% — only if UAE revenue exceeds AED 375,000/year

Most UAE freelancers pay: nothing.

BUT — you still need to register on EmaraTax.ae for corporate tax, even if you owe zero. It's free. It takes 20 minutes. Skip it and you create problems later.

Full breakdown with step-by-step instructions 👉 solokit.cloud/blog/freelance-tax-uae

Save this and share it with any freelancer who asks about UAE taxes 📌`,
  },
  {
    id: 7,
    type: "List post",
    viral: true,
    hook: "The 5-minute setup that saves UAE freelancers 5 hours a week.",
    content: `The 5-minute setup that saves UAE freelancers 5+ hours a week:

Create ONE Notion database with these columns:
→ Client name
→ Project status (active / delivered / paid)
→ Invoice amount
→ Invoice due date
→ Notes

That's it.

Filter by "active" = your workload
Filter by "unpaid" = your accounts receivable
Filter by "paid" = your monthly revenue

Most UAE freelancers track clients in WhatsApp. Then wonder why they miss follow-ups and forget invoices.

A simple database changes everything.

⬇️ We built a ready-to-use version. Duplicate it in 5 minutes.
👉 solokit.cloud/products/freelancer-client-crm`,
  },
  {
    id: 8,
    type: "Insight/Opinion",
    viral: true,
    hook: "Unpopular opinion: UAE freelancers should raise their rates right now.",
    content: `Unpopular opinion: UAE freelancers should raise their rates right now.

Not because you can charge anything you want.

Because the market has moved.

Mid-level designer rates in Dubai:
2022: AED 100-150/hr
2026: AED 180-280/hr

Mid-level developer rates:
2022: AED 150-200/hr
2026: AED 250-400/hr

If you haven't raised rates since 2022 or 2023, you've taken a silent pay cut.

The easiest time to raise rates: January.
The email: "Hi [name], just a heads up — my rates are updating from [date]. Happy to honor current pricing for any projects we kick off before then."

Simple. Professional. No apology needed.

Agree or disagree? 👇`,
  },
  {
    id: 9,
    type: "Value post",
    viral: false,
    hook: "Free: 10 AI prompts every UAE freelancer needs.",
    content: `10 AI prompts every UAE freelancer needs — free, no email required:

✅ Client proposal that wins projects
✅ Follow-up email that re-opens cold leads
✅ Overdue invoice reminder (polite but firm)
✅ Scope creep response
✅ LinkedIn bio that gets you noticed
✅ Client onboarding welcome email
✅ Weekly project status update
✅ Testimonial request
✅ Service description for your website
✅ Content idea generator

All 10 are at solokit.cloud/free — ready to copy, fill the brackets, and use immediately.

No signup. No credit card. Just 10 prompts that work.

👉 solokit.cloud/free

Share with a freelancer who could use these 🙏`,
  },
  {
    id: 10,
    type: "Engagement post",
    viral: true,
    hook: "What's the one thing you wish you knew before you started freelancing in Dubai?",
    content: `What's the one thing you wish you knew before you started freelancing in Dubai?

For me: that your billing rate and your take-home income are very different numbers.

AED 300/hour sounds incredible. Until you pay for:
→ Visa renewal
→ Health insurance
→ Slow months
→ No paid leave

The real number is always lower than the headline.

But once you know your real number, you can price to actually get there.

Drop yours in the comments 👇 Let's build the guide nobody wrote for us.`,
  },
  {
    id: 11,
    type: "Product/value",
    viral: false,
    hook: "Stop starting every new client project from scratch.",
    content: `Stop starting every new client project from scratch.

Every onboarding email. Every project brief. Every invoice follow-up. Every revision request response.

You've written each of these 20+ times. And every time feels like the first.

That's what SOPs fix.

Write the process once. Document it. Then follow the same steps every time — faster, more professional, fewer mistakes.

The 5 SOPs every UAE freelancer needs first:
1️⃣ Client onboarding (first 72 hours)
2️⃣ Proposal → contract → deposit sequence
3️⃣ Revision request handling
4️⃣ Invoice + follow-up sequence
5️⃣ Project closeout + testimonial request

We built all 5 — ready to adapt and use:
👉 solokit.cloud/products/sop-starter-pack

30-day guarantee. Instant download.`,
  },
  {
    id: 12,
    type: "Tips/educational",
    viral: false,
    hook: "The right way to follow up after sending a proposal in Dubai.",
    content: `The right way to follow up after sending a proposal in Dubai:

❌ "Just checking in" — deleted immediately

✅ What actually works:

Day 5 (no response):
"Hi [name], wanted to flag that I'm holding the project slot until [date]. Happy to adjust scope or payment terms if that helps move things forward. What's the current status?"

Day 8 (still nothing):
"Closing this one out on my end — if timing changes in the future, feel free to reach out."

Then: move on.

Chasing proposals is the biggest time drain in freelancing.

Build a pipeline so you can afford to let go of the ones that go cold.

Have a follow-up approach that's worked for you? Share it 👇`,
  },
];

export default function FacebookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Facebook Content</span>
          </nav>

          {/* Dark hero */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Content Strategy</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Facebook Content Library — SoloKit</h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">12 ready-to-post Facebook posts. Conversational, ends with a question — optimised for comments and reach.</p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Page</span>
                <span className="ml-2 font-semibold text-white">SoloKit (@solokitco)</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Frequency</span>
                <span className="ml-2 font-semibold text-white">1× per day</span>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl px-4 py-2.5 text-sm">
                <span className="text-gray-400">Best times (UAE)</span>
                <span className="ml-2 font-semibold text-white">7–9 AM · 12–2 PM · 7–9 PM</span>
              </div>
            </div>
          </div>

          {/* Page Setup */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Page Setup
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "Page name", value: "SoloKit" },
              { label: "Username", value: "@solokitco" },
              { label: "Website", value: "solokit.cloud" },
              { label: "CTA button", value: "Shop Now → solokit.cloud" },
              { label: "Page ID", value: "1098756576664555" },
              { label: "Category", value: "Software Company · Digital Products" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-emerald-800 mb-2">Automated posting</p>
            <p className="text-sm text-emerald-800">The cron job at <code className="bg-emerald-100 px-1.5 py-0.5 rounded text-xs font-mono">/api/cron/social-post</code> auto-posts to this Facebook page Sunday–Friday at 7am UAE time — once <code className="bg-emerald-100 px-1.5 py-0.5 rounded text-xs font-mono">FACEBOOK_PAGE_ACCESS_TOKEN</code> is set in Vercel env vars. Posts below are for manual supplemental posting.</p>
          </div>

          {/* Post Library */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Post Library
          </h2>

          <div className="space-y-5 mb-10">
            {posts.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-start gap-3">
                  <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">
                    {p.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {p.viral && (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">High engagement</span>
                      )}
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">{p.type}</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{p.hook}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Post text — copy &amp; paste</p>
                  <pre className="text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-4 whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto select-all">
                    {p.content}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Strategy */}
          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Strategy
          </h2>

          <div className="space-y-3 mb-10">
            {[
              { title: "Native text posts win", desc: "Facebook rewards native text posts + image posts. Avoid adding links in the post body — it kills reach. Put links in the first comment instead." },
              { title: "Engagement is the signal", desc: "Facebook shows posts to more people when they have comments. Every post should end with a direct question. Reply to every comment within 1 hour of posting." },
              { title: "Image posts", desc: "Post a simple quote card or stat graphic with an educational caption. Create these in Canva using the brand colors (dark background, white text)." },
              { title: "Groups", desc: "Join UAE freelancer Facebook groups and post value there too. Don't spam — contribute, then mention SoloKit when relevant." },
              { title: "Automated vs manual", desc: "The cron job handles daily automated posts. These 12 posts are for manual scheduling using Meta Business Suite at specific high-engagement times." },
              { title: "Boost high performers", desc: "Any post that gets 20+ organic comments — boost it with AED 50-100 ad spend to UAE freelancer audience. High ROI." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Build your freelance system</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and SOPs built for UAE freelancers. Everything you need in one kit.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
