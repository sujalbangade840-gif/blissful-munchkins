import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ContactSectionProps {
  onBookShoot: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookShoot }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFBFB] relative border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>DIRECT CONNECT</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Let's Connect
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Whether you have questions about props, scheduling your baby’s unhurried session, or discussing traditional theme setups in Nagpur, Ashwin is here to guide you personally.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Brand & Photographer Card */}
          <div className="p-7 rounded-3xl bg-white border border-pink-100 shadow-xs hover:soft-shadow transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#FF7893] flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 fill-pink-200" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7893]">STUDIO & ARTIST</div>
            <h3 className="serif-text text-lg font-bold text-[#2D2D2D] mt-1">{SITE_CONFIG.brandName}</h3>
            <p className="text-xs font-semibold text-[#2D2D2D] mt-0.5">{SITE_CONFIG.photographerName}</p>
            <p className="text-[11px] text-[#4A4A4A] mt-2">11 Years Experience • 696+ Baby Shoots</p>
          </div>

          {/* Location Card */}
          <div className="p-7 rounded-3xl bg-white border border-pink-100 shadow-xs hover:soft-shadow transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-500">STUDIO LOCATION</div>
            <h3 className="serif-text text-lg font-bold text-[#2D2D2D] mt-1">{SITE_CONFIG.location}</h3>
            <p className="text-xs font-semibold text-[#2D2D2D] mt-0.5">India</p>
            <p className="text-[11px] text-[#4A4A4A] mt-2">Climate-Controlled Sanitized Baby Studio & Partner Farmhouses</p>
          </div>

          {/* WhatsApp & Call Card */}
          <div className="p-7 rounded-3xl bg-white border border-pink-100 shadow-xs hover:soft-shadow transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">CALL & WHATSAPP</div>
            <a
              href={`tel:${SITE_CONFIG.socials.phone.replace(/[^0-9+]/g, '')}`}
              className="font-mono text-sm font-bold text-[#2D2D2D] mt-2 px-3 py-1 bg-pink-50/50 rounded-xl border border-pink-100 hover:text-[#FF7893] transition-colors"
            >
              {SITE_CONFIG.socials.phone}
            </a>
            <a
              href={SITE_CONFIG.socials.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full"
            >
              <span>Chat on WhatsApp</span>
              <span>→</span>
            </a>
          </div>

          {/* Instagram Cards */}
          <div className="p-7 rounded-3xl bg-white border border-pink-100 shadow-xs hover:soft-shadow transition-all flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#FF7893] flex items-center justify-center mb-4">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7893]">INSTAGRAM CHANNELS</div>
            <a
              href={SITE_CONFIG.socials.instagramPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold text-[#FF7893] mt-2 px-3 py-1 bg-pink-50 rounded-xl border border-pink-200 hover:bg-pink-100 transition-colors"
            >
              {SITE_CONFIG.socials.instagramPrimary}
            </a>
            <a
              href={SITE_CONFIG.socials.instagramPhotographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] font-semibold text-[#4A4A4A] mt-1.5 hover:text-[#FF7893] transition-colors"
            >
              {SITE_CONFIG.socials.instagramPhotographer}
            </a>
          </div>
        </div>

        {/* Shoot Call to Action */}
        <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-[#FF7893] via-[#ff8fa6] to-blue-400 text-white soft-shadow flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="serif-text text-2xl sm:text-3xl font-bold">
              Ready to capture your baby’s precious moments?
            </h3>
            <p className="text-xs sm:text-sm text-pink-50 mt-2 max-w-xl leading-relaxed">
              Newborn sessions in Nagpur are best scheduled between 5 to 20 days after birth. Book your dates in advance to reserve studio time.
            </p>
          </div>
          <button
            type="button"
            onClick={onBookShoot}
            className="shrink-0 px-8 py-4 rounded-full bg-white text-[#FF7893] font-bold text-sm hover:bg-pink-50 shadow-md transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
