import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Build a Freelance Portfolio in Dubai With No Clients Yet — SoloKit",
  description:
    "Build a credible freelance portfolio in Dubai even with zero clients. Practical strategies for spec work, volunteer projects, and positioning that wins your first UAE clients.",
};

const portfolioTypes = [
  {
    type: "Spec work",
    desc: "Create work for fictional or real companies without being hired. Redesign an existing Dubai brand's social media, write a sample marketing strategy for a hotel, create a fictional financial report. The work is real — only the client is hypothetical. Clearly labeled as 'concept work.'",
    bestFor: "Designers, copywriters, marketers, social media managers, SEO specialists",
    effort: "Medium — you control the brief, so make it something you would actually want to do for a client",
  },
  {
    type: "Pro-bono and volunteer work",
    desc: "Offer services for free or at a heavily reduced rate to a charity, community organization, small business, or non-profit in the UAE. Real client, real brief, real outcome — and a real testimonial. Many UAE-based NGOs, community initiatives, and small businesses welcome this.",
    bestFor: "Any freelance discipline — especially strong for early careers where a reference matters as much as the work",
    effort: "Lower paid but higher credibility. Choose clients who can provide a professional testimonial.",
  },
  {
    type: "Personal projects with documented outcomes",
    desc: "Start a newsletter, run social media for a personal brand, build a small website or app, produce a series of YouTube videos. Document the process and results. Showing that you grew an Instagram page from 200 to 2,000 followers is a legitimate client acquisition portfolio piece.",
    bestFor: "Content creators, social media managers, developers, marketers, SEO specialists",
    effort: "Higher investment of time but 100% your own — shows initiative and self-direction that clients value",
  },
  {
    type: "Internal work from previous employment",
    desc: "Work you created while employed — campaigns, reports, designs, systems — can often be included in a portfolio with employer permission. Many UAE professionals transitioning to freelancing have 5–10 years of excellent work they legally own or can reference.",
    bestFor: "Career changers and recently independent professionals",
    effort: "Low — requires reviewing what you already have and getting appropriate permissions",
  },
];

const portfolioSections = [
  {
    num: "1",
    title: "Clear positioning statement",
    body: "The first thing a Dubai client sees should answer: who you help, what you do, and what outcome you create. Not 'I am a marketing consultant.' Instead: 'I help Dubai F&B brands grow their social following and convert online audiences into restaurant bookings.' Specific, outcome-focused, and immediately clear on fit.",
  },
  {
    num: "2",
    title: "3–5 case studies, not a gallery",
    body: "A gallery of pretty images with no context tells a client almost nothing. A case study — problem, approach, result — tells them everything. Even with hypothetical clients, write it as a case study: 'The brief was X. My approach was Y. The outcome was Z.' Three strong case studies outperform twenty portfolio images.",
  },
  {
    num: "3",
    title: "At least one testimonial",
    body: "Even one genuine testimonial from a real human being makes a UAE portfolio dramatically more credible. Former colleagues, managers, professors, anyone you've done work for — a kind word about your professionalism or quality is worth five additional portfolio pieces. Ask people who know your work before you launch.",
  },
  {
    num: "4",
    title: "Contact clarity",
    body: "More Dubai freelance portfolio websites fail at this than at any other single point. Make it completely obvious how to get in touch — email, WhatsApp number, or a contact form that works. If a potential client has to search for your contact details, a meaningful percentage will give up.",
  },
  {
    num: "5",
    title: "Evidence of process, not just outcomes",
    body: "Clients hire freelancers as much for how they work as what they produce. Show your process — a wireframe before the final design, a content strategy document before the articles, a competitor analysis before the recommendations. Process evidence builds trust in ways that polished outputs alone cannot.",
  },
];

