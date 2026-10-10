import { siteConfig } from "@/lib/constants";
import { CookieSettingsButton } from "@/components/common/CookieConsent";

export const metadata = {
  title: "Privacy Policy",
  description: "How RA Contractor collects, uses and protects your personal data.",
};

const h2 = "text-2xl font-semibold text-white mt-8 mb-4";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 container-luxury">
      <div className="max-w-3xl mx-auto prose prose-invert prose-gold">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-white/70 font-[family-name:var(--font-dm-sans)] leading-relaxed">
          <p>Last updated: 10 October 2026</p>

          <h2 className={h2}>1. Introduction</h2>
          <p>
            Welcome to RA Contractor. We respect your privacy and are committed to protecting your personal data.
            This privacy policy explains how we look after your personal data when you visit our website.
          </p>

          <h2 className={h2}>2. The Data We Collect</h2>
          <p>We may collect, use and store the following kinds of personal data about you:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Identity Data: your name.</li>
            <li>Contact Data: mobile number and, if you give it, email address.</li>
            <li>
              Enquiry Data: the details you enter in our enquiry form, such as services needed, property type, area,
              budget, timeline, location and your message.
            </li>
            <li>Technical Data: IP address, browser type and version, and time zone setting.</li>
            <li>Usage Data (only if you accept analytics cookies): pages visited and how you use the site.</li>
          </ul>

          <h2 className={h2}>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we use it:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>To respond to your enquiry and prepare a quotation or site visit.</li>
            <li>Where it is necessary for our legitimate interests, such as keeping our website secure and free of spam.</li>
            <li>To improve our website, if you have accepted analytics cookies.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className={h2}>4. Cookies and Analytics</h2>
          <p>
            We use Google Analytics (when enabled) to understand how visitors use our website. Analytics cookies are
            only set after you click &ldquo;Accept&rdquo; on our cookie notice. If you decline, no analytics cookies are
            set. Your enquiry form draft is saved in your own browser so you can continue later; it is not sent to us
            until you submit the form. <CookieSettingsButton />
          </p>

          <h2 className={h2}>5. Third-Party Services</h2>
          <p>We use trusted services to run this website. They may process limited data on our behalf:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Resend: delivers your enquiry to us by email.</li>
            <li>Cloudflare Turnstile: protects our enquiry form from spam and bots.</li>
            <li>Google: Google Maps, Google reviews and, with your consent, Google Analytics.</li>
          </ul>
          <p>We do not sell your personal data.</p>

          <h2 className={h2}>6. Keeping and Correcting Your Data</h2>
          <p>
            We keep enquiry details only for as long as needed to respond to you and manage your project. You may ask
            us to access, correct or delete the personal data you have given us by contacting us below.
          </p>

          <h2 className={h2}>7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-gold)] underline">
              {siteConfig.email}
            </a>{" "}
            or call {siteConfig.phone}.
          </p>
        </div>
      </div>
    </div>
  );
}
