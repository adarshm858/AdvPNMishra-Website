import React, { useState } from 'react';
import { FileCheck, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { DOCUMENT_CHECKLISTS } from '../data/legalData';

export const DocumentChecklist: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeChecklist = DOCUMENT_CHECKLISTS[selectedIdx];

  const handleCopy = () => {
    const text = `Document Checklist for ${activeChecklist.category}:\n\n` +
      activeChecklist.items.map((it, i) => `${i + 1}. ${it}`).join('\n') +
      `\n\nTip: ${activeChecklist.tips}\n\nChamber of Advocate P. N. Mishra, High Court Lucknow`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="checklist" className="py-20 bg-white dark:bg-[#060D18] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <FileCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Consultation Preparation Guide</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#09172B] dark:text-white">
            Documents Required for Consultation
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Having well-organized documents allows Advocate P. N. Mishra to conduct a swift, accurate legal assessment of your case merits.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {DOCUMENT_CHECKLISTS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'gold-gradient-bg text-[#09172B] shadow-md font-bold'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {item.category.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Checklist Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-[#0C1A2E] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
                Essential Case File
              </span>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#09172B] dark:text-white">
                {activeChecklist.category}
              </h3>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-[#D4AF37] transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
              <span>{copied ? 'Checklist Copied!' : 'Copy Checklist'}</span>
            </button>
          </div>

          {/* List items */}
          <div className="py-6 space-y-3.5">
            {activeChecklist.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Tips Box */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-700 dark:text-amber-300 font-semibold block mb-0.5">
                Chamber Advisory Tip:
              </strong>
              {activeChecklist.tips}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
