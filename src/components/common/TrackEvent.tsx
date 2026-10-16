"use client";

import { useEffect } from "react";
import {
  trackEvent,
  trackGoogleAdsContactConversion,
} from "@/lib/analytics";

/**
 * Fires conversion tracking on /thank-you page.
 * Uses window.__ra_conversion_fired deduplication so exactly one conversion event fires.
 */
export default function TrackEvent({ name, params }: { name: string; params?: Record<string, unknown> }) {
  useEffect(() => {
    // 1. GA4 event (if configured)
    trackEvent(name, params);

    // 2. Google Ads Contact conversion: runs on client transition if not already fired by inline script
    trackGoogleAdsContactConversion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

