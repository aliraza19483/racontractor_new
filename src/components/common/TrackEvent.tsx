"use client";

import { useEffect } from "react";
import {
  trackEvent,
  trackGoogleAdsContactConversion,
  ENQUIRY_CONVERSION_KEY,
} from "@/lib/analytics";

/**
 * Fires conversion tracking on /thank-you page.
 * Only records a Google Ads conversion if the visitor genuinely submitted the enquiry form.
 */
export default function TrackEvent({ name, params }: { name: string; params?: Record<string, unknown> }) {
  useEffect(() => {
    // 1. GA4 event (if configured)
    trackEvent(name, params);

    // 2. Google Ads Contact conversion: verify genuine submission
    try {
      const isEnquirySubmission = window.sessionStorage.getItem(ENQUIRY_CONVERSION_KEY);
      if (isEnquirySubmission === "true") {
        trackGoogleAdsContactConversion();
        window.sessionStorage.removeItem(ENQUIRY_CONVERSION_KEY);
      }
    } catch {
      trackGoogleAdsContactConversion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

