import HubspotEmbed from "@/components/HubspotEmbed";

export const metadata = { title: "Contact — NeuraSprint AI" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-600">
        The fastest way to get started is to book a discovery call. Prefer email? We’ll reply within one business day.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href={process.env.NEXT_PUBLIC_CALENDLY_URL}
          className="rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
        >
          Book a Call
        </a>
        <a
          href="mailto:hello@neurasprintai.com"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50"
        >
          hello@neurasprintai.com
        </a>
      </div>

      {/* HubSpot form */}
      <section className="pt-4">
        <h2 className="text-xl font-semibold mb-2">Or send a quick message</h2>
        <HubspotEmbed />
        <p className="mt-2 text-xs text-slate-500">
          We’ll reply within 1 business day. No spam — ever.
        </p>
      </section>
    </main>
  );
}
