"use client";

import { useMemo } from 'react';

export function SovereigntyGauge() {
  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-6">
      <h3 className="text-xl font-bold mb-2">Sovereignty Gauge</h3>
      <p className="text-zinc-400 mb-4">Where you are on the dependency → sovereignty spectrum.</p>
      <div className="relative h-28 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 px-4 py-3">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>Dependency</span>
            <span>Sovereignty</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-zinc-800">
            <div
              className={["h-2 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500", prefersReduced ? "w-2/3" : "w-2/3 animate-[grow_2s_ease-out_forwards]"]
                .join(" ")}
              style={{ transformOrigin: 'left center' }}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 text-[11px] text-zinc-400">
            <div>Adapters pending</div>
            <div>Guardrails live</div>
            <div>Proof-as-UI</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes grow { from { width: 20%; } to { width: 66.6667%; } }
      `}</style>
    </div>
  );
}
