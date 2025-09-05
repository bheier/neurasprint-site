"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-neurasprint.png"
            alt="NeuraSprint AI"
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold text-slate-900">NeuraSprint AI</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link className="hover:text-slate-900 text-slate-600" href="/about">About</Link>
          <Link className="hover:text-slate-900 text-slate-600" href="/contact">Contact</Link>
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL}
            className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
