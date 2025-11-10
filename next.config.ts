// next.config.ts
import type { NextConfig } from 'next';

/**
 * Security headers
 * - HSTS assumes you’re serving via HTTPS. If you have subdomains you want strict, add ; includeSubDomains
 */
const securityHeaders = [
  { key: 'Referrer-Policy', value: 'no-referrer' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {\n    optimizeCss: true, // keeps Critters effective\n  },\n  eslint: { ignoreDuringBuilds: true },\n
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
