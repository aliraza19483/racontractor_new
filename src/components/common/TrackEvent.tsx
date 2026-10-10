"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Fires one GA4 event when the page loads (e.g. a lead conversion on /thank-you). */
export default function TrackEvent({ name, params }: { name: string; params?: Record<string, unknown> }) {
  useEffect(() => {
    trackEvent(name, params);
    // run once per page view
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
