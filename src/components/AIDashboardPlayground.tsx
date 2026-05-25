import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, Sparkles, Send, Play, Brain, Database, 
  Activity, Sliders, Code, TrendingUp, CheckCircle 
} from "lucide-react";
import { DemoPrompt } from "../types";

// Dynamic Simulated Prompts and Actions
const DEFAULT_PROMPTS: DemoPrompt[] = [
  {
    id: "prompt-1",
    tabLabel: "📈 Market Analysis",
    promptText: "Deploy Federated Market Analyzer & compile future velocity analytics",
    simulatedResponse: "Initializing Neural Analyzer... Handshaking with Edgewise-14... Connected. Model compiled. Graph velocity output plotted: [CAGR: +24.8%, Risk Quotient: 0.12, Neural Confidence: 99.42%]. Loading custom viz dashboard...",
    nodesCount: 12804,
    avgLatency: "1.42ms",
    status: "optimal"
  },
  {
    id: "prompt-2",
    tabLabel: "🛡️ Security Audit",
    promptText: "Scan Solidity smart contract for flash loan exploits and verify variables",
    simulatedResponse: "Reading byte-code... Decompiling security context... Found 3 critical hooks... All verified securely. [SUCCESS] Zero exposure vectors identified. Compile completed. Handshake closed.",
    nodesCount: 9481,
    avgLatency: "2.14ms",
    status: "optimal"
  },
  {
    id: "prompt-3",
    tabLabel: "⚡ Agent Cluster",
    promptText: "Initialize high-frequency actor cluster for enterprise customer loops",
    simulatedResponse: "Provisioning parallel actor nodes [Worker-A, Worker-B, Worker-C]... Routing sync layers... Cluster linked successfully. Ping frequency: 12Hz. Autonomous loop listening...",
    nodesCount: 16802,
    avgLatency: "0.85ms",
    status: "optimal"
  }
];

interface ModelOption {
  id: string;
  name: string;
  speed: string;
  nodes: string;
  utilization: number;
}

const MODELS: ModelOption[] = [
  { id: "llama-node", name: "Llama-Neural v4", speed: "1.42ms", nodes: "12,804", utilization: 75 },
  { id: "deepseek-moe", name: "Hyperion-MoE-V3", speed: "2.85ms", nodes: "42,912", utilization: 92 },
  { id: "whisper-flow", name: "Acoustic-Flow-1", speed: "0.94ms", nodes: "4,110", utilization: 41 },
  { id: "vision-resnet", name: "Sight-Core-ResX", speed: "3.12ms", nodes: "8,112", utilization: 64 },
];

