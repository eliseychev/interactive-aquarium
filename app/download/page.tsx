import type { Metadata } from "next";
import QRCode from "qrcode";
import { productConfig } from "@/config/product";
import { DownloadOptions, type DownloadOption } from "@/components/download-options";

export const metadata: Metadata = {
  alternates: { canonical: "/download" },
  title: "Find your aquarium app",
  description: "Find the right way to bring your family aquarium to the big screen.",
};

export default async function DownloadPage() {
  const platforms: Array<Omit<DownloadOption, "qr">> = [
    { name: "Android TV", detail: "For your big screen", url: productConfig.appUrls.androidTv, icon: "▣", device: "tv" },
    { name: "Google Play", detail: "Android phones and tablets", url: productConfig.appUrls.googlePlay, icon: "▶", device: "android" },
    { name: "Web app", detail: "Draw on a phone, tablet, or computer", url: productConfig.appUrls.web, icon: "⌘", device: "web" },
    { name: "App Store", detail: "For iPhone and iPad", url: productConfig.appUrls.ios, icon: "◉", device: "ios" },
  ];
  const configured = platforms.filter((item) => Boolean(item.url));
  const options: DownloadOption[] = await Promise.all(
    configured.map(async (item) => ({
      ...item,
      qr: item.device === "tv" ? await QRCode.toDataURL(item.url, { width: 144, margin: 1, color: { dark: "#12394b", light: "#fffefa" } }) : undefined,
    })),
  );

  return (
    <main className="inner-page" id="main">
      <div className="page-width">
        <div className="inner-hero">
          <span className="section-kicker"><span>✦</span> YOUR OCEAN IS WAITING</span>
          <h1>Bring your aquarium<br />to the big screen.</h1>
          <p>Choose the right screen for your family. We’ll point you to the official app as soon as it’s available.</p>
        </div>
        <DownloadOptions options={options} />
        <div className="download-template-callout">
          <span>Not ready to install?</span>
          <a href="/templates">Print a fish and start creating on paper ↗</a>
        </div>
      </div>
    </main>
  );
}
