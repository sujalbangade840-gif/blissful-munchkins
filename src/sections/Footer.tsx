import React from 'react';
import { Heart, Instagram, Facebook, MessageCircle, MapPin, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onBookShoot?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookShoot }) => {
  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Between The Shoot', href: '#bts-safety' },
    { label: 'Packages', href: '#packages' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Traditional Themes', href: '#traditional-themes' },
    { label: 'Western Themes', href: '#western-themes' },
    { label: 'Reels', href: '#reels' },
    { label: 'Locations', href: '#locations' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Inquiry', href: '#inquiry' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-pink-100 text-[#4A4A4A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-12 border-b border-pink-100/70">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-pink-50 text-[#FF7893] flex items-center justify-center">
                <Heart className="w-4 h-4 fill-pink-200" />
              </div>
              <span className="serif-text font-bold text-xl tracking-tight text-[#2D2D2D]">
                {SITE_CONFIG.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A4A4A] font-medium">
              By <strong className="text-[#2D2D2D]">{SITE_CONFIG.photographerName}</strong> • {SITE_CONFIG.location}
            </p>
            <p className="text-xs text-[#FF7893] font-semibold mt-1">
              {SITE_CONFIG.experienceYears} • {SITE_CONFIG.babyShootsCount}
            </p>
          </div>

          {/* Contact Details & Book Now CTA */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${SITE_CONFIG.socials.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2D2D2D] hover:text-[#FF7893] bg-pink-50/60 px-4 py-2 rounded-full border border-pink-100"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF7893]" />
              <span>{SITE_CONFIG.socials.phone}</span>
            </a>

            <a
              href={SITE_CONFIG.socials.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {onBookShoot && (
              <button
                type="button"
                onClick={onBookShoot}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs sm:text-sm font-bold soft-shadow transition-all active:scale-95 cursor-pointer"
                id="footer-book-now-btn"
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Navigation & Social Links */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-pink-100/60">
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-[#4A4A4A]" aria-label="Footer Navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#FF7893] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Channels */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.socials.instagramPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Primary"
              className="w-9 h-9 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#FF7893] flex items-center justify-center transition-colors shadow-2xs"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-9 h-9 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#60A5FA] flex items-center justify-center transition-colors shadow-2xs"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4A4A4A]/70 text-center sm:text-left">
          <p>© 2026 {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="text-[11px] text-[#4A4A4A]/60">
            Best Baby Photography in Nagpur • By {SITE_CONFIG.photographerName}
          </p>
        </div>
      </div>
    </footer>
  );
};
