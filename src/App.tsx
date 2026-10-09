import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { QuickNavigator } from './components/QuickNavigator';

// 14 Full Pages
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { QuotePage } from './pages/QuotePage';
import { CompliancePage } from './pages/CompliancePage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { GraphDetectionPage } from './pages/GraphDetectionPage';
import { TrustCenterPage } from './pages/TrustCenterPage';
import { StatusPage } from './pages/StatusPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuickNavOpen, setIsQuickNavOpen] = useState<boolean>(false);

  // Sync hash routing with state on mount & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 'platform', 'how-it-works', 'architecture', 'capabilities',
        'roadmap', 'pricing', 'about', 'quote', 'compliance',
        'integrations', 'graph-detection', 'trust-center', 'status'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut Cmd+K / Ctrl+K for quick jump
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsQuickNavOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'platform':
        return <PlatformPage onNavigate={handleNavigate} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case 'architecture':
        return <ArchitecturePage onNavigate={handleNavigate} />;
      case 'capabilities':
        return <CapabilitiesPage onNavigate={handleNavigate} />;
      case 'roadmap':
        return <RoadmapPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'quote':
        return <QuotePage onNavigate={handleNavigate} />;
      case 'compliance':
        return <CompliancePage onNavigate={handleNavigate} />;
      case 'integrations':
        return <IntegrationsPage onNavigate={handleNavigate} />;
      case 'graph-detection':
        return <GraphDetectionPage onNavigate={handleNavigate} />;
      case 'trust-center':
        return <TrustCenterPage onNavigate={handleNavigate} />;
      case 'status':
        return <StatusPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-slate-100 flex flex-col font-sans selection:bg-[#2F5FFF] selection:text-white">
      {/* Top Main Navigation */}
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsQuickNavOpen(true)}
      />

      {/* Dynamic View Router */}
      <main className="flex-1 w-full flex flex-col">
        {renderCurrentPage()}
      </main>

      {/* Global Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cmd+K Quick Navigator Dialog */}
      <QuickNavigator
        isOpen={isQuickNavOpen}
        onClose={() => setIsQuickNavOpen(false)}
        onSelectPage={handleNavigate}
        currentPage={currentPage}
      />
    </div>
  );
}
