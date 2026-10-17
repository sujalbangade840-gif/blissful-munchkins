import React from 'react';
import { Camera, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { CORE_SERVICES } from '../data/servicesData';
import { SafeImage } from '../components/SafeImage';

interface ServicesSectionProps {
  onExploreService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onExploreService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>SPECIALIZED PHOTOGRAPHY SERVICES</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Our Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Crafted with gentleness, patience, and 11+ years of photography artistry in Nagpur. Focused on newborn innocence, baby milestones, maternity radiance, and your family’s special celebrations.
          </p>
        </div>

        {/* 4 Core Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl overflow-hidden bg-white border border-pink-100 shadow-xs hover:soft-shadow transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <SafeImage
                    localSrc={service.image}
                    fallbackSrc={service.fallbackUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  {service.tagline && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#FF7893] shadow-xs">
                      {service.tagline}
                    </div>
                  )}
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <h3 className="serif-text text-lg sm:text-xl font-bold text-[#2D2D2D] uppercase tracking-wide group-hover:text-[#FF7893] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    "{service.description}"
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 pt-4 border-t border-pink-50 space-y-1.5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="text-[11px] text-[#4A4A4A] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7893] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Explore & Book Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onExploreService(service.title)}
                  className="w-full py-3 px-4 rounded-2xl bg-pink-50 hover:bg-[#FF7893] text-xs font-bold text-[#FF7893] hover:text-white border border-pink-200 hover:border-[#FF7893] transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer shadow-xs"
                >
                  <Heart className="w-3.5 h-3.5 fill-current opacity-70" />
                  <span>Book {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
