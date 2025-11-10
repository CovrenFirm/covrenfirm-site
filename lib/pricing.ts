<<<<<<< HEAD
export type PricingTier = {
  id: 'solo' | 'professional' | 'business';
  name: string;
  monthlyPrice: number;
  highlight?: boolean;
  badge?: string | null;
  summaryPoints: string[];
  cta: { label: string; href: string };
};

export type AddOn = {
  id: 'power-slot';
  name: string;
  monthlyPrice: number;
  descriptionPoints: string[];
  cta: { label: string; href: string };
};

export const SOVREN_PRICING: PricingTier[] = [
  {
    id: 'solo',
    name: 'SOLO — $199/month',
    monthlyPrice: 199,
    summaryPoints: [
      'Executive Count: 2–3 AI executives',
      'Target Market: Solopreneurs, micro-businesses, side hustles',
      'Key Value: AI Receptionist + 1–2 C‑Suite roles (typically CFO, CMO, or COO based on business need)',
      'Use Case: Single‑founder operations needing professional delegation without hiring humans',
    ],
    cta: { label: 'Apply for SOLO', href: '/services/sovren-ai/sovereign-qualification?tier=solo' },
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL — $349/month',
    monthlyPrice: 349,
    highlight: true,
    badge: 'Best Value',
    summaryPoints: [
      'Executive Count: 5–6 AI executives',
      'Target Market: Small businesses, established consultancies, agencies',
      'Key Value: AI Receptionist + full core C‑Suite (CFO, CMO, COO, CTO, CLO)',
      'Use Case: Growth-stage companies requiring multi-functional executive support for internal strategy + external customer/vendor interactions',
    ],
    cta: {
      label: 'Apply for PROFESSIONAL',
      href: '/services/sovren-ai/sovereign-qualification?tier=professional',
    },
  },
  {
    id: 'business',
    name: 'BUSINESS — $1,199/month',
    monthlyPrice: 1199,
    summaryPoints: [
      'Executive Count: 9–10 AI executives',
      'Target Market: SMBs with complex ops, multi-department teams',
      'Key Value: AI Receptionist + extended Shadow Board (core C‑Suite + CHRO, CSO, CIO, CPO)',
      'Use Case: Mature businesses needing full executive bench strength for both strategic planning and operational execution',
    ],
    cta: { label: 'Apply for BUSINESS', href: '/services/sovren-ai/sovereign-qualification?tier=business' },
  },
];

export const POWER_SLOT_ADDON: AddOn = {
  id: 'power-slot',
  name: 'Power Slot — $990/month per slot',
  monthlyPrice: 990,
  descriptionPoints: [
    'Purpose: Add one additional AI executive beyond tier limits',
    'Dedicated performance allocation for sustained workload',
    'Typical Buyers: BUSINESS-tier subscribers requiring specialized roles or geographically distributed executive coverage',
  ],
  cta: { label: 'Discuss Power Slots', href: '/contact' },
=======
export type SovrenTier = {
  id: 'solo' | 'professional' | 'business';
  name: string;
  summaryPoints: string[];
  cta: { label: string; href: string };
  badge?: string;
  highlight?: boolean;
};

export const SOVREN_PRICING: SovrenTier[] = [
  {
    id: 'solo',
    name: 'Solo',
    summaryPoints: [
      'One primary operator',
      'Guardrails and approvals',
      'Proof-as-UI visibility',
    ],
    cta: { label: 'Select Solo', href: '/sovereign-qualification?tier=solo' },
  },
  {
    id: 'professional',
    name: 'Professional',
    summaryPoints: [
      'Multiple operators',
      'Expanded execution coverage',
      'Throughput reporting',
    ],
    badge: 'Most Popular',
    highlight: true,
    cta: { label: 'Select Professional', href: '/sovereign-qualification?tier=professional' },
  },
  {
    id: 'business',
    name: 'Business',
    summaryPoints: [
      'C-suite operator coverage',
      'Custom approvals and policies',
      'Executive-grade observability',
    ],
    cta: { label: 'Select Business', href: '/sovereign-qualification?tier=business' },
  },
];

export const POWER_SLOT_ADDON = {
  name: 'Power Slots',
  descriptionPoints: [
    'Burst capacity for high-demand periods',
    'Prioritized execution windows',
    'No vendor disclosures; outcomes only',
  ],
  cta: { label: 'Request Power Slots', href: '/sovereign-qualification?source=power-slots' },
>>>>>>> b4e8430b (Fix blog 404/SSR; footer Links+padding; About inline cost note; Demos modal+CTAs; homepage gradients; add pricing constants)
};


