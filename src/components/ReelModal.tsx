import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Heart, Share2, Sparkles, AlertCircle } from 'lucide-react';
import { ReelItem } from '../types';
import { SafeImage } from './SafeImage';

interface ReelModalProps {
  reel: ReelItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookShoot: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({
  reel,
  isOpen,
  onClose,
  onBookShoot,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [hasVideoError, setHasVideoError] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen || !reel) return;
    setLiked(false);
    setIsPlaying(true);
    setIsLoading(true);
    setProgress(0);
    setHasVideoError(false);

    const timer = setTimeout(() => {
      const video = videoRef.current;
      if (video) {
        video.muted = isMuted;
        video
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            // Autoplay with sound blocked; ensure muted playback succeeds
            if (video) {
              video.muted = true;
              setIsMuted(true);
              video
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setIsLoading(false);
                })
                .catch(() => {
                  setIsPlaying(false);
                  setIsLoading(false);
                });
            }
          });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [isOpen, reel]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    if (dur && dur > 0) {
      setProgress((current / dur) * 100);
    }
  };

  if (!isOpen || !reel) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={reel.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
        aria-label="Close Reel"
        id="reel-modal-close-btn"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Reel Phone Container (9:16 aspect ratio) */}
      <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-[78vh] sm:h-[84vh] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/20 bg-black flex flex-col justify-between select-none">
        {/* Real Video Player or Poster Fallback */}
        <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
          {reel.videoUrl && !hasVideoError ? (
            <video
              ref={videoRef}
              src={reel.videoUrl}
              playsInline
              loop
              autoPlay
              muted={isMuted}
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => {
                setIsLoading(false);
                setIsPlaying(true);
              }}
              onLoadedData={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasVideoError(true);
              }}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-900 w-full h-full text-white">
              <AlertCircle className="w-10 h-10 text-pink-400 mb-2" />
              <p className="text-sm font-semibold mb-1">Unable to load video</p>
              <button
                type="button"
                onClick={() => {
                  setHasVideoError(false);
                  setIsLoading(true);
                  if (videoRef.current) {
                    videoRef.current.load();
                    videoRef.current.play().catch(() => {});
                  }
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-[#FF7893] text-white text-xs font-bold"
              >
                Retry
              </button>
            </div>
          )}

          {/* Buffering Loading Indicator */}
          {isLoading && !hasVideoError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 pointer-events-none">
              <div className="w-9 h-9 border-3 border-pink-400 border-t-transparent rounded-full animate-spin mb-2" />
              <span className="text-xs text-white/90 font-medium tracking-wide">Loading Reel...</span>
            </div>
          )}

          {/* Subtle cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none z-10" />
        </div>

        {/* Tap to Unmute Pill */}
        {isMuted && !isLoading && !hasVideoError && (
          <button
            type="button"
            onClick={toggleMute}
            className="absolute top-20 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20 animate-pulse hover:bg-black/90 cursor-pointer shadow-lg"
          >
            <VolumeX className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>Tap for Sound 🔊</span>
          </button>
        )}

        {/* Top bar with story progress line and details */}
        <div className="p-4 pt-5 z-10">
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-[#FF7893] transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFD166] via-[#FF7893] to-[#60A5FA] p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-[#FF7893]">
                  BM
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-none">Blissful Munchkins</p>
                <p className="text-[10px] text-pink-100 mt-0.5">Ashwin Bangade • Nagpur</p>
              </div>
            </div>

            <button
              type="button"
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md cursor-pointer transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Center Play/Pause tap toggle */}
        <div
          className="flex-1 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-lg transform transition-transform animate-scale-in">
              <Play className="w-8 h-8 ml-1 fill-white" />
            </div>
          )}
        </div>

        {/* Bottom Details & Action Column */}
        <div className="p-5 z-10 flex items-end justify-between gap-4">
          <div className="flex-1 text-white pr-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7893]/90 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase mb-1 text-white">
              {reel.category} Reel
            </span>
            <h4 className="text-sm sm:text-base font-semibold text-white drop-shadow-md line-clamp-2">
              {reel.title}
            </h4>
            <p className="text-[11px] text-white/90 mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FFD166]" />
              <span>Included in all Newborn Packages (1 Reel + Photos)</span>
            </p>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookShoot();
              }}
              className="mt-3 px-4 py-1.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs font-semibold soft-shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white/40" />
              <span>Book This Shoot</span>
            </button>
          </div>

          {/* Right Floating Actions */}
          <div className="flex flex-col items-center gap-4 text-white">
            <button
              type="button"
              onClick={() => setLiked(!liked)}
              className="flex flex-col items-center gap-1 group cursor-pointer"
              aria-label="Like reel"
            >
              <div
                className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                  liked ? 'bg-[#FF7893] text-white scale-110' : 'bg-black/40 text-white group-hover:bg-black/60'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-white' : ''}`} />
              </div>
              <span className="text-[10px] font-medium">{reel.views || '1.2K'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="flex flex-col items-center gap-1 group cursor-pointer"
              title="Copy share link"
              aria-label="Share reel"
            >
              <div className="p-2.5 rounded-full bg-black/40 text-white group-hover:bg-black/60 backdrop-blur-md transition-all">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
