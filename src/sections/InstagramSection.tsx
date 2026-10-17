import React from 'react';
import { Instagram, Sparkles, ExternalLink } from 'lucide-react';
import { INSTAGRAM_PROFILES } from '../config/socialLinks';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white relative border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Instagram className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>CONNECT ON INSTAGRAM</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight">
            Follow Our Journey
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4A4A4A]">
            Daily glimpses of sleepy newborns, smiling babies, and behind-the-scenes transformations in Nagpur.
          </p>
        </div>

        {/* Two Configurable Instagram Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {INSTAGRAM_PROFILES.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 rounded-3xl bg-white hover:bg-[#FFFBFB] border border-pink-100/90 shadow-xs hover:soft-shadow transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFD166] via-[#FF7893] to-[#60A5FA] p-0.5 shrink-0 shadow-xs">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center text-[#FF7893] group-hover:scale-105 transition-transform">
                  <Instagram className="w-7 h-7 text-[#FF7893]" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FF7893] uppercase tracking-wider">
                    {profile.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#4A4A4A]/50 group-hover:text-[#FF7893] transition-colors" />
                </div>

                <h3 className="serif-text text-xl font-bold text-[#2D2D2D] mt-0.5 group-hover:text-[#FF7893] transition-colors">
                  {profile.handle}
                </h3>

                <p className="text-xs font-semibold text-[#2D2D2D] mt-1">
                  {profile.label}
                </p>

                <p className="text-xs text-[#4A4A4A] mt-1">
                  {profile.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
