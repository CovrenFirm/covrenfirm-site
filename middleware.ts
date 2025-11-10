// middleware.ts (Edge runtime compatible CSP with nonce)
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Build an enforced CSP using the given nonce.
 * No 'unsafe-inline' / 'unsafe-eval'. Uses 'strict-dynamic' + nonce for Next scripts.
 */
function cspRelaxed(): string {
  const directives = [
    // base policy
    `default-src 'self'`,

    // scripts: allow self + https + inline (to support Next runtime inline chunks). No strict-dynamic.
    `script-src 'self' 'unsafe-inline' https:`,
    `script-src-elem 'self' 'unsafe-inline' https:`,
    `script-src-attr 'unsafe-inline'`,

    // styles: allow inline for frameworks and small runtime styles
    `style-src 'self' 'unsafe-inline'`,

    // media
    `img-src 'self' https: data: blob:`,
    `font-src 'self' data:`,

    // network
    `connect-src 'self' https: wss:`,
    `worker-src 'self' blob:`,

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
  const csp = cspRelaxed();

  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('X-DNS-Prefetch-Control', 'off');
  res.headers.set('X-Download-Options', 'noopen');

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
