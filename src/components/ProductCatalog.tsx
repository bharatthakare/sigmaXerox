import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  BookOpen,
  GraduationCap,
  FolderKanban,
  Gift,
  IdCard,
  Grid,
  ArrowUpRight,
  Sparkles,
  Book,
  Notebook,
  FileSpreadsheet,
  Award,
  ShieldCheck,
  Landmark,
  Briefcase,
  PenTool,
  Paperclip,
  Image,
  BadgeCheck,
  CheckCircle2,
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/shopData';
import { ProductItem } from '../types';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Book': return <Book className="w-5 h-5" />;
      case 'Notebook': return <Notebook className="w-5 h-5" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'FolderKanban': return <FolderKanban className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Paperclip': return <Paperclip className="w-5 h-5" />;
      case 'Image': return <Image className="w-5 h-5" />;
      case 'Gift': return <Gift className="w-5 h-5" />;
      case 'IdCard': return <IdCard className="w-5 h-5" />;
      case 'BadgeCheck': return <BadgeCheck className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Grid': return <Grid className="w-4 h-4" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'FolderKanban': return <FolderKanban className="w-4 h-4" />;
      case 'Gift': return <Gift className="w-4 h-4" />;
      case 'IdCard': return <IdCard className="w-4 h-4" />;
      default: return <Grid className="w-4 h-4" />;
    }
  };

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-blue-200 dark:border-sky-400/30 text-blue-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" /> Premium Product Collection
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Everything You Need <span className="text-gradient-primary">Under One Roof</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">
            Explore our curated inventory of college textbooks, competitive exam guides, high-GSM notebooks, office stationery, customized frames, gifts, and smart ID cards.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search books, pens, MPSC, files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-input text-base sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-sigma-blue/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-sigma-blue to-sigma-purple text-white shadow-glow-blue border border-white/20'
                      : 'glass-pill text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center max-w-md mx-auto my-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No Products Found</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              We couldn't find items matching "{searchQuery}". Try a different keyword or call us directly!
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-sigma-blue text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="glass-card-hover rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Background Glow Accent */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-sigma-blue/20 rounded-full blur-2xl group-hover:bg-sigma-purple/30 transition-colors" />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-sky-400 group-hover:bg-gradient-to-br group-hover:from-sigma-blue group-hover:to-sigma-purple group-hover:text-white transition-all duration-300">
                        {getIcon(product.iconName)}
                      </div>

                      <div className="flex items-center gap-2">
                        {product.popular && (
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Popular
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 text-[11px] font-semibold">
                          {product.subcategory}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-medium">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-6">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-blue-600 dark:text-sky-300">
                      {product.priceTag || 'Available in Shop'}
                    </span>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white text-xs font-bold group-hover:bg-gradient-to-r group-hover:from-sigma-blue group-hover:to-sigma-purple group-hover:text-white group-hover:shadow-glow-blue transition-all"
                    >
                      <span>Explore & Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};
