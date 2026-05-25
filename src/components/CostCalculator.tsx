import { useState } from "react";
import { Sliders, Check, HelpCircle, Flame, Shield, Award, Sparkles } from "lucide-react";

export default function CostCalculator() {
  const [tokens, setTokens] = useState<number>(10); // in Millions (1M to 150M)
  const [agents, setAgents] = useState<number>(3);  // 1 to 30 workers

  // Price modeling math
  const neuralTokenRate = 0.20; // $0.20 per million
  const neuralAgentRate = 12.00; // $12.00 per active agent worker

  const legacyTokenRate = 1.25;  // $1.25 per million
  const legacyAgentRate = 75.00; // $75.00 per worker/seat

  // Monthly sums
  const neuralMonthly = Math.round((tokens * neuralTokenRate) + (agents * neuralAgentRate));
  const legacyMonthly = Math.round((tokens * legacyTokenRate) + (agents * legacyAgentRate));
  const monthlySavings = Math.max(0, legacyMonthly - neuralMonthly);
  const savingsPercent = legacyMonthly > 0 ? Math.round((monthlySavings / legacyMonthly) * 100) : 0;

  // Recommended tier decision
  let recommendedTier = "Free Sandbox";
  let recommendedReason = "Ideal for hobbyists & proof of concepts.";
  if (neuralMonthly > 0 && neuralMonthly <= 50) {
    recommendedTier = "Developer Pro";
    recommendedReason = "Best tier for small indie builders and active pipelines.";
  } else if (neuralMonthly > 50) {
    recommendedTier = "Enterprise Scale";
    recommendedReason = "Unlocks bespoke neural clusters, SLAs, and dedicated compute cores.";
  }

  return (
    <div id="pricing-calculator" className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
      
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
          <Sliders className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">Enterprise Infrastructure Savings Calculator</h3>
          <p className="text-xs text-zinc-500 font-sans mt-0.5">Drag inputs below to live-calculate your expected monthly spend</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Dynamic sliders inputs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Tokens Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-zinc-400 uppercase tracking-widest font-mono text-[10px]">
                Monthly Tokens Utilized
              </span>
              <span className="font-mono text-white text-sm font-semibold bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                {tokens} Million Tokens
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="150"
              value={tokens}
              onChange={(e) => setTokens(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[9px] text-zinc-600 font-mono">
              <span>1 Million</span>
              <span>75M [Mid Enterprise]</span>
              <span>150 Million</span>
            </div>
          </div>

          {/* Connected Autonomous Agents Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-zinc-400 uppercase tracking-widest font-mono text-[10px]">
                Active Agent Workers
              </span>
              <span className="font-mono text-white text-sm font-semibold bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                {agents} Active Autonomous SEATS
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={agents}
              onChange={(e) => setAgents(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[9px] text-zinc-600 font-mono">
              <span>1 Worker Node</span>
              <span>15 Agents [Typical]</span>
              <span>30 Coordinated Cores</span>
            </div>
          </div>

          {/* Pricing Features callout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-zinc-900/30 border border-white/5 rounded-xl text-center">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Inference Rate</div>
              <div className="text-sm font-mono text-indigo-400 font-semibold">$0.20/Million</div>
            </div>
            <div className="p-3 bg-zinc-900/30 border border-white/5 rounded-xl text-center">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Agent Nodes</div>
              <div className="text-sm font-mono text-indigo-400 font-semibold">$12.00/Seat</div>
            </div>
            <div className="p-3 bg-zinc-900/30 border border-white/5 rounded-xl text-center">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Fine-Tuning cost</div>
              <div className="text-sm font-mono text-emerald-400 font-semibold">Included FREE</div>
            </div>
          </div>

        </div>

        {/* Right Side: Estimated Outputs and Recommended Tier Banner */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          <div className="bg-gradient-to-br from-indigo-950/40 to-zinc-950 p-5 rounded-xl border border-indigo-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 rounded-full blur-md" />
            
            <div className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Comparative Ledger
            </div>

            <div className="space-y-3 pb-4 mb-4 border-b border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-400">NEURAL.AI Cost:</span>
                <span className="text-lg font-mono font-bold text-white">${neuralMonthly}/mo</span>
              </div>
              <div className="flex justify-between items-center text-xs text-zinc-500">
                <span>Legacy Providers Cost:</span>
                <span className="font-mono text-[#fca5a5] line-through">${legacyMonthly}/mo</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] font-extrabold text-[#86efac] block bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider mb-1 w-max">
                  SAVE {savingsPercent}% MONTHLY
                </span>
                <span className="text-xs text-zinc-400">Monthly Net Profit Saved:</span>
              </div>
              <span className="text-2xl font-mono font-black text-emerald-400">
                +${monthlySavings}
              </span>
            </div>

          </div>

          {/* Tier Highlight Advice */}
          <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
            <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1">Recommended Plan Placement:</div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              {recommendedTier}
            </div>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              {recommendedReason}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
