import type { MetadataRoute } from "next";
import { productConfig } from "@/config/product";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = productConfig.siteUrl;
  const routes = [
    "",
    "/how-it-works",
    "/pricing",
    "/templates",
    "/download",
    "/faq",
    "/privacy",
    "/terms",
    "/cookies",
    "/support",
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
