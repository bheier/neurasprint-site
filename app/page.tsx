// app/page.tsx
import { TopLeftLogoTagline } from "@/components/TopLeftLogoTagline";
import { IntakeForm } from "@/components/IntakeForm"; // keep this path/name to your actual form

export default function HomePage() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || "#book";

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      {/* HERO CARD (dark background, rounded, shadow) */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1423] to-[#0f1c31] shadow-2xl">
        <div className="px-5 sm:px-8 py-8 sm:py-12">
          {/* GRID: stacks on mobile; two columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT column — logo panel + tagline + hero copy */}
            <div>
              <TopLeftLogoTagline />

              {/* Hero copy/CTAs */}
              <div className="mt-6">
                <span className="inline-flex items-center rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200">
                  Sprint-built automations
                </span>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white">
                  Ship <span className="text-sky-400">3–4 automations</span> in 30 days.
                </h1>

                <p className="mt-3 text-slate-300 max-w-prose">
                  We find quick wins in your stack (Google/Microsoft, Slack, Salesforce, etc.),
                  build fast, and prove value in a single sprint.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={calendly}
                    className="rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold hover:bg-slate-100"
                  >
                    Book a Discovery Call
                  </a>
                  <a
                    href="#intake"
                    className="rounded-xl border border-slate-600 px-4 py-2 font-semibold text-slate-100 hover:bg-slate-800/60"
                  >
                    Tell us your needs
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT column — questionnaire/form card */}
            <div id="intake">
              <div className="rounded-2xl border border-white/10 bg-white p-4 sm:p-5 shadow-xl">
                <IntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other homepage sections… */}
      {/* <SectionFeatures /> */}
      {/* <SectionLogos /> */}
      {/* <SectionFAQs /> */}
      {/* <FooterCTA /> */}
    </main>
  );
}
