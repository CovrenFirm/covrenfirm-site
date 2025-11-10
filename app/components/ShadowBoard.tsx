'use client';

import { useMemo, useState } from 'react';

type Exec = {
  role: string;
  description: string;
  samples: string[];
};

const EXECS: Exec[] = [
  {
    role: 'COO',
    description: 'Flow and logistics orchestration',
    samples: [
      'Re-routed shipments around weather delay',
      'Resolved inventory exception across 2 warehouses',
      'Sequenced tomorrow’s dispatch for on-time delivery',
    ],
  },
  {
    role: 'CFO',
    description: 'Finance controls and cashflow',
    samples: [
      'Flagged variance and issued vendor correction',
      'Consolidated invoices; scheduled 3 payments',
      'Reconciled statements; removed duplicate line',
    ],
  },
  {
    role: 'CMO',
    description: 'Campaigns and growth operations',
    samples: [
      'Launched cohort experiment v3',
      'Synced CRM segments with exclusions',
      'Rotated creatives; preserved learning',
    ],
  },
  {
    role: 'CLO',
    description: 'Policy guardrails and risk review',
    samples: [
      'Reviewed outbound email batch for policy risk',
      'Redlined clause in vendor SOW',
      'Approved with guardrails and visibility',
    ],
  },
  {
    role: 'CTO',
    description: 'Systems and permissions integrity',
    samples: [
      'Validated adapters and permission scopes',
      'Ran daily health checks',
      'Confirmed green across core systems',
    ],
  },
  {
    role: 'CHRO',
    description: 'People ops and onboarding',
    samples: [
      'Scheduled onboarding for 3 hires',
      'Published handbook change log',
      'Prepared review packets for managers',
    ],
  },
];

export function ShadowBoard() {
  const [active, setActive] = useState(0);
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const exec = EXECS[active];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Shadow Board</h3>
        <span className="text-xs text-zinc-400">Core executive roles</span>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-2">
          {EXECS.map((e, i) => (
            <button
              key={e.role}
              onClick={() => setActive(i)}
              className={[
                'text-left rounded-lg border px-3 py-2 transition',
                i === active ? 'border-cyan-500 text-cyan-300 bg-black' : 'border-zinc-800 hover:bg-black',
              ].join(' ')}
            >
              <div className="font-semibold">{e.role}</div>
              <div className="text-xs text-zinc-400">{e.description}</div>
            </button>
          ))}
        </div>
        <div className="md:col-span-2 rounded-lg border border-zinc-800 bg-black p-4">
          <div className={['text-sm text-zinc-400', prefersReduced ? '' : ''].join(' ')}>
            Recent actions
          </div>
          <ul className="mt-3 space-y-2 text-zinc-300">
            {exec.samples.map((s, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


