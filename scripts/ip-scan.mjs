import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const ROOTS = ['app', 'lib'];
const BANNED = [
  /\b(Stripe|Twilio|Skyetel|AWS|GCP|Azure|Kubernetes|K8s|Docker|Redis|PostgreSQL|MongoDB|Milvus|NVIDIA|GPU|A100|on[- ]prem|self[- ]host|hybrid|uptime|latency|WebSocket|gRPC|TLS|bare metal|data center)\b/i,
  /\b(ms|milliseconds|MOS|requests\/s|RPS|QPS|GBps|TBps)\b/i,
];
const IGNORE_DIRS = new Set(['.next', 'node_modules', '.git', 'analysis']);

function walk(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (IGNORE_DIRS.has(entry)) continue;
      walk(p);
    } else if (s.isFile()) {
      if (!/\.(ts|tsx|md|mjs|js|jsx)$/.test(entry)) continue;
      const txt = readFileSync(p, 'utf8');
      for (const rx of BANNED) {
        if (rx.test(txt)) {
          console.error(`IP-SCAN: banned pattern matched in ${p}`);
          process.exit(1);
        }
      }
    }
  }
}

for (const base of ROOTS) {
  const p = join(ROOT, base);
  try {
    statSync(p);
    walk(p);
  } catch {
    // ignore missing
  }
}
console.log('IP-SCAN: passed');
