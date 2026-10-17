import React, { useState } from 'react';
import { Crown, Sparkles, Filter, ArrowRight, Heart } from 'lucide-react';
import { TraditionalThemeId } from '../types';
import { TRADITIONAL_THEMES, TRADITIONAL_FILTER_TABS } from '../data/themesData';
import { SafeImage } from '../components/SafeImage';

interface TraditionalFestivalSectionProps {
  onBookTheme: (themeName: string) => void;
  onExploreTheme?: (themeName: string) => void;
}

export const TraditionalFestivalSection: React.FC<TraditionalFestivalSectionProps> = ({
  onBookTheme,
  onExploreTheme,
}) => {
  const [activeFilter, setActiveFilter] = useState<TraditionalThemeId>('all');

  const filteredThemes = TRADITIONAL_THEMES.filter((theme) => {
    if (activeFilter === 'all') return true;
    return theme.id === activeFilter;
  });

  return (
    <section id="traditional-themes" className="py-20 lg:py-28 bg-[#FFF9FA] relative overflow-hidden">
      <span id="traditional-festival" className="sr-only">Traditional Festival Themes</span>
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>UNIQUE SELLING PROPOSITION</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Traditional & Festival Themes
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Celebrate Nagpur’s vibrant culture and sacred festivities with our handcrafted divine baby setups. From Little Kanha to Ganpati Bappa, every setup is enriched with authentic brass, fresh garlands, and skin-friendly attire.
          </p>
        </div>

        {/* 10-Item Interactive Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 pt-1 mb-12 scrollbar-none no-scrollbar">
          {TRADITIONAL_FILTER_TABS.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as TraditionalThemeId)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF7893] text-white border-[#FF7893] shadow-md shadow-pink-500/20 scale-102'
                    : 'bg-white text-[#4A4A4A] border-pink-100 hover:border-pink-300 hover:bg-pink-50/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Photography Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredThemes.map((theme) => (
            <div
              key={theme.id}
              className="bg-white rounded-3xl overflow-hidden border border-pink-100/80 soft-shadow transition-all duration-300 hover:-translate-y-1.5 group flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <SafeImage
                  localSrc={theme.image}
                  fallbackSrc={theme.fallbackUrl}
                  alt={theme.alt}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-white shadow-xs backdrop-blur-xs">
                    {theme.badge}
                  </span>
                </div>

                {/* Card Floating Overlay Content */}
                <div className="absolute bottom-4 inset-x-5 text-white">
                  <h3 className="serif-text text-2xl font-bold uppercase tracking-wide drop-shadow-sm">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-amber-200/90 mt-1 font-medium">
                    Traditional Baby Theme
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mb-4">
                    {theme.description}
                  </p>

                  {/* Props used */}
                  <div className="mb-5">
                    <span className="text-[11px] font-bold text-[#2D2D2D] uppercase tracking-wider block mb-2">
                      Props & Elements:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {theme.propsUsed.map((prop, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-pink-50 text-[#4A4A4A] text-[11px] border border-pink-100/70"
                        >
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button: [Explore] or [Book This Theme] */}
                <div className="pt-2 flex items-center justify-between border-t border-pink-50 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (onExploreTheme) onExploreTheme(theme.name);
                      else onBookTheme(theme.name);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2D2D] hover:text-[#FF7893] transition-colors cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookTheme(theme.name)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs font-semibold shadow-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Heart className="w-3 h-3 fill-white/40" />
                    <span>Book Theme</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-pink-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="serif-text text-xl font-bold text-[#2D2D2D]">
              Have a Custom Festival or Cultural Idea in Mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1 max-w-xl">
              Ashwin specializes in customizing family heirloom garments, specific family deity concepts, and baby naming ceremonies.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onBookTheme('Traditional Festival Custom')}
            className="shrink-0 px-8 py-3.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
