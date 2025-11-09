// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

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
        {children}
        <div className="fixed bottom-0 inset-x-0 z-40">
          <div className="mx-auto max-w-6xl px-6 py-3 mb-4 rounded-2xl bg-zinc-900/90 backdrop-blur border border-zinc-800 flex items-center justify-between">
            <p className="text-sm text-zinc-300">
              Command Briefing is open this week. Qualification required.
            </p>
            <div className="flex gap-3">
              <a href="/sovereign-qualification?source=sticky" className="rounded-xl bg-white px-4 py-2 text-black font-semibold hover:opacity-90 transition">
                Qualify Now
              </a>
              <a href="/contact" className="rounded-xl border border-zinc-700 px-4 py-2 font-semibold hover:bg-zinc-900 transition">
                Book Briefing
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
