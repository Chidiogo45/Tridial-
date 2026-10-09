import React, { useState } from 'react';
import { ArrowRight, Server, GitMerge, Cpu, ShieldCheck, Zap, Database, Terminal, CheckCircle2 } from 'lucide-react';

interface StageInfo {
  id: string;
  name: string;
  sub: string;
  protocol: string;
  latency: string;
  description: string;
  specs: { label: string; value: string }[];
}

const STAGES: StageInfo[] = [
  {
    id: 'ingestion',
    name: '1. Ingestion Pipeline',
    sub: 'gRPC / Kafka / REST Gateway',
    protocol: 'Protobuf v3 / mTLS 1.3',
    latency: '3–6 ms',
    description: 'High-throughput stream ingestion supporting up to 85,000 tx/sec with zero customer data retention at edge nodes.',
    specs: [
      { label: 'Protocols', value: 'gRPC streaming, Kafka sink, REST API' },
      { label: 'Payload Format', value: 'ISO 20022 compliant or custom JSON' },
      { label: 'Security Boundary', value: 'Hardware Security Module (HSM) + TLS 1.3' },
      { label: 'Failover Policy', value: 'Active-Active multi-region stateless' }
    ]
  },
  {
    id: 'correlation',
    name: '2. Graph Correlation Engine',
    sub: 'In-Memory Subgraph Assembler',
    protocol: 'Memory-mapped Directed Acyclic Graph',
    latency: '8–14 ms',
    description: 'Traverses up to 4 hops in real time across accounts, device hashes, IPs, and merchant nodes to establish coordinated entity clusters.',
    specs: [
      { label: 'Graph Topology', value: 'Heterogeneous Property Graph' },
      { label: 'Traversal Depth', value: 'Configurable 1 to 5 hops recursive' },
      { label: 'Entity Indexing', value: 'Distributed RAM with lockless shard hashing' },
      { label: 'Temporal Window', value: 'Rolling sliding windows (30s to 90d)' }
    ]
  },
  {
    id: 'ml',
    name: '3. ML Detection Models',
    sub: 'Graph Neural Networks + Embeddings',
    protocol: 'ONNX Runtime / TensorRT',
    latency: '10–16 ms',
    description: 'Computes topological node embeddings and evaluates against pre-trained synthetic identity and mule-ring models.',
    specs: [
      { label: 'Model Architecture', value: 'Relational Graph Convolutional Network (R-GCN)' },
      { label: 'Feature Extraction', value: 'Degree centrality, cycle detection, velocity shifts' },
      { label: 'Cold-Start Handling', value: 'Immediate zero-shot structural inference' },
      { label: 'Model Retraining', value: 'Continuous incremental edge weights' }
    ]
  },
  {
    id: 'scoring',
    name: '4. Real-Time Risk Scoring',
    sub: 'Deterministic Policy & Thresholds',
    protocol: 'Synchronous Evaluation Loop',
    latency: '2–4 ms',
    description: 'Combines ML anomaly probabilities with customer-configured operational tolerances to output normalized risk scores (0.000–1.000).',
    specs: [
      { label: 'Score Normalization', value: '0.000 to 1.000 confidence calibrated' },
      { label: 'Explainability Matrix', value: 'SHAP-derived plain language factor breakdown' },
      { label: 'Total End-to-End Latency', value: 'p99 < 35ms guaranteed' },
      { label: 'Pre-Settlement Intercept', value: 'Guaranteed before clearing cycle commit' }
    ]
  },
  {
    id: 'response',
    name: '5. Webhook / Intercept Response',
    sub: 'Customer Decision Gateway',
    protocol: 'Synchronous API Reply / HTTP Webhook',
    latency: '2–5 ms',
    description: 'Returns real-time decision (ALLOW, HOLD_FOR_REVIEW, STEP_UP_AUTH, REJECT) with full graph lineage for compliance auditing.',
    specs: [
      { label: 'Action Directives', value: 'ALLOW | HOLD | STEP_UP | REJECT' },
      { label: 'Audit Trail', value: 'Immutable Cryptographic Audit Receipt' },
      { label: 'SAR Support', value: 'Auto-formatted XML for regulatory reporting' },
      { label: 'Case Management', value: 'Bidirectional sync with analyst portals' }
    ]
  }
];

