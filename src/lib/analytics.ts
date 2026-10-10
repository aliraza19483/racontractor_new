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
