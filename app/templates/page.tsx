import type { Metadata } from "next";
import Link from "next/link";
import { FishArt } from "@/components/fish-art";
import { TrackedLink } from "@/components/tracked-link";

export const metadata: Metadata = {
  alternates: { canonical: "/templates" },
  title: "Free printable fish templates",
  description: "Print, color and bring your child's fish drawing to life in the family aquarium.",
};

export default function TemplatesPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> MAKE SOMETHING THAT SWIMS</span>
          <h1>Print your fish.<br />Color them. Bring them to life.</h1>
          <p>Four original fish outlines, ready for crayons, markers, and wonderfully unexpected colors. No account needed.</p>
        </div>
        <div className="inner-grid">
          <div className="inner-card">
            <div className="template-preview" aria-label="Preview of printable fish templates">
              <div className="template-page-art">
                <FishArt className="outline-fish" color="none" accent="none" />
              </div>
            </div>
          </div>
          <div className="inner-card">
            <h3>A little something to color.</h3>
            <p>The free printable pack includes four fish outlines, plenty of room to decorate, and a friendly reminder to let imaginations lead.</p>
            <ul className="template-benefits">
              <li>Made for standard US Letter paper</li>
              <li>Print at home, as many times as you like</li>
              <li>Designed for pencils, crayons, and markers</li>
            </ul>
            <TrackedLink className="button button-dark" event="template_download" href="/api/templates">Download free fish templates <span>↓</span></TrackedLink>
            <p className="template-smallprint">PDF · Free · No sign-up required</p>
          </div>
        </div>
        <div className="notice-card template-privacy">
          <span className="notice-icon">✦</span>
          <span>Print and color together, then use the app to send a fish to your shared aquarium. A parent or organizer manages the account.</span>
        </div>
        <div className="route-cta-row"><Link className="button button-outline" href="/#fish-demo">Try the drawing demo ↗</Link><Link className="button button-outline" href="/download">Explore app options ↗</Link></div>
      </div>
    </main>
  );
}
