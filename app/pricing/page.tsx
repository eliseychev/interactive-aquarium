import type { Metadata } from "next";
import { PricingSection } from "@/components/home-sections";
import { productConfig } from "@/config/product";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Simple, one-time pricing",
  description: `Your first ${productConfig.freeFishCount} fish are free. Add fish credits with simple one-time packs, never a subscription.`,
};

export default function PricingPage() {
  return (
    <main id="main">
      <div className="pricing-route-intro"><span className="section-kicker"><span>✦</span> SIMPLE BY DESIGN</span><h1>A little more room<br />in the ocean.</h1></div>
      <PricingSection />
    </main>
  );
}
