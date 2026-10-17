export type ThemeCategory = 'all' | 'western' | 'traditional';

export type TraditionalThemeId =
  | 'all'
  | 'shiv'
  | 'malhar'
  | 'devi-ambabai'
  | 'radha-krishna'
  | 'gudi-padwa'
  | 'vitthal-varkari'
  | 'ganpati'
  | 'bail-pola'
  | 'shri-ram'
  | 'holi';

export interface TraditionalThemeItem {
  id: TraditionalThemeId;
  name: string;
  badge: string;
  description: string;
  image: string;
  fallbackUrl: string;
  alt: string;
  propsUsed: string[];
}

export type PortfolioCategory =
  | 'all'
  | 'newborn'
  | 'baby'
  | 'maternity'
  | 'western'
  | 'traditional';

export type BabyShootCategory =
  | 'newborn'
  | 'baby-portraits'
  | 'milestone'
  | 'baby-parents'
  | 'creative-themes'
  | 'family-moments';

export type ReelCategory = 'all' | 'baby' | 'western' | 'traditional';

export interface PhotoItem {
  id: string;
  title: string;
  subtitle?: string;
  category: PortfolioCategory;
  babyCategory?: BabyShootCategory;
  theme?: 'western' | 'traditional';
  traditionalThemeId?: TraditionalThemeId;
  localPath: string;
  fallbackUrl: string;
  aspectRatio: 'square' | 'portrait' | 'tall' | 'wide';
  featured?: boolean;
  alt: string;
}

export interface PackageItem {
  id: string;
  duration: string;
  price: string;
  numericPrice: number;
  popular?: boolean;
  premium?: boolean;
  title: string;
  deliverables: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  image: string;
  fallbackUrl: string;
  highlights: string[];
}

export interface ReelItem {
  id: string;
  title: string;
  category: ReelCategory;
  views?: string;
  posterImage: string;
  fallbackPoster: string;
  videoUrl?: string;
  duration: string;
}

export interface BTSItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  fallbackUrl: string;
  step: string;
  videoUrl?: string;
}

export interface LocationItem {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  fallbackUrl: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  shootType: string;
  babyAge?: string;
  date: string;
  review: string;
  rating: number;
  verified: boolean;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  shootType: string;
  preferredDate: string;
  preferredDuration: string;
  theme: string;
  locationPreference: string;
  message: string;
}

export interface SocialLinksConfig {
  instagramPrimary: string;
  instagramSecondary: string;
  facebook: string;
  whatsapp: string;
  phoneDisplay: string;
  emailDisplay: string;
  addressDisplay: string;
}
