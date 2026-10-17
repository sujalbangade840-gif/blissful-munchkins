import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { PhotoItem, PortfolioCategory } from '../types';
import { PHOTOGRAPHY_ITEMS, PORTFOLIO_FILTERS } from '../data/photographyData';
import { SafeImage } from '../components/SafeImage';

interface PortfolioSectionProps {
  onSelectPhoto: (photo: PhotoItem) => void;
  onBookShoot?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectPhoto, onBookShoot }) => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');

  const filteredPhotos = PHOTOGRAPHY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'western') return item.theme === 'western';
    if (activeFilter === 'traditional') return item.theme === 'traditional';
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FFFBFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>CURATED GALLERY</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Our Photography Portfolio
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal">
            Explore our collection of newborn captures, baby milestones, traditional celebrations, and family stories in Nagpur.
          </p>
        </div>

        {/* Filter Bar - Mobile touch swipeable with hidden scrollbar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center flex-nowrap sm:flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {PORTFOLIO_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id as PortfolioCategory)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 min-h-[44px] flex items-center justify-center active:scale-95 ${
                activeFilter === filter.id
                  ? 'bg-[#FF7893] text-white soft-shadow'
                  : 'bg-white text-[#4A4A4A] hover:text-[#FF7893] hover:bg-pink-50 border border-pink-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden bg-white border border-pink-100/70 shadow-sm hover:soft-shadow transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
            >
              {/* Image Aspect ratio container */}
              <div
                className={`relative overflow-hidden bg-slate-100 ${
                  photo.aspectRatio === 'tall'
                    ? 'aspect-[3/4]'
                    : photo.aspectRatio === 'portrait'
                    ? 'aspect-[4/5]'
                    : photo.aspectRatio === 'wide'
                    ? 'aspect-[16/10]'
                    : 'aspect-square'
                }`}
              >
                <SafeImage
                  localSrc={photo.localPath}
                  fallbackSrc={photo.fallbackUrl}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Mobile persistent subtle gradient + desktop hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#2D2D2D] shadow-xs">
                    {photo.category}
                  </span>
                </div>

                {/* Zoom indicator button */}
                <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#FF7893] flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Content info bottom: readable on mobile and animated on desktop hover */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                  <p className="serif-text text-base sm:text-lg font-bold leading-tight drop-shadow-md">
                    {photo.title}
                  </p>
                  {photo.subtitle && (
                    <p className="text-xs text-pink-100 mt-1 line-clamp-1 opacity-90">
                      {photo.subtitle}
                    </p>
                  )}
                  <span className="inline-block text-[10px] sm:text-[11px] text-pink-200 font-semibold mt-1.5 sm:mt-2">
                    Tap to view fullscreen
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredPhotos.length === 0 && (
          <div className="py-16 text-center text-[#4A4A4A] bg-white rounded-3xl border border-pink-100 p-8">
            <p className="text-base font-medium">No photographs found under this filter.</p>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className="mt-3 text-xs font-semibold text-[#FF7893] underline cursor-pointer"
            >
              Reset to view all photos
            </button>
          </div>
        )}

        {/* Book Now Action Banner */}
        {onBookShoot && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={onBookShoot}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs sm:text-sm font-bold soft-shadow hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Book Now for Your Baby</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
