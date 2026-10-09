import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, ShieldAlert, Code2 } from 'lucide-react';

interface TypewriterTerminalProps {
  autoStart?: boolean;
}

export const TypewriterTerminal: React.FC<TypewriterTerminalProps> = () => {
  const line1Full = `txn.flagged → "3 linked accounts, 1 device, $2,400 moved in 40s"`;
  const line2Full = `pattern: mule network · confidence: high · action: hold for review`;

  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showJson, setShowJson] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    setDisplayedLine1('');
    setDisplayedLine2('');
    setIsTyping(true);

    const interval1 = setInterval(() => {
      if (index1 < line1Full.length) {
        setDisplayedLine1(line1Full.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(interval1);
        const interval2 = setInterval(() => {
          if (index2 < line2Full.length) {
            setDisplayedLine2(line2Full.slice(0, index2 + 1));
            index2++;
          } else {
            clearInterval(interval2);
            setIsTyping(false);
          }
        }, 18);
      }
    }, 22);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  const jsonPayload = JSON.stringify(
    {
      event: "transaction.anomaly_detected",
      timestamp: "2026-09-22T18:42:01.218Z",
      transaction_id: "txn_9041a87b",
      risk_score: 0.942,
      latency_ms: 31,
      decision: "HOLD_FOR_REVIEW",
      anomaly: {
        pattern: "MULE_NETWORK_COORDINATION",
        confidence: "HIGH",
        hop_depth: 3,
        correlated_entities: {
          accounts: ["acc_8491b", "acc_3021m", "acc_6104k"],
          devices: ["df_92x_emulated"],
          ips: ["194.26.29.112"]
        },
        velocity: {
          amount_usd: 2400.0,
          window_seconds: 40,
          hops_count: 3
        },
        plain_reason: "3 linked accounts, 1 device, $2,400 moved in 40s"
      }
    },
    null,
    2
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(showJson ? jsonPayload : `${line1Full}\n${line2Full}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl bg-[#090D18] border border-slate-800 shadow-xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0F1626] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-slate-400 text-[11px]">
            <Terminal className="w-3.5 h-3.5 text-[#2F5FFF]" />
            <span>tridial-webhook-stream</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowJson(!showJson)}
            className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <Code2 className="w-3 h-3 text-[#2DD4BF]" />
            <span>{showJson ? 'Plain View' : 'Raw JSON'}</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#2DD4BF]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 sm:p-5 min-h-[92px] leading-relaxed">
        {showJson ? (
          <pre className="text-[11px] text-slate-300 overflow-x-auto whitespace-pre font-mono leading-relaxed">
            {jsonPayload}
          </pre>
        ) : (
          <div className="space-y-1.5">
            <div className="flex items-start gap-2">
              <span className="text-[#2F5FFF] select-none font-semibold">&gt;</span>
              <div className="text-slate-100 flex-1">
                <span className="text-[#2DD4BF] font-semibold">txn.flagged</span>
                <span className="text-slate-400"> → </span>
                <span className="text-amber-300">
                  {displayedLine1.replace('txn.flagged → ', '')}
                </span>
                {isTyping && !displayedLine2 && (
                  <span className="inline-block w-2 h-3.5 ml-1 bg-[#2F5FFF] animate-pulse align-middle" />
                )}
              </div>
            </div>

            {displayedLine2 && (
              <div className="flex items-start gap-2 pt-0.5 pl-4 sm:pl-5 text-slate-400">
                <div className="flex-1">
                  <span className="text-slate-500">pattern:</span>{' '}
                  <span className="text-amber-200 font-medium">mule network</span>
                  <span className="text-slate-600"> · </span>
                  <span className="text-slate-500">confidence:</span>{' '}
                  <span className="text-[#2DD4BF] font-medium">high</span>
                  <span className="text-slate-600"> · </span>
                  <span className="text-slate-500">action:</span>{' '}
                  <span className="text-rose-400 font-semibold uppercase tracking-wider text-[10px] px-1.5 py-0.5 rounded bg-rose-950/60 border border-rose-800/40">
                    hold for review
                  </span>
                  {isTyping && (
                    <span className="inline-block w-2 h-3.5 ml-1 bg-[#2F5FFF] animate-pulse align-middle" />
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 bg-[#090D18] border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span>Intercepted pre-settlement via gRPC event loop</span>
        </div>
        <div className="text-slate-400">eval_ms: 31ms</div>
      </div>
    </div>
  );
};
