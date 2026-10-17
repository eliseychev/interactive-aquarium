"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/fish-art";
import { productConfig } from "@/config/product";

const links = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Create a fish", href: "/#create" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Download", href: "/download" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label={`${productConfig.brand} home`} onClick={() => setMenuOpen(false)}>
          <BrandMark />
          <span>{productConfig.brand}</span>
        </Link>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="mobile-login" href="/login" onClick={() => setMenuOpen(false)}>
            Log in
          </Link>
          <Link className="mobile-start" href="/signup" onClick={() => setMenuOpen(false)}>
            Start your aquarium <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <div className="header-actions">
          <Link className="login-link" href="/login">Log in</Link>
          <Link className="button button-small button-lime" href="/signup">
            Start your aquarium <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}
