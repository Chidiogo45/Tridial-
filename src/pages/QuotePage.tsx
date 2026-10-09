import React, { useState } from 'react';
import { PageId, QuoteFormData } from '../types';
import { ShieldCheck, CheckCircle2, ArrowRight, Building, Mail, User, Layers, Calendar, Terminal } from 'lucide-react';

interface QuotePageProps {
  onNavigate: (page: PageId) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    companySize: '50-250',
    primaryRequirement: 'mule_networks',
    deploymentTimeline: 'immediate_30_days',
    environmentDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.companyName.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setErrorMsg('Please provide a valid institutional work email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B0F1A]">
      {/* Header */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Pilot Qualification
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Request a Pilot & Replay Benchmark.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We qualify engineering and risk teams based on transaction pipeline volume and integration readiness. Complete this intake to access our sandbox environment and request an offline historic replay evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Intake Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {submitted ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-[#0C1220] border border-slate-800 text-white shadow-2xl text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/20 border border-[#2DD4BF]/40 flex items-center justify-center text-[#2DD4BF] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
                  Application Received & Logged
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
                  Pilot Qualification Initiated for {formData.companyName}
                </h2>
                <p className="text-slate-300 text-sm max-w-lg mx-auto">
                  Our systems engineering team has received your submission for <strong>{formData.workEmail}</strong>. We review architecture fit within 1 business day.
                </p>
              </div>

              {/* Submitted Parameters Summary */}
              <div className="p-6 rounded-xl bg-[#080C16] border border-slate-800 text-left max-w-xl mx-auto text-xs font-mono text-slate-300 space-y-2">
                <div className="text-slate-500 pb-2 border-b border-slate-800 text-[11px]">
                  INTAKE_RECEIPT: TRD-PILOT-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Representative:</span>
                  <span className="text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Primary Requirement:</span>
                  <span className="text-[#2DD4BF] uppercase">{formData.primaryRequirement.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Timeline:</span>
                  <span className="text-white">{formData.deploymentTimeline.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Company Size:</span>
                  <span className="text-white">{formData.companySize} employees</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
                >
                  Submit Another Ingestion Request
                </button>
                <button
                  onClick={() => onNavigate('architecture')}
                  className="px-5 py-2.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white text-xs font-mono transition-colors"
                >
                  Review Technical Architecture While Waiting
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#F7F9FC] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
              
              <div className="pb-8 border-b border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-[#2F5FFF] font-semibold">
                  Intake Specification
                </span>
                <h2 className="text-2xl font-serif font-semibold text-slate-900 mt-1">
                  Qualifying Questionnaire
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  All fields are used strictly for technical triage and sandbox environment allocation.
                </p>
              </div>

              {errorMsg && (
                <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Helena Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#2F5FFF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2">
                      Institutional Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. h.vance@fintech-bank.io"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#2F5FFF] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Company and Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Payment Rail Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#2F5FFF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2">
                      Company Size
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#2F5FFF] transition-colors"
                    >
                      <option value="1-50">1 – 50 employees</option>
                      <option value="50-250">50 – 250 employees</option>
                      <option value="250-1000">250 – 1,000 employees</option>
                      <option value="1000+">1,000+ employees (Tier-1 Institution)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Primary Requirement & Deployment Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2">
                      Primary Detection Requirement
                    </label>
                    <select
                      value={formData.primaryRequirement}
                      onChange={(e) => setFormData({ ...formData, primaryRequirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#2F5FFF] transition-colors"
                    >
                      <option value="mule_networks">Mule Networks & Coordinated Rings</option>
                      <option value="account_takeover">Account Takeover (ATO) Detection</option>
                      <option value="synthetic_identity">Synthetic Identity Detection</option>
                      <option value="general_fraud">General Transaction Anomaly & Risk Scoring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2">
                      Target Deployment Timeline
                    </label>
                    <select
                      value={formData.deploymentTimeline}
                      onChange={(e) => setFormData({ ...formData, deploymentTimeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#2F5FFF] transition-colors"
                    >
                      <option value="immediate_30_days">Immediate (within 30 days)</option>
                      <option value="1_to_3_months">1 – 3 months</option>
                      <option value="3_to_6_months">3 – 6 months</option>
                      <option value="exploratory_evaluation">Exploratory / RFI Vendor Due Diligence</option>
                    </select>
                  </div>
                </div>

                {/* Free Text Environment Field */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2">
                    Tell us about your environment
                  </label>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Current fraud/rule engine tools, monthly transaction volume, latency requirements, or preferred integration protocols (e.g. gRPC, Kafka, REST).
                  </p>
                  <textarea
                    rows={4}
                    placeholder="e.g. We process ~12M card authorizations per month. Current rule engine creates excessive false positives on cross-border transactions. Looking for sub-40ms in-line evaluation."
                    value={formData.environmentDetails}
                    onChange={(e) => setFormData({ ...formData, environmentDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#2F5FFF] transition-colors font-sans"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
                    <span>Protected by mutual NDA and enterprise privacy standards</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] disabled:opacity-60 text-white font-medium text-sm transition-all shadow-md shadow-[#2F5FFF]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Validating Environment...' : 'Submit Qualification Request'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
