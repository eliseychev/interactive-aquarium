"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import type { AnalyticsEvent } from "@/lib/analytics";
import { trackEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  event,
  properties,
  className,
  children,
}: {
  href: string;
  event: AnalyticsEvent;
  properties?: Record<string, string | number>;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      className={className}
      href={href}
      onClick={() => trackEvent(event, properties)}
    >
      {children}
    </Link>
  );
}

export function TrackOnView({
  targetId,
  event,
}: {
  targetId: string;
  event: AnalyticsEvent;
}) {
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    if (!("IntersectionObserver" in window)) {
      trackEvent(event);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      trackEvent(event);
      observer.disconnect();
    }, { threshold: 0.15 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [event, targetId]);

  return null;
}
