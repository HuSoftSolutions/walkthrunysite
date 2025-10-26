"use client";

import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#041530]/95 text-slate-100 border-b border-[#0d2a55] backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-32 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="flex flex-col leading-none">
            <Image src="/WalkThru_logo_white_no_tagline.png" alt="WalkThruNY" className="h-18 w-auto select-none" width={660} height={200} priority />
            {/* <span className="mt-0.5 text-3xl font-bold text-center uppercase tracking-wide text-white">NY</span> */}
            <span className="mt-0.5 text-xl font-bold text-center uppercase tracking-wide text-white">New York</span>
          </div>
          <span className="sr-only">WalkThruNY</span>
        </a>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-white/20 text-white"
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
          <a href="#services" className="hover:text-white text-slate-200 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-white text-slate-200 transition-colors">How it works</a>
          {/* <a href="#locations" className="hover:opacity-80 text-white/85">Locations</a> */}
          <a href="#contact" className="hover:text-white text-slate-200 transition-colors">Contact</a>
          <div className="hidden md:flex items-center gap-3 text-slate-300/80">
            <a href="https://instagram.com/walkthruny" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
              <FaInstagram size={18} />
            </a>
            {/* <a href="https://x.com/walkthruny" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="hover:opacity-80">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.youtube.com/walkthruny" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:opacity-80">
              <FaYoutube size={18} />
            </a>
            <a href="https://www.linkedin.com/walkthruny" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
              <FaLinkedin size={18} />
            </a> */}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#3b82f6] px-4 py-2 text-white font-medium hover:bg-[#2563eb] transition-colors"
          >
            Get started
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#021025] text-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3 text-sm">
            <a href="#services" className="py-2" onClick={() => setOpen(false)}>Services</a>
            <a href="#how-it-works" className="py-2" onClick={() => setOpen(false)}>How it works</a>
            {/* <a href="#locations" className="py-2" onClick={() => setOpen(false)}>Locations</a> */}
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
            <div className="flex items-center gap-4 py-2">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-80">
                <FaInstagram size={20} />
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="hover:opacity-80">
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:opacity-80">
                <FaYoutube size={20} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
                <FaLinkedin size={20} />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-4 py-2 text-white font-medium hover:bg-[#2563eb]"
                onClick={() => setOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
