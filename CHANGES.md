# Website launch-checklist update (10 Oct 2026)

## Do these 4 things BEFORE you deploy
1. **Rotate the leaked keys.** The old `.env.local` / `.env.example` were shared in a zip.
   - Resend: create a new API key, delete the old one.
   - Google: create a new Places API key, delete the old one, restrict it to "Places API" only, add a quota/budget alert.
2. **Create `.env.local`** (copy `.env.example`) and fill in the new values. This zip intentionally has NO `.env.local`.
3. **Cloudflare Turnstile** (free): Cloudflare dashboard > Turnstile > Add widget for `racontractor.in`.
   Put the Site key in `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the Secret key in `TURNSTILE_SECRET_KEY`.
4. **Google Analytics**: put your `G-XXXXXXXXXX` id in `NEXT_PUBLIC_GA_ID`.
   Add all of these variables in your hosting dashboard too (Vercel > Settings > Environment Variables), then redeploy.

## What changed
| Area | File(s) |
|---|---|
| Spam protection (Turnstile) | `src/components/contact/Turnstile.tsx` (new), `src/lib/turnstile.ts` (new), `EnquiryForm.tsx`, `api/contact/route.ts`, `lib/enquiry.ts` |
| API security: same-site Origin check, 20 KB body cap, better IP detection, Turnstile verify, tidier limiter | `src/app/api/contact/route.ts` |
| Reviews API no longer returns config details; removed `any` types | `src/app/api/google-reviews/route.ts` |
| Security headers (HSTS, nosniff, frame, referrer, permissions) | `next.config.ts` |
| Thank-you page (noindex) + conversion event `generate_lead` | `src/app/thank-you/page.tsx`, `components/common/TrackEvent.tsx` |
| Google Analytics only after "Accept" + cookie banner | `src/lib/analytics.ts`, `components/common/CookieConsent.tsx`, `layout.tsx` |
| Privacy policy rewritten (cookies, analytics, Resend, Turnstile, rights) with a real date | `src/app/privacy/page.tsx` |
| Page titles shortened to ~60 chars, brand no longer duplicated | `layout.tsx`, projects, contact, about, services, terms pages |
| Alt text on About photos now descriptive | `src/app/about/page.tsx` |
| Share image resized to 1200x630 | `public/images/og-image.jpg` |
| `.env.example` cleaned (no real keys) + new variables | `.env.example` |

## Behaviour notes
- If Turnstile keys are empty, the form still works (honeypot + rate limit only).
- If `NEXT_PUBLIC_GA_ID` is empty, there is no analytics and no cookie banner.
- After a successful send the visitor goes to `/thank-you`.

## Still on your list
- Replace `public/images/og-image.jpg` (currently a stock-style London penthouse) with a real RA Contractor project photo if you want it used anywhere.
- The in-memory rate limiter resets on serverless hosting. For a hard limit use Upstash/Redis.
- No Content-Security-Policy yet (would need testing against GSAP, Maps, Turnstile and GA).
- Blog post titles are 64-68 characters + brand, so Google may shorten them.
- Have a lawyer glance over the privacy policy wording.
