import Image from "next/image";
import CalendlyEmbed from "./components/CalendlyEmbed";


export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20 grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-semibold tracking-tight">
              Walk your plans at full scale in Albany, NY
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-xl">
              Experience your floor plan at 1:1 scale before construction begins. Validate room sizes, circulation, and sightlines so you can make confident decisions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Book a walkthrough
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
      <section id="services" className="py-16 md:py-24">
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
      <section id="how-it-works" className="py-16 md:py-24 bg-foreground/[.03]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Send your plans",
                desc: "Provide PDF or CAD exports; we’ll prepare them for full‑scale projection.",
              },
              {
                step: "02",
                title: "Walk through",
                desc: "Visit our Albany, NY studio to experience and iterate with your team in real time.",
              },
              {
                step: "03",
                title: "Leave with clarity",
                desc: "Receive notes, photos, and revisions so you can move forward confidently.",
              },
            ].map((item) => (
              <div key={item.step} className="relative p-6">
                <span className="text-sm text-foreground/50">{item.step}</span>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-foreground/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations / CTA */}
      <section id="locations" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Albany, NY studio by appointment</h2>
            <p className="mt-3 text-foreground/80 max-w-prose">
              We currently operate in Albany, NY with flexible booking windows, and offer on‑site pop‑ups for larger teams upon request.
            </p>
            <ul className="mt-4 space-y-2 text-foreground/75 text-sm">
              <li>• Albany studio</li>
              <li>• On‑site pop‑ups in the boroughs and nearby metro</li>
              <li>• Evening and weekend availability</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500"
            >
              Request availability
            </a>
          </div>
          <div>
            <div className="aspect-video w-full rounded-2xl bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,.35),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,.25),transparent_50%)] border border-black/[0.06] dark:border-white/[0.12] shadow-[0_10px_40px_rgba(0,0,0,.08)]"></div>
          </div>
        </div>
      </section>

      {/* Contact - Calendly embed (full-bleed) */}
      <section id="contact" className="py-0">
        <h2 className="sr-only">Book a walkthrough</h2>
        <div className="w-full">
          <CalendlyEmbed url={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/"} />
        </div>
      </section>
    </div>
  );
}
