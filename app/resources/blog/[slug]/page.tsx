// NO "use client" here — this is a Server Component

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConsciousPage } from '@/app/consciousness-engine';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

type RouteParams = { slug: string };

// Simple in-memory post database. Replace with your CMS later.
const POSTS: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    paragraphs: string[];
  }
> = {
  'ai-sovereignty-manifesto': {
    title: 'The AI Sovereignty Manifesto: Why SMBs Must Own Their Intelligence',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'AI Strategy',
    paragraphs: [
      'Ownership beats access. If your business rents its intelligence, you’re financing your own dependency.',
      'Sovereign AI means your data, your policies, your outcomes—without handing leverage to a vendor.',
      'The practical path: pick one high-leverage workflow, wire strict guardrails, measure throughput, iterate.',
    ],
  },
  'compound-intelligence-explained': {
    title: 'Compound Intelligence: The Unfair Advantage Your Competitors Fear',
    date: 'January 10, 2025',
    readTime: '6 min read',
    category: 'Technology',
    paragraphs: [
      'Static prompts are dead. Systems that learn across cycles compound advantages daily.',
      'Focus on closing loops: observe → decide → act → measure → adjust. Repeat.',
      'Throughput, not theatrics. Track cycle time reduction and success rate, then scale.',
    ],
  },
  'smb-ai-revolution': {
    title: 'David vs Goliath: How SMBs Are Using AI to Topple Industry Giants',
    date: 'January 5, 2025',
    readTime: '10 min read',
    category: 'Case Studies',
    paragraphs: [
      'Small teams win by eliminating drag. Sovereign operators close gaps bigger orgs ignore.',
      'The pattern: map the choke point, automate decisions with guardrails, ship fast.',
      'Execution speed > headcount. Precision beats bureaucracy every time.',
    ],
  },
  'true-cost-ai-dependency': {
    title: "The Hidden Cost of AI Dependency: What Vendors Don't Want You to Know",
    date: 'December 28, 2024',
    readTime: '7 min read',
    category: 'Business Strategy',
    paragraphs: [
      'Subscription fees are the visible cost. The hidden cost is strategic leakage.',
      'When your ops depend on someone else’s stack, you trade control for convenience.',
      'Own the critical path. Keep your edge where it matters.',
    ],
  },
  'ai-implementation-guide': {
    title: "The SMB Owner's Guide to AI Implementation (Without the BS)",
    date: 'December 20, 2024',
    readTime: '12 min read',
    category: 'Guides',
    paragraphs: [
      'Start narrow. One workflow, one KPI, one owner. Ship in days, not months.',
      'Instrument everything. If you can’t measure it, you can’t improve it.',
      'Security and approvals first. Then speed. Never the other way around.',
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  try {
    const { slug } = await params;

    const post = POSTS[slug];
    if (!post) {
      notFound();
    }

    return (
      <ConsciousPage title={post.title}>
        <article className="max-w-3xl mx-auto px-6 py-16">
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <Link href="/resources/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="inline-flex items-center gap-2 text-zinc-500 text-sm select-none" title="Sharing available in app UI">
              <Share2 className="w-4 h-4" />
              Share
            </span>
          </div>

          {/* Header */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">{post.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-xs">{post.category}</span>
          </div>

          {/* Body */}
          <div className="prose prose-invert prose-zinc mt-10">
            {post.paragraphs.map((p, i) => (
              <p key={i} className="text-zinc-200 leading-7">
                {p}
              </p>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 border-t border-zinc-800 pt-8">
            <h3 className="text-xl font-semibold text-white mb-3">Want the edge, not the hype?</h3>
            <p className="text-zinc-300 mb-6">
              Book the Command Briefing. We’ll map your fastest path to throughput—no vendor theatre, just execution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90 transition"
            >
              Book the Command Briefing
            </Link>
          </div>
        </article>
      </ConsciousPage>
    );
  } catch {
    notFound();
  }
}

