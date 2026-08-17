import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle } from 'lucide-react';
import { STATS, SHOP_INFO } from '../data/shopData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-blue-200 dark:border-cyan-400/30 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" /> About New Sigma Washim
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Your Local Stationery & <span className="text-gradient-primary">Printing Partner</span>
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              <strong>New Sigma Stationary and Xerox</strong> is a one-stop shop in Washim providing stationery products, books, competitive exam materials, Xerox, printing, ID cards, college projects, thesis printing, black books, gifts, frames and customized printing solutions.
            </p>

            <div className="p-4 rounded-2xl glass-pill border border-blue-200 dark:border-white/10 mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-sigma-blue/20 dark:to-sigma-purple/20">
              <span className="text-base sm:text-lg font-extrabold text-blue-700 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-300 dark:via-sky-200 dark:to-purple-300 block mb-1">
                For Students. For Professionals. For Everyone.
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                Whether you are a student preparing for MPSC/Police Bharti exams, an engineering undergraduate submitting your final year Black Book thesis, or an organization looking for custom ID cards—we are committed to delivering top quality at affordable prices.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm font-semibold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Located at MD Plaza, Washim</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>High-Speed Xerox Machines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Urgent Same-Day Hard Binding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Latest Competitive Exam Series</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Glass Card with Stat Counters */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative shadow-glass-lg">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-sigma-blue/20 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 p-0.5 shadow-glow-blue border border-white/20 overflow-hidden bg-slate-900 flex items-center justify-center shrink-0">
                  <img src="/logo.png" alt="New Sigma Logo" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{SHOP_INFO.name}</h3>
                  <p className="text-xs text-cyan-300 font-medium">MD Plaza, Near R. A. College, Washim</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-pill p-4 rounded-2xl border border-white/10 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
