import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Heart, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onBookClick: () => void;
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onOpenAI }) => {
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Themes', href: '#traditional-themes' },
    { label: 'Baby Reels', href: '#reels' },
    { label: 'Safety & BTS', href: '#bts-safety' },
    { label: 'Packages', href: '#packages' },
    { label: 'Locations', href: '#locations' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-pink-100/60 shadow-xs py-3 bg-white/95 backdrop-blur-md'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7893] rounded-lg p-1"
              id="brand-logo-btn"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF7893]/20 via-pink-100 to-blue-100 flex items-center justify-center text-[#FF7893] group-hover:scale-105 transition-transform duration-300 shadow-xs">
                <Heart className="w-5 h-5 fill-[#FF7893]/30 text-[#FF7893]" />
              </div>
              <div className="flex flex-col">
                <span className="serif-text text-xl sm:text-2xl font-bold tracking-tight text-[#FF7893] leading-none">
                  BLISSFUL
                </span>
                <span className="text-[10px] tracking-[0.28em] font-bold uppercase text-blue-500 mt-0.5">
                  MUNCHKINS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs font-medium text-[#4A4A4A] hover:text-[#FF7893] px-2.5 py-1.5 rounded-full hover:bg-pink-50/70 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA & Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <PWAInstallButton variant="navbar" />

              <button
                type="button"
                onClick={onOpenAI}
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#FF7893] bg-pink-50/90 hover:bg-pink-100 px-3.5 py-2 rounded-full border border-pink-200/80 transition-all duration-200 shadow-2xs cursor-pointer"
                title="Ask Blissful AI"
                id="navbar-ai-assistant-btn"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FF7893]" />
                <span>Ask Blissful AI</span>
              </button>

              <button
                type="button"
                onClick={onBookClick}
                className="relative group overflow-hidden text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#FF7893] hover:bg-[#ff6584] px-6 py-2.5 rounded-full soft-shadow active:scale-95 transition-all duration-300 cursor-pointer"
                id="navbar-book-now-cta"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Book Now</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </span>
              </button>
            </div>

            {/* Mobile Actions and Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <PWAInstallButton variant="navbar" className="text-[11px] px-2.5 py-1" />

              <button
                type="button"
                onClick={onBookClick}
                className="text-xs font-semibold text-white bg-[#FF7893] px-3.5 py-1.5 rounded-full shadow-xs active:scale-95"
              >
                Book Now
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#2D2D2D] hover:text-[#FF7893] hover:bg-pink-50 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FFFDFB] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-pink-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
                    <Heart className="w-4 h-4 fill-pink-300" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#FF7893] uppercase tracking-widest block">
                      BLISSFUL
                    </span>
                    <span className="serif-text font-bold text-sm text-[#2D2D2D]">
                      MUNCHKINS
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-pink-50 cursor-pointer"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium text-slate-700 hover:text-[#FF7893] hover:bg-pink-50 transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-pink-300 text-xs">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-pink-100 space-y-3">
              <PWAInstallButton variant="banner" />

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAI();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-pink-200 bg-pink-50 text-xs font-semibold text-[#FF7893] hover:bg-pink-100 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#FF7893]" />
                <span>Ask Blissful AI</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#FF7893] hover:bg-[#ff6584] text-white font-semibold text-sm shadow-md transition-all text-center"
              >
                Book Now
              </button>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                {SITE_CONFIG.location} • {SITE_CONFIG.photographerName}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
