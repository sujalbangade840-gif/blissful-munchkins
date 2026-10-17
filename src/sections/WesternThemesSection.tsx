import React from 'react';
import { Feather, Sparkles, Heart, Check, ArrowRight } from 'lucide-react';
import { PhotoItem } from '../types';
import { PHOTOGRAPHY_ITEMS } from '../data/photographyData';
import { SafeImage } from '../components/SafeImage';

interface WesternThemesSectionProps {
  onSelectPhoto: (photo: PhotoItem) => void;
  onBookTheme: (themeName: string) => void;
}

export const WesternThemesSection: React.FC<WesternThemesSectionProps> = ({
  onSelectPhoto,
  onBookTheme,
}) => {
  // Western specific photos
  const westernPhotos = PHOTOGRAPHY_ITEMS.filter((p) => p.theme === 'western').slice(0, 4);

  const westernFeatures = [
    {
      title: 'Soft Pastel Tones',
      desc: 'Blush pinks, sage creams, soft oatmeal, and calming sky blues designed for delicate newborn skin.',
    },
    {
      title: 'Minimalist Backdrops',
      desc: 'Clean, distraction-free textured backdrops that keep the focus entirely on your baby’s tiny expressions.',
    },
    {
      title: 'Cozy Baskets & Knits',
      desc: 'Hand-woven baskets, plush cloud nests, hand-knitted bonnets, and breathable organic wraps.',
    },
    {
      title: 'Modern Baby Aesthetics',
      desc: 'Contemporary European and Scandinavian styling tailored for timeless, heirloom-quality portraits.',
    },
  ];

  return (
    <section id="western-themes" className="py-20 lg:py-28 bg-[#FFFDFD] relative overflow-hidden">
      {/* Soft ambient blur */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3">
            <Feather className="w-3.5 h-3.5 text-blue-500" />
            <span>MODERN & TIMELESS STYLING</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Western Themes
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Elegant, clean, and gentle modern aesthetics featuring soft pastel tones, cozy organic wraps, hand-knitted bonnets, and minimalist backdrops.
          </p>
        </div>

        {/* 4 Western Core Aesthetics Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {westernFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-blue-100/80 shadow-xs hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <h3 className="serif-text font-bold text-base text-[#2D2D2D] mb-1.5">
                {feat.title}
              </h3>
              <p className="text-xs text-[#4A4A4A] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Western Gallery Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {westernPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden bg-slate-100 border border-blue-100/70 shadow-sm hover:soft-shadow transition-all duration-300 aspect-[4/5]"
            >
              <SafeImage
                localSrc={photo.localPath}
                fallbackSrc={photo.fallbackUrl}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="serif-text font-bold text-sm">{photo.title}</p>
                <p className="text-[11px] text-blue-100 mt-0.5">{photo.subtitle}</p>
                <span className="text-[10px] text-blue-200 block mt-1">Tap to enlarge</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onBookTheme('Western Theme')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2D2D2D] hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            id="western-book-theme-btn"
          >
            <Heart className="w-4 h-4 fill-white/20 text-pink-300" />
            <span>Book Western Theme</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
