'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { OperatorLedger } from './components/OperatorLedger';
import { ShadowBoard } from './components/ShadowBoard';
<<<<<<< HEAD
import { SovereigntyGauge } from './components/SovereigntyGauge';
import { GlitchCipher } from './components/GlitchCipher';
=======
>>>>>>> b4e8430b (Fix blog 404/SSR; footer Links+padding; About inline cost note; Demos modal+CTAs; homepage gradients; add pricing constants)

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
  const [cmd, setCmd] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const router = useRouter();

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

  function handleCommand(input: string) {
    const raw = input.trim().toLowerCase();
    if (!raw) return;

    if (raw === 'help' || raw === '?') {
      setShowHelp(true);
      return;
    }
    if (['brief', 'brief me', 'command', 'contact'].includes(raw)) {
      router.push('/contact');
      return;
    }
    if (['qualify', 'apply', 'qualification'].includes(raw)) {
      router.push('/sovereign-qualification');
      return;
    }
    if (['pricing', 'tiers', 'plans'].includes(raw)) {
      router.push('/services/sovren-ai#pricing');
      return;
    }
    if (['status', 'ledger', 'demo'].includes(raw)) {
      router.push('#demo');
      return;
    }
    setShowHelp(true);
  }

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
<<<<<<< HEAD
            Sovereign AI that <GlitchCipher>executes</GlitchCipher>. Not negotiates.
=======
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sovereign AI that executes. Not negotiates.
            </span>
>>>>>>> b4e8430b (Fix blog 404/SSR; footer Links+padding; About inline cost note; Demos modal+CTAs; homepage gradients; add pricing constants)
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

          {/* Command-line CTA */}
          <div className="mt-8 rounded-xl border border-zinc-800 bg-black p-4">
            <div className="font-mono text-sm text-zinc-400">type a command and press enter</div>
            <form
              className="mt-2 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(cmd);
              }}
            >
              <span className="font-mono text-cyan-400">{'>'}</span>
              <input
                value={cmd}
                onChange={(e) => setCmd(e.target.value)}
                placeholder="brief me | qualify | pricing | status | help"
                className="flex-1 bg-transparent outline-none font-mono text-sm text-white placeholder-zinc-600"
                aria-label="Command input"
              />
              <button
                type="submit"
                className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm font-semibold hover:bg-zinc-900 transition"
                aria-label="Execute command"
              >
                run
              </button>
            </form>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { label: 'brief me', route: '/contact' },
                { label: 'qualify', route: '/sovereign-qualification' },
                { label: 'pricing', route: '/services/sovren-ai#pricing' },
                { label: 'status', route: '#demo' },
                { label: 'help', route: null },
              ].map((c) => (
                <button
                  key={c.label}
                  onClick={() => {
                    if (c.route) router.push(c.route);
                    else setShowHelp(true);
                  }}
                  className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-300 hover:bg-black transition"
                >
                  {c.label}
                </button>
              ))}
            </div>
            {showHelp ? (
              <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950 p-3">
                <div className="font-mono text-xs text-zinc-400">available commands</div>
                <ul className="mt-2 grid gap-1 text-sm">
                  <li><span className="font-mono text-cyan-400">brief me</span> — open Command Briefing</li>
                  <li><span className="font-mono text-cyan-400">qualify</span> — start Sovereign Qualification</li>
                  <li><span className="font-mono text-cyan-400">pricing</span> — view subscription tiers</li>
                  <li><span className="font-mono text-cyan-400">status</span> — jump to Proof-as-UI</li>
                  <li><span className="font-mono text-cyan-400">help</span> — show this list</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
<<<<<<< HEAD
        <div className="mx-auto max-w-6xl px-6 py-10 grid gap-4 md:grid-cols-4">
=======
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-4">
>>>>>>> b4e8430b (Fix blog 404/SSR; footer Links+padding; About inline cost note; Demos modal+CTAs; homepage gradients; add pricing constants)
          {[
            { label: 'SOVREN AI', href: '/services/sovren-ai' },
            { label: 'Services', href: '/services' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Sovereign Qualification', href: '/sovereign-qualification' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
<<<<<<< HEAD
              className="rounded-xl border border-zinc-800 bg-black p-4 text-center font-semibold hover:bg-zinc-900 transition"
=======
              className="rounded-2xl border border-zinc-800 bg-black p-6 text-center font-semibold hover:bg-zinc-950 transition"
>>>>>>> b4e8430b (Fix blog 404/SSR; footer Links+padding; About inline cost note; Demos modal+CTAs; homepage gradients; add pricing constants)
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zero-Dependency Architecture
                </span>
              </h3>
              <p className="mt-2 text-zinc-400">Own the stack. Own the upside. No rented intelligence.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Execution &gt; Opinions
                </span>
              </h3>
              <p className="mt-2 text-zinc-400">Operators that do the work—calls, emails, workflows—without stalling.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Measured by Throughput
                </span>
              </h3>
              <p className="mt-2 text-zinc-400">We track cycle time and cashflow—not vanity metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOVEREIGNTY GAUGE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SovereigntyGauge />
      </section>

      {/* DEMO ANCHOR */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-24">
<<<<<<< HEAD
        <h2 className="text-3xl md:text-4xl font-bold">Proof-as-UI</h2>
=======
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Proof-as-UI
          </span>
        </h2>
>>>>>>> b4e8430b (Fix blog 404/SSR; footer Links+padding; About inline cost note; Demos modal+CTAs; homepage gradients; add pricing constants)
        <p className="mt-4 max-w-2xl text-zinc-300">A live-feel snapshot of sealed actions and executive coverage. Outcomes only.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ShadowBoard />
          <OperatorLedger />
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

      {/* TRUST SNAPSHOTS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Outcomes in the wild</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Ops Resilience', body: 'Avoided $12k losses by rerouting around storm impacts', cta: '/case-studies' },
              { title: 'Finance Control', body: 'Cycle time -38% after reconciliation overhaul', cta: '/case-studies' },
              { title: 'Campaign Velocity', body: 'Cohort v3 deployed; ops ready in 14 minutes', cta: '/case-studies' },
            ].map((c) => (
              <a key={c.title} href={c.cta} className="rounded-xl border border-zinc-800 bg-black p-5 hover:bg-zinc-950 transition">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-zinc-400">{c.body}</p>
                <span className="mt-3 inline-block text-sm text-cyan-300">View snapshots →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ADAPTIVE NARRATIVE (local only) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <AdaptiveNarrative />
      </section>
    </main>
  );
}

function AdaptiveNarrative() {
  const [depth, setDepth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = typeof window !== 'undefined' ? window.scrollY : 0;
      setDepth(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const stage = depth > 1200 ? 3 : depth > 600 ? 2 : 1;
  const copy = {
    1: 'Start where control matters most. One workflow. Measurable gains.',
    2: 'Extend executive coverage. Compound throughput across teams.',
    3: 'Leadership rituals form around sealed outcomes. Sovereignty becomes culture.',
  } as const;
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-6">
      <h3 className="text-xl font-bold mb-2">Where you are now</h3>
      <p className="text-zinc-300">{copy[stage]}</p>
      <p className="mt-2 text-xs text-zinc-500">Local-only adaptation. No tracking. No analytics.</p>
    </div>
  );
}
