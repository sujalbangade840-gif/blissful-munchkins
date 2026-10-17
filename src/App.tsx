import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { BTSSection } from './sections/BTSSection';
import { PackagesSection } from './sections/PackagesSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { TraditionalFestivalSection } from './sections/TraditionalFestivalSection';
import { WesternThemesSection } from './sections/WesternThemesSection';
import { ReelsSection } from './sections/ReelsSection';
import { LocationsSection } from './sections/LocationsSection';
import { AboutSection } from './sections/AboutSection';
import { ReviewsSection } from './sections/ReviewsSection';
import { InquirySection } from './sections/InquirySection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ReelModal } from './components/ReelModal';
import { AIAssistantModal } from './components/AIAssistantModal';
import { ScrollToTop } from './components/ScrollToTop';
import { Toast, ToastMessage } from './components/Toast';
import { OfflineIndicator } from './components/OfflineIndicator';
import { MobileBottomBar } from './components/MobileBottomBar';
import { PhotoItem, ReelItem } from './types';
import { PHOTOGRAPHY_ITEMS } from './data/photographyData';
import { getQueuedOfflineInquiriesCount, syncQueuedOfflineInquiries } from './services/inquiryService';
import { Sparkles, MessageCircle, Heart, ArrowRight } from 'lucide-react';

