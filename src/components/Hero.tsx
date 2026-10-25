import React from 'react';
import { Calendar, PhoneCall, MessageCircle, ShieldCheck, Award, Users, FileCheck, MapPin, Scale } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const whatsappUrl = `https://wa.me/${ADVOCATE_INFO.rawPhones[0]}?text=${encodeURIComponent(
    'Hello Advocate P. N. Mishra sir, I would like to schedule a legal consultation regarding a High Court / legal matter.'
  )}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-slate-50 dark:bg-[#060D18] transition-colors duration-300">
      {/* Background Architectural Court Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/court-bg.png"
          alt="High Court Architecture"
          className="w-full h-full object-cover object-center opacity-5 dark:opacity-15 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/80 dark:from-[#060D18] dark:via-[#060D18]/95 dark:to-[#060D18]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Legal Presentation */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Jurisdiction Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 dark:border-amber-400/30 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Scale className="w-4 h-4 text-[#D4AF37]" />
              <span>Advocate • High Court of Judicature at Allahabad, Lucknow Bench</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#09172B] dark:text-white leading-[1.15]">
                {ADVOCATE_INFO.name}
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-amber-700 dark:text-amber-200/90 mt-1.5">
                  ({ADVOCATE_INFO.fullName})
                </span>
              </h1>
              
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm sm:text-base font-semibold text-[#D4AF37]">
                <span>Advocate | High Court Lucknow</span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
                <span className="text-slate-600 dark:text-slate-400 font-normal">Chamber No. Block E - 407</span>
              </div>
            </div>

            {/* Tagline / Motto */}
            <p className="text-base sm:text-lg italic text-slate-600 dark:text-gray-300 border-l-2 border-[#D4AF37] pl-4">
              "{ADVOCATE_INFO.tagline}"
            </p>

            {/* Substantive Intro */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Providing strategic legal counsel, meticulous petition drafting, and robust courtroom advocacy before the High Court of Judicature at Allahabad (Lucknow Bench), Revenue Boards, and District Courts across Uttar Pradesh.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="gold-gradient-bg text-[#060D18] font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base shadow-lg hover:shadow-amber-500/25 hover:scale-102 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Priority Consultation</span>
              </button>

              <a
                href={`tel:${ADVOCATE_INFO.phones[0]}`}
                className="bg-white hover:bg-slate-100 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base backdrop-blur-sm transition-all hover:border-[#D4AF37] flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Chamber</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-md transition-all hover:scale-102 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Chamber Verification Pill */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Official Chamber:</span>
                  <span>Block E - 407, High Court Lucknow Bench</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Attorney-Client Privilege:</span>
                  <span>100% Confidential Legal Consultations</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Distinguished Advocate Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Dignified Architectural Gold Border Frame */}
              <div className="relative bg-white dark:bg-[#0B182B] p-2.5 rounded-3xl border border-slate-200 dark:border-[#D4AF37]/40 shadow-2xl overflow-hidden group">
                
                {/* Real Photograph */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="/assets/advocate.png"
                    alt="Advocate Padum Nath Mishra at High Court Lucknow"
                    className="w-full h-[460px] sm:h-[500px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D18] via-transparent to-transparent opacity-80" />
                </div>
                
                {/* Elegant Nameplate Credential Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#071324]/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl text-center">
                  <span className="font-serif-heading text-lg font-bold text-white block">
                    Adv. Padum Nath Mishra
                  </span>
                  <span className="text-xs text-amber-300 font-semibold tracking-wider uppercase block mt-0.5">
                    High Court of Judicature at Allahabad
                  </span>
                  <span className="text-[11px] text-gray-300 font-light block mt-0.5">
                    Lucknow Bench • Chamber Block E - 407
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Verified Credential & Performance Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white dark:bg-[#0C1A2E]/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-[#D4AF37]/50 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#09172B] dark:text-white">
              {ADVOCATE_INFO.stats.yearsExperience}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-300 font-medium mt-1 uppercase tracking-wider">
              High Court Practice
            </div>
          </div>

          <div className="bg-white dark:bg-[#0C1A2E]/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-[#D4AF37]/50 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <FileCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#09172B] dark:text-white">
              {ADVOCATE_INFO.stats.casesHandled}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-300 font-medium mt-1 uppercase tracking-wider">
              Legal Matters Handled
            </div>
          </div>

          <div className="bg-white dark:bg-[#0C1A2E]/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-[#D4AF37]/50 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#09172B] dark:text-white">
              {ADVOCATE_INFO.stats.satisfiedClients}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-300 font-medium mt-1 uppercase tracking-wider">
              Satisfied Litigants
            </div>
          </div>

          <div className="bg-white dark:bg-[#0C1A2E]/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-[#D4AF37]/50 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#09172B] dark:text-white">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-gray-300 font-medium mt-1 uppercase tracking-wider">
              Privileged & Confidential
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
