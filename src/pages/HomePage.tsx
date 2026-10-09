import React from 'react';
import { PageId } from '../types';
import { HeroGraphVisual } from '../components/HeroGraphVisual';
import { TypewriterTerminal } from '../components/TypewriterTerminal';
import { 
  ArrowRight, 
  GitMerge, 
  Layers, 
  Cpu, 
  AlertOctagon, 
  Clock, 
  Users, 
  CreditCard, 
  Building2, 
  TrendingUp, 
  CheckCircle2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Dark Navy Background #0B0F1A) */}
      <section className="relative bg-[#0B0F1A] text-white pt-12 sm:pt-20 pb-20 lg:pb-28 overflow-hidden border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Capability Snapshot Row: Detect / Correlate / Act */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-slate-700/80 text-xs font-mono text-[#2DD4BF] tracking-wide">
                <span>DETECT</span>
                <span className="text-slate-600">/</span>
                <span>CORRELATE</span>
                <span className="text-slate-600">/</span>
                <span>ACT</span>
              </div>

              {/* Headline (Serif typography) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-[1.18]">
                Real-time transaction-graph anomaly detection for financial infrastructure.
              </h1>

              {/* Subheading (Plain, mechanical, confident tone) */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
                Tridial connects to your existing transaction pipeline via API. We use transaction-graph modeling—not static rules—to detect account takeover, synthetic identities, and coordinated mule networks before transactions settle.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onNavigate('quote')}
                  className="px-6 py-3.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-sm transition-all shadow-lg shadow-[#2F5FFF]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Early Access / Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('architecture')}
                  className="px-5 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View System Architecture</span>
                </button>
              </div>

              {/* Key Technical Highlights Row */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-mono text-slate-400">
                <div>
                  <div className="text-slate-200 font-semibold text-sm">&lt; 35ms</div>
                  <div className="text-slate-500 mt-0.5">p99 Pre-Settlement</div>
                </div>
                <div>
                  <div className="text-slate-200 font-semibold text-sm">4-Hop</div>
                  <div className="text-slate-500 mt-0.5">Recursive Correlation</div>
                </div>
                <div>
                  <div className="text-slate-200 font-semibold text-sm">Zero Replace</div>
                  <div className="text-slate-500 mt-0.5">Pipeline API Overlay</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Motif & Terminal Snippet */}
            <div className="lg:col-span-6 space-y-4">
              <HeroGraphVisual />
              
              {/* Typewriter terminal snippet */}
              <TypewriterTerminal />
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION (Light Background #FFFFFF / #F7F9FC) */}
      <section className="bg-[#FFFFFF] text-[#0B0F1A] py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
              The Structural Vulnerability
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0B0F1A] mt-2 tracking-tight">
              Static rule engines evaluate transactions in isolation. Fraudsters operate in coordinated networks.
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Traditional fraud tooling applies flat IF/THEN conditions: single transaction thresholds, basic velocity counts, or static geographic limits. Sophisticated adversaries intentionally keep individual transactions below your thresholds while distributing operations across dozens of synthetic accounts.
            </p>
          </div>

          {/* 4 Problem Breakdown Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Account Takeover */}
            <div className="p-6 rounded-xl bg-[#F7F9FC] border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2F5FFF] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-900">
                Account Takeover (ATO)
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Legitimate credentials used from new device clusters or emulator environments. Rule engines treat individual authorized logins as valid until funds are drained.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-[#2F5FFF]">
                Gap: Device graph dissociation
              </div>
            </div>

            {/* Card 2: Synthetic Identities */}
            <div className="p-6 rounded-xl bg-[#F7F9FC] border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4">
                <GitMerge className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-900">
                Synthetic Identities
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Fabricated profiles assembled from fragmented genuine data. Accounts incubate for months with normal micro-activity before executing coordinated credit bust-outs.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-teal-700">
                Gap: Identity cluster isolation
              </div>
            </div>

            {/* Card 3: Mule Networks */}
            <div className="p-6 rounded-xl bg-[#F7F9FC] border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-900">
                Coordinated Mule Networks
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Stolen capital routed through multi-layered intermediate hops across distinct banks within seconds. Each intermediary transfer stays strictly beneath AML reporting caps.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-amber-700">
                Gap: Zero multi-hop topological visibility
              </div>
            </div>

            {/* Card 4: Post-Settlement Detection */}
            <div className="p-6 rounded-xl bg-[#F7F9FC] border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-slate-900">
                Post-Settlement Discovery
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Batch anomaly reports that execute 12 to 48 hours after funds have cleared the rail. By the time a fraud analyst opens the case file, the funds are untraceable.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-rose-700">
                Gap: Irreversible ledger finality
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS PREVIEW (Dark Navy Background #0B0F1A) */}
      <section className="bg-[#0B0F1A] text-white py-16 lg:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
                Operational Flow
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white mt-2">
                Four Steps: Ingestion to Deterministic Decision
              </h2>
            </div>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="text-xs font-mono text-[#2F5FFF] hover:text-white flex items-center gap-1 transition-colors self-start md:self-end"
            >
              <span>Read Full Step-by-Step Walkthrough</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-[#0F1626] border border-slate-800 relative group hover:border-[#2F5FFF]/50 transition-colors">
              <div className="text-[11px] font-mono text-[#2F5FFF] font-semibold mb-3">
                01 / INGEST
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Connect
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Plug into your existing transaction pipeline via a single synchronous API or Kafka sink. No core banking system overhaul required.
              </p>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                Protobuf v3 · gRPC · REST
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-[#0F1626] border border-slate-800 relative group hover:border-[#2F5FFF]/50 transition-colors">
              <div className="text-[11px] font-mono text-[#2DD4BF] font-semibold mb-3">
                02 / ASSEMBLE
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Correlate
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Every transaction maps into a live in-memory graph of accounts, device hashes, IPs, and temporal velocity patterns across multiple hops.
              </p>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                Heterogeneous Subgraphs
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-[#0F1626] border border-slate-800 relative group hover:border-[#2F5FFF]/50 transition-colors">
              <div className="text-[11px] font-mono text-amber-400 font-semibold mb-3">
                03 / INTERPRET
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Explain
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Every flag produces a deterministic, plain-language reason: pattern taxonomy, confidence percentage, and specific affected entity paths.
              </p>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                Auditable Decision Lineage
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-[#0F1626] border border-slate-800 relative group hover:border-[#2F5FFF]/50 transition-colors">
              <div className="text-[11px] font-mono text-[#2F5FFF] font-semibold mb-3">
                04 / ENFORCE
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                Act
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Suspicious activity is held, stepped-up, or blocked in real time before rail settlement. Final decision authority stays with your risk team.
              </p>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                Sub-35ms In-Path Execution
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BUILT FOR / AUDIENCE SECTION (Light Background #FFFFFF / #F7F9FC) */}
      <section className="bg-[#FFFFFF] text-[#0B0F1A] py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
              Deployment Verticals
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mt-2">
              Engineered for High-Throughput Financial Institutions
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Tridial operates globally across payment networks, regulated deposit holders, and credit origination systems.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Audience 1: Digital Banks */}
            <div className="p-8 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-[#2F5FFF] mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-slate-900">
                  Digital Banks & Neobanks
                </h3>
                <div className="mt-3 text-sm text-slate-700 font-medium">
                  Stops automated account takeover and synthetic credit bust-outs without introducing friction for legitimate retail depositors.
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  Fast customer onboarding often attracts synthetic identities. Tridial catches correlated device clusters and rapid multi-account funding loops at registration and withdrawal.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-[#2F5FFF] flex items-center gap-1">
                <span>Solves: Silent deposit liquidation</span>
              </div>
            </div>

            {/* Audience 2: Payment Processors */}
            <div className="p-8 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100/70 border border-teal-200 flex items-center justify-center text-teal-700 mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-slate-900">
                  Payment Processors & Gateways
                </h3>
                <div className="mt-3 text-sm text-slate-700 font-medium">
                  Identifies distributed card testing runs and coordinated merchant bust-outs across thousands of merchant endpoints in sub-35ms.
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  Fraud rings test thousands of stolen BINs across disparate small merchant accounts. Tridial links the shared behavioral graph across merchant boundaries instantly.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-teal-700 flex items-center gap-1">
                <span>Solves: Cross-merchant card testing</span>
              </div>
            </div>

            {/* Audience 3: Microfinance & Lending */}
            <div className="p-8 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100/70 border border-indigo-200 flex items-center justify-center text-indigo-700 mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-slate-900">
                  Lending & Microfinance Platforms
                </h3>
                <div className="mt-3 text-sm text-slate-700 font-medium">
                  Prevents coordinated loan-stacking and identity farming rings before capital disbursement commits.
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  Multiple identity profiles originating from the same physical hardware or shared bank routing destinations are flagged before disbursement approval.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-mono text-indigo-700 flex items-center gap-1">
                <span>Solves: Coordinated loan stacking</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER (Dark Navy #0B0F1A) */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-slate-700 text-xs font-mono text-[#2DD4BF]">
            <span>TECHNICAL EVALUATION & PILOT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Benchmark Tridial on your historic transaction replay.
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Run an offline shadow evaluation against your last 90 days of transactions. Benchmark false positive reductions and discover coordinated mule clusters your rules missed.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-sm transition-all shadow-lg shadow-[#2F5FFF]/20 cursor-pointer"
            >
              Request Pilot & Replay Benchmark
            </button>
            <button
              onClick={() => onNavigate('compliance')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-medium text-sm transition-colors cursor-pointer"
            >
              Review Compliance & AML Fit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
