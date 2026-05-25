import { motion } from "motion/react";
import { Page } from "../types";
import { Network, Sparkles } from "lucide-react";

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onContactClickFromCta?: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onContactClickFromCta }: NavbarProps) {
  const navItems: { id: Page; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "solutions", label: "Solutions" },
    { id: "pricing", label: "Pricing" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-white/10 shrink-0 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
      {/* Brand logo */}
      <div 
        onClick={() => setCurrentPage("home")} 
        className="flex items-center gap-3 cursor-pointer group"
        id="navbar-logo"
      >
        <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
          <Network className="w-5 h-5 text-white animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wider text-white flex items-center gap-1.5">
            NEURAL.AI
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
          </span>
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Enterprise Core</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-2 px-1.5 py-1 bg-zinc-900/40 border border-white/5 rounded-full relative">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors relative rounded-full duration-300 z-10 ${
                isActive ? "text-[#050505]" : "text-zinc-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Action / Call to Action */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage("pricing")}
          id="btn-nav-trial"
          className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          Pro Sandbox Beta
        </button>
        <button
          onClick={onContactClickFromCta || (() => setCurrentPage("contact"))}
          id="btn-nav-signin"
          className="px-5 py-2.5 bg-white text-black font-semibold rounded-full text-xs hover:bg-zinc-200 transition-colors shadow-lg active:scale-95 duration-200"
        >
          Connect Core
        </button>
      </div>
    </nav>
  );
}
