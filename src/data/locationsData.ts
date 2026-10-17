import { LocationItem } from '../types';

export const PARTNER_LOCATIONS: LocationItem[] = [
  {
    id: 'loc-01',
    title: 'Scenic Partner Farmhouse [Location 1]',
    type: 'Farmhouse / Rustic Lawn',
    description: 'A sprawling greenery retreat outside Nagpur with natural wooden gazebos, rustic swings, and sunset orchards.',
    image: './images/locations/farmhouse-01.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    features: ['Natural Golden Hour Light', 'Private Changing Rooms', 'Expansive Green Lawns'],
  },
  {
    id: 'loc-02',
    title: 'Lakeside Meadow Venue [Location 2]',
    type: 'Outdoor Waterside',
    description: 'Serene water reflections and wildflower paths ideal for ethereal maternity and romantic couple photography.',
    image: './images/locations/farmhouse-02.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    features: ['Calm Water Backdrop', 'Open Sky Vistas', 'Shaded Tree Groves'],
  },
  {
    id: 'loc-03',
    title: 'Heritage Courtyard Studio [Location 3]',
    type: 'Traditional Courtyard',
    description: 'Arched brickwork, traditional clay pottery, and ornate wooden doors perfect for Indian festive & Kanha baby themes.',
    image: './images/locations/farmhouse-03.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    features: ['Ethnic Architectural Props', 'Protected Weather Canopy', 'Traditional Ambient Mood'],
  },
];