export default function AIDashboardPlayground() {
  const [selectedModel, setSelectedModel] = useState<ModelOption>(MODELS[0]);
  const [activePromptId, setActivePromptId] = useState<string>("prompt-1");
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const [pulseCount, setPulseCount] = useState(0);

  const selectedPromptObj = DEFAULT_PROMPTS.find(p => p.id === activePromptId) || DEFAULT_PROMPTS[0];

  // Auto trigger dynamic nodes pulse visual trigger
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount(p => p + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Handle mock prompt submissions
  const handleQuerySubmit = (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const targetText = customText || inputText || "Process custom cognitive instructions...";
    setIsProcessing(true);
    setStreamedText("");

    // Simulate real-time streaming text block
    let currentIdx = 0;
    const responseText = `[SYS] Query queued to ${selectedModel.name} and parsed successfully.\n[RUN] Input: "${targetText}"\n[COMPILE] Parsing logical context... OK\n[OUTPUT] Cognitive map calculated: [Nodes Connected: ${(Math.floor(Math.random() * 8000) + 12000).toLocaleString()}, Target Latency: ${selectedModel.speed}]. System Status is green. Deploy stream confirmed.`;
    
    const interval = setInterval(() => {
      setStreamedText(prev => prev + responseText[currentIdx] || "");
      currentIdx++;
      if (currentIdx >= responseText.length) {
        clearInterval(interval);
        setIsProcessing(false);
        setInputText("");
      }
    }, 15);
  };

  const handlePromptSelect = (id: string) => {
    setActivePromptId(id);
    const chosen = DEFAULT_PROMPTS.find(p => p.id === id);
    if (chosen) {
      setIsProcessing(true);
      setStreamedText("");
      let currentIdx = 0;
      const responseText = `[SYS] Executing pre-built prompt: "${chosen.promptText}"\n[LOG] Connected dynamically to node graph.\n[LOADED] Results:\n${chosen.simulatedResponse}`;
      
      const interval = setInterval(() => {
        setStreamedText(prev => prev + (responseText[currentIdx] || ""));
        currentIdx++;
        if (currentIdx >= responseText.length) {
          clearInterval(interval);
          setIsProcessing(false);
        }
      }, 10);
    }
  };

  return (
    <div id="ai-dashboard-playground" className="bg-[#111111] border border-white/10 rounded-2xl shadow-2xl p-4 md:p-6 select-none relative overflow-hidden">
      
      {/* Glow Effect behind dashboard */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/5 blur-2xl pointer-events-none rounded-full" />

      {/* Dashboard Top Navigation Control Room */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <div className="h-4 w-px bg-white/20 mx-1"></div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Model Sandbox // runtime_v4_beta
          </span>
        </div>

        {/* Model Selector Dropdown Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          {MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m)}
              className={`px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider font-semibold rounded transition duration-200 shrink-0 ${
                selectedModel.id === m.id
                  ? "bg-indigo-600 border border-indigo-500 text-white shadow shadow-indigo-500/40"
                  : "bg-white/5 border border-white/10 text-zinc-500 hover:text-white"
              }`}
            >
              {m.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Two Columns Grid: Metrics & Code Panel + Interactive Neural SVG node mapping */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Config Panel & Live Outputs (8 Cols for Code / Terminal) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Top Quick-tabs for simulation prompts */}
          <div className="flex gap-2">
            {DEFAULT_PROMPTS.map((p) => (
              <button
                key={p.id}
                onClick={() => handlePromptSelect(p.id)}
                className={`flex-1 py-1.5 px-2 text-left rounded-lg text-xs font-semibold tracking-wide border transition duration-200 ${
                  activePromptId === p.id 
                    ? "bg-gradient-to-r from-zinc-800 to-zinc-900 border-indigo-500/50 text-white" 
                    : "bg-zinc-900/30 border-white/5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/20"
                }`}
              >
                {p.tabLabel}
              </button>
            ))}
          </div>

          {/* Code/Terminal Log box */}
          <div className="bg-[#050505] border border-white/10 rounded-xl p-4 font-mono text-[11px] h-48 overflow-y-auto flex flex-col justify-between text-zinc-300 relative">
            <div className="flex-1 space-y-2 whitespace-pre-wrap leading-relaxed relative scrollbar-none">
              {streamedText ? (
                <span>{streamedText}</span>
              ) : (
                <div className="space-y-3">
                  <span className="text-zinc-500">// Standby: Active prompt listening on node [{selectedModel.name}]</span>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <div className="text-indigo-300 font-semibold text-xs mb-1">Target Prompt:</div>
                    <div className="text-zinc-400 font-light italic text-xs">"{selectedPromptObj.promptText}"</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-zinc-500 text-[10px]">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
                    Click tab above to trigger immediate stream visualizer
                  </div>
                </div>
              )}
              {isProcessing && (
                <span className="w-2 h-4 ml-1 bg-indigo-400 inline-block animate-pulse"></span>
              )}
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono mt-3 shrink-0">
              <span>Handshake: OPTIMAL</span>
              <span>Model Outliers: NIL</span>
            </div>
          </div>

          {/* Interactive input builder */}
          <form onSubmit={handleQuerySubmit} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Submit customized parameter node instruction..."
                className="w-full px-4 py-2 bg-black border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans font-light"
              />
              <span className="absolute right-3 top-2.5 text-[9px] font-mono text-zinc-600 block bg-zinc-900 border border-white/5 px-1.5 py-0.5 rounded">
                ⌘ENTER
              </span>
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className="px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 flex items-center justify-center transition active:scale-95 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

        {/* Right Column: Mini Metrics Widgets and Beautiful Interactive Neural Node Graphic (5 Columns) */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Key Quick Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 relative group hover:border-white/10 transition-all">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-mono font-medium">Core Speed</div>
              <div className="text-2xl font-mono text-white flex items-baseline gap-1">
                {selectedModel.speed}
                <span className="text-[10px] text-emerald-400 font-semibold font-sans">99%</span>
              </div>
              <div className="mt-3 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
                  style={{ width: `${100 - selectedModel.utilization * 0.4}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5 relative group hover:border-white/10 transition-all">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-mono font-medium font-semibold">Nodes In-feed</div>
              <div className="text-2xl font-mono text-white flex items-baseline gap-1">
                {selectedModel.nodes}
                <span className="text-[10px] text-zinc-500 font-light font-sans">Active</span>
              </div>
              
              {/* Animated node sparks block */}
              <div className="mt-3 flex gap-1 h-3 items-end">
                {[0.6, 1.0, 0.4, 0.8, 1.0, 0.3, 0.7, 0.9, 0.5, 0.8, 0.2].map((heightPct, idx) => (
                  <motion.div
                    key={idx}
                    className="w-1 bg-indigo-500 rounded-full"
                    animate={{ height: `${heightPct * 100}%` }}
                    transition={{
                      duration: 0.8 + idx * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Flow visualizer diagram */}
          <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                <Brain className="w-3.5 h-3.5 text-indigo-400" />
                Cognitive Node Mesh
              </span>
              <span className="text-[9px] bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300 font-mono">
                {selectedModel.name}
              </span>
            </div>

            {/* Neural SVG Node Map */}
            <div className="h-28 flex items-center justify-center relative bg-[#090909] rounded-lg border border-white/5 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                
                {/* Connection paths */}
                <path d="M 30,56 L 90,26 M 30,56 L 90,86 H 180 M 90,26 L 180,26 L 270,56 M 90,86 L 180,86 L 270,56 M 180,26 L 270,56 M 180,86 L 270,56" stroke="#4338ca" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                
                {/* Dynamic animated energy pulses moving along the pathways */}
                <circle r="2.5" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)">
                  <animateMotion 
                    path="M 30,56 L 90,26 L 180,26 L 270,56" 
                    dur="3s" 
                    repeatCount="indefinite" 
                  />
                </circle>

                <circle r="2.5" fill="#818cf8" filter="drop-shadow(0 0 4px #818cf8)">
                  <animateMotion 
                    path="M 30,56 L 90,86 L 180,86 L 270,56" 
                    dur="4.2s" 
                    repeatCount="indefinite" 
                  />
                </circle>

                <circle r="2" fill="#a5b4fc">
                  <animateMotion 
                    path="M 90,26 L 180,86 L 270,56" 
                    dur="2.5s" 
                    repeatCount="indefinite" 
                  />
                </circle>

                {/* Nodes with pulsing glows */}
                {/* Input node */}
                <g transform="translate(30, 56)">
                  <circle r="5" fill="#312e81" stroke="#4f46e5" strokeWidth="2" />
                  <circle r="1.5" fill="#fff" />
                  <circle r="8" fill="none" stroke="#4338ca" strokeWidth="1" className="animate-ping" style={{ transformOrigin: "center", animationDuration: "2s" }} />
                </g>

                {/* Hidden layer node 1 */}
                <g transform="translate(90, 26)">
                  <circle r="4" fill="#111827" stroke="#4f46e5" strokeWidth="1.5" />
                  <circle r="1" fill="#a5b4fc" />
                </g>

                {/* Hidden layer node 2 */}
                <g transform="translate(90, 86)">
                  <circle r="4" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
                  <circle r="1.5" fill="#38bdf8" />
                </g>

                {/* Hidden layer node 3 */}
                <g transform="translate(180, 26)">
                  <circle r="4" fill="#111827" stroke="#4f46e5" strokeWidth="1.5" />
                  <circle r="1" fill="#fff" />
                </g>

                {/* Hidden layer node 4 */}
                <g transform="translate(180, 86)">
                  <circle r="4" fill="#111827" stroke="#4338ca" strokeWidth="1.5" />
                  <circle r="1" fill="#a5b4fc" />
                </g>

                {/* Output node */}
                <g transform="translate(270, 56)">
                  <circle r="6" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
                  <polygon points="269,53 274,56 269,59" fill="#38bdf8" transform="translate(-270, -56) scale(1) translate(270, 56)"></polygon>
                  <circle r="9" fill="none" stroke="#0ea5e9" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "1.5s" }} />
                </g>

              </svg>
            </div>

            <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-2">
              <span>Input Node [Raw Prompt]</span>
              <span>Optimizer Layer</span>
              <span>Target Synapse [Result]</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
