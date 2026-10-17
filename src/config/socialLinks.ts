import { SocialLinksConfig } from '../types';

/**
 * Social links and contact placeholders.
 * The photographer can easily update these placeholders with actual handles and details.
 */
export const SOCIAL_LINKS: SocialLinksConfig = {
  instagramPrimary: 'https://instagram.com/[ADD_INSTAGRAM_PROFILE_1]',
  instagramSecondary: 'https://instagram.com/[ADD_INSTAGRAM_PROFILE_2]',
  facebook: 'https://facebook.com/[ADD_FACEBOOK_LINK]',
  whatsapp: 'https://wa.me/[ADD_WHATSAPP_NUMBER]',
  phoneDisplay: '[ADD CONTACT NUMBER]',
  emailDisplay: '[ADD EMAIL]',
  addressDisplay: 'Nagpur, Maharashtra, India',
};

export const INSTAGRAM_PROFILES = [
  {
    id: 'primary',
    name: 'Instagram Profile 1',
    handle: '@[ADD_PRIMARY_INSTAGRAM]',
    url: SOCIAL_LINKS.instagramPrimary,
    label: 'Main Studio & Newborn Reels',
    description: 'Newborn portraits, baby milestones, behind the scenes clips',
  },
  {
    id: 'secondary',
    name: 'Instagram Profile 2',
    handle: '@[ADD_SECONDARY_INSTAGRAM]',
    url: SOCIAL_LINKS.instagramSecondary,
    label: 'Events & Family Stories',
    description: 'Weddings, baby showers, engagements & traditional functions',
  },
];
