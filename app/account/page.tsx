import type { Metadata } from "next";
import Link from "next/link";
import { aquariumService } from "@/lib/services";
import { productConfig } from "@/config/product";

export const metadata: Metadata = { title: "My aquarium", robots: { index: false, follow: false } };

export default async function AccountPage() {
  const account = await aquariumService.getAccountSummary();
  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> YOUR LITTLE CORNER OF THE OCEAN</span>
          <h1>My aquarium.</h1>
          <p>Here’s a peek at what your account could look like. Account services aren’t connected in this preview.</p>
        </div>
        <div className="inner-panel account-panel">
          <div className="account-title-row"><div><h2>My Aquarium</h2><p>A shared space for every little artist.</p></div><span className="demo-tag">PREVIEW</span></div>
          <div className="account-code">Aquarium code <strong>{account.aquariumCode}</strong></div>
          <div className="account-stat-grid">
            <div className="account-stat"><strong>{account.fishCreated}</strong><span>Fish swimming</span></div>
            <div className="account-stat"><strong>{account.fishCredits}</strong><span>Free fish credits</span></div>
            <div className="account-stat"><strong>{productConfig.freeFishCount}</strong><span>Free to get started</span></div>
          </div>
          <div className="route-cta-row">
            <Link className="button button-dark" href="/#fish-demo">Create a fish ↗</Link>
            <Link className="button button-outline" href="/#pricing">Add fish credits ↗</Link>
            <Link className="button button-outline" href="/download">Download app ↗</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
