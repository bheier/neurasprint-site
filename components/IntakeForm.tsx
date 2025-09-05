"use client";

import { useMemo, useState } from "react";

type Option = string;
type Multi = string[];

type Form = {
  aiUse?: "Yes" | "No";
  aiNotes?: string;
  headcount?: Option;
  industry?: Option;
  industryOther?: string;
  outcome?: Option;
  obstacles?: Multi;
  hoursLost?: Option;
  hoursLostArea?: Multi; // 6b
  tools?: Multi;
  otherTools?: string;
  budget?: Option;
  followUp?: Option;
  email?: string;
  phone?: string;
  newsletter?: boolean;
};

const OBSTACLE_AREAS: Option[] = [
  "Leads & Sales","Operations/Workflow","Finance/Admin","HR/Recruiting",
  "Customer Support","Compliance/Quality","IT & Data"
];

const HOURS_BUCKETS: Option[] = ["<5", "5–10", "10–20", "20+"];

const HOURS_LOST_AREAS: Option[] = [
  "Email triage","Approvals","Docs & forms","Reporting","Customer support"
];

const TOOLS: Option[] = [
  "Google Workspace","Microsoft 365/Teams","Slack","Salesforce","HubSpot",
  "QuickBooks/Xero","NetSuite/ERP","Zendesk/Freshdesk","Notion","Airtable/Smartsheet","Other"
];

const INDUSTRIES: Option[] = [
  "Manufacturing","Professional services","Logistics","Healthcare admin",
  "Retail/eCommerce","Construction","Finance/Insurance","Other"
];

const HEADCOUNT: Option[] = ["1–9","10–49","50–199","200–400","400+"];

const OUTCOME: Option[] = [
  "Increase revenue","Cut cycle time","Reduce errors/compliance risk","Lower costs"
];

const BUDGET: Option[] = ["<$5k","$5–10k","$10–20k",">$20k"];

const FOLLOWUP: Option[] = ["Book a call now","Email me a brief plan","Text or call me"];

function FieldLabel({ children, required=false }:{children: React.ReactNode; required?: boolean}) {
  return <label className="block text-sm font-medium text-slate-800 mb-1">
    {children}{required && <span className="text-red-500"> *</span>}
  </label>;
}

