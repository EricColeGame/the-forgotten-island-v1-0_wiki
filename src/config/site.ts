export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "The Forgotten Island V1 0 Wiki",
  shortName: "Forgotten Island",
  logoText: "TFI",
  tagline: "Guides, Walkthroughs, Survival Tips & Secrets",
  description: "Your complete fan wiki for The Forgotten Island V1 0 on Steam - gameplay guides, walkthroughs, survival tips, items, maps, and beginner strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://the-forgotten-island-v1-0.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://the-forgotten-island-v1-0.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/1405670/The_Forgotten_Island__v10/",
  heroVideoId: "P-Dst7m-rqw", // The Forgotten Island - v1.0 gameplay showcase (PC Steam)
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
