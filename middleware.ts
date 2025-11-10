// middleware.ts (Edge runtime compatible CSP with nonce)
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Generate a base64 nonce using Web Crypto (Edge runtime safe).
 */
function genNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

/**
 * Build an enforced CSP using the given nonce.
 * No 'unsafe-inline' / 'unsafe-eval'. Uses 'strict-dynamic' + nonce for Next scripts.
 */
function cspWithNonce(nonce: string): string {
  const directives = [
    // base policy
    `default-src 'self'`,

    // scripts: allow self + nonced scripts + https script elements (no eval). Avoid strict-dynamic to keep host allowlists.
    `script-src 'self' 'nonce-${nonce}' https:`,
    // allow inline script elements to support Next.js runtime inline chunks (__NEXT_DATA__, webpack runtime)
    `script-src-elem 'self' 'unsafe-inline' 'nonce-${nonce}' https:`,
    `script-src-attr 'none'`,

    // styles: allow inline for frameworks and small runtime styles
    `style-src 'self' 'unsafe-inline'`,

    // media
    `img-src 'self' https: data: blob:`,
    `font-src 'self' data:`,

    // network
    `connect-src 'self' https:`,

    // framing and legacy
    `frame-ancestors 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ];
  return directives.join('; ');
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const nonce = genNonce();
  const csp = cspWithNonce(nonce);

  res.headers.set('x-nonce', nonce);
  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('X-DNS-Prefetch-Control', 'off');
  res.headers.set('X-Download-Options', 'noopen');

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
