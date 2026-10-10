import type { Metadata } from "next";
import { productConfig } from "@/config/product";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero"><span className="section-kicker"><span>✦</span> PRIVACY BY DESIGN</span><h1>Little artists.<br />Big privacy.</h1><p>We believe family creativity shouldn’t require children to share personal details.</p></div>
        <div className="inner-panel legal-copy">
          <div className="notice-card"><span className="notice-icon">✦</span><span><strong>Preview policy.</strong> This page describes the intended product principles, not a final legal notice. No account, payment, or analytics service is connected in this preview.</span></div>
          <h2>For parents and organizers</h2>
          <p>The finished product is designed for an adult to manage the account. Children should not need to provide a name, email address, phone number, date of birth, home address, or social account to take part.</p>
          <h2>Drawings and aquarium content</h2>
          <p>This website’s drawing demo runs in your browser and does not save the fish you make. The demo artwork is temporary and disappears when you leave or refresh the page.</p>
          <h2>Analytics and payments</h2>
          <p>No analytics provider or payment processor is active in this preview. A production release must explain what information a provider collects, why it is needed, how long it is kept, and how families can request deletion.</p>
          <h2>Contact</h2>
          <p>Questions about privacy? Contact <a href={`mailto:${productConfig.supportEmail}`}>{productConfig.supportEmail}</a>.</p>
        </div>
      </div>
    </main>
  );
}
