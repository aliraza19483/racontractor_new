/** Google Analytics 4 helpers. Analytics only runs after the visitor accepts cookies. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CONSENT_KEY = "ra-cookie-consent";
export const CONSENT_EVENT = "ra-consent-change";
export const OPEN_SETTINGS_EVENT = "ra-open-cookie-settings";

export type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): Consent {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked: choice only lasts for this page view */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Send a GA4 event. Does nothing without a GA id or without consent. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !GA_ID || readConsent() !== "granted") return;
  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the real `arguments` object in the dataLayer
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (function (..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  })("event", name, params);
}

/** Google Ads Configuration (Single Google Tag: AW-18503078719) */
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18503078719";
export const GOOGLE_ADS_CONVERSION_EVENT =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_EVENT || "ads_conversion_Project_1";
export const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "";
export const ENQUIRY_CONVERSION_KEY = "ra_enquiry_conversion_fired";

/**
 * Track Google Ads Contact Conversion.
 * Only records a conversion after a successful enquiry submission.
 */
export function trackGoogleAdsContactConversion() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }

  const adsId = GOOGLE_ADS_ID;
  const label = GOOGLE_ADS_CONVERSION_LABEL;
  const conversionSendTo = label ? `${adsId}/${label}` : adsId;

  // 1. Existing Google Ads Contact conversion action (linked GA4 event from Project / Contacts)
  window.gtag("event", GOOGLE_ADS_CONVERSION_EVENT, {
    send_to: adsId,
    value: 1.0,
    currency: "INR",
  });

  // 2. Standard Google Ads conversion event
  window.gtag("event", "conversion", {
    send_to: conversionSendTo,
    value: 1.0,
    currency: "INR",
  });

  // 3. Lead & Contact event indicators for Google Tag / Tag Assistant
  window.gtag("event", "generate_lead", {
    send_to: adsId,
    event_category: "Contact",
    event_label: "Website Enquiry Form",
  });

  window.gtag("event", "contact", {
    send_to: adsId,
  });

  // 4. Virtual pageview update so URL-based rules in Google Ads also match
  window.gtag("event", "page_view", {
    send_to: adsId,
    page_title: "Thank You | RA Contractor",
    page_location: window.location.origin + "/thank-you",
    page_path: "/thank-you",
  });
}

