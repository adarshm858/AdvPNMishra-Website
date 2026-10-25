import React, { useState, useEffect } from 'react';
import { Shield, Sun, Moon, Menu, X, Calendar, PhoneCall, Scale, MapPin } from 'lucide-react';
import { ADVOCATE_INFO } from '../data/legalData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'High Court Process', href: '#process' },
    { name: 'Experience', href: '#experience' },
    { name: 'Case Briefs', href: '#cases' },
    { name: 'Insights', href: '#insights' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Micro-Bar: Court Jurisdiction & Chamber */}
      <div className={`hidden md:block bg-[#050D18] text-slate-300 text-[11px] py-1 px-4 sm:px-8 border-b border-white/5 transition-opacity duration-300 ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-200/90 font-medium">
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>High Court of Judicature at Allahabad, Lucknow Bench</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Chamber Block E - 407, High Court Lucknow</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Mon - Sat: 9:00 AM - 7:30 PM</span>
            <span className="text-white/20">|</span>
            <a href={`tel:${ADVOCATE_INFO.phones[0]}`} className="hover:text-[#D4AF37] transition-colors text-amber-300 font-semibold flex items-center gap-1">
              <PhoneCall className="w-3 h-3" />
              <span>{ADVOCATE_INFO.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#07111F]/95 backdrop-blur-md py-3 shadow-xl border-b border-slate-200/80 dark:border-[#D4AF37]/25 text-slate-800 dark:text-white'
            : 'bg-white/90 dark:bg-[#060D18]/90 backdrop-blur-sm py-4 border-b border-slate-200/40 dark:border-white/5 text-slate-800 dark:text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Chamber Identity */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#9E7412] flex items-center justify-center text-[#060D18] font-bold shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-tight block leading-tight text-[#09172B] dark:text-white group-hover:text-[#D4AF37] transition-colors">
                  Adv. {ADVOCATE_INFO.name}
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-amber-700 dark:text-amber-200/80 font-medium block">
                  High Court Lucknow Bench
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Controls */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Quick Call */}
              <a
                href={`tel:${ADVOCATE_INFO.phones[0]}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-amber-200 hover:text-[#D4AF37] dark:hover:text-white transition-colors py-1.5 px-3 rounded-full border border-slate-300 dark:border-amber-400/30 hover:border-[#D4AF37]"
                title="Call Chamber"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Chamber</span>
              </a>

              {/* Dark/Light Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-amber-300 transition-colors cursor-pointer"
                title="Toggle Dark/Light Mode"
                aria-label="Toggle Mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Consultation CTA */}
              <button
                onClick={onBookClick}
                className="gold-gradient-bg text-[#060D18] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-amber-500/20 hover:scale-102 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-amber-300"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 dark:text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#07111F] border-b border-slate-200 dark:border-[#D4AF37]/30 px-6 pt-4 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2.5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] pb-2 border-b border-slate-100 dark:border-white/5">
              High Court Chamber Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-gray-200 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] font-medium text-sm py-2 border-b border-slate-100 dark:border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#D4AF37] text-xs">→</span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${ADVOCATE_INFO.phones[0]}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-amber-400/40 text-slate-800 dark:text-amber-200 text-xs font-semibold"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Chamber: {ADVOCATE_INFO.phones[0]}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="gold-gradient-bg text-[#060D18] font-bold py-2.5 rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
