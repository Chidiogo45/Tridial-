import React from 'react';
import { PageId } from '../types';
import { FileCheck, Shield, Scale, BookOpen, CheckCircle2, Lock, ArrowRight, ExternalLink } from 'lucide-react';

interface CompliancePageProps {
  onNavigate: (page: PageId) => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-transparent">
      {/* Header */}
      <section className="text-white py-16 sm:py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Regulatory & Legal Governance
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Compliance & AML/CFT Alignment.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Written for Chief Compliance Officers, MLROs, and regulatory auditors. Tridial is built not merely to cut fraud loss, but to satisfy institutional AML/CFT obligations with mathematically verifiable audit trails.
            </p>
          </div>
        </div>
      </section>

      {/* Main Governance Content */}
      <section className="py-16 sm:py-24 border-b border-slate-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Executive Overview for Budget Holders */}
          <div className="p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
                Strategic Compliance Value
              </span>
              <h2 className="text-2xl font-serif font-semibold text-slate-900">
                Beyond Loss Prevention: Addressing Systematic AML/CFT Enforcement
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Global regulators increasingly penalize institutions not for suffering fraud, but for failing to detect coordinated laundering and structuring patterns. When fraudsters move illicit funds through intermediary mule accounts, static rules produce zero alerts because each hop remains below statutory reporting thresholds. Tridial solves the regulatory blind spot by establishing multi-hop graph lineage in real time.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
              <div className="text-[#2F5FFF] font-semibold text-[11px] uppercase pb-2 border-b border-slate-200">
                Compliance Outcomes
              </div>
              <div className="flex justify-between py-1">
                <span>SAR Prep Time:</span>
                <span className="font-semibold text-slate-900">85% Reduction</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Audit Defensibility:</span>
                <span className="font-semibold text-slate-900">100% Cryptographic Lineage</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Model Explainability:</span>
                <span className="font-semibold text-slate-900">Deterministic Factors</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Regulatory Fitness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1: Structuring & Smurfing Detection */}
            <div className="p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2F5FFF]">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-slate-900">
                Anti-Structuring & Mule Ring Identification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traditional compliance monitoring fails when criminal groups break $50,000 into twenty $2,500 transfers. Tridial’s correlation engine links the disparate receiving wallets back to shared device fingerprints and rapid liquidation patterns, exposing the full network topology.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Sub-threshold smurfing ring clustering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Rapid cyclic fund movement detection</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Automated SAR Package Generation */}
            <div className="p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-slate-900">
                Automated Suspicious Activity Report (SAR) Exports
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a high-confidence anomaly is flagged, Tridial automatically generates a formatted SAR packet. This includes the complete graph visual, timestamps, involved entity tokens, and a chronological narrative describing the coordinated movement.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Direct XML/JSON export formatted for regulatory portals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Chronological narrative synthesis with entity map</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Model Explainability & Anti-Bias Assurance */}
            <div className="p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-slate-900">
                Algorithmic Transparency & Model Governance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Black-box AI is unviable under modern financial regulations (such as EU AI Act, US OCC guidelines, and UK FCA standards). Every risk score generated by Tridial is accompanied by mathematically transparent factor attributions.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>No black-box neural networks without SHAP attribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Zero demographic or protected-attribute inputs</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4: Cryptographic Non-Repudiation */}
            <div className="p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-slate-900">
                Immutable Audit Trails & Cryptographic Evidence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every evaluation response includes a signed SHA-256 cryptographic receipt that preserves the exact state of the graph, inputs, and policy weights at the microsecond the decision was made.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Tamper-evident log receipts for internal & external auditors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Historic replay verification for regulator spot-checks</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Compliance Officer CTA */}
      <section className="py-16 sm:py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
            Request our Model Risk Management (MRM) Documentation
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            We provide prospective institutional partners with our full Model Risk Governance dossier, fair-lending audit proofs, and SAR generation samples.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shadow-md shadow-[#2F5FFF]/20"
            >
              Request Compliance & Governance Package
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
