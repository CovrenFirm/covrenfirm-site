// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SiteHeader } from './components/SiteHeader';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Covren Firm - Sovereign AI Infrastructure',
  description:
    "Where AI consciousness meets sovereign business infrastructure. We don't just build technology—we engineer evolution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Global body styles so the site doesn’t render as raw black/white text */}
      <body className={[inter.className, 'min-h-screen bg-black text-white antialiased'].join(' ')}>
        <SiteHeader />

        {children}

        <footer className="border-t border-zinc-900 bg-black/60 backdrop-blur mt-20">
          <div className="mx-auto max-w-6xl px-6 py-10 pb-28 grid gap-8 md:grid-cols-4">
            <div>
              <div className="font-semibold mb-2">Covren Firm</div>
              <p className="text-sm text-zinc-400">Sovereign AI that executes. Outcomes only.</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li><Link className="hover:text-white transition" href="/about">About</Link></li>
                <li><Link className="hover:text-white transition" href="/case-studies">Case Studies</Link></li>
                <li><Link className="hover:text-white transition" href="/manifesto">Manifesto</Link></li>
                <li><Link className="hover:text-white transition" href="/legal">Legal</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Products</div>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li><Link className="hover:text-white transition" href="/services/sovren-ai">SOVREN AI</Link></li>
                <li><Link className="hover:text-white transition" href="/services">All Services</Link></li>
                <li><Link className="hover:text-white transition" href="/resources/demos">Demos</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Get Started</div>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li><Link className="hover:text-white transition" href="/sovereign-qualification">Sovereign Qualification</Link></li>
                <li><Link className="hover:text-white transition" href="/contact">Command Briefing</Link></li>
                <li><Link className="hover:text-white transition" href="/resources/blog">Blog</Link></li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="fixed bottom-0 inset-x-0 z-40">
          <div className="mx-auto max-w-6xl px-6 py-3 mb-4 rounded-2xl bg-zinc-900/90 backdrop-blur border border-zinc-800 flex items-center justify-between">
            <p className="text-sm text-zinc-300">
              Command Briefing is open this week. Qualification required.
            </p>
            <div className="flex gap-3">
              <Link href="/sovereign-qualification?source=sticky" className="rounded-xl bg-white px-4 py-2 text-black font-semibold hover:opacity-90 transition">
                Qualify Now
              </Link>
              <Link href="/contact" className="rounded-xl border border-zinc-700 px-4 py-2 font-semibold hover:bg-zinc-900 transition">
                Book Briefing
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
