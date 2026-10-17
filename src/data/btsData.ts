import { BTSItem } from '../types';

export interface BTSVideoItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoUrl: string;
  poster?: string;
  fallbackPoster?: string;
  isFeatured?: boolean;
  aspectRatio?: '9:16' | '16:9';
  category?: string;
  location?: string;
  photographer?: string;
  highlights?: string[];
}

export const BTS_DATA: BTSItem[] = [
  {
    id: 'bts-1',
    step: '01',
    title: 'Preparation & Sanitization',
    caption: 'Every basket, blanket, and wrap is thoroughly steam-sanitized before your baby enters the shoot area.',
    image: '',
    fallbackUrl: '',
    videoUrl: './videos/garden/IMG_0036.mp4',
  },
  {
    id: 'bts-2',
    step: '02',
    title: 'Warm Climate & Gentle Comfort',
    caption: 'Room temperature is maintained at a cozy 26°C with gentle soothing sounds to ensure deep comfort.',
    image: '',
    fallbackUrl: '',
    videoUrl: './videos/baby-reels/IMG_0945.mp4',
  },
  {
    id: 'bts-3',
    step: '03',
    title: 'Photographer at Work',
    caption: 'Ashwin works with gentle hands, always keeping an assistant spotter beside the baby for complete security.',
    image: '',
    fallbackUrl: '',
    videoUrl: './videos/baby-reels/IMG_4133.mp4',
  },
  {
    id: 'bts-4',
    step: '04',
    title: 'Feeding & Calming Breaks',
    caption: 'We never hurry. Plenty of pauses are scheduled for nursing, cuddles, and diaper changes whenever baby requests.',
    image: '',
    fallbackUrl: '',
    videoUrl: './videos/baby-reels/IMG_0956.mp4',
  },
  {
    id: 'bts-5',
    step: '05',
    title: 'Soft Eye-Safe Natural Lighting',
    caption: 'Feathered indirect light and shaded natural open-air setups without harsh flashes to protect delicate eyes.',
    image: '',
    fallbackUrl: '',
    videoUrl: './videos/garden/IMG_7935.mp4',
  },
  {
    id: 'bts-6',
    step: '06',
    title: 'Capturing Natural Innocence',
    caption: 'Documenting the genuine sleepy yawns, peaceful smiles, and authentic tiny details that you will treasure forever.',
    image: '',
    fallbackUrl: '',
    videoUrl: './videos/baby-reels/IMG_3013.mp4',
  },
];

export const BTS_VIDEOS: BTSVideoItem[] = [
  {
    id: 'bts-garden-01',
    title: 'Outdoor Garden Baby Shoot with Ashwin Bangade',
    duration: '0:33',
    description: 'Behind the scenes in a beautiful Nagpur park garden. Watch our boho macrame teepee setup, cozy green lawn, toy props, and joyful family moments captured by Ashwin.',
    videoUrl: './videos/garden/IMG_0036.mp4',
    isFeatured: true,
    aspectRatio: '9:16',
    category: 'Garden BTS Session',
    location: 'Nagpur Garden & Park',
    photographer: 'Ashwin Bangade',
    highlights: [
      'Bohemian macrame teepee tent on lush green lawn',
      'Blue ride-on car with red steering wheel & plush toys',
      'Parents & family singing and clapping to bring joyful giggles',
      'Handcrafted wooden tricycle cruising on paved park path',
      'Instant high-resolution camera previews reviewed with parents',
    ],
  },
  {
    id: 'bts-garden-02',
    title: 'Ride-On Toy Car & Playful Giggles',
    duration: '0:28',
    description: 'Fun and interactive outdoor moments as baby explores the vintage ride-on car with colorful toys and natural sunlight.',
    videoUrl: './videos/garden/IMG_7935.mp4',
    aspectRatio: '9:16',
    category: 'Garden Fun & Props',
    location: 'Nagpur Outdoor Location',
    photographer: 'Ashwin Bangade',
    highlights: [
      'Interactive ride-on car setup',
      'Natural daylight and candid smiles',
      'Unhurried play session',
    ],
  },
  {
    id: 'bts-garden-03',
    title: 'Handcrafted Wooden Trike Adventure',
    duration: '0:35',
    description: 'Cruising down the paved garden pathway with our custom wooden trike, capturing authentic baby curiosity and laughter.',
    videoUrl: './videos/garden/IMG_8308.mp4',
    aspectRatio: '9:16',
    category: 'Garden Milestone',
    location: 'Nagpur Outdoor Location',
    photographer: 'Ashwin Bangade',
    highlights: [
      'Wooden prop tricycle on garden path',
      'Family cheer & baby giggles',
      'Creative angles by Ashwin',
    ],
  },
  {
    id: 'bts-garden-04',
    title: 'Family Smiles & Live Camera Previews',
    duration: '0:42',
    description: 'Watch Ashwin Bangade reviewing fresh candid frames live on camera with happy parents surrounded by greenery.',
    videoUrl: './videos/garden/IMG_8498.mp4',
    aspectRatio: '9:16',
    category: 'Behind the Lens',
    location: 'Nagpur Garden Session',
    photographer: 'Ashwin Bangade',
    highlights: [
      'Instant parent image reviews',
      'Loving candid family hugs',
      'Warm golden hour lighting',
    ],
  },
];
