"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export type DownloadOption = {
  name: string;
  detail: string;
  url: string;
  qr?: string;
  icon: string;
  device: "android" | "ios" | "web" | "tv";
};

export function DownloadOptions({ options }: { options: DownloadOption[] }) {
  const [device, setDevice] = useState<"android" | "ios" | "other">("other");
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setDevice(/android/.test(ua) ? "android" : /iphone|ipad|ipod/.test(ua) ? "ios" : "other");
    if (options.some((option) => option.qr)) trackEvent("qr_view");
  }, [options]);

  const preferred = options.find((option) =>
    device === "android" ? option.device === "android" : device === "ios" ? option.device === "ios" : option.device === "web",
  );

  return (
    <div>
      {preferred && (
        <div className="notice-card">
          <span className="notice-icon">✦</span>
          <span>Looks like you’re on {device === "ios" ? "an Apple device" : device === "android" ? "Android" : "the web"}. <strong>{preferred.name}</strong> is a good place to start.</span>
        </div>
      )}
      <div className="platform-list">
        {options.length === 0 ? (
          <div className="inner-card">
            <h3>App listings are on their way.</h3>
            <p>Official app links will appear here once configured. In the meantime, print free fish templates or try the drawing demo.</p>
            <div className="route-cta-row"><Link className="button button-dark" href="/templates">Get free templates ↗</Link><Link className="button button-outline" href="/#fish-demo">Try the demo ↗</Link></div>
          </div>
        ) : options.map((option) => (
          <div className="platform-row" key={`${option.name}-${option.url}`}>
            <div className="platform-info"><span className="platform-icon" aria-hidden="true">{option.icon}</span><span><strong>{option.name}</strong><small>{option.detail}</small></span></div>
            {option.qr ? <img alt={`QR code to open ${option.name}`} height="72" src={option.qr} width="72" /> : null}
            <a className="platform-action" href={option.url} onClick={() => trackEvent("download_app_click", { platform: option.name })} rel="noreferrer" target="_blank">Open ↗</a>
          </div>
        ))}
      </div>
      {options.some((option) => option.qr) && <p className="platform-qr-note">Installing on your TV? Scan its QR code with your phone.</p>}
    </div>
  );
}
