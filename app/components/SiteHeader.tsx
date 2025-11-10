"use client";

import { useState } from 'react';
import Link from 'next/link';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">Covren Firm</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <Link className="hover:text-white transition" href="/services">Services</Link>
          <Link className="hover:text-white transition" href="/services/sovren-ai">SOVREN AI</Link>
          <Link className="hover:text-white transition" href="/case-studies">Case Studies</Link>
          <Link className="hover:text-white transition" href="/resources/blog">Resources</Link>
          <Link className="hover:text-white transition" href="/about">About</Link>
          <Link className="hover:text-white transition" href="/contact">Contact</Link>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="rounded-md border border-zinc-800 px-3 py-1.5 text-sm">
            Menu
          </button>
          <Link href="/sovereign-qualification" className="rounded-xl bg-white px-3 py-1.5 text-black text-sm font-semibold hover:opacity-90 transition">
            Qualify
          </Link>
        </div>
      </div>
      {open ? (
        <div className="md:hidden border-t border-zinc-900 bg-black/95">
          <div className="mx-auto max-w-6xl px-6 py-3 grid gap-2 text-sm text-zinc-300">
            {[
              ["Services", "/services"],
              ["SOVREN AI", "/services/sovren-ai"],
              ["Case Studies", "/case-studies"],
              ["Resources", "/resources/blog"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link key={href as string} href={href as string} className="hover:text-white transition" onClick={() => setOpen(false)}>
                {label as string}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
