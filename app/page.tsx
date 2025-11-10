'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { OperatorLedger } from './components/OperatorLedger';
import { ShadowBoard } from './components/ShadowBoard';

type ConsoleScenario = {
  id: 'briefing' | 'qualification' | 'intel';
  label: string;
  headline: string;
  summary: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  signals: Array<{ label: string; value: string }>;
  logs: string[];
};

const STRATEGY_CONSOLE: ConsoleScenario[] = [
  {
    id: 'briefing',
    label: 'Command Briefing',
    headline: 'Deploy executive operators within the first week.',
    summary:
      'Map your revenue rituals, codify approvals, and slot operators into every stalled lane. The briefing locks alignment so execution begins immediately.',
    primary: { label: 'Book Command Briefing', href: '/contact?source=console-briefing' },
    secondary: { label: 'See Proof-as-UI', href: '#demo' },
    signals: [
      { label: 'Operators Online', value: '3 executive lanes' },
      { label: 'Launch Window', value: '< 7 days' },
      { label: 'Guardrail Coverage', value: 'Policy lattice enforced' },
    ],
    logs: [
      '> ingesting go-to-market rituals…',
      '> mapping approval lattice…',
      '> rendering executive dashboards…',
      '> briefing command team…',
      '> ready for briefing window.',
    ],
  },
  {
    id: 'qualification',
    label: 'Sovereign Qualification',
    headline: 'Choose the tier that matches your command requirements.',
    summary:
      'Qualification routes you directly to sovereign-grade access with operators, controls, and telemetry tuned to your runway.',
    primary: { label: 'Start Qualification', href: '/sovereign-qualification?source=console' },
    secondary: { label: 'Review Pricing Tiers', href: '/services/sovren-ai#pricing' },
    signals: [
      { label: 'Tier Coverage', value: 'Solo → Business' },
      { label: 'Operator Throughput', value: '185+ actions/day' },
      { label: 'Policy Modes', value: 'Exec, Legal, External' },
    ],
    logs: [
      '> scanning operating surface area…',
      '> simulating governance checkpoints…',
      '> aligning telemetry feeds…',
      '> generating approval blueprint…',
      '> qualification packet prepared.',
    ],
  },
  {
    id: 'intel',
    label: 'Operational Intel',
    headline: 'Audit proof of execution before you commit.',
    summary:
      'Walk through sealed shadow boards, ledger excerpts, and anonymized debriefs to feel the difference between rented AI and owned operators.',
    primary: { label: 'Run Demo Gallery', href: '/resources/demos' },
    secondary: { label: 'Read Case Studies', href: '/case-studies' },
    signals: [
      { label: 'Shadow Boards', value: '6 live sequences' },
      { label: 'Ledger Accuracy', value: '99.4% reconciled' },
      { label: 'Access Level', value: 'Outcome-only snapshots' },
    ],
    logs: [
      '> loading sealed operator ledger…',
      '> redacting sensitive payloads…',
      '> replaying sovereign workflows…',
      '> exposing decision telemetry…',
      '> intel packet ready.',
    ],
  },
];

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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeMode, setActiveMode] = useState<ConsoleScenario['id']>(STRATEGY_CONSOLE[0].id);
  const [logIndex, setLogIndex] = useState(0);

  const activeScenario = useMemo(
    () => STRATEGY_CONSOLE.find((scenario) => scenario.id === activeMode) ?? STRATEGY_CONSOLE[0],
    [activeMode]
  );

  useEffect(() => {
    setVisibleCount(0);
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setPrefersReducedMotion(prefersReduced);

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

  useEffect(() => {
    if (!activeScenario) {
      return;
    }

    if (prefersReducedMotion) {
      setLogIndex(Math.max(activeScenario.logs.length - 1, 0));
      return;
    }

    setLogIndex(0);

    if (activeScenario.logs.length <= 1) {
      return;
    }

    const id = window.setInterval(() => {
      setLogIndex((current) => {
        if (current >= activeScenario.logs.length - 1) {
          window.clearInterval(id);
          return current;
        }
        return current + 1;
      });
    }, 900);

    return () => window.clearInterval(id);
  }, [activeScenario, prefersReducedMotion]);

  const highlightedLogIndex = Math.min(logIndex, activeScenario.logs.length - 1);
  const logsToRender = activeScenario.logs.slice(0, highlightedLogIndex + 1);

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
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sovereign AI that executes. Not negotiates.
            </span>
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

          {/* Strategy Console */}
          <div className="mt-8 rounded-xl border border-zinc-800 bg-black p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Sovereign strategy console
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {STRATEGY_CONSOLE.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveMode(scenario.id)}
                  className={[
                    'rounded-full border px-4 py-1.5 text-sm font-semibold transition',
                    activeMode === scenario.id
                      ? 'border-white bg-white text-black'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-600',
                  ].join(' ')}
                  aria-pressed={activeMode === scenario.id}
                >
                  {scenario.label}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-500">Outcome</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{activeScenario.headline}</h3>
                <p className="mt-3 text-zinc-300">{activeScenario.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={activeScenario.primary.href}
                    className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    {activeScenario.primary.label}
                  </Link>
                  {activeScenario.secondary ? (
                    <Link
                      href={activeScenario.secondary.href}
                      className="rounded-lg border border-zinc-700 px-5 py-2 text-sm font-semibold hover:bg-zinc-900 transition"
                    >
                      {activeScenario.secondary.label}
                    </Link>
                  ) : null}
                </div>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Live telemetry</p>
                <ul className="mt-3 space-y-2 font-mono text-sm">
                  {logsToRender.map((log, idx) => (
                    <li
                      key={`${activeScenario.id}-log-${idx}`}
                      className={[
                        'flex items-start gap-2',
                        idx === highlightedLogIndex ? 'text-cyan-300' : 'text-zinc-500',
                      ].join(' ')}
                    >
                      <span className="text-cyan-500">▹</span>
                      <span>{log}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {activeScenario.signals.map((signal) => (
                    <div
                      key={`${activeScenario.id}-${signal.label}`}
                      className="rounded-lg border border-zinc-800 bg-black/40 p-3 text-left"
                    >
                      <p className="text-[11px] uppercase tracking-wider text-zinc-500">{signal.label}</p>
                      <p className="mt-1 text-lg font-semibold text-white">{signal.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-4">
          {[
            { label: 'SOVREN AI', href: '/services/sovren-ai' },
            { label: 'Services', href: '/services' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Sovereign Qualification', href: '/sovereign-qualification' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-2xl border border-zinc-800 bg-black p-6 text-center font-semibold hover:bg-zinc-950 transition"
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

      {/* DEMO ANCHOR */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Proof-as-UI
          </span>
        </h2>
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
    </main>
  );
}