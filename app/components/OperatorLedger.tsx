'use client';

import { useEffect, useMemo, useState } from 'react';

type LedgerEntry = {
  time: string;
  role: string;
  action: string;
  outcome: string;
};

const BASE_ENTRIES: LedgerEntry[] = [
  { time: '09:14', role: 'CFO', action: 'Reconciled invoices and issued 3 vendor payments', outcome: 'Cycle time -38%' },
  { time: '10:02', role: 'COO', action: 'Rescheduled 5 deliveries to avoid storm impact', outcome: 'Avoided $12k losses' },
  { time: '10:27', role: 'CMO', action: 'Deployed new campaign and synced CRM segments', outcome: 'Ops ready in 14m' },
  { time: '11:05', role: 'CLO', action: 'Reviewed outbound email batch for policy risks', outcome: 'Approved with guardrails' },
  { time: '11:22', role: 'CTO', action: 'Validated system adapters and permissions', outcome: 'Green' },
];

export function OperatorLedger() {
  const [count, setCount] = useState(3);

  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReduced) {
      setCount(BASE_ENTRIES.length);
      return;
    }
    const id = setInterval(() => {
      setCount((c) => Math.min(c + 1, BASE_ENTRIES.length));
    }, 800);
    return () => clearInterval(id);
  }, [prefersReduced]);

  const visible = BASE_ENTRIES.slice(0, count);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Proof-as-UI: Operator Ledger</h3>
        <span className="text-xs text-zinc-400">Sealed snapshots</span>
      </div>
      <div className="mt-4 grid gap-3">
        {visible.map((e, i) => (
          <div
            key={i}
            className="rounded-lg border border-zinc-800 bg-black p-4 flex items-start justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="text-cyan-400 text-sm mt-0.5">{e.time}</div>
              <div>
                <p className="font-semibold">{e.role} Executive</p>
                <p className="text-zinc-400">{e.action}</p>
              </div>
            </div>
            <div className="text-sm text-emerald-400 font-semibold">{e.outcome}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


