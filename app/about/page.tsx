export const metadata = { title: "About — NeuraSprint AI" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">About NeuraSprint AI</h1>
      <p className="text-slate-600">
        We build small, high-impact automations in a single 30-day sprint, proving ROI before you scale.
        Our team ships quickly using your existing tools—Google/Microsoft, Slack, Salesforce, Notion, Airtable,
        and modern LLMs—so you get value without heavy change-management.
      </p>
      <ul className="list-disc pl-5 text-slate-700">
        <li>Discovery → quick win mapping (days 1–3)</li>
        <li>Build → 3–4 lightweight automations (days 4–20)</li>
        <li>Stabilize, document, and handoff (days 21–30)</li>
      </ul>
    </main>
  );
}
