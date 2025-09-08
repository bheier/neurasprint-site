"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function HubspotForm() {
  useEffect(() => {
    // Load HubSpot forms script once
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://js.hsforms.net/forms/embed/v2.js"]'
    );
    const load = () => {
      if (!window.hbspt) return;
      window.hbspt.forms.create({
        region: "na1",
        portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID!,
        formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID!,
        target: "#hubspot-form",
        // Optional: prefill hidden fields (UTMs, page info)
        onFormReady: (form: HTMLFormElement) => {
          const set = (name: string, val: string) => {
            const el = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
            if (el) el.value = val;
          };
          set("utm_source", new URLSearchParams(window.location.search).get("utm_source") || "");
          set("utm_medium", new URLSearchParams(window.location.search).get("utm_medium") || "");
          set("utm_campaign", new URLSearchParams(window.location.search).get("utm_campaign") || "");
          set("page_url", window.location.href);
          set("referrer", document.referrer);
        },
        onFormSubmitted: () => {
          // HubSpot will redirect if you set it in the form options
          // or you can programmatically route here if you prefer.
        },
      });
    };

    if (existing) {
      existing.addEventListener("load", load);
      if ((existing as any).loaded) load();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = load;
      document.body.appendChild(script);
    }

    return () => {
      // no cleanup required
    };
  }, []);

  return <div id="hubspot-form" />;
}
