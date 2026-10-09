export type PageId =
  | 'home'
  | 'platform'
  | 'how-it-works'
  | 'architecture'
  | 'capabilities'
  | 'roadmap'
  | 'pricing'
  | 'about'
  | 'quote'
  | 'compliance'
  | 'integrations'
  | 'graph-detection'
  | 'trust-center'
  | 'status';

export interface PageMeta {
  id: PageId;
  title: string;
  navLabel: string;
  category: 'product' | 'technical' | 'governance' | 'company';
  description: string;
}

export interface QuoteFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  companySize: string;
  primaryRequirement: string;
  deploymentTimeline: string;
  environmentDetails: string;
}

export interface TransactionNode {
  id: string;
  type: 'account' | 'device' | 'ip' | 'merchant' | 'card';
  label: string;
  sublabel: string;
  x: number;
  y: number;
  isFlagged?: boolean;
  riskScore?: number;
  details?: Record<string, string>;
}

export interface TransactionEdge {
  from: string;
  to: string;
  label?: string;
  isSuspicious?: boolean;
}
