import React from 'react';
import { ShieldCheck, ArrowUpRight, Scale } from 'lucide-react';
import { CASE_HIGHLIGHTS } from '../data/legalData';

interface CaseHighlightsProps {
  onBookClick: () => void;
}

export const CaseHighlights: React.FC<CaseHighlightsProps> = ({ onBookClick }) => {
  return (
    <section id="cases" className="py-24 bg-white dark:bg-[#060D18] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Litigation Briefs & Precedents</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Representative Case Highlights
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Illustrating procedural precision, forensic case preparation, and effective courtroom advocacy. Client identities are strictly anonymized for privilege.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_HIGHLIGHTS.map((c) => (
            <div
              key={c.id}
              className="bg-slate-50 dark:bg-[#0C1A2E] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#09172B] dark:bg-slate-800 text-amber-300 text-xs font-bold tracking-wide">
                      {c.category}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      • {c.forum}
                    </span>
                  </div>
                  
                  <div className="px-2.5 py-1 rounded-lg bg-amber-400/10 text-amber-800 dark:text-amber-300 text-[11px] font-semibold">
                    {c.statute}
                  </div>
                </div>

                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#09172B] dark:text-white mb-6 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {c.title}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  {/* Challenge */}
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-rose-600 dark:text-rose-400 block mb-1">
                      Procedural Challenge:
                    </span>
                    {c.challenge}
                  </div>

                  {/* Strategy */}
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">
                      Advocate's Strategy:
                    </span>
                    {c.strategy}
                  </div>

                  {/* Outcome */}
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-slate-800 dark:text-slate-200">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      Judicial Outcome:
                    </span>
                    {c.outcome}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={onBookClick}
                  className="text-xs font-bold text-[#09172B] dark:text-amber-300 hover:text-[#D4AF37] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Discuss a Similar High Court Matter</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
