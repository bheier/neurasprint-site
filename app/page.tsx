import Image from "next/image";
// If you DON'T have the "@" alias, use this relative import:
import IntakeForm from "@/components/IntakeForm";
// If you DO have the alias, you can use:
// import IntakeForm from "@/components/IntakeForm";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-hero">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-blue-100 ring-1 ring-white/20 backdrop-blur">
                Sprint-built automations
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Ship <span className="text-brand">3–4 automations</span> in 30 days.
              </h1>
              <p className="max-w-xl text-blue-100/90">
                We find quick wins in your stack (Google/Microsoft, Slack, Salesforce, etc.),
                build fast, and prove value in a single sprint.
              </p>
              <div className="flex gap-3">
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL}
                  className="rounded-md bg-white px-5 py-2.5 font-medium text-slate-900 hover:bg-blue-50"
                >
                  Book a Discovery Call
                </a>
                <a href="#intake" className="rounded-md border border-white/40 px-5 py-2.5 font-medium text-white hover:bg-white/10">
                  Tell us your needs
                </a>
              </div>
            </div>

            <div id="intake" className="rounded-xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <h2 className="mb-4 text-lg font-semibold text-white">Tell us about your work</h2>
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <IntakeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (Add more sections later if you want) */}
    </main>
  );
}
