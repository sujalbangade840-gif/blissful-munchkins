import React from 'react';
import { Award, Camera, Heart, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: '11+',
      label: 'Years Experience',
      desc: 'Dedicated journey preserving life’s most tender milestones.',
      icon: Award,
      accent: 'text-amber-500 bg-amber-50 border-amber-100',
    },
    {
      value: '696+',
      label: 'Baby Shoots',
      desc: 'Pioneering gentle newborn & baby photography across Nagpur.',
      icon: Camera,
      accent: 'text-pink-600 bg-pink-50 border-pink-100',
    },
    {
      value: '1000+',
      label: 'Precious Memories',
      desc: 'Countless preserved heirloom frames cherished by families.',
      icon: Heart,
      accent: 'text-rose-500 bg-rose-50 border-rose-100',
    },
    {
      value: 'Multiple',
      label: 'Photography Experiences',
      desc: 'Studio, outdoor farmhouses, traditional rituals & celebrations.',
      icon: Sparkles,
      accent: 'text-sky-600 bg-sky-50 border-sky-100',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white/70 relative overflow-hidden border-y border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#FF7893] uppercase tracking-widest block mb-2">
            TRUSTED BY PARENTS IN NAGPUR
          </span>
          <h2 className="serif-text text-3xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight">
            A Legacy of Gentle Care & Craft
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4A4A4A]">
            Every session is conducted with rigorous sanitation, gentle soothing routines, and artistic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative p-6 rounded-3xl bg-[#FFFBFB] hover:bg-white border border-pink-100/70 shadow-xs hover:shadow-xl hover:soft-shadow transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-4 transition-transform group-hover:scale-110 ${stat.accent}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="serif-text text-3xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-[#2D2D2D] mt-1">{stat.label}</div>

                <p className="text-xs text-[#4A4A4A] mt-2 leading-relaxed">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
