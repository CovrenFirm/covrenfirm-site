"use client";

const ROLES = [
  "CFO", "COO", "CMO", "CLO", "CTO", "CHRO", "CSO", "CIO", "CPO",
];

export function ExecutiveIdentityMatrix() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black p-6">
      <h3 className="text-xl font-bold mb-2">Executive Identity Matrix</h3>
      <p className="text-zinc-400 mb-4">Role coverage visual. Each executive maintains a unique professional identity.</p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {ROLES.map((r) => (
          <div key={r} className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-center text-sm">
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}
