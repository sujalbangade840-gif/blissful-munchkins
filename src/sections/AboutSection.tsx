import React from 'react';
import { Camera, MapPin, Heart, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';

interface AboutSectionProps {
  onKnowMore: () => void;
  onBookShoot: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onKnowMore, onBookShoot }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photographer Imagery Side */}
          <div className="lg:col-span-5 relative">
            {/* Organic backdrop shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100 via-rose-50 to-blue-100 rounded-[40px] transform -rotate-2 -z-10" />

            <div className="relative rounded-[36px] overflow-hidden soft-shadow border-4 border-white bg-slate-100 aspect-[4/5]">
              <SafeImage
                localSrc="/images/about/ashwin-bangade.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"
                alt="Ashwin Bangade, best baby photographer in Nagpur"
                className="w-full h-full object-cover"
              />

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-100 shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#FF7893] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="serif-text font-bold text-sm text-[#2D2D2D]">Nagpur, Maharashtra, India</h4>
                  <p className="text-[11px] text-[#4A4A4A]">Sanitized baby studio & outdoor shoots</p>
                </div>
              </div>
            </div>

            {/* Floating Experience Chip */}
            <div className="absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-2xl soft-shadow border border-pink-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF7893]" />
              <div className="text-xs font-bold text-[#2D2D2D]">
                11 Years Experience
              </div>
            </div>
          </div>

          {/* Bio & Philosophy Side */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
              <Camera className="w-3.5 h-3.5 text-[#FF7893]" />
              <span>THE PHOTOGRAPHER BEHIND BLISSFUL MUNCHKINS</span>
            </div>

            <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
              Meet Ashwin Bangade
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#2D2D2D] leading-relaxed font-normal">
              Ashwin Bangade is a dedicated baby and newborn photographer based in Nagpur, passionate about capturing genuine emotions, gentle smiles, and meaningful family milestones.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              With 11 years of hands-on experience and over 696+ baby shoots completed, Ashwin is known for his calm, patient approach with little ones. Every photoshoot is unhurried, creating a warm, comfortable space for both baby and parents.
            </p>

            {/* Philosophy Quote */}
            <div className="mt-6 p-6 rounded-2xl bg-pink-50/50 border-l-4 border-[#FF7893] shadow-xs">
              <p className="serif-text italic text-lg sm:text-xl text-[#2D2D2D]">
                “Little Moments. Big Memories. Every tiny detail deserves to be cherished forever.”
              </p>
              <p className="text-xs font-bold text-[#FF7893] mt-2">
                — Ashwin Bangade, Founder & Lead Photographer
              </p>
            </div>

            {/* Key Facts / Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A4A4A]">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-pink-100 text-[#FF7893] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>696+ Baby Shoots completed</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-pink-100 text-[#FF7893] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>11 Years photography experience</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-pink-100 text-[#FF7893] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Nagpur based with full studio setup</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-pink-100 text-[#FF7893] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Western & Traditional festival themes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookShoot}
                className="px-7 py-3.5 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white text-xs sm:text-sm font-bold soft-shadow hover:brightness-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white/30" />
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onKnowMore}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-pink-50 text-[#2D2D2D] hover:text-[#FF7893] text-xs sm:text-sm font-semibold border border-pink-200 transition-all cursor-pointer"
              >
                See Between the Shoot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
