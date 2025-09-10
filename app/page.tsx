// app/page.tsx
import { TopLeftLogoTagline } from "./components/TopLeftLogoTagline";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      {/* HERO GRID: stacks on mobile; two columns on md+ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* LEFT column — your logo panel (#2) + tagline (#3) + existing hero copy below */}
        <div>
          <TopLeftLogoTagline />

          {/* Keep your existing headline/paragraph/CTAs here */}
          <div className="mt-6">
            {/* Example (comment back in your real content) */}
            {/* <span className="inline-flex items-center rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200">
              Sprint-built automations
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white">
              Ship <span className="text-sky-400">3–4 automations</span> in 30 days.
            </h1>
            <p className="mt-3 text-slate-300 max-w-prose">
              We find quick wins in your stack (Google/Microsoft, Slack, Salesforce, etc.), build fast, and prove value in a single sprint.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold">
                Book a Discovery Call
              </a>
              <a href="#intake" className="rounded-xl border border-slate-600 px-4 py-2 font-semibold text-slate-100">
                Tell us your needs
              </a>
            </div> */}
          </div>
        </div>

        {/* RIGHT column — your existing intake form card */}
        <div id="intake">
          {/* Mount your real form component here; leaving placeholder comment */}
          {/* <IntakeForm /> */}
        </div>
      </section>

      {/* Rest of your homepage sections… */}
    </main>
  );
}
