import React, { useState } from 'react';
import { Sparkles, Maximize2, Heart } from 'lucide-react';
import { PhotoItem, BabyShootCategory } from '../types';
import { PHOTOGRAPHY_ITEMS, BABY_CATEGORIES } from '../data/photographyData';
import { SafeImage } from '../components/SafeImage';

interface BabyPhotographySectionProps {
  onSelectPhoto: (photo: PhotoItem) => void;
  onBookShoot: () => void;
}

export const BabyPhotographySection: React.FC<BabyPhotographySectionProps> = ({
  onSelectPhoto,
  onBookShoot,
}) => {
  const [activeCategory, setActiveCategory] = useState<BabyShootCategory | 'all'>('all');

  // Filter photos for baby section
  const babyPhotos = PHOTOGRAPHY_ITEMS.filter((p) => {
    if (activeCategory === 'all') {
      return (
        p.category === 'newborn' ||
        p.category === 'baby' ||
        p.category === 'traditional' ||
        p.babyCategory !== undefined
      );
    }
    return p.babyCategory === activeCategory;
  });

  return (
    <section id="newborn-feature" className="py-20 lg:py-28 bg-[#FFFDFB] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>OUR PRIMARY PASSION</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Made for Little Munchkins
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] leading-relaxed font-normal">
            From tiny toes to the biggest smiles, we capture every precious detail.
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[#4A4A4A]/70">
            Handcrafted setups, sanitized swaddles, peaceful white-noise environment in Nagpur.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#FF7893] text-white soft-shadow'
                : 'bg-white text-[#4A4A4A] hover:text-[#FF7893] hover:bg-pink-50 border border-pink-100'
            }`}
          >
            All Baby Shoots
          </button>

          {BABY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as BabyShootCategory)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#FF7893] text-white soft-shadow'
                  : 'bg-white text-[#4A4A4A] hover:text-[#FF7893] hover:bg-pink-50 border border-pink-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Premium Grid / Masonry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {babyPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden bg-white border border-pink-100/80 shadow-sm hover:soft-shadow transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container with zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <SafeImage
                  localSrc={photo.localPath}
                  fallbackSrc={photo.fallbackUrl}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Floating category badge on card top */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#2D2D2D] shadow-sm">
                    {photo.babyCategory?.replace('-', ' ') || photo.category}
                  </span>
                </div>

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#2D2D2D] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <Maximize2 className="w-4 h-4 text-[#FF7893]" />
                </div>

                {/* Bottom caption reveal on hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="serif-text text-lg sm:text-xl font-bold leading-snug drop-shadow-md">
                    {photo.title}
                  </h3>
                  {photo.subtitle && (
                    <p className="text-xs text-pink-100 mt-1 line-clamp-2 drop-shadow-xs font-normal">
                      {photo.subtitle}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-pink-200">
                    <span>Click to expand view</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for custom theme inquiry */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-50 via-rose-50/70 to-blue-50/70 border border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="serif-text text-lg sm:text-xl font-bold text-[#2D2D2D]">
              Have a custom nursery concept or family theme in mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4A4A] mt-1">
              Ashwin crafts personalized props, color palettes, and basket nests tailored to your story.
            </p>
          </div>
          <button
            type="button"
            onClick={onBookShoot}
            className="shrink-0 px-6 py-3 rounded-full bg-[#2D2D2D] hover:bg-[#FF7893] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 text-pink-300 fill-pink-300/40" />
            <span>Plan Baby Theme</span>
          </button>
        </div>
      </div>
    </section>
  );
};
