import { ReviewItem } from '../types';

/**
 * Placeholder reviews for baby photography in Nagpur as specified in requirement 17:
 * Features:
 * - Parent name
 * - Baby age during shoot
 * - Rating stars
 * - Heartfelt comment
 * - Clean card layout
 */
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-01',
    name: 'Pooja & Rohan Deshmukh',
    shootType: 'Newborn Baby Shoot',
    babyAge: '14 Days Old',
    date: 'Nagpur',
    rating: 5,
    verified: true,
    review:
      'Ashwin showed unbelievable patience with our 14-day-old daughter. The studio was warm, hygienic, and he never rushed through feeding breaks. The reel and photos captured her tiny innocence so purely.',
  },
  {
    id: 'rev-02',
    name: 'Sneha & Amit Kulkarni',
    shootType: 'Traditional Festival Theme (Ganpati & Kanha)',
    babyAge: '3 Months Old',
    date: 'Dharampeth, Nagpur',
    rating: 5,
    verified: true,
    review:
      'The traditional Ganpati and Kanha setups exceeded our expectations! Every marigold garland, peacock feather, and baby crown was arranged with perfection. Our entire family was moved to tears seeing the final gallery.',
  },
  {
    id: 'rev-03',
    name: 'Dr. Neha & Rajesh Sharma',
    shootType: 'Maternity & Newborn Session',
    babyAge: '21 Days Old',
    date: 'Ramdaspeth, Nagpur',
    rating: 5,
    verified: true,
    review:
      'From our outdoor maternity session to our newborn studio photos, Ashwin’s eye for lighting and genuine human emotion is extraordinary. Blissful Munchkins is truly the best baby photography in Nagpur.',
  },
  {
    id: 'rev-04',
    name: 'Vikram & Ananya Joshi',
    shootType: 'Western Milestone Sitter Session',
    babyAge: '6 Months Old',
    date: 'Civil Lines, Nagpur',
    rating: 5,
    verified: true,
    review:
      'Our son was cranky when we arrived, but Ashwin’s calm demeanor and fun sounds turned it into pure giggles! The photos look straight out of a high-end fairytale magazine.',
  },
];
