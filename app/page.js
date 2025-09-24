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
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20 grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-semibold tracking-tight">
              Experience your space at 1:1 scale
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-xl">
              WalkThru brings your project to life from residential to commercial and anything inbetween.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Get started
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-5 py-3 font-medium hover:bg-foreground/5"
              >
                How it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-foreground/60">
              <span>For architects • developers • homeowners</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] w-full rounded-2xl border border-black/[0.06] dark:border-white/[0.12] shadow-[0_10px_40px_rgba(0,0,0,.08)] bg-slate-900 flex items-center justify-center p-6">
              <Image src="/WalkThru_logo_white_no_tagline.png" alt="WalkThruNY" width={540} height={200} className="w-full h-auto max-w-[480px]" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section id="services" className="py-16 md:py-24 scroll-mt-16">
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
                className="rounded-2xl border border-black/[0.06] dark:border-white/[0.12] p-6 bg-background/60 backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-foreground/80">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-24 scroll-mt-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <IconClipboard className="mx-auto h-16 w-16 md:h-20 md:w-20 text-white/90" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">Tell us about your project</h3>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">
                Schedule a 15-30 minute discovery call so we can learn more about your project. Well understand your goals, process, and timeline to maximize efficiency.
              </p>
            </div>

            <div className="text-center">
              <IconFile className="mx-auto h-16 w-16 md:h-20 md:w-20 text-white/90" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">Send Us Your Plans</h3>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">
                Upload your blueprints and well prepare them for full-scale projection.
              </p>
            </div>

            <div className="text-center">
              <IconFloorPlan className="mx-auto h-16 w-16 md:h-20 md:w-20 text-white/90" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">WalkThru Your Design</h3>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">
                Step inside your future space, explore every room, and make confident decisions before building.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact - Calendly embed (full-bleed) */}
      <section id="contact" className="py-0 scroll-mt-16">
        <h2 className="sr-only">Get started</h2>
        <div className="w-full">
          <CalendlyEmbed url={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/"} />
        </div>
      </section>
    </div>
  );
}
