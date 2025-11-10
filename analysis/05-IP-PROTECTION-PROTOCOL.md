# IP Protection Protocol
Lead: Grok Code | Reviewers: GPT-5 + Codex

## Immediate Actions Required
- Verify all pages use outcome-only language (no vendors, infra, or precise metrics).
- Keep CSP single-sourced in `middleware.ts` with nonce (no CSP in `next.config.ts`).
- Establish automated IP-lint to block risky terms in future commits.
- Ensure all forms that may lead to SMS outreach include explicit opt-in consent (added on Contact).

## Content Redaction Implementation
1) Replace deployment or ownership models with outcomes-only language.
2) Replace vendor names with “industry-standard” / “strategic non‑AI services” phrasing.
3) Replace exact metrics (ms, MOS, RPS) with qualitative ranges (“real-time”, “enterprise-grade”).
4) Remove hardware details (GPU/CPU/RAM) and orchestration/networking terms.
5) Avoid any “how it works” narratives; stick to business outcomes.

Approved replacements:
- “On‑premise / cloud / hybrid” → “Sovereign deployment model”
- “Stripe / Twilio / Skyetel” → “Industry‑standard payment/telephony infrastructure” (only if required contextually)
- “GPU / MIG / A100 / cpuset” → “Dedicated performance allocation”
- “Sub‑200ms / MOS 4.85” → “Real‑time, enterprise‑grade quality”

## Code Obfuscation Strategy
- Do not reference provider names, infra, or hardware in code comments or UI copy.
- Keep infrastructure/CDN/domain details out of public repos and environment‑agnostic.
- Use generic adapter interfaces in public code; implementation in private modules.

## Ongoing Monitoring System
- Pre-commit IP-lint: block patterns
  - /(Stripe|Twilio|Skyetel|AWS|GCP|Azure|Kubernetes|K8s|Docker|Redis|PostgreSQL|MongoDB|Milvus|NVIDIA|GPU|A100|on[- ]prem|self[- ]host|hybrid|uptime|latency|WebSocket|gRPC|TLS|bare metal|data center)/i
  - /\\b(ms|milliseconds|MOS|requests\\/s|RPS|QPS|GBps|TBps)\\b/i
- Monthly manual audit checklist (content + code) using the same patterns.

## Team Training Requirements
- Outcomes over implementations; never reveal HOW, only WHAT it delivers.
- No vendor logos or names on site without explicit approval + legal.
- Use approved IP lexicon: “enterprise‑grade sovereign infrastructure”, “complete data sovereignty”, “strategic non‑AI services”.


