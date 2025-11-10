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
      'Ownership beats access. If your business rents its intelligence, you\'re financing your own dependency.',
      'Every month, thousands of SMBs pay subscription fees to AI vendors, funding the very systems that will eventually replace their competitive advantages. This isn\'t speculation—it\'s the business model. When you rent intelligence, you\'re training their models with your innovations, your workflows, your edge.',
      'Sovereign AI means your data, your policies, your outcomes—without handing leverage to a vendor. It means complete control over what your AI knows, who it talks to, and how it executes. Most importantly, it means your competitive advantages stay yours.',
      'The hidden cost of dependency isn\'t just the monthly fee. It\'s strategic leakage. Every prompt you send, every workflow you automate, every decision you delegate—it all flows into vendor systems. Your proprietary processes become training data. Your unique approaches become commoditized features. Your edge becomes their product.',
      'Consider the practical path: pick one high-leverage workflow, wire strict guardrails, measure throughput, iterate. Start with a single process that creates measurable value—customer onboarding, lead qualification, invoice processing. Build it on infrastructure you control. Measure cycle time reduction, error rates, cost per transaction. Then scale.',
      'The vendors will tell you that sovereignty is expensive, complex, unnecessary. They\'re wrong. Modern AI infrastructure is accessible. The complexity is in the vendor lock-in, not the technology. The real question isn\'t whether you can afford sovereignty—it\'s whether you can afford dependency.',
      'Your competitors are already moving. The SMBs winning in 2025 aren\'t the ones with the biggest AI budgets. They\'re the ones with the most control. They own their intelligence, they own their data, they own their outcomes. They\'re building compound advantages that grow daily, not renting capabilities that commoditize monthly.',
      'The choice is binary: own your intelligence or fund your obsolescence. There\'s no middle ground. Every subscription payment is a vote for dependency. Every sovereign deployment is a vote for control. Which future are you building?',
    ],
  },
  'compound-intelligence-explained': {
    title: 'Compound Intelligence: The Unfair Advantage Your Competitors Fear',
    date: 'January 10, 2025',
    readTime: '6 min read',
    category: 'Technology',
    paragraphs: [
      'Static prompts are dead. Systems that learn across cycles compound advantages daily.',
      'Most AI implementations are glorified chatbots—same inputs, same outputs, zero improvement over time. They\'re expensive automation, not intelligence. Real AI compounds. Every interaction makes it smarter. Every cycle reduces friction. Every iteration increases throughput.',
      'The difference is in the loops. Static AI executes commands. Compound intelligence closes loops: observe → decide → act → measure → adjust. Repeat. Each cycle refines the model. Each iteration improves outcomes. Each day creates a larger gap between you and competitors using static systems.',
      'Consider a customer support operator. Static AI answers the same questions the same way, forever. Compound intelligence learns from every interaction. It identifies patterns in customer issues. It refines response quality. It routes complex cases faster. It reduces resolution time by 15% in month one, 30% by month three, 50% by month six. That\'s compound intelligence.',
      'The math is simple: if your AI improves 2% per week, you\'re 2.7x better after a year. If your competitor\'s static AI stays flat, the gap widens daily. After 12 months, you\'re not just faster—you\'re operating in a different category.',
      'Focus on closing loops: observe → decide → act → measure → adjust. Repeat. Throughput, not theatrics. Track cycle time reduction and success rate, then scale. The systems that compound fastest win. The ones that stay static lose.',
    ],
  },
  'smb-ai-revolution': {
    title: 'David vs Goliath: How SMBs Are Using AI to Topple Industry Giants',
    date: 'January 5, 2025',
    readTime: '10 min read',
    category: 'Case Studies',
    paragraphs: [
      'Small teams win by eliminating drag. Sovereign operators close gaps bigger orgs ignore.',
      'A 12-person consultancy just closed a $2M deal that a 200-person agency spent six months chasing. How? Their AI CFO identified the decision-maker, mapped the approval process, and executed a precision outreach campaign while the agency was still in committee meetings.',
      'The pattern is consistent: map the choke point, automate decisions with guardrails, ship fast. Big companies have layers. Small companies have operators. When those operators are AI executives that never sleep, never forget, and never make emotional decisions, the advantage compounds.',
      'Consider a 5-person SaaS company competing against Salesforce for enterprise deals. Impossible? Not with sovereign AI. Their AI CMO analyzed 10,000 LinkedIn profiles to identify the exact decision-makers at target accounts. Their AI CLO drafted contracts that matched enterprise legal requirements. Their AI CFO structured pricing that beat Salesforce by 40% while maintaining margins. They closed three enterprise deals in Q4. Salesforce closed zero in the same accounts.',
      'The secret isn\'t the AI—it\'s the sovereignty. Big companies use vendor AI that\'s slow, generic, and leaky. Small companies use sovereign AI that\'s fast, precise, and private. When you own your intelligence, you can move at startup speed with enterprise precision.',
      'Execution speed > headcount. Precision beats bureaucracy every time. A 10-person team with sovereign AI operators can out-execute a 100-person team with vendor dependencies. The math is brutal: one AI operator handles 50 workflows simultaneously. One human handles one workflow at a time. Scale that across a full C-suite, and small becomes unstoppable.',
      'The giants are waking up, but they\'re too late. Their vendor contracts lock them into slow, generic AI. Their committees require months to approve changes. Their legal teams block innovation. Meanwhile, SMBs with sovereign AI are moving at light speed, closing deals, automating operations, and building advantages that compound daily.',
      'The revolution isn\'t coming. It\'s here. The question isn\'t whether AI will level the playing field—it\'s whether you\'ll be the David or the Goliath.',
    ],
  },
  'true-cost-ai-dependency': {
    title: 'The Hidden Cost of AI Dependency: What Vendors Don\'t Want You to Know',
    date: 'December 28, 2024',
    readTime: '7 min read',
    category: 'Business Strategy',
    paragraphs: [
      'Subscription fees are the visible cost. The hidden cost is strategic leakage.',
      'You see the $99/month charge. You don\'t see your proprietary workflows becoming training data. You don\'t see your unique processes being commoditized. You don\'t see your competitive advantages flowing into vendor systems, then being sold back to your competitors.',
      'When your ops depend on someone else\'s stack, you trade control for convenience. That trade seems reasonable until the vendor raises prices, changes terms, or shuts down features. Then you\'re locked in, your workflows are broken, and your edge is gone.',
      'Consider the real math: a $200/month AI subscription seems cheap. But if that AI is handling your customer onboarding, your lead qualification, your contract review—you\'re paying $200 to give a vendor complete visibility into your operations. Every prompt reveals your processes. Every workflow exposes your methods. Every success becomes their case study.',
      'The vendors know this. That\'s why they offer "free tiers" and "low-cost plans." They\'re not selling AI—they\'re buying your intelligence. Your workflows become their training data. Your innovations become their features. Your edge becomes their product.',
      'Own the critical path. Keep your edge where it matters. If customer onboarding is your differentiator, own that AI. If contract negotiation is your advantage, own that AI. If lead qualification drives your revenue, own that AI. Don\'t rent the systems that define your competitive position.',
      'The choice is clear: pay vendors to commoditize your advantages, or own the intelligence that creates them. One path leads to dependency. The other leads to sovereignty. Which future are you building?',
    ],
  },
  'ai-implementation-guide': {
    title: 'The SMB Owner\'s Guide to AI Implementation (Without the BS)',
    date: 'December 20, 2024',
    readTime: '12 min read',
    category: 'Guides',
    paragraphs: [
      'Start narrow. One workflow, one KPI, one owner. Ship in days, not months.',
      'Most AI implementations fail because they try to do everything at once. Don\'t. Pick one process that creates measurable value. Customer onboarding. Lead qualification. Invoice processing. One thing. Make it perfect. Then expand.',
      'The framework is simple: identify the choke point, automate the decisions, measure the outcomes. If customer onboarding takes 48 hours, automate it to 2 hours. If lead qualification has a 20% conversion rate, automate it to 40%. If invoice processing costs $50 per invoice, automate it to $5. One workflow. One metric. One win.',
      'Instrument everything. If you can\'t measure it, you can\'t improve it. Track cycle time. Track error rates. Track cost per transaction. Track customer satisfaction. Every metric tells a story. Every story reveals an opportunity. Every opportunity compounds into an advantage.',
      'Security and approvals first. Then speed. Never the other way around. Build guardrails before you build workflows. Set policies before you set processes. Define controls before you define capabilities. Speed without security is just fast failure.',
      'The practical path: Week 1, map the workflow. Week 2, wire the guardrails. Week 3, deploy the operator. Week 4, measure and iterate. One month from start to scale. Not one year. Not one quarter. One month.',
      'Common mistakes: trying to automate everything, skipping guardrails for speed, measuring vanity metrics instead of throughput, building on vendor infrastructure instead of sovereign systems. Avoid these, and you\'re ahead of 90% of implementations.',
      'The ROI math: if a workflow takes 10 hours per week and costs $50/hour, automation saves $500/week. That\'s $26K per year. If the AI operator costs $200/month, you\'re net positive in month one. Scale that across five workflows, and you\'re saving $130K annually. That\'s not cost reduction—that\'s competitive advantage.',
      'Your competitors are reading vendor marketing. You\'re reading this. That\'s already an edge. Now implement it. Start narrow. Ship fast. Measure everything. Own your intelligence. The rest follows.',
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

