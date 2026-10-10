import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Purchase status", robots: { index: false, follow: false } };

export default function CheckoutSuccessPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width auth-page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> PAYMENT STATUS</span>
          <h1>We can’t confirm a purchase here.</h1>
          <p>A return page alone doesn’t confirm payment. Fish credits are only added after a verified payment notification from the payment provider.</p>
        </div>
        <div className="notice-card"><span className="notice-icon">✦</span><span>Checkout isn’t connected in this preview, so no payment was taken and no credits were added.</span></div>
        <div className="route-cta-row"><Link className="button button-dark" href="/#pricing">Back to fish packs ↗</Link><Link className="button button-outline" href="/account">View demo account ↗</Link></div>
      </div>
    </main>
  );
}
