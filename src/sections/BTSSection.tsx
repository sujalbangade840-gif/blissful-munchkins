import React, { useState, useRef, useEffect } from 'react';
import { Shield, Sparkles, Play, Clock, CheckCircle2, Video, MapPin, Camera } from 'lucide-react';
import { BTS_DATA, BTS_VIDEOS, BTSVideoItem } from '../data/btsData';
import { VideoModal } from '../components/VideoModal';

interface VideoThumbnailProps {
  videoUrl: string;
  title: string;
  className?: string;
  isHoverable?: boolean;
}

const BTSVideoThumbnail: React.FC<VideoThumbnailProps> = ({
  videoUrl,
  title,
  className = '',
  isHoverable = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      // Seek to 0.8s to avoid any initial black frame and grab an active video scene
      if (video.duration && video.duration > 0.8) {
        video.currentTime = 0.8;
      }
      setIsLoaded(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoUrl]);

  const handleMouseEnter = () => {
    if (!isHoverable || !videoRef.current) return;
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!isHoverable || !videoRef.current) return;
    videoRef.current.pause();
    if (videoRef.current.duration && videoRef.current.duration > 0.8) {
      videoRef.current.currentTime = 0.8;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full overflow-hidden bg-slate-950 ${className}`}
    >
      <video
        ref={videoRef}
        src={`${videoUrl}#t=0.8`}
        title={title}
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-rose-50/50 to-sky-50 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};

export const BTSSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<BTSVideoItem | null>(null);

  const featuredVideo = BTS_VIDEOS.find((v) => v.isFeatured) || BTS_VIDEOS[0];
  const galleryVideos = BTS_VIDEOS.filter((v) => v.id !== featuredVideo.id);

  return (
    <section id="bts-safety" className="py-20 lg:py-28 bg-[#FFFBFB] relative overflow-hidden">
      <span id="bts" className="sr-only">Between the Shoot</span>
      {/* Background Decorative Soft Lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Shield className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>BEHIND THE SCENES & CARE</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Between the Shoot
          </h2>

          <h3 className="serif-text text-xl sm:text-2xl font-semibold text-[#FF7893] mt-2">
            How We Care for Your Baby's Safety
          </h3>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Your baby's comfort and safety always come first. Every shoot is carefully planned and managed so we can create beautiful memories while keeping your little one comfortable throughout the session.
          </p>
        </div>

        {/* 6 Process & Safety Cards with Real Footage Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BTS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-pink-100/80 soft-shadow transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                {item.videoUrl ? (
                  <BTSVideoThumbnail
                    videoUrl={item.videoUrl}
                    title={item.title}
                    isHoverable={true}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                    Authentic Footage
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-2xl bg-white/95 backdrop-blur-sm shadow-sm flex items-center justify-center text-xs font-bold text-[#FF7893] z-10 pointer-events-none">
                  {item.step}
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] text-white/90 font-medium z-10 pointer-events-none">
                  Hover to Preview
                </div>
              </div>

              <div className="p-6">
                <h4 className="serif-text text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-[#FF7893] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Area: See How We Capture Your Baby's Memorable Moments */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-pink-100/90 shadow-xl shadow-pink-500/5">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>BTS VIDEO GALLERY</span>
            </div>

            <h3 className="serif-text text-2xl sm:text-3xl font-bold text-[#2D2D2D] tracking-tight">
              See How We Capture Your Baby's Memorable Moments
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#4A4A4A]">
              Take a look behind the scenes and see how Ashwin Bangade plans, prepares, and captures your baby's special moments in Nagpur.
            </p>
          </div>

          {/* Featured Video Spotlight: Real Outdoor Garden Shoot Footage */}
          {featuredVideo && (
            <div className="mb-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-white to-[#F0F7FF] border border-pink-200/90 p-6 sm:p-8 lg:p-10 shadow-lg shadow-pink-500/5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Video Preview Card with Live Video Thumbnail */}
                <div
                  onClick={() => setActiveVideo(featuredVideo)}
                  className="lg:col-span-5 relative group cursor-pointer rounded-2xl overflow-hidden bg-slate-900 aspect-[9/16] max-h-[460px] mx-auto shadow-xl border border-pink-200/60"
                >
                  <BTSVideoThumbnail
                    videoUrl={featuredVideo.videoUrl}
                    title={featuredVideo.title}
                    isHoverable={true}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-[#FF7893] text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform duration-300">
                      <Play className="w-7 h-7 ml-1 fill-white" />
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#FF7893] text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FEATURED REEL</span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5 pointer-events-none">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredVideo.duration}</span>
                  </div>

                  {/* Bottom overlay text */}
                  <div className="absolute bottom-4 left-4 right-20 text-left pointer-events-none">
                    <p className="text-white text-xs font-bold line-clamp-1">Ashwin Bangade in Action</p>
                    <p className="text-pink-200 text-[11px]">Outdoor Garden Shoot • Nagpur</p>
                  </div>
                </div>

                {/* Featured Video Narrative & Highlights */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5 text-left">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#FF7893] text-xs font-bold uppercase tracking-wider mb-3">
                      <Camera className="w-3.5 h-3.5" />
                      <span>{featuredVideo.category || 'Outdoor Baby Session'}</span>
                    </div>

                    <h4 className="serif-text text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-tight">
                      {featuredVideo.title}
                    </h4>

                    <p className="mt-1 text-xs sm:text-sm font-semibold text-[#FF7893] flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{featuredVideo.location || 'Nagpur, Maharashtra'}</span>
                      <span className="text-slate-300">•</span>
                      <span>By Ashwin Bangade</span>
                    </p>

                    <p className="mt-3 text-sm text-[#4A4A4A] leading-relaxed">
                      {featuredVideo.description}
                    </p>
                  </div>

                  {/* Key Shoot Moments Breakdown */}
                  {featuredVideo.highlights && (
                    <div className="bg-white/80 rounded-2xl p-4 sm:p-5 border border-pink-100 space-y-2.5">
                      <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#FF7893]" />
                        <span>Key Moments Captured in This Video:</span>
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A4A4A]">
                        {featuredVideo.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7893] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(featuredVideo)}
                      className="px-6 py-3 rounded-full bg-[#FF7893] hover:bg-[#E05D78] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-pink-500/20 transition-all cursor-pointer hover:scale-102"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Watch Full BTS Reel ({featuredVideo.duration})</span>
                    </button>

                    <a
                      href="#inquiry"
                      className="px-5 py-3 rounded-full bg-white hover:bg-pink-50 text-[#2D2D2D] border border-pink-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Book a Shoot Like This
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Additional BTS Video Cards with Real Video Thumbnails */}
          <div className="mt-8 pt-8 border-t border-pink-100">
            <div className="flex items-center justify-between mb-6">
              <h4 className="serif-text text-lg sm:text-xl font-bold text-[#2D2D2D]">
                More Behind-The-Scenes Sessions
              </h4>
              <span className="text-xs text-slate-500 font-medium">Click any card to play full video</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FFFBFB] border border-pink-100/80 hover:border-pink-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <BTSVideoThumbnail
                      videoUrl={video.videoUrl}
                      title={video.title}
                      isHoverable={true}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors pointer-events-none" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-[#FF7893] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 pointer-events-none">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="serif-text text-base font-bold text-[#2D2D2D] group-hover:text-[#FF7893] transition-colors line-clamp-1">
                      {video.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-[#4A4A4A] leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#FF7893]">
                      <span>Watch BTS Video</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.videoUrl}
          title={activeVideo.title}
          description={activeVideo.description}
          aspectRatio={activeVideo.aspectRatio}
          location={activeVideo.location}
          photographer={activeVideo.photographer}
          highlights={activeVideo.highlights}
        />
      )}
    </section>
  );
};
