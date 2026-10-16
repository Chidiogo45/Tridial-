import React, { useState } from 'react';
import { PageId } from '../types';
import { AnimatedArchitectureDiagram } from '../components/AnimatedArchitectureDiagram';
import { 
  Server, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Zap, 
  Database, 
  Lock, 
  Layers, 
  CheckCircle2, 
  Terminal,
  Activity,
  ArrowRight
} from 'lucide-react';

interface ArchitecturePageProps {
  onNavigate: (page: PageId) => void;
}

export const ArchitecturePage: React.FC<ArchitecturePageProps> = ({ onNavigate }) => {
  const [activeSpec, setActiveSpec] = useState<'network' | 'graph' | 'security'>('network');

  return (
    <div className="w-full bg-transparent text-white">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827]/80 border border-slate-700/80 text-xs font-mono text-[#2DD4BF]">
              <span>TECHNICAL SPECIFICATION V4.2</span>
              <span className="text-slate-600">|</span>
              <span>ENGINEERING REVIEW</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Low-Latency Graph Inference Engine Architecture.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
              Designed for mission-critical core banking and payment processing pipelines. Tridial operates with zero persistent raw PII storage at inference boundaries, achieving p99 evaluation latencies under 35 milliseconds.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Animated Architecture Diagram Section */}
      <section className="py-16 sm:py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              In-Line Evaluation Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white mt-1">
              End-to-End Distributed Stream Processing Pipeline
            </h2>
          </div>

          {/* Embedded Signature Animated Architecture Diagram Component */}
          <AnimatedArchitectureDiagram />
        </div>
      </section>

      {/* Deep Technical Deep-Dives for Reviewers */}
      <section className="py-16 sm:py-24 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF]">
              Institutional Infrastructure Auditing
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white mt-2">
              Engineering Specs & Security Boundaries
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Review memory layout, model training paradigms, and network cryptographic assurances.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Spec 1: Network Ingestion Topology */}
            <div className="p-6 rounded-2xl bg-[#0F1626]/85 backdrop-blur-md border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2F5FFF]/20 border border-[#2F5FFF]/40 flex items-center justify-center text-[#2F5FFF] mb-5">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-white">
                  Ingestion & Networking
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Stateless edge gateway pods terminating mutual TLS (mTLS 1.3) with client certificate pinned verification.
                </p>

                <div className="mt-6 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Peak Load:</span>
                    <span>85,000 req/sec</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Payload Serialization:</span>
                    <span>Protobuf v3 / JSON</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Client Timeout Budget:</span>
                    <span>50ms hard threshold</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Failover Mode:</span>
                    <span>Active-Active Multi-Region</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-[#2DD4BF]">
                Zero edge queuing backpressure
              </div>
            </div>

            {/* Spec 2: In-Memory Subgraph Assembly */}
            <div className="p-6 rounded-2xl bg-[#0F1626]/85 backdrop-blur-md border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2DD4BF]/20 border border-[#2DD4BF]/40 flex items-center justify-center text-[#2DD4BF] mb-5">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-white">
                  Graph Traversal Engine
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Lockless distributed graph shards held entirely in low-latency volatile RAM with consistent hashing across node clusters.
                </p>

                <div className="mt-6 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Traversal Latency:</span>
                    <span>8–14ms (4 hops)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Temporal Sliding Window:</span>
                    <span>30 sec to 90 days</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Node Types:</span>
                    <span>Account, Dev, IP, BIN, Org</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Edge Indexing:</span>
                    <span>Adjacency Arrays (Cache-Aligned)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-[#2DD4BF]">
                Sub-millisecond adjacency lookups
              </div>
            </div>

            {/* Spec 3: Cryptographic Isolation & Security Boundary */}
            <div className="p-6 rounded-2xl bg-[#0F1626]/85 backdrop-blur-md border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 mb-5">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-white">
                  Data Isolation & Pseudonymization
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Cleartext PII is never accepted. Graph vertices are populated exclusively with SHA-256 HMAC salted client identifiers.
                </p>

                <div className="mt-6 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">PII Storage:</span>
                    <span>None (Zero-Retention)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Key Management:</span>
                    <span>Dedicated AWS/GCP KMS or HSM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-500">Audit Proofs:</span>
                    <span>Signed SHA-256 Receipts</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Deployment Choice:</span>
                    <span>Cloud SaaS or VPC Enclave</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-[#2DD4BF]">
                Compliant with global banking data laws
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Code / gRPC Schema Example */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Integration Interface
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mt-1">
              Synchronous Protocol Buffer Definition
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Deterministic request-response schema designed for sub-millisecond serialization overhead.
            </p>
          </div>

          <div className="rounded-xl bg-[#0B0F1A]/90 backdrop-blur-md border border-slate-800 p-5 font-mono text-xs overflow-x-auto text-slate-300 shadow-xl">
            <pre className="leading-relaxed">
{`syntax = "proto3";
package tridial.inference.v1;

service GraphAnomalyService {
  // Synchronous pre-settlement anomaly evaluation
  rpc EvaluateTransaction (EvaluationRequest) returns (EvaluationResponse);
}

message EvaluationRequest {
  string transaction_id       = 1;
  string sender_account_hash   = 2;
  string receiver_account_hash = 3;
  double amount_usd            = 4;
  string device_fingerprint    = 5;
  string egress_ip_hash        = 6;
  int64  event_timestamp_ms    = 7;
}

message EvaluationResponse {
  enum ActionDirective {
    ALLOW            = 0;
    HOLD_FOR_REVIEW  = 1;
    STEP_UP_AUTH     = 2;
    REJECT           = 3;
  }

  string transaction_id         = 1;
  double risk_score             = 2; // [0.000, 1.000]
  ActionDirective directive     = 3;
  int32 evaluation_duration_ms  = 4;
  string explainability_summary = 5; // Human-readable factor breakdown
  repeated string path_hops     = 6; // Cryptographically signed graph traversal lineage
}`}
            </pre>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Request Architecture Whitepaper & SDK Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
