import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, Sliders, Check, Activity, Mail, User, ShieldCheck, 
  Layers, Globe, RefreshCw, Play, Pause, Plus, Minus, 
  Shield, Zap, TrendingUp, Brain, ExternalLink, Lock, 
  Volume2, Braces, Sparkles, AlertCircle, CheckCircle2, ChevronRight,
  Database
} from "lucide-react";

import { Page, ProductItem } from "./types";
import Navbar from "./components/Navbar";
import FooterDiagnostic from "./components/FooterDiagnostic";
import AIDashboardPlayground from "./components/AIDashboardPlayground";
import CostCalculator from "./components/CostCalculator";
import ContactForm from "./components/ContactForm";

// Premium products definitions
const PRODUCTS: ProductItem[] = [
  {
    id: "neural-core",
    name: "Neural-Core v4",
    badge: "LLM Orchestrator",
    description: "Multi-layered reasoning core operating at massive context windows with custom-finetuned tone controllers.",
    capabilities: ["99.42% Benchmark Confidents", "Streaming Context handshakes", "Automatic vectorization indexing"],
    specs: [
      { label: "Token Rate Limit", value: "250K / min" },
      { label: "Context Window", value: "1.2M Tokens" }
    ],
    accentColor: "from-indigo-500 to-cyan-400"
  },
  {
    id: "acoustic-flow",
    name: "Acoustic-Flow Synths",
    badge: "Multilingual TTS",
    description: "Multilingual high-fidelity audio synthesizer mapping neural wave outputs in real-time.",
    capabilities: ["Sub-80ms synthesis latency", "14 global human tone models", "Bespoke frequency optimization"],
    specs: [
      { label: "Frequency Range", value: "20Hz - 22kHz" },
      { label: "Language Models", value: "48 Primaries" }
    ],
    accentColor: "from-purple-500 to-indigo-400"
  },
  {
    id: "safeguard-engine",
    name: "SafeGuard Engine",
    badge: "Smart Guardrails",
    description: "Continuous policy alignment, security scanners, and threat telemetry monitoring incoming context pipelines.",
    capabilities: ["Proactive prompt-inject filters", "GDPR compliance lockouts", "Automated threat quarantine nodes"],
    specs: [
      { label: "Scan Rate", value: "0.15ms / token" },
      { label: "Standard Quarantines", value: "12 Global Rules" }
    ],
    accentColor: "from-emerald-500 to-teal-400"
  },
  {
    id: "agent-orchestrator",
    name: "Agent-Orchestrator Matrix",
    badge: "Autonomous Workers",
    description: "Deploy coordinate matrix clusters that self-orchestrate, manage parallel threads, and reconcile outputs.",
    capabilities: ["Adaptive scheduling engines", "Fail-safe worker reassignment", "Cross-actor memory synthesis"],
    specs: [
      { label: "Max Parallel Seats", value: "128 Nodes" },
      { label: "Sync Handshakes", value: "12Hz Tick-rate" }
    ],
    accentColor: "from-cyan-500 to-blue-400"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Interaction states for Product 1 (Neural-Core LLM tuner)
  const [tempValue, setTempValue] = useState<number>(0.7);
  const [persona, setPersona] = useState<"dev" | "analyst" | "creative">("analyst");
  const [simulatedLLMOutput, setSimulatedLLMOutput] = useState<string>("Click 'Execute Neural Completion' above to synthesize context based on current parameters.");
  const [isSynthesizingLLM, setIsSynthesizingLLM] = useState<boolean>(false);

  // Interaction states for Product 2 (Voice synthesizer)
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");
  const [isPlayingSynth, setIsPlayingSynth] = useState<boolean>(false);
  const [waveSeed, setWaveSeed] = useState<number[]>([10, 30, 15, 45, 20, 50, 25, 35, 10]);

  // Interaction states for Product 3 (SafeGuard threat limits)
  const [threatDefenseSlider, setThreatDefenseSlider] = useState<number>(85); // 0 to 100

  // Interaction states for Product 4 (Agent coordination matrix)
  const [activeMatrixCores, setActiveMatrixCores] = useState<number>(4);

  // Interaction states for Solutions Page tabs
  const [activeSolutionId, setActiveSolutionId] = useState<"finance" | "robotics" | "knowledge" | "biomed">("finance");

  // Multi-state animated simulation for Product 1 synthesis
  const handleExecuteNeuralCompletion = () => {
    setIsSynthesizingLLM(true);
    setSimulatedLLMOutput("Handshaking secure node layer... allocating prompt memory...");
    
    setTimeout(() => {
      let output = "";
      if (persona === "dev") {
        output = `[SYSTEM] Compiled 12 core synapses securely. Temp: ${tempValue}.\n\`\`\`typescript\n// Autonomous Handler initialized with temperature optimization\nconst neuralOptInstance = new NeuralMatrixCluster({\n  temperature: ${tempValue},\n  nodes: 'hot_reload',\n  handshakeSecure: true\n});\n\`\`\`\n[STATUS] Successful compilation. Estimated latency: ${Math.round(18 - tempValue * 10)}ms.`;
      } else if (persona === "analyst") {
        output = `[ANALYTICS] Synthesizing structural metrics... Parameter weights at ${tempValue}.\n- Predicted CAGR Target: +${(32 - tempValue * 8).toFixed(1)}%\n- Confidence Score: ${(98.5 + tempValue).toFixed(2)}%\n- Core Risk Vector: ${(0.05 + tempValue * 0.04).toFixed(3)}\n[ADVICE] Allocate primary funds to Segment Node Alpha.`;
      } else {
        output = `[CREATIVE] Synapsing metaphorical vectors... Entropy tuned to high-frequency ${tempValue}.\n"Through the silicon grid, neurons ignite like cosmic particles, weaving decentralized matrices. Every prompt is a catalyst; every node is a dream of self-sustaining thought."\n[METRIC] Semantic density: ${(3.4 * (tempValue + 0.5)).toFixed(2)} pts.`;
      }
      setSimulatedLLMOutput(output);
      setIsSynthesizingLLM(false);
    }, 1200);
  };

  // Acoustic Wave generator trigger
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingSynth) {
      timer = setInterval(() => {
        setWaveSeed(prev => prev.map(() => Math.floor(Math.random() * 45) + 10));
      }, 150);
    } else {
      setWaveSeed([10, 20, 15, 30, 20, 25, 15, 20, 10]);
    }
    return () => clearInterval(timer);
  }, [isPlayingSynth]);

  // Quick navigation helpers to bind sections together
  const handleContactNavigate = () => {
    setCurrentPage("contact");
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#e5e5e5] font-sans flex flex-col justify-between overflow-x-hidden select-none relative">
      
      {/* Absolute Decorative Ambient Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
      
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onContactClickFromCta={handleContactNavigate}
      />

      {/* Main Container Pages Switcher with smooth page transitions */}
      <main className="flex-grow flex items-center justify-center w-full max-w-7xl mx-auto px-6 py-8 md:py-12 z-10">
        <AnimatePresence mode="wait">
          
          {currentPage === "home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"
            >
              {/* Left Side Hero Information Block */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                
                {/* Active Beta Version tag with pulsar animation */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest font-mono">
                    NEURAL CLOUDS BETA v4.2
                  </span>
                </div>

                {/* Main Hero Header Title with beautiful gradient accent lines */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                  Autonomous <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
                    Intelligence.
                  </span>
                </h1>

                {/* Soft description content */}
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-lg mb-8 font-light">
                  Scale your enterprise operations with autonomous neural networks that learn, adapt, and compile resources at the speed of thought. Low-latency vectorization pipelines crafted on cold-hardware cores.
                </p>

                {/* Sub-actions buttons triggers */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <button 
                    onClick={() => setCurrentPage("products")}
                    id="hero-start-building"
                    className="px-6 py-3.5 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-500 transition duration-200 shadow-xl shadow-indigo-600/20 flex items-center gap-1.5 active:scale-95"
                  >
                    Start Building
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setCurrentPage("solutions")}
                    id="hero-request-demo"
                    className="px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-semibold hover:bg-white/10 transition duration-200"
                  >
                    Explore Solutions
                  </button>
                </div>

                {/* Built-in Micro feature list of counters */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 w-full">
                  <div>
                    <span className="text-xl font-bold font-mono text-white block">1.4ms</span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Inference Speed</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold font-mono text-white block">12.8K</span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Active Nodes</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold font-mono text-white block">0x99A</span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">SLA Handshake</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Primary Floating Mockup Dashboard Simulator */}
              <div className="lg:col-span-6 w-full">
                <AIDashboardPlayground />
              </div>

            </motion.div>
          )}

          {currentPage === "products" && (
            <motion.div
              key="products-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full space-y-12"
            >
              {/* Section Topic Headline */}
              <div className="text-center max-w-lg mx-auto space-y-3">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-semibold">
                  Cognitive Suite Architecture
                </span>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  High-Precision Enterprise Models
                </h2>
                <p className="text-xs text-zinc-400 font-sans max-w-md mx-auto leading-relaxed">
                  Engineered with specialized multi-threading layouts. Interact with the live simulators on each product block to view immediate feedback.
                </p>
              </div>

              {/* Grid of Interactive Products Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Product 1: Neural-Core v4 */}
                <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded text-indigo-300 font-mono">
                        CORE AGENT ORCHESTRATOR
                      </span>
                      <span className="text-xs font-mono font-semibold text-zinc-500">v4.2.0</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">Neural-Core LLM Engine</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                      Bespoke foundational transformer tuned with customizable temperature registers to deliver deterministic or creative outputs.
                    </p>

                    {/* INTERACTIVE COMPONENT: Tone & Temp compiler */}
                    <div className="p-4 bg-black/50 border border-white/5 rounded-xl space-y-4 mb-6">
                      <div className="text-[10px] uppercase font-mono text-zinc-500 flex justify-between">
                        <span>Cluster Controller Settings</span>
                        <span>Compiles dynamically</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {(["dev", "analyst", "creative"] as const).map((p) => (
                          <button
                            key={p}
                            onClick={() => setPersona(p)}
                            className={`py-1 text-[10px] rounded uppercase font-mono tracking-wider transition ${
                              persona === p 
                                ? "bg-indigo-600 text-white" 
                                : "bg-zinc-900 text-zinc-500 hover:text-zinc-300"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>

                      {/* Temperature Range Selector */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                          <span>Entropy Control (Temp)</span>
                          <span>{tempValue}</span>
                        </div>
                        <input
                          type="range"
                          min="0.1"
                          max="1.0"
                          step="0.1"
                          value={tempValue}
                          onChange={(e) => setTempValue(Number(e.target.value))}
                          className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 text-xs"
                        />
                      </div>

                      {/* Action completion */}
                      <button
                        onClick={handleExecuteNeuralCompletion}
                        disabled={isSynthesizingLLM}
                        className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-mono uppercase text-white tracking-widest transition duration-150 flex items-center justify-center gap-2"
                      >
                        <Braces className="w-3.5 h-3.5 text-indigo-400" />
                        {isSynthesizingLLM ? "Compiling Synapses..." : "Execute Neural Completion"}
                      </button>

                      <div className="p-2 border border-white/5 bg-[#050505] rounded text-[10px] font-mono text-indigo-300 h-20 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                        {simulatedLLMOutput}
                      </div>

                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-4">
                    <span>Context Window: 1.2M Tokens</span>
                    <span>99.42% Accuracy Std</span>
                  </div>
                </div>

                {/* Product 2: Acoustic-Flow Synthesis */}
                <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-400" />
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded text-purple-300 font-mono">
                        TTS / ACOUSTIC CORE
                      </span>
                      <span className="text-xs font-mono font-semibold text-zinc-500">v1.1.2</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">Acoustic-Flow Synths</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                      Generate hyper-authentic speech signatures in real-time. Sub-80ms synthesis allows instant enterprise voice-over routing.
                    </p>

                    {/* INTERACTIVE COMPONENT: Synthesizer wave */}
                    <div className="p-4 bg-black/50 border border-white/5 rounded-xl space-y-4 mb-6">
                      
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-mono text-zinc-500">Language Model Selection</span>
                        <div className="flex gap-1.5 text-[10px] font-mono">
                          {["EN", "JA", "DE", "ES"].map((lang) => (
                            <button
                              key={lang}
                              onClick={() => setSelectedLanguage(lang)}
                              className={`px-1.5 py-0.5 rounded ${
                                selectedLanguage === lang ? "bg-purple-600 text-white" : "text-zinc-500 hover:text-white"
                              }`}
                            >
                              {lang}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Bouncing audio wave canvas simulation container */}
                      <div className="h-16 bg-[#050505] rounded-lg border border-white/5 flex items-center justify-between px-6 relative overflow-hidden">
                        <div className="absolute left-2 top-2 text-[8px] font-mono text-zinc-600 uppercase">
                          SYNTH_STREAM_SEED
                        </div>

                        {waveSeed.map((height, idx) => (
                          <motion.div
                            key={idx}
                            className="w-1.5 bg-gradient-to-t from-purple-500 to-indigo-400 rounded-full"
                            style={{ height: `${height}%` }}
                            animate={isPlayingSynth ? {
                              height: [`${height}%`, `${Math.floor(Math.random() * 75) + 15}%`, `${height}%`]
                            } : {}}
                            transition={{
                              duration: 0.5 + idx * 0.05,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => setIsPlayingSynth(!isPlayingSynth)}
                        className={`w-full py-2.5 rounded-lg text-xs font-semibold uppercase flex items-center justify-center gap-2 transition duration-200 ${
                          isPlayingSynth 
                            ? "bg-purple-600/20 border border-purple-500/40 text-purple-300"
                            : "bg-purple-600 hover:bg-purple-500 text-white shadow shadow-purple-600/20"
                        }`}
                      >
                        {isPlayingSynth ? (
                          <>
                            <Pause className="w-4 h-4 text-purple-200" />
                            Stop Synth Test
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 text-purple-200 fill-current" />
                            Synthesize Speak Sample
                          </>
                        )}
                      </button>

                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-4">
                    <span>Synthesize Latency: &lt;80ms</span>
                    <span>14 Live Voice Avatars</span>
                  </div>
                </div>

                {/* Product 3: SafeGuard Engine */}
                <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-emerald-300 font-mono">
                        COMPLIANCE SECURE SHIELD
                      </span>
                      <span className="text-xs font-mono font-semibold text-zinc-500">v2.4.9</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">SafeGuard Secure Engine</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                      Pre-packaged automated smart guardrails to protect LLM routing against injection vectors, system jailbreaks, and sensitive leaks.
                    </p>

                    {/* INTERACTIVE COMPONENT: Security Threat slider */}
                    <div className="p-4 bg-black/50 border border-white/5 rounded-xl space-y-4 mb-6">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-zinc-500">POLICY EXCLUSION LEVEL</span>
                        <span className="text-emerald-400 font-bold">{threatDefenseSlider}% Strictness</span>
                      </div>

                      {/* Interactive slide */}
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={threatDefenseSlider}
                        onChange={(e) => setThreatDefenseSlider(Number(e.target.value))}
                        className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />

                      {/* Live feedback parameters list based on slider value */}
                      <div className="p-3 bg-[#050505] rounded border border-white/5 space-y-2">
                        <div className="flex justify-between text-[10px] font-mono items-center">
                          <span className="text-zinc-400">Jailbreak Interceptors:</span>
                          <span className={`font-semibold ${threatDefenseSlider > 50 ? "text-emerald-400" : "text-amber-400"}`}>
                            {threatDefenseSlider > 75 ? "Active (High)" : threatDefenseSlider > 45 ? "Standard" : "Disabled"}
                          </span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono items-center">
                          <span className="text-zinc-400">Quarantine Gateways:</span>
                          <span className={`font-semibold ${threatDefenseSlider > 70 ? "text-emerald-400" : "text-zinc-500"}`}>
                            {threatDefenseSlider > 70 ? "Active Blockers" : "Logging Only"}
                          </span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono items-center">
                          <span className="text-zinc-400">Total Pipeline Overhead:</span>
                          <span className="text-zinc-500 font-semibold font-mono">
                            {(threatDefenseSlider * 0.002).toFixed(3)}ms / prompt
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-4">
                    <span>Audit Speed: 0.15ms / Tok</span>
                    <span>12 General Policies Standard</span>
                  </div>
                </div>

                {/* Product 4: Agent-Orchestrator Matrix */}
                <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-400" />
                  
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded text-cyan-300 font-mono">
                        PARALLEL AGENT SWARM
                      </span>
                      <span className="text-xs font-mono font-semibold text-zinc-500">v3.5.0</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">Agent-Orchestrator Swarms</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                      Self-routing cluster layers that manage intricate worker processes asynchronously. Synchronizes task states autonomously.
                    </p>

                    {/* INTERACTIVE COMPONENT: Allocate Node seats */}
                    <div className="p-4 bg-black/50 border border-white/5 rounded-xl space-y-4 mb-6">
                      
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-zinc-500">COORDINATED ACTIVE NODES</span>
                        <span className="text-cyan-400 font-bold">{activeMatrixCores} Swarm Core Seats</span>
                      </div>

                      {/* Seat allocation buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setActiveMatrixCores(prev => Math.max(1, prev - 1))}
                          className="flex-1 py-2 bg-zinc-900 border border-white/10 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 transition text-xs"
                        >
                          <Minus className="w-3.5 h-3.5 text-zinc-400 mr-1" />
                          De-allocate Seat
                        </button>
                        <button
                          onClick={() => setActiveMatrixCores(prev => Math.min(12, prev + 1))}
                          className="flex-1 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg flex items-center justify-center transition text-xs"
                        >
                          <Plus className="w-3.5 h-3.5 text-white mr-1" />
                          Allocate Core
                        </button>
                      </div>

                      {/* Visual representations of cores grid */}
                      <div className="p-3 bg-[#050505] rounded border border-white/5">
                        <div className="grid grid-cols-6 gap-2">
                          {Array.from({ length: 12 }).map((_, idx) => {
                            const isAllocated = idx < activeMatrixCores;
                            return (
                              <motion.div
                                key={idx}
                                className={`h-4 rounded border transition duration-300 relative flex items-center justify-center ${
                                  isAllocated 
                                    ? "bg-cyan-500/20 border-cyan-500 shadow shadow-cyan-500/50" 
                                    : "bg-zinc-950 border-white/5"
                                }`}
                                animate={isAllocated ? { opacity: [0.7, 1.0, 0.7] } : {}}
                                transition={{ duration: 1 + idx * 0.1, repeat: Infinity }}
                              >
                                {isAllocated && (
                                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-4">
                    <span>Matrix Limits: Max 128 Seats</span>
                    <span>Synchronous Tick: 12Hz</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {currentPage === "solutions" && (
            <motion.div
              key="solutions-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full space-y-12"
            >
              {/* solutions landing details title */}
              <div className="text-center max-w-lg mx-auto space-y-3">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-semibold">
                  Industrialized Sectors
                </span>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Autonomous Solutions
                </h2>
                <p className="text-xs text-zinc-400 font-sans max-w-md mx-auto leading-relaxed">
                  Bespoke integration schemes designed for critical corporate workloads. Click on the corresponding matrix tab to assemble architecture schematics.
                </p>
              </div>

              {/* Solutions architecture layout tab selector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side options */}
                <div className="lg:col-span-4 space-y-3">
                  {[
                    { id: "finance", name: "Autonomous Fin-Quant Core", sub: "Micro-latency arbitrage routing clusters", icon: TrendingUp },
                    { id: "robotics", name: "Intelligent Robotics Mesh", sub: "Decentralized sensor feedback controllers", icon: Cpu },
                    { id: "knowledge", name: "Knowledge Extraction Server", sub: "Multi-vector enterprise secure search", icon: Brain },
                    { id: "biomed", name: "Biomedical Sequencing Engine", sub: "Massive pattern molecular folding maps", icon: Layers }
                  ].map((sol) => {
                    const isSelected = activeSolutionId === sol.id;
                    const IconComponent = sol.icon;
                    return (
                      <button
                        key={sol.id}
                        id={`sol-tab-${sol.id}`}
                        onClick={() => setActiveSolutionId(sol.id as any)}
                        className={`w-full p-4 rounded-xl text-left border transition-all pointer-events-auto duration-250 flex gap-4 ${
                          isSelected 
                            ? "bg-[#111111] border-indigo-500/50 shadow-md" 
                            : "bg-transparent border-white/5 hover:bg-zinc-900/40 hover:border-white/10"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-indigo-600 text-white" : "bg-white/5 text-zinc-500"
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? "text-white" : "text-zinc-450"}`}>
                            {sol.name}
                          </div>
                          <div className="text-[10px] text-zinc-500 font-light mt-0.5">
                            {sol.sub}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right side live layout SVG compiler */}
                <div className="lg:col-span-8 bg-[#111111] border border-white/10 rounded-2xl p-6 h-max flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl font-mono" />
                  
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                        Handshake Compiled Scheme
                      </span>
                      <h3 className="text-sm font-bold text-white uppercase font-mono tracking-tight mt-0.5">
                        {activeSolutionId.toUpperCase()}_PIPELINE_SCHEMATIC.SYS
                      </h3>
                    </div>
                    <span className="text-[10px] text-indigo-400 font-mono uppercase bg-indigo-500/10 px-2 py-0.5 border border-indigo-500/20 rounded">
                      Secure Route Verified
                    </span>
                  </div>

                  {/* Custom Diagram Rendering representing compiling node layouts */}
                  <div className="h-56 bg-black/60 rounded-xl border border-white/5 relative flex items-center justify-center">
                    
                    {/* SVG flowchart diagrams */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      
                      {/* Connection paths */}
                      <path d="M 60,112 H 180 M 180,112 H 300 M 300,112 H 420" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="4 4" fill="none" className="opacity-60" />
                      
                      {/* Interactive particles moving along the compiled pipeline path */}
                      <circle r="3.5" fill="#a5b4fc" filter="drop-shadow(0 0 3px #6366f1)">
                        <animateMotion path="M 60,112 H 420" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      
                    </svg>

                    <div className="grid grid-cols-4 gap-4 w-full px-6 relative z-10">
                      
                      {/* Step 1: Client Gateway */}
                      <div className="p-3 bg-zinc-950 border border-white/10 rounded-xl text-center space-y-2">
                        <div className="w-7 h-7 bg-white/5 border border-white/10 rounded mx-auto flex items-center justify-center text-zinc-400">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div className="text-[9px] font-mono text-white font-semibold">Core Gateway</div>
                        <span className="text-[8px] font-mono text-[#86efac] block font-light">Handshaked</span>
                      </div>

                      {/* Step 2: TLS Authenticator */}
                      <div className="p-3 bg-zinc-950 border border-white/10 rounded-xl text-center space-y-2 relative">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full absolute top-2 right-2" />
                        <div className="w-7 h-7 bg-white/5 border border-white/10 rounded mx-auto flex items-center justify-center text-zinc-400">
                          <Lock className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="text-[9px] font-mono text-white font-semibold flex items-center justify-center gap-0.5">
                          SSL-TLS GCM
                        </div>
                        <span className="text-[8px] font-mono text-zinc-500 block">AES-256</span>
                      </div>

                      {/* Step 3: Model Engine Allocation */}
                      <div className="p-3 bg-gradient-to-br from-indigo-950 to-zinc-950 border border-indigo-500/40 rounded-xl text-center space-y-2">
                        <div className="w-7 h-7 bg-indigo-500/10 border border-indigo-500/30 rounded mx-auto flex items-center justify-center text-indigo-400">
                          <Cpu className="w-4 h-4 animate-pulse" />
                        </div>
                        <div className="text-[9px] font-mono text-indigo-300 font-bold">
                          {activeSolutionId === "finance" ? "Quant-v4" : activeSolutionId === "robotics" ? "Sensory-v1" : activeSolutionId === "knowledge" ? "Vect-Index" : "Genome-RL"}
                        </div>
                        <span className="text-[8px] font-mono text-indigo-400 block font-light">1.4ms In-feed</span>
                      </div>

                      {/* Step 4: Storage Vault Core */}
                      <div className="p-3 bg-zinc-950 border border-white/10 rounded-xl text-center space-y-2">
                        <div className="w-7 h-7 bg-white/5 border border-white/10 rounded mx-auto flex items-center justify-center text-zinc-400">
                          <Database className="w-4 h-4 text-zinc-300" />
                        </div>
                        <div className="text-[9px] font-mono text-white font-semibold">Parquet DB</div>
                        <span className="text-[8px] font-mono text-zinc-500 block">Auto-Sync</span>
                      </div>

                    </div>

                  </div>

                  {/* Foot advice logs based on selection to offer bespoke feel */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between text-[11px] text-zinc-400 font-sans leading-relaxed gap-2">
                    <div>
                      <span className="font-bold text-white select-none mr-1">Expected Service Level Rate:</span>
                      {activeSolutionId === "finance" && "Optimized for sub-5ms trade cycles with enterprise zero-rollback guarantees."}
                      {activeSolutionId === "robotics" && "Propagated over edge nodes via localized telemetry streams avoiding central cloud hops."}
                      {activeSolutionId === "knowledge" && "Fully vectorizes continuous compliance PDFs dynamically updating cluster repositories."}
                      {activeSolutionId === "biomed" && "Heavy parallel seed allocation leveraging multi-host dedicated Tensor nodes on H100 servers."}
                    </div>
                    <button 
                      onClick={handleContactNavigate}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline shrink-0 whitespace-nowrap self-end"
                    >
                      Audit Architecture
                    </button>
                  </div>

                </div>
              </div>

            </motion.div>
          )}

          {currentPage === "pricing" && (
            <motion.div
              key="pricing-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full space-y-12"
            >
              {/* Pricing section titles */}
              <div className="text-center max-w-lg mx-auto space-y-3">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-semibold">
                  Resource Infrastructure Plans
                </span>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Transparent, Token-Driven Pricing
                </h2>
                <p className="text-xs text-zinc-400 font-sans max-w-md mx-auto leading-relaxed">
                  Bypass complex SaaS seat premiums. Scale linearly with clean compute core resources. Adjust slider below to estimate dynamic enterprise overhead rates.
                </p>
              </div>

              {/* Tiers list cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                
                {/* Tier 1: Sandbox Free */}
                <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Individual Builders</div>
                    <h3 className="text-xl font-bold text-white mb-4">Sandbox Beta</h3>
                    <div className="text-3xl font-mono font-black text-white mb-2">
                      $0 <span className="text-sm text-zinc-500 font-light font-sans">/ month</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 mb-6 font-sans">
                      Perfect for hobbyists, side projects, and exploring model context environments limit-free.
                    </p>
                    <div className="space-y-3 mb-8 border-t border-white/5 pt-6 text-[11px] text-zinc-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>1 Million Free Input Tokens / mo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Up to 2 Active Swarm Seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Standard API endpoint latency</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="w-full py-3 bg-zinc-900 border border-white/10 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition text-center"
                  >
                    Deploy Sandbox Core
                  </button>
                </div>

                {/* Tier 2: Developer Pro Team */}
                <div className="bg-[#111111] border border-indigo-500 rounded-2xl p-6 flex flex-col justify-between relative shadow-2xl">
                  {/* Popular visual flash tag */}
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-indigo-600 text-white border border-indigo-400 text-[9px] font-extrabold uppercase py-1 px-3 rounded-full tracking-widest font-mono">
                    RECOMMENDED BUILDER
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-indigo-300 uppercase tracking-wider mb-2">Active Production Teams</div>
                    <h3 className="text-xl font-bold text-white mb-4">Developer Pro</h3>
                    <div className="text-3xl font-mono font-black text-white mb-2">
                      $49 <span className="text-sm text-zinc-500 font-light font-sans">/ month</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 mb-6 font-sans">
                      Ideal for growing SaaS applications, smart agents, and continuous automated context checks.
                    </p>
                    <div className="space-y-3 mb-8 border-t border-white/5 pt-6 text-[11px] text-zinc-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="font-semibold text-white">50 Million Integrated Tokens / mo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>15 Distributed Swarm Agent Seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Low-Latency priority handshakes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Premium e-mail & Slack ticket queues</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="w-full py-3 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 text-center"
                  >
                    Deploy Pro Swarm Core
                  </button>
                </div>

                {/* Tier 3: Industrial / Enterprise Scaling */}
                <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Sovereign Cluster Teams</div>
                    <h3 className="text-xl font-bold text-white mb-4">Enterprise Hub</h3>
                    <div className="text-3xl font-mono font-black text-white mb-2">
                      Custom <span className="text-sm text-zinc-500 font-light font-sans">/ contract</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 mb-6 font-sans">
                      For heavy industrial operations needing sovereign server isolation, high SLA guarantees, and bare-metal nodes.
                    </p>
                    <div className="space-y-3 mb-8 border-t border-white/5 pt-6 text-[11px] text-zinc-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Unlimited Token Capacity Allocations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Custom Dedicated Node Speeds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>99.99% SLA uptime contract guarantees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>Dedicated systems engineer seat allocations</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-semibold transition text-center"
                  >
                    Negotiate Sovereign Node Contracts
                  </button>
                </div>

              </div>

              {/* Dynamic Interactive Slider tool */}
              <CostCalculator />

            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto"
            >
              
              {/* Left Column Support cards and FAQs (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-semibold block">
                    Telemetry Ingress Portal
                  </span>
                  <h2 className="text-3xl font-black text-white tracking-tight">
                    Establish Secure Handshake
                  </h2>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                    Initiate encrypted socket handshakes directly with our engineering staff. Critical SLA priorities bypass typical support tickets and deploy raw assistance immediately.
                  </p>
                </div>

                {/* Grid of status components */}
                <div className="space-y-4">
                  
                  {/* Node Address info card */}
                  <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-300 shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Global Edge Center Hub</span>
                      <span className="text-xs font-semibold text-white mt-0.5 block">10 Collyer Quay, Singapore 049315</span>
                      <span className="text-[9px] font-mono text-zinc-500 mt-1 block">Routing Key: APC-EDGE-ID-442</span>
                    </div>
                  </div>

                  {/* Mail address info card */}
                  <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-300 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Telemetry Mail Contact</span>
                      <span className="text-xs font-semibold text-white mt-0.5 block">handshake@neural-crypto.ai</span>
                      <span className="text-[9px] font-mono text-zinc-500 mt-1 block">Expected handshake latency: &lt;1.2 hours</span>
                    </div>
                  </div>

                </div>

                {/* Mini diagnostic warning message bar */}
                <div className="p-4 bg-zinc-950 border border-indigo-500/20 rounded-xl flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
                  <p className="text-[10px] text-zinc-400 leading-normal font-sans">
                    All submitted inputs are secured and client-side encrypted beforehand using AES-256 protocols. Zero data logs are shared with external neural scrapers.
                  </p>
                </div>

              </div>

              {/* Right Column: High Fidelity form simulator terminal (7 Cols) */}
              <div className="lg:col-span-12 xl:col-span-7">
                <ContactForm />
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer live diagnostics bar */}
      <FooterDiagnostic />

    </div>
  );
}
