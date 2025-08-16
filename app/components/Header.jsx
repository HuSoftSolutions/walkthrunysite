"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-black/[0.06] dark:border-white/[0.12]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">
          WalkThruNY
        </a>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-black/10 dark:border-white/20"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#how-it-works" className="hover:opacity-80">How it works</a>
          <a href="#locations" className="hover:opacity-80">Locations</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500 transition-colors"
          >
            Book a walkthrough
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/[0.06] dark:border-white/[0.12] bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3 text-sm">
            <a href="#services" className="py-2" onClick={() => setOpen(false)}>Services</a>
            <a href="#how-it-works" className="py-2" onClick={() => setOpen(false)}>How it works</a>
            <a href="#locations" className="py-2" onClick={() => setOpen(false)}>Locations</a>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500"
              onClick={() => setOpen(false)}
            >
              Book a walkthrough
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

