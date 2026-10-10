import type { Metadata } from "next";
import { AuthForm } from "@/components/product-forms";

export const metadata: Metadata = { title: "Log in", robots: { index: false, follow: false } };

export default function LoginPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width auth-page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> GOOD TO HAVE YOU BACK</span>
          <h1>Your aquarium awaits.</h1>
          <p>Sign in with the parent or organizer account linked to your aquarium.</p>
        </div>
        <AuthForm mode="login" />
      </div>
    </main>
  );
}
