import React, { useState, useEffect } from 'react';
import { TransactionNode, TransactionEdge } from '../types';
import { Activity, AlertTriangle, ShieldCheck, RefreshCw, Cpu, Layers } from 'lucide-react';

const INITIAL_NODES: TransactionNode[] = [
  {
    id: 'acc-1',
    type: 'account',
    label: 'Acct #8491-B',
    sublabel: 'Source Wallet',
    x: 90,
    y: 110,
    riskScore: 0.12,
    details: { 'Created': '14 mos ago', 'Country': 'Global', 'Avg Txn': '$120' }
  },
  {
    id: 'dev-1',
    type: 'device',
    label: 'Dev ID #df_92x',
    sublabel: 'Emulated Device',
    x: 230,
    y: 70,
    isFlagged: true,
    riskScore: 0.96,
    details: { 'Hardware': 'Canvas Fingerprint Mismatch', 'Known Instances': '3 Accounts', 'OS Root': 'Detected' }
  },
  {
    id: 'acc-2',
    type: 'account',
    label: 'Acct #3021-M',
    sublabel: 'Mule Pivot',
    x: 340,
    y: 190,
    isFlagged: true,
    riskScore: 0.94,
    details: { 'Pattern': 'Rapid Drain Hop', 'Velocity': '4 txns / 38s', 'Volume': '$2,400 Total' }
  },
  {
    id: 'acc-3',
    type: 'account',
    label: 'Acct #6104-K',
    sublabel: 'Target Recipient',
    x: 480,
    y: 120,
    isFlagged: true,
    riskScore: 0.88,
    details: { 'KYC Tier': 'Level 1', 'Creation Age': '2 hrs', 'Status': 'Flagged for Hold' }
  },
  {
    id: 'ip-1',
    type: 'ip',
    label: 'IP 194.26.29.x',
    sublabel: 'TOR / Datacenter Node',
    x: 160,
    y: 260,
    isFlagged: true,
    riskScore: 0.91,
    details: { 'ASN': 'Hosting Provider', 'Velocity': '14 sessions / min' }
  },
  {
    id: 'acc-4',
    type: 'account',
    label: 'Acct #7712-Q',
    sublabel: 'Standard User',
    x: 450,
    y: 280,
    riskScore: 0.08,
    details: { 'Status': 'Normal', 'Graph Distance': '3 Hops' }
  }
];

const INITIAL_EDGES: TransactionEdge[] = [
  { from: 'acc-1', to: 'acc-2', label: '$800 transfer', isSuspicious: true },
  { from: 'dev-1', to: 'acc-1', label: 'Auth token share' },
  { from: 'dev-1', to: 'acc-2', label: 'Device reuse', isSuspicious: true },
  { from: 'dev-1', to: 'acc-3', label: 'Device reuse', isSuspicious: true },
  { from: 'acc-2', to: 'acc-3', label: '$1,600 outbound', isSuspicious: true },
  { from: 'ip-1', to: 'acc-2', label: 'Proxy egress', isSuspicious: true },
  { from: 'acc-2', to: 'acc-4', label: '$25 peer pmt' }
];

