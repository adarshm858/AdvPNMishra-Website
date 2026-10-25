import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle, MessageCircle, Send, MapPin, Scale } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ADVOCATE_INFO, PRACTICE_AREAS } from '../data/legalData';

interface AppointmentBookingProps {
  initialPracticeArea?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ initialPracticeArea }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practiceArea: initialPracticeArea || 'High Court Writ Petitions',
    consultationMode: 'in-person', // in-person | virtual | urgent
    preferredDate: '',
    preferredTime: '10:00 AM – 12:00 PM',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPracticeArea) {
      setFormData((prev) => ({ ...prev, practiceArea: initialPracticeArea }));
    }
  }, [initialPracticeArea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppConsultation = () => {
    const text = `*New High Court Consultation Request*%0A%0A*Name:* ${formData.name || 'N/A'}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Practice Area:* ${formData.practiceArea}%0A*Mode:* ${formData.consultationMode === 'urgent' ? 'URGENT HIGH COURT STAY/BAIL' : formData.consultationMode === 'virtual' ? 'Virtual/Telephonic' : 'In-Person Chamber Meeting'}%0A*Preferred Date:* ${formData.preferredDate || 'Earliest available'}%0A*Time:* ${formData.preferredTime}%0A*Matter Brief:* ${formData.message || 'High Court legal inquiry'}`;
    window.open(`https://wa.me/${ADVOCATE_INFO.rawPhones[0]}?text=${text}`, '_blank');
  };

  return (
    <section id="book-consultation" className="py-24 bg-white dark:bg-[#060D18] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 dark:bg-[#0C1A2E] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Panel: High Court Chamber Coordinates & Instructions */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#09172B] via-[#0E233F] to-[#060D18] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide mb-3">
                <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Priority Chamber Consultation</span>
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Schedule a Legal Advisory Meeting
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Consult directly with Advocate P. N. Mishra regarding High Court writ petitions, civil injunctions, land disputes, or criminal defense.
              </p>

              <div className="space-y-6 text-sm text-gray-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Chamber Location</h4>
                    <p className="text-xs text-gray-300">{ADVOCATE_INFO.chamber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Chamber Timings</h4>
                    <p className="text-xs text-gray-300">{ADVOCATE_INFO.officeHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Direct Chamber Helpline</h4>
                    <p className="text-xs text-gray-300">{ADVOCATE_INFO.phones.join(' / ')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Official Chamber Email</h4>
                    <p className="text-xs text-gray-300">{ADVOCATE_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 text-xs text-amber-200/80 font-medium flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#D4AF37]" />
              <span>Strict Attorney-Client Privilege under the Indian Evidence Act.</span>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif-heading text-3xl font-bold text-[#09172B] dark:text-white">
                  Consultation Request Registered!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#09172B] dark:text-white">{formData.name}</span>. Our chamber office will review your request for <span className="font-semibold text-[#D4AF37]">{formData.practiceArea}</span> and contact you shortly to confirm your consultation schedule.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-300 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <button
                    onClick={handleWhatsAppConsultation}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Message Chamber on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Consultation Mode Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Consultation Type *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'in-person', label: 'In-Person Chamber', desc: 'Block E-407 High Court' },
                      { id: 'virtual', label: 'Virtual / Phone', desc: 'Outstation Litigants' },
                      { id: 'urgent', label: 'Urgent High Court Listing', desc: 'Stay / Bail Petitions' },
                    ].map((mode) => (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() => setFormData({ ...formData, consultationMode: mode.id })}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          formData.consultationMode === mode.id
                            ? 'bg-amber-400/10 border-[#D4AF37] text-slate-900 dark:text-white shadow-sm'
                            : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        <span className="block text-xs font-bold">{mode.label}</span>
                        <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{mode.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Practice Area */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Practice Area / Matter *
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37] appearance-none"
                      >
                        {PRACTICE_AREAS.map((pa) => (
                          <option key={pa.id} value={pa.title} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                            {pa.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <CalendarIcon className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37] appearance-none"
                      >
                        <option value="10:00 AM – 12:00 PM" className="bg-white dark:bg-slate-900">Morning (10:00 AM – 12:00 PM)</option>
                        <option value="02:00 PM – 04:00 PM" className="bg-white dark:bg-slate-900">Afternoon (02:00 PM – 04:00 PM)</option>
                        <option value="05:00 PM – 07:30 PM" className="bg-white dark:bg-slate-900">Evening Chamber (05:00 PM – 07:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Case Brief */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Case Brief / Nature of Legal Relief
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state facts, lower court orders, FIR details, or urgent relief required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 gold-gradient-bg text-[#060D18] font-bold py-3.5 rounded-xl shadow-lg hover:scale-102 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppConsultation}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Consultation</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
