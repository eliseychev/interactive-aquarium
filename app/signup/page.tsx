import type { Metadata } from "next";
import { AuthForm } from "@/components/product-forms";
import { productConfig } from "@/config/product";

export const metadata: Metadata = { title: "Start your aquarium", robots: { index: false, follow: false } };

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string }>;
}) {
  const { package: packageId } = await searchParams;
  const selected = productConfig.packages.find((item) => item.id === packageId);
  return (
    <main className="inner-page" id="main">
      <div className="page-width auth-page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> START WITH A LITTLE MAGIC</span>
          <h1>Your aquarium starts here.</h1>
          <p>Your first {productConfig.freeFishCount} fish are free. No card needed. The account belongs to a parent or organizer — kids don’t need accounts.</p>
        </div>
        <AuthForm mode="signup" packageName={selected ? `${selected.name} ($${selected.price.toFixed(2)} one time)` : undefined} />
        <p className="auth-privacy-note">Made for families. We never ask children to create accounts or share personal details.</p>
      </div>
    </main>
  );
}
