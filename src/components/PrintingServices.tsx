import React from 'react';
import { motion } from 'framer-motion';
import {
  Copy,
  Printer,
  BookMarked,
  FileText,
  Layers,
  Scan,
  Shield,
  CreditCard,
  Zap,
  Sparkles,
  Check,
  ArrowRight,
} from 'lucide-react';
import { PRINTING_SERVICES, SHOP_INFO } from '../data/shopData';
import { PrintingServiceItem } from '../types';

interface PrintingServicesProps {
  onSelectService: (service: PrintingServiceItem) => void;
}

export const PrintingServices: React.FC<PrintingServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Copy': return <Copy className="w-6 h-6 text-sky-400" />;
      case 'Printer': return <Printer className="w-6 h-6 text-purple-400" />;
      case 'BookMarked': return <BookMarked className="w-6 h-6 text-amber-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'Scan': return <Scan className="w-6 h-6 text-rose-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-indigo-400" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-teal-400" />;
      default: return <Printer className="w-6 h-6 text-sky-400" />;
    }
  };

  const highlights = [
    { title: 'Fast Service', desc: 'Instant Xerox & Printing', icon: Zap },
    { title: 'Clean Quality', desc: 'No Smudges, Crisp Detail', icon: Sparkles },
    { title: 'Affordable Pricing', desc: 'Best Student Rates', icon: Check },
    { title: 'Student Friendly', desc: 'R.A. College Formatting Support', icon: BookMarked },
  ];

  return (
    <section id="services" className="py-20 relative z-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-purple-200 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Printer className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> High Precision Printing Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Printing & <span className="text-gradient-primary">Xerox Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">
            High-speed black & white photocopying, HD color prints, thesis hard binding with gold embossing, document scanning, and plastic card lamination.
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-pill p-4 rounded-2xl flex items-center gap-3 border border-slate-200 dark:border-white/10"
              >
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-sigma-blue to-sigma-purple text-white shadow-sm shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Printing Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINTING_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="glass-card-hover rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sigma-blue/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-1.5 mb-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300">
                  {service.startingPrice || 'Instant Rates'}
                </span>
                <button
                  onClick={() => onSelectService(service)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white text-xs font-bold hover:bg-gradient-to-r hover:from-sigma-blue hover:to-sigma-purple hover:text-white transition-all"
                >
                  <span>Request Print</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Callout Box */}
        <div className="mt-12 glass-card rounded-3xl p-8 text-center max-w-4xl mx-auto border border-cyan-400/20 shadow-glow-blue relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Have a PDF Document or Thesis Ready to Print?
              </h3>
              <p className="text-sm text-slate-300">
                Send your files directly to our WhatsApp line <strong className="text-cyan-300">{SHOP_INFO.formattedPhone}</strong> for urgent printing & gold hard binding.
              </p>
            </div>
            <a
              href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent('Hello New Sigma, I have a document / PDF file ready for printing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
            >
              <span>Send PDF via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
