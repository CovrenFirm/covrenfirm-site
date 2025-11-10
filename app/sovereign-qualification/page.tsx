'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ConsciousPage } from '@/app/consciousness-engine';
import { SOVREN_PRICING, POWER_SLOT_ADDON } from '@/lib/pricing';
import type { SovrenTier } from '@/lib/pricing';

type ControlPrefs = {
	executiveVisibility: boolean;
	legalVisibility: boolean;
	externalApprovals: boolean;
	realtimeSignals: boolean;
};

export default function SovrenAIPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTier, setSelectedTier] = useState<SovrenTier['id'] | null>(null);
  const [intent, setIntent] = useState('');
  const [department, setDepartment] = useState<(typeof DEPARTMENTS)[number]['id']>('pipeline');
  const [controlPrefs, setControlPrefs] = useState<ControlPrefs>({
    executiveVisibility: true,
    legalVisibility: false,
    externalApprovals: false,
    realtimeSignals: true,
  });
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const DEPARTMENTS = [
    { id: 'pipeline', label: 'Revenue pipeline' },
    { id: 'support', label: 'Customer support' },
    { id: 'ops', label: 'Operations' },
    { id: 'legal', label: 'Legal review' },
  ] as const;

  const selectedTierDetails = React.useMemo(
    () => (selectedTier ? SOVREN_PRICING.find((t) => t.id === selectedTier) ?? null : null),
    [selectedTier]
  );

  function toggleControlPref(key: keyof ControlPrefs) {
    setControlPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function handleAdvance(next: 1 | 2 | 3 | 4) {
    // Allow progressing without requiring intent to avoid UX dead-ends
    if (error) setError(null);
    setStep(next);
  }

  // Initialize selected tier from query param (?tier=...) without useSearchParams to avoid Suspense
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const tierParam = params.get('tier') as SovrenTier['id'] | null;
      if (tierParam && ['solo', 'professional', 'business'].includes(tierParam)) {
        setSelectedTier(tierParam);
      }
    } catch {}
  }, []);

  // When a tier is selected (either via button or query param), ensure Acceptance is visible
  useEffect(() => {
    if (selectedTier) {
      const el = document.getElementById('acceptance');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedTier]);

  return (
    <ConsciousPage title="Sovereign Qualification">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sovereign Qualification</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Complete your qualification for Sovren AI access</p>
            {selectedTierDetails ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
                Preparing `{selectedTierDetails.name}` deployment profile.
              </p>
            ) : null}
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
                <div className="mt-1 text-slate-300">
                  <span className="text-3xl font-extrabold">${tier.pricePerMonth}</span>
                  <span className="text-sm text-slate-400"> / month</span>
                </div>
                <div className="mt-1 text-sm text-slate-400">{tier.executivesCount}</div>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {tier.summaryPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setSelectedTier(tier.id);
                      // replace URL query for shareability without full navigation
                      const url = new URL(window.location.href);
                      url.searchParams.set('tier', tier.id);
                      url.hash = 'acceptance';
                      router.replace(url.pathname + url.search + url.hash);
                      const el = document.getElementById('acceptance');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                  >
                    {tier.cta.label}
                  </button>
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
          <div id="acceptance" className="max-w-3xl mx-auto mt-16 rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
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
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleAdvance(2);
                }}
              >
                <div>
                  <p className="text-slate-300 font-semibold">Step 1: Intent</p>
                  <p className="text-slate-400 mt-1">State your primary objective for the first 30 days. Keep it outcome-focused.</p>
                </div>
                <label className="block" htmlFor="intent">
                  <span className="text-sm uppercase tracking-wide text-slate-400">Primary objective</span>
                  <textarea
                    id="intent"
                    required
                    value={intent}
                    onChange={(event) => setIntent(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-slate-100 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    rows={4}
                    placeholder="Example: Launch sovereign operators to run outbound revenue motions and secure 12 executive briefings."
                  />
                </label>
                {error ? <p className="text-sm text-red-400">{error}</p> : null}
                <div className="flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-semibold">
                    Continue
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleAdvance(3);
                }}
              >
                <div>
                  <p className="text-slate-300 font-semibold">Step 2: Context</p>
                  <p className="text-slate-400 mt-1">
                    Select the department/process where operators will start. We adapt to your policies and language.
                  </p>
                </div>
                <fieldset className="space-y-3">
                  <legend className="sr-only">Initial department focus</legend>
                  {DEPARTMENTS.map((option) => (
                    <label
                      key={option.id}
                      className={[
                        'flex cursor-pointer items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4 transition',
                        department === option.id ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-900/10' : 'hover:border-slate-500',
                      ].join(' ')}
                    >
                      <input
                        type="radio"
                        name="department"
                        value={option.id}
                        checked={department === option.id}
                        onChange={() => setDepartment(option.id)}
                        className="mt-1 h-4 w-4 cursor-pointer accent-cyan-500"
                      />
                      <span className="text-slate-200">{option.label}</span>
                    </label>
                  ))}
                </fieldset>
                <div className="flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-semibold">
                    Continue
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form
                className="space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleAdvance(4);
                }}
              >
                <div>
                  <p className="text-slate-300 font-semibold">Step 3: Controls</p>
                  <p className="text-slate-400 mt-1">
                    Confirm visibility and approval preferences. Guardrails are enforced by default and can be changed later.
                  </p>
                </div>
                <fieldset className="grid gap-3 md:grid-cols-2">
                  <legend className="sr-only">Control preferences</legend>
                  <label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                    <input
                      type="checkbox"
                      checked={controlPrefs.executiveVisibility}
                      onChange={() => toggleControlPref('executiveVisibility')}
                      className="mt-1 h-4 w-4 accent-cyan-500"
                    />
                    <span>
                      <span className="block font-semibold text-slate-100">Executive visibility</span>
                      <span className="text-sm text-slate-400">Daily throughput reporting for executive sponsors.</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                    <input
                      type="checkbox"
                      checked={controlPrefs.legalVisibility}
                      onChange={() => toggleControlPref('legalVisibility')}
                      className="mt-1 h-4 w-4 accent-cyan-500"
                    />
                    <span>
                      <span className="block font-semibold text-slate-100">Legal visibility</span>
                      <span className="text-sm text-slate-400">Involve legal/compliance in real-time review queues.</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                    <input
                      type="checkbox"
                      checked={controlPrefs.externalApprovals}
                      onChange={() => toggleControlPref('externalApprovals')}
                      className="mt-1 h-4 w-4 accent-cyan-500"
                    />
                    <span>
                      <span className="block font-semibold text-slate-100">External approvals</span>
                      <span className="text-sm text-slate-400">Route high-risk actions to an external approver list.</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                    <input
                      type="checkbox"
                      checked={controlPrefs.realtimeSignals}
                      onChange={() => toggleControlPref('realtimeSignals')}
                      className="mt-1 h-4 w-4 accent-cyan-500"
                    />
                    <span>
                      <span className="block font-semibold text-slate-100">Real-time signals</span>
                      <span className="text-sm text-slate-400">Push operator telemetry to Slack/SOC as it happens.</span>
                    </span>
                  </label>
                </fieldset>
                <label className="block" htmlFor="notes">
                  <span className="text-sm uppercase tracking-wide text-slate-400">Anything we should know?</span>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-slate-100 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    rows={3}
                    placeholder="Security posture, blackout dates, stakeholders, existing automations…"
                  />
                </label>
                {error ? <p className="text-sm text-red-400">{error}</p> : null}
                <div className="flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded-lg bg-cyan-600 text-white font-semibold">
                    Continue
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <div className="rounded-xl border border-cyan-500 bg-cyan-500/10 p-6 text-center">
                  <p className="text-3xl font-extrabold text-white tracking-wide">Qualification sealed.</p>
                  <p className="mt-2 text-slate-200">
                    We brief within one business day. Expect a direct operator reply to finalize credentials.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6">
                  <h3 className="text-lg font-semibold text-white">Your submission snapshot</h3>
                  <dl className="mt-4 space-y-3 text-sm text-slate-300">
                    <div className="flex justify-between gap-6">
                      <dt className="uppercase tracking-wide text-slate-500">Tier</dt>
                      <dd>{selectedTierDetails ? selectedTierDetails.name : 'Not specified'}</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt className="uppercase tracking-wide text-slate-500">First 30 days</dt>
                      <dd className="text-left">{intent}</dd>
                    </div>
                    <div className="flex justify-between gap-6">
                      <dt className="uppercase tracking-wide text-slate-500">Initial focus</dt>
                      <dd>{DEPARTMENTS.find((d) => d.id === department)?.label ?? department}</dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-wide text-slate-500">Controls</dt>
                      <dd className="mt-1 grid gap-1 md:grid-cols-2">
                        {Object.entries(controlPrefs).map(([key, value]) => (
                          <span key={key} className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs">
                            <span
                              className={[
                                'h-2.5 w-2.5 rounded-full',
                                value ? 'bg-cyan-400' : 'bg-slate-600',
                              ].join(' ')}
                              aria-hidden="true"
                            />
                            {labelForControl(key as keyof ControlPrefs)}
                          </span>
                        ))}
                      </dd>
                    </div>
                    {notes.trim() ? (
                      <div className="flex justify-between gap-6">
                        <dt className="uppercase tracking-wide text-slate-500">Notes</dt>
                        <dd className="text-left max-w-xl">{notes}</dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link href="/contact" className="px-4 py-2 rounded-lg bg-white text-black font-semibold">
                    Book Briefing
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setIntent('');
                      setDepartment('pipeline');
                      setNotes('');
                    }}
                    className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200"
                  >
                    Record a new submission
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

function QualificationFallback() {
  return (
    <ConsciousPage title="Sovereign Qualification">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 py-24 text-center text-slate-400">
          Preparing qualification interface…
        </div>
      </div>
    </ConsciousPage>
  );
}

function labelForControl(control: keyof ControlPrefs): string {
  switch (control) {
    case 'executiveVisibility':
      return 'Executive visibility';
    case 'legalVisibility':
      return 'Legal/compliance visibility';
    case 'externalApprovals':
      return 'External approvals';
    case 'realtimeSignals':
      return 'Real-time telemetry';
    default:
      return String(control);
  }
}

