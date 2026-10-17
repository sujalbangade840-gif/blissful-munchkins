export interface SocialConfig {
  phone: string;
  email: string;
  whatsappMessage: string;
  whatsappUrl: string;
  instagramPrimary: string;
  instagramPrimaryUrl: string;
  instagramPhotographer: string;
  instagramPhotographerUrl: string;
  facebook: string;
  facebookUrl: string;
}

export interface SiteConfig {
  brandName: string;
  photographerName: string;
  experienceYears: string;
  totalBabyShoots: string;
  babyShootsCount: string;
  city: string;
  state: string;
  country: string;
  location: string;
  locationDisplay: string;
  primarySeoPhrase: string;
  tagline: string;
  heroSubheading: string;
  phone: string;
  email: string;
  whatsappMessage: string;
  whatsappUrl: string;
  instagramPrimary: string;
  instagramPrimaryUrl: string;
  instagramSecondary: string;
  instagramSecondaryUrl: string;
  instagramPhotographer: string;
  instagramPhotographerUrl: string;
  facebook: string;
  facebookUrl: string;
  socials: SocialConfig;
}

const PHONE_NUMBER = '+91 8237554999';
const WHATSAPP_PHONE = '918237554999';
const WHATSAPP_MSG = 'Hi Ashwin, I would like to inquire about a baby photoshoot with Blissful Munchkins in Nagpur!';

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Blissful Munchkins',
  photographerName: 'Ashwin Bangade',
  experienceYears: '11 Years',
  totalBabyShoots: '696+ Baby Shoots',
  babyShootsCount: '696+ Baby Shoots',
  city: 'Nagpur',
  state: 'Maharashtra',
  country: 'India',
  location: 'Nagpur, Maharashtra, India',
  locationDisplay: 'Nagpur, Maharashtra, India',
  primarySeoPhrase: 'Best Baby Photography in Nagpur',
  tagline: 'Little Moments. Big Memories.',
  heroSubheading: "Beautifully capturing your baby's most precious moments.",
  phone: PHONE_NUMBER,
  email: 'ashwinbangade@blissfulmunchkins.com',
  whatsappMessage: WHATSAPP_MSG,
  whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
  instagramPrimary: '@blissful_munchkins',
  instagramPrimaryUrl: 'https://instagram.com/blissful_munchkins',
  instagramSecondary: '@ashwin_bangade_photography',
  instagramSecondaryUrl: 'https://instagram.com/ashwin_bangade_photography',
  instagramPhotographer: '@ashwin_bangade_photography',
  instagramPhotographerUrl: 'https://instagram.com/ashwin_bangade_photography',
  facebook: 'Blissful Munchkins',
  facebookUrl: 'https://facebook.com/blissfulmunchkins',
  socials: {
    phone: PHONE_NUMBER,
    email: 'ashwinbangade@blissfulmunchkins.com',
    whatsappMessage: WHATSAPP_MSG,
    whatsappUrl: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
    instagramPrimary: '@blissful_munchkins',
    instagramPrimaryUrl: 'https://instagram.com/blissful_munchkins',
    instagramPhotographer: '@ashwin_bangade_photography',
    instagramPhotographerUrl: 'https://instagram.com/ashwin_bangade_photography',
    facebook: 'Blissful Munchkins',
    facebookUrl: 'https://facebook.com/blissfulmunchkins',
  },
};
