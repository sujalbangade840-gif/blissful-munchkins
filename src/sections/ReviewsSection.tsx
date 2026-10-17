import React from 'react';
import { Star, Heart, CheckCircle2, Baby } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FFFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-[#FF7893] fill-[#FF7893]/30" />
            <span>PARENT STORIES</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed">
            Heartfelt words from Nagpur parents who entrusted their newborn and baby milestones to Ashwin Bangade.
          </p>
        </div>

        {/* Clean 4-Card Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-7 rounded-3xl bg-white border border-pink-100 shadow-xs hover:soft-shadow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Baby Age Badge */}
                {rev.babyAge && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold mb-4 border border-blue-100">
                    <Baby className="w-3.5 h-3.5" />
                    <span>Baby Age: {rev.babyAge}</span>
                  </div>
                )}

                {/* Heartfelt Comment */}
                <p className="text-xs sm:text-sm text-[#2D2D2D] italic leading-relaxed serif-text">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-pink-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="serif-text font-bold text-sm text-[#2D2D2D]">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-[#4A4A4A] mt-0.5">
                      {rev.shootType}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
