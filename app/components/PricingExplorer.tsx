'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SOVREN_PRICING } from '@/lib/pricing';
import { Check } from 'lucide-react';

type Horizon = 'day1' | 'week1' | 'month1';

const DELTAS: Record<Horizon, string[]> = {
  day1: [
    'Operator accounts provisioned and visible in status board',
    'Approval workflow live for one core process',
    'Proof-as-UI ledger embedded in your workspace',
  ],
  week1: [
    'Two primary workflows automated with guardrails',
    'Executive handoffs reduce cycle time in one department',
    'Owner-visible observability for executive actions',
  ],
  month1: [
    'Expanded executive coverage across roles',
    'Throughput improvements compounding across processes',
    'Leadership rituals around sealed outcomes',
  ],
};

export function PricingExplorer() {
  const [tierId, setTierId] = useState<'solo' | 'professional' | 'business'>('professional');
  const [horizon, setHorizon] = useState<Horizon>('week1');

  const tier = SOVREN_PRICING.find((t) => t.id === tierId)!;
  const items = DELTAS[horizon];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          {(['solo', 'professional', 'business'] as const).map((id) => (
            <button
              key={id}
              onClick={() => setTierId(id)}
              className={[
                'px-3 py-1.5 rounded-lg text-sm border transition',
                tierId === id ? 'border-cyan-500 text-cyan-300' : 'border-zinc-700 text-zinc-300 hover:bg-zinc-950',
              ].join(' ')}
            >
              {id.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {(['day1', 'week1', 'month1'] as const).map((h) => (
            <button
              key={h}
              onClick={() => setHorizon(h)}
              className={[
                'px-3 py-1.5 rounded-lg text-sm border transition',
                horizon === h ? 'border-cyan-500 text-cyan-300' : 'border-zinc-700 text-zinc-300 hover:bg-zinc-950',
              ].join(' ')}
            >
              {h.replace('1', ' 1')}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold">{tier.name}</h3>
            {tier.badge ? (
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {tier.badge}
              </span>
            ) : null}
          </div>
          <ul className="mt-2 space-y-2 text-zinc-300">
            {tier.summaryPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-cyan-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link
              href={tier.cta.href}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
            >
              {tier.cta.label}
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
          <h4 className="text-lg font-semibold">Throughput Deltas ({horizon.replace('1', ' 1')})</h4>
          <ul className="mt-3 space-y-2 text-zinc-300">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-cyan-400" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-zinc-400">
            Outcome-only framing. No vendor or infrastructure disclosures. Reduced-motion respected.
          </p>
        </div>
      </div>
    </div>
  );
}