function Select({label, value, onChange, options, required=false}:{label:string; value?:string; onChange:(v:string)=>void; options:Option[]; required?:boolean}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <select
        className="w-full rounded-md border-slate-300 text-sm"
        value={value ?? ""}
        onChange={(e)=>onChange(e.target.value)}
      >
        <option value="" disabled>{required ? "Select..." : "Optional"}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Multi({label, value=[], onChange, options, max=0}:{label:string; value?:Multi; onChange:(v:Multi)=>void; options:Option[]; max?:number}) {
  const toggle = (o:string)=>{
    const has = value.includes(o);
    const next = has ? value.filter(x=>x!==o) : [...value, o];
    if (max && next.length>max) return; // enforce cap
    onChange(next);
  };
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div className="flex flex-wrap gap-2">
        {options.map(o=>(
          <button
            key={o}
            type="button"
            onClick={()=>toggle(o)}
            className={`px-3 py-1.5 rounded-md border text-sm ${
              value.includes(o) ? "bg-blue-600 text-white border-blue-600" : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
      {max ? <p className="mt-1 text-xs text-slate-500">Pick up to {max}</p> : null}
    </div>
  );
}

export default function IntakeForm() {
  const [form, setForm] = useState<Form>({ newsletter:false });

  const update = (k: keyof Form, v: any)=> setForm(s=>({...s, [k]: v}));

  const showAiNotes = form.aiUse === "Yes";
  const showIndustryOther = form.industry === "Other";
  const show6b = form.hoursLost && (form.hoursLost === "5–10" || form.hoursLost === "10–20" || form.hoursLost === "20+");
  const showOtherTools = (form.tools ?? []).includes("Other");

  const emailValid = useMemo(()=>{
    if (!form.email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  }, [form.email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!emailValid) {
      alert("Please enter a valid work email.");
      return;
    }
    if (!form.headcount || !form.outcome || !form.budget || !form.followUp) {
      alert("Please complete the required fields.");
      return;
    }

    // GA4 events (best-effort)
    try {
      // @ts-ignore
      window.gtag?.("event","generate_lead",{
        value: BUDGET.indexOf(form.budget!),
        headcount: form.headcount,
        outcome: form.outcome
      });
      // @ts-ignore
      window.gtag?.("event","form_complete",{
        obstacles: (form.obstacles ?? []).join(","),
        tools: (form.tools ?? []).join(","),
      });
    } catch {}

    // Optional: newsletter or lead capture endpoint
    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type":"application/json" },
          body: JSON.stringify({ ...form, source: "neurasprintai.com" })
        });
      } catch { /* ignore */ }
    }

    // Route by preference
    if (form.followUp === "Book a call now") {
      window.location.href = process.env.NEXT_PUBLIC_CALENDLY_URL!;
      return;
    }
    alert("Thanks! We’ll follow up shortly.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {/* About you */}
      <div className="grid md:grid-cols-2 gap-4">
        <Select label="Do you use AI in your business today?" required value={form.aiUse} onChange={(v)=>update("aiUse", v as Form["aiUse"])} options={["Yes","No"]}/>
        <Select label="How many employees?" required value={form.headcount} onChange={(v)=>update("headcount", v)} options={HEADCOUNT}/>
      </div>

      {showAiNotes && (
        <div>
          <FieldLabel>Which tools or use cases?</FieldLabel>
          <input className="w-full rounded-md border-slate-300 text-sm" placeholder="e.g., ChatGPT for support, email drafting" value={form.aiNotes ?? ""} onChange={(e)=>update("aiNotes", e.target.value)} />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Select label="Industry" required value={form.industry} onChange={(v)=>update("industry", v)} options={INDUSTRIES}/>
        <Select label="#1 outcome this quarter" required value={form.outcome} onChange={(v)=>update("outcome", v)} options={OUTCOME}/>
      </div>

      {showIndustryOther && (
        <div>
          <FieldLabel>Your industry</FieldLabel>
          <input className="w-full rounded-md border-slate-300 text-sm" placeholder="Type your industry" value={form.industryOther ?? ""} onChange={(e)=>update("industryOther", e.target.value)} />
        </div>
      )}

      <Multi label="Where are the biggest obstacles / least-enjoyed work? (Pick up to 3)" value={form.obstacles ?? []} onChange={(v)=>update("obstacles", v)} options={OBSTACLE_AREAS} max={3}/>

      {/* 6A + 6b */}
      <div className="grid md:grid-cols-2 gap-4">
        <Select label="Team-hours/week lost to re-entry or hunting across tools" value={form.hoursLost} onChange={(v)=>update("hoursLost", v)} options={HOURS_BUCKETS}/>
        {show6b && (
          <Multi label="Where does most of that time go?" value={form.hoursLostArea ?? []} onChange={(v)=>update("hoursLostArea", v)} options={HOURS_LOST_AREAS} max={2}/>
        )}
      </div>

      <Multi label="Your daily tools" value={form.tools ?? []} onChange={(v)=>update("tools", v)} options={TOOLS}/>
      {showOtherTools && (
        <div>
          <FieldLabel>Other apps not listed</FieldLabel>
          <input className="w-full rounded-md border-slate-300 text-sm" placeholder="Add any additional tools" value={form.otherTools ?? ""} onChange={(e)=>update("otherTools", e.target.value)} />
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        <Select label="Budget comfort for a 30-day sprint" required value={form.budget} onChange={(v)=>update("budget", v)} options={BUDGET}/>
        <Select label="Follow-up preference" required value={form.followUp} onChange={(v)=>update("followUp", v)} options={FOLLOWUP}/>
        <div>
          <FieldLabel required>Work email</FieldLabel>
          <input required type="email" className="w-full rounded-md border-slate-300 text-sm" value={form.email ?? ""} onChange={(e)=>update("email", e.target.value)} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <FieldLabel>Phone (optional)</FieldLabel>
          <input type="tel" className="w-full rounded-md border-slate-300 text-sm" value={form.phone ?? ""} onChange={(e)=>update("phone", e.target.value)} placeholder="+1 555-123-4567" />
        </div>

        <label className="flex items-center gap-2 text-sm pt-6 md:pt-0">
          <input type="checkbox" checked={!!form.newsletter} onChange={(e)=>update("newsletter", e.target.checked)} />
          Send me sprint tips & case notes (1–2×/month)
        </label>
      </div>

      <p className="text-xs text-slate-500">
        <strong>Privacy:</strong> We don’t train models on your data. Everything stays private to your sprint.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700"
      >
        Continue → {form.followUp === "Book a call now" ? "Book call" : "Submit"}
      </button>
    </form>
  );
}
