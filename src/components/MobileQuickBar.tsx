import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 p-2.5 px-3 shadow-glass-lg flex items-center justify-between gap-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <a
        href={`tel:${SHOP_INFO.phone}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-sigma-blue to-sigma-purple text-white text-xs font-bold shadow-glow-blue flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-cyan-300 animate-bounce" />
        <span>Call Shop</span>
      </a>

      <a
        href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${SHOP_INFO.whatsappDefaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      <a
        href={SHOP_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="py-2.5 px-3 rounded-xl bg-white/10 text-slate-200 text-xs font-bold flex items-center justify-center gap-1 hover:bg-white/20 active:scale-95 transition-transform"
      >
        <MapPin className="w-4 h-4 text-cyan-400" />
        <span>Map</span>
      </a>
    </div>
  );
};
