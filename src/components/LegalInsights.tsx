import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Bookmark, Share2, Scale, Check } from 'lucide-react';
import { ARTICLES, type Article } from '../data/legalData';

export const LegalInsights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);

  return (
    <section id="insights" className="py-24 bg-slate-50 dark:bg-[#07111F] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Legal Literacy & High Court Awareness</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Legal Insights & Procedural Guides
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Authoritative legal commentaries and practice notes by Advocate P. N. Mishra to help citizens understand statutory rights and High Court remedies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((art) => (
            <article
              key={art.id}
              className="bg-white dark:bg-[#0C1A2E] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-800 dark:text-amber-300 font-bold text-[11px]">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#09172B] dark:text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug">
                  {art.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {art.date}
                </span>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-xs font-bold text-[#09172B] dark:text-amber-300 hover:text-[#D4AF37] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#071324] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider mb-2">
              <Bookmark className="w-4 h-4" />
              <span>{selectedArticle.category} • Published {selectedArticle.date}</span>
            </div>

            <h2 className="font-serif-heading text-2xl sm:text-3xl font-extrabold text-[#09172B] dark:text-white mb-6 leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Author: Adv. P. N. Mishra • High Court Lucknow Bench
              </span>

              <button
                onClick={() => {
                  const shareText = `${selectedArticle.title}\n\n${selectedArticle.summary}\n\nRead more at Chamber of Advocate P. N. Mishra, High Court Lucknow`;
                  navigator.clipboard.writeText(shareText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:border-[#D4AF37] border border-transparent transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4 text-[#D4AF37]" />}
                <span>{copied ? 'Guide Copied to Clipboard!' : 'Share Legal Guide'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
