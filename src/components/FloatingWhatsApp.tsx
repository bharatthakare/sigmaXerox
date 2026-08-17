import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-card text-xs font-bold text-white border border-emerald-400/40 shadow-glass-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Chat with New Sigma</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${SHOP_INFO.whatsappDefaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-300/40 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Aura Ring */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-400/40 animate-ping opacity-75 pointer-events-none"></span>

        <MessageSquare className="w-7 h-7 text-slate-950 fill-current" />
      </a>
    </div>
  );
};
