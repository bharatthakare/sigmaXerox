import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { ProductItem, PrintingServiceItem } from '../types';
import { SHOP_INFO } from '../data/shopData';

interface ProductModalProps {
  item: ProductItem | PrintingServiceItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isProduct = 'category' in item;
  const title = isProduct ? (item as ProductItem).name : (item as PrintingServiceItem).title;
  const description = item.description;
  const features = item.features || [];
  const tag = isProduct ? (item as ProductItem).subcategory : (item as PrintingServiceItem).badge;

  const waText = encodeURIComponent(
    `Hello New Sigma, I am interested in: *${title}* (${tag || 'General'}). Please provide details / pricing.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-glass-lg text-left overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold">
              {tag || 'New Sigma Shop'}
            </span>
            <span className="text-xs text-slate-400 font-medium">Near R.A. College Washim</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-3 leading-snug">
            {title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {description}
          </p>

          {/* Key Features */}
          <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Key Highlights & Specifications
            </h4>
            <ul className="space-y-2">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Hint */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>Available at MD Plaza, Near R. A. College, Washim</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="py-3 px-5 rounded-2xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 border border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>Call {SHOP_INFO.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
