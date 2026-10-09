import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Plug, 
  GitMerge, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  AlertTriangle,
  Play,
  RotateCcw
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [simulationStage, setSimulationStage] = useState<number>(0);

  const runSimulation = () => {
    setSimulationStage(1);
    setTimeout(() => setSimulationStage(2), 500);
    setTimeout(() => setSimulationStage(3), 1100);
    setTimeout(() => setSimulationStage(4), 1700);
  };

  const resetSimulation = () => {
    setSimulationStage(0);
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B0F1A]">
      {/* Header */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Step-by-Step Architecture
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              How Tridial Intercepts Fraud In-Flight.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A detailed examination of how transactions are ingested, dynamically correlated against historical entity topologies, explained with auditable reasoning, and resolved before rail settlement.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Deep Expanded Steps */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Nav Selector */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-3">
                Workflow Phases
              </div>

              {[
                { num: 1, title: 'Connect', sub: 'Single API, zero core replacement' },
                { num: 2, title: 'Correlate', sub: 'In-memory multi-hop subgraph mapping' },
                { num: 3, title: 'Explain', sub: 'Plain-language confidence & lineage' },
                { num: 4, title: 'Act', sub: 'Pre-settlement hold / block authority' },
              ].map((step) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStepTab(step.num)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    activeStepTab === step.num
                      ? 'bg-[#0E1526] text-white border-[#2F5FFF] shadow-md'
                      : 'bg-[#F7F9FC] text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={activeStepTab === step.num ? 'text-[#2DD4BF]' : 'text-slate-500'}>
                      STEP 0{step.num}
                    </span>
                    <span className="text-[11px] opacity-70">
                      {step.num === 1 ? '3ms' : step.num === 2 ? '14ms' : step.num === 3 ? '8ms' : '4ms'}
                    </span>
                  </div>
                  <div className="font-serif font-semibold text-base mt-1">
                    {step.title}
                  </div>
                  <div className={`text-xs mt-0.5 line-clamp-1 ${activeStepTab === step.num ? 'text-slate-400' : 'text-slate-500'}`}>
                    {step.sub}
                  </div>
                </button>
              ))}

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-6 text-xs text-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Total Pipeline SLA</div>
                End-to-end evaluation completes within <strong>35 milliseconds</strong>, well within typical 100–300ms payment gateway authorization windows.
              </div>
            </div>

            {/* Right Detailed View */}
            <div className="lg:col-span-8 p-8 rounded-2xl bg-[#0C1220] border border-slate-800 text-slate-200 shadow-xl">
              
              {activeStepTab === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2F5FFF]/20 border border-[#2F5FFF]/40 flex items-center justify-center text-[#2F5FFF]">
                        <Plug className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#2DD4BF]">PHASE 01</span>
                        <h2 className="text-2xl font-serif font-semibold text-white">Connect: Single API Integration</h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Plug directly into your existing transaction pipeline via a single synchronous gRPC or REST endpoint. Tridial operates as an intelligent overlay—there is no need to rip and replace existing ledger cores, card management systems, or database schemas.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Implementation Attributes:</h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Standard Protocols:</strong> Connect via HTTPS/mTLS 1.3 or high-volume Kafka event stream subscription.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Minimal Payload Requirements:</strong> Provide sender/receiver accounts, device fingerprint, IP, and transaction amount. PII is tokenized before transmission.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Graceful Fallback Policy:</strong> If response times exceed your strict timeout (e.g. 50ms), fail-open or fail-hold controls operate deterministically.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeStepTab === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2DD4BF]/20 border border-[#2DD4BF]/40 flex items-center justify-center text-[#2DD4BF]">
                        <GitMerge className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#2DD4BF]">PHASE 02</span>
                        <h2 className="text-2xl font-serif font-semibold text-white">Correlate: Live Multi-Hop Graph Mapping</h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Every incoming transaction is projected into an in-memory graph representing relationships between accounts, device hashes, IP subnets, and transfer velocities.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Graph Correlation Mechanics:</h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Recursive Multi-Hop Traversal:</strong> Traverses up to 4 hops in 12ms to identify if Account A is secretly connected to known bad actor Account D via shared hardware or proxy nodes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Temporal Velocity Vectors:</strong> Tracks burst velocity (e.g., funds arriving and leaving within 45 seconds across 3 accounts) that flat rule counters miss.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Synthetic Entity Clustering:</strong> Flags groups of accounts that share identical device attributes or creation timestamps despite different legal identities.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeStepTab === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-amber-400">PHASE 03</span>
                        <h2 className="text-2xl font-serif font-semibold text-white">Explain: Plain-Language Auditable Reasoning</h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Black-box AI models that output an unexplained score create compliance risks. Tridial accompanies every decision with a plain-language breakdown: pattern classification, confidence level, and affected entity paths.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Explainability Specifications:</h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Human-Readable Flag Reason:</strong> Example: <code>"3 linked accounts, 1 device, $2,400 moved in 40s"</code>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>Factor Attribution Weights:</strong> Shows exactly how much device reuse vs velocity contributed to the risk score.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>SAR Generation Readiness:</strong> Exports graph lineage and timestamped logs directly into formats required for Suspicious Activity Reports (SAR).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeStepTab === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2F5FFF]/20 border border-[#2F5FFF]/40 flex items-center justify-center text-[#2F5FFF]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#2F5FFF]">PHASE 04</span>
                        <h2 className="text-2xl font-serif font-semibold text-white">Act: Pre-Settlement Decision Authority</h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Decision authority stays with your team. Tridial provides the intelligence and recommended action in real time so your authorization engine can intercept fraudulent transfers before funds clear.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Action Matrix:</h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>ALLOW:</strong> Risk score below customer threshold; transaction clears without friction.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>HOLD_FOR_REVIEW:</strong> Suspicious multi-hop topology detected; placed in temporary hold queue while notifying fraud ops.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>STEP_UP_AUTH:</strong> Prompts the user for biometric or hardware-key verification before release.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span><strong>BLOCK:</strong> Hard rejection for confirmed syndicate and known mule network patterns.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Interactive Walkthrough Example of a Single Transaction */}
      <section className="py-16 sm:py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
                Live Transaction Simulation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mt-2">
                Walkthrough: Intercepting a Coordinated Mule Hop
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                See how a single transaction moves through the Tridial pipeline in 29 milliseconds.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={runSimulation}
                className="px-4 py-2 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Run Pipeline Simulation</span>
              </button>
              <button
                onClick={resetSimulation}
                className="p-2 rounded-lg bg-white border border-slate-300 text-slate-600 hover:text-slate-900 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Simulation Timeline Container */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Event 1 */}
              <div className={`p-4 rounded-xl border transition-all ${
                simulationStage >= 1 ? 'border-[#2F5FFF] bg-blue-50/50' : 'border-slate-200 bg-slate-50 opacity-60'
              }`}>
                <div className="text-[11px] font-mono text-slate-500 flex justify-between">
                  <span>T + 0ms</span>
                  <span>INGEST</span>
                </div>
                <div className="font-semibold text-xs sm:text-sm text-slate-900 mt-2">
                  Txn Submitted
                </div>
                <div className="text-xs text-slate-600 mt-1 font-mono">
                  Acct #8491-B → Acct #3021-M ($800.00)
                </div>
                <div className="mt-3 text-[11px] text-slate-500">
                  Payload received via gRPC API from customer gateway.
                </div>
              </div>

              {/* Event 2 */}
              <div className={`p-4 rounded-xl border transition-all ${
                simulationStage >= 2 ? 'border-[#2DD4BF] bg-teal-50/50' : 'border-slate-200 bg-slate-50 opacity-60'
              }`}>
                <div className="text-[11px] font-mono text-slate-500 flex justify-between">
                  <span>T + 12ms</span>
                  <span>GRAPH</span>
                </div>
                <div className="font-semibold text-xs sm:text-sm text-slate-900 mt-2">
                  Graph Traversal
                </div>
                <div className="text-xs text-slate-600 mt-1 font-mono">
                  Discovered 3 linked accounts on 1 device hash
                </div>
                <div className="mt-3 text-[11px] text-slate-500">
                  Sub-graph detects rapid transfer hop velocity ($2,400 in 40s).
                </div>
              </div>

              {/* Event 3 */}
              <div className={`p-4 rounded-xl border transition-all ${
                simulationStage >= 3 ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200 bg-slate-50 opacity-60'
              }`}>
                <div className="text-[11px] font-mono text-slate-500 flex justify-between">
                  <span>T + 24ms</span>
                  <span>SCORE</span>
                </div>
                <div className="font-semibold text-xs sm:text-sm text-slate-900 mt-2">
                  Anomaly Confirmed
                </div>
                <div className="text-xs text-amber-700 mt-1 font-mono font-medium">
                  Risk: 0.942 · High Confidence
                </div>
                <div className="mt-3 text-[11px] text-slate-500">
                  Classification: MULE_NETWORK_COORDINATION.
                </div>
              </div>

              {/* Event 4 */}
              <div className={`p-4 rounded-xl border transition-all ${
                simulationStage >= 4 ? 'border-rose-500 bg-rose-50/60' : 'border-slate-200 bg-slate-50 opacity-60'
              }`}>
                <div className="text-[11px] font-mono text-slate-500 flex justify-between">
                  <span>T + 29ms</span>
                  <span>ACTION</span>
                </div>
                <div className="font-semibold text-xs sm:text-sm text-slate-900 mt-2">
                  Pre-Settlement Intercept
                </div>
                <div className="text-xs text-rose-700 mt-1 font-mono font-medium">
                  Decision: HOLD_FOR_REVIEW
                </div>
                <div className="mt-3 text-[11px] text-slate-500">
                  Webhook fires to bank core; payout held prior to clearing.
                </div>
              </div>

            </div>

            {/* Simulation Feedback Message */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs font-mono text-slate-600">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${simulationStage === 4 ? 'bg-amber-500' : simulationStage > 0 ? 'bg-blue-500 animate-ping' : 'bg-slate-300'}`} />
                <span>
                  {simulationStage === 0 && 'Ready to run simulation.'}
                  {simulationStage === 1 && 'Ingesting transaction event...'}
                  {simulationStage === 2 && 'Traversing topological in-memory subgraph...'}
                  {simulationStage === 3 && 'Evaluating anomaly vector and confidence score...'}
                  {simulationStage === 4 && 'Complete: Pre-settlement HOLD enforced in 29ms.'}
                </span>
              </div>
              <div className="text-slate-500">
                Total Execution Time: {simulationStage === 4 ? '29ms' : simulationStage > 0 ? 'Evaluating...' : 'Idle'}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-[#0B0F1A] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-serif font-semibold">
            Evaluate Tridial on your historic transaction logs
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            We provide sandbox verification and offline replay tools to evaluate detection fidelity before writing a single production line of code.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Request Replay Sandbox Pilot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
