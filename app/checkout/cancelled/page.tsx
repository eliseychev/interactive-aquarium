import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Checkout cancelled", robots: { index: false, follow: false } };

export default function CheckoutCancelledPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width auth-page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> NO WORRIES</span>
          <h1>Your aquarium is still here.</h1>
          <p>Checkout was cancelled. No payment was taken, and you can come back to fish packs whenever you like.</p>
        </div>
        <div className="route-cta-row"><Link className="button button-dark" href="/#pricing">See fish packs ↗</Link><Link className="button button-outline" href="/">Back to the aquarium ↗</Link></div>
      </div>
    </main>
  );
}
