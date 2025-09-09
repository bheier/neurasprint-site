// app/thanks/page.tsx
export default function Thanks() {
  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 py-12 space-y-4">
      <h1 className="text-3xl font-bold">Thanks — we got your request!</h1>
      <p>We’ll reply within one business day with next steps.</p>
      <a href={process.env.NEXT_PUBLIC_CALENDLY_URL} className="inline-block rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700">
        Want to move faster? Book a call
      </a>
    </main>
  );
}
