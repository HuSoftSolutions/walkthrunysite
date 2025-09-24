"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const systemDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (systemDark ? "dark" : "light");
    setTheme(initial);
    if (typeof document !== "undefined") document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof document !== "undefined") document.documentElement.setAttribute("data-theme", next);
    if (typeof localStorage !== "undefined") localStorage.setItem("theme", next);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 text-white border-b border-white/10 backdrop-blur">
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
          <a href="#services" className="hover:opacity-80 text-white/85">Services</a>
          <a href="#how-it-works" className="hover:opacity-80 text-white/85">How it works</a>
          {/* <a href="#locations" className="hover:opacity-80 text-white/85">Locations</a> */}
          <a href="#contact" className="hover:opacity-80 text-white/85">Contact</a>
          <div className="hidden md:flex items-center gap-3 text-white/85">
            <a href="https://instagram.com/walkthruny" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-80">
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

          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 hover:bg-white/10"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
            )}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500 transition-colors"
          >
            Get started
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95 text-white">
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
              <button
                onClick={() => { toggleTheme(); setOpen(false); }}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 hover:bg-white/10"
              >
                Toggle theme
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500"
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