export const AnimatedArchitectureDiagram: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<StageInfo>(STAGES[1]);

  return (
    <div className="w-full rounded-2xl bg-[#090D18] border border-slate-800 p-6 lg:p-8 shadow-2xl font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF] uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>Interactive Technical Blueprint</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
            Deterministic Sub-35ms Ingestion-to-Decision Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#0F1626] px-3 py-1.5 rounded-lg border border-slate-700/60">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
          <span>Active Pipeline: 85,000 tx/sec Peak</span>
        </div>
      </div>

      {/* SVG Pipeline Animation with Moving Packets */}
      <div className="relative mt-8 py-4 overflow-x-auto select-none">
        <div className="min-w-[760px] relative">
          {/* Connector Flow Lines Behind Stages */}
          <svg className="w-full h-24 absolute top-10 left-0 pointer-events-none z-0">
            <line
              x1="10%"
              y1="50"
              x2="90%"
              y2="50"
              stroke="#1E293B"
              strokeWidth="4"
            />
            {/* Animated Packet Stream Line */}
            <line
              x1="10%"
              y1="50"
              x2="90%"
              y2="50"
              stroke="#2F5FFF"
              strokeWidth="2.5"
              className="packet-flow-line"
              strokeOpacity="0.75"
            />
          </svg>

          {/* Stages Grid */}
          <div className="relative z-10 grid grid-cols-5 gap-3">
            {STAGES.map((stage) => {
              const isSelected = selectedStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#151E33] border-[#2F5FFF] shadow-lg shadow-[#2F5FFF]/15 -translate-y-1'
                      : 'bg-[#0E1524]/90 border-slate-800 hover:border-slate-700 hover:bg-[#121A2C]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-slate-800/60">
                    <span className="text-[#2DD4BF] font-semibold">{stage.latency}</span>
                    <span className="text-slate-500">{stage.id.toUpperCase()}</span>
                  </div>

                  <div className="mt-3">
                    <div className="font-semibold text-slate-100 text-xs sm:text-sm tracking-tight leading-tight">
                      {stage.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono leading-tight">
                      {stage.sub}
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="text-slate-500">Protocol</span>
                    <span className="text-slate-300 truncate max-w-[90px]">{stage.protocol.split('/')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Stage Deep Technical Breakdown */}
      <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[#0F1626] border border-slate-800 text-slate-300">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#2F5FFF]">
              <span>PHASE_SPECIFICATION //</span>
              <span className="text-white font-semibold">{selectedStage.name}</span>
            </div>
            <p className="mt-1 text-sm text-slate-300 max-w-3xl leading-relaxed">
              {selectedStage.description}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3 py-1.5 rounded-lg bg-[#090D18] border border-slate-800 text-right">
              <div className="text-[10px] font-mono text-slate-500">EXECUTION BUDGET</div>
              <div className="text-sm font-mono font-semibold text-[#2DD4BF]">{selectedStage.latency}</div>
            </div>
          </div>
        </div>

        {/* Technical Specs Key-Value Table */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {selectedStage.specs.map((spec, i) => (
            <div key={i} className="p-3 rounded-lg bg-[#090D18]/80 border border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-500 uppercase">{spec.label}</div>
              <div className="mt-1 font-medium text-slate-200 font-sans text-xs">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SLA Metric Footer */}
      <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
          <span>Zero-payload caching guarantee: Graph models process cryptographically pseudonymized tokens</span>
        </div>
        <div className="text-[#2F5FFF]">SLA: 99.999% uptime availability</div>
      </div>
    </div>
  );
};
