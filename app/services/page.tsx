'use client';

import Link from 'next/link';

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Services</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Strategic engagement to deliver sovereign outcomes. Choose a path below.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
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
              className="rounded-2xl border border-zinc-800 p-6 hover:bg-zinc-950 transition"
            >
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-zinc-400">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

