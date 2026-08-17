import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  UploadCloud,
  Printer,
  BookMarked,
  CheckCircle2,
  MessageSquare,
  FileCheck,
  Award,
  Sparkles,
  Phone,
} from 'lucide-react';
import { PROJECT_STEPS, SHOP_INFO } from '../data/shopData';

export const CollegeProjects: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'UploadCloud': return <UploadCloud className="w-6 h-6 text-sky-400" />;
      case 'Printer': return <Printer className="w-6 h-6 text-purple-400" />;
      case 'BookMarked': return <BookMarked className="w-6 h-6 text-amber-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      default: return <FileCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  const projectServicesList = [
    'College Projects',
    'Project Reports',
    'Thesis & Dissertation',
    'Black Books (Gold Embossed)',
    'Practical Files & Journals',
    'Assignments & Tutorials',
    'Research Papers',
    'Seminar Reports',
    'Spiral & Soft Binding',
    'A4/A3 Engineering Maps',
  ];

  const handleCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="college-projects" className="py-20 relative z-20 overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="glow-blob w-[500px] h-[500px] bg-sigma-purple/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-amber-200 dark:border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Dedicated Student Project Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Your College Project, <span className="text-gradient-primary">Perfectly Prepared.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium">
            From printing to binding, we help students turn their digital files into professional college submissions for R. A. College and Washim institutes.
          </p>
        </div>

        {/* 4-Step Visual Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROJECT_STEPS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover rounded-3xl p-6 relative border border-slate-200 dark:border-white/10 flex flex-col justify-between group"
            >
              {/* Step Number Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sigma-blue to-sigma-purple opacity-80">
                  {step.stepNumber}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getStepIcon(step.iconName)}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>{step.details}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Showcase & CTA Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: List of Student Services */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-extrabold text-white mb-2 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-cyan-400" />
              Comprehensive Academic Submission Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              We understand university formatting guidelines, margin requirements, and cover page designs for Sant Gadge Baba Amravati University and local Washim colleges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectServicesList.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Prominent Call/WhatsApp CTA Box */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 border border-cyan-400/30 text-center shadow-glow-blue relative overflow-hidden flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sigma-blue to-sigma-purple p-0.5 mb-4 shadow-glow-purple">
              <div className="w-full h-full bg-sigma-dark rounded-[14px] flex items-center justify-center">
                <BookMarked className="w-8 h-8 text-cyan-400 animate-bounce" />
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              Need a College Project Printed?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Send your PDF/Doc file directly to our WhatsApp number <strong className="text-cyan-300">{SHOP_INFO.phone}</strong> for instant quote & binding.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent('Hello New Sigma, I would like to enquire about college project printing and hard binding.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCelebrate}
                className="flex-1 py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Call / WhatsApp Us</span>
              </a>

              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="flex-1 py-3.5 px-4 rounded-2xl glass-pill text-white font-bold text-sm hover:bg-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>Call {SHOP_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
