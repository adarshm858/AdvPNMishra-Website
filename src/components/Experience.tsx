import React from 'react';
import { GraduationCap, Award, Landmark, Scale, Calendar } from 'lucide-react';
import { CAREER_TIMELINE } from '../data/legalData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#07111F] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Professional Journey & Standing</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Career Milestones & Bar Standing
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A track record of academic rigour, formal Bar Council enrollment, and active practice before the High Court Lucknow Bench.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {CAREER_TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full gold-gradient-bg text-[#060D18] flex items-center justify-center shadow-lg border-4 border-white dark:border-[#07111F]">
                    {index === 0 ? <GraduationCap className="w-5 h-5 stroke-[2.5]" /> : index === 1 ? <Award className="w-5 h-5 stroke-[2.5]" /> : index === 2 ? <Landmark className="w-5 h-5 stroke-[2.5]" /> : <Scale className="w-5 h-5 stroke-[2.5]" />}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-white dark:bg-[#0C1A2E] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md hover:border-[#D4AF37]/50 transition-all group">
                      
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-800 dark:text-amber-300 text-xs font-bold mb-3 ${isEven ? 'md:ml-auto' : ''}`}>
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{item.year}</span>
                      </div>

                      <h3 className="font-serif-heading text-xl font-bold text-[#09172B] dark:text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h3>

                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 block mb-3">
                        {item.court}
                      </span>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
