'use client';
import React, { useMemo, useState } from 'react';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-handle/intro";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@neurasprintai.com";

function LogoBIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="NeuraSprint icon">
      <defs>
        <linearGradient id="gradBHeader" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6DF6" />
          <stop offset="100%" stopColor="#2EE6A2" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke="url(#gradBHeader)" strokeWidth="6" fill="none" />
      <path d="M14 30 L14 16 M14 16 L34 32 M34 18 L34 32" stroke="#111827" strokeWidth="6" strokeLinecap="round" />
      <circle cx="14" cy="16" r="2" fill="#2EE6A2" />
      <circle cx="34" cy="32" r="2" fill="#2F6DF6" />
    </svg>
  );
}

export default function Page() {
  const [form, setForm] = useState({
    industry: "Manufacturing",
    teamSize: "10-49",
    outcome: "Cycle time",
    drag: "Approvals",
    tools: ["O365/Teams", "SharePoint"],
    hoursLost: "10–20",
    compliance: ["ISO"],
    dataLocations: ["SharePoint/OneDrive"],
    approver: "Ops lead",
    budget: "$5–10k",
    startDate: "<30 days",
  });
  const [showRec, setShowRec] = useState(false);
  const updateField = (key: string, value: any) => setForm((f) => ({ ...f, [key]: value }));
  const rec = useMemo(() => computeRecommendation(form), [form]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <TrustBar />
      <Section id="features" title="Why NeuraSprint AI?">
        <Features />
      </Section>
      <Section id="process" title="30‑Day Automation Sprint">
        <Process />
      </Section>
      <Section id="menu" title="Automation Menu (mix & match)">
        <Menu />
      </Section>
      <Section id="intake" title="Get Your Tailored Sprint Plan (2–3 minutes)">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Intake form={form} updateField={updateField} onSubmit={() => setShowRec(true)} />
          </div>
          <div className="lg:col-span-1">
            <RecommendationCard rec={rec} show={showRec} />
          </div>
        </div>
      </Section>
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LogoBIcon className="w-8 h-8" />
          <span className="font-semibold">NeuraSprint AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-slate-600" href="#features">Features</a>
          <a className="hover:text-slate-600" href="#process">Process</a>
          <a className="hover:text-slate-600" href="#menu">Menu</a>
          <a className="hover:text-slate-600" href="#intake">Get Started</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="hidden sm:inline-block px-4 py-2 text-sm font-medium rounded-xl border border-slate-300 hover:bg-slate-50">Book a call</a>
          <a href="#intake" className="px-4 py-2 text-sm font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800">Start your sprint</a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Ship automations in <span className="underline decoration-amber-300">weeks</span>, not quarters.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            We find your top bottlenecks and deliver 3–4 lightweight AI automations in 30 days—measured by cycle time, error rate, and throughput.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#intake" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">Get tailored plan</a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-50">Book a call</a>
          </div>
          <p className="mt-4 text-sm text-slate-500">No lock‑in • Uses your stack • Fixed scope</p>
        </div>
        <div className="md:pl-10 flex items-center">
          <div className="w-full rounded-2xl border border-slate-200 p-4 md:p-6 shadow-sm">
            <FakeDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-slate-600 flex flex-wrap items-center gap-x-8 gap-y-2">
        <span>Works with</span>
        <LogoPill>Microsoft 365 / Teams</LogoPill>
        <LogoPill>Google Workspace</LogoPill>
        <LogoPill>SharePoint / OneDrive</LogoPill>
        <LogoPill>Slack</LogoPill>
        <LogoPill>Salesforce / HubSpot</LogoPill>
        <LogoPill>NetSuite / ERP</LogoPill>
      </div>
    </div>
  );
}

