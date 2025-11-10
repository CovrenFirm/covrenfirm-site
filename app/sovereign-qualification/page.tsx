'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ConsciousPage } from '@/app/consciousness-engine';
import { SOVREN_PRICING, POWER_SLOT_ADDON } from '@/lib/pricing';

export default function SovrenAIPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  return (
    <ConsciousPage title="Sovereign Qualification">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sovereign Qualification</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Complete your qualification for Sovren AI access</p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-3">
            {SOVREN_PRICING.map((tier) => (
              <div
                key={tier.id}
                className={[
                  'rounded-2xl p-8 border backdrop-blur-sm',
                  tier.highlight ? 'bg-purple-900/30 border-purple-500/40' : 'bg-slate-800/50 border-slate-700',
                ].join(' ')}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  {tier.badge ? (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {tier.summaryPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={tier.cta.href}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                  >
                    {tier.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-10">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Add-On: Power Slots</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-300 font-semibold">{POWER_SLOT_ADDON.name}</p>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {POWER_SLOT_ADDON.descriptionPoints.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex md:justify-end items-start">
                  <Link
                    href={POWER_SLOT_ADDON.cta.href}
                    className="h-10 inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 hover:opacity-90 transition"
                  >
                    {POWER_SLOT_ADDON.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Acceptance Protocol */}
          <div className="max-w-3xl mx-auto mt-16 rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Acceptance Protocol</h2>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <span
                    key={s}
                    className={['h-2 w-8 rounded-full', step >= (s as 1 | 2 | 3 | 4) ? 'bg-cyan-500' : 'bg-slate-700'].join(' ')}
                  />
                ))}
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <p className="text-slate-300">Step 1: Intent</p>
                <p className="text-slate-400">State your primary objective for the first 30 days. Keep it outcome-focused.</p>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-semibold">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="text-slate-300">Step 2: Context</p>
                <p className="text-slate-400">Select the department/process where operators will start. We will adapt to your policies.</p>
                <div className="flex gap-3">
                  <button onClick={() => setStep(3)} className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-semibold">
                    Continue
                  </button>
                  <button onClick={() => setStep(1)} className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200">
                    Back
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-slate-300">Step 3: Controls</p>
                <p className="text-slate-400">Confirm approvals and visibility preferences. Guardrails are enforced by default.</p>
                <div className="flex gap-3">
                  <button onClick={() => setStep(4)} className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-semibold">
                    Continue
                  </button>
                  <button onClick={() => setStep(2)} className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200">
                    Back
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <p className="text-slate-300">Final Step</p>
                <div className="rounded-xl border border-cyan-500 p-6 text-center">
                  <p className="text-3xl font-extrabold text-white tracking-wide">APPROVED</p>
                  <p className="mt-2 text-slate-300">Your application is sealed. We’ll brief you within 1 business day.</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <Link href="/contact" className="px-4 py-2 rounded-lg bg-white text-black font-semibold">
                    Book Briefing
                  </Link>
                  <button onClick={() => setStep(1)} className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200">
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ConsciousPage>
  );
}

export const metadata = {
  title: 'Sovereign Qualification — Covren Firm',
  description: 'Complete your qualification for Sovren AI. Exclusive access; outcomes only.',
  openGraph: {
    title: 'Sovereign Qualification — Covren Firm',
    description: 'Complete your qualification for Sovren AI. Exclusive access; outcomes only.',
    url: 'https://covrenfirm.com/sovereign-qualification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sovereign Qualification — Covren Firm',
    description: 'Complete your qualification for Sovren AI. Exclusive access; outcomes only.',
  },
} as const;
