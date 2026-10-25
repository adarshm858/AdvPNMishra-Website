import React from 'react';
import { Scale, Clock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { HIGH_COURT_PROCESS } from '../data/legalData';

interface HighCourtProcessProps {
  onBookClick: () => void;
}

export const HighCourtProcess: React.FC<HighCourtProcessProps> = ({ onBookClick }) => {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-[#07111F] relative overflow-hidden transition-colors duration-300">
      {/* Background Court Ornamentation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Procedural Transparency & Guidance</span>
          </div>
          
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            High Court Judicial Process
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Understanding how your matter progresses through the High Court of Judicature at Allahabad, Lucknow Bench — from initial drafting to final judgment.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {HIGH_COURT_PROCESS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0C1A2E] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-heading text-2xl font-black text-[#D4AF37]">
                    {item.step}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-200 text-xs font-medium border border-slate-200 dark:border-slate-700">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.timeline}</span>
                  </span>
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#09172B] dark:text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-700 dark:text-slate-200">Litigant Action:</strong> {item.litigantAction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#09172B] via-[#0E233F] to-[#09172B] text-white border border-[#D4AF37]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-[#D4AF37] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-heading text-lg sm:text-xl font-bold text-white">
                Have an Urgent High Court Matter or Arrest Warrant?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Our chamber specializes in expedited filing, emergency listing before Motion Bench, and urgent stay relief.
              </p>
            </div>
          </div>

          <button
            onClick={onBookClick}
            className="gold-gradient-bg text-[#09172B] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Consult Chamber Urgently</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
