import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, PhoneCall, CheckCircle2, Scale } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const whatsappUrl = `https://wa.me/${ADVOCATE_INFO.rawPhones[0]}?text=${encodeURIComponent(
    `Hello Advocate P. N. Mishra sir, I would like to consult your chamber regarding: ${formData.subject || 'High Court matter'}.`
  )}`;

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#07111F] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>High Court Chamber Access</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09172B] dark:text-white">
            Chamber Coordinates & Communication
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Reach out to our High Court chamber for urgent litigation consultation, court filings, or strategic legal opinion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-[#0C1A2E] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="font-serif-heading text-2xl font-bold text-[#09172B] dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Chamber Office Details
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#09172B] dark:text-white text-sm">Chamber Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {ADVOCATE_INFO.chamber}<br />
                    High Court of Judicature at Allahabad, Lucknow Bench, Uttar Pradesh, India - 226010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#09172B] dark:text-white text-sm">Direct Mobile / Helpline</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {ADVOCATE_INFO.phones.join('  •  ')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#09172B] dark:text-white text-sm">Official Email</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {ADVOCATE_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#09172B] dark:text-white text-sm">Consultation Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {ADVOCATE_INFO.officeHours}
                  </p>
                </div>
              </div>

              {/* Quick Communication CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${ADVOCATE_INFO.phones[0]}`}
                  className="flex-1 bg-[#09172B] hover:bg-[#122846] text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all border border-[#D4AF37]/30"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call Chamber</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>

            {/* High Court Lucknow Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-60">
              <iframe
                title="Lucknow High Court Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.397022066804!2d81.0118833!3d26.8606994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c08ecb8abf%3A0xb35741b0289be140!2sHigh%20Court%20Lucknow%20Bench!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Interactive Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0C1A2E] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#09172B] dark:text-white mb-2">
              Send an Official Chamber Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              All messages are reviewed personally by Advocate P. N. Mishra's chamber office under attorney-client privilege.
            </p>

            {sent ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h4 className="font-serif-heading text-2xl font-bold text-[#09172B] dark:text-white">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                  We have received your legal query. Our chamber office will review the facts and respond promptly with consultation scheduling.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#09172B] text-white text-xs font-bold hover:bg-[#122846] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Matter Subject / Court Forum
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. High Court Writ / Property Partition / Bail"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Case Summary / Nature of Relief Sought *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly state facts, lower court orders, dates, or urgency..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-[#060D18] font-bold py-3.5 rounded-xl shadow-lg hover:scale-101 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Advocate Chamber</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
