import React, { useState } from 'react';
import { Sparkles, Heart, Star, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import { Floating3DCard } from '../components/Floating3DCard';
import { SafeImage } from '../components/SafeImage';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onBookShoot: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onBookShoot,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-gradient-to-b from-[#FFFBFB] via-[#FFF8F9] to-[#FFFBFB]"
    >
      {/* Soft 3D Pastel Blobs & Atmosphere */}
      <div
        className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FF7893]/15 to-rose-100/30 blur-3xl -z-10 transition-transform duration-700 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-blue-100/40 via-pink-100/25 to-purple-50/30 blur-3xl -z-10 transition-transform duration-700 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
        }}
      />

      {/* Decorative floating micro-elements */}
      <div className="absolute top-32 right-1/3 hidden lg:block text-[#FF7893]/40 animate-pulse pointer-events-none">
        <Heart className="w-5 h-5 fill-[#FF7893]/20" />
      </div>
      <div className="absolute bottom-28 left-16 hidden lg:block text-blue-400/50 animate-bounce pointer-events-none">
        <Star className="w-4 h-4 fill-blue-200/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Text & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left z-10">
            {/* Small Label with Vibrant Blue & SEO positioning */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-5 shadow-xs backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>BEST BABY PHOTOGRAPHY IN NAGPUR</span>
            </div>

            {/* Large Heading */}
            <h1 className="serif-text text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#2D2D2D] leading-[1.12]">
              Little Moments.{' '}
              <span className="block mt-1 text-[#FF7893]">
                Big Memories.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-[#4A4A4A] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Beautifully capturing your baby's most precious moments.
            </p>

            <p className="mt-2 text-xs sm:text-sm font-semibold text-[#FF7893] flex items-center justify-center lg:justify-start gap-1.5">
              <span>By Ashwin Bangade • Best Baby Photography in Nagpur</span>
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onExplorePortfolio}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#2D2D2D] hover:bg-neutral-800 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                id="hero-view-portfolio-btn"
              >
                View Baby Portfolio
              </button>

              <button
                type="button"
                onClick={onBookShoot}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-[#FF7893] hover:bg-[#ff6584] soft-shadow hover:brightness-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                id="hero-book-now-cta"
              >
                <Heart className="w-4 h-4 fill-white/30" />
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Highlights under CTA */}
            <div className="mt-10 pt-6 border-t border-pink-100/70 grid grid-cols-3 gap-2 max-w-md mx-auto lg:mx-0 text-center">
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-bold serif-text text-[#2D2D2D]">11+</div>
                <div className="text-[11px] text-[#4A4A4A]/80 font-medium">Years Experience</div>
              </div>
              <div className="p-2 border-x border-pink-100">
                <div className="text-xl sm:text-2xl font-bold serif-text text-[#FF7893]">696+</div>
                <div className="text-[11px] text-[#4A4A4A]/80 font-medium">Baby Shoots</div>
              </div>
              <div className="p-2">
                <div className="text-xl sm:text-2xl font-bold serif-text text-[#2D2D2D]">100%</div>
                <div className="text-[11px] text-[#4A4A4A]/80 font-medium">Sanitized & Safe</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Baby Photography 3D Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient circular backdrop */}
            <div className="w-[320px] sm:w-[420px] md:w-[480px] aspect-square rounded-[44px] bg-gradient-to-tr from-pink-100/80 via-white to-blue-100/60 p-4 sm:p-6 shadow-2xl shadow-pink-100/60 ring-1 ring-white/80 relative">
              {/* Main Large Rounded Baby Image with photo-card 3D hover */}
              <Floating3DCard depth={12} className="w-full h-full photo-card">
                <div className="w-full h-full rounded-[36px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white relative group bg-white">
                  <SafeImage
                    localSrc="/images/newborn/newborn-hero.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85"
                    alt="Peaceful newborn baby gently sleeping in warm studio blanket"
                    priority={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle inner soft vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />

                  {/* Overlay photo label */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-md">
                    <p className="text-xs font-bold text-[#2D2D2D] serif-text">Ashwin Bangade Photography</p>
                    <p className="text-[11px] text-[#FF7893] font-semibold">Nagpur • Newborn & Baby Specialization</p>
                  </div>
                </div>
              </Floating3DCard>

              {/* Floating Badge 1: 11+ Years Experience */}
              <div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-20 transition-transform duration-500 floating"
                style={{
                  transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                }}
              >
                <div className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md soft-shadow border border-pink-100 text-[#2D2D2D] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-[#FF7893] flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2D2D2D] leading-none">11+ Years</div>
                    <div className="text-[10px] text-[#4A4A4A] mt-0.5">of Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: 696+ Baby Shoots */}
              <div
                className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-6 z-20 transition-transform duration-500 floating-delayed"
                style={{
                  transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)`,
                }}
              >
                <div className="px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md soft-shadow-blue border border-blue-100 text-[#2D2D2D] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center font-bold text-xs">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2D2D2D] leading-none">696+</div>
                    <div className="text-[10px] text-[#4A4A4A] mt-0.5">Baby Shoots</div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Card: Little Kanha Traditional Preview */}
              <div
                className="absolute -bottom-10 left-2 sm:-bottom-12 sm:left-4 z-20 hidden sm:block w-36 h-36 rounded-2xl p-1.5 bg-white/95 backdrop-blur-md soft-shadow border border-pink-100 ring-2 ring-white transition-transform duration-500"
                style={{
                  transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * 0.3}px) rotate(-6deg)`,
                }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <SafeImage
                    localSrc="/images/traditional/traditional-mini.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=400&q=80"
                    alt="Traditional baby photoshoot theme"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#E0F2FE]/90 backdrop-blur-xs p-1 text-[9px] font-bold text-blue-600 text-center">
                    Traditional Theme
                  </div>
                </div>
              </div>

              {/* Floating Mini Card: Milestone Preview */}
              <div
                className="absolute -top-6 right-2 sm:-top-8 sm:right-0 z-20 hidden sm:block w-32 h-32 rounded-2xl p-1.5 bg-white/95 backdrop-blur-md soft-shadow border border-pink-100 ring-2 ring-white transition-transform duration-500"
                style={{
                  transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * -0.2}px) rotate(6deg)`,
                }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <SafeImage
                    localSrc="/images/babies/baby-mini.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=400&q=80"
                    alt="Mother and newborn baby moment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[#FDF2F8]/90 backdrop-blur-xs p-1 text-[9px] font-bold text-[#FF7893] text-center">
                    Western Theme
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
