import React from 'react';
import { PageId } from '../types';
import { CheckCircle2, Clock, Activity, ShieldCheck, Server, AlertCircle, ArrowRight } from 'lucide-react';

interface StatusPageProps {
  onNavigate: (page: PageId) => void;
}

export const StatusPage: React.FC<StatusPageProps> = ({ onNavigate }) => {
  const components = [
    {
      name: 'Ingestion Gateway (gRPC / mTLS)',
      status: 'Operational',
      latency: '4ms',
      uptime: '100.00%',
      desc: 'Edge reverse proxy pods processing transaction evaluation events.'
    },
    {
      name: 'Graph Correlation Engine',
      status: 'Operational',
      latency: '12ms',
      uptime: '99.998%',
      desc: 'In-memory distributed subgraph traversal and entity relationship clustering.'
    },
    {
      name: 'ML Inference Cluster (R-GCN)',
      status: 'Operational',
      latency: '14ms',
      uptime: '99.995%',
      desc: 'Topological node embedding evaluation for mule networks and synthetic identities.'
    },
    {
      name: 'Real-Time Risk Scoring Loop',
      status: 'Operational',
      latency: '3ms',
      uptime: '100.00%',
      desc: 'Deterministic threshold calculation and plain-language factor synthesis.'
    },
    {
      name: 'Webhook & Intercept Dispatch',
      status: 'Operational',
      latency: '2ms',
      uptime: '100.00%',
      desc: 'Synchronous decision transmission back to customer authorization gateways.'
    }
  ];

  const regions = [
    { name: 'Europe West (Frankfurt)', status: 'Operational', latency: '24ms p99' },
    { name: 'US East (N. Virginia)', status: 'Operational', latency: '26ms p99' },
    { name: 'US West (Oregon)', status: 'Operational', latency: '28ms p99' },
    { name: 'Asia Pacific (Singapore)', status: 'Operational', latency: '31ms p99' }
  ];

  return (
    <div className="w-full bg-transparent">
      {/* Header */}
      <section className="text-white py-16 sm:py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827]/80 border border-slate-700/80 text-xs font-mono text-[#2DD4BF]">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              <span>LIVE OPERATIONAL TELEMETRY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              System Status & Uptime.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Real-time telemetry across Tridial ingestion endpoints, in-memory graph clusters, and inference execution pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Status Dashboard */}
      <section className="py-16 sm:py-24 border-b border-slate-300/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Banner Status Card */}
          <div className="p-6 rounded-2xl bg-[#090D18]/95 backdrop-blur-md border border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2DD4BF]/20 border border-[#2DD4BF]/40 flex items-center justify-center text-[#2DD4BF]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif font-semibold text-xl text-white">
                  All Systems Fully Operational
                </h2>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  End-to-End Latency p99: 29ms · Global Availability: 99.998%
                </div>
              </div>
            </div>

            <div className="text-right text-xs font-mono text-slate-400">
              <div>Refreshed in real-time</div>
              <div className="text-[#2DD4BF]">SLA Target: 99.99%</div>
            </div>
          </div>

          {/* Component Services List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200">
              <span>Core Service Components</span>
              <span>Status / Latency / 90d Uptime</span>
            </div>

            <div className="divide-y divide-slate-100 border border-slate-200/90 rounded-2xl overflow-hidden bg-white/85 backdrop-blur-md shadow-xs">
              {components.map((comp, i) => (
                <div key={i} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors">
                  <div>
                    <div className="font-serif font-semibold text-slate-900 text-sm sm:text-base">
                      {comp.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {comp.desc}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-xs font-mono shrink-0">
                    <div className="text-slate-500 text-right hidden sm:block">
                      <div className="text-slate-900 font-medium">{comp.latency}</div>
                      <div className="text-[10px]">p99 eval</div>
                    </div>
                    <div className="text-slate-500 text-right hidden sm:block">
                      <div className="text-slate-900 font-medium">{comp.uptime}</div>
                      <div className="text-[10px]">90-day</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 font-semibold text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>{comp.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 90-Day Uptime Graphical History */}
          <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="font-semibold uppercase text-slate-900">90-Day System Uptime History</span>
              <span className="text-teal-700 font-semibold">99.998% Overall Availability</span>
            </div>

            {/* Visual 90-day bar ticks */}
            <div className="grid grid-cols-45 sm:grid-cols-90 gap-0.5 sm:gap-1 h-8">
              {Array.from({ length: 90 }).map((_, idx) => (
                <div
                  key={idx}
                  title={`Day ${90 - idx}: 100% Operational`}
                  className="h-full bg-[#2DD4BF] rounded-xs hover:bg-teal-400 transition-colors cursor-pointer"
                />
              ))}
            </div>

            <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-1">
              <span>90 days ago</span>
              <span>100% operational days</span>
              <span>Today</span>
            </div>
          </div>

          {/* Global Regional Nodes */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Regional Ingestion Gateways
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {regions.map((reg, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-900 font-semibold">{reg.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-200/80">
                    <div className="flex items-center gap-1.5 text-teal-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>{reg.status}</span>
                    </div>
                    <span>{reg.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Incident History Log */}
          <div className="space-y-4 pt-6 border-t border-slate-300/40">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Past Incident History (Last 90 Days)
            </div>

            <div className="p-6 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 font-semibold">Scheduled Core Graph Model Re-indexing</span>
                <span className="text-slate-500">Completed 14 days ago</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero client downtime was incurred. Stateless edge gateways routed active evaluation requests across alternate regional cluster shards with zero latency elevation.
              </p>
              <div className="text-[11px] font-mono text-teal-700">
                Resolved · Impact: None (Zero dropped transactions)
              </div>
            </div>

            <div className="text-center pt-2 text-xs font-mono text-slate-500">
              No further operational incidents or degraded performance events recorded.
            </div>
          </div>

        </div>
      </section>

      {/* Footer Support Banner */}
      <section className="py-12 text-white border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
            <span>Dedicated customer status endpoints provided with pilot SLA</span>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="text-[#2F5FFF] hover:underline cursor-pointer"
          >
            Inquire About Custom VPC Deployments &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
