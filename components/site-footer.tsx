import Link from "next/link";
import { productConfig } from "@/config/product";
import { BrandMark } from "@/components/fish-art";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link className="brand" href="/">
            <BrandMark />
            <span>{productConfig.brand}</span>
          </Link>
          <p>A little creativity goes a long way.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Explore</span>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/templates">Fish templates</Link>
          </div>
          <div>
            <span className="footer-label">Your aquarium</span>
            <Link href="/download">Download</Link>
            <Link href="/account">My account</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <span className="footer-label">Say hello</span>
            <a href={`mailto:${productConfig.supportEmail}`}>Support</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {productConfig.brand}. Made for little big imaginations.</span>
        <span className="footer-note"><span className="status-dot" /> No subscriptions. Just fish.</span>
      </div>
    </footer>
  );
}
