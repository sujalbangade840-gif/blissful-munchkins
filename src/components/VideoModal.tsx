import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ShieldCheck, Clock, MapPin, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
  description?: string;
  poster?: string;
  aspectRatio?: '9:16' | '16:9';
  location?: string;
  photographer?: string;
  highlights?: string[];
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
  poster,
  aspectRatio = '16:9',
  location,
  photographer = 'Ashwin Bangade',
  highlights,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIsPlaying(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen) return null;

  const isVertical = aspectRatio === '9:16';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isVertical ? 'max-w-4xl' : 'max-w-3xl'
        } bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-h-[94vh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-slate-900/95 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7893] animate-pulse" />
            <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1">{title}</h3>
            {isVertical && (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-pink-500/20 text-pink-300 text-[11px] font-semibold">
                Vertical 9:16 Reel
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body: Split layout for vertical videos or stacked for landscape */}
        <div className={`overflow-y-auto flex-1 ${isVertical ? 'grid grid-cols-1 md:grid-cols-12' : ''}`}>
          {/* Video Container */}
          <div
            className={`relative bg-black flex items-center justify-center ${
              isVertical
                ? 'md:col-span-7 aspect-[9/16] max-h-[68vh] md:max-h-[75vh] mx-auto w-full'
                : 'aspect-video w-full'
            }`}
          >
            <video
              ref={videoRef}
              src={videoUrl}
              poster={poster}
              controls={false}
              autoPlay
              playsInline
              preload="metadata"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-contain cursor-pointer"
            >
              Your browser does not support HTML video.
            </video>

            {/* Custom Minimalist Overlay Controls */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 flex flex-col gap-2">
              {/* Progress Line */}
              <div
                className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  if (!videoRef.current || !duration) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  videoRef.current.currentTime = pos * duration;
                }}
              >
                <div
                  className="h-full bg-[#FF7893] transition-all"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>

              {/* Bottom control buttons */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1 hover:text-[#FF7893] transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1 hover:text-[#FF7893] transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-[11px] text-white/80 font-mono">
                    {formatTime(currentTime)} / {formatTime(duration || 33)}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-pink-300 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF7893]" />
                  <span>Safe Handling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Metadata / Highlights Panel */}
          <div
            className={`p-5 bg-slate-900/95 flex flex-col justify-between ${
              isVertical ? 'md:col-span-5 border-t md:border-t-0 md:border-l border-white/10' : 'border-t border-white/10'
            }`}
          >
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-pink-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{photographer} • Nagpur</span>
                </div>
                <h4 className="text-white font-bold text-base sm:text-lg">{title}</h4>
                {location && (
                  <p className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                    <MapPin className="w-3 h-3 text-pink-400" />
                    <span>{location}</span>
                  </p>
                )}
              </div>

              {description && (
                <p className="text-xs text-slate-300 leading-relaxed">
                  {description}
                </p>
              )}

              {/* Highlights bullets if available */}
              {highlights && highlights.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <p className="text-[11px] font-bold text-pink-300 uppercase tracking-wider">
                    Shoot Highlights Caught on Camera:
                  </p>
                  <ul className="space-y-1.5">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7893] shrink-0 mt-0.5" />
                        <span className="leading-tight">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-4 border-t border-white/10 space-y-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>

              <p className="text-center text-[10px] text-slate-400">
                11+ Years Experience • 696+ Baby Shoots in Nagpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