export default function App() {
  // Modal states
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [selectedPackageDuration, setSelectedPackageDuration] = useState('2 Hours (₹8,000 - Popular)');
  const [selectedService, setSelectedService] = useState('Baby');
  const [selectedThemeName, setSelectedThemeName] = useState('');
  const [queuedOfflineCount, setQueuedOfflineCount] = useState<number>(0);

  // Update queued inquiries count on mount and when connection status shifts
  React.useEffect(() => {
    setQueuedOfflineCount(getQueuedOfflineInquiriesCount());

    const handleOnline = () => {
      const synced = syncQueuedOfflineInquiries();
      if (synced > 0) {
        addToast(`${synced} offline reservation inquiry synced successfully with Ashwin!`, 'success');
        setQueuedOfflineCount(0);
      }
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = 'toast_' + Date.now();
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookShoot = () => {
    scrollToSection('#inquiry');
  };

  const handlePackageSelect = (duration: string) => {
    setSelectedPackageDuration(duration);
    setSelectedService('Newborn');
    scrollToSection('#inquiry');
    addToast(`Selected ${duration} Newborn Package. Complete your booking details below!`, 'info');
  };

  const handleExploreService = (serviceTitle: string) => {
    setSelectedService(serviceTitle.toLowerCase().includes('newborn') ? 'Newborn' : serviceTitle.toLowerCase().includes('maternity') ? 'Maternity' : serviceTitle.toLowerCase().includes('event') ? 'Event Photography' : 'Baby');
    scrollToSection('#inquiry');
    addToast(`Selected ${serviceTitle}. Complete your details below to reserve your date!`, 'info');
  };

  const handleBookTheme = (themeName: string) => {
    setSelectedThemeName(themeName);
    scrollToSection('#inquiry');
    addToast(`Selected theme "${themeName}". Let's arrange this setup for your baby!`, 'info');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBFB] text-[#4A4A4A] font-sans selection:bg-pink-100 selection:text-pink-900 overflow-x-hidden">
      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Network Connectivity / Offline Status Indicator */}
      <OfflineIndicator queuedCount={queuedOfflineCount} />

      {/* Sticky Modern Navbar */}
      <Navbar
        onBookClick={handleBookShoot}
        onOpenAI={() => setIsAIOpen(true)}
      />

      <main className="flex-1 pb-24 sm:pb-0">
        {/* 1. Hero (Newborn / Baby Photography) */}
        <HeroSection
          onExplorePortfolio={() => scrollToSection('#portfolio')}
          onBookShoot={handleBookShoot}
        />

        {/* 2. Our Services (Newborn Shoots, Baby Shoots, Maternity Shoots, All Types of Event Photography) */}
        <ServicesSection onExploreService={handleExploreService} />

        {/* 3. Baby Portfolio (Newborn, Baby, Maternity, Western, Traditional & Festival) */}
        <PortfolioSection
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          onBookShoot={handleBookShoot}
        />

        {/* 4. Traditional & Festival Themes (Shiv, Malhar, Devi Ambabai, Radha & Krishna, Gudi Padwa, Vitthal Varkari, Ganpati, Bail Pola, Shri Ram, Holi) */}
        <TraditionalFestivalSection
          onBookTheme={handleBookTheme}
          onExploreTheme={handleBookTheme}
        />

        {/* 5. Western Themes (Soft pastel tones, minimalist backdrops, cozy baskets, wraps, knits) */}
        <WesternThemesSection
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          onBookTheme={handleBookTheme}
        />

        {/* 6. Baby & Theme Reels (5 Real Baby Reels + Themes with Live Video Player) */}
        <ReelsSection
          onSelectReel={(reel) => setSelectedReel(reel)}
          onBookShoot={handleBookShoot}
        />

        {/* 7. Baby Safety & Between the Shoot (Sanitized studio, safe handling, feeding intervals, BTS videos) */}
        <BTSSection />

        {/* 8. Baby Packages (1hr ₹6k, 2hr ₹8k POPULAR, 3hr ₹10k with 1 Reel & 15–20 Photos) */}
        <PackagesSection onSelectPackage={handlePackageSelect} />

        {/* 9. Destination Locations ("Beautiful Locations for Beautiful Memories") */}
        <LocationsSection onAskLocation={handleBookShoot} />

        {/* 10. Reviews ("What Our Customers Say" - parent name, baby age during shoot, rating stars, heartfelt comment) */}
        <ReviewsSection />

        {/* 11. About Ashwin ("Meet Ashwin Bangade" - 11 years, 696+ baby shoots, Nagpur based) */}
        <AboutSection
          onKnowMore={() => scrollToSection('#bts-safety')}
          onBookShoot={handleBookShoot}
        />

        {/* 12. AI Assistant ("Ask Blissful AI" interactive section feature) */}
        <section id="ai-assistant-feature" className="py-16 bg-gradient-to-b from-[#FFFBFB] to-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-pink-50 via-white to-blue-50 border border-pink-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
                <div className="w-14 h-14 rounded-2xl bg-white soft-shadow flex items-center justify-center text-[#FF7893] shrink-0 border border-pink-100">
                  <Sparkles className="w-7 h-7 text-[#FF7893]" />
                </div>
                <div>
                  <h3 className="serif-text text-xl sm:text-2xl font-bold text-[#2D2D2D]">
                    Have Questions? Ask Blissful AI
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1 max-w-xl leading-relaxed">
                    Get instant, accurate answers about baby shoots, newborn packages & pricing, Traditional vs. Western themes, shoot durations, or how to book with Ashwin in Nagpur.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsAIOpen(true)}
                className="shrink-0 px-6 py-3.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white font-bold text-xs sm:text-sm soft-shadow active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                id="section-ask-blissful-ai-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Blissful AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 13. Inquiry / Book Now (Centralized booking form) */}
        <InquirySection
          initialDuration={selectedPackageDuration}
          initialService={selectedService}
          initialTheme={selectedThemeName}
          onInquirySubmitted={(name) => {
            setQueuedOfflineCount(getQueuedOfflineInquiriesCount());
            addToast(`Thank you ${name}! Ashwin will contact you shortly to confirm your session.`, 'success');
          }}
        />

        {/* 14. Contact (Direct WhatsApp, Call, Instagram, Studio Location) */}
        <ContactSection onBookShoot={handleBookShoot} />
      </main>

      {/* 15. Footer */}
      <Footer onBookShoot={handleBookShoot} />

      {/* Mobile-Native Bottom Quick Action Bar (Call, WhatsApp, Book, AI Help, Gallery/Install) */}
      <MobileBottomBar
        onBookShoot={handleBookShoot}
        onOpenAI={() => setIsAIOpen(true)}
        onViewPortfolio={() => scrollToSection('#portfolio')}
      />

      {/* Floating "Ask Blissful AI" Action Button (Desktop) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsAIOpen(true)}
          className="bg-white soft-shadow rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-3 border border-pink-100 cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg"
          id="floating-ask-ai-btn"
          aria-label="Ask Blissful AI"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF7893] to-blue-400 flex items-center justify-center text-white text-xs font-bold shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Instant Help</div>
            <div className="text-xs sm:text-sm font-bold text-[#2D2D2D] mt-0.5">Ask Blissful AI</div>
          </div>
        </button>
      </div>

      {/* Scroll to Top Utility */}
      <ScrollToTop />

      {/* Lightbox Fullscreen Modal */}
      <LightboxModal
        photo={selectedPhoto}
        allPhotos={PHOTOGRAPHY_ITEMS}
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        onBookShoot={handleBookShoot}
      />

      {/* Vertical Reel Viewer Modal */}
      <ReelModal
        reel={selectedReel}
        isOpen={!!selectedReel}
        onClose={() => setSelectedReel(null)}
        onBookShoot={handleBookShoot}
      />

      {/* AI Assistant Chat Modal */}
      <AIAssistantModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onNavigateToSection={scrollToSection}
      />
    </div>
  );
}
