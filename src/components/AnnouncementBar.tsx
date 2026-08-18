import React from 'react';
import { MapPin, Phone, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-xs text-white py-2 px-4 border-b border-slate-800 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center">
          <span className="inline-flex items-center gap-1 bg-blue-600 text-white px-2 py-0.5 rounded-full text-[11px] font-extrabold shadow-sm">
            <Sparkles className="w-3 h-3 text-cyan-200 animate-pulse" /> Washim Premier Retail
          </span>
          <span className="hidden md:inline text-slate-200 font-medium">
            One-Stop Destination for Stationery, Xerox, Thesis Hard Binding & Exam Books
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-[12px] font-semibold">
          <a
            href={SHOP_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>R. A. College Road, Washim</span>
          </a>
          <span className="text-white/40">|</span>
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="flex items-center gap-1 text-yellow-300 hover:text-white transition-colors font-extrabold"
          >
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span>{SHOP_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
