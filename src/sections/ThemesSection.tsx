import React, { useState } from 'react';
import { Sparkles, Palette, Crown, Feather, Heart, ArrowRight } from 'lucide-react';
import { PhotoItem, ThemeCategory } from '../types';
import { PHOTOGRAPHY_ITEMS } from '../data/photographyData';
import { SafeImage } from '../components/SafeImage';

interface ThemesSectionProps {
  onSelectPhoto: (photo: PhotoItem) => void;
  onBookShoot: () => void;
}

export const ThemesSection: React.FC<ThemesSectionProps> = ({
  onSelectPhoto,
  onBookShoot,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeCategory>('all');

  // Filter photos by theme
  const themePhotos = PHOTOGRAPHY_ITEMS.filter((p) => {
    if (selectedTheme === 'all') return p.theme !== undefined;
    return p.theme === selectedTheme;
  });

  return (
    <section id="themes" className="py-20 lg:py-28 bg-gradient-to-b from-[#FFFBFB] via-[#FFF8F9] to-[#FFFBFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Palette className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>CREATIVE STYLING</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Choose Your Theme
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal">
            Whether you dream of a minimalist pastel nest or rich cultural festive hues, Ashwin creates stunning tailored setups for your baby.
          </p>
        </div>

        {/* 3 Main Interactive Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mb-14">
          <button
            type="button"
            onClick={() => setSelectedTheme('all')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer ${
              selectedTheme === 'all'
                ? 'bg-[#2D2D2D] text-white border-[#2D2D2D] shadow-md scale-102'
                : 'bg-white text-[#4A4A4A] border-pink-100 hover:border-pink-200 hover:bg-pink-50/50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>ALL THEMES</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTheme('western')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer ${
              selectedTheme === 'western'
                ? 'bg-blue-500 text-white border-blue-400 soft-shadow-blue scale-102'
                : 'bg-white text-[#4A4A4A] border-pink-100 hover:border-blue-200 hover:bg-blue-50/50'
            }`}
          >
            <Feather className="w-4 h-4" />
            <span>WESTERN THEME</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTheme('traditional')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer ${
              selectedTheme === 'traditional'
                ? 'bg-[#FF7893] text-white border-[#FF7893] soft-shadow scale-102'
                : 'bg-white text-[#4A4A4A] border-pink-100 hover:border-pink-200 hover:bg-pink-50/50'
            }`}
          >
            <Crown className="w-4 h-4" />
            <span>TRADITIONAL / FESTIVAL THEME</span>
          </button>
        </div>

        {/* Theme Highlights Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Western Theme Info Card */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
              selectedTheme === 'western' || selectedTheme === 'all'
                ? 'bg-white border-blue-200/90 shadow-md ring-2 ring-blue-100/50'
                : 'bg-white/60 border-pink-50 opacity-60'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center">
                <Feather className="w-5 h-5" />
              </div>
              <div>
                <h3 className="serif-text text-xl font-bold text-[#2D2D2D]">Western Theme Concept</h3>
                <p className="text-xs text-blue-500 font-semibold">Pastels • Boho Wicker • Cloud Swaddles</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              Subtle Scandinavian-inspired minimalism, soft pastel knits, plush fur layers, floral headbands, moon nests, and modern neutral tones.
            </p>
          </div>

          {/* Traditional Theme Info Card */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
              selectedTheme === 'traditional' || selectedTheme === 'all'
                ? 'bg-white border-pink-200/90 shadow-md ring-2 ring-pink-100/50'
                : 'bg-white/60 border-pink-50 opacity-60'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 text-[#FF7893] flex items-center justify-center">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="serif-text text-xl font-bold text-[#2D2D2D]">Traditional / Festival Concept</h3>
                <p className="text-xs text-[#FF7893] font-semibold">Little Kanha • Marigold Garland • Heritage Brass</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              Vibrant Indian roots celebrating Janmashtami Little Kanha, authentic peacock feathers, organic yellow marigolds, ornate dhoti drapery, and festive joy.
            </p>
          </div>
        </div>

        {/* Gallery Grid displaying current theme selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themePhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-pink-100 shadow-sm hover:soft-shadow transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <SafeImage
                  localSrc={photo.localPath}
                  fallbackSrc={photo.fallbackUrl}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />

                {/* Theme indicator */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${
                      photo.theme === 'traditional'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {photo.theme} theme
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 text-white">
                  <h4 className="serif-text text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                    {photo.title}
                  </h4>
                  <span className="text-[11px] text-pink-200 block mt-1">Tap to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onBookShoot}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs sm:text-sm font-semibold soft-shadow hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white/30" />
            <span>Book a Shoot with Your Preferred Theme</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
