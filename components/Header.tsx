"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Home button with larger, responsive emblem */}
          <Link
            href="/"
            aria-label="NeuraSprint AI — Home"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo-emblem.png" // must be in /public
              alt="NeuraSprint AI emblem"
              width={64}
              height={64}
              priority
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg"
            />
            <span className="sr-only">NeuraSprint AI</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/about" className="text-slate-700 hover:text-slate-900">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-900">
              Contact
            </Link>
            <Link href="/business" className="text-slate-700 hover:text-slate-900">
              Business
            </Link>
            <Link href="/consumer" className="text-slate-700 hover:text-slate-900">
              Consumer
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="border-t border-slate-200 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-3">
              <Link href="/about" onClick={() => setOpen(false)} className="text-slate-700">
                About
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-slate-700">
                Contact
              </Link>
              <Link href="/business" onClick={() => setOpen(false)} className="text-slate-700">
                Business
              </Link>
              <Link href="/consumer" onClick={() => setOpen(false)} className="text-slate-700">
                Consumer
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL}
                className="rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
