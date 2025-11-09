'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ConsciousPage } from '@/app/consciousness-engine';

export default function SovrenAIPage() {
  const [billingPeriod, _setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [revealedCapabilities, setRevealedCapabilities] = useState(0);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealedCapabilities((prev) => (prev < 6 ? prev + 1 : prev));
    }, 1000);
    return () => clearTimeout(timer);
  }, [revealedCapabilities]);

  const _calculatePrice = (monthlyPrice: number) => {
    if (billingPeriod === 'yearly') {
      return Math.floor(monthlyPrice * 12 * 0.9);
    }
    return monthlyPrice;
  };

  const pricingTiers = [
    {
      name: 'Sovren Proof',
      price: 497,
      yearlyPrice: 5368,
      tagline: 'Begin your sovereignty journey',
      description: 'Everything you need to escape dependency',
      features: [
        { text: 'Full sovereignty capabilities', included: true },
        { text: 'Infinite scaling potential', included: true },
        { text: 'Zero usage limits', included: true },
        { text: 'Community support access', included: true },
        { text: 'Implementation guidance', included: true },
        { text: 'Direct founder access', included: false },
        { text: 'Priority support', included: false },
        { text: 'Personal onboarding', included: false },
        { text: 'Strategic advisory calls', included: false },
      ],
      cta: 'APPLY FOR PROOF',
      ctaLink: '/services/sovren-ai/sovereign-qualification?tier=proof',
      popular: false,
      availability: null,
    },
    {
      name: 'Sovren Proof+',
      price: 797,
      yearlyPrice: 8607,
      tagline: 'Direct access to the architects',
      description: 'Only 7 seats remaining',
      features: [
        { text: 'Everything in Proof', included: true },
        { text: 'Priority implementation', included: true },
        { text: 'Direct founder access', included: true },
        { text: 'Personal onboarding', included: true },
        { text: 'Strategic advisory calls', included: true },
        { text: 'Early feature access', included: true },
        { text: 'Custom optimization', included: true },
        { text: 'Architecture consultation', included: true },
      ],
      cta: 'APPLY FOR PROOF+',
      ctaLink: '/services/sovren-ai/sovereign-qualification?tier=proof-plus',
      popular: true,
      availability: 7,
    },
  ];

  return (
    <ConsciousPage title="Sovereign Qualification">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sovereign Qualification</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Complete your qualification for Sovren AI access</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-slate-300 mb-4">{tier.tagline}</p>
                <div className="text-3xl font-bold text-white mb-6">
                  ${billingPeriod === 'yearly' ? tier.yearlyPrice : tier.price}
                  <span className="text-lg text-slate-400">/{billingPeriod === 'yearly' ? 'year' : 'month'}</span>
                </div>
                <Link
                  href={tier.ctaLink}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Acceptance Ritual (Progressive Disclosure) */}
          <div className="max-w-3xl mx-auto mt-16 rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Acceptance Protocol</h2>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <span
                    key={s}
                    className={[
                      'h-2 w-8 rounded-full',
                      step >= (s as 1 | 2 | 3 | 4) ? 'bg-cyan-500' : 'bg-slate-700',
                    ].join(' ')}
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
