import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

interface NavbarProps {
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'College Projects', href: '#college-projects', id: 'college-projects' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 glass-nav ${
        isScrolled ? 'py-3 shadow-glass-md' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-2xl p-0.5 shadow-glow-blue group-hover:scale-105 transition-transform duration-300 border border-slate-300 dark:border-white/20 overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
            <img src="/logo.png" alt="New Sigma Stationary & Xerox Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-950 dark:text-white flex items-center gap-1.5">
              NEW SIGMA
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] font-extrabold tracking-wider text-blue-700 dark:text-cyan-300 uppercase">
              XEROX & STATIONARY
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 glass-pill p-1.5 rounded-full border border-slate-300 dark:border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-900 dark:text-slate-200 hover:text-blue-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-sigma-blue dark:to-sigma-purple rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Theme Switcher & Call CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-full glass-pill border border-white/10 text-amber-400 hover:text-amber-300 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 text-xs font-bold"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span className="text-slate-200 hidden xl:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-800 hidden xl:inline">Dark</span>
              </>
            )}
          </button>

          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sigma-blue via-blue-600 to-sigma-purple text-white text-sm font-semibold shadow-glow-blue hover:shadow-glow-purple hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <Phone className="w-4 h-4 text-cyan-300 animate-bounce" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-amber-400 hover:text-amber-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass-nav border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-sigma-blue/30 to-sigma-purple/30 text-sky-300 border border-sky-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={onToggleTheme}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl glass-pill border border-white/10 font-semibold text-sm"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Switch to Light Theme</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-indigo-400" />
                      <span>Switch to Dark Theme</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sigma-blue to-sigma-purple text-white font-semibold shadow-glow-blue"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SHOP_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
