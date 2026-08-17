import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProductCatalog } from './components/ProductCatalog';
import { PrintingServices } from './components/PrintingServices';
import { CollegeProjects } from './components/CollegeProjects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { ProductModal } from './components/ProductModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { ProductItem, PrintingServiceItem } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedItem, setSelectedItem] = useState<ProductItem | PrintingServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dark Mode is the Default Theme
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('sigma-theme');
    if (saved === 'light') return 'light';
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('sigma-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
  };

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // ScrollSpy to track active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'services', 'college-projects', 'why-us', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-x-hidden ${theme === 'dark' ? 'bg-sigma-dark text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sigma-blue to-sigma-purple z-50 transform-origin-left"
        style={{ scaleX }}
      />

      {/* Top Location & Contact Announcement Bar */}
      <AnnouncementBar />

      {/* Main Glass Navigation with Theme Toggle */}
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        {/* Full-Screen Glassmorphism Hero */}
        <Hero />

        {/* Dynamic Infinite Ticker Marquee */}
        <Marquee />

        {/* Categorized Product Catalog & Competitive Exam Books */}
        <ProductCatalog onSelectProduct={(item) => setSelectedItem(item)} />

        {/* Interactive Printing & Xerox Services */}
        <PrintingServices onSelectService={(item) => setSelectedItem(item)} />

        {/* Dedicated 4-Step College Project & Hard Binding Section */}
        <CollegeProjects />

        {/* Why Choose New Sigma Section */}
        <WhyChooseUs />

        {/* About Shop & Local Heritage */}
        <AboutUs />

        {/* Map & MD Plaza Location */}
        <LocationSection />

        {/* Contact Form & WhatsApp Desk */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />
      <MobileQuickBar />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default App;
