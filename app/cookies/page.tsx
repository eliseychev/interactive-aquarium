import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie information", alternates: { canonical: "/cookies" } };

export default function CookiesPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero"><span className="section-kicker"><span>✦</span> YOUR CHOICE</span><h1>Cookie information.</h1></div>
        <div className="inner-panel legal-copy">
          <div className="notice-card"><span className="notice-icon">✦</span><span>This preview does not use advertising or analytics cookies. The site may use strictly necessary browser storage as required by its hosting platform.</span></div>
          <p>A production version will document any cookies or similar technologies it uses, what they do, and how visitors can manage their choices.</p>
        </div>
      </div>
    </main>
  );
}
