export type SovrenTier = {
  id: 'solo' | 'professional' | 'business';
  name: string;
  pricePerMonth: number;
  executivesCount: string;
  summaryPoints: string[];
  cta: { label: string; href: string };
  badge?: string;
  highlight?: boolean;
};

export const SOVREN_PRICING: SovrenTier[] = [
  {
    id: 'solo',
    name: 'Solo',
    pricePerMonth: 199,
    executivesCount: '2–3 AI executives',
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
    pricePerMonth: 349,
    executivesCount: '5–6 AI executives',
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
    pricePerMonth: 1199,
    executivesCount: '9–10 AI executives',
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
    'Add one additional AI executive beyond tier limits',
    'Burst capacity for high-demand periods',
    'Prioritized execution windows',
    'Outcomes-only framing; no vendor disclosures',
  ],
  cta: { label: 'Request Power Slots', href: '/sovereign-qualification?source=power-slots' },
};