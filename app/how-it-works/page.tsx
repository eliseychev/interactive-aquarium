import type { Metadata } from "next";
import { CreationSection, DemoSection, HowItWorksSection, MagicSection } from "@/components/home-sections";

export const metadata: Metadata = {
  alternates: { canonical: "/how-it-works" },
  title: "How it works",
  description: "Create a fish on a screen or on paper, then watch it come alive in your family aquarium.",
};

export default function HowItWorksPage() {
  return (
    <main id="main" className="how-route">
      <div className="how-route-hero"><span className="section-kicker"><span>✦</span> CREATE TOGETHER</span><h1>From little hands<br />to the big screen.</h1><p>Make it on a screen or color it on paper. Either way, your fish finds its way home.</p></div>
      <MagicSection />
      <HowItWorksSection />
      <CreationSection />
      <DemoSection />
    </main>
  );
}
