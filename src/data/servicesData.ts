import { ServiceItem } from '../types';

/**
 * Core services data architecture for Blissful Munchkins.
 * Currently configured for the 4 primary services requested by the client:
 * 1. Newborn Shoots
 * 2. Baby Shoots
 * 3. Maternity Shoots
 * 4. All Types of Event Photography
 *
 * Future services (e.g., Baby Shower, Milestone Sessions) can be added directly to this array
 * without needing any UI redesign.
 */
export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'newborn-shoots',
    title: 'Newborn Shoots',
    tagline: 'Capturing First Innocence',
    description: 'Beautifully capturing the first precious moments of your little one.',
    image: './images/newborn/newborn-service.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Gently posed & safe wraps',
      'Warm sanitized studio environment',
      'Peaceful sleepy portraits',
    ],
  },
  {
    id: 'baby-shoots',
    title: 'Baby Shoots',
    tagline: 'Milestones & Smiles',
    description: 'Turning smiles, tiny moments and milestones into lasting memories.',
    image: './images/babies/baby-service.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '3 to 12 months milestone sessions',
      'Playful expressions & sitting poses',
      'Custom theme setups & props',
    ],
  },
  {
    id: 'maternity-shoots',
    title: 'Maternity Shoots',
    tagline: 'Grace & Motherhood',
    description: 'Celebrating the beautiful journey before your little one arrives.',
    image: './images/maternity/maternity-service.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Artistic couple & solo portraits',
      'Studio or scenic farmhouse glow',
      'Gown styling & gentle posing',
    ],
  },
  {
    id: 'all-events',
    title: 'All Types of Event Photography',
    tagline: 'Celebrations & Stories',
    description: 'Photography for your important celebrations and special moments.',
    image: './images/events/all-events-service.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Family celebrations & birthdays',
      'Baby showers & naming ceremonies',
      'Important milestone festivities',
    ],
  },
];

// Alias for backward compatibility if any component references it
export const SECONDARY_SERVICES = CORE_SERVICES;
