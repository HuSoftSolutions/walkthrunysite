import Image from "next/image";
import CalendlyEmbed from "./components/CalendlyEmbed";



export default function Home() {
  // Icons for How it works
  const IconClipboard = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="6" y="5" width="12" height="15" rx="2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 11h6M9 14h6M9 17h4" strokeLinecap="round" />
    </svg>
  );

  const IconFile = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M7 3h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
      <path d="M14 3v5h5" />
    </svg>
  );

  const IconFloorPlan = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 12h8v9M11 3v6h10M14 12h7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="font-sans bg-[#030b1d] text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
              <Image
                src="/walkthru.jpg"
            alt="Guests exploring a WalkThru full-scale projection"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/20" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Full-scale visualization
            </span>
            <h1 className="mt-6 text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-semibold tracking-tight">
              Experience your space at 1:1 scale
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              WalkThru brings your project to life from residential to commercial and anything in between.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-5 py-3 text-white font-medium hover:bg-[#2563eb] transition-colors"
              >
                Get started
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10"
              >
                How it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/70">
              <span>For architects • developers • homeowners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured news */}
      <section className="py-16 border-t border-white/5 bg-[#061736] text-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/5 bg-white/95 p-8 sm:p-12 shadow-[0_22px_60px_rgba(3,12,29,0.35)] backdrop-blur">
            <span className="inline-flex items-center rounded-full bg-[#0d2a55]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d2a55]">
              In the news
            </span>
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight text-[#041530]">
              WalkThru Colonie project featured by Albany Business Review
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-3xl">
              The Albany Business Review spotlights how WalkThru helps Colonie leaders and developers visualize future spaces to build community alignment before ground is broken.
            </p>
            <a
              href="https://www.bizjournals.com/albany/news/2025/10/19/walk-thru-colonie-plans-visualize.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[#0d2a55] font-semibold hover:text-[#10356b]"
            >
              Read the article
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 9H7a1 1 0 01-.993-.883L6 8a1 1 0 011-1h7.585l-2.292-2.293a1 1 0 01-.083-1.32l.083-.094z" />
                <path d="M5 5a1 1 0 01.993.883L6 6v9h9a1 1 0 01.993.883L16 16a1 1 0 01-.883.993L15 17H5a1 1 0 01-.993-.883L4 16V6a1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section id="services" className="py-16 md:py-24 scroll-mt-16 border-t border-white/5 bg-[#030f27] text-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "See it before you build",
                desc: "Test room sizes, furniture layouts, and circulation at 1:1 scale.",
              },
              {
                title: "Make faster decisions",
                desc: "Align stakeholders quickly with a shared, full‑scale experience.",
              },
              {
                title: "Reduce costly changes",
                desc: "Catch issues early and avoid surprises during construction.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[#0d2246] p-6 shadow-[0_18px_45px_rgba(3,12,29,0.45)]"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-slate-200/80">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-24 scroll-mt-16 border-t border-white/5 bg-[#f5f7ff] text-[#041530]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <IconClipboard className="mx-auto h-16 w-16 md:h-20 md:w-20 text-[#0d2a55]" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">Tell us about your project</h3>
              <p className="mt-3 text-[#324568] text-sm leading-relaxed">
                Schedule a 15-30 minute discovery call so we can learn more about your project. Well understand your goals, process, and timeline to maximize efficiency.
              </p>
            </div>

            <div className="text-center">
              <IconFile className="mx-auto h-16 w-16 md:h-20 md:w-20 text-[#0d2a55]" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">Send Us Your Plans</h3>
              <p className="mt-3 text-[#324568] text-sm leading-relaxed">
                Upload your blueprints and well prepare them for full-scale projection.
              </p>
            </div>

            <div className="text-center">
              <IconFloorPlan className="mx-auto h-16 w-16 md:h-20 md:w-20 text-[#0d2a55]" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">WalkThru Your Design</h3>
              <p className="mt-3 text-[#324568] text-sm leading-relaxed">
                Step inside your future space, explore every room, and make confident decisions before building.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact - Calendly embed (full-bleed) */}
      <section id="contact" className="py-0 scroll-mt-16 border-t border-white/5 bg-[#020817] text-white">
        <h2 className="sr-only">Get started</h2>
        <div className="w-full">
          <CalendlyEmbed url={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/"} />
        </div>
      </section>
    </div>
  );
}
