import React, { useState } from 'react';
import { PageId } from '../types';
import { PAGES } from '../data/pages';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Activity, 
  Layers, 
  ShieldCheck, 
  GitMerge, 
  Cpu, 
  BookOpen, 
  Lock, 
  FileText, 
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'product' | 'tech' | null>(null);

  const productLinks = PAGES.filter(p => ['platform', 'how-it-works', 'architecture', 'capabilities', 'graph-detection'].includes(p.id));
  const governanceLinks = PAGES.filter(p => ['compliance', 'integrations', 'trust-center', 'status'].includes(p.id));

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0F1A]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logomark & Name */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="Tridial Home"
          >
            {/* Custom transaction-graph node mark */}
            <div className="relative w-8 h-8 rounded-lg bg-[#111827] border border-slate-700/80 flex items-center justify-center group-hover:border-[#2F5FFF] transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <line x1="6" y1="18" x2="12" y2="7" stroke="#2F5FFF" strokeWidth="2" />
                <line x1="12" y1="7" x2="18" y2="18" stroke="#2DD4BF" strokeWidth="2" />
                <line x1="6" y1="18" x2="18" y2="18" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="6" cy="18" r="2.5" fill="#2F5FFF" />
                <circle cx="12" cy="7" r="2.5" fill="#2DD4BF" />
                <circle cx="18" cy="18" r="2.5" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="font-serif text-lg font-semibold tracking-tight text-white group-hover:text-slate-100 transition-colors">
              Tridial
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors ${
                  productLinks.some(p => p.id === currentPage) ? 'text-[#2F5FFF] font-semibold' : ''
                }`}
              >
                <span>Platform & Engine</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 w-80 p-2 mt-1 rounded-xl bg-[#0E1524] border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-3 py-1 border-b border-slate-800 mb-1">
                    Detection Architecture
                  </div>
                  {productLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left p-2.5 rounded-lg flex flex-col transition-colors ${
                        currentPage === item.id ? 'bg-[#18243E] text-white' : 'hover:bg-slate-800/70 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span>{item.navLabel}</span>
                        {item.id === 'architecture' && (
                          <span className="text-[9px] font-mono text-[#2DD4BF] bg-[#2DD4BF]/10 px-1.5 py-0.5 rounded">p99 &lt; 35ms</span>
                        )}
                        {item.id === 'capabilities' && (
                          <span className="text-[9px] font-mono text-slate-400">4 Core Models</span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {item.description}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Governance & Tech Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('tech')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors ${
                  governanceLinks.some(p => p.id === currentPage) ? 'text-[#2F5FFF] font-semibold' : ''
                }`}
              >
                <span>Governance & Infra</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'tech' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'tech' && (
                <div className="absolute top-full left-0 w-80 p-2 mt-1 rounded-xl bg-[#0E1524] border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-3 py-1 border-b border-slate-800 mb-1">
                    Regulatory & Integrations
                  </div>
                  {governanceLinks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left p-2.5 rounded-lg flex flex-col transition-colors ${
                        currentPage === item.id ? 'bg-[#18243E] text-white' : 'hover:bg-slate-800/70 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span>{item.navLabel}</span>
                        {item.id === 'status' && (
                          <span className="flex items-center gap-1 text-[10px] font-mono text-[#2DD4BF]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                            99.99%
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {item.description}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <button
              onClick={() => handleNavClick('roadmap')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'roadmap' ? 'text-[#2F5FFF] font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Roadmap
            </button>

            <button
              onClick={() => handleNavClick('pricing')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'pricing' ? 'text-[#2F5FFF] font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'about' ? 'text-[#2F5FFF] font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              About
            </button>
          </nav>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Status Quick Badge */}
          <button
            onClick={() => handleNavClick('status')}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:border-slate-700 transition-colors"
            title="View system status"
          >
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <span className="text-slate-400">Live SLA:</span>
            <span className="text-slate-200">Operational</span>
          </button>

          {/* Quick Page Jump ⌘K */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            title="Search pages (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline font-mono text-[11px]">Jump to page</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 rounded border border-slate-700 text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => handleNavClick('quote')}
            className="px-4 py-2 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white text-xs sm:text-sm font-medium transition-all shadow-md shadow-[#2F5FFF]/20 cursor-pointer flex items-center gap-1.5"
          >
            <span>Request Pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E18] border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-1">
            Platform & Architecture
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {productLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  currentPage === item.id ? 'bg-[#2F5FFF] text-white' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.navLabel}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-2 border-t border-slate-800/80">
            Governance, Infrastructure & Trust
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {governanceLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  currentPage === item.id ? 'bg-[#2F5FFF] text-white' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.navLabel}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 pt-2 border-t border-slate-800/80">
            Company & Pricing
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {['roadmap', 'pricing', 'about'].map((id) => {
              const p = PAGES.find(x => x.id === id);
              if (!p) return null;
              return (
                <button
                  key={p.id}
                  onClick={() => handleNavClick(p.id)}
                  className={`text-center px-2 py-2 rounded-lg text-xs font-medium transition-colors ${
                    currentPage === p.id ? 'bg-[#2F5FFF] text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {p.navLabel}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('quote')}
              className="w-full py-2.5 rounded-lg bg-[#2F5FFF] text-white font-medium text-xs text-center"
            >
              Get a Quote / Request Pilot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
