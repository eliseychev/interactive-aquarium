export const productConfig = {
  brand: "Drawarium",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  freeFishCount: 3,
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "hello@drawarium.com",
  appUrls: {
    androidTv: process.env.NEXT_PUBLIC_ANDROID_TV_APP_URL || "",
    googlePlay: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "",
    web: process.env.NEXT_PUBLIC_WEB_APP_URL || "",
    ios: process.env.NEXT_PUBLIC_IOS_APP_URL || "",
  },
  packages: [
    { id: "single", name: "One Fish", fishCount: 1, price: 0.99 },
    {
      id: "party",
      name: "Party Pack",
      fishCount: 10,
      price: 6.99,
      badge: "Best for parties",
      perFish: 0.7,
      recommended: true,
    },
    {
      id: "premium",
      name: "Premium Pack",
      fishCount: 15,
      price: 9.99,
      badge: "Best value",
      perFish: 0.67,
    },
  ],
} as const;

export type FishPackage = (typeof productConfig.packages)[number];
