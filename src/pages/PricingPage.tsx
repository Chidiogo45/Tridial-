import React, { useState } from 'react';
import { PageId } from '../types';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Sliders, Calculator, HelpCircle } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(5000000); // 5 million transactions

  // Deterministic tiered rate calculation based on transaction volume
  const getEstimatedCost = (volume: number) => {
    // Volume discounts per 1,000 transactions
    let ratePerK = 0.40;
    if (volume > 20000000) ratePerK = 0.15;
    else if (volume > 10000000) ratePerK = 0.22;
    else if (volume > 2000000) ratePerK = 0.30;

    const monthlyTotal = (volume / 1000) * ratePerK;
    return {
      ratePerK,
      monthlyTotal: Math.round(monthlyTotal)
    };
  };

  const estimate = getEstimatedCost(monthlyVolume);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B0F1A]">
      {/* Header */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Commercial Model
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Priced Per Transaction Volume.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              No artificial feature gating, no per-seat seat licenses, and no opaque tiers. You pay for the transaction volume Tridial evaluates, with volume discounts as your pipeline scales.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy & Volume Estimator */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Commercial Principles */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
                  Transparent Structure
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mt-2">
                  Every Capability Included in Every Contract
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Fraud detection should not be crippled behind arbitrary pricing tiers. Every customer receives our full graph inference engine, sub-35ms SLA, and plain-language explanation outputs.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                    <span>All 4 Detection Capabilities Unlocked</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-6">
                    Account takeover, synthetic identity clustering, coordinated mule-ring tracking, and real-time risk scoring are enabled by default.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                    <span>Unlimited Fraud Analyst Seats</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-6">
                    Provide access to your entire risk, compliance, engineering, and audit departments without incremental license fees.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                    <span>Free Historic 90-Day Replay Evaluation</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-6">
                    We benchmark your historic transaction logs against Tridial offline before any contract begins, proving quantifiable ROI.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2DD4BF]" />
                    <span>Dedicated Cluster SLA</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-6">
                    Contractually guaranteed 99.99% uptime and sub-35ms p99 evaluation latency backed by financial credits.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Volume Estimator */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0C1220] border border-slate-800 text-white shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#2DD4BF]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Volume Cost Estimator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#2DD4BF]">
                  Indicative Model
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Monthly Transaction Volume:</span>
                    <span className="text-white font-semibold text-sm">
                      {(monthlyVolume / 1000000).toFixed(1)}M txns / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="50000000"
                    step="500000"
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2F5FFF]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>500K</span>
                    <span>10M</span>
                    <span>25M</span>
                    <span>50M+</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#080C16] border border-slate-800/80 space-y-3">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Effective Rate per 1k Txns:</span>
                    <span className="text-[#2DD4BF] font-semibold">${estimate.ratePerK.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                    <span className="text-xs text-slate-400">Estimated Monthly:</span>
                    <span className="text-2xl font-mono font-semibold text-white">
                      ${estimate.monthlyTotal.toLocaleString()}
                      <span className="text-xs text-slate-500 font-normal"> / mo</span>
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 leading-relaxed font-mono">
                  * Custom enterprise agreements available for volumes exceeding 50M transactions/month or dedicated on-premise VPC enclaves.
                </div>

                <button
                  onClick={() => onNavigate('quote')}
                  className="w-full py-3.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-[#2F5FFF]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Talk to Us / Request Formal Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ / Guidance Section */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-semibold text-slate-900">
              Commercial FAQ
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Common questions regarding licensing, deployment models, and evaluation terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-medium block">What counts as an evaluated transaction?</strong>
              <p className="text-slate-500 leading-relaxed">
                Any transaction event submitted to the Tridial endpoint for risk evaluation. Health check pings, historical replay tests, and dashboard interactions are never billed.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-medium block">How does the 90-day historic replay work?</strong>
              <p className="text-slate-500 leading-relaxed">
                You provide anonymized transaction records from the past 90 days. We run our graph engine offline and deliver an audit report comparing detected fraud vs your historical results. This evaluation is completely complimentary.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-medium block">Are there minimum monthly commitments?</strong>
              <p className="text-slate-500 leading-relaxed">
                Standard pilot contracts begin at 500,000 transactions per month. Scaling institutions can adjust their committed baseline quarterly.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
              <strong className="text-slate-900 font-medium block">Is on-premise or sovereign VPC hosting available?</strong>
              <p className="text-slate-500 leading-relaxed">
                Yes. For tier-1 regulated banking institutions with strict sovereign data residency requirements, Tridial deploys into your dedicated AWS, GCP, or Azure VPC enclave.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
