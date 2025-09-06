export const metadata = { title: "Business Solutions — NeuraSprint AI" };

export default function BusinessPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Business Solutions</h1>
      <p className="text-slate-600">
        For teams that want measurable outcomes in 30 days—revenue ops, operations workflow, reporting, and support.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h3 className="mb-2 text-lg font-semibold">Sales & GTM</h3>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Lead enrichment & routing</li>
            <li>Calendar & proposal automations</li>
            <li>CRM hygiene & alerts</li>
          </ul>
        </div>
        <div className="rounded-xl border p-6">
          <h3 className="mb-2 text-lg font-semibold">Ops & Finance</h3>
          <ul className="list-disc pl-5 text-slate-700">
            <li>Approvals & handoffs</li>
            <li>Invoice & expense flows</li>
            <li>Docs → Sheets → BI sync</li>
          </ul>
        </div>
      </div>
      <a
        href={process.env.NEXT_PUBLIC_CALENDLY_URL}
        className="inline-flex rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
      >
        Start a 30-day sprint
      </a>
    </main>
  );
}
