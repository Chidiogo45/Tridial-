import React from 'react';
import { PageId } from '../types';
import { ArrowRight, ShieldCheck, GitMerge, Layers, Globe2, Building } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-transparent">
      {/* Header */}
      <section className="text-white py-16 sm:py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Mission & Foundation
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Why Tridial Exists.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We built Tridial because modern payment rails operate in milliseconds, but fraud detection still relies on static conditional rules designed thirty years ago.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Note / Core Thesis (Long-form typography) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
          
          <div className="border-l-2 border-[#2F5FFF] pl-6 py-2">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 leading-snug">
              A note from our engineering team: On the necessity of transaction graphs for global financial settlement.
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Over the last decade, global financial infrastructure evolved rapidly. Instant payment rails, open banking APIs, and frictionless onboarding enabled money to move across borders in seconds.
            </p>
            
            <p>
              However, the defensive tooling used to protect these transactions remained stagnant. Most fraud platforms continue to evaluate payments as isolated rows in a relational database:
            </p>

            <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs font-mono text-xs text-slate-800 space-y-1">
              <div>IF transaction_amount &gt; $5,000 AND card_country != ip_country</div>
              <div>THEN flag_for_review</div>
            </div>

            <p>
              Organized fraud syndicates know these rules intimately. They do not send single large transactions from obvious IP addresses. Instead, they operate distributed networks: fifty synthetic identities, each moving $400 through ten intermediate mule accounts, hopping across institutions within two minutes.
            </p>

            <p>
              Evaluated in isolation, every single one of those transactions looks harmless. It is only when you look at the <strong>graph of connections</strong>—the shared emulator fingerprints, the common IP subnets, and the velocity of capital hops across multiple hops—that the attack becomes obvious.
            </p>

            <p>
              Until now, graph databases were too slow to run inline. A multi-hop graph query traditionally took hundreds of milliseconds, making it impossible to evaluate in-flight before credit card settlement or instant bank clearing.
            </p>

            <p className="font-semibold text-slate-900">
              We engineered Tridial to solve this exact engineering challenge.
            </p>

            <p>
              By utilizing custom in-memory graph topologies, lockless memory structures, and lightweight graph neural network embeddings, Tridial performs recursive 4-hop entity correlation in under 35 milliseconds.
            </p>

            <p>
              Financial institutions can finally intercept coordinated attacks before transactions settle—without replacing their core ledgers, and without drowning their risk teams in false positives.
            </p>
          </div>

          {/* Institutional Principles */}
          <div className="pt-8 border-t border-slate-200/80 space-y-4">
            <h3 className="font-serif font-semibold text-lg text-slate-900">
              Our Core Operating Principles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-1">
                <strong className="text-slate-900 block font-medium">1. Absolute Explainability</strong>
                <p className="text-slate-600">
                  Black-box predictions are unacceptable in regulated banking. Every flag includes plain-language reasoning and auditable graph lineage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-1">
                <strong className="text-slate-900 block font-medium">2. Zero Raw PII Storage</strong>
                <p className="text-slate-600">
                  Our graph models evaluate cryptographically pseudonymized tokens. Personal data is never stored at our inference edges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-1">
                <strong className="text-slate-900 block font-medium">3. Deterministic Performance</strong>
                <p className="text-slate-600">
                  Latency budgets are strict. We guarantee sub-35ms evaluation so checkout conversion rates are never compromised.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-1">
                <strong className="text-slate-900 block font-medium">4. Institution-Centric Authority</strong>
                <p className="text-slate-600">
                  Tridial supplies intelligence, but final decision authority and risk policy configurations remain in the hands of the customer.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200/80 flex items-center justify-between">
            <div>
              <div className="font-serif font-semibold text-slate-900 text-sm">
                Tridial Systems Engineering
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Distributed Graph Infrastructure for Global Finance
              </div>
            </div>

            <button
              onClick={() => onNavigate('quote')}
              className="px-5 py-2.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#2F5FFF]/20"
            >
              <span>Connect with Our Risk Engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
