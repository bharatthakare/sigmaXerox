import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Printer, PenTool, IdCard, Gift, FileText, Copy, ArrowRight, Phone, Sparkles, MapPin } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const Hero: React.FC = () => {
  // Floating element configuration for subtle background floating animation
  const floatingElements = [
    { icon: BookOpen, label: 'Books', color: 'from-blue-500 to-indigo-600', top: '15%', left: '8%', delay: 0 },
    { icon: Printer, label: 'Printer', color: 'from-purple-500 to-pink-600', top: '25%', right: '10%', delay: 1 },
    { icon: FileText, label: 'Document', color: 'from-cyan-500 to-blue-600', top: '65%', left: '12%', delay: 2 },
    { icon: PenTool, label: 'Pen', color: 'from-emerald-500 to-teal-600', top: '75%', right: '14%', delay: 0.5 },
    { icon: IdCard, label: 'ID Card', color: 'from-violet-500 to-purple-600', top: '42%', left: '4%', delay: 1.5 },
    { icon: Gift, label: 'Gift Box', color: 'from-rose-500 to-pink-600', top: '18%', right: '28%', delay: 2.5 },
    { icon: Copy, label: 'Xerox Paper', color: 'from-amber-500 to-orange-600', top: '80%', left: '40%', delay: 3 },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background Glowing Mesh Blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-sigma-blue/30 top-1/4 -left-32 animate-pulse-glow" />
      <div className="glow-blob w-[450px] h-[450px] bg-sigma-purple/30 top-1/3 -right-24 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="glow-blob w-[400px] h-[400px] bg-cyan-500/20 bottom-10 left-1/3 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Floating Stationery Icons (Framer Motion) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block overflow-hidden">
        {floatingElements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [-12, 12, -12],
                rotate: [-4, 4, -4],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay,
              }}
              style={{
                position: 'absolute',
                top: item.top,
                left: item.left,
                right: item.right,
              }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-pill shadow-glass-sm border border-white/10"
            >
              <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-200">{item.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Official Shop Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative group p-2 rounded-full glass-card border border-white/20 shadow-glow-blue bg-slate-900/80">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center p-1 bg-white">
              <img src="/logo.png" alt="New Sigma Xerox Official Logo" className="w-full h-full object-contain hover:scale-105 transition-transform" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-sigma-blue to-sigma-purple text-[10px] font-extrabold text-white tracking-widest uppercase border border-white/30 whitespace-nowrap shadow-md">
              PRINT • COPY • CREATE • GIFT
            </div>
          </div>
        </motion.div>

        {/* Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-blue-200 dark:border-sky-400/30 text-slate-700 dark:text-sky-300 text-xs sm:text-sm font-semibold mb-6 shadow-glow-blue"
        >
          <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 animate-bounce" />
          <span>MD Plaza, Near R. A. College, Washim</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400"></span>
          <span className="text-slate-900 dark:text-white font-bold">Call: 9623614194</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
        >
          Everything You Need.{' '}
          <span className="block mt-1 text-gradient-primary">
            Printed, Prepared & Ready.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg font-extrabold tracking-wide uppercase text-blue-600 dark:text-cyan-300 mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span>Stationery</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Xerox</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Printing</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>College Projects</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Books</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Gifts</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Customized Products</span>
        </motion.div>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-medium"
        >
          Your one-stop destination for stationery, books, competitive exam materials, professional printing, college projects, customized books, gifts and more in Washim.
        </motion.p>

        {/* Primary, Secondary, and Phone CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sigma-blue via-blue-600 to-sigma-purple text-white font-bold text-base shadow-glow-blue hover:shadow-glow-purple hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-white/20"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-pill text-slate-800 dark:text-white font-bold text-base hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-slate-300 dark:border-white/20"
          >
            <span>Contact Us</span>
          </a>

          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-blue-50 dark:bg-white/10 backdrop-blur-md border border-blue-200 dark:border-cyan-400/30 text-blue-700 dark:text-cyan-300 font-extrabold text-base hover:bg-blue-100 dark:hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm"
          >
            <Phone className="w-5 h-5 text-blue-600 dark:text-cyan-400 animate-pulse" />
            <span>Call: {SHOP_INFO.phone}</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm text-slate-300 font-medium"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>High Speed Xerox</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>Black Book Hard Binding</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>MPSC/UPSC Books</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Gift className="w-4 h-4 text-rose-400" />
            <span>Customized Gifts & IDs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
