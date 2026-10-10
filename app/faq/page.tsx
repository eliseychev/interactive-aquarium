import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { productConfig } from "@/config/product";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "Frequently asked questions",
  description: "Answers about family aquariums, creating fish, supported screens, and simple pricing.",
};

export default function FaqPage() {
  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> GOOD QUESTIONS</span>
          <h1>Wondering about<br />the little details?</h1>
          <p>Here are a few things families often ask. Still curious? Reach us at {productConfig.supportEmail}.</p>
        </div>
        <FaqList />
      </div>
    </main>
  );
}
