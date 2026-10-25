import { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { HighCourtProcess } from './components/HighCourtProcess';
import { DocumentChecklist } from './components/DocumentChecklist';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Experience } from './components/Experience';
import { CaseHighlights } from './components/CaseHighlights';
import { Testimonials } from './components/Testimonials';
import { AppointmentBooking } from './components/AppointmentBooking';
import { LegalInsights } from './components/LegalInsights';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Modals } from './components/Modals';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);
  const [showCardModal, setShowCardModal] = useState<boolean>(false);
  const [showBciModal, setShowBciModal] = useState<boolean>(false);
  const [consultPracticeArea, setConsultPracticeArea] = useState<string>('High Court Writ Petitions');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Check Bar Council Disclaimer acknowledgment
  useEffect(() => {
    const acknowledged = sessionStorage.getItem('bci_disclaimer_ack');
    if (!acknowledged) {
      // Show BCI modal on first load for legal authenticity
      setShowBciModal(true);
    }
  }, []);

  const scrollToBooking = (practiceAreaTitle?: string) => {
    if (practiceAreaTitle) {
      setConsultPracticeArea(practiceAreaTitle);
    }
    const el = document.getElementById('book-consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060D18] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onBookClick={() => scrollToBooking()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />
        
        {/* About Advocate & Chamber Charter */}
        <About
          onDownloadPdf={() => setShowPdfModal(true)}
          onDownloadCard={() => setShowCardModal(true)}
        />
        
        {/* High Court Practice Domains */}
        <PracticeAreas onBookClick={(title) => scrollToBooking(title)} />

        {/* High Court Judicial Process Roadmap */}
        <HighCourtProcess onBookClick={() => scrollToBooking()} />

        {/* Consultation Document Preparation Checklist */}
        <DocumentChecklist />

        {/* Distinctive Chamber Advantages */}
        <WhyChooseUs />
        
        {/* Career Timeline & Standing */}
        <Experience />
        
        {/* Landmark Case Highlights */}
        <CaseHighlights onBookClick={() => scrollToBooking()} />
        
        {/* Verified Litigant Testimonials */}
        <Testimonials />
        
        {/* Consultation Scheduling Form */}
        <AppointmentBooking initialPracticeArea={consultPracticeArea} />
        
        {/* Legal Insights & Procedural Guides */}
        <LegalInsights />
        
        {/* Frequently Asked Questions */}
        <FAQ />
        
        {/* Chamber Coordinates & Transmission */}
        <Contact />
      </main>

      {/* Chamber Footer */}
      <Footer />

      {/* Quick Contact Action Dock */}
      <FloatingActions />

      {/* Interactive Modals (PDF, Visiting Card, BCI Disclaimer) */}
      <Modals
        showPdfModal={showPdfModal}
        setShowPdfModal={setShowPdfModal}
        showCardModal={showCardModal}
        setShowCardModal={setShowCardModal}
        showBciModal={showBciModal}
        setShowBciModal={setShowBciModal}
      />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}

export default App;
