import React from 'react';
import { MapPin, Sparkles, Check, ArrowRight, Sun } from 'lucide-react';
import { PARTNER_LOCATIONS } from '../data/locationsData';
import { SafeImage } from '../components/SafeImage';

interface LocationsSectionProps {
  onAskLocation: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onAskLocation }) => {
  return (
    <section id="locations" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Sun className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>FARMHOUSE & OUTDOOR DESTINATIONS</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Beautiful Locations for Beautiful Memories
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Suitable farmhouse or outdoor locations can be arranged through associated contacts around Nagpur if parents desire an open-air natural photoshoot experience.
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[#4A4A4A]/70">
            Handpicked natural light settings around Nagpur for maternity, baby milestones, and family portraiture.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PARTNER_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="group rounded-3xl overflow-hidden bg-white border border-pink-100 shadow-xs hover:soft-shadow transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <SafeImage
                    localSrc={loc.image}
                    fallbackSrc={loc.fallbackUrl}
                    alt={loc.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#2D2D2D] shadow-xs">
                    {loc.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="serif-text text-xl font-bold text-[#2D2D2D]">
                    {loc.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    {loc.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {loc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#4A4A4A]">
                        <Check className="w-3.5 h-3.5 text-[#FF7893]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onAskLocation}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-pink-50 text-xs font-semibold text-[#2D2D2D] hover:text-[#FF7893] border border-pink-200 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Select for Shoot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <button
            type="button"
            onClick={onAskLocation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs sm:text-sm font-semibold soft-shadow transition-all duration-200 active:scale-95 cursor-pointer"
            id="locations-ask-options-cta"
          >
            <MapPin className="w-4 h-4 text-white" />
            <span>Ask About Locations</span>
          </button>
        </div>
      </div>
    </section>
  );
};
