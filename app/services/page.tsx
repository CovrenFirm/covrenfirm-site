'use client';

import Link from 'next/link';
import { ConsciousPage } from '@/app/consciousness-engine';

export default function ServicesIndexPage() {
  return (
    <ConsciousPage title="Services">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="max-w-2xl text-zinc-300">
          Strategic engagement to deliver sovereign outcomes. Choose a path below.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { href: '/services/ai-consulting', title: 'AI Consulting', desc: 'Strategy and execution to break dependencies.' },
            { href: '/services/custom-ai-development', title: 'Custom AI Development', desc: 'Bespoke AI that you own.' },
            { href: '/services/digital-transformation', title: 'Digital Transformation', desc: 'Rewire processes for throughput.' },
            { href: '/services/innovation-lab', title: 'Innovation Lab', desc: 'Explore and productize new capabilities.' },
            { href: '/services/sovren-ai', title: 'SOVREN AI', desc: 'Operative AI executives for your business.' },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl border border-zinc-800 bg-black p-6 hover:bg-zinc-950 transition"
            >
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-zinc-400">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/sovereign-qualification"
            className="rounded-2xl bg-white text-black font-semibold px-6 py-4 text-center hover:opacity-90 transition"
          >
            Start Sovereign Qualification
          </Link>
          <Link
            href="/contact"
            className="rounded-2xl border border-zinc-700 px-6 py-4 text-center font-semibold hover:bg-zinc-900 transition"
          >
            Book Command Briefing
          </Link>
        </div>
      </section>
    </ConsciousPage>
  );
}
 
