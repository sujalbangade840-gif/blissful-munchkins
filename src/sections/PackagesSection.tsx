import React from 'react';
import { Sparkles, Check, Heart, Film, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { NEWBORN_PACKAGES } from '../data/packagesData';

interface PackagesSectionProps {
  onSelectPackage: (duration: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-pink-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-sky-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Newborn Baby Shoot Packages
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal">
            Gentle, unhurried, and safe photography sessions crafted for your little newborn in Nagpur.
          </p>

          {/* Included in all packages badge banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-[#FFFBFB] border border-pink-100/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2D2D2D]">
              <Film className="w-4 h-4 text-[#FF7893]" />
              <span>Every package includes: <strong className="text-[#FF7893]">1 Reel</strong></span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-pink-200" />
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2D2D2D]">
              <ImageIcon className="w-4 h-4 text-blue-500" />
              <span>Every package includes: <strong className="text-blue-500">15–20 Edited Photos</strong></span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {NEWBORN_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const isPremium = pkg.premium;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#FFF9F9] via-white to-[#FFF5F7] border-2 border-[#FF7893] soft-shadow md:-mt-4 md:mb-4'
                    : isPremium
                    ? 'bg-white border-2 border-blue-200/80 shadow-lg shadow-blue-100/40'
                    : 'bg-[#FFFBFB] border border-pink-100 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#FF7893] shadow-md">
                      POPULAR
                    </span>
                  </div>
                )}

                {/* Premium Pill */}
                {isPremium && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 shadow-xs">
                      LUXURY HEIRLOOM
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF7893]">
                    DURATION
                  </div>

                  <div className="mt-1 flex items-baseline justify-between">
                    <h3 className="serif-text text-2xl sm:text-3xl font-bold text-[#2D2D2D]">
                      {pkg.duration}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-[#4A4A4A] min-h-[36px]">
                    {pkg.description}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-6 pt-6 border-t border-pink-100">
                    <div className="flex items-baseline gap-1">
                      <span className="serif-text text-4xl sm:text-5xl font-extrabold text-[#2D2D2D] tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-[#4A4A4A]/70 font-medium">/ session</span>
                    </div>
                    <p className="text-[11px] text-[#FF7893] font-semibold mt-1">
                      No hidden fees • Nagpur studio
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="mt-8 space-y-3.5">
                    <div className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wider">
                      Package Output & Inclusions:
                    </div>
                    {pkg.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A4A4A]">
                        <div className="w-5 h-5 rounded-full bg-pink-100 text-[#FF7893] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-medium text-[#2D2D2D]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire Now CTA Button */}
                <div className="mt-8 pt-6 border-t border-pink-50">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg.duration)}
                    className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#FF7893] hover:bg-[#ff6584] text-white soft-shadow active:scale-95'
                        : isPremium
                        ? 'bg-[#2D2D2D] text-white hover:bg-[#FF7893]'
                        : 'bg-white text-[#2D2D2D] border border-pink-200 hover:bg-pink-50 hover:text-[#FF7893]'
                    }`}
                    id={`package-enquire-${pkg.id}`}
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Baby Safety and Comfort */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          * Baby safety is our top priority. Extra soothing and feeding intervals are provided naturally without counting against your sweet family memories.
        </div>
      </div>
    </section>
  );
};
