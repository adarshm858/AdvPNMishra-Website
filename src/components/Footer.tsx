import React, { useState } from 'react';
import { Shield, ArrowUp, X, Lock, FileText, Scale, MapPin, Phone, Mail } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalData';

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'disclaimer' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040A14] text-slate-300 pt-16 pb-12 border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Advocate Info & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#9E7412] flex items-center justify-center text-[#060D18] font-bold shadow-lg">
                <Shield className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-serif-heading text-xl font-bold text-white block">
                  Adv. {ADVOCATE_INFO.name}
                </span>
                <span className="text-[11px] text-amber-300 uppercase tracking-wider font-semibold">
                  High Court of Judicature at Allahabad, Lucknow Bench
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Advocate P. N. Mishra (Padum Nath Mishra) provides high-caliber courtroom advocacy, strategic counsel, and petition drafting in Constitutional Writs, Civil Injunctions, Property Disputes, and Criminal Defense.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs italic text-[#D4AF37] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>"{ADVOCATE_INFO.tagline}"</span>
            </div>
          </div>

          {/* Col 2: Practice Areas Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              High Court Practice Domains
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Article 226/227 Writ Petitions</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Civil Injunctions & Appeals (CPC)</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">High Court Regular & Anticipatory Bail</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">UP Revenue Code & Land Partition</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Cheque Dishonor (Sec 138 NI Act)</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Commercial Arbitration (ADR)</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              Chamber Portal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Chamber Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">Advocate Profile</a></li>
              <li><a href="#process" className="hover:text-[#D4AF37] transition-colors">High Court Process</a></li>
              <li><a href="#checklist" className="hover:text-[#D4AF37] transition-colors">Document Checklist</a></li>
              <li><a href="#experience" className="hover:text-[#D4AF37] transition-colors">Career Milestones</a></li>
              <li><a href="#cases" className="hover:text-[#D4AF37] transition-colors">Case Highlights</a></li>
              <li><a href="#insights" className="hover:text-[#D4AF37] transition-colors">Legal Insights</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: Official Chamber Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              Chamber Location
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{ADVOCATE_INFO.chamber}<br />High Court, Lucknow, UP - 226010</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{ADVOCATE_INFO.phones[0]}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{ADVOCATE_INFO.email}</span>
              </p>
            </div>

            <div className="pt-2 text-[11px] text-gray-500">
              Bar Council of Uttar Pradesh Enrolled Advocate
            </div>
          </div>

        </div>

        {/* Bottom Bar & Statutory Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Chamber of Advocate P. N. Mishra. Bar Council of Uttar Pradesh.
          </div>

          {/* Legal Modals Triggers */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button onClick={() => setActiveLegalModal('disclaimer')} className="hover:text-[#D4AF37] cursor-pointer">
              Bar Council Disclaimer
            </button>
            <span>•</span>
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-[#D4AF37] cursor-pointer">
              Privilege & Privacy
            </button>
            <span>•</span>
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-[#D4AF37] cursor-pointer">
              Terms of Representation
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl gold-gradient-bg text-[#060D18] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Statutory Legal Popups */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#071324] border border-slate-200 dark:border-[#D4AF37]/40 text-slate-800 dark:text-white rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl max-h-[85vh] overflow-y-auto transition-colors duration-300">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'disclaimer' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Scale className="w-6 h-6" />
                  <h3 className="font-serif-heading text-xl font-bold">Bar Council of India Disclaimer</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 space-y-3 leading-relaxed">
                  <p>
                    As per the statutory rules of the Bar Council of India under Rule 36, Advocates in India are strictly prohibited from advertising or soliciting work.
                  </p>
                  <p>
                    By accessing this website (advpadumnathmishra), the user expressly acknowledges that the information provided herein is solely for informational, educational, and professional verification purposes, and does not create any formal attorney-client relationship.
                  </p>
                  <p>
                    No information provided on this portal should be construed as legal opinion. Litigants facing court proceedings should seek independent in-person consultation with an advocate.
                  </p>
                </div>
              </div>
            )}

            {activeLegalModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Lock className="w-6 h-6" />
                  <h3 className="font-serif-heading text-xl font-bold">Attorney-Client Privilege & Privacy</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 space-y-3 leading-relaxed">
                  <p>
                    We hold client confidentiality as an absolute legal sanctity. All case information, documents, FIR copies, revenue records, and consultation notes submitted to Advocate P. N. Mishra are protected under the strict privilege established by Section 126 of the Indian Evidence Act.
                  </p>
                  <p>
                    We do not disclose, distribute, or share client information with any unauthorized third parties or marketing platforms under any circumstances.
                  </p>
                </div>
              </div>
            )}

            {activeLegalModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <FileText className="w-6 h-6" />
                  <h3 className="font-serif-heading text-xl font-bold">Terms of Professional Representation</h3>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 space-y-3 leading-relaxed">
                  <p>
                    Formal legal representation commences strictly upon execution of a duly signed Vakalatnama and completion of chamber engagement formalities.
                  </p>
                  <p>
                    While our chamber applies exhaustive legal diligence and courtroom advocacy, judicial judgments and order outcomes are determined solely by the honorable courts and judicial benches in accordance with the law of the land.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
