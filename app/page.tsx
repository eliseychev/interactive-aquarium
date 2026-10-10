import type { Metadata } from "next";
import {
  BottomCta,
  CreationSection,
  DemoSection,
  DownloadSection,
  HeroSection,
  HowItWorksSection,
  MagicSection,
  ParentSection,
  PartySection,
  PricingSection,
} from "@/components/home-sections";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <MagicSection />
      <HowItWorksSection />
      <CreationSection />
      <DemoSection />
      <PartySection />
      <ParentSection />
      <PricingSection />
      <DownloadSection />
      <BottomCta />
    </main>
  );
}
