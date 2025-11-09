'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { CheckCircle, Phone, Mail } from 'lucide-react';

export default function Home() {
  const bootLines = useMemo(
    () => [
      '> initializing sovereign interface…',
      '> loading executive roles…',
      '> establishing policy guardrails…',
      '> verifying proof-as-UI…',
      '> measuring throughput…',
      '> ready.',
    ],
    []
  );
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisibleCount(bootLines.length);
      return;
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleCount((c) => Math.min(c + 1, bootLines.length));
      if (i >= bootLines.length) clearInterval(id);
    }, 320);
    return () => clearInterval(id);
  }, [bootLines.length]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* TERMINAL BOOT HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="font-mono text-zinc-300 space-y-1">
            {bootLines.slice(0, visibleCount).map((line, idx) => (
              <p key={idx} className="whitespace-pre">
                {line}
              </p>
            ))}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Sovereign AI that <span className="underline underline-offset-4">executes</span>. Not negotiates.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            We turn chaos into throughput—building AI operators that erase drag and multiply cashflow. Absolute control.
            Outcomes only.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/sovereign-qualification?source=hero"
              className="rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
              aria-label="Qualify Now"
            >
              Qualify Now
            </Link>
            <Link
              href="#demo"
              className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-900 transition"
            >
              See the Shadow Board in action
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Zero-Dependency Architecture</h3>
              <p className="mt-2 text-zinc-400">Own the stack. Own the upside. No rented intelligence.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Execution &gt; Opinions</h3>
              <p className="mt-2 text-zinc-400">Operators that do the work—calls, emails, workflows—without stalling.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Measured by Throughput</h3>
              <p className="mt-2 text-zinc-400">We track cycle time and cashflow—not vanity metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO ANCHOR */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold">Proof-as-UI: Operator Ledger</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">
          A snapshot of sealed actions from AI executives. No promises—just outcomes.
        </p>
        <div className="mt-8 grid gap-4">
          {[
            { time: '09:14', exec: 'CFO', action: 'Reconciled invoices and issued 3 vendor payments', result: 'Cycle time -38%' },
            { time: '10:02', exec: 'COO', action: 'Rescheduled 5 deliveries to avoid storm impact', result: 'Avoided $12k losses' },
            { time: '10:27', exec: 'CMO', action: 'Deployed new campaign and synced CRM segments', result: 'Ops ready in 14m' },
          ].map((e, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="text-cyan-400 text-sm mt-0.5">{e.time}</div>
                <div>
                  <p className="font-semibold">{e.exec} Executive</p>
                  <p className="text-zinc-400">{e.action}</p>
                </div>
              </div>
              <div className="text-sm text-emerald-400 font-semibold">{e.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <Phone className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Talk to an Operator</h3>
              <p className="mt-2 text-zinc-400">Direct, no-fluff briefing.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Prefer Email?</h3>
              <p className="mt-2 text-zinc-400">We respond fast and straight.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
