import React from 'react';
import { PageId } from '../types';
import { PAGES } from '../data/pages';
import { Activity, ArrowUpRight, ShieldCheck, GitFork } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handlePageClick = (id: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A12] border-t border-slate-800 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#111827] border border-slate-700/80 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                  <line x1="6" y1="18" x2="12" y2="7" stroke="#2F5FFF" strokeWidth="2" />
                  <line x1="12" y1="7" x2="18" y2="18" stroke="#2DD4BF" strokeWidth="2" />
                  <circle cx="6" cy="18" r="2.5" fill="#2F5FFF" />
                  <circle cx="12" cy="7" r="2.5" fill="#2DD4BF" />
                  <circle cx="18" cy="18" r="2.5" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="font-serif text-lg font-semibold text-white tracking-tight">
                Tridial
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Real-time transaction-graph anomaly detection for digital banks, payment processors, and fintech infrastructure. Intercepting coordinated mule rings, synthetic identities, and account takeovers before settlement.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                <span className="text-slate-300">Global Cluster Operational</span>
              </div>
              <span>·</span>
              <span>p99 Latency &lt; 35ms</span>
            </div>
          </div>

          {/* Column 1: Core Platform */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-200">
              Platform & Detection
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={(e) => handlePageClick('platform', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  Platform Overview
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('how-it-works', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  How It Works (4 Steps)
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('architecture', e)}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>Technical Architecture</span>
                  <span className="text-[10px] font-mono text-[#2DD4BF] bg-[#2DD4BF]/10 px-1 rounded">Deep</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('capabilities', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  Core 4 Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('graph-detection', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  The Case for Graph Detection
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Governance & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-200">
              Governance & Infra
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={(e) => handlePageClick('compliance', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  Compliance & AML Fit
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('integrations', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  Integrations & Rails
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('trust-center', e)}
                  className="hover:text-white transition-colors text-left font-medium text-slate-300"
                >
                  Trust Center (Security & AI)
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('status', e)}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>System Status & Uptime</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial & Evaluation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-200">
              Evaluation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={(e) => handlePageClick('quote', e)}
                  className="text-[#2F5FFF] hover:text-[#1e4ee8] font-medium transition-colors text-left flex items-center gap-1"
                >
                  <span>Request Pilot / Get Quote</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('pricing', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  Usage-Based Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('roadmap', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  Product Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handlePageClick('about', e)}
                  className="hover:text-white transition-colors text-left"
                >
                  About & Founder Note
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Tridial Infrastructure Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={(e) => handlePageClick('trust-center', e)} className="hover:text-slate-400 transition-colors">
              Security Practices
            </button>
            <button onClick={(e) => handlePageClick('trust-center', e)} className="hover:text-slate-400 transition-colors">
              Responsible AI
            </button>
            <button onClick={(e) => handlePageClick('trust-center', e)} className="hover:text-slate-400 transition-colors">
              Data Privacy
            </button>
            <button onClick={(e) => handlePageClick('quote', e)} className="hover:text-slate-400 transition-colors">
              Contact Risk Team
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
