export type AnalyticsEvent =
  | "hero_cta_click"
  | "how_it_works_view"
  | "try_drawing_click"
  | "fish_demo_started"
  | "fish_demo_completed"
  | "template_download"
  | "pricing_view"
  | "pricing_package_click"
  | "download_app_click"
  | "faq_opened"
  | "login_started"
  | "signup_started"
  | "qr_view";

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number>,
) {
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, properties ?? {});
  }

  // Add a privacy-safe analytics provider here when NEXT_PUBLIC_ANALYTICS_ID is configured.
}
