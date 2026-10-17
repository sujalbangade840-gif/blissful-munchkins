import { TraditionalThemeItem } from '../types';

/**
 * Traditional & Festival Themes specifically requested by the client:
 * 1. Shiv
 * 2. Malhar
 * 3. Devi Ambabai
 * 4. Radha & Krishna
 * 5. Gudi Padwa
 * 6. Vitthal Varkari
 * 7. Ganpati
 * 8. Bail Pola
 * 9. Shri Ram
 * 10. Holi
 */
export const TRADITIONAL_THEMES: TraditionalThemeItem[] = [
  {
    id: 'ganpati',
    name: 'Ganpati',
    badge: 'Traditional Baby Theme',
    description: 'Auspicious Bappa blessing setup with miniature modak props, vibrant yellow marigolds, and traditional brass bells.',
    image: './images/traditional/ganpati-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    alt: 'Ganpati festival baby photography theme in Nagpur with festive marigolds and modaks',
    propsUsed: ['Miniature Modaks', 'Fresh Marigold Garland', 'Brass Diya', 'Silk Pitambar'],
  },
  {
    id: 'radha-krishna',
    name: 'Radha & Krishna',
    badge: 'Traditional Baby Theme',
    description: 'Enchanting Little Kanha & Radha setup with peacock feather crown, miniature flute (bansuri), and earthen butter pots.',
    image: './images/traditional/radha-krishna-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
    alt: 'Little Kanha and Radha Krishna traditional baby photoshoot in Nagpur',
    propsUsed: ['Peacock Feather Mukut', 'Wooden Bansuri', 'Makhan Handi', 'Golden Ornaments'],
  },
  {
    id: 'shiv',
    name: 'Shiv',
    badge: 'Traditional Baby Theme',
    description: 'Divine Mahadev theme featuring miniature damru, trishul, rudraksha mala, and sacred serene ash backdrop.',
    image: './images/traditional/shiv-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
    alt: 'Shiv divine baby photoshoot theme with damru and rudraksha in Nagpur',
    propsUsed: ['Baby Damru', 'Rudraksha Beads', 'Floral Bilva Garland', 'Serene Mountain Backdrop'],
  },
  {
    id: 'malhar',
    name: 'Malhar',
    badge: 'Traditional Baby Theme',
    description: 'Celebrated Khandoba / Malhar cultural setup with golden bhandara turmeric shades, khadga prop, and Maharashtrian heritage styling.',
    image: './images/traditional/malhar-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1599827552599-ea80572d42df?auto=format&fit=crop&w=800&q=80',
    alt: 'Khandoba Malhar traditional cultural baby theme shoot in Nagpur',
    propsUsed: ['Golden Turmeric / Bhandara', 'Traditional Topi', 'Ethnic Silk Shela', 'Heritage Brass Bell'],
  },
  {
    id: 'devi-ambabai',
    name: 'Devi Ambabai',
    badge: 'Traditional Baby Theme',
    description: 'Regal Kolhapuri Devi Ambabai blessing setup with traditional green bangles, fragrant mogra gajra, and royal red zari drape.',
    image: './images/traditional/ambabai-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    alt: 'Devi Ambabai traditional girl baby photography theme in Nagpur',
    propsUsed: ['Mogra Flower Gajra', 'Traditional Nauvari / Paithani Style', 'Kolhapuri Saaj Motif', 'Lotus Blossoms'],
  },
  {
    id: 'gudi-padwa',
    name: 'Gudi Padwa',
    badge: 'Traditional Baby Theme',
    description: 'Marathi New Year celebration featuring traditional miniature copper Kalash, neem twig, sugar crystals (gathi), and festive rangoli.',
    image: './images/traditional/gudi-padwa-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=800&q=80',
    alt: 'Gudi Padwa Marathi new year baby photography theme in Nagpur',
    propsUsed: ['Miniature Gudi with Copper Kalash', 'Sugar Gathi Garland', 'Fresh Mango Leaves', 'Festive Rangoli'],
  },
  {
    id: 'vitthal-varkari',
    name: 'Vitthal Varkari',
    badge: 'Traditional Baby Theme',
    description: 'Devotional Pandharpur Varkari baby theme with miniature veena, chipli cymbals, tulsi mala, and traditional Pheta headwear.',
    image: './images/traditional/vitthal-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
    alt: 'Vitthal Varkari traditional baby photoshoot theme in Nagpur with tulsi mala',
    propsUsed: ['Tulsi Mala', 'Miniature Ektara / Veena', 'Varkari Pheta', 'Chandan Tilak'],
  },
  {
    id: 'bail-pola',
    name: 'Bail Pola',
    badge: 'Traditional Baby Theme',
    description: 'Celebration of Vidarbha and Maharashtra rural heritage with beautifully adorned miniature bull models, festive bells, and rustic clay props.',
    image: './images/traditional/bail-pola-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
    alt: 'Bail Pola traditional Maharashtrian baby theme shoot in Nagpur',
    propsUsed: ['Decorated Toy Bulls', 'Ghugroo Bells', 'Toran Arch', 'Handwoven Farmhouse Matting'],
  },
  {
    id: 'shri-ram',
    name: 'Shri Ram',
    badge: 'Traditional Baby Theme',
    description: 'Noble Ayodhya Maryada Purushottam theme with miniature floral bow (dhanush), sacred saffron silks, and serene temple arch decor.',
    image: './images/traditional/shri-ram-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    alt: 'Shri Ram traditional baby photography theme in Nagpur with bow and saffron drape',
    propsUsed: ['Wooden Floral Bow & Quiver', 'Saffron Zari Drape', 'Golden Crown Motif', 'Fragrant Chandan'],
  },
  {
    id: 'holi',
    name: 'Holi',
    badge: 'Traditional Baby Theme',
    description: 'Safe organic herbal gulal colors celebration, dry flower petals, miniature pichkari, and pure vibrant joyous baby giggles.',
    image: './images/traditional/holi-theme.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
    alt: 'Holi organic colors baby photography theme in Nagpur',
    propsUsed: ['100% Skin-Safe Organic Gulal', 'Real Rose Petals', 'Toy Pichkari', 'Pure White Kurta'],
  },
];

export const TRADITIONAL_FILTER_TABS = [
  { id: 'all', label: 'All Themes' },
  { id: 'ganpati', label: 'Ganpati' },
  { id: 'radha-krishna', label: 'Radha & Krishna' },
  { id: 'shiv', label: 'Shiv' },
  { id: 'malhar', label: 'Malhar' },
  { id: 'devi-ambabai', label: 'Devi Ambabai' },
  { id: 'gudi-padwa', label: 'Gudi Padwa' },
  { id: 'vitthal-varkari', label: 'Vitthal Varkari' },
  { id: 'bail-pola', label: 'Bail Pola' },
  { id: 'shri-ram', label: 'Shri Ram' },
  { id: 'holi', label: 'Holi' },
];
