import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X, Smartphone, Sparkles, Check } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'navbar' | 'mobile' | 'floating' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'navbar',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already installed as PWA standalone, hide install triggers
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 3000);
      }
    } else {
      // Fallback guide if browser doesn't expose prompt
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      {variant === 'navbar' && (
        <button
          onClick={handleInstallClick}
          id="pwa-install-nav-btn"
          className={`group flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm hover:shadow-md hover:from-pink-600 hover:to-rose-600 active:scale-95 transition-all ${className}`}
          title="Install App to Home Screen for fast offline access"
        >
          {installSuccess ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Installed</span>
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Install App</span>
            </>
          )}
        </button>
      )}

      {variant === 'mobile' && (
        <button
          onClick={handleInstallClick}
          id="pwa-install-mobile-btn"
          className={`flex flex-col items-center justify-center p-1 text-slate-700 hover:text-pink-600 transition-colors ${className}`}
          title="Install App"
        >
          <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-0.5 shadow-sm">
            <Download className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium leading-none">Install</span>
        </button>
      )}

      {variant === 'banner' && (
        <div
          id="pwa-install-banner"
          className={`flex items-center justify-between gap-3 p-3 bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 rounded-2xl border border-pink-100 shadow-sm ${className}`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-sm shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-tight flex items-center gap-1">
                Install Munchkins App <Sparkles className="w-3 h-3 text-pink-500" />
              </p>
              <p className="text-[11px] text-slate-600 leading-tight">
                Works 100% offline with instant loading
              </p>
            </div>
          </div>
          <button
            onClick={handleInstallClick}
            className="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold shadow-sm transition active:scale-95 shrink-0"
          >
            Install
          </button>
        </div>
      )}

      {/* iOS Safari / Universal Installation Instructions Modal */}
      {showIOSGuide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowIOSGuide(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-pink-100 dark:bg-slate-900 text-slate-800 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold">Install to Home Screen</h3>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Install <strong>Blissful Munchkins</strong> on your phone for full offline browsing, faster photo loading, and instant booking anytime!
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100/80">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold shrink-0">
                  1
                </span>
                <p className="text-xs text-slate-700">
                  Tap the <strong className="inline-flex items-center gap-1 font-semibold text-pink-600"><Share2 className="w-3.5 h-3.5 inline" /> Share</strong> button in your browser toolbar (bottom on Safari / top-right on Chrome).
                </p>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100/80">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold shrink-0">
                  2
                </span>
                <p className="text-xs text-slate-700">
                  Scroll down and tap <strong className="inline-flex items-center gap-1 font-semibold text-pink-600"><PlusSquare className="w-3.5 h-3.5 inline" /> Add to Home Screen</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100/80">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold shrink-0">
                  3
                </span>
                <p className="text-xs text-slate-700">
                  Confirm <strong className="font-semibold text-pink-600">Add</strong>. Munchkins will appear as a native app on your phone!
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition active:scale-95"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
