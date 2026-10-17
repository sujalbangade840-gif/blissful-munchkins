import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { PhotoItem } from '../types';
import { SafeImage } from './SafeImage';

interface LightboxModalProps {
  photo: PhotoItem | null;
  allPhotos: PhotoItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
  onBookShoot: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  allPhotos,
  isOpen,
  onClose,
  onSelectPhoto,
  onBookShoot,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !photo) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, photo, allPhotos]);

  if (!isOpen || !photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    if (currentIndex < allPhotos.length - 1) {
      onSelectPhoto(allPhotos[currentIndex + 1]);
    } else {
      onSelectPhoto(allPhotos[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectPhoto(allPhotos[currentIndex - 1]);
    } else {
      onSelectPhoto(allPhotos[allPhotos.length - 1]);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background click overlay */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-pink-400"
        aria-label="Close Lightbox"
        id="lightbox-close-btn"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-pink-400"
        aria-label="Previous image"
        id="lightbox-prev-btn"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-pink-400"
        aria-label="Next image"
        id="lightbox-next-btn"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal */}
      <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-transparent select-none">
        <div className="relative max-h-[75vh] w-auto flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
          <SafeImage
            localSrc={photo.localPath}
            fallbackSrc={photo.fallbackUrl}
            alt={photo.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-3xl"
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 px-6 py-4 bg-white/95 backdrop-blur-md rounded-2xl max-w-2xl w-full text-center shadow-lg border border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-pink-50 text-[#FF7893]">
                {photo.category}
              </span>
              {photo.theme && (
                <span className="text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#60A5FA]">
                  {photo.theme} theme
                </span>
              )}
            </div>
            <h3 className="serif-text text-lg font-bold text-[#2D2D2D] leading-tight">
              {photo.title}
            </h3>
            {photo.subtitle && (
              <p className="text-xs text-[#4A4A4A] mt-0.5">{photo.subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookShoot();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#FF7893] hover:bg-[#ff6584] rounded-full soft-shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white/50" />
              <span>Book Similar Shoot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