const platforms = [
  { name: "Personal website", notes: "The most credible option long-term. Use Framer, Webflow, or even a well-designed Notion page to start. A personal domain signals professionalism." },
  { name: "Behance", notes: "Standard for designers and creatives. Strong discovery if your work is visual. UAE clients in creative industries will look here." },
  { name: "Contra", notes: "Freelancer-first portfolio platform with strong international client discovery. Growing in the UAE market." },
  { name: "LinkedIn Featured section", notes: "Underused but effective. Upload PDFs of case studies, link to projects, add media directly. Many Dubai clients will check LinkedIn before any other platform." },
  { name: "Notion portfolio page", notes: "Fast to set up, free, customizable. Excellent for consultants, writers, and strategists. Less strong for visual creatives who need image-heavy display." },
];

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">Build Freelance Portfolio Dubai</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">GETTING STARTED</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              How to Build a Freelance Portfolio in Dubai With No Clients Yet
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              The &quot;no portfolio without clients, no clients without a portfolio&quot; trap is solvable. Here&apos;s exactly how Dubai freelancers build credible portfolios before their first paid client.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Every freelancer faces the same catch-22 at the beginning: clients want to see your portfolio before hiring you, but you need clients to build a portfolio. Dubai makes this feel especially acute because the market is competitive and clients have plenty of options. But this problem is solvable — and many of Dubai&apos;s most successful freelancers started with exactly zero paid client work. Here is how they did it.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Reframe What a Portfolio Actually Is
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A portfolio does not need to contain paid client work. What clients want to see when they review your portfolio is: can this person do the work I need done, at the quality I need, and with a process I can trust? All of those questions can be answered without a single paying client.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The only thing a portfolio must prove is that the work you will do for them is good. How the work in your portfolio was commissioned is secondary.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            4 Ways to Build Portfolio Work Without Clients
          </h2>

          <div className="space-y-5 mb-8">
            {portfolioTypes.map((type, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">{type.type}</h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{type.desc}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">Best for: {type.bestFor}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">{type.effort}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            What Every Strong Freelance Portfolio Includes
          </h2>

          <div className="space-y-4 mb-8">
            {portfolioSections.map((section) => (
              <div key={section.num} className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {section.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{section.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Where to Host Your Portfolio
          </h2>

          <div className="space-y-3 mb-8">
            {platforms.map((platform, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0 mt-2"></span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{platform.name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{platform.notes}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Tailoring Your Portfolio for the Dubai Market
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Dubai clients respond well to certain signals that may be different from other markets. Include UAE context wherever possible: if you did spec work, base it on a real UAE company or sector. If you have experience with Arabic-language content, highlight it. If you have worked with hospitality, real estate, or financial services — three of Dubai&apos;s largest freelance demand sectors — lead with that.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Also: include your contact via WhatsApp, not just email. Dubai business culture is heavily WhatsApp-first, and a visible WhatsApp number on your portfolio makes you feel immediately approachable in a way that email-only portfolios do not.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-semibold text-amber-900 mb-1">The first paid project is easier than you think</p>
            <p className="text-sm text-amber-800">
              Dubai has a large volume of SMEs, startups, and entrepreneurs who need professional services but can&apos;t yet afford established agencies. A portfolio with 3 strong case studies (even spec work) and a clear positioning statement is enough to win your first paid project — if you combine it with proactive outreach. The portfolio alone does not bring clients. The outreach brings them; the portfolio closes them.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            The 30-Day Portfolio Plan
          </h2>

          <div className="space-y-3 mb-8">
            {[
              { week: "Week 1", action: "Define your positioning — who you help and what outcome you deliver. Write a 2-sentence version and get feedback from 3 people who know your work." },
              { week: "Week 2", action: "Create 2–3 portfolio pieces. Use spec work or pro-bono. Write each as a mini case study with brief, approach, and result." },
              { week: "Week 3", action: "Set up your portfolio platform. Get at least one testimonial from a former colleague, manager, or anyone who has seen your work." },
              { week: "Week 4", action: "Start outreach. LinkedIn, direct messages, referrals. Your portfolio is ready — now it needs eyeballs on it." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm border-b border-gray-100 pb-3">
                <span className="font-semibold text-emerald-600 shrink-0 w-16">{item.week}</span>
                <span className="text-gray-700 leading-relaxed">{item.action}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link href="/blog/how-to-find-first-freelance-client-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Find Your First Freelance Client in UAE →
              </Link>
              <Link href="/blog/freelance-linkedin-profile-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Build a LinkedIn Profile That Attracts UAE Clients →
              </Link>
              <Link href="/blog/how-to-write-freelance-proposal-uae" className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2">
                How to Write a Freelance Proposal for UAE Clients →
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <p className="font-bold text-lg mb-2">Templates to Launch Your UAE Freelance Business</p>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              SoloKit gives you the Notion templates and AI prompts to handle proposals, client onboarding, and invoicing from day one — so you look professional from your very first client.
            </p>
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
