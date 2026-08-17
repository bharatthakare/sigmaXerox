import React from 'react';
import { Phone, MapPin, MessageSquare, Navigation, ArrowUp } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-white/10 pt-16 pb-24 sm:pb-12 text-slate-700 dark:text-slate-400 text-xs sm:text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white/10 p-0.5 shadow-glow-blue border border-slate-200 dark:border-white/20 overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="New Sigma Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {SHOP_INFO.shortName}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-blue-600 dark:text-cyan-300 uppercase">
                  XEROX & STATIONARY
                </span>
              </div>
            </a>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Your trusted stationery, printing and college project partner in Washim. Providing top-quality Xerox, books, thesis binding, ID cards, and custom gifts near R. A. College.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-blue-600 dark:border-cyan-400 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 font-semibold text-slate-700 dark:text-slate-300">
              <li><a href="#home" className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">Products & Books</a></li>
              <li><a href="#services" className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">Printing & Xerox Services</a></li>
              <li><a href="#college-projects" className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">College Project Hard Binding</a></li>
              <li><a href="#why-us" className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">About Shop</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">Contact Desk</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-purple-600 dark:border-purple-400 pl-2">
              Contact Information
            </h4>
            <div className="space-y-3 font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0 mt-1" />
                <span>{SHOP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <a href={`tel:${SHOP_INFO.phone}`} className="hover:text-blue-600 dark:hover:text-white transition-colors font-extrabold text-slate-900 dark:text-white">
                  {SHOP_INFO.formattedPhone}
                </a>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 pt-2 font-medium">
                <strong>Hours:</strong> {SHOP_INFO.hours}
              </div>
            </div>
          </div>

          {/* Quick CTAs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-400 pl-2">
              Instant Action
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-sigma-blue to-sigma-purple text-white text-xs font-bold shadow-glow-blue flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${SHOP_INFO.whatsappDefaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl glass-pill text-cyan-300 text-xs font-bold hover:bg-white/10 flex items-center justify-center gap-2 border border-cyan-400/30 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 New Sigma Stationary and Xerox. All Rights Reserved. MD Plaza, Near R. A. College, Washim.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
