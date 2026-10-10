import type { Metadata } from "next";
import { productConfig } from "@/config/product";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero"><span className="section-kicker"><span>✦</span> THE IMPORTANT BITS</span><h1>Terms of use.</h1><p>A clear preview of how this product is intended to work.</p></div>
        <div className="inner-panel legal-copy">
          <div className="notice-card"><span className="notice-icon">✦</span><span><strong>Preview terms.</strong> These notes are not final legal terms. The product, accounts, and payment features are not live in this preview.</span></div>
          <h2>Using this preview</h2><p>You may explore the site, try its temporary fish drawing demo, and download the original printable templates for personal or classroom use.</p>
          <h2>Accounts and purchases</h2><p>Account creation, app installation, and purchases are not enabled here. Pricing shown on this site is illustrative product information; it is not an offer to charge a payment method.</p>
          <h2>Family-friendly use</h2><p>A parent or activity organizer is intended to manage any future account. Children should participate with an adult’s guidance and should not share personal details.</p>
          <h2>Questions</h2><p>Contact <a href={`mailto:${productConfig.supportEmail}`}>{productConfig.supportEmail}</a> for help or questions about these preview terms.</p>
        </div>
      </div>
    </main>
  );
}
