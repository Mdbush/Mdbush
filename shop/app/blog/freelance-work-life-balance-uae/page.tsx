import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "Work-Life Balance for UAE Freelancers: How to Protect Your Time Without Losing Clients — SoloKit",
  description:
    "You went freelance for freedom, but you're answering WhatsApp at 11pm. Here's how UAE freelancers set real boundaries, protect deep work, and reclaim their time without losing clients.",
  alternates: { canonical: "/blog/freelance-work-life-balance-uae" },
  openGraph: {
    title: "Work-Life Balance for UAE Freelancers: How to Protect Your Time Without Losing Clients",
    description:
      "You went freelance for freedom, but you're answering WhatsApp at 11pm. Here's how UAE freelancers set real boundaries, protect deep work, and reclaim their time without losing clients.",
    type: "article",
    url: "/blog/freelance-work-life-balance-uae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work-Life Balance for UAE Freelancers: How to Protect Your Time Without Losing Clients",
    description:
      "You went freelance for freedom, but you're answering WhatsApp at 11pm. Here's how UAE freelancers set real boundaries, protect deep work, and reclaim their time without losing clients.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Work-Life Balance for UAE Freelancers: How to Protect Your Time Without Losing Clients",
  description:
    "You went freelance for freedom, but you're answering WhatsApp at 11pm. Here's how UAE freelancers set real boundaries, protect deep work, and reclaim their time without losing clients.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  url: `${siteUrl}/blog/freelance-work-life-balance-uae`,
  mainEntityOfPage: `${siteUrl}/blog/freelance-work-life-balance-uae`,
};

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
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">FREELANCE LIFE</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Work-Life Balance for UAE Freelancers: How to Protect Your Time Without Losing Clients</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">You went freelance for freedom, but you're answering WhatsApp at 11pm. Here's how UAE freelancers set real boundaries, protect deep work, and reclaim their time without losing clients.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>6 min read</span>
          </div>
        </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Work-Life Balance for UAE Freelancers: How to Protect Your Time Without Losing Clients
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            You went freelance for freedom. But you are answering WhatsApp at 11pm, starting work
            before breakfast, and cannot remember the last time you finished before 7. Here is how
            to fix that without losing the clients you worked hard to get.
          </p>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">

          <p>
            There is a specific paradox that catches most UAE freelancers within the first year. You
            left a salaried job — with its fixed hours, its commute, its boss on your calendar — for
            the freedom of freelancing. And then, slowly, you became available to everyone, all the
            time, because no one told you that you were not supposed to be.
          </p>

          <p>
            A client sends a WhatsApp at 10pm and you reply because you are awake and you do not
            want to seem slow. A prospect emails on Friday and you respond the same day because you
            are worried they will go elsewhere. The lines between working and not working disappear
            because when your office is your apartment, there is no physical door to close.
          </p>

          <p>
            The UAE makes this worse. Dubai and Abu Dhabi run on a culture of urgency and availability.
            Business happens across time zones, across weekends, across Ramadan. The expectation that
            professionals respond fast is baked into how work gets done here. As a freelancer — with no
            team to absorb requests, no PA to filter your inbox — that expectation lands directly on you.
          </p>

          <p>
            The result, for most freelancers who never address it, is{" "}
            <Link
              href="/blog/freelancer-burnout-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              burnout
            </Link>{" "}
            — and a business that depends entirely on your continuous presence to function. This guide
            covers how to build something more sustainable.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 1: Why Work-Life Balance Is Harder for UAE Freelancers Specifically
          </h2>

          <p>
            Freelancers in other markets face the same general challenges, but the UAE adds a few
            specific pressures:
          </p>

          <div className="space-y-3 my-6">
            {[
              {
                point: "Client expectations are set by the corporate market",
                detail: "Many UAE clients are used to working with large agencies or in-house teams where someone is always available. When they hire a freelancer, they often carry those expectations across — and if you did not set different expectations upfront, you implicitly agreed to the same standard.",
              },
              {
                point: "The fear of losing a contract keeps you always-on",
                detail: "In a market where word-of-mouth matters enormously and competition for quality clients is real, the fear of being seen as slow or unreliable keeps many freelancers responding at all hours. This is fear-based availability, not professional availability — and it is not sustainable.",
              },
              {
                point: "There is no clear off-hours culture for non-salaried workers",
                detail: "Employees have legally defined working hours. Freelancers do not. Without an external structure defining when work ends, the default is that it never fully does. This is a structural problem that requires a deliberate solution, not just better willpower.",
              },
            ].map((item) => (
              <div key={item.point} className="border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.point}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 2: The 3 Boundaries That Matter Most
          </h2>

          <p>
            Freelancers who successfully protect their time do not try to enforce dozens of small
            rules. They focus on three structural boundaries and hold them consistently:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Communication hours</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A defined window when you are reachable and responsive, and a clear signal outside
                  that window that you are not. This is not about being unhelpful — it is about making
                  your availability predictable so clients learn when to expect responses.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Project scope</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The boundary between what you agreed to deliver and what has been added since. Every
                  hour of uncompensated scope creep is an hour taken from your personal time. Scope
                  boundaries are not just financial — they are the primary driver of overwork for most
                  freelancers. For the full framework, see{" "}
                  <Link
                    href="/blog/freelance-systems-uae"
                    className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
                  >
                    freelance systems for UAE
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Mental separation of work and home</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  When your office is also your living room, the mental transition between &quot;working&quot;
                  and &quot;not working&quot; has to be deliberately engineered. Without it, you are technically
                  off the clock but mentally still in the work — which means you never actually rest.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 3: Setting Communication Hours — And Actually Enforcing Them
          </h2>

          <p>
            Communication hours are only useful if clients know about them and if you have a system
            that holds the boundary even when you are tempted to reply. Three tools that make this work:
          </p>

          <div className="space-y-3 my-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">WhatsApp Business auto-reply</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Set an away message that activates outside your communication hours. Something like:
                &quot;Thanks for your message — I respond to all client messages between 9am and 6pm,
                Sunday to Thursday. I will get back to you first thing.&quot; This is not a wall; it is
                a signal. Most clients will find it reassuring — they know when to expect a response
                rather than wondering.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">Email footer note</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Add a line to your email signature: &quot;I keep communication hours Sunday–Thursday,
                9am–6pm GST. I may not respond outside these times.&quot; This is not a disclaimer —
                it is public information about how you work, presented professionally. It sets
                the expectation before any message is sent.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">Upfront in your contract</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                The strongest enforcement is contractual. Include a clause defining your response
                time commitments — &quot;Freelancer will respond to client communications within one
                business day during standard working hours (Sunday–Thursday, 9am–6pm).&quot; When it
                is in the contract, both parties have agreed to it. There is no ambiguity to negotiate.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 4: The 3-Hour Deep Work Block
          </h2>

          <p>
            Most of the best work you do — the creative work, the strategic work, the work that
            actually delivers results for clients — requires extended, uninterrupted concentration.
            It cannot happen in 20-minute gaps between WhatsApp notifications.
          </p>

          <p>
            The most effective structure: protect the first three hours of your working day as
            a deep work block. No messages. No calls. No email checking. 9am to 12pm (or your
            equivalent) is for making progress on your most important client work. Everything else
            happens after noon.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-3">How to handle genuinely urgent client requests during the deep work block</p>
            <div className="flex flex-col gap-2">
              {[
                "First, define what is actually urgent. A typo spotted in a live campaign is urgent. A question about the next month's strategy is not.",
                "Set the expectation upfront: for genuine emergencies, clients can call or text. Everything else waits for your afternoon response window.",
                "If something interrupts your deep work block more than twice per week, that is a client expectation problem, not a time management problem — the solution is a boundary conversation.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-gray-400 font-bold shrink-0">{i + 1}.</span>
                  <span className="text-gray-600">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <p>
            The productivity gain from protecting this block is not marginal — most freelancers report
            that three uninterrupted hours produce more output than a full fragmented day. Which means
            protecting it also means you finish earlier, which is the structural source of most
            work-life balance.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 5: The Shutdown Ritual
          </h2>

          <p>
            Employed workers have a commute that acts as a decompression buffer between work and home.
            Freelancers — especially those working from home — have nothing. You finish a client call
            and then you are at dinner. Or you finish at 6pm but your laptop stays open on the coffee
            table and you check it at 8pm &quot;just once.&quot;
          </p>

          <p>
            The shutdown ritual is a deliberate 5-minute routine that signals to your brain that the
            workday is over. It does not need to be elaborate. A consistent version:
          </p>

          <div className="space-y-3 my-6">
            {[
              { step: "Write tomorrow's top 3 tasks", detail: "Takes 2 minutes. Gets tomorrow out of your head tonight. You do not need to remember anything because it is written." },
              { step: "Close every tab and application", detail: "Physical act of closure. Not minimise — close. A blank screen is a signal that work is done." },
              { step: "Say it out loud", detail: "Sounds odd, works well: say \"shutdown complete\" or equivalent. Naming the end of the workday creates a cognitive anchor. Your brain starts to associate the phrase with switching off." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.step}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            The shutdown ritual works because it creates a transition ritual that the brain can
            recognise. Without it, there is no clear end — just a gradual fade that keeps part of
            you mentally at work until you fall asleep.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 6: Friday as Your Strategy Day
          </h2>

          <p>
            The UAE working week runs Sunday to Thursday, with Friday and Saturday as the weekend.
            For freelancers, Friday is where the hidden opportunity sits.
          </p>

          <p>
            Most freelancers treat Friday as either an overflow day — catching up on what did not get
            done during the week — or a complete rest day. Both are reasonable, but there is a third
            option that most high-performing freelancers settle into over time: Friday as strategy day.
          </p>

          <div className="space-y-3 my-6">
            {[
              { time: "Morning", activity: "Weekly review — what did I deliver, what did not get done, what is the status of every client and active proposal?" },
              { time: "Late morning", activity: "Planning — set the top 3 priorities for the coming week. Review pipeline. Follow up on any outstanding proposals." },
              { time: "Optional afternoon", activity: "Learning, content, or business development — things that build the business rather than just service it." },
            ].map((item) => (
              <div key={item.time} className="border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{item.time}</p>
                <p className="text-sm text-gray-700">{item.activity}</p>
              </div>
            ))}
          </div>

          <p>
            The distinction that matters: Friday strategy work builds your business. Client delivery
            work just maintains it. If you only ever do the latter, you are always running but never
            getting anywhere. Read{" "}
            <Link
              href="/blog/how-to-scale-freelance-business-uae"
              className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              how to scale your freelance business in the UAE
            </Link>{" "}
            for a fuller framework on what building the business actually looks like.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 7: How to Handle Clients Who Do Not Respect Boundaries
          </h2>

          <p>
            Some clients will ignore your communication hours. They will WhatsApp at 11pm and send
            a follow-up at 7am. They will treat every question as urgent. They will call when you
            are clearly on the out-of-office. Here is what to do:
          </p>

          <div className="space-y-4 my-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">First: have the explicit conversation</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Many clients are not testing your boundaries — they simply do not know you have them.
                A direct, non-confrontational message: &quot;I wanted to flag that I keep communication
                hours between 9am and 6pm, Sunday to Thursday. For anything that comes in after that,
                I will pick it up the next morning. Just wanted to set the right expectation so you
                know when to hear from me.&quot; Most clients will adjust immediately.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">Second: re-train expectations through behaviour</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                If a client sends a message outside your hours, do not reply until the next working
                day — every time. The response pattern you set trains the expectation. If you reply
                to the 11pm message once, you have told the client that late messages get answered.
                The behaviour change requires you to hold the boundary, not just announce it.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">Third: know when to walk away</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                If a client has been explicitly told your boundaries, has agreed to them in your
                contract, and continues to violate them repeatedly — that is a fundamental mismatch
                in how they want to work. No rate is high enough to justify a client who treats your
                time as permanently available. The decision to exit is a legitimate one.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">
            Section 8: Physical Boundaries for Home-Office Workers
          </h2>

          <p>
            When your home is your office, the environment works against separation. A few structural
            choices that make the difference:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">The desk vs sofa rule</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Work happens at your desk. Not on the sofa, not in bed, not at the kitchen counter.
                  This sounds trivial until you realise that when every surface becomes a workspace,
                  no surface becomes a rest space. The physical location becomes a mental cue — desk
                  means work, sofa means off.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Work clothes</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Getting dressed for work — even if you are going nowhere — creates a transition
                  ritual in the morning that tells your brain you are switching into working mode.
                  Changing out of work clothes at the end of the day creates the same transition
                  in reverse. This is not about formality; it is about using a physical signal as
                  a cognitive anchor.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Coworking spaces when you need genuine separation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dubai and Abu Dhabi have some of the best coworking infrastructure in the region.
                  For days when the home environment is not working — when you need the social
                  energy, the physical separation, or simply a space that feels professionally
                  different from your apartment — a coworking day is a legitimate tool, not an
                  indulgence. See{" "}
                  <Link
                    href="/blog/best-coworking-spaces-dubai"
                    className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
                  >
                    best coworking spaces in Dubai
                  </Link>{" "}
                  for options by budget and location.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-3">Balance Is Not a Reward</h2>

          <p>
            There is a belief that runs through a lot of freelance culture — and through Dubai culture
            generally — that rest is something you earn when the work is done. Work hard now, achieve
            something, then relax.
          </p>

          <p>
            The problem: the work is never done. There is always another client, another deliverable,
            another proposal. If you are waiting for a natural pause to start building healthy boundaries,
            you will wait forever.
          </p>

          <p>
            The freelancers who build sustainable practices in the UAE are the ones who treat balance
            as infrastructure — built upfront, maintained deliberately, and non-negotiable. Not because
            they are not ambitious, but because they understand that sustained output over years requires
            a structure that does not burn you out in six months.
          </p>

          <p>
            The clients you want — the ones who pay on time, treat you professionally, and give
            referrals — do not want a freelancer who is available at midnight. They want a professional
            who is excellent at what they do and delivers reliably during agreed hours. Boundaries
            are not a liability in a professional relationship. They are a signal of professionalism.
          </p>

          <p>
            Start with one boundary. Communication hours, or the shutdown ritual, or the desk rule.
            Hold it for two weeks. See what happens. Almost universally, the answer is: nothing bad.
            Clients adapt. Work continues. And you feel, for the first time in months, like the day
            actually ends.
          </p>

          <div className="bg-gray-900 rounded-2xl p-6 my-8">
            <p className="text-white font-semibold mb-2">Structure your week before it structures you</p>
            <p className="text-gray-400 text-sm mb-4">
              The{" "}
              <span className="text-white font-medium">Solopreneur OS (AED 249)</span>{" "}
              includes a full weekly planning template, a shutdown ritual checklist, and a Friday
              review framework — all built for freelancers who work from home and need a system that
              makes the week feel intentional rather than reactive. If you have ever ended a week
              unsure what you actually accomplished, this is the structure that fixes it.
            </p>
            <Link
              href="/products/solopreneur-os"
              className="inline-block bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get Solopreneur OS (AED 249) →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 my-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Also useful: Freelancer Client CRM</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Disorganised client management is one of the biggest sources of overwork — when you
              cannot see what is due, what is pending, and what has been delivered, everything feels
              urgent. The{" "}
              <span className="font-medium text-gray-700">Freelancer Client CRM (AED 175)</span>{" "}
              gives you a structured view of every client relationship, active project, and upcoming
              deadline. Less time chasing your own notes means more time not working.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              See Freelancer Client CRM →
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-3">Further reading</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/blog/freelancer-burnout-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                Freelancer Burnout in the UAE: Signs, Causes, and How to Recover →
              </Link>
              <Link
                href="/blog/freelance-systems-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                Freelance Systems for UAE — How to Run Your Business Like a Pro →
              </Link>
              <Link
                href="/blog/best-coworking-spaces-dubai"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                Best Coworking Spaces in Dubai (By Budget and Location) →
              </Link>
              <Link
                href="/blog/how-to-scale-freelance-business-uae"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-2"
              >
                How to Scale Your Freelance Business in the UAE →
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/#products"
              className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-2"
            >
              Browse all SoloKit products →
            </Link>
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
