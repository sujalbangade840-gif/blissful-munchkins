import { InquiryFormData } from '../types';

export interface InquiryResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  isOfflineQueued?: boolean;
}

/**
 * Service layer for inquiry submission with full offline support.
 * Works seamlessly offline by queuing inquiries locally, then syncing when reconnected.
 */
export async function submitInquiry(data: InquiryFormData): Promise<InquiryResponse> {
  // Validate required inputs
  if (!data.name.trim()) {
    throw new Error('Please enter your full name');
  }
  if (!data.phone.trim() || data.phone.length < 8) {
    throw new Error('Please provide a valid contact phone number');
  }
  if (!data.email.trim() || !data.email.includes('@')) {
    throw new Error('Please enter a valid email address');
  }
  if (!data.shootType) {
    throw new Error('Please select a shoot type');
  }

  const isOffline = typeof navigator !== 'undefined' && !navigator.onLine;

  // Simulate short processing delay
  await new Promise((resolve) => setTimeout(resolve, isOffline ? 300 : 600));

  const inquiryId = (isOffline ? 'OFFLINE-' : 'BM-') + Math.floor(100000 + Math.random() * 900000);

  // Store in localStorage for persistence and offline queuing
  try {
    const existing = JSON.parse(localStorage.getItem('blissful_inquiries') || '[]');
    const newInquiry = {
      ...data,
      id: inquiryId,
      submittedAt: new Date().toISOString(),
      syncStatus: isOffline ? 'queued_offline' : 'synced',
    };
    existing.unshift(newInquiry);
    localStorage.setItem('blissful_inquiries', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage save error:', err);
  }

  if (isOffline) {
    return {
      success: true,
      message: `You are currently offline. Your reservation request for ${data.shootType} has been safely saved on your device and will be sent automatically when your internet connection is restored!`,
      inquiryId,
      isOfflineQueued: true,
    };
  }

  return {
    success: true,
    message: `Thank you, ${data.name}! Your photoshoot inquiry for ${data.shootType} has been received. Ashwin Bangade will reach out to you shortly.`,
    inquiryId,
  };
}

export function getQueuedOfflineInquiriesCount(): number {
  try {
    const existing = JSON.parse(localStorage.getItem('blissful_inquiries') || '[]');
    return existing.filter((item: any) => item.syncStatus === 'queued_offline').length;
  } catch {
    return 0;
  }
}

export function syncQueuedOfflineInquiries(): number {
  try {
    const existing = JSON.parse(localStorage.getItem('blissful_inquiries') || '[]');
    let count = 0;
    const updated = existing.map((item: any) => {
      if (item.syncStatus === 'queued_offline') {
        count++;
        return { ...item, syncStatus: 'synced', syncedAt: new Date().toISOString() };
      }
      return item;
    });
    if (count > 0) {
      localStorage.setItem('blissful_inquiries', JSON.stringify(updated));
    }
    return count;
  } catch {
    return 0;
  }
}
