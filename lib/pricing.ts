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
    highlight: True,
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
};