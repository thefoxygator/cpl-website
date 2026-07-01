export const CPL_LOGO_URL =
  "https://crapsplayerleague.com/wp-content/uploads/2025/07/CPL_logo-1-300x300.png";

export type LeaderboardEntry = {
  rank: number;
  player_name: string;
  total_score: number;
  best_dice_score: number;
  best_bank_score: number;
};

// Static fallback until Supabase `cpl_leaderboard` is connected.
export const STATIC_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, player_name: "Jess", total_score: 1127, best_dice_score: 80, best_bank_score: 1047 },
  { rank: 2, player_name: "Bob B.", total_score: 925, best_dice_score: 234, best_bank_score: 691 },
  { rank: 3, player_name: "DiceNuker", total_score: 901, best_dice_score: 279, best_bank_score: 622 },
  { rank: 4, player_name: "Player Four", total_score: 812, best_dice_score: 198, best_bank_score: 614 },
  { rank: 5, player_name: "Player Five", total_score: 770, best_dice_score: 165, best_bank_score: 605 },
  { rank: 6, player_name: "Player Six", total_score: 705, best_dice_score: 142, best_bank_score: 563 },
  { rank: 7, player_name: "Player Seven", total_score: 668, best_dice_score: 130, best_bank_score: 538 },
  { rank: 8, player_name: "Player Eight", total_score: 612, best_dice_score: 121, best_bank_score: 491 },
  { rank: 9, player_name: "Player Nine", total_score: 588, best_dice_score: 110, best_bank_score: 478 },
  { rank: 10, player_name: "Player Ten", total_score: 540, best_dice_score: 102, best_bank_score: 438 },
  { rank: 11, player_name: "Player Eleven", total_score: 502, best_dice_score: 95, best_bank_score: 407 },
  { rank: 12, player_name: "Player Twelve", total_score: 471, best_dice_score: 88, best_bank_score: 383 },
  { rank: 13, player_name: "Player Thirteen", total_score: 433, best_dice_score: 80, best_bank_score: 353 },
  { rank: 14, player_name: "Player Fourteen", total_score: 401, best_dice_score: 75, best_bank_score: 326 },
  { rank: 15, player_name: "Player Fifteen", total_score: 372, best_dice_score: 68, best_bank_score: 304 },
];

export type CPLEvent = {
  id: string;
  name: string;
  date: string;
  location: string;
  status: "open" | "closed";
};

// Static fallback until Supabase `cpl_events` is connected.
export const STATIC_EVENTS: CPLEvent[] = [];

// ---------------------------------------------------------------------------
// Badge assets
// Place image files in public/badges/ to match these paths.
// ---------------------------------------------------------------------------

/**
 * The 6 official CPL award badges.
 * Filenames: award-1.png … award-6.png
 * Order matches the uploaded graphics (update labels once Brian confirms names).
 */
export const AWARD_BADGES = [
  { id: "award-1", src: "/badges/award-1.png", label: "CPL Award" },
  { id: "award-2", src: "/badges/award-2.png", label: "CPL Award" },
  { id: "award-3", src: "/badges/award-3.png", label: "CPL Award" },
  { id: "award-4", src: "/badges/award-4.png", label: "CPL Award" },
  { id: "award-5", src: "/badges/award-5.png", label: "CPL Award" },
  { id: "award-6", src: "/badges/award-6.png", label: "CPL Award" },
] as const;

/**
 * Founders Club badge paths.
 * - general: Red "Founder" badge — ALL Founders Club members display this.
 * - member / legacy / builder: Tier-specific badges (tiers 1–3 only).
 *   Tier 4 (Founding Legacy Investor) displays only the general Founder badge.
 */
export const FOUNDER_BADGES = {
  general: "/badges/founder.png",   // Red — charter Founder badge, every member
  member:  "/badges/member.png",    // Navy/white — Founding Member tier
  legacy:  "/badges/legacy.png",    // Silver/black — Legacy Builder tier
  builder: "/badges/builder.png",   // Gold/black — Legacy Partner tier
} as const;

/**
 * Founders Club tier definitions.
 * tierBadgeSrc: the tier-specific badge shown ALONGSIDE the general Founder badge.
 * null for top tier — they display only the general Founder badge.
 * Brian's tier names and descriptions are preserved exactly.
 */
export const FOUNDERS_TIERS = [
  {
    tier: 1,
    name: "Founding Member",
    tagline: "Entry-level founding support",
    description:
      "The first step into CPL history. Founding Members receive recognition as inaugural supporters of the league.",
    tierBadgeSrc: FOUNDER_BADGES.member,
    accent: "border-cpl-blue",
    accentGrad: "from-cpl-blue to-cpl-blue/70",
  },
  {
    tier: 2,
    name: "Legacy Builder",
    tagline: "Mid-tier founding support",
    description:
      "For supporters ready to help shape the league's foundation and earn enhanced recognition across CPL events.",
    tierBadgeSrc: FOUNDER_BADGES.legacy,
    accent: "border-cpl-red",
    accentGrad: "from-cpl-red to-cpl-red/70",
  },
  {
    tier: 3,
    name: "Legacy Partner",
    tagline: "Upper-tier founding support",
    description:
      "Strategic partners who help drive the league forward, with prominent recognition and partner-level benefits.",
    tierBadgeSrc: FOUNDER_BADGES.builder,
    accent: "border-cpl-navy",
    accentGrad: "from-cpl-navy to-cpl-blue",
  },
  {
    tier: 4,
    name: "Founding Legacy Investor",
    tagline: "Top-tier founding support",
    description:
      "The highest tier of founding support. Founding Legacy Investors are forever woven into the story of the CPL.",
    tierBadgeSrc: null, // Top tier: general Founder badge only
    accent: "border-cpl-gold",
    accentGrad: "from-cpl-gold to-cpl-red",
  },
] as const;
