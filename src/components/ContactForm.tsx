import React, { useState } from "react";
import { Send, Check, Terminal, Mail, User, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", priority: "Standard Core" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [logMessages, setLogMessages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTransmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setLogMessages([]);

    const logSteps = [
      `[HANDSHAKE] Initializing handshake secure tunnel... 0x4FFBD`,
      `[SECURITY] Compiling transmission parameters via AES-GCM-256...`,
      `[NETWORK] Mapping routes across Singapore & Frankfurt edge grids...`,
      `[TELEMETRY] Packaging raw user parameters safely...`,
      `[AUTHORIZED] Core verified. Stream packet payload [342 bytes] transmitted successfully.`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < logSteps.length) {
        setLogMessages((prev) => [...prev, logSteps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsSubmitting(false);
        setIsSuccess(true);
      }
    }, 550);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", company: "", message: "", priority: "Standard Core" });
    setIsSuccess(false);
    setLogMessages([]);
  };

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-2xl relative overflow-hidden">
      
      {/* Visual glowing frame overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />

      {isSuccess ? (
        <div className="py-8 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/15">
            <ShieldCheck className="w-8 h-8 scale-110" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Transmission Secured</h3>
            <p className="text-xs text-zinc-400 mt-2 max-w-sm mx-auto leading-relaxed font-sans">
              Your message packet has bypassed standard priority queues and is safely indexed on our neural clusters. A systems director will response within 1.5ms.
            </p>
          </div>
          <div className="p-4 bg-black/40 border border-white/5 rounded-xl text-left max-w-sm mx-auto">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 border-b border-white/5 pb-1 flex justify-between">
              <span>Saved payload receipt</span>
              <span>Secure Hash</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 space-y-1">
              <div>Sender: <span className="text-indigo-300 font-semibold">{formData.name}</span></div>
              <div>Priority: <span className="text-emerald-400 font-semibold">{formData.priority}</span></div>
              <div>Tunnel Code: <span className="text-zinc-500 font-semibold">NEURAL-HANDSHAKE-0xA8E</span></div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors"
          >
            Create New Signal Packet
          </button>
        </div>
      ) : isSubmitting ? (
        <div className="py-10 flex flex-col justify-between h-80 min-h-[300px]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest animate-pulse">
                TRANSMITTING COGNITIVE PARAMS...
              </span>
            </div>
            
            {/* Terminal output streams */}
            <div className="bg-[#050505] border border-white/10 p-4 rounded-xl h-48 overflow-y-auto font-mono text-[10px] text-zinc-400 space-y-2 leading-relaxed">
              {logMessages.map((msg, index) => (
                <div key={index} className="animate-fadeIn">
                  {msg}
                </div>
              ))}
              <div className="w-1.5 h-3 bg-indigo-500 inline-block animate-pulse" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-center text-zinc-600">
            Tunnel encrypted - SLA prioritized routing
          </div>
        </div>
      ) : (
        <form onSubmit={handleTransmissionSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">Handshake Connection Console</h3>
            <p className="text-xs text-zinc-500 font-sans">Submit high-priority message requests directly to our compute core.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono font-semibold">
                Your Human Identity *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Identity Name"
                  className="w-full pl-9 pr-3 py-2 bg-black border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                />
                <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-600" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono font-semibold">
                Telemetry Mail Endpoint *
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="hello@enterprise.com"
                  className="w-full pl-9 pr-3 py-2 bg-black border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                />
                <Mail className="absolute left-3 top-2.5 w-3.5 h-3.5 text-zinc-600" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono font-semibold">
                Corporate Host (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Apex Technologies"
                className="w-full px-3 py-2 bg-black border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono font-semibold">
                Handshake Priority Queue
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-black border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
              >
                <option value="Regular Core">Standard SLA (24h response)</option>
                <option value="Urgent Pipeline">Urgent SLA (2h response)</option>
                <option value="Critical Compute Core">Critical Node Priority (Instantly indexed)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono font-semibold">
              Logical Core Target Requirements *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Outline your enterprise workspace parameters, cluster scales, or integration goals..."
              className="w-full px-3 py-2 bg-black border border-white/10 rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-indigo-500 shadow-lg shadow-indigo-600/10 active:scale-[0.98] duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            TRANSIT QUANTUM RECEIPT
          </button>
        </form>
      )}

    </div>
  );
}
