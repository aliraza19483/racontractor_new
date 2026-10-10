"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  CONSENT_EVENT,
  GA_ID,
  OPEN_SETTINGS_EVENT,
  readConsent,
  writeConsent,
  type Consent,
} from "@/lib/analytics";

/**
 * Cookie notice + Google Analytics loader.
 * - Renders nothing when NEXT_PUBLIC_GA_ID is not set.
 * - Google Analytics is only loaded after the visitor clicks "Accept".
 */
export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      const c = readConsent();
      setConsent(c);
      setOpen(c === null);
      setReady(true);
    }, 0);
    const onChange = (e: Event) => {
      setConsent((e as CustomEvent<Consent>).detail ?? readConsent());
      setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener(CONSENT_EVENT, onChange);
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(CONSENT_EVENT, onChange);
      window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
    };
  }, []);

  if (!GA_ID || !ready) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-3 z-[70] rounded-lg border border-[var(--color-gold)]/40 bg-[var(--color-navy)] p-4 text-white shadow-2xl sm:right-auto sm:max-w-md"
        >
          <p className="text-sm leading-relaxed text-white/85 font-[family-name:var(--font-dm-sans)]">
            We use cookies to understand how visitors use our website so we can improve it. Analytics cookies are only
            set if you accept. See our{" "}
            <Link href="/privacy" className="text-[var(--color-gold)] underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => writeConsent("granted")}
              className="rounded-md bg-[var(--color-gold)] px-4 py-2 text-sm font-medium text-[var(--color-navy)] hover:opacity-90"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => writeConsent("denied")}
              className="rounded-md border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Small link-style button that lets visitors reopen the cookie choice (used in the Privacy Policy). */
export function CookieSettingsButton() {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className="text-[var(--color-gold)] underline"
    >
      Change cookie settings
    </button>
  );
}
