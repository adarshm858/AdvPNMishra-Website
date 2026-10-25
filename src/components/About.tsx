import React from 'react';
import { Target, Eye, CheckCircle2, FileDown, CreditCard, Scale, Award, ShieldCheck, MapPin, BookOpen } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalData';

interface AboutProps {
  onDownloadPdf: () => void;
  onDownloadCard: () => void;
}

export const About: React.FC<AboutProps> = ({ onDownloadPdf, onDownloadCard }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#060D18] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Chamber Profile & Judicial Creed</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Dedication to Judicial Integrity & Strategic Justice
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Upholding the highest traditions of the Bar through rigorous legal research, uncompromising ethics, and fearless courtroom advocacy.
          </p>
        </div>

        {/* Top Grid: Official Chamber Charter Card + Biographical Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Official Chamber Charter & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#09172B] via-[#0E233F] to-[#060D18] text-white p-7 sm:p-8 rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative overflow-hidden">
              
              {/* Decorative Scales Watermark */}
              <Scale className="w-48 h-48 text-amber-400/5 absolute -bottom-10 -right-10 pointer-events-none" />

              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#9E7412] flex items-center justify-center text-[#060D18] font-bold shadow-lg">
                  <Award className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
                    High Court Chamber Charter
                  </span>
                  <h3 className="font-serif-heading text-xl font-bold text-white">
                    Advocate Padum Nath Mishra
                  </h3>
                </div>
              </div>

              {/* Official Credentials List */}
              <div className="py-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Scale className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-xs">Court Jurisdiction</span>
                    <span className="font-semibold text-white">High Court of Judicature at Allahabad, Lucknow Bench</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-xs">Bar Council Affiliation</span>
                    <span className="font-semibold text-white">{ADVOCATE_INFO.barCouncil}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-xs">Official Chamber</span>
                    <span className="font-semibold text-white">{ADVOCATE_INFO.chamber}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-xs">Core Practice Competencies</span>
                    <span className="font-semibold text-white">Constitutional Writs, Civil Injunctions, Criminal Bail, Revenue Law</span>
                  </div>
                </div>
              </div>

              {/* Downloads & Action Controls */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onDownloadPdf}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-white/20 transition-all hover:border-[#D4AF37] cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-[#D4AF37]" />
                  <span>Download Chamber Profile PDF</span>
                </button>
                <button
                  onClick={onDownloadCard}
                  className="flex-1 gold-gradient-bg text-[#060D18] py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:scale-102 transition-all cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Save Digital Visiting Card</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right: Biographical Narrative & Core Principles */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
              Professional Biography
            </span>
            
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#09172B] dark:text-white leading-snug">
              Committed to Relentless Legal Advocacy & Principled Justice
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {ADVOCATE_INFO.bio}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Every legal dispute presents unique constitutional, evidentiary, and tactical dimensions. Our chamber is founded upon the principle that successful courtroom representation is built on forensic case analysis, exhaustive study of precedent, and articulate, respectful presentation before the judicial bench.
            </p>

            {/* Core Values Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ADVOCATE_INFO.coreValues.map((val, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0C1A2E] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#09172B] dark:text-white text-sm">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mission & Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#09172B] to-[#040A14] text-white border border-[#D4AF37]/30 shadow-xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-[#D4AF37] flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-white mb-2">
              Chamber Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {ADVOCATE_INFO.mission}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0C1A2E] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-[#D4AF37] flex items-center justify-center mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-[#09172B] dark:text-white mb-2">
              Chamber Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {ADVOCATE_INFO.vision}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
