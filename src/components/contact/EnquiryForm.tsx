"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const serviceOptions = [
  "Civil Construction",
  "Turnkey Construction",
  "Home Interior Design",
  "Modular Kitchen",
  "False Ceiling & Lighting",
  "Painting & Wall Finishes",
  "Electrical Work",
  "Commercial Interior Fit-out",
  "Carpentry & Wardrobes",
  "Other",
];

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-md border border-[var(--color-gray-light)] bg-white px-3 py-2.5 text-sm text-[var(--color-black-soft)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30 font-[family-name:var(--font-dm-sans)]";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  const [values, setValues] = useState({ name: "", phone: "", email: "", service: "", location: "", message: "", website: "" });

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const waText = [
    "Hello RA Contractor, I would like to enquire.",
    values.name && `Name: ${values.name}`,
    values.service && `Service: ${values.service}`,
    values.location && `Location: ${values.location}`,
    values.message && `Details: ${values.message}`,
  ]
    .filter(Boolean)
    .join("\n");
  const waUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(waText)}`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});
    setNotice("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 400 && data.fields) {
        setErrors(data.fields);
        setNotice("Please check the highlighted fields.");
      } else if (res.status === 429) {
        setNotice("Too many attempts. Please call or WhatsApp us instead.");
      } else {
        setNotice("We could not send your enquiry right now. Please call or WhatsApp us, we will respond quickly.");
      }
      setStatus("error");
    } catch {
      setNotice("Network problem. Please call or WhatsApp us instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-[var(--color-gold)]/40 bg-white p-8 text-center">
        <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">Thank you, we have received your enquiry</h3>
        <p className="mt-3 text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)]">
          We will contact you on {values.phone}. For anything urgent, call {siteConfig.phone}.
        </p>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p className="mt-1 text-xs text-red-600">{errors[k]}</p>;
  const label = "block text-sm font-medium text-[var(--color-navy)] mb-1 font-[family-name:var(--font-dm-sans)]";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg border border-[var(--color-gray-light)] bg-white p-6 md:p-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className={label}>Name *</label>
          <input id="enq-name" name="name" required autoComplete="name" value={values.name} onChange={set("name")} className={fieldClass} aria-invalid={!!errors.name} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="enq-phone" className={label}>Mobile number *</label>
          <input id="enq-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="10-digit number" value={values.phone} onChange={set("phone")} className={fieldClass} aria-invalid={!!errors.phone} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="enq-email" className={label}>Email (optional)</label>
          <input id="enq-email" name="email" type="email" autoComplete="email" value={values.email} onChange={set("email")} className={fieldClass} aria-invalid={!!errors.email} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="enq-service" className={label}>Service needed</label>
          <select id="enq-service" name="service" value={values.service} onChange={set("service")} className={fieldClass}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="enq-location" className={label}>Project location</label>
        <input id="enq-location" name="location" placeholder="e.g. Kondapur, Hyderabad" value={values.location} onChange={set("location")} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="enq-message" className={label}>Your requirement *</label>
        <textarea id="enq-message" name="message" required rows={5} value={values.message} onChange={set("message")} className={fieldClass} aria-invalid={!!errors.message} />
        {err("message")}
      </div>

      {/* Honeypot: hidden from people, bots fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="enq-website">Website</label>
        <input id="enq-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
      </div>

      <div aria-live="polite" className="min-h-[1.25rem] text-sm text-red-600">{notice}</div>

      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={status === "sending"} className="btn-luxury btn-gold disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Send Enquiry"}
        </button>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-luxury btn-outline-dark inline-flex items-center gap-2">
          <MessageCircle className="w-4 h-4" /> Send on WhatsApp
        </a>
      </div>
    </form>
  );
}
