import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { PAGES } from '../data/pages';
import { Search, X, ArrowRight, Layers, Shield, Cpu, ExternalLink } from 'lucide-react';

interface QuickNavigatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (id: PageId) => void;
  currentPage: PageId;
}

export const QuickNavigator: React.FC<QuickNavigatorProps> = ({
  isOpen,
  onClose,
  onSelectPage,
  currentPage
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = PAGES.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.navLabel.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#0C1220] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#0F1728]">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            placeholder="Jump to page or system topic (e.g. Architecture, ATO, Compliance)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              No matching pages found for "{query}".
            </div>
          ) : (
            filtered.map((page) => {
              const isCurrent = page.id === currentPage;
              return (
                <button
                  key={page.id}
                  onClick={() => {
                    onSelectPage(page.id);
                    onClose();
                  }}
                  className={`w-full text-left p-3 rounded-xl flex items-start justify-between gap-3 transition-colors ${
                    isCurrent
                      ? 'bg-[#162138] border border-[#2F5FFF]/50'
                      : 'hover:bg-[#121A2C] border border-transparent'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-200 text-sm">
                        {page.navLabel}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-800 text-slate-400">
                        {page.category}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-mono text-[#2DD4BF]">
                          Current Page
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {page.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                </button>
              );
            })
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="px-4 py-2.5 bg-[#090D18] border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>All 14 Institutional Sections Available</span>
          <span>Press ESC or click backdrop to close</span>
        </div>
      </div>
    </div>
  );
};
