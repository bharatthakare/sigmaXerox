import React from 'react';
import { MARQUEE_ITEMS } from '../data/shopData';

export const Marquee: React.FC = () => {
  // Duplicate array for seamless infinite looping
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative py-4 bg-slate-200/60 dark:bg-slate-950/80 border-y border-slate-300 dark:border-white/10 overflow-hidden backdrop-blur-md z-30 transition-colors">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-100 dark:from-sigma-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-100 dark:from-sigma-dark to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-6 py-1.5 mx-2 rounded-full glass-pill text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-300 transition-colors border border-slate-300 dark:border-white/10"
          >
            <span>{item}</span>
            <span className="text-blue-600 dark:text-cyan-400 text-xs">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
