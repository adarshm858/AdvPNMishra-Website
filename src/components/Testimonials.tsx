import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Scale, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/legalData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#07111F] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Client Feedback & Recommendations</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Trusted by Litigants & Organizations
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Reflecting our dedication to courtroom results, clear communication, and honest ethical advocacy.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-[#0C1A2E] text-slate-800 dark:text-white p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-[#D4AF37]/30 shadow-2xl relative overflow-hidden transition-colors duration-300">
            
            {/* Quote Icon BG */}
            <Quote className="w-28 h-28 text-amber-500/10 dark:text-amber-400/5 absolute -top-4 -right-4 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Review Content */}
              <p className="font-serif-heading text-lg sm:text-2xl italic leading-relaxed text-slate-700 dark:text-gray-200 max-w-3xl">
                "{active.content}"
              </p>

              {/* Client Profile */}
              <div className="pt-2 flex flex-col items-center space-y-2">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
                />
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#09172B] dark:text-white flex items-center justify-center gap-1.5">
                    <span>{active.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </h3>
                  <p className="text-xs text-amber-700 dark:text-amber-300 font-semibold mt-0.5">
                    {active.role} • <span className="text-slate-500 dark:text-gray-300">{active.caseType}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{active.location}</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-100 hover:bg-[#D4AF37] dark:bg-white/10 dark:hover:bg-[#D4AF37] text-slate-800 dark:text-white hover:text-[#060D18] dark:hover:text-[#060D18] transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-100 hover:bg-[#D4AF37] dark:bg-white/10 dark:hover:bg-[#D4AF37] text-slate-800 dark:text-white hover:text-[#060D18] dark:hover:text-[#060D18] transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'bg-[#D4AF37] w-8' : 'bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
