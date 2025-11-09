'use client';

import Link from 'next/link';
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

      {/* ADD-ON: POWER SLOTS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-bold mb-6">Add-On: Power Slots</h3>
          <div className="grid md:grid-cols-1">
            <Package
              name="Power Slot — $990/month per slot"
              points={[
                'Purpose: Add one additional AI executive beyond tier limits',
                'GPU Allocation: Dedicated MIG slice or cpuset guarantee for sustained workload',
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
              Global Name Uniqueness: Each executive gets a unique &quot;First M. Last&quot; LinkedIn-grade identity
              (280,800 combination space)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-cyan-400" />
            <span>
              Sovereign Execution: All AI processing self-hosted; zero API dependencies except Stripe + Skyetel
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
            <span>Sub-200ms Duplex: Real-time voice conversations with MOS ≥4.85 quality</span>
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
