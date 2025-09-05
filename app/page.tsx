import Image from "next/image";
// If you DO NOT have the "@" alias in tsconfig, use the relative import:
import IntakeForm from "@/components/IntakeForm";
// If you DO have the alias, use:
// import IntakeForm from "@/components/IntakeForm";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 space-y-12">
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-neurasprint.png"
              alt="NeuraSprint AI"
              width={72}
              height={72}
              priority
            />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Ship 3–4 lightweight automations in 30 days.
            </h1>
          </div>
          <p className="text-slate-600">
            We find quick wins in your stack (Google/Microsoft, Slack, Salesforce, etc.),
            build fast, and prove value in a single sprint.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL}
            className="inline-flex w-max rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700"
          >
            Book a Discovery Call
          </a>
        </div>

        <div className="rounded-xl border border-slate-200 p-6 shadow-sm bg-white">
          <h2 className="text-lg font-semibold mb-4">Tell us a bit about your work</h2>
          <IntakeForm />
        </div>
      </section>
    </main>
  );
}
