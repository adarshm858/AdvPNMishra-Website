import React from 'react';
import { Award, UserCheck, Shield, DollarSign, Gavel, Clock, CheckCircle, Target, Scale } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/legalData';

export const WhyChooseUs: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award className="w-6 h-6" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6" />;
      case 'Gavel': return <Gavel className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      default: return <Scale className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#060D18] text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Chamber Strengths & Principles</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Why Entrust Your Matter to Our Chamber
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Delivering unwavering legal excellence through direct advocate accessibility, forensic evidentiary preparation, and dedicated courtroom advocacy.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-[#0C1A2E] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#D4AF37] group-hover:text-[#060D18] transition-all">
                  {renderIcon(item.icon)}
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#09172B] dark:text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold">
                <span>Chamber Standard</span>
                <span>•</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
