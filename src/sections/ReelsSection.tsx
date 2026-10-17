import React, { useState, useRef, useEffect } from 'react';
import { Film, Play, Heart, ArrowRight } from 'lucide-react';
import { ReelItem, ReelCategory } from '../types';
import { REELS_DATA, REEL_FILTERS } from '../data/reelsData';
import { SafeImage } from '../components/SafeImage';

interface ReelsSectionProps {
  onSelectReel: (reel: ReelItem) => void;
  onBookShoot?: () => void;
}

const ReelCard: React.FC<{ reel: ReelItem; onSelect: () => void }> = ({ reel, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration && video.duration > 0.8) {
        video.currentTime = 0.8;
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [reel.videoUrl]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      if (videoRef.current.duration && videoRef.current.duration > 0.8) {
        videoRef.current.currentTime = 0.8;
      }
    }
  };

  return (
    <div
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer relative aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 border border-pink-100 shadow-md hover:soft-shadow transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between"
    >
      {/* Real Video Background with zero AI images */}
      <div className="absolute inset-0 bg-slate-950 overflow-hidden">
        {reel.videoUrl && !videoError ? (
          <video
            ref={videoRef}
            src={`${reel.videoUrl}#t=0.8`}
            muted
            playsInline
            loop
            preload="metadata"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <SafeImage
            localSrc={reel.posterImage}
            fallbackSrc={reel.fallbackPoster}
            alt={reel.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
      </div>

      {/* Top Meta */}
      <div className="relative p-3 sm:p-4 flex items-center justify-between z-10 pointer-events-none">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/20">
          Baby Reel
        </span>
        <span className="text-[10px] font-semibold text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
          {reel.duration}
        </span>
      </div>

      {/* Center Play Button indicator */}
      <div className="relative z-10 flex items-center justify-center pointer-events-none">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-115 group-hover:bg-[#FF7893] transition-all duration-300 ${
            isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          }`}
        >
          <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
        </div>
      </div>

      {/* Bottom Meta */}
      <div className="relative p-3 sm:p-4 z-10 pointer-events-none">
        <p className="text-white text-xs sm:text-sm font-bold line-clamp-2 leading-tight drop-shadow-md">
          {reel.title}
        </p>
        {reel.views && (
          <p className="text-[10px] text-pink-200 mt-1 font-medium">
            {reel.views} views • Click to play
          </p>
        )}
      </div>
    </div>
  );
};

export const ReelsSection: React.FC<ReelsSectionProps> = ({ onSelectReel, onBookShoot }) => {
  const [activeCategory, setActiveCategory] = useState<ReelCategory>('all');

  const filteredReels = REELS_DATA.filter((reel) => {
    if (activeCategory === 'all') return true;
    return reel.category === activeCategory;
  });

  return (
    <section id="reels" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Film className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>INSTAGRAM REELS</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Cinematic Baby Reels
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Every newborn baby package includes 1 custom-edited vertical cinematic reel ready to share with your family on Instagram.
          </p>
        </div>

        {/* Filter Tabs if multiple categories exist */}
        {REEL_FILTERS.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {REEL_FILTERS.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as ReelCategory)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF7893] text-white soft-shadow scale-102'
                    : 'bg-[#FFFBFB] text-[#4A4A4A] hover:text-[#FF7893] hover:bg-pink-50 border border-pink-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Vertical Reels Grid (9:16 aspect ratio) - Responsive 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredReels.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onSelect={() => onSelectReel(reel)}
            />
          ))}
        </div>

        {/* Book Now Action Banner */}
        {onBookShoot && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={onBookShoot}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs sm:text-sm font-bold soft-shadow hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white/30" />
              <span>Book Now for Your Baby Reel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
