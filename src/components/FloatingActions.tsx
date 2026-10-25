import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalData';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${ADVOCATE_INFO.rawPhones[0]}?text=${encodeURIComponent(
    'Hello Advocate P. N. Mishra sir, I would like to schedule a High Court consultation.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      
      {/* Quick Contact Dock */}
      <div className="flex flex-col gap-2.5 items-end">
        {/* Phone Call Button */}
        <a
          href={`tel:${ADVOCATE_INFO.phones[0]}`}
          className="h-12 px-4 rounded-2xl bg-[#09172B] hover:bg-[#122846] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center gap-2.5 shadow-2xl hover:scale-102 active:scale-95 transition-all duration-300 group"
          aria-label="Direct Phone Call"
        >
          <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-bold text-white pr-1">
            Call Chamber
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2.5 shadow-2xl hover:scale-102 active:scale-95 transition-all duration-300 group"
          aria-label="Instant WhatsApp Chat"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs font-bold pr-1">
            WhatsApp
          </span>
        </a>
      </div>

    </div>
  );
};
