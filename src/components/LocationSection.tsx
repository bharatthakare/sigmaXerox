import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 relative z-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-blue-200 dark:border-cyan-400/30 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-bounce" /> Visit Our Physical Shop
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Find <span className="text-gradient-primary">New Sigma</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">
            Located conveniently at MD Plaza near R. A. College, Washim. Easy access for students, teachers, and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 border border-slate-200 dark:border-white/10 flex flex-col justify-between shadow-glass-lg">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/10 p-0.5 shadow-glow-blue border border-slate-200 dark:border-white/20 overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center shrink-0">
                  <img src="/logo.png" alt="New Sigma Logo" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{SHOP_INFO.name}</h3>
                  <p className="text-xs font-bold text-blue-600 dark:text-cyan-400">PRINT • COPY • CREATE • GIFT</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl glass-pill">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-900 dark:text-white block">Shop Address</span>
                    <span className="font-medium">{SHOP_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl glass-pill">
                  <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-900 dark:text-white block">Phone / Mobile</span>
                    <a href={`tel:${SHOP_INFO.phone}`} className="hover:text-blue-600 dark:hover:text-cyan-300 transition-colors font-bold">
                      {SHOP_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl glass-pill">
                  <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-slate-900 dark:text-white block">Working Hours</span>
                    <span className="font-medium">{SHOP_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-2xl bg-gradient-to-r from-sigma-blue to-sigma-purple text-white text-xs font-bold shadow-glow-blue flex items-center justify-center gap-1.5 hover:scale-105 transition-all text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>

              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="py-3 px-3 rounded-2xl glass-pill text-cyan-300 text-xs font-bold hover:bg-white/10 flex items-center justify-center gap-1.5 transition-all text-center border border-cyan-400/30"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${SHOP_INFO.whatsappDefaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 hover:scale-105 transition-all text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-2 border border-slate-200 dark:border-white/10 overflow-hidden min-h-[350px] relative shadow-glass-lg">
            <iframe
              title="New Sigma Location Map"
              src={SHOP_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', borderRadius: '1.25rem' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
