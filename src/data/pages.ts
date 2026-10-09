import { PageMeta } from '../types';

export const PAGES: PageMeta[] = [
  {
    id: 'home',
    title: 'Tridial — Real-Time Transaction Graph Fraud Detection',
    navLabel: 'Home',
    category: 'product',
    description: 'Transaction-graph anomaly modeling for fintechs, digital banks, and payment processors.'
  },
  {
    id: 'platform',
    title: 'Platform Overview',
    navLabel: 'Platform',
    category: 'product',
    description: 'Real-time graph modeling of accounts, devices, and behavior vs static rule-based systems.'
  },
  {
    id: 'how-it-works',
    title: 'How It Works',
    navLabel: 'How It Works',
    category: 'product',
    description: 'Connect, Correlate, Explain, and Act: Walkthrough of live transaction anomaly detection.'
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    navLabel: 'Architecture',
    category: 'technical',
    description: 'Deep technical blueprint: Pipeline ingestion, subgraph correlation, ML inference, and p99 latency specs.'
  },
  {
    id: 'capabilities',
    title: 'Core Capabilities',
    navLabel: 'Capabilities',
    category: 'product',
    description: 'The four specialized detection capabilities: ATO, Synthetic Identity, Mule Networks, and Risk Scoring.'
  },
  {
    id: 'graph-detection',
    title: 'The Case for Graph-Based Detection',
    navLabel: 'Graph vs Rules',
    category: 'technical',
    description: 'Why static conditional rules fail against multi-account coordinated fraud rings.'
  },
  {
    id: 'integrations',
    title: 'Integrations & Ecosystem',
    navLabel: 'Integrations',
    category: 'technical',
    description: 'Connects to payment rails, core banking engines, message brokers, and ISO 20022 pipelines.'
  },
  {
    id: 'compliance',
    title: 'Compliance & Regulatory Fit',
    navLabel: 'Compliance',
    category: 'governance',
    description: 'Supports AML/CFT mandates, auditability, explainable decisions, and SAR documentation.'
  },
  {
    id: 'trust-center',
    title: 'Trust Center',
    navLabel: 'Trust Center',
    category: 'governance',
    description: 'Consolidated security practices, privacy policy, responsible AI standards, and data handling.'
  },
  {
    id: 'status',
    title: 'System Status & Operational Uptime',
    navLabel: 'Status',
    category: 'technical',
    description: 'Real-time metrics on ingestion endpoints, graph compute clusters, and webhook dispatch latency.'
  },
  {
    id: 'pricing',
    title: 'Pricing & Pilot Structure',
    navLabel: 'Pricing',
    category: 'company',
    description: 'Transparent volume-based pricing model without arbitrary tiers or feature gates.'
  },
  {
    id: 'roadmap',
    title: 'Product Roadmap',
    navLabel: 'Roadmap',
    category: 'company',
    description: 'Current platform deliverables, near-term enhancements, and institutional technical direction.'
  },
  {
    id: 'about',
    title: 'About Tridial',
    navLabel: 'About',
    category: 'company',
    description: 'Founder note on why transaction-graph infrastructure is required for global digital finance.'
  },
  {
    id: 'quote',
    title: 'Get a Quote / Request Pilot',
    navLabel: 'Request Pilot',
    category: 'company',
    description: 'Qualifying intake form for engineering and risk teams evaluating Tridial.'
  }
];
