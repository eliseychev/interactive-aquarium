import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { productConfig } from "@/config/product";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(productConfig.siteUrl),
  title: {
    default: "Finfolk — Draw a fish. Watch it come alive.",
    template: "%s | Finfolk",
  },
  description:
    "Turn your TV into a magical aquarium filled with fish created by your kids. Draw digitally or color on paper, then watch every fish come alive.",
  openGraph: {
    title: "Finfolk — Draw a fish. Watch it come alive.",
    description: `A big-screen aquarium made together by little artists. Your first ${productConfig.freeFishCount} fish are free.`,
    siteName: "Finfolk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finfolk — Draw a fish. Watch it come alive.",
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
