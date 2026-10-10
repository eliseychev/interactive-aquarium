import Link from "next/link";

export default function NotFound() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width auth-page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> A LITTLE OFF COURSE</span>
          <h1>We can’t find that ocean.</h1>
          <p>The page may have drifted away. Let’s get you back to the aquarium.</p>
        </div>
        <Link className="button button-dark" href="/">Back to the aquarium ↗</Link>
      </div>
    </main>
  );
}
