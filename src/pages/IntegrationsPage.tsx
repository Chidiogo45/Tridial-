import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  CreditCard, 
  Layers, 
  Server, 
  Cpu, 
  GitMerge, 
  ArrowRight, 
  CheckCircle2, 
  FileCode, 
  Terminal, 
  Zap 
} from 'lucide-react';

interface IntegrationsPageProps {
  onNavigate: (page: PageId) => void;
}

export const IntegrationsPage: React.FC<IntegrationsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rails' | 'cores' | 'brokers'>('all');

  const categories = [
    {
      type: 'rails',
      title: 'Payment Rails & Settlement Networks',
      description: 'Works inline with global card networks, domestic real-time settlement rails, and international wire pipelines.',
      items: [
        { name: 'Instant Payment Networks', desc: 'Direct webhook intercept for sub-second faster payments and account-to-account rails.' },
        { name: 'Global Card Schemes', desc: 'Pre-authorization risk scoring during standard 0100/0110 ISO 8583 message loops.' },
        { name: 'ISO 20022 Clearing Streams', desc: 'Native parsing of pacs.008, pacs.002, and camt.053 message topologies.' },
        { name: 'Cross-Border Wire Transfers', desc: 'Multi-hop correspondent banking path evaluation before settlement release.' }
      ]
    },
    {
      type: 'cores',
      title: 'Core Banking & Ledger Engines',
      description: 'Integrates as an overlay across modern and legacy core ledger platforms without schema alterations.',
      items: [
        { name: 'Event-Driven Ledger Cores', desc: 'Subscribes to account debit/credit events with idempotent replay safeguards.' },
        { name: 'Card Management Systems (CMS)', desc: 'Provides real-time decision payloads for card authorization and step-up rules.' },
        { name: 'Digital Wallet Engines', desc: 'Inspects wallet-to-wallet transfers, cash-in vouchers, and merchant checkout APIs.' },
        { name: 'Loan Origination Systems (LOS)', desc: 'Validates applicant device and identity clusters prior to capital disbursement.' }
      ]
    },
    {
      type: 'brokers',
      title: 'Streaming Infrastructure & Message Brokers',
      description: 'Zero-backpressure connectors for modern enterprise streaming backbones.',
      items: [
        { name: 'Apache Kafka & Confluent', desc: 'Pre-built consumer sinks processing up to 85,000 transaction events/sec.' },
        { name: 'RabbitMQ / AMQP 0-9-1', desc: 'Synchronous and asynchronous queue workers with configurable prefetch.' },
        { name: 'AWS SQS / GCP PubSub / Azure Service Bus', desc: 'Native cloud-native event subscriptions with dead-letter queue handlers.' },
        { name: 'Bidirectional REST & gRPC Webhooks', desc: 'Synchronous API hooks delivering verdicts in under 35 milliseconds.' }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.type === selectedCategory);

  return (
    <div className="w-full bg-transparent">
      {/* Header */}
      <section className="text-white py-16 sm:py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Ecosystem Connectivity
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Fintech Infrastructure Integrations.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tridial connects to your existing pipeline as a non-invasive overlay. Whether your transactions move over ISO 20022 rails, Kafka streams, or gRPC endpoints, integration requires zero core ledger refactoring.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter and Grid */}
      <section className="py-16 sm:py-24 border-b border-slate-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-300/40 pb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedCategory === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white border border-slate-200/80'
              }`}
            >
              All Integrations (12)
            </button>
            <button
              onClick={() => setSelectedCategory('rails')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedCategory === 'rails' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white border border-slate-200/80'
              }`}
            >
              Payment Rails & ISO 20022
            </button>
            <button
              onClick={() => setSelectedCategory('cores')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedCategory === 'cores' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white border border-slate-200/80'
              }`}
            >
              Core Banking & Ledgers
            </button>
            <button
              onClick={() => setSelectedCategory('brokers')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedCategory === 'brokers' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white border border-slate-200/80'
              }`}
            >
              Kafka & Event Brokers
            </button>
          </div>

          {/* Cards Display */}
          <div className="space-y-12">
            {filteredCategories.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-2xl text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="p-6 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="font-serif font-semibold text-slate-900 text-base">
                          {item.name}
                        </div>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-6 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-[#2F5FFF] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                        <span>Pre-built connector verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Code Snippet: Example Webhook Ingestion */}
      <section className="py-16 sm:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF]">
              Developer Walkthrough
            </span>
            <h3 className="text-2xl font-serif font-semibold text-white mt-1">
              Sample In-Line Authorization Handler (TypeScript / Node)
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Call Tridial within your existing transaction authorization middleware with a simple promise-based evaluation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0B0F1A]/90 backdrop-blur-md border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto shadow-2xl">
            <pre className="leading-relaxed">
{`import { TridialClient } from '@tridial/inference-sdk';

const tridial = new TridialClient({
  endpoint: process.env.TRIDIAL_GRPC_ENDPOINT,
  certPath: '/etc/ssl/certs/tridial-mtls.pem',
  timeoutMs: 35 // Guaranteed strict SLA
});

export async function authorizeTransaction(paymentEvent: PaymentRequest) {
  // 1. Submit event to live in-memory graph correlation engine
  const evaluation = await tridial.evaluate({
    transactionId: paymentEvent.id,
    senderHash: hashAccount(paymentEvent.senderId),
    receiverHash: hashAccount(paymentEvent.receiverId),
    amount: paymentEvent.amountUsd,
    deviceFingerprint: paymentEvent.clientHeaders['x-device-hash'],
    egressIpHash: hashIp(paymentEvent.clientIp)
  });

  // 2. Enforce deterministic policy before rail commitment
  if (evaluation.directive === 'HOLD_FOR_REVIEW') {
    await ledger.placeTemporaryHold(paymentEvent.id, {
      reason: evaluation.explainabilitySummary, // e.g. "3 linked accounts in 40s"
      riskScore: evaluation.riskScore,
      graphLineageProof: evaluation.signedReceipt
    });
    return { status: 'HELD_PENDING_ANALYST_CONFIRMATION' };
  }

  // 3. Clear transaction if normal
  return await settlementGateway.executeClearing(paymentEvent);
}`}
            </pre>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 rounded-lg bg-[#2F5FFF] hover:bg-[#1e4ee8] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Request SDK Documentation & API Keys
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
