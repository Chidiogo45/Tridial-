import React from 'react';
import { PageId } from '../types';
import { CheckCircle2, Clock, Compass, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface RoadmapPageProps {
  onNavigate: (page: PageId) => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B0F1A]">
      {/* Header */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Engineering Milestones
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Product Roadmap.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Our engineering progress and technical milestones, laid out plainly. We publish our current capabilities, active engineering sprints, and long-term infrastructure direction.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Column Plain Text-Forward Roadmap Layout */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Current Platform */}
            <div className="p-8 rounded-2xl bg-[#F7F9FC] border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF]" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-900">
                      Current Platform
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    Production Ready
                  </span>
                </div>

                <div className="mt-6 text-xs text-slate-600 font-mono">
                  What is functional and operating in live pilots today:
                </div>

                <ul className="mt-4 space-y-4 text-xs text-slate-700">
                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      <span>Synchronous gRPC & REST Ingestion</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      Sub-35ms p99 roundtrip evaluation with zero PII retention at ingress points.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      <span>4-Hop In-Memory Subgraph Mapping</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      Real-time entity correlation across accounts, device hashes, IP subnets, and transfer velocity.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      <span>Coordinated Mule Ring Detection</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      Automatic isolation of cyclic transfers, funnel accounts, and multi-hop velocity evasion patterns.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      <span>Plain-Language Audit Attribution</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      Human-readable factor breakdowns exported with each risk evaluation for compliance due diligence.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                SLA: 99.99% Availability
              </div>
            </div>

            {/* Column 2: Ongoing Improvements */}
            <div className="p-8 rounded-2xl bg-white border border-[#2F5FFF]/30 shadow-lg shadow-[#2F5FFF]/5 flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#2F5FFF] text-white">
                Active Sprint
              </div>

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2F5FFF] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-900">
                      Ongoing Improvements
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#2F5FFF]">
                    Near-Term Work
                  </span>
                </div>

                <div className="mt-6 text-xs text-slate-600 font-mono">
                  Currently undergoing engineering testing and validation:
                </div>

                <ul className="mt-4 space-y-4 text-xs text-slate-700">
                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2F5FFF]" />
                      <span>Native ISO 20022 XML Message Parsing</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      Direct ingestion of pacs.008, pacs.002, and camt.053 message streams without external middleware.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2F5FFF]" />
                      <span>Zero-Knowledge Cross-Bank Network Signals</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      Cryptographic private set intersection to detect cross-institution mule accounts without sharing customer data.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2F5FFF]" />
                      <span>Automated SAR Export Templates</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      One-click standardized Suspicious Activity Report XML generation populated with graph lineage proofs.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2F5FFF]" />
                      <span>Adaptive Latency Throttling</span>
                    </div>
                    <p className="text-slate-500 pl-5">
                      Dynamic traversal depth scaling (from 4 down to 2 hops) during sudden 10x transaction volume spikes.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] font-mono text-[#2F5FFF]">
                Target Deployment: Q4 2026
              </div>
            </div>

            {/* Column 3: Product Direction */}
            <div className="p-8 rounded-2xl bg-[#0C1220] border border-slate-800 text-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-white">
                      Product Direction
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Where We Are Headed
                  </span>
                </div>

                <div className="mt-6 text-xs text-slate-400 font-mono">
                  Long-term structural infrastructure objectives:
                </div>

                <ul className="mt-4 space-y-4 text-xs text-slate-300">
                  <li className="space-y-1">
                    <div className="font-semibold text-white">
                      Decentralized Consortium Intelligence
                    </div>
                    <p className="text-slate-400">
                      Federated learning across sovereign banking jurisdictions to train models on global fraud syndicates while respecting strict national data borders.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-white">
                      Hardware Enclave (Confidential VM) Execution
                    </div>
                    <p className="text-slate-400">
                      Running inference inside AWS Nitro / GCP Confidential Computing enclaves to guarantee cryptographic attestation for sovereign central banks.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-white">
                      Autonomous Policy Synthesis
                    </div>
                    <p className="text-slate-400">
                      Self-calibrating thresholds that continually adjust risk weighting as adversaries alter their transfer timing and device emulation tools.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                Architectural Horizons
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#F7F9FC] border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-serif font-semibold text-slate-900">
            Have specific architectural requirements?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm">
            Our engineering team regularly incorporates partner requirements into our active sprint cycles.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Discuss Pipeline Integration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
