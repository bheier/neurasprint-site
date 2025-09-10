// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      {/* Remove this if Header is already used in app/layout.tsx */}
      <Header />

      <main className="grid min-h-[calc(100dvh-64px)] place-items-center px-4">
        <section className="text-center">
          {/* Full logo in /public */}
          <Image
            src="/logo-neurasprint.png"
            alt="NeuraSprint AI full logo"
            width={1200} // logical size; Next will serve responsive images
            height={400}
            priority
            className="mx-auto h-auto w-[min(900px,88vw)] drop-shadow-[0_12px_30px_rgba(53,163,255,.35)]"
          />

          <p className="mt-4 text-slate-500">
            Practical AI. Real ROI. One Sprint.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
            >
              See Services
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL}
              className="rounded-md border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50"
            >
              Book a Call
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
