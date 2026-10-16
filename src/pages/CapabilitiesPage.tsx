import React, { useState } from 'react';
import { PageId } from '../types';
import { Users, GitMerge, AlertOctagon, Zap, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface CapabilitiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onNavigate }) => {
  const [selectedCap, setSelectedCap] = useState<number>(0);

  const capabilities = [
    {
      id: 'ato',
      title: 'Account Takeover Detection',
      category: 'Authentication & Session Anomaly',
      mechanism: 'Correlates hardware canvas hashes, proxy subnets, and credential velocity across disjointed customer accounts to flag unauthorized control before fund draining.',
      details: [
        'Detects headless browser automation and emulator signatures during authenticated sessions.',
        'Links seemingly disparate user logins to single hardware clusters across international subnets.',
        'Triggers pre-settlement authorization step-up before balance liquidation transfers execute.'
      ],
      terminalExample: `ato.detected → "Dev #df_92x matched 4 distinct account logins within 8 seconds"\naction: trigger biometric step-up · latency: 26ms`
    },
    {
      id: 'synthetic',
      title: 'Synthetic Identity Detection',
      category: 'Profile & Cluster Validation',
      mechanism: 'Maps graph connectivity across shared phone numbers, hardware tokens, and creation timestamps to isolate artificially constructed credit profiles during incubation.',
      details: [
        'Discovers synthetic clusters sharing fragmented contact details across multiple legal applicant names.',
        'Monitors dormant accounts that suddenly activate synchronized credit-line drawdowns.',
        'Identifies synthetic identity farming rings before initial loan disbursement commits.'
      ],
      terminalExample: `synthetic.cluster → "14 accounts sharing identical canvas fingerprint and subnet /28"\nconfidence: 0.98 · action: hold credit issuance`
    },
    {
      id: 'mule',
      title: 'Mule-Network / Coordinated Fraud Detection',
      category: 'Multi-Hop Topology Modeling',
      mechanism: 'Performs multi-hop recursive graph traversal to expose coordinated money routing and rapid cyclic transfers across intermediary accounts beneath AML reporting thresholds.',
      details: [
        'Uncovers rapid multi-account hops ($800 -> $800 -> $800) intended to evade static transaction limits.',
        'Maps circular fund movements and funnel account structures across 4 topological hops in real time.',
        'Isolates coordinated cash-out mules before off-ramp payment settlement.'
      ],
      terminalExample: `mule.coordination → "3 linked accounts, 1 device, $2,400 moved in 40s"\npattern: mule network · confidence: high · action: hold for review`
    },
    {
      id: 'scoring',
      title: 'Real-Time Risk Scoring',
      category: 'Deterministic Pipeline Engine',
      mechanism: 'Normalizes graph topology metrics and embedding vector distances into a deterministic 0.000–1.000 risk score accompanied by auditable plain-language explanations in under 35ms.',
      details: [
        'Calibrated scoring thresholds tailored to your institution’s custom risk appetite and false-positive targets.',
        'Produces SHAP-based factor attributions for complete auditability and regulatory compliance (AML/CFT).',
        'Guarantees sub-35ms p99 execution budget for zero-friction user checkout experiences.'
      ],
      terminalExample: `risk.score → 0.942 · p99_latency: 28ms · decision: HOLD_FOR_REVIEW\nfactors: [device_reuse: 0.48, burst_velocity: 0.36, hop_depth: 0.16]`
    }
  ];

  return (
    <div className="w-full bg-transparent">
      {/* Header */}
      <section className="text-white py-16 sm:py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Specialized Scope
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              The Four Core Detection Capabilities.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tridial is deliberately narrow. Rather than attempting to be an all-in-one generic rulebook, our engine is purpose-built to solve the four fraud topologies that static rules systematically miss.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Capabilities Grid with Hover Interactions */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={cap.id}
                onClick={() => setSelectedCap(idx)}
                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  selectedCap === idx
                    ? 'bg-[#0E1526]/95 backdrop-blur-md text-white border-[#2F5FFF] shadow-xl shadow-[#2F5FFF]/10 -translate-y-1'
                    : 'bg-white/85 backdrop-blur-md text-slate-900 border-slate-200/90 hover:border-slate-300 hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-slate-200/60 dark:border-slate-800">
                    <span className={selectedCap === idx ? 'text-[#2DD4BF]' : 'text-[#2F5FFF]'}>
                      CAPABILITY 0{idx + 1}
                    </span>
                    <span className={`text-[11px] ${selectedCap === idx ? 'text-slate-400' : 'text-slate-500'}`}>
                      {cap.category}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-serif font-semibold mt-4 ${
                    selectedCap === idx ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cap.title}
                  </h3>

                  {/* One-line explanation of MECHANISM */}
                  <div className={`mt-3 p-3 rounded-lg text-xs font-mono leading-relaxed ${
                    selectedCap === idx ? 'bg-[#090D18] text-[#2DD4BF] border border-slate-800' : 'bg-white text-slate-800 border border-slate-200'
                  }`}>
                    <strong className="block text-[10px] uppercase text-slate-400 mb-0.5">Mechanism:</strong>
                    {cap.mechanism}
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs">
                    {cap.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          selectedCap === idx ? 'text-[#2DD4BF]' : 'text-[#2F5FFF]'
                        }`} />
                        <span className={selectedCap === idx ? 'text-slate-300' : 'text-slate-600'}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example Terminal Snippet Output */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1.5">
                    Live Detection Payload:
                  </div>
                  <pre className="p-3 rounded-lg bg-[#070A12] text-slate-200 font-mono text-[11px] overflow-x-auto whitespace-pre leading-relaxed border border-slate-800">
                    {cap.terminalExample}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-semibold text-slate-900 text-base">
                Looking to evaluate these 4 capabilities on your live traffic?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We configure an isolated test sandbox for your risk team within 48 hours.
              </p>
            </div>
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-2.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shrink-0 shadow-md shadow-[#2F5FFF]/20"
            >
              Request Pilot Access
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
