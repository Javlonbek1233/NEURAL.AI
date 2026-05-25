import { useState, useEffect } from "react";
import { Activity, Clock, Sliders, RefreshCw, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function FooterDiagnostic() {
  const [requestsCount, setRequestsCount] = useState(2481048102);
  const [latency, setLatency] = useState(142);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>("07:21:52 UTC");

  // Dynamic ticking counter
  useEffect(() => {
    const timer = setInterval(() => {
      setRequestsCount((prev) => {
        // Random incremental values to look authentic
        const addition = Math.floor(Math.random() * 45) + 5;
        return prev + addition;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  // Soft latency fluctuation
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency((prev) => {
        const jitter = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const nextVal = prev + jitter;
        return nextVal >= 135 && nextVal <= 155 ? nextVal : prev;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const handleSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    
    // Simulate diagnostic indexing
    setTimeout(() => {
      setIsSyncing(false);
      setLatency(135 + Math.floor(Math.random() * 10)); // drop latency on sync optimization
      const now = new Date();
      setLastSyncTime(`${now.toUTCString().slice(17, 25)} UTC`);
    }, 1800);
  };

  return (
    <footer className="py-8 md:py-0 md:h-32 px-6 md:px-12 flex items-center border-t border-white/5 bg-white/[0.02] shrink-0 z-10 w-full relative">
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-6 md:gap-4">
        
        {/* Diagnostics & Live Indicators Grid */}
        <div className="flex flex-wrap gap-8 lg:gap-14">
          
          {/* Requests Counter */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Requests Analyzed</span>
            </div>
            <div className="text-xl md:text-2xl font-bold font-mono text-white transition-all duration-500 tracking-tight">
              {requestsCount.toLocaleString()}
            </div>
            <span className="text-[9px] font-mono text-indigo-400/80 uppercase tracking-widest mt-0.5">Real-time Stream Feed</span>
          </div>

          {/* System Uptime */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">System Uptime</span>
            </div>
            <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
              99.982%
            </div>
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">SLA Guaranteed</span>
          </div>

          {/* Global Latency */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Global Latency</span>
            </div>
            <div className="text-xl md:text-2xl font-bold font-mono text-white transition-colors duration-300">
              {latency}ms
            </div>
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">14 Edgewise Nodes</span>
          </div>

          {/* Sync Trigger Utility */}
          <div className="hidden lg:flex flex-col justify-center">
            <button
              id="footer-diagnostics-sync"
              onClick={handleSync}
              className={`inline-flex items-center gap-2 px-3  py-1.5 bg-zinc-900 border border-white/15 rounded-lg text-xs font-mono text-zinc-400 hover:text-white transition duration-200 ${
                isSyncing ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 text-indigo-400 ${isSyncing ? "animate-spin" : ""}`} />
              {isSyncing ? "SYNCING..." : "SYNC OPTIMIZED"}
            </button>
            <span className="text-[8px] font-mono text-zinc-600 mt-1 uppercase text-center">
              Last Pulse: {lastSyncTime}
            </span>
          </div>

        </div>

        {/* Trusted By Brand List */}
        <div className="flex flex-wrap items-center gap-4 py-2 border-t border-white/5 md:border-none w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500">TRUSTED BY INDUSTRY KEYS</span>
          <div className="flex gap-3">
            <div className="px-3 py-1.5 bg-white/5 border border-white/5 rounded text-[10px] font-semibold text-zinc-400 tracking-wider hover:text-white transition-colors duration-200">
              ⚡ HYPERION
            </div>
            <div className="px-3 py-1.5 bg-white/5 border border-white/5 rounded text-[10px] font-semibold text-zinc-400 tracking-wider hover:text-white transition-colors duration-200">
              ❖ QUANTUM
            </div>
            <div className="px-3 py-1.5 bg-white/5 border border-white/5 rounded text-[10px] font-semibold text-zinc-400 tracking-wider hover:text-white transition-colors duration-200">
              ▲ APEX
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
