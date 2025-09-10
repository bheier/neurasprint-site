// app/page.tsx
import { TopLeftLogoTagline } from "./components/TopLeftLogoTagline";
// If your intake form is a component, import it here:
// import { IntakeForm } from "./components/IntakeForm";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      {/* HERO: Left = full logo panel + tagline + your hero copy; Right = form */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* LEFT column */}
        <div>
          <TopLeftLogoTagline />

          {/* Keep your existing hero copy/CTAs directly under the panel */}
          <div className="mt-6">
            {/* --- Example content (replace with your real content or un-comment if you want this) ---
            <span className="inline-flex items-center rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200">
              Sprint-built automations
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white">
              Ship <span className="text-sky-400">3–4 automations</span> in 30 days.
            </h1>
            <p className="mt-3 text-slate-300 max-w-prose">
              We find quick wins in your stack (Google/Microsoft, Slack, Salesforce, etc.), build fast, and prove value in a single sprint.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL}
                className="rounded-xl bg-white text-slate-900 px-4 py-2 font-semibold"
              >
                Book a Discovery Call
              </a>
              <a
                href="#intake"
                className="rounded-xl border border-slate-600 px-4 py-2 font-semibold text-slate-100"
              >
                Tell us your needs
              </a>
            </div>
            --- End example --- */}
          </div>
        </div>

        {/* RIGHT column — your intake form card */}
        <div id="intake" className="md:pl-2">
          {/* Mount your real form here */}
          {/* <IntakeForm /> */}
          {/* If you’re inlining the form, paste it here and keep its existing card styles */}
        </div>
      </section>

      {/* Other homepage sections go below */}
      {/* <SectionFeatures /> */}
      {/* <SectionLogos /> */}
      {/* <SectionFAQs /> */}
      {/* <FooterCTA /> */}
    </main>
  );
}
