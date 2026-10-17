import React from 'react';
import { Phone, MessageSquare, Calendar, Sparkles, Download, Layers } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface MobileBottomBarProps {
  onBookShoot: () => void;
  onOpenAI: () => void;
  onViewPortfolio: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onBookShoot,
  onOpenAI,
  onViewPortfolio,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  const handleInstallClick = () => {
    if (isInstallable) {
      install();
    } else {
      // Trigger smooth scroll or action
      onViewPortfolio();
    }
  };

  return (
    <nav
      aria-label="Mobile quick action bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-pink-100/80 shadow-[0_-8px_25px_rgba(0,0,0,0.06)] px-2 pt-1.5 pb-safe"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-5 items-center max-w-md mx-auto">
        {/* 1. Direct Phone Call */}
        <a
          href="tel:+918237554999"
          id="mobile-call-btn"
          className="flex flex-col items-center justify-center py-1 text-slate-700 hover:text-pink-600 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-0.5 text-slate-700">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight">Call</span>
        </a>

        {/* 2. WhatsApp Instant Chat */}
        <a
          href="https://wa.me/918237554999?text=Hi%20Ashwin,%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot%20with%20Blissful%20Munchkins!"
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-whatsapp-btn"
          className="flex flex-col items-center justify-center py-1 text-slate-700 hover:text-emerald-600 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-0.5">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Highlighted Center Action: Book Shoot */}
        <button
          type="button"
          onClick={onBookShoot}
          id="mobile-book-center-btn"
          className="flex flex-col items-center justify-center py-1 text-white active:scale-95 transition-all"
        >
          <div className="w-10 h-10 -mt-3.5 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30 text-white border-2 border-white">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-pink-600 tracking-tight mt-0.5">Book</span>
        </button>

        {/* 4. Instant Blissful AI Assistant */}
        <button
          type="button"
          onClick={onOpenAI}
          id="mobile-ai-assistant-btn"
          className="flex flex-col items-center justify-center py-1 text-slate-700 hover:text-pink-600 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight">AI Help</span>
        </button>

        {/* 5. Install PWA or Gallery */}
        {!isInstalled && (isInstallable || isIOS) ? (
          <button
            type="button"
            onClick={handleInstallClick}
            id="mobile-install-quick-btn"
            className="flex flex-col items-center justify-center py-1 text-slate-700 hover:text-pink-600 active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-0.5 animate-bounce">
              <Download className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold tracking-tight text-amber-700">Install</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onViewPortfolio}
            id="mobile-gallery-quick-btn"
            className="flex flex-col items-center justify-center py-1 text-slate-700 hover:text-pink-600 active:scale-95 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold tracking-tight">Gallery</span>
          </button>
        )}
      </div>
    </nav>
  );
};
