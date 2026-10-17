import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, AlertCircle, Heart, Phone, Send, ArrowRight } from 'lucide-react';
import { InquiryFormData } from '../types';
import { submitInquiry } from '../services/inquiryService';

interface InquirySectionProps {
  initialDuration?: string;
  initialService?: string;
  onInquirySubmitted?: (name: string) => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  initialDuration = '2 HOURS',
  initialService = 'Baby',
  onInquirySubmitted,
}) => {
  // The client specifically requested 'Baby' as the main/default option
  const defaultShootType = initialService === 'Newborn' ? 'Newborn' : 'Baby';

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    shootType: defaultShootType,
    preferredDate: '',
    preferredDuration: initialDuration,
    theme: 'Western Theme',
    locationPreference: 'Studio in Nagpur',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Current inquiry options as specifically requested by the client:
   * 1. Baby (Primary highlighted default option)
   * 2. Newborn
   * 3. Maternity
   * 4. Event Photography
   */
  const shootTypeOptions = [
    { value: 'Baby', label: 'Baby (Most Popular)', isPrimary: true },
    { value: 'Newborn', label: 'Newborn (0–30 Days)', isPrimary: false },
    { value: 'Maternity', label: 'Maternity', isPrimary: false },
    { value: 'Event Photography', label: 'Event Photography (All Types)', isPrimary: false },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await submitInquiry(formData);
      setSuccessMessage(response.message);
      if (onInquirySubmitted) {
        onInquirySubmitted(formData.name);
      }
      // Reset form keeping Baby as the default
      setFormData({
        name: '',
        phone: '',
        email: '',
        shootType: 'Baby',
        preferredDate: '',
        preferredDuration: '2 Hours (₹8,000 - Popular)',
        theme: 'Western Theme',
        locationPreference: 'Studio in Nagpur',
        message: '',
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting your inquiry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-[#FF7893] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7893]" />
            <span>BOOK NOW WITH ASHWIN BANGADE</span>
          </div>

          <h2 className="serif-text text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] tracking-tight">
            Book Your Baby Photoshoot
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-normal max-w-xl mx-auto">
            Reserve your baby’s special milestone session with the Best Baby Photography in Nagpur. We prioritize safety, gentle pacing, and timeless artistic memories.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-pink-100/90 shadow-xl shadow-pink-500/5">
          {/* Status Notifications */}
          {successMessage && (
            <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-300">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">Inquiry Received!</h4>
                <p className="text-xs sm:text-sm mt-1 leading-relaxed">{successMessage}</p>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="mb-8 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 animate-in fade-in duration-300">
              <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">Please check your entries:</h4>
                <p className="text-xs sm:text-sm mt-1 leading-relaxed">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Field 1: Name */}
            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-2">
                Parent's Full Name *
              </label>
              <input
                id="inquiry-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sneha & Rohan Deshmukh"
                className="w-full bg-[#FFFBFB] px-4 py-3.5 rounded-2xl border border-pink-100 focus:outline-none focus:border-[#FF7893] focus:ring-2 focus:ring-pink-100 text-sm text-[#2D2D2D] transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Field 2: Phone */}
            <div>
              <label htmlFor="inquiry-phone" className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-2">
                Phone Number (WhatsApp) *
              </label>
              <div className="relative">
                <input
                  id="inquiry-phone"
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 8237554999"
                  className="w-full bg-[#FFFBFB] px-4 py-3.5 rounded-2xl border border-pink-100 focus:outline-none focus:border-[#FF7893] focus:ring-2 focus:ring-pink-100 text-sm text-[#2D2D2D] transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Field 3: Shoot Type (Client emphasized: 'Baby' is main option) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="inquiry-shoot-type" className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider">
                  Shoot Type *
                </label>
                <span className="text-[11px] font-semibold text-[#FF7893] bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                  Primary: Baby
                </span>
              </div>
              <select
                id="inquiry-shoot-type"
                name="shootType"
                value={formData.shootType}
                onChange={handleChange}
                className="w-full bg-[#FFFBFB] px-4 py-3.5 rounded-2xl border border-pink-100 focus:outline-none focus:border-[#FF7893] focus:ring-2 focus:ring-pink-100 text-sm font-medium text-[#2D2D2D] transition-all cursor-pointer"
              >
                {shootTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 4: Preferred Date */}
            <div>
              <label htmlFor="inquiry-date" className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-2">
                Preferred Date / Baby Due Date
              </label>
              <input
                id="inquiry-date"
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full bg-[#FFFBFB] px-4 py-3.5 rounded-2xl border border-pink-100 focus:outline-none focus:border-[#FF7893] focus:ring-2 focus:ring-pink-100 text-sm text-[#2D2D2D] transition-all"
              />
            </div>

            {/* Field 5: Message */}
            <div>
              <label htmlFor="inquiry-message" className="block text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-2">
                Message & Special Requests
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell Ashwin about your baby's age, preferred theme (Traditional Ganpati/Shiv/Radha Krishna or Western pastel), or any special requests..."
                className="w-full bg-[#FFFBFB] px-4 py-3.5 rounded-2xl border border-pink-100 focus:outline-none focus:border-[#FF7893] focus:ring-2 focus:ring-pink-100 text-sm text-[#2D2D2D] transition-all placeholder:text-slate-400"
              />
            </div>

            {/* CTA Button: "Book Now" */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={loading}
                id="inquiry-book-now-btn"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#FF7893] hover:bg-[#ff6584] text-white font-bold text-sm tracking-wide soft-shadow transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-50 active:scale-95 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Processing Reservation...</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 fill-white/30" />
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-[#4A4A4A]/70 mt-3">
                Ashwin Bangade will connect with you via WhatsApp/call within 24 hours to confirm schedule and safety guidelines.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
