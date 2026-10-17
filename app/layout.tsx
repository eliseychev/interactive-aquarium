import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { productConfig } from "@/config/product";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(productConfig.siteUrl),
  title: {
    default: `${productConfig.brand} — Draw it. Watch it swim.`,
    template: `%s | ${productConfig.brand}`,
  },
  description:
    "Turn your TV into a magical aquarium filled with fish created by your kids. Draw digitally or color on paper, then watch every fish come alive.",
  openGraph: {
    title: `${productConfig.brand} — Draw it. Watch it swim.`,
    description: `A big-screen aquarium made together by little artists. Your first ${productConfig.freeFishCount} fish are free.`,
    siteName: productConfig.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${productConfig.brand} — Draw it. Watch it swim.`,
    description: "A big-screen aquarium made together by little artists.",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