function LogoPill({ children }: { children: React.ReactNode }) {
  return <span className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700">{children}</span>;
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Features() {
  const items = [
    { title: "Sprint speed", text: "Deliver 3–4 automations in 30 days—no endless discovery." },
    { title: "ROI first", text: "Targets like −60% handling time or −15% WIP days, agreed day 1." },
    { title: "Your stack", text: "Build on O365/Google/Slack/ERP so IT is comfortable and costs stay low." },
    { title: "Secure by default", text: "Data stays in your cloud; access is least‑privilege with audit trails." },
    { title: "Measurable", text: "Dashboards + 6am variance email keeps wins visible." },
    { title: "Handoff or run", text: "We train your team or run it as a managed service." },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((i) => (
        <div key={i.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
          <div className="text-base font-semibold">{i.title}</div>
          <div className="mt-2 text-slate-600 text-sm">{i.text}</div>
        </div>
      ))}
    </div>
  );
}

function Process() {
  const steps = [
    { step: 1, title: "Discover", text: "Map bottlenecks, pick 3–4 automations with ROI targets." },
    { step: 2, title: "Build", text: "Stand up flows, connectors, doc bots, and dashboards." },
    { step: 3, title: "Deploy", text: "Pilot with 5–20 users; iterate on prompts & guardrails." },
    { step: 4, title: "Measure", text: "Hit targets; decide handoff vs. managed Ops Brain." },
  ];
  return (
    <ol className="grid md:grid-cols-4 gap-6">
      {steps.map((s) => (
        <li key={s.step} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
          <div className="text-sm text-slate-500">Step {s.step}</div>
          <div className="text-lg font-semibold">{s.title}</div>
          <div className="mt-2 text-sm text-slate-600">{s.text}</div>
        </li>
      ))}
    </ol>
  );
}

function Menu() {
  const items = [
    "Policy/SOP Q&A bot",
    "RFQ/PO email triage → library",
    "Approvals with SLAs (Teams/Chat)",
    "6am KPI variance email",
    "OEE & Quality KPI dashboard",
    "COA/Cert filing & validation",
    "Onboarding/Offboarding checklists",
    "CRM/EHR sync (Leads/Appointments)",
    "Meeting notes → tasks",
    "E‑Sign intake + DocGen",
    "Light ticketing (vendors/clients)",
    "Photo evidence uploader (auto‑tag)",
    "ERP connector (CSV/API poller)",
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((i) => (
        <div key={i} className="px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm text-sm">{i}</div>
      ))}
    </div>
  );
}

function Intake({ form, updateField, onSubmit }: { form: any; updateField: (k: string, v: any) => void; onSubmit: () => void; }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
        const el = document.getElementById("rec-card");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm"
    >
<div className="grid md:grid-cols-2 gap-6">
  <Select
    label="1) Industry"
    value={form.industry}
    onChange={(v) => updateField("industry", v)}
    options={[
      "Manufacturing",
      "Professional Services",
      "Logistics",
      "Healthcare Admin",
      "Other",
    ]}
  />
  <Select
    label="2) Team size"
    value={form.teamSize}
    onChange={(v) => updateField("teamSize", v)}
    options={["1-9", "10-49", "50-199", "200-400", "400+"]}
  />
  <Select
    label="3) #1 outcome this quarter"
    value={form.outcome}
    onChange={(v) => updateField("outcome", v)}
    options={["Revenue", "Cycle time", "Error rate", "Cost"]}
  />
  <Select
    label="4) Biggest drag today"
    value={form.drag}
    onChange={(v) => updateField("drag", v)}
    options={[
      "Email triage",
      "Approvals",
      "Docs & forms",
      "Reporting",
      "Customer support",
    ]}
  />
  <Multi
    label="5) Daily tools"
    value={form.tools}
    onChange={(v) => updateField("tools", v)}
    options={[
      "O365/Teams",
      "SharePoint",
      "Google Workspace",
      "Slack",
      "Salesforce",
      "HubSpot",
      "NetSuite/ERP",
      "EHR",
      "Other",
    ]}
  />
  <Select
    label="6) Hours/week lost to copy-paste/hunting"
    value={form.hoursLost}
    onChange={(v) => updateField("hoursLost", v)}
    options={["<5", "5–10", "10–20", "20+"]}
  />
  <Multi
    label="7) Compliance needs"
    value={form.compliance}
    onChange={(v) => updateField("compliance", v)}
    options={["ISO", "HIPAA", "ITAR", "None/Unknown"]}
  />
  <Multi
    label="8) Data locations"
    value={form.dataLocations}
    onChange={(v) => updateField("dataLocations", v)}
    options={[
      "SharePoint/OneDrive",
      "Google Drive",
      "Email",
      "Databases",
      "APIs only",
    ]}
  />
  <Select
    label="9) Who approves changes?"
    value={form.approver}
    onChange={(v) => updateField("approver", v)}
    options={["Owner", "Ops lead", "IT", "Compliance"]}
  />
  <Select
    label="10) Budget comfort for a 30-day sprint"
    value={form.budget}
    onChange={(v) => updateField("budget", v)}
    options={["<$5k", "$5–10k", "$10–20k", ">$20k"]}
  />
  <Select
    label="11) Ideal start date"
    value={form.startDate}
    onChange={(v) => updateField("startDate", v)}
    options={["ASAP", "<30 days", "Next quarter"]}
  />
</div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">Get recommendation</button>
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-50">Book a call instead</a>
      </div>
    </form>
  );
}

