import { PackageItem } from '../types';

/**
 * Newborn baby photography packages exactly as supplied by the client:
 * 1 Hour: ₹6,000
 * 2 Hours: ₹8,000 (Popular)
 * 3 Hours: ₹10,000
 * Output: 1 Reel, 15–20 Edited Photos.
 */
export const NEWBORN_PACKAGES: PackageItem[] = [
  {
    id: 'pkg-1-hr',
    duration: '1 HOUR',
    price: '₹6,000',
    numericPrice: 6000,
    title: 'Newborn Baby Shoot',
    description: 'A focused, gentle session capturing precious first newborn moments.',
    deliverables: [
      '1 Reel',
      '15–20 Edited Photos',
    ],
  },
  {
    id: 'pkg-2-hr',
    duration: '2 HOURS',
    price: '₹8,000',
    numericPrice: 8000,
    popular: true,
    title: 'Newborn Baby Shoot',
    description: 'Our most popular session allowing ample time for feedings, soothing, and beautiful poses.',
    deliverables: [
      '1 Reel',
      '15–20 Edited Photos',
    ],
  },
  {
    id: 'pkg-3-hr',
    duration: '3 HOURS',
    price: '₹10,000',
    numericPrice: 10000,
    premium: true,
    title: 'Newborn Baby Shoot',
    description: 'An unhurried comprehensive session for multiple creative themes and calm family moments.',
    deliverables: [
      '1 Reel',
      '15–20 Edited Photos',
    ],
  },
];
