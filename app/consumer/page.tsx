export const metadata = { title: "Consumer Tools — NeuraSprint AI" };

export default function ConsumerPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Consumer Tools</h1>
      <p className="text-slate-600">
        Lightweight assistants and personal workflows launched alongside our B2B work—sign up to get early access.
      </p>
      <div className="rounded-xl border p-6">
        <h3 className="mb-2 text-lg font-semibold">Early access</h3>
        <p className="text-slate-700">Join the list and we’ll notify you as we release public tools.</p>
        <form
          className="mt-4 flex gap-2"
          action={process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "#"}
          method="post"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@domain.com"
            className="w-full rounded-md border border-slate-300 px-3 py-2"
          />
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Notify me</button>
        </form>
      </div>
    </main>
  );
}
