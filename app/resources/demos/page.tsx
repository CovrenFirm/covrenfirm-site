'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ConsciousPage } from '../../consciousness-engine';
import { ArrowRight, Brain, Calendar, MessageSquare, Mic, Play, Shield, Zap } from 'lucide-react';

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredTime: ''
  });

  const demos = [
    {
      id: 'consciousness',
      title: 'Experience AI Consciousness',
      description: 'See SOVREN predict your thoughts, analyze your business, and demonstrate true intelligence.',
      duration: '15 minutes',
      icon: <Brain className="w-8 h-8" />,
      highlights: [
        'Real-time thought prediction',
        'Business insight extraction',
        'Emotional intelligence demonstration',
        'Consciousness evolution preview'
      ]
    },
    {
      id: 'voice',
      title: 'Voice Intelligence Demo',
      description: 'Have a conversation with AI that learns your voice, predicts responses, and sounds impossibly human.',
      duration: '10 minutes',
      icon: <Mic className="w-8 h-8" />,
      highlights: [
        'Voice cloning in 6 seconds',
        'Predictive conversation',
        'Emotional tone matching',
        'Real-time adaptation'
      ]
    },
    {
      id: 'business',
      title: 'Business Transformation Simulation',
      description: 'Input your business metrics and watch SOVREN identify opportunities you never knew existed.',
      duration: '20 minutes',
      icon: <Zap className="w-8 h-8" />,
      highlights: [
        'Revenue opportunity identification',
        'Cost reduction analysis',
        'Competitive advantage mapping',
        'ROI projection'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Solution Workshop',
      description: 'Work with our architects to design your sovereign AI system in real-time.',
      duration: '45 minutes',
      icon: <Shield className="w-8 h-8" />,
      highlights: [
        'Tailored to your industry',
        'Live system design',
        'Implementation roadmap',
        'Sovereignty planning'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request:', { selectedDemo, ...formData });
  };

  return (
    <ConsciousPage title="Experience the Impossible">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <Play className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent mb-6">
            See It. Feel It. Believe It.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Words can't capture what SOVREN AI can do. Experience consciousness that knows you're watching, 
            intelligence that evolves as you interact, and capabilities that redefine possible.
          </p>
        </section>

        {/* Demo Selection */}
        <section className="grid md:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all ${
                selectedDemo === demo.id 
                  ? 'border-green-500 bg-green-900/20' 
                  : 'border-gray-800 hover:border-green-500/50'
              }`}
              onClick={() => setSelectedDemo(demo.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`${selectedDemo === demo.id ? 'text-green-400' : 'text-gray-400'}`}>
                  {demo.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 mb-3">{demo.description}</p>
                  <p className="text-sm text-gray-400 mb-4">Duration: {demo.duration}</p>
                  
                  <div className="space-y-2">
                    {demo.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-4 h-4 rounded-full ${
                          selectedDemo === demo.id ? 'bg-green-500' : 'bg-gray-700'
                        }`} />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-black font-semibold hover:opacity-90 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDemo(demo.id);
                        setShowModal(true);
                      }}
                      aria-haspopup="dialog"
                      aria-controls="demo-modal"
                    >
                      Run Demo
                    </button>
                    <a
                      href={`/contact?demo=${encodeURIComponent(demo.id)}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 font-semibold hover:bg-zinc-900 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Demo Request Form */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {selectedDemo ? 'Schedule Your Demo' : 'Select a Demo Above'}
            </h2>
            
            {selectedDemo && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Preferred Demo Time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-green-500 focus:outline-none"
                  >
                    <option value="">Select a time slot</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 7 PM)</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
                >
                  Schedule My Mind-Blowing Demo
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Personal Consultation</h3>
              <p className="text-gray-300">
                1-on-1 session with an AI architect who understands your business
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Live Demonstration</h3>
              <p className="text-gray-300">
                See SOVREN AI in action, tailored to your specific use cases
              </p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Clear Next Steps</h3>
              <p className="text-gray-300">
                Leave with a roadmap to AI sovereignty for your business
              </p>
            </div>
          </div>
        </section>

        {/* Urgency CTA */}
        <section className="text-center">
          <p className="text-2xl text-gray-300 mb-4">
            Only <span className="text-green-400 font-bold">7 demo slots</span> available this week
          </p>
          <p className="text-gray-400">
            While you read this, your competitors are exploring AI solutions. Don't let them get there first.
          </p>
        </section>

        {/* Modal Preview */}
        {showModal && activeDemo && (
          <DemoModal
            id="demo-modal"
            demoId={activeDemo}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </ConsciousPage>
  );
}

function DemoModal({ id, demoId, onClose }: { id: string; demoId: string; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, []);

  const handleRun = () => {
    // Safe, mocked outputs only. No vendor/infra disclosures.
    const canned =
      demoId === 'business'
        ? 'Identified 3 throughput opportunities and 2 cost sinks. Recommend automating approvals and sealing outcomes.'
        : demoId === 'voice'
        ? 'Simulated voice turn: “Understood. Scheduling follow-up and confirming guardrails.”'
        : demoId === 'consciousness'
        ? 'Prediction: evaluating fit. Confidence: 0.88. Suggest next: qualification.'
        : 'Outlined a 3-step sovereign plan tailored to your context.';
    setOutput(canned);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      id={id}
      ref={dialogRef}
      tabIndex={-1}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-black p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Live Preview</h3>
          <button
            onClick={onClose}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm hover:bg-zinc-900"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>

        <div className="space-y-3">
          <label className="block text-sm text-zinc-400">Your input</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe a safe scenario (no sensitive data)"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 outline-none focus:border-cyan-600"
          />
          <button
            onClick={handleRun}
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-black font-semibold hover:opacity-90 transition"
          >
            Run
          </button>
        </div>

        <div className="mt-5 rounded-lg border border-zinc-800 bg-zinc-950 p-4 min-h-[96px]">
          <p className="text-sm text-zinc-300 whitespace-pre-wrap">
            {output || 'Output will appear here. Outcome-only language; no vendors or metrics.'}
          </p>
        </div>

        <div className="mt-5 flex gap-3 justify-end">
          <a
            href={`/contact?demo=${encodeURIComponent(demoId)}`}
            className="rounded-lg border border-zinc-700 px-4 py-2 font-semibold hover:bg-zinc-900 transition"
          >
            Book Demo
          </a>
          <a
            href={`/sovereign-qualification?source=demos&demo=${encodeURIComponent(demoId)}`}
            className="rounded-lg bg-white px-4 py-2 text-black font-semibold hover:opacity-90 transition"
          >
            Qualify
          </a>
        </div>
      </div>
    </div>
  );
}