export const HeroGraphVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<TransactionNode | null>(INITIAL_NODES[2]);
  const [cycleKey, setCycleKey] = useState<number>(0);

  // Staged drawing sequence
  useEffect(() => {
    setActiveStep(0);
    const t1 = setTimeout(() => setActiveStep(1), 250); // Nodes reveal
    const t2 = setTimeout(() => setActiveStep(2), 700); // Edges connect
    const t3 = setTimeout(() => setActiveStep(3), 1300); // Anomaly triggers
    const t4 = setTimeout(() => setActiveStep(4), 1800); // Radar ring settles & flag card active

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [cycleKey]);

  const restartSimulation = () => {
    setCycleKey((k) => k + 1);
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#080C16] border border-slate-800/80 p-5 lg:p-6 shadow-2xl overflow-hidden font-sans">
      {/* Subtle grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2F5FFF 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header bar of graph preview */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111827] border border-slate-700 text-slate-300 font-mono">
            <Layers className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>GRAPH_ENGINE: LIVE_CORRELATION</span>
          </div>
          <span className="hidden sm:inline text-slate-500 font-mono">cluster_id: cust-eu-904</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
            <span className={`w-2 h-2 rounded-full ${activeStep >= 3 ? 'bg-amber-400 animate-pulse' : 'bg-[#2DD4BF]'}`} />
            <span>{activeStep >= 3 ? 'ANOMALY_CORRELATED' : 'SCANNING_STREAM'}</span>
          </div>
          <button
            onClick={restartSimulation}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Replay network sequence"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main SVG Graph Canvas */}
      <div className="relative mt-4 w-full h-[320px] sm:h-[360px] select-none">
        <svg
          viewBox="0 0 580 340"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="edgeNormal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2F5FFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="edgeAlert" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render connecting edges */}
          {activeStep >= 2 &&
            INITIAL_EDGES.map((edge, idx) => {
              const fromNode = INITIAL_NODES.find((n) => n.id === edge.from);
              const toNode = INITIAL_NODES.find((n) => n.id === edge.to);
              if (!fromNode || !toNode) return null;

              const isSuspicious = edge.isSuspicious && activeStep >= 3;

              return (
                <g key={`edge-${idx}`}>
                  <line
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isSuspicious ? 'url(#edgeAlert)' : 'url(#edgeNormal)'}
                    strokeWidth={isSuspicious ? 2.5 : 1.25}
                    strokeDasharray={isSuspicious ? '4 3' : 'none'}
                    className={isSuspicious ? 'packet-flow-line' : 'transition-all duration-300'}
                  />
                  {/* Midpoint subtle label */}
                  {edge.label && (
                    <text
                      x={(fromNode.x + toNode.x) / 2}
                      y={(fromNode.y + toNode.y) / 2 - 4}
                      fill={isSuspicious ? '#FCD34D' : '#64748B'}
                      fontSize="9"
                      fontFamily="IBM Plex Mono"
                      textAnchor="middle"
                      className="pointer-events-none"
                    >
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}

          {/* Render Nodes */}
          {activeStep >= 1 &&
            INITIAL_NODES.map((node) => {
              const isFlagged = node.isFlagged && activeStep >= 3;
              const isSelected = selectedNode?.id === node.id;
              const isPivot = node.id === 'acc-2';

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setSelectedNode(node)}
                  className="cursor-pointer group"
                >
                  {/* Radar pulse ring for flagged pivot node */}
                  {isPivot && activeStep >= 3 && (
                    <>
                      <circle
                        cx="0"
                        cy="0"
                        r="12"
                        fill="none"
                        stroke="#F59E0B"
                        className="radar-ring"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="24"
                        fill="none"
                        stroke="#EF4444"
                        className="radar-ring"
                        style={{ animationDelay: '0.8s' }}
                      />
                    </>
                  )}

                  {/* Outer glow ring on selection */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isSelected ? 19 : 14}
                    fill={isFlagged ? 'rgba(239, 68, 68, 0.2)' : 'rgba(47, 95, 255, 0.2)'}
                    stroke={isSelected ? '#FFFFFF' : 'transparent'}
                    strokeWidth="1.5"
                    className="transition-all duration-200"
                  />

                  {/* Node Core */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isFlagged ? 13 : 11}
                    fill={
                      isFlagged
                        ? isPivot
                          ? '#F59E0B'
                          : '#EF4444'
                        : node.type === 'device'
                        ? '#2DD4BF'
                        : '#2F5FFF'
                    }
                    filter="url(#glow)"
                    className="transition-all duration-300"
                  />

                  {/* Inner center dot */}
                  <circle cx="0" cy="0" r="3.5" fill="#0B0F1A" />

                  {/* Node Label Text */}
                  <text
                    x="0"
                    y="24"
                    fill="#F1F5F9"
                    fontSize="11"
                    fontFamily="IBM Plex Sans"
                    fontWeight="500"
                    textAnchor="middle"
                    className="drop-shadow"
                  >
                    {node.label}
                  </text>
                  <text
                    x="0"
                    y="35"
                    fill={isFlagged ? '#FCA5A5' : '#94A3B8'}
                    fontSize="9"
                    fontFamily="IBM Plex Mono"
                    textAnchor="middle"
                  >
                    {node.sublabel}
                  </text>
                </g>
              );
            })}
        </svg>

        {/* Selected Node Telemetry Card Overlay */}
        {selectedNode && (
          <div className="absolute bottom-2 right-2 max-w-[270px] bg-[#0E1526]/95 border border-slate-700/80 rounded-xl p-3 text-xs shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                {selectedNode.isFlagged ? (
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
                )}
                <span className="font-semibold text-slate-100 font-mono text-[11px]">{selectedNode.label}</span>
              </div>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${
                  (selectedNode.riskScore ?? 0) > 0.7
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-[#2DD4BF]/20 text-[#2DD4BF] border border-[#2DD4BF]/30'
                }`}
              >
                Risk: {Math.round((selectedNode.riskScore ?? 0) * 100)}%
              </span>
            </div>
            <div className="mt-2 space-y-1 text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span className="text-slate-500 font-mono">Entity Type:</span>
                <span className="text-slate-300 capitalize">{selectedNode.type}</span>
              </div>
              {selectedNode.details &&
                Object.entries(selectedNode.details).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2">
                    <span className="text-slate-500 font-mono">{k}:</span>
                    <span className="text-slate-200 text-right truncate">{v}</span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer status caption */}
      <div className="relative z-10 mt-2 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">CORRELATION_DEPTH:</span>
          <span className="text-slate-300">3-HOP_RECURSIVE</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-500">P99_EVAL:</span>
          <span className="text-[#2DD4BF]">28ms</span>
        </div>
        <div className="text-slate-500 italic mt-1 sm:mt-0">
          Click any node to inspect subgraph telemetry
        </div>
      </div>
    </div>
  );
};
