import React, { useState } from 'react';
import { PageId } from '../types';
import { ArrowRight, Check, X, Layers, Cpu, GitBranch, Shield, Zap, Database, ArrowRightLeft } from 'lucide-react';

interface PlatformPageProps {
  onNavigate: (page: PageId) => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'graph-engine' | 'data-flow'>('data-flow');

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B0F1A]">
      {/* Platform Header */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Core Engine Architecture
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Transaction-Graph Modeling Built for In-Flight Settlement.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tridial ingests continuous transaction streams, dynamically links entities into a live in-memory property graph, and evaluates structural fraud topologies before funds leave your institution.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Data-Flow Visual Section */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
              End-to-End System Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mt-2">
              From Event Egress to Actionable Decision
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Tridial deploys as a synchronous inline filter or asynchronous parallel webhook listener, operating in under 35 milliseconds.
            </p>
          </div>

          {/* Data-flow 4-block horizontal diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            {/* Stage 1 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#2F5FFF] font-semibold pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>STAGE 01</span>
                  <span>INGEST</span>
                </div>
                <h3 className="font-serif font-semibold text-base text-slate-900 mt-3">
                  Your Transaction Pipeline
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Sends raw payload (account IDs, device tokens, IP, payment amount, timestamp) via single REST or gRPC endpoint.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                Protobuf / JSON schema
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-6 rounded-xl bg-[#0F1626] border border-slate-800 text-white shadow-md relative flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#2DD4BF] font-semibold pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>STAGE 02</span>
                  <span>CORRELATE</span>
                </div>
                <h3 className="font-serif font-semibold text-base text-white mt-3">
                  Tridial's Graph Engine
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Maps transaction into a live distributed subgraph. Traverses 4 hops to isolate cyclic transfers, device reuse, and proxy hops.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-[#2DD4BF]">
                In-Memory Traversal (12ms)
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-amber-600 font-semibold pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>STAGE 03</span>
                  <span>INFERENCE</span>
                </div>
                <h3 className="font-serif font-semibold text-base text-slate-900 mt-3">
                  Risk Scoring Engine
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Calculates topological anomaly probability. Generates explainable factor attribution and risk threshold classifications.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                Score: 0.000 to 1.000
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#2F5FFF] font-semibold pb-2 border-b border-slate-100 flex items-center justify-between">
                  <span>STAGE 04</span>
                  <span>DISPATCH</span>
                </div>
                <h3 className="font-serif font-semibold text-base text-slate-900 mt-3">
                  Your Response System
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Receives decision payload to execute settlement hold, trigger biometric step-up authentication, or allow clearing.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                ALLOW | HOLD | REJECT
              </div>
            </div>

          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between text-xs text-blue-950 font-mono">
            <span>TOTAL ROUNDTRIP SLA: GUARANTEED &lt; 35ms ACROSS 99% OF SAMPLES</span>
            <button
              onClick={() => onNavigate('architecture')}
              className="text-[#2F5FFF] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Explore Interactive Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Mechanism Comparison: Graph Modeling vs Static Rules */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
              The Detection Mechanism
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mt-2">
              Why Static Rules Cannot Stop Coordinated Fraud Rings
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Rules look at row-level fields: amount, merchant category, country of origin. Graph models evaluate connection density, temporal velocity across nodes, and topological distance.
            </p>
          </div>

          {/* Side-by-Side Detailed Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Static Rule-Based Detection */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="font-serif font-semibold text-lg text-slate-900">
                  Static Rule-Based Systems
                </h3>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-rose-700 bg-rose-100">
                  Legacy Paradigm
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Isolated Entity Scope</strong>
                    Evaluates one user or card at a time. Blind to coordinated rings using 30 different accounts with distinct legal names.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Constant Threshold Tuning</strong>
                    Lowering thresholds stops fraud but spikes false positive rates and alienates legitimate users.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Exploitable Blindspots</strong>
                    Adversaries test limits with micro-deposits, learn exact thresholds, and execute just below the trigger line.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Rule Sprawl Maintenance</strong>
                    Institutions accumulate 400+ contradictory rules over 5 years. Testing new rules requires months of regression review.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Tridial Graph Modeling */}
            <div className="p-8 rounded-2xl bg-[#0C1220] border border-slate-800 text-slate-200 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="font-serif font-semibold text-lg text-white">
                  Tridial Graph Modeling
                </h3>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#2DD4BF] bg-[#2DD4BF]/15">
                  Topology-First
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Multi-Entity Recursive Traversal</strong>
                    Connects accounts by shared browser cookies, hardware hashes, proxy subnets, and transfer velocity across 4 hops.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">70% Lower False Positives</strong>
                    Normal user behavior that looks unusual in isolation is verified instantly by healthy historical graph relationships.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Resistant to Threshold Probing</strong>
                    Cannot be bypassed by splitting amounts. Graph density and velocity clustering trigger regardless of individual transaction size.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Zero Rule Sprawl</strong>
                    Single unified graph engine with self-updating relational edge weights and explainable audit vectors.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Callout CTA */}
      <section className="py-16 bg-[#F7F9FC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-serif font-semibold text-slate-900">
            Ready to review technical specifications?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Review the 4 core detection capabilities or schedule a technical walk-through with our systems engineers.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('capabilities')}
              className="px-6 py-3 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              View 4 Capabilities
            </button>
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Request Technical Pilot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
