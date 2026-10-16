import React, { useState, useEffect, useRef } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  BarChart, 
  Bar, 
  Cell, 
  PieChart, 
  Pie, 
  Legend,
  ReferenceLine
} from 'recharts';
import { 
  Activity, 
  AlertTriangle, 
  ShieldAlert, 
  Play, 
  Pause, 
  RefreshCw, 
  Zap, 
  Network, 
  Sliders, 
  Filter, 
  Clock, 
  Layers, 
  Radio, 
  Eye, 
  X, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export interface SimulatedTransaction {
  id: string;
  timestamp: string;
  amount: number;
  currency: string;
  anomalyScore: number; // 0-100
  taxonomy: 'Mule Network Ring' | 'Synthetic Identity Farm' | 'Card Testing Sweep' | 'Account Takeover' | 'Legitimate';
  hops: number;
  latencyMs: number;
  status: 'INTERCEPTED' | 'STEP_UP_CHALLENGE' | 'CLEARED';
  sourceAccount: string;
  targetAccount: string;
  deviceClusterId: string;
  ipSubnet: string;
  subgraphReason: string;
  nodePath: string[];
}

// Initial time-series data points
interface TimeSeriesPoint {
  time: string;
  tps: number;
  anomalyRate: number; // percentage
  anomaliesCount: number;
  latencyP99: number;
}

const INITIAL_TIME_SERIES: TimeSeriesPoint[] = [
  { time: '14:20:00', tps: 2840, anomalyRate: 0.8, anomaliesCount: 22, latencyP99: 16.2 },
  { time: '14:20:05', tps: 2910, anomalyRate: 0.9, anomaliesCount: 26, latencyP99: 17.1 },
  { time: '14:20:10', tps: 2890, anomalyRate: 0.7, anomaliesCount: 20, latencyP99: 15.8 },
  { time: '14:20:15', tps: 3120, anomalyRate: 1.2, anomaliesCount: 37, latencyP99: 18.4 },
  { time: '14:20:20', tps: 3050, anomalyRate: 0.8, anomaliesCount: 24, latencyP99: 16.9 },
  { time: '14:20:25', tps: 3200, anomalyRate: 1.1, anomaliesCount: 35, latencyP99: 17.5 },
  { time: '14:20:30', tps: 3450, anomalyRate: 4.8, anomaliesCount: 165, latencyP99: 21.3 },
  { time: '14:20:35', tps: 3780, anomalyRate: 11.2, anomaliesCount: 423, latencyP99: 24.8 },
  { time: '14:20:40', tps: 3910, anomalyRate: 16.5, anomaliesCount: 645, latencyP99: 27.2 },
  { time: '14:20:45', tps: 3620, anomalyRate: 14.1, anomaliesCount: 510, latencyP99: 25.1 },
  { time: '14:20:50', tps: 3240, anomalyRate: 6.4, anomaliesCount: 207, latencyP99: 20.4 },
  { time: '14:20:55', tps: 2980, anomalyRate: 1.5, anomaliesCount: 44, latencyP99: 18.0 },
  { time: '14:21:00', tps: 2920, anomalyRate: 0.9, anomaliesCount: 26, latencyP99: 16.7 },
  { time: '14:21:05', tps: 2880, anomalyRate: 0.8, anomaliesCount: 23, latencyP99: 16.3 }
];

const TAXONOMY_DISTRIBUTION = [
  { name: 'Mule Network Rings', count: 48, color: '#2F5FFF', percentage: '38%' },
  { name: 'Synthetic Identity Farms', count: 32, color: '#2DD4BF', percentage: '25%' },
  { name: 'Card Testing Sweeps', count: 24, color: '#F59E0B', percentage: '19%' },
  { name: 'Account Takeovers', count: 18, color: '#F43F5E', percentage: '14%' },
  { name: 'Velocity Bursts', count: 6, color: '#8B5CF6', percentage: '4%' }
];

const LATENCY_DISTRIBUTION = [
  { bucket: '< 10ms', count: 1420, label: 'Optimal Ingress' },
  { bucket: '10-20ms', count: 2840, label: 'Graph Correlation' },
  { bucket: '20-30ms', count: 910, label: 'Multi-Hop Traversal' },
  { bucket: '30-34ms', count: 180, label: 'High-Density Subgraph' },
  { bucket: '35ms+ (SLA Limit)', count: 0, label: 'Zero Violations' }
];

const INITIAL_TRANSACTIONS: SimulatedTransaction[] = [
  {
    id: 'TX-9482-1084',
    timestamp: '14:21:05.184',
    amount: 14250.00,
    currency: 'USD',
    anomalyScore: 98.4,
    taxonomy: 'Mule Network Ring',
    hops: 4,
    latencyMs: 18.4,
    status: 'INTERCEPTED',
    sourceAccount: 'ACC_88192_US',
    targetAccount: 'ACC_40192_CY',
    deviceClusterId: 'DEV_RING_8a92f',
    ipSubnet: '198.51.100.0/24 (Mullvad VPN)',
    subgraphReason: 'Closed 4-hop cyclical fund dispersion detected across 6 freshly opened neobank accounts within 82 seconds.',
    nodePath: ['ACC_88192_US', 'DEV_RING_8a92f', 'ACC_10921_US', 'ACC_33419_UK', 'ACC_40192_CY']
  },
  {
    id: 'TX-9482-1083',
    timestamp: '14:21:04.912',
    amount: 890.00,
    currency: 'USD',
    anomalyScore: 89.1,
    taxonomy: 'Synthetic Identity Farm',
    hops: 3,
    latencyMs: 14.1,
    status: 'INTERCEPTED',
    sourceAccount: 'ACC_19283_US',
    targetAccount: 'MERCH_88210_ONLINE',
    deviceClusterId: 'DEV_HASH_d902a',
    ipSubnet: '203.0.113.84 (Residential Proxy)',
    subgraphReason: 'SSN collision with 14 newly generated virtual identities sharing canvas fingerprint hash d902a.',
    nodePath: ['ACC_19283_US', 'DEV_HASH_d902a', 'ID_SSN_COLLISION', 'MERCH_88210_ONLINE']
  },
  {
    id: 'TX-9482-1082',
    timestamp: '14:21:04.220',
    amount: 1.45,
    currency: 'USD',
    anomalyScore: 78.5,
    taxonomy: 'Card Testing Sweep',
    hops: 2,
    latencyMs: 9.8,
    status: 'STEP_UP_CHALLENGE',
    sourceAccount: 'PAN_4111_****_8892',
    targetAccount: 'MERCH_90192_STRIPE',
    deviceClusterId: 'DEV_BOT_0481c',
    ipSubnet: '192.0.2.14 (Tor Exit Node)',
    subgraphReason: 'Distributed BIN enumeration attack: 28 sequential authorization attempts across distinct merchant IDs within 12 seconds.',
    nodePath: ['PAN_4111_****_8892', 'DEV_BOT_0481c', 'MERCH_90192_STRIPE']
  },
  {
    id: 'TX-9482-1081',
    timestamp: '14:21:03.882',
    amount: 4500.00,
    currency: 'EUR',
    anomalyScore: 84.2,
    taxonomy: 'Account Takeover',
    hops: 3,
    latencyMs: 16.5,
    status: 'INTERCEPTED',
    sourceAccount: 'ACC_66512_DE',
    targetAccount: 'WALLET_9182_CRYPTO',
    deviceClusterId: 'DEV_NEW_7182e',
    ipSubnet: '185.220.101.4 (Known Proxy)',
    subgraphReason: 'Immediate beneficiary addition coupled with whole-balance crypto liquidation after unexpected session credential swap.',
    nodePath: ['ACC_66512_DE', 'DEV_NEW_7182e', 'NEW_BENEFICIARY_9182', 'WALLET_9182_CRYPTO']
  },
  {
    id: 'TX-9482-1080',
    timestamp: '14:21:03.110',
    amount: 84.50,
    currency: 'USD',
    anomalyScore: 4.2,
    taxonomy: 'Legitimate',
    hops: 1,
    latencyMs: 8.2,
    status: 'CLEARED',
    sourceAccount: 'ACC_33102_US',
    targetAccount: 'MERCH_WHOLEFOODS',
    deviceClusterId: 'DEV_KNOWN_PRIMARY',
    ipSubnet: '72.14.192.0 (Comcast Cable)',
    subgraphReason: 'Normal retail merchant settlement. Established recurring device graph fingerprint and stable geolocation radius.',
    nodePath: ['ACC_33102_US', 'DEV_KNOWN_PRIMARY', 'MERCH_WHOLEFOODS']
  },
  {
    id: 'TX-9482-1079',
    timestamp: '14:21:02.502',
    amount: 320.00,
    currency: 'USD',
    anomalyScore: 6.8,
    taxonomy: 'Legitimate',
    hops: 1,
    latencyMs: 7.9,
    status: 'CLEARED',
    sourceAccount: 'ACC_12903_US',
    targetAccount: 'ACC_99210_P2P',
    deviceClusterId: 'DEV_IPHONE_15_PRO',
    ipSubnet: '172.56.21.0 (T-Mobile USA)',
    subgraphReason: 'Peer-to-peer personal reimbursement. Bi-directional historical payment link validated.',
    nodePath: ['ACC_12903_US', 'DEV_IPHONE_15_PRO', 'ACC_99210_P2P']
  }
];

export const TransactionAnomalyDashboard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [simulationScenario, setSimulationScenario] = useState<'normal' | 'mule_attack' | 'card_sweep' | 'synthetic_burst'>('mule_attack');
  const [filterTaxonomy, setFilterTaxonomy] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'time-series' | 'taxonomy' | 'latency'>('time-series');
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesPoint[]>(INITIAL_TIME_SERIES);
  const [transactions, setTransactions] = useState<SimulatedTransaction[]>(INITIAL_TRANSACTIONS);
  const [selectedTx, setSelectedTx] = useState<SimulatedTransaction | null>(INITIAL_TRANSACTIONS[0]);
  
  // Real-time metrics
  const [liveTPS, setLiveTPS] = useState<number>(3124);
  const [liveP99, setLiveP99] = useState<number>(18.4);
  const [interceptedTotal, setInterceptedTotal] = useState<number>(1482900);
  const [anomaliesLastMinute, setAnomaliesLastMinute] = useState<number>(87);

  // Interval timer for streaming simulated graph transactions
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const ms = Math.floor(Math.random() * 900) + 100;
      const fullTimestamp = `${timeStr}.${ms}`;

      // Scenario parameters
      let isAnomaly = false;
      let score = Math.floor(Math.random() * 20) + 2;
      let currentTaxonomy: SimulatedTransaction['taxonomy'] = 'Legitimate';
      let currentStatus: SimulatedTransaction['status'] = 'CLEARED';
      let latency = parseFloat((Math.random() * 10 + 6).toFixed(1));
      let amount = parseFloat((Math.random() * 300 + 15).toFixed(2));
      let hops = 1;
      let reason = 'Normal routine payment traversal within verified behavioral sub-graph.';
      let nodePath = ['ACC_BASE', 'DEV_NORMAL', 'DEST_MERCH'];

      if (simulationScenario === 'mule_attack') {
        if (Math.random() > 0.35) {
          isAnomaly = true;
          score = Math.floor(Math.random() * 20) + 80;
          currentTaxonomy = 'Mule Network Ring';
          currentStatus = 'INTERCEPTED';
          hops = Math.floor(Math.random() * 3) + 3;
          latency = parseFloat((Math.random() * 12 + 15).toFixed(1));
          amount = parseFloat((Math.random() * 9000 + 4000).toFixed(2));
          reason = `Circular ${hops}-hop fund dispersion detected across multiple mule routing nodes in < 60s.`;
          nodePath = [`ACC_${Math.floor(Math.random() * 90000)}`, 'DEV_CLUSTER_MULE', `MULE_HOP_1`, `MULE_HOP_2`, `OFFSHORE_CASH_OUT`];
        }
      } else if (simulationScenario === 'card_sweep') {
        if (Math.random() > 0.4) {
          isAnomaly = true;
          score = Math.floor(Math.random() * 25) + 70;
          currentTaxonomy = 'Card Testing Sweep';
          currentStatus = 'STEP_UP_CHALLENGE';
          hops = 2;
          latency = parseFloat((Math.random() * 6 + 9).toFixed(1));
          amount = parseFloat((Math.random() * 5 + 0.8).toFixed(2));
          reason = 'Rapid automated low-dollar BIN authorization probe across merchant gateway network.';
          nodePath = [`PAN_4111_****_${Math.floor(Math.random() * 9000)}`, 'DEV_AUTOMATION_PROBE', `MERCH_${Math.floor(Math.random() * 500)}`];
        }
      } else if (simulationScenario === 'synthetic_burst') {
        if (Math.random() > 0.45) {
          isAnomaly = true;
          score = Math.floor(Math.random() * 15) + 85;
          currentTaxonomy = 'Synthetic Identity Farm';
          currentStatus = 'INTERCEPTED';
          hops = 3;
          latency = parseFloat((Math.random() * 8 + 14).toFixed(1));
          amount = parseFloat((Math.random() * 2500 + 1200).toFixed(2));
          reason = 'Identity collision graph node linked to cluster of 12 newly synthesized consumer records.';
          nodePath = [`ACC_SYNTH_${Math.floor(Math.random() * 9000)}`, 'DEVICE_FARM_GEN_4', 'CREDIT_LINE_ORIGINATION'];
        }
      } else {
        // Normal scenario
        if (Math.random() > 0.88) {
          isAnomaly = true;
          score = Math.floor(Math.random() * 25) + 65;
          currentTaxonomy = 'Account Takeover';
          currentStatus = 'STEP_UP_CHALLENGE';
          hops = 2;
          latency = parseFloat((Math.random() * 7 + 12).toFixed(1));
          amount = parseFloat((Math.random() * 1200 + 400).toFixed(2));
          reason = 'Anomalous velocity shift and unmapped secondary device pairing.';
          nodePath = ['ACC_RETAIL', 'DEV_NEW_DEVICE', 'EXT_TRANSFER'];
        }
      }

      const newTx: SimulatedTransaction = {
        id: `TX-${Math.floor(Math.random() * 8999 + 1000)}-${Math.floor(Math.random() * 8999 + 1000)}`,
        timestamp: fullTimestamp,
        amount,
        currency: 'USD',
        anomalyScore: score,
        taxonomy: currentTaxonomy,
        hops,
        latencyMs: latency,
        status: currentStatus,
        sourceAccount: nodePath[0],
        targetAccount: nodePath[nodePath.length - 1],
        deviceClusterId: `DEV_${Math.random().toString(36).substring(2, 7)}`,
        ipSubnet: '198.51.100.x / 24',
        subgraphReason: reason,
        nodePath
      };

      // Update transactions feed
      setTransactions((prev) => [newTx, ...prev.slice(0, 19)]);

      // Update counters
      const tpsJitter = Math.floor(Math.random() * 180) - 90;
      const newTPS = Math.max(2400, liveTPS + tpsJitter);
      setLiveTPS(newTPS);
      setLiveP99(latency > 24 ? latency : parseFloat((17.5 + Math.random() * 3).toFixed(1)));
      if (isAnomaly) {
        setInterceptedTotal((prev) => prev + Math.floor(amount));
        setAnomaliesLastMinute((prev) => prev + 1);
      }

      // Update time series chart
      setTimeSeriesData((prev) => {
        const lastRate = isAnomaly ? Math.min(22, (prev[prev.length - 1]?.anomalyRate || 2) + 1.8) : Math.max(0.7, (prev[prev.length - 1]?.anomalyRate || 2) - 0.9);
        const nextPoint: TimeSeriesPoint = {
          time: timeStr,
          tps: newTPS,
          anomalyRate: parseFloat(lastRate.toFixed(1)),
          anomaliesCount: Math.floor(newTPS * (lastRate / 100)),
          latencyP99: parseFloat((16 + lastRate * 0.7).toFixed(1))
        };
        return [...prev.slice(1), nextPoint];
      });

    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying, simulationScenario, liveTPS]);

  const filteredTransactions = transactions.filter((tx) => {
    if (filterTaxonomy === 'all') return true;
    if (filterTaxonomy === 'anomalies') return tx.status !== 'CLEARED';
    return tx.taxonomy === filterTaxonomy;
  });

  return (
    <div className="w-full rounded-2xl bg-[#091022]/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl overflow-hidden text-slate-100">
      
      {/* 1. Header Toolbar & Simulation Controls */}
      <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-800/80 bg-[#0C152C]/90 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        
        {/* Left: Branding & Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-[#2F5FFF]/50 flex items-center justify-center text-[#2DD4BF] shadow-inner">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-semibold text-lg text-white tracking-tight">
                Graph Anomaly Detection Engine
              </h3>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-teal-500/15 border border-[#2DD4BF]/40 text-[#2DD4BF]">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-[#2DD4BF] animate-pulse' : 'bg-slate-400'}`} />
                {isPlaying ? 'LIVE STREAM' : 'PAUSED'}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Sub-35ms In-Memory Subgraph Evaluation · Heterogeneous Node Traversal
            </p>
          </div>
        </div>

        {/* Right: Simulation Scenarios & Playback */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center rounded-lg bg-slate-900/90 border border-slate-700/80 p-1 text-xs font-mono">
            <span className="px-2 text-slate-400 text-[11px] hidden sm:inline">Scenario:</span>
            <button
              onClick={() => setSimulationScenario('mule_attack')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                simulationScenario === 'mule_attack' 
                  ? 'bg-[#2F5FFF] text-white font-semibold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mule Ring
            </button>
            <button
              onClick={() => setSimulationScenario('synthetic_burst')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                simulationScenario === 'synthetic_burst' 
                  ? 'bg-[#2F5FFF] text-white font-semibold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Synthetic Farm
            </button>
            <button
              onClick={() => setSimulationScenario('card_sweep')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                simulationScenario === 'card_sweep' 
                  ? 'bg-[#2F5FFF] text-white font-semibold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Card Sweep
            </button>
            <button
              onClick={() => setSimulationScenario('normal')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                simulationScenario === 'normal' 
                  ? 'bg-slate-700 text-white font-semibold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Baseline
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
              isPlaying 
                ? 'bg-slate-800/80 border-slate-700 hover:bg-slate-700 text-slate-200' 
                : 'bg-emerald-600 hover:bg-emerald-500 border-emerald-500 text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-white" />}
            <span>{isPlaying ? 'Pause' : 'Resume'}</span>
          </button>
        </div>
      </div>

      {/* 2. Institutional KPI Metrics Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800/80 divide-x divide-slate-800/80 bg-[#0A1224]/80 text-xs font-mono">
        <div className="p-4 sm:p-5">
          <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>Throughput (TPS)</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1.5 flex items-baseline gap-2">
            <span>{liveTPS.toLocaleString()}</span>
            <span className="text-[11px] text-[#2DD4BF] font-normal">tx/sec</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>Kafka Ingress Peak</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#2F5FFF]" />
            <span>p99 Pre-Settlement</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1.5 flex items-baseline gap-2">
            <span>{liveP99}</span>
            <span className="text-[11px] text-[#2F5FFF] font-normal">ms</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            <span>SLA Guarantee &lt; 35ms</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Intercepted Today</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1.5 flex items-baseline gap-1">
            <span>${(interceptedTotal / 1000000).toFixed(2)}M</span>
          </div>
          <div className="text-[11px] text-emerald-400 mt-1">
            <span>100% Pre-Settlement Hold</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>False Positive Rate</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1.5 flex items-baseline gap-1">
            <span>0.012%</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            <span>vs 2.4% industry rule baseline</span>
          </div>
        </div>
      </div>

      {/* 3. Main Analytics Area: Chart Tabs & Dynamic Recharts View */}
      <div className="p-5 sm:p-6 space-y-6">
        
        {/* Chart View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('time-series')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'time-series'
                  ? 'bg-[#2F5FFF] text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Live Telemetry & Anomaly Spike Stream
            </button>
            <button
              onClick={() => setActiveTab('taxonomy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'taxonomy'
                  ? 'bg-[#2F5FFF] text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Graph Anomaly Taxonomy Breakdown
            </button>
            <button
              onClick={() => setActiveTab('latency')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'latency'
                  ? 'bg-[#2F5FFF] text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Latency Distribution (vs 35ms SLA)
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#2F5FFF]" />
              Throughput (TPS)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#F43F5E]" />
              Anomaly Rate %
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#2DD4BF]" />
              p99 Latency
            </span>
          </div>
        </div>

        {/* Chart Rendering Canvas */}
        <div className="h-72 w-full pt-2">
          {activeTab === 'time-series' && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timeSeriesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2F5FFF" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#2F5FFF" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorAnomaly" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#F43F5E" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  stroke="#64748B" 
                  fontSize={11} 
                  fontFamily="IBM Plex Mono" 
                  tickLine={false}
                />
                <YAxis 
                  yAxisId="left"
                  stroke="#64748B" 
                  fontSize={11} 
                  fontFamily="IBM Plex Mono" 
                  tickLine={false}
                  domain={[2000, 4500]}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  stroke="#F43F5E" 
                  fontSize={11} 
                  fontFamily="IBM Plex Mono" 
                  tickLine={false}
                  domain={[0, 25]}
                  unit="%"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0B0F1A', 
                    borderColor: '#334155',
                    borderRadius: '8px',
                    color: '#F8FAFC',
                    fontFamily: 'IBM Plex Mono',
                    fontSize: '11px',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)'
                  }} 
                  formatter={(value: any, name: any) => {
                    if (name === 'Throughput (TPS)') return [`${value} tx/sec`, name];
                    if (name === 'Anomaly Rate') return [`${value}%`, name];
                    return [value, name];
                  }}
                />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="tps" 
                  name="Throughput (TPS)" 
                  stroke="#2F5FFF" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorTps)" 
                />
                <Area 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="anomalyRate" 
                  name="Anomaly Rate" 
                  stroke="#F43F5E" 
                  strokeWidth={2.5}
                  fillOpacity={1} 
                  fill="url(#colorAnomaly)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          )}

          {activeTab === 'taxonomy' && (
            <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-4 items-center">
              <div className="md:col-span-7 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={TAXONOMY_DISTRIBUTION} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
                    <XAxis type="number" stroke="#64748B" fontSize={11} fontFamily="IBM Plex Mono" tickLine={false} />
                    <YAxis dataKey="name" type="category" stroke="#94A3B8" fontSize={11} fontFamily="IBM Plex Sans" tickLine={false} width={130} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0B0F1A', 
                        borderColor: '#334155',
                        borderRadius: '8px',
                        color: '#F8FAFC',
                        fontFamily: 'IBM Plex Mono',
                        fontSize: '11px'
                      }} 
                    />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                      {TAXONOMY_DISTRIBUTION.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="md:col-span-5 space-y-2.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono">
                <div className="text-slate-400 uppercase tracking-wider text-[11px] mb-2 font-semibold">
                  Graph Topology Distribution
                </div>
                {TAXONOMY_DISTRIBUTION.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-1 border-b border-slate-800/60 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-300 font-sans text-xs">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold">{item.count}</span>
                      <span className="text-slate-400 w-10 text-right">{item.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'latency' && (
            <div className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={LATENCY_DISTRIBUTION} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="bucket" stroke="#94A3B8" fontSize={11} fontFamily="IBM Plex Mono" tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={11} fontFamily="IBM Plex Mono" tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0B0F1A', 
                      borderColor: '#334155',
                      borderRadius: '8px',
                      color: '#F8FAFC',
                      fontFamily: 'IBM Plex Mono',
                      fontSize: '11px'
                    }} 
                    formatter={(value: any) => [`${value} evaluations`, 'Evaluated Txs']}
                  />
                  <ReferenceLine x="35ms+ (SLA Limit)" stroke="#F43F5E" strokeDasharray="3 3" label={{ value: '35ms Pre-Settlement SLA', fill: '#F43F5E', fontSize: 10 }} />
                  <Bar dataKey="count" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* 4. Live Evaluated Transactions Stream & Subgraph Inspector */}
        <div className="pt-4 border-t border-slate-800">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
              <h4 className="font-serif font-semibold text-white text-base">
                Real-Time Transaction Intercept Feed
              </h4>
              <span className="text-xs font-mono text-slate-400">
                (Click any transaction to inspect sub-graph explanation)
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-slate-500 mr-1 text-[11px]">Filter:</span>
              <button
                onClick={() => setFilterTaxonomy('all')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterTaxonomy === 'all' ? 'bg-slate-700 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterTaxonomy('anomalies')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterTaxonomy === 'anomalies' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                Anomalies Only
              </button>
              <button
                onClick={() => setFilterTaxonomy('Mule Network Ring')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterTaxonomy === 'Mule Network Ring' ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                Mule Rings
              </button>
            </div>
          </div>

          {/* Transaction Stream Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#070D1C]/90">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0C152B] text-slate-400 uppercase text-[10px] tracking-wider">
                  <th className="py-2.5 px-3">Time</th>
                  <th className="py-2.5 px-3">TX ID</th>
                  <th className="py-2.5 px-3">Amount</th>
                  <th className="py-2.5 px-3">Taxonomy Pattern</th>
                  <th className="py-2.5 px-3">Graph Score</th>
                  <th className="py-2.5 px-3">Hops</th>
                  <th className="py-2.5 px-3">Latency</th>
                  <th className="py-2.5 px-3">Decision</th>
                  <th className="py-2.5 px-3 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredTransactions.slice(0, 7).map((tx) => {
                  const isAnomaly = tx.status !== 'CLEARED';
                  const isSelected = selectedTx?.id === tx.id;

                  return (
                    <tr 
                      key={tx.id}
                      onClick={() => setSelectedTx(tx)}
                      className={`transition-colors cursor-pointer group ${
                        isSelected 
                          ? 'bg-blue-900/30' 
                          : isAnomaly 
                            ? 'hover:bg-rose-950/20' 
                            : 'hover:bg-slate-800/40'
                      }`}
                    >
                      <td className="py-2.5 px-3 text-slate-400">{tx.timestamp}</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-200">{tx.id}</td>
                      <td className="py-2.5 px-3 font-semibold text-white">
                        ${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] ${
                          tx.taxonomy === 'Mule Network Ring' ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30' :
                          tx.taxonomy === 'Synthetic Identity Farm' ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30' :
                          tx.taxonomy === 'Card Testing Sweep' ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' :
                          tx.taxonomy === 'Account Takeover' ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' :
                          'bg-slate-800 text-slate-400'
                        }`}>
                          {tx.taxonomy}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${
                            tx.anomalyScore > 80 ? 'text-rose-400' :
                            tx.anomalyScore > 60 ? 'text-amber-400' : 'text-slate-400'
                          }`}>
                            {tx.anomalyScore.toFixed(1)}
                          </span>
                          <div className="w-12 h-1.5 rounded-full bg-slate-800 overflow-hidden hidden sm:block">
                            <div 
                              className={`h-full ${
                                tx.anomalyScore > 80 ? 'bg-rose-500' :
                                tx.anomalyScore > 60 ? 'bg-amber-500' : 'bg-teal-500'
                              }`} 
                              style={{ width: `${tx.anomalyScore}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-slate-300">{tx.hops}-hop</td>
                      <td className="py-2.5 px-3 text-slate-400">{tx.latencyMs}ms</td>
                      <td className="py-2.5 px-3">
                        {tx.status === 'INTERCEPTED' && (
                          <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold inline-flex items-center gap-1">
                            <ShieldAlert className="w-3 h-3" />
                            INTERCEPTED
                          </span>
                        )}
                        {tx.status === 'STEP_UP_CHALLENGE' && (
                          <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold inline-flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            STEP-UP MFA
                          </span>
                        )}
                        {tx.status === 'CLEARED' && (
                          <span className="px-2 py-0.5 rounded text-[10px] bg-teal-500/15 text-teal-300 border border-teal-500/30 font-medium inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            CLEARED
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedTx(tx); }}
                          className="px-2 py-1 rounded bg-slate-800 hover:bg-[#2F5FFF] hover:text-white text-slate-300 transition-colors cursor-pointer inline-flex items-center gap-1 text-[11px]"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Inspect</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Subgraph Correlation Inspector Drawer / Panel */}
        {selectedTx && (
          <div className="p-5 rounded-xl bg-[#0F172A]/95 border border-slate-700 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-[#2DD4BF]" />
                <h5 className="font-serif font-semibold text-white text-sm">
                  Sub-Graph Correlation Inspector: <span className="font-mono text-[#2DD4BF]">{selectedTx.id}</span>
                </h5>
                <span className="text-xs font-mono text-slate-400">
                  (Evaluated in {selectedTx.latencyMs}ms)
                </span>
              </div>
              <button 
                onClick={() => setSelectedTx(null)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Inspector"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Explanation Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start text-xs font-mono">
              <div className="lg:col-span-8 space-y-3">
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    Deterministic Graph Explanation:
                  </div>
                  <p className="text-slate-200 font-sans leading-relaxed text-sm">
                    {selectedTx.subgraphReason}
                  </p>
                </div>

                {/* Visual Traversal Hop Sequence */}
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-2">
                    Traversed Entity Graph Path ({selectedTx.hops}-hop correlation):
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedTx.nodePath.map((node, idx) => (
                      <React.Fragment key={idx}>
                        <div className={`px-2.5 py-1 rounded text-xs font-mono border ${
                          idx === 0 
                            ? 'bg-blue-600/20 border-blue-500/50 text-blue-200' 
                            : idx === selectedTx.nodePath.length - 1 
                              ? 'bg-rose-600/20 border-rose-500/50 text-rose-200' 
                              : 'bg-slate-800 border-slate-700 text-slate-300'
                        }`}>
                          {node}
                        </div>
                        {idx < selectedTx.nodePath.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Entity Attributes Panel */}
              <div className="lg:col-span-4 p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-2">
                  Correlated Node Metadata
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Device Cluster:</span>
                  <span className="text-slate-200 font-bold">{selectedTx.deviceClusterId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">IP Subnet:</span>
                  <span className="text-slate-200">{selectedTx.ipSubnet}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Anomaly Confidence:</span>
                  <span className={`font-bold ${selectedTx.anomalyScore > 80 ? 'text-rose-400' : 'text-teal-400'}`}>
                    {selectedTx.anomalyScore}%
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Action Authority:</span>
                  <span className="text-slate-200 font-bold">Synchronous Pre-Rail Intercept</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
