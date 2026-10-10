import type { Metadata } from "next";
import Link from "next/link";
import { productConfig } from "@/config/product";

export const metadata: Metadata = { title: "Support", alternates: { canonical: "/support" } };

export default function SupportPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero"><span className="section-kicker"><span>✦</span> HERE TO HELP</span><h1>A question about<br />your little ocean?</h1><p>We’d love to help you find your way around.</p></div>
        <div className="inner-panel">
          <h2>Talk to a human</h2>
          <p>Send a note and our support team will point you in the right direction.</p>
          <a className="button button-dark" href={`mailto:${productConfig.supportEmail}`}>Email {productConfig.supportEmail} ↗</a>
          <div className="route-cta-row"><Link className="button button-outline" href="/faq">Browse FAQs ↗</Link><Link className="button button-outline" href="/templates">Get fish templates ↗</Link></div>
        </div>
      </div>
    </main>
  );
}
