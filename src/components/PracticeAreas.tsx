import React, { useState } from 'react';
import {
  Scale, ShieldAlert, Home, Users, Briefcase, Landmark, FileText, Gavel, Award,
  Search, ArrowRight, X, CheckCircle2, ChevronRight, Zap
} from 'lucide-react';
import { PRACTICE_AREAS, type PracticeArea } from '../data/legalData';

interface PracticeAreasProps {
  onBookClick: (practiceAreaTitle?: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onBookClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalArea, setActiveModalArea] = useState<PracticeArea | null>(null);

  const renderIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case 'Scale': return <Scale className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'Home': return <Home className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Landmark': return <Landmark className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Gavel': return <Gavel className={className} />;
      case 'Award': return <Award className={className} />;
      default: return <Scale className={className} />;
    }
  };

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const matchesSearch =
      area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.remedies.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.keyServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || area.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="practice-areas" className="py-24 bg-slate-50 dark:bg-[#07111F] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Litigation Domains & High Court Representation</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Core Practice Areas & Remedies
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Providing specialized representation, statutory remedies, and trial & appellate advocacy before the High Court of Judicature at Allahabad, Lucknow Bench.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Practice Areas' },
              { id: 'writs', label: 'Constitutional & Writs' },
              { id: 'civil', label: 'Civil & Property' },
              { id: 'criminal', label: 'Criminal & Bail' },
              { id: 'corporate', label: 'Commercial & Banking' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'gold-gradient-bg text-[#060D18] shadow-md font-bold'
                    : 'bg-white dark:bg-[#0C1A2E] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search legal remedies, bail, writ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0C1A2E] border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white dark:bg-[#0C1A2E] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#09172B] dark:bg-slate-800/80 text-[#D4AF37] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#D4AF37] group-hover:text-[#060D18] transition-all">
                    {renderIcon(area.iconName)}
                  </div>

                  {area.urgentAvailable && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-[11px] font-semibold">
                      <Zap className="w-3 h-3" />
                      <span>Urgent Relief</span>
                    </span>
                  )}
                </div>

                <h3 className="font-serif-heading text-xl font-bold text-[#09172B] dark:text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {area.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {area.shortDesc}
                </p>

                {/* Statutory Basis Badge */}
                <div className="mb-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 text-[11px] text-amber-700 dark:text-amber-300 font-medium">
                  <strong>Statutory Basis:</strong> {area.remedies}
                </div>

                {/* Key Services Preview */}
                <div className="space-y-1.5 mb-6">
                  {area.keyServices.slice(0, 3).map((svc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalArea(area)}
                  className="text-xs font-bold text-[#09172B] dark:text-amber-300 hover:text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Legal Remedies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookClick(area.title)}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-400/10 hover:bg-[#D4AF37] text-amber-800 dark:text-amber-300 hover:text-[#060D18] text-xs font-semibold transition-all cursor-pointer"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400">
            No practice area found matching "{searchQuery}". Try searching for 'Bail', 'Writ', or 'Property'.
          </div>
        )}

      </div>

      {/* Modal for Practice Area Details */}
      {activeModalArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#071324] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalArea(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl gold-gradient-bg text-[#060D18] flex items-center justify-center shadow-lg">
                {renderIcon(activeModalArea.iconName, "w-8 h-8")}
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
                  High Court Practice Domain
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#09172B] dark:text-white">
                  {activeModalArea.title}
                </h3>
              </div>
            </div>

            <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-800 dark:text-amber-300 font-semibold">
              Statutory Governing Law: {activeModalArea.remedies}
            </div>

            <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              {activeModalArea.fullDesc}
            </p>

            <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#09172B] dark:text-amber-200 mb-3">
              Chamber Services & Representation:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {activeModalArea.keyServices.map((svc, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0C1A2E] border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">{svc}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  const title = activeModalArea.title;
                  setActiveModalArea(null);
                  onBookClick(title);
                }}
                className="flex-1 gold-gradient-bg text-[#060D18] font-bold py-3.5 rounded-xl text-center shadow-lg hover:scale-102 transition-all cursor-pointer text-sm"
              >
                Schedule Consultation for {activeModalArea.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