function RecommendationCard({ rec, show }: { rec: ReturnType<typeof computeRecommendation>; show: boolean }) {
  return (
    <div id="rec-card" className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm sticky top-24">
      <div className="text-sm text-slate-500">Recommended sprint</div>
      <div className="mt-1 text-lg font-semibold">{rec.name}</div>
      <p className="mt-3 text-sm text-slate-600">{rec.summary}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {rec.components.map((c) => (
          <li key={c} className="flex items-start gap-2">
            <span className="mt-1 inline-block w-2 h-2 rounded-full bg-slate-900" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm">
        <div className="font-medium">Stack fit:</div>
        <div>{rec.stackFit}</div>
      </div>
      <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-sm">
        <div className="font-medium">Targets:</div>
        <div>{rec.targets}</div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-slate-900 text-white text-center font-semibold hover:bg-slate-800">Book this sprint</a>
        <a href={`mailto:${CONTACT_EMAIL}?subject=NeuraSprint%20-%20Details%20on%20${encodeURIComponent(rec.name)}`} className="px-4 py-2 rounded-xl border border-slate-300 text-center font-medium hover:bg-slate-50">Email details</a>
      </div>
      {!show && <div className="mt-4 text-xs text-slate-500">Complete the form to see your tailored plan.</div>}
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <div className="text-sm font-medium mb-2">{label}</div>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function Multi({ label, value, onChange, options }: { label: string; value: string[]; onChange: (v: string[]) => void; options: string[] }) {
  return (
    <label className="block">
      <div className="text-sm font-medium mb-2">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value.includes(o);
          return (
            <button type="button" key={o} onClick={() => onChange(active ? value.filter((x) => x !== o) : [...value, o])} className={`px-3 py-1 rounded-full border text-sm ${active ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`}>
              {o}
            </button>
          );
        })}
      </div>
    </label>
  );
}

function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Ready to sprint?</h3>
          <p className="mt-2 text-slate-600">Get your tailored plan in minutes or book a quick intro call.</p>
        </div>
        <div className="flex gap-3">
          <a href="#intake" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">Start your sprint</a>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-50">Book a call</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} NeuraSprint AI</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-800">Privacy</a>
          <a href="#" className="hover:text-slate-800">DPA‑lite</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-800">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function FakeDashboard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">Cycle time (days)</div>
          <div className="text-2xl font-bold">−18%</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">Error rate</div>
          <div className="text-2xl font-bold">−42%</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">Throughput</div>
          <div className="text-2xl font-bold">+27%</div>
        </div>
      </div>
      <div className="h-32 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-sm">
        KPI Trend Graph (placeholder)
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["RFQ triage", "DocGen", "Approvals", "KPI email", "Q&A bot", "ERP sync"].map((x) => (
          <div key={x} className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs text-slate-700 text-center">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

function computeRecommendation(form: any) {
  const t = new Set(form.tools);
  const o365 = t.has("O365/Teams") || t.has("SharePoint");
  const google = t.has("Google Workspace");
  const slack = t.has("Slack");
  const erp = t.has("NetSuite/ERP");

  let name = "Ops Automation Starter";
  let summary = "A focused sprint targeting your highest‑leverage friction using your existing stack.";
  let components: string[] = [];
  let stackFit = "Works with your current tools.";
  let targets = "−30–60% handling time, −10–20% WIP days, measurable within 30 days.";

  if (form.drag === "Approvals" && o365) {
    name = "Teams Approvals + SLA Sprint";
    components = [
      "Teams approvals with SLA timers & reminders",
      "SharePoint DocGen (contracts/POs)",
      "6am KPI variance email for stuck items",
    ];
    stackFit = "Built on Microsoft 365 + SharePoint. Low IT lift.";
  } else if (form.drag === "Email triage") {
    name = "RFQ/Inbox Triage → Library Sprint";
    components = [
      "Outlook/Gmail triage with routing to owners",
      "Auto‑extract → RFQ/Case library",
      "Light vendor/client ticketing for follow‑ups",
    ];
    stackFit = google ? "Optimized for Google Workspace." : "Works with Outlook or Gmail.";
  } else if (form.drag === "Reporting" && (erp || google || o365)) {
    name = "Metrics Lake + 6am Variance Sprint";
    components = [
      "CSV/API poller from ERP/Sheets",
      "Looker/Power BI KPI dashboard",
      "6am variance email with drill‑downs",
    ];
    stackFit = erp ? "Pulls from your ERP via CSV/API." : google ? "Uses Sheets/Drive as staging." : "Uses SharePoint/OneDrive as staging.";
  } else if (form.drag === "Docs & forms") {
    name = "E‑Sign Intake + DocGen Sprint";
    components = [
      "Guided e‑sign intake (contracts/HR/QA)",
      "Template‑driven document generation",
      "Auto‑file + metadata tagging",
    ];
    stackFit = o365 ? "SharePoint storage + access control." : "Google Drive storage + access control.";
  } else if (form.drag === "Customer support") {
    name = "Self‑Serve FAQ + Ticket Assist Sprint";
    components = [
      "Customer FAQ bot (site/widget)",
      "Agent assist macros in inbox",
      "Light ticket routing + SLAs",
    ];
    stackFit = slack ? "Optional Slack handoff to internal teams." : "Email‑first with web widget.";
  }

  if (form.hoursLost === "20+") targets = "−50–70% handling time, −15–25% WIP days.";

  return { name, summary, components, stackFit, targets };
}
