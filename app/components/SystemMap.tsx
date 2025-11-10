"use client";

export function SystemMap() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-6">
      <h3 className="text-xl font-bold mb-2">System Map (Abstract)</h3>
      <p className="text-zinc-400 mb-4">Outcome pathways, no infrastructure disclosures.</p>
      <div className="grid grid-cols-3 gap-3">
        {["Operators", "Approvals", "Observability", "Policies", "Adapters", "Ledger"].map((n) => (
          <div key={n} className="rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-center text-sm">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
