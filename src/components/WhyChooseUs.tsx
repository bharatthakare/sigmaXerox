import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  CheckCheck,
  PiggyBank,
  GraduationCap,
  BookOpenCheck,
  Sparkles,
  MapPin,
  HeartHandshake,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/shopData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'CheckCheck': return <CheckCheck className="w-6 h-6 text-emerald-400" />;
      case 'PiggyBank': return <PiggyBank className="w-6 h-6 text-sky-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case 'BookOpenCheck': return <BookOpenCheck className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-pink-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-cyan-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      default: return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 relative z-20 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-200 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> The New Sigma Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Students & Customers <span className="text-gradient-primary">Choose New Sigma</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">
            We combine high-speed printing technology, genuine stationery products, student-centric pricing, and a prime location right near R. A. College Washim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass-card-hover rounded-3xl p-6 border border-slate-200 dark:border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-all">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
