import React, { useState } from 'react';
import { X, Download, Shield, Phone, Mail, MapPin, FileText, CreditCard, Scale, UserCheck, Check } from 'lucide-react';
import jsPDF from 'jspdf';
import { ADVOCATE_INFO, PRACTICE_AREAS } from '../data/legalData';

interface ModalsProps {
  showPdfModal: boolean;
  setShowPdfModal: (val: boolean) => void;
  showCardModal: boolean;
  setShowCardModal: (val: boolean) => void;
  showBciModal?: boolean;
  setShowBciModal?: (val: boolean) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  showPdfModal,
  setShowPdfModal,
  showCardModal,
  setShowCardModal,
  showBciModal = false,
  setShowBciModal,
}) => {
  const [generating, setGenerating] = useState(false);
  const [cardCopied, setCardCopied] = useState(false);

  // Generate and download genuine .vcf vCard file
  const downloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${ADVOCATE_INFO.fullName}`,
      `N:Mishra;Padum;Nath;;Adv.`,
      `TITLE:Advocate, High Court Lucknow`,
      `ORG:Chamber of Advocate P. N. Mishra`,
      `TEL;TYPE=CELL,VOICE:${ADVOCATE_INFO.phones[0]}`,
      `TEL;TYPE=CELL,VOICE:${ADVOCATE_INFO.phones[1]}`,
      `EMAIL;TYPE=INTERNET,WORK:${ADVOCATE_INFO.email}`,
      `ADR;TYPE=WORK:;;Chamber Block E-407, High Court Lucknow Bench;Lucknow;Uttar Pradesh;226010;India`,
      `NOTE:Advocate practicing at High Court of Judicature at Allahabad, Lucknow Bench. Specializing in Writs, Civil Litigation, Property Disputes, and Criminal Defense.`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Advocate_P_N_Mishra.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCardCopied(true);
    setTimeout(() => setCardCopied(false), 2500);
  };

  const copyCardInfo = () => {
    const text = `Chamber of Advocate P. N. Mishra\n` +
      `Advocate | High Court of Judicature at Allahabad, Lucknow Bench\n` +
      `Chamber: ${ADVOCATE_INFO.officeAddress}\n` +
      `Phone: ${ADVOCATE_INFO.phones.join(' / ')}\n` +
      `Email: ${ADVOCATE_INFO.email}`;
    
    navigator.clipboard.writeText(text);
    setCardCopied(true);
    setTimeout(() => setCardCopied(false), 2500);
  };

  const downloadPdf = () => {
    setGenerating(true);
    setTimeout(() => {
      const doc = new jsPDF();
      
      // Top Architectural Banner
      doc.setFillColor(9, 23, 43); // #09172B
      doc.rect(0, 0, 210, 42, 'F');
      
      doc.setTextColor(212, 175, 55); // Gold
      doc.setFont('times', 'bold');
      doc.setFontSize(22);
      doc.text(ADVOCATE_INFO.name, 15, 18);
      
      doc.setTextColor(230, 230, 230);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text("Advocate | High Court of Judicature at Allahabad, Lucknow Bench", 15, 27);
      doc.setFontSize(10);
      doc.text("Bar Council of Uttar Pradesh • Chamber Block E - 407", 15, 35);
      
      // Tagline
      doc.setTextColor(9, 23, 43);
      doc.setFont('times', 'italic');
      doc.setFontSize(11);
      doc.text(`"${ADVOCATE_INFO.tagline}"`, 15, 50);
      
      // Chamber Contact Box
      doc.setFillColor(248, 249, 250);
      doc.rect(15, 55, 180, 28, 'F');
      doc.setDrawColor(212, 175, 55);
      doc.rect(15, 55, 180, 28, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(9, 23, 43);
      doc.text("Official Chamber:", 20, 63);
      doc.setFont('helvetica', 'normal');
      doc.text(ADVOCATE_INFO.officeAddress, 58, 63);
      
      doc.setFont('helvetica', 'bold');
      doc.text("Direct Contact:", 20, 70);
      doc.setFont('helvetica', 'normal');
      doc.text(ADVOCATE_INFO.phones.join("  |  "), 58, 70);
      
      doc.setFont('helvetica', 'bold');
      doc.text("Official Email:", 20, 77);
      doc.setFont('helvetica', 'normal');
      doc.text(ADVOCATE_INFO.email, 58, 77);
      
      // Profile Overview
      doc.setFont('times', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(9, 23, 43);
      doc.text("Professional Profile & Judicial Practice", 15, 94);
      doc.setDrawColor(212, 175, 55);
      doc.line(15, 96, 195, 96);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(50, 50, 50);
      const splitBio = doc.splitTextToSize(ADVOCATE_INFO.bio, 180);
      doc.text(splitBio, 15, 104);
      
      // Practice Areas Summary
      doc.setFont('times', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(9, 23, 43);
      doc.text("Core High Court Practice Domains & Remedies", 15, 142);
      doc.line(15, 144, 195, 144);
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      const mainAreas = PRACTICE_AREAS.slice(0, 10);
      let y = 153;
      mainAreas.forEach((area, i) => {
        if (i % 2 === 0) {
          doc.setTextColor(9, 23, 43);
          doc.text(`• ${area.title}`, 20, y);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(100, 100, 100);
          doc.text(`  (${area.remedies})`, 20, y + 4.5);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9.5);
        } else {
          doc.setTextColor(9, 23, 43);
          doc.text(`• ${area.title}`, 110, y);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(100, 100, 100);
          doc.text(`  (${area.remedies})`, 110, y + 4.5);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9.5);
          y += 11;
        }
      });
      
      // Statutory Compliance & Ethics
      doc.setFont('times', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(9, 23, 43);
      doc.text("Statutory Compliance & Confidentiality Notice", 15, 238);
      doc.line(15, 240, 195, 240);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(80, 80, 80);
      doc.text("This document is issued for informational and professional verification purposes only in accordance", 15, 247);
      doc.text("with the rules framed by the Bar Council of India under the Advocates Act, 1961. All communications", 15, 252);
      doc.text("and consultations remain strictly privileged under Section 126 of the Indian Evidence Act.", 15, 257);

      // Footer Bar
      doc.setFillColor(9, 23, 43);
      doc.rect(0, 278, 210, 19, 'F');
      doc.setTextColor(212, 175, 55);
      doc.setFontSize(9);
      doc.text("Chamber of Advocate P. N. Mishra | High Court of Judicature at Allahabad, Lucknow Bench", 105, 289, { align: 'center' });

      doc.save("Chamber_Profile_Advocate_P_N_Mishra.pdf");
      setGenerating(false);
      setShowPdfModal(false);
    }, 400);
  };

  return (
    <>
      {/* Advocate Profile PDF Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#071324] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl relative text-slate-900 dark:text-white">
            <button
              onClick={() => setShowPdfModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 text-[#D4AF37]">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#D4AF37] block">
                  Official Document
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold">
                  Chamber Profile & Credentials
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Download the official curriculum profile, statutory practice domains, and Chamber coordinates for Advocate Padum Nath Mishra (High Court of Judicature at Allahabad, Lucknow Bench) in print-ready PDF format.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0C1A2E] border border-slate-200 dark:border-slate-800 space-y-2 text-xs mb-6">
              <div className="flex justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">Advocate Name:</span>
                <span className="font-semibold">{ADVOCATE_INFO.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">Jurisdiction:</span>
                <span>High Court Lucknow Bench</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">Official Chamber:</span>
                <span>Block E - 407</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-slate-700 dark:text-slate-300">Document Type:</span>
                <span className="text-emerald-500 font-bold">Certified PDF (Print Ready)</span>
              </div>
            </div>

            <button
              onClick={downloadPdf}
              disabled={generating}
              className="w-full gold-gradient-bg text-[#060D18] font-bold py-3.5 rounded-xl shadow-lg hover:scale-101 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              <span>{generating ? 'Compiling Official Profile PDF...' : 'Download Official Profile PDF'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Luxury Digital Visiting Card Modal */}
      {showCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#071324] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl relative text-slate-900 dark:text-white">
            <button
              onClick={() => setShowCardModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 text-[#D4AF37]">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#D4AF37] block">
                  Contact Card
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold">
                  Official Digital Visiting Card
                </h3>
              </div>
            </div>

            {/* Simulated Luxury Executive Visiting Card */}
            <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-[#09172B] via-[#0D1F38] to-[#040A14] text-white border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
              {/* Corner Watermark */}
              <Scale className="w-24 h-24 text-amber-400/5 absolute -bottom-4 -right-4 pointer-events-none" />

              <div className="flex items-start justify-between border-b border-[#D4AF37]/30 pb-4 mb-4">
                <div>
                  <h4 className="font-serif-heading text-xl font-bold text-[#D4AF37] tracking-tight">
                    PADUM NATH MISHRA
                  </h4>
                  <p className="text-[11px] text-amber-200/90 font-semibold tracking-wider uppercase">
                    ADVOCATE | HIGH COURT LUCKNOW
                  </p>
                  <p className="text-[10px] text-gray-400">
                    High Court of Judicature at Allahabad, Lucknow Bench
                  </p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{ADVOCATE_INFO.chamber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{ADVOCATE_INFO.phones.join('  •  ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{ADVOCATE_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Genuine VCF Download and Copy */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={downloadVCard}
                className="flex-1 gold-gradient-bg text-[#060D18] font-bold py-3 px-4 rounded-xl shadow-lg hover:scale-102 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Save to Phone Contacts (.vcf)</span>
              </button>

              <button
                onClick={copyCardInfo}
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {cardCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <UserCheck className="w-4 h-4 text-[#D4AF37]" />}
                <span>{cardCopied ? 'Details Copied!' : 'Copy Text'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bar Council of India Statutory Compliance Disclaimer Modal */}
      {showBciModal && setShowBciModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-[#071324] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#D4AF37]/50 shadow-2xl relative text-slate-900 dark:text-white">
            <div className="flex items-center gap-3 mb-4 text-[#D4AF37]">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#D4AF37] block">
                  Bar Council of India Rule 36
                </span>
                <h3 className="font-serif-heading text-xl font-bold">
                  Statutory Disclaimer & Declaration
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-b border-slate-100 dark:border-slate-800 py-4 my-4 max-h-60 overflow-y-auto">
              <p>
                As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any manner. By clicking <strong>"I Acknowledge & Enter"</strong>, the user confirms the following:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Advocate P. N. Mishra or his chamber associates.</li>
                <li>The user wishes to gain information about Advocate P. N. Mishra solely for their own informational and educational purpose.</li>
                <li>The information provided on this website does not constitute formal legal advice or create an advocate-client relationship.</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setShowBciModal(false);
                sessionStorage.setItem('bci_disclaimer_ack', 'true');
              }}
              className="w-full gold-gradient-bg text-[#060D18] font-bold py-3.5 rounded-xl shadow-lg hover:scale-101 active:scale-95 transition-all text-sm cursor-pointer"
            >
              I Acknowledge & Enter Website
            </button>
          </div>
        </div>
      )}
    </>
  );
};
