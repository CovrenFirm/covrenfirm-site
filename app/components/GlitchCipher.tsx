"use client";

import { ReactNode } from 'react';

export function GlitchCipher({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="absolute inset-0 select-none opacity-0 hover:opacity-100 transition-opacity">
        <span className="block text-cyan-400 mix-blend-screen" style={{ filter: 'blur(0.5px)' }}>{children}</span>
      </span>
    </span>
  );
}
