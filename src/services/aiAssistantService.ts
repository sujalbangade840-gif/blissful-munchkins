export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    actionType:
      | 'scroll_to_packages'
      | 'scroll_to_inquiry'
      | 'scroll_to_portfolio'
      | 'scroll_to_themes'
      | 'scroll_to_traditional'
      | 'scroll_to_bts'
      | 'scroll_to_reels';
  };
}

export const SUGGESTED_PROMPTS = [
  'What are your newborn packages?',
  'Tell me about baby safety during shoots',
  'Which Traditional & Festival themes do you offer?',
  'Do you provide outdoor farmhouse locations?',
  'How do I book a shoot with Ashwin?',
  'What is included in the 2-hour popular package?',
];

/**
 * Service layer for Ask Blissful AI assistant.
 * Accurately answers questions about baby shoots, packages & pricing, durations,
 * themes, booking, location options, reels, and the "Between the Shoot" process.
 */
export async function queryBlissfulAI(userQuery: string): Promise<{
  reply: string;
  suggestedAction?: ChatMessage['suggestedAction'];
}> {
  await new Promise((resolve) => setTimeout(resolve, 450));

  const query = userQuery.toLowerCase().trim();

  // Baby Safety & Between the Shoot process
  if (
    query.includes('safety') ||
    query.includes('between the shoot') ||
    query.includes('bts') ||
    query.includes('care') ||
    query.includes('clean') ||
    query.includes('sanitize') ||
    query.includes('temperature') ||
    query.includes('comfort')
  ) {
    return {
      reply:
        "Your baby's comfort and safety always come first at Blissful Munchkins. Every session is carefully planned and managed: our studio temperature is kept at a cozy 26°C, all blankets and wraps are steam-sanitized before each session, eye-safe feathered lighting is used, and Ashwin always keeps a spotter beside the baby. We pause whenever your baby needs feeding or cuddling.",
      suggestedAction: {
        label: 'See Between the Shoot',
        actionType: 'scroll_to_bts',
      },
    };
  }

  // Traditional & Festival Themes
  if (
    query.includes('traditional') ||
    query.includes('festival') ||
    query.includes('ganpati') ||
    query.includes('krishna') ||
    query.includes('radha') ||
    query.includes('shiv') ||
    query.includes('malhar') ||
    query.includes('ambabai') ||
    query.includes('gudi padwa') ||
    query.includes('vitthal') ||
    query.includes('varkari') ||
    query.includes('bail pola') ||
    query.includes('shri ram') ||
    query.includes('ram') ||
    query.includes('holi')
  ) {
    return {
      reply:
        'Ashwin creates 10 distinct Traditional & Festival baby setups in Nagpur:\n• Ganpati\n• Radha & Krishna\n• Shiv\n• Malhar\n• Devi Ambabai\n• Gudi Padwa\n• Vitthal Varkari\n• Bail Pola\n• Shri Ram\n• Holi\n\nEach setup uses authentic ethnic props, brass bells, marigold garlands, and skin-safe baby dhotis.',
      suggestedAction: {
        label: 'Explore Traditional Themes',
        actionType: 'scroll_to_traditional',
      },
    };
  }

  // Packages & Pricing
  if (
    query.includes('package') ||
    query.includes('cost') ||
    query.includes('pricing') ||
    query.includes('price') ||
    query.includes('rate') ||
    query.includes('charges')
  ) {
    if (query.includes('2 hour') || query.includes('2-hour') || query.includes('8000') || query.includes('8,000')) {
      return {
        reply:
          'Our most POPULAR package is the 2-Hour Newborn Baby Shoot for ₹8,000. It includes 1 Cinematic Reel and 15–20 Hand-Edited Photos, allowing plenty of time for calm feedings, gentle poses, and family moments.',
        suggestedAction: {
          label: 'View Newborn Packages',
          actionType: 'scroll_to_packages',
        },
      };
    }

    if (query.includes('1 hour') || query.includes('1-hour') || query.includes('6000') || query.includes('6,000')) {
      return {
        reply:
          'Our 1-Hour Newborn Baby Shoot is ₹6,000. It includes 1 Cinematic Reel and 15–20 Hand-Edited Photos with safe sanitized swaddles.',
        suggestedAction: {
          label: 'View Newborn Packages',
          actionType: 'scroll_to_packages',
        },
      };
    }

    if (query.includes('3 hour') || query.includes('3-hour') || query.includes('10000') || query.includes('10,000')) {
      return {
        reply:
          'Our 3-Hour Newborn Baby Shoot is ₹10,000. It includes 1 Cinematic Reel, 15–20 Hand-Edited Photos, multiple creative setups, and relaxed family captures.',
        suggestedAction: {
          label: 'View Newborn Packages',
          actionType: 'scroll_to_packages',
        },
      };
    }

    return {
      reply:
        'Here are our transparent Newborn Baby Shoot packages in Nagpur:\n• 1 Hour: ₹6,000 (1 Reel + 15–20 Edited Photos)\n• 2 Hours: ₹8,000 [POPULAR] (1 Reel + 15–20 Edited Photos)\n• 3 Hours: ₹10,000 (1 Reel + 15–20 Edited Photos)',
      suggestedAction: {
        label: 'View Packages Section',
        actionType: 'scroll_to_packages',
      },
    };
  }

  // Western Themes
  if (query.includes('western') || query.includes('boho') || query.includes('pastel') || query.includes('swaddle') || query.includes('nest')) {
    return {
      reply:
        'Our Western Theme features minimalist Scandinavian aesthetics: soft pastel knits, plush fur nests, floral headbands, cloud swaddles, and celestial moon basket props.',
      suggestedAction: {
        label: 'View Western Themes',
        actionType: 'scroll_to_themes',
      },
    };
  }

  // Services offered
  if (query.includes('service') || query.includes('maternity') || query.includes('event')) {
    return {
      reply:
        'Blissful Munchkins offers four core services in Nagpur:\n1. Newborn Shoots (first precious days)\n2. Baby Shoots (smiles & milestones)\n3. Maternity Shoots (grace & motherhood)\n4. All Types of Event Photography (celebrations & special moments)',
      suggestedAction: {
        label: 'Book a Shoot',
        actionType: 'scroll_to_inquiry',
      },
    };
  }

  // Location / Farmhouse
  if (query.includes('location') || query.includes('farmhouse') || query.includes('outdoor') || query.includes('nagpur')) {
    return {
      reply:
        'Blissful Munchkins is based in Nagpur. While our studio is fully equipped and climate-controlled, suitable farmhouse or outdoor locations can easily be arranged through our associated contacts if you desire an open-air natural photoshoot.',
      suggestedAction: {
        label: 'Ask About Locations',
        actionType: 'scroll_to_inquiry',
      },
    };
  }

  // Reels
  if (query.includes('reel') || query.includes('video') || query.includes('instagram')) {
    return {
      reply:
        'Every newborn package includes 1 custom-edited vertical cinematic Instagram Reel! You can filter and watch our Baby, Western, and Traditional reels right on the page.',
      suggestedAction: {
        label: 'Watch Reels',
        actionType: 'scroll_to_reels',
      },
    };
  }

  // Booking
  if (query.includes('book') || query.includes('hire') || query.includes('contact') || query.includes('reserve') || query.includes('appointment')) {
    return {
      reply:
        'To book, simply fill out the "Book Now" inquiry form below. Select "Baby" (or Newborn, Maternity, Event Photography), your preferred date, and Ashwin Bangade will contact you directly to finalize your session.',
      suggestedAction: {
        label: 'Book Now',
        actionType: 'scroll_to_inquiry',
      },
    };
  }

  // Default response
  return {
    reply:
      'Welcome to Blissful Munchkins by Ashwin Bangade — Best Baby Photography in Nagpur. I can help you with our Newborn Packages (1hr ₹6k, 2hr ₹8k, 3hr ₹10k), our 10 Traditional Festival themes, Western setups, baby safety procedures, or booking your session. What would you like to know?',
    suggestedAction: {
      label: 'Book Now',
      actionType: 'scroll_to_inquiry',
    },
  };
}
