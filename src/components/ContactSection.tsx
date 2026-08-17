import React, { useState } from 'react';
import { Send, Phone, MapPin, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    service: 'Xerox & Color Printing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onShowToast('Please enter your name and phone number.');
      return;
    }

    // Build pre-filled text for WhatsApp
    const waText = `Hello New Sigma,%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Message:* ${encodeURIComponent(formData.message || 'I would like to enquire about your services.')}`;

    setSubmitted(true);
    onShowToast('Redirecting to WhatsApp to send your enquiry...');

    setTimeout(() => {
      window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${waText}`, '_blank');
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: 'Xerox & Color Printing', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-purple-200 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Instant Customer Desk
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Need Something? <span className="text-gradient-primary">Let's Get It Done.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">
            Send us a quick enquiry or chat directly on WhatsApp. We respond promptly for all printing, book, and project queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold block">Direct Phone Line</span>
                <a href={`tel:${SHOP_INFO.phone}`} className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors">
                  {SHOP_INFO.formattedPhone}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold block">Shop Location</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">MD Plaza, Near R. A. College, Washim</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${SHOP_INFO.whatsappDefaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 flex items-center justify-between group transition-all text-slate-900 dark:text-white"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-base font-bold text-emerald-800 dark:text-emerald-300 block">WhatsApp Chat</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Tap to start instant chat with shop</span>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-glass-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl glass-input text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9623614194"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl glass-input text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl glass-input text-base sm:text-sm text-slate-900 dark:text-white bg-white dark:bg-sigma-navy border border-slate-300 dark:border-white/10 font-medium"
                >
                  <option value="Xerox & Color Printing" className="text-slate-900 dark:bg-slate-900 dark:text-white">Xerox & Color Printing</option>
                  <option value="College Project Hard Binding" className="text-slate-900 dark:bg-slate-900 dark:text-white">College Project / Thesis Hard Binding</option>
                  <option value="Competitive Exam Books (MPSC/UPSC)" className="text-slate-900 dark:bg-slate-900 dark:text-white">Competitive Exam Books (MPSC / UPSC)</option>
                  <option value="Stationery & Registers" className="text-slate-900 dark:bg-slate-900 dark:text-white">Stationery & Registers</option>
                  <option value="School / College ID Cards" className="text-slate-900 dark:bg-slate-900 dark:text-white">School / College ID Cards</option>
                  <option value="Photo Frames & Customized Gifts" className="text-slate-900 dark:bg-slate-900 dark:text-white">Photo Frames & Customized Gifts</option>
                  <option value="Other Query" className="text-slate-900 dark:bg-slate-900 dark:text-white">Other Service / General Query</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you need printed or purchased..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl glass-input text-base sm:text-sm text-white placeholder-slate-500"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sigma-blue via-blue-600 to-sigma-purple text-white font-bold text-sm shadow-glow-blue hover:shadow-glow-purple hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 animate-bounce" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-300" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${SHOP_INFO.whatsappDefaultMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us Directly</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
