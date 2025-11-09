'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ConsciousPage } from '@/app/consciousness-engine';
import {
  Brain,
  Shield,
  Cpu,
  Zap,
  Check,
  ChevronRight,
  AlertTriangle,
  Eye,
  Users,
  Database,
  Volume2,
  TrendingUp,
} from 'lucide-react';

export default function SovrenAIPage() {
  return (
    <ConsciousPage title="SOVREN AI — Sovereign Intelligence">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Sovereign AI that <span className="underline underline-offset-4">executes</span>. Not negotiates.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-300">
          SOVREN AI is built for operators who demand control. It runs your workflows end-to-end, respects
          guardrails, and is measured by outcomes—never opinions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
            aria-label="Book the Command Briefing"
          >
            Command Briefing
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-900 transition"
          >
            See capabilities
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-6 md:grid-cols-3">
          <Pillar
            icon={<Brain className="w-6 h-6 text-cyan-400" />}
            title="Cognitive Operators"
            text="Agents that plan, execute, and close the loop—without hand-holding."
          />
          <Pillar
            icon={<Shield className="w-6 h-6 text-cyan-400" />}
            title="Control & Safety"
            text="Role-aware actions, policy controls, and human-in-the-loop when required."
          />
          <Pillar
            icon={<Cpu className="w-6 h-6 text-cyan-400" />}
            title="Outcome Driven"
            text="Built to reduce cycle time and increase cashflow—not vanity metrics."
          />
        </div>
      </section>

      {/* OPERATOR STATUS BOARD */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Operator Status Board</h2>
        <p className="text-zinc-300 mb-6">Curated snapshot of recent executive actions. Outcomes only.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { role: 'COO', when: 'Now', action: 'Resolved logistics exception; re-routed shipments', outcome: 'On-time maintained' },
            { role: 'CFO', when: '2m ago', action: 'Flagged cashflow anomaly; issued vendor correction', outcome: 'Variance eliminated' },
            { role: 'CLO', when: '6m ago', action: 'Reviewed outbound email batch for policy risks', outcome: 'Approved with guardrails' },
            { role: 'CMO', when: '11m ago', action: 'Launched cohort experiment v3', outcome: 'Live with observability' },
            { role: 'CTO', when: '18m ago', action: 'Synced system adapters and validated permissions', outcome: 'Green' },
            { role: 'CHRO', when: '24m ago', action: 'Scheduled onboarding workflow for 3 hires', outcome: 'In progress' },
          ].map((card, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-black p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">{card.role} Executive</p>
                <span className="text-xs text-zinc-400">{card.when}</span>
              </div>
              <p className="text-zinc-300">{card.action}</p>
              <p className="mt-2 text-sm text-emerald-400 font-semibold">{card.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What it actually does</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Line icon={<Zap className="w-5 h-5 text-cyan-400" />} text="Executes multi-step tasks across tools and data." />
          <Line icon={<Eye className="w-5 h-5 text-cyan-400" />} text="Keeps humans in control with approvals and visibility." />
          <Line icon={<Users className="w-5 h-5 text-cyan-400" />} text="Adapts to roles and permissions you define." />
          <Line icon={<Database className="w-5 h-5 text-cyan-400" />} text="Connects to your systems via secure adapters." />
          <Line icon={<Volume2 className="w-5 h-5 text-cyan-400" />} text="Handles voice/telephony workflows when needed." />
          <Line icon={<TrendingUp className="w-5 h-5 text-cyan-400" />} text="Optimizes for throughput and measurable results." />
        </div>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-1" />
            <div>
              <h3 className="font-semibold">No sensitive disclosures</h3>
              <p className="text-zinc-400">
                This page intentionally avoids listing proprietary infrastructure, hardware, vendor names, or
                deployment details. You keep the edge; competitors stay guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION PRICING */}
      <section id="pricing" className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Sovren AI Subscription Tiers — Production Pricing</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Package
              name="SOLO — $199/month"
              points={[
                'Executive Count: 2–3 AI executives',
                'Target Market: Solopreneurs, micro-businesses, side hustles',
                'Key Value: AI Receptionist + 1–2 C‑Suite roles (typically CFO, CMO, or COO based on business need)',
                'Use Case: Single‑founder operations needing professional delegation without hiring humans',
              ]}
              cta={{
                label: 'Apply for SOLO',
                href: '/services/sovren-ai/sovereign-qualification?tier=solo',
              }}
            />

            <Package
              name="PROFESSIONAL — $349/month"
              badge="Best Value"
              points={[
                'Executive Count: 5–6 AI executives',
                'Target Market: Small businesses, established consultancies, agencies',
                'Key Value: AI Receptionist + full core C‑Suite (CFO, CMO, COO, CTO, CLO)',
                'Use Case: Growth-stage companies requiring multi-functional executive support for internal strategy + external customer/vendor interactions',
              ]}
              highlight
              cta={{
                label: 'Apply for PROFESSIONAL',
                href: '/services/sovren-ai/sovereign-qualification?tier=professional',
              }}
            />

            <Package
              name="BUSINESS — $1,199/month"
              points={[
                'Executive Count: 9–10 AI executives',
                'Target Market: SMBs with complex ops, multi-department teams',
                'Key Value: AI Receptionist + extended Shadow Board (core C‑Suite + CHRO, CSO, CIO, CPO)',
                'Use Case: Mature businesses needing full executive bench strength for both strategic planning and operational execution',
              ]}
              cta={{
                label: 'Apply for BUSINESS',
                href: '/services/sovren-ai/sovereign-qualification?tier=business',
              }}
            />
          </div>
        </div>
      </section>

      {/* PRICING THROUGHPUT DELTAS (Interactive) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <InteractiveDeltas />
      </section>

      {/* ADD-ON: POWER SLOTS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-bold mb-6">Add-On: Power Slots</h3>
          <div className="grid md:grid-cols-1">
            <Package
              name="Power Slot — $990/month per slot"
              points={[
                'Purpose: Add one additional AI executive beyond tier limits',
                'Dedicated performance allocation for sustained workload',
                'Typical Buyers: BUSINESS-tier subscribers requiring specialized roles (e.g., Chief Sustainability Officer, Chief Data Officer, VP of Product) or geographically distributed executive coverage',
              ]}
              cta={{ label: 'Discuss Power Slots', href: '/contact' }}
            />
          </div>
        </div>
      </section>

      {/* KEY DIFFERENTIATORS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Differentiators vs. Competitors</h2>
        <ul className="space-y-3 text-zinc-300">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>
              Global Name Uniqueness: Each executive maintains a unique professional identity
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>
              Sovereign Execution: Complete data sovereignty with strategic non‑AI services where appropriate
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>
              Full C-Suite Bench: Not a toy chatbot—autonomous executives that handle internal briefings AND external
              interactions (phone, email, social)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>Real-time voice conversations with enterprise-grade quality</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>Proof-as-UI: Every executive action sealed, verifiable, and founder-gated</span>
          </li>
        </ul>
      </section>

      {/* FAQ (NON-SENSITIVE) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Straight answers</h2>
        <div className="grid gap-4">
          <FAQ
            q="Does this replace my team?"
            a="No. It multiplies your team by taking the repetitive execution off their plate while keeping humans in control of decisions and policy."
          />
          <FAQ
            q="What does setup require?"
            a="A briefing, a primary use-case, and access to the systems that use-case touches. We handle the rest—safely and with explicit approvals."
          />
          <FAQ
            q="What results should we expect?"
            a="Shorter cycle times, higher task completion rates, and cleaner handoffs. We measure what matters and tune for throughput."
          />
          <FAQ
            q="Do you expose deployment details?"
            a="No. We do not publish infrastructure, hardware, or vendor specifics publicly. You retain competitive advantage; we keep your edge discreet."
          />
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
          >
            Book the Command Briefing
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ConsciousPage>
  );
}

/* ---------- Components ---------- */

function Pillar({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 p-6 bg-black">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-zinc-400">{text}</p>
    </div>
  );
}

function Line({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-zinc-300">
      <Check className="w-4 h-4 text-cyan-400" />
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Package({
  name,
  points,
  cta,
  badge,
  highlight,
}: {
  name: string;
  points: string[];
  cta: { label: string; href: string };
  badge?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        'rounded-2xl p-8 border',
        highlight ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30' : 'bg-black border-zinc-800',
      ].join(' ')}
    >
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        {badge ? (
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            {badge}
          </span>
        ) : null}
      </div>
      <ul className="mt-4 space-y-2 text-zinc-300">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href={cta.href}
          className={[
            'inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold transition',
            highlight ? 'bg-white text-black hover:opacity-90' : 'border border-zinc-700 hover:bg-zinc-900',
          ].join(' ')}
        >
          {cta.label}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 p-5 bg-black">
      <p className="font-semibold">{q}</p>
      <p className="mt-2 text-zinc-400">{a}</p>
    </div>
  );
}

function InteractiveDeltas() {
  const [horizon, setHorizon] = useState<'day1' | 'week1' | 'month1'>('day1');
  const variants: Record<typeof horizon, { title: string; items: string[] }> = {
    day1: {
      title: 'Day 1 changes',
      items: [
        'Operator accounts provisioned and visible in status board',
        'Approval workflow live for one core process',
        'Proof-as-UI ledger embedded in your workspace',
      ],
    },
    week1: {
      title: 'Week 1 changes',
      items: [
        'Two primary workflows automated with guardrails',
        'Executive handoffs reduce cycle time across one department',
        'Owner-visible observability for all executive actions',
      ],
    },
    month1: {
      title: 'Month 1 changes',
      items: [
        'Expanded executive coverage across roles',
        'Throughput improvements compound across processes',
        'Leadership rituals established around sealed outcomes',
      ],
    },
  };

  const current = variants[horizon];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Throughput Deltas</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setHorizon('day1')}
            className={['px-3 py-1 rounded-lg text-sm border', horizon === 'day1' ? 'border-cyan-500 text-cyan-300' : 'border-zinc-700 text-zinc-300'].join(' ')}
          >
            Day 1
          </button>
          <button
            onClick={() => setHorizon('week1')}
            className={['px-3 py-1 rounded-lg text-sm border', horizon === 'week1' ? 'border-cyan-500 text-cyan-300' : 'border-zinc-700 text-zinc-300'].join(' ')}
          >
            Week 1
          </button>
          <button
            onClick={() => setHorizon('month1')}
            className={['px-3 py-1 rounded-lg text-sm border', horizon === 'month1' ? 'border-cyan-500 text-cyan-300' : 'border-zinc-700 text-zinc-300'].join(' ')}
          >
            Month 1
          </button>
        </div>
      </div>
      <p className="text-zinc-400 mb-4">{current.title}</p>
      <ul className="space-y-2 text-zinc-300">
        {current.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
