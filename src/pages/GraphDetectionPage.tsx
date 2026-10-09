import React from 'react';
import { PageId } from '../types';
import { BookOpen, GitMerge, AlertTriangle, CheckCircle2, ArrowRight, Share2, Layers, Cpu } from 'lucide-react';

interface GraphDetectionPageProps {
  onNavigate: (page: PageId) => void;
}

export const GraphDetectionPage: React.FC<GraphDetectionPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B0F1A]">
      {/* Header */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-700 text-xs font-mono text-[#2DD4BF]">
              <span>TECHNICAL WHITE PAPER // VENDOR EVALUATION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              The Case for Transaction-Graph Detection.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Why static conditional rule engines fail against coordinated syndicates, and how in-memory topological modeling transforms fraud detection into a solved structural problem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Long-Form Article Body */}
      <article className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">
          
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 text-xs text-slate-500 font-mono">
            <div>Authored by Tridial Infrastructure Architecture Group</div>
            <div>Reading Time: 6 min · Topic: Relational Topology</div>
          </div>

          {/* Section 1: The Dimensional Failure of Flat Rules */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">
              1. The Dimensional Collapse of Relational Data
            </h2>
            <p>
              In virtually all modern banking cores, transaction records are stored as flat rows in relational tables:
            </p>
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-slate-800">
              [txn_id, sender_id, recipient_id, amount, timestamp, currency, status]
            </div>
            <p>
              When a risk engine executes a rule against this row, it evaluates an isolated predicate. For example: <code>IF amount &gt; 5000 AND velocity_1h &gt; 3 THEN FLAG</code>.
            </p>
            <p>
              This architecture collapses an inherently N-dimensional web of real-world relationships into a two-dimensional row. An organized fraud syndicate does not operate in rows; they operate in graphs. They open thirty accounts across multiple synthetic personas, share a single device emulator pool, and bounce $400 transfers through five intermediate hops in under two minutes.
            </p>
            <p>
              In a relational database, detecting that Account #1 and Account #30 are part of the same coordinated network requires joining the transaction table thirty times. In relational SQL, a 5-hop recursive self-join on a 100-million-row ledger table takes tens of seconds. It cannot be executed during an in-flight authorization window of 100ms.
            </p>
          </div>

          {/* Section 2: The False Positive Trap */}
          <div className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">
              2. The False Positive Dilemma
            </h2>
            <p>
              Because rule engines lack relational context, they rely on blunt instruments: lowering thresholds or adding restrictive geo-fences.
            </p>
            <p>
              This introduces the classic operational dilemma:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-4 list-disc">
              <li><strong>If you tighten thresholds</strong>, you catch more fraud, but false positive rates spike to 8–15%. Legitimate customers are declined, customer support queues are overwhelmed, and checkout drop-off destroys customer lifetime value.</li>
              <li><strong>If you loosen thresholds</strong>, user experience improves, but fraud losses escalate into seven figures as syndicates exploit the margin.</li>
            </ul>
            <p>
              Graph modeling dissolves this false dichotomy. When an unusual transaction occurs (for example, a customer suddenly sends $1,500 to a new recipient), a static rule triggers a false alert. But a graph engine inspects the recipient's 2-hop neighborhood: does this recipient have established, legitimate connections with existing verified entities in the customer's social or institutional graph? If so, the transaction is cleared instantly.
            </p>
          </div>

          {/* Section 3: Topological Invariants */}
          <div className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">
              3. Topological Invariants: What Fraud Actually Looks Like
            </h2>
            <p>
              Fraudsters can forge names, generate synthetic Social Security or National ID numbers, spoof IP addresses, and split transfer sums. However, they cannot escape the mathematical topology of money movement:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1 text-xs">
                <strong className="text-slate-900 block font-serif text-sm">Cycle Detection</strong>
                <p className="text-slate-600">
                  Mule networks inevitably route funds back to common consolidation hubs. Graph cycles (A → B → C → A) stand out immediately against natural acyclic spending trees.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1 text-xs">
                <strong className="text-slate-900 block font-serif text-sm">Degree Centrality</strong>
                <p className="text-slate-600">
                  A device fingerprint or IP subnet connecting to 40 distinct legal accounts within 48 hours exhibits an extreme degree anomaly that no legitimate user generates.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1 text-xs">
                <strong className="text-slate-900 block font-serif text-sm">Temporal Velocity</strong>
                <p className="text-slate-600">
                  Legitimate funds sit in accounts for days or weeks. Fraudulent funds must be moved before chargebacks trigger, creating hyper-compressed transfer velocities.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Overcoming the 35ms Latency Barrier */}
          <div className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">
              4. Engineering the Sub-35ms In-Memory Engine
            </h2>
            <p>
              Historically, graph databases like Neo4j or Amazon Neptune were too slow to place directly in the payment authorization path. Disk-bound property graphs and complex query languages added 200–500ms of overhead.
            </p>
            <p>
              Tridial eliminated this bottleneck through three architectural innovations:
            </p>
            <ol className="space-y-3 text-xs sm:text-sm text-slate-700 pl-4 list-decimal">
              <li><strong>Zero Disk I/O during Evaluation:</strong> Active subgraphs are held in lockless, shared-memory RAM shards. Traversal is pointer jumping, not SQL query parsing.</li>
              <li><strong>Graph Convolutional Embeddings:</strong> We evaluate topology using pre-computed node embeddings rather than exhaustive graph-wide scans.</li>
              <li><strong>Sub-Millisecond Edge Decay:</strong> Ephemeral relationships (like temporary IP assignments) expire automatically, preventing memory bloat.</li>
            </ol>
          </div>

          {/* Author Conclusion Box */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0C1220] border border-slate-800 text-white space-y-4">
            <h3 className="font-serif font-semibold text-lg text-white">
              Conclusion for Fintech Reviewers
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Continuing to layer additional static rules onto a fundamentally row-based system is an exercise in diminishing returns. The future of financial crime defense is topological.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('quote')}
                className="px-5 py-2.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white text-xs font-mono font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Benchmark on Your Historic Replay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </article>
    </div>
  );
};
