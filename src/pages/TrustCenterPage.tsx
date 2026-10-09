import React, { useState } from 'react';
import { PageId } from '../types';
import { ShieldCheck, Lock, Eye, FileText, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface TrustCenterPageProps {
  onNavigate: (page: PageId) => void;
}

export const TrustCenterPage: React.FC<TrustCenterPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<'security' | 'privacy' | 'ai' | 'data'>('security');

  const scrollToSection = (id: 'security' | 'privacy' | 'ai' | 'data') => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0B0F1A]">
      {/* Header */}
      <section className="bg-[#0B0F1A] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Institutional Assurance
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Tridial Trust Center.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A single consolidated portal containing our verified security controls, comprehensive privacy policy, ethical AI principles, and technical data handling standards.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump Section Bar */}
      <div className="sticky top-16 z-30 bg-[#F7F9FC] border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto text-xs font-mono">
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="text-slate-500 uppercase tracking-wider hidden md:inline">Jump to Section:</span>
            <button
              onClick={() => scrollToSection('security')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeSection === 'security' ? 'bg-[#0B0F1A] text-white' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              1. Security Practices
            </button>
            <button
              onClick={() => scrollToSection('privacy')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeSection === 'privacy' ? 'bg-[#0B0F1A] text-white' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              2. Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection('ai')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeSection === 'ai' ? 'bg-[#0B0F1A] text-white' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              3. Responsible AI Approach
            </button>
            <button
              onClick={() => scrollToSection('data')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeSection === 'data' ? 'bg-[#0B0F1A] text-white' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              4. Data Handling Practices
            </button>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="text-[#2F5FFF] hover:underline font-semibold shrink-0 pl-4 hidden sm:block"
          >
            Request Full Security Audit Pack &rarr;
          </button>
        </div>
      </div>

      {/* 4 Comprehensive Sections in One Consolidated Page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 font-sans">
        
        {/* SECTION 1: SECURITY PRACTICES */}
        <section id="security" className="scroll-mt-36 space-y-6 pt-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2F5FFF]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#2F5FFF] uppercase">Section 01</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900">
                Security Practices & Infrastructure Hardening
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Tridial treats information security as an existential baseline. Our architecture is designed so that even in the unlikely event of an edge node compromise, raw financial records cannot be extracted.
            </p>

            <h3 className="font-serif font-semibold text-slate-900 text-base pt-2">Key Security Controls:</h3>
            <ul className="space-y-2.5 pl-4 list-disc text-slate-600">
              <li><strong>Zero Persistent Storage at Edge Nodes:</strong> In-flight transaction payloads are evaluated entirely in volatile memory and purged immediately after response delivery.</li>
              <li><strong>Mutual TLS (mTLS 1.3) Everywhere:</strong> All customer API traffic requires bidirectional cryptographic certificate validation. Unauthorized requests are dropped at the network interface layer.</li>
              <li><strong>Hardware Security Modules (HSM):</strong> All signing keys for cryptographic receipts and pseudonymization salts are stored in FIPS 140-2 Level 3 validated HSM clusters.</li>
              <li><strong>Third-Party Penetration Testing:</strong> Our codebase, API endpoints, and VPC enclaves undergo continuous automated vulnerability scanning and bi-annual independent penetration audits by certified security firms.</li>
              <li><strong>SOC 2 Type II and ISO 27001 Alignment:</strong> Operations adhere to strict least-privilege role-based access control (RBAC), immutable system logging, and automated change management.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 2: PRIVACY POLICY */}
        <section id="privacy" className="scroll-mt-36 space-y-6 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-teal-700 uppercase">Section 02</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900">
                Enterprise Privacy Policy
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              This policy governs data processed by Tridial Infrastructure Technologies Inc. as a data processor on behalf of customer financial institutions.
            </p>

            <h3 className="font-serif font-semibold text-slate-900 text-base pt-2">Plain-Language Commitments:</h3>
            <ul className="space-y-2.5 pl-4 list-disc text-slate-600">
              <li><strong>No Data Monetization or Brokerage:</strong> Tridial will never sell, lease, or monetize customer transaction data. We do not aggregate customer identity graphs into public data brokerage sets.</li>
              <li><strong>Pseudonymization by Default:</strong> Customer systems are instructed to hash or tokenize PII (such as national ID numbers, customer legal names, and primary account numbers) before transmission.</li>
              <li><strong>Data Residency Sovereignty:</strong> Customer transactions are evaluated within designated geographic regions. Data routed to our European, North American, or Asia-Pacific compute zones remains strictly within those sovereign legal jurisdictions.</li>
              <li><strong>Sub-Processor Transparency:</strong> We publish an exhaustive, audited list of infrastructure sub-processors (cloud hosts and hardware key providers). Notice of any change is provided 30 days in advance.</li>
              <li><strong>Right to Deletion:</strong> Upon termination of service or upon customer instruction, all customer-associated topological graphs, configuration profiles, and cache segments are cryptographically purged within 14 calendar days.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: RESPONSIBLE AI APPROACH */}
        <section id="ai" className="scroll-mt-36 space-y-6 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-700 uppercase">Section 03</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900">
                Responsible AI & Algorithmic Integrity
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Artificial intelligence used in financial underwriting and transaction clearing carries profound societal responsibility. Tridial rejects black-box neural networks that cannot explain their decisions.
            </p>

            <h3 className="font-serif font-semibold text-slate-900 text-base pt-2">Our Mathematical Standards:</h3>
            <ul className="space-y-2.5 pl-4 list-disc text-slate-600">
              <li><strong>Mathematical Explainability (No Black Boxes):</strong> Every anomaly flag is decomposed into explicit SHAP (Shapley Additive Explanations) factor weights. Risk officers can see exactly why a score was generated (e.g. 48% hardware reuse, 36% burst velocity, 16% hop distance).</li>
              <li><strong>Exclusion of Protected Attributes:</strong> Tridial models do not ingest demographic attributes, gender, race, religious affiliation, or postal code proxies. Models evaluate exclusively topological graph structures and mathematical velocity.</li>
              <li><strong>Continuous Model Drift Auditing:</strong> Machine learning embeddings are benchmarked daily against rolling control distributions to prevent automated bias drift or sudden false positive shifts.</li>
              <li><strong>Human-in-the-Loop Authority:</strong> Tridial generates actionable recommendations (ALLOW, HOLD, STEP_UP, REJECT), but decision thresholds and final policy discretion always remain under human control.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 4: DATA HANDLING PRACTICES */}
        <section id="data" className="scroll-mt-36 space-y-6 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-700 uppercase">Section 04</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900">
                Data Handling & Lifecycle Architecture
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Details of how customer transaction streams move through our memory layers, encryption boundaries, and retention windows:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-serif text-sm">Data in Transit</strong>
                <p className="text-xs text-slate-600">
                  Encrypted using TLS 1.3 with AES-256-GCM and forward secrecy. Legacy protocols (TLS 1.0, 1.1, and insecure ciphers) are permanently disabled at our edge reverse proxies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-serif text-sm">Data at Rest</strong>
                <p className="text-xs text-slate-600">
                  Where configuration state or model weights are stored, volume-level AES-256 encryption is enforced with customer-managed encryption keys (CMEK) via AWS/GCP KMS.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-serif text-sm">Retention Windows</strong>
                <p className="text-xs text-slate-600">
                  Ephemeral transaction hops automatically decay from active RAM after 30 to 90 days (configurable per institutional compliance policy). Historical logs are compressed into encrypted cold storage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-serif text-sm">Disaster Recovery & RPO/RTO</strong>
                <p className="text-xs text-slate-600">
                  Active-Active multi-availability zone failover. Recovery Point Objective (RPO) = 0 seconds; Recovery Time Objective (RTO) &lt; 5 seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Pack Request CTA */}
        <div className="p-8 rounded-2xl bg-[#0C1220] border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-semibold text-xl">
              Conducting Vendor Due Diligence?
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              We provide our comprehensive institutional audit binder (SOC 2, ISO 27001, penetration test executive summaries, and standard DPA) under mutual NDA.
            </p>
          </div>
          <button
            onClick={() => onNavigate('quote')}
            className="px-6 py-3 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
          >
            Request Due Diligence Package
          </button>
        </div>

      </div>
    </div>
  );
};
