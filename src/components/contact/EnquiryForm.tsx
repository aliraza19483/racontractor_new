"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronLeft, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Turnstile from "@/components/contact/Turnstile";

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
const propertyOptions = ["Apartment / Flat", "Independent House / Villa", "Office", "Shop / Showroom", "Open Plot", "Other"];
const budgetOptions = ["Under ₹5 lakh", "₹5–15 lakh", "₹15–30 lakh", "₹30 lakh+", "Need guidance"];
const timelineOptions = ["Immediately", "Within 1 month", "1–3 months", "Just exploring"];
const callTimeOptions = ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–8)", "Anytime"];
const quickAdds = [
  "Site visit needed.",
  "Need an itemised BOQ.",
  "Material supply included.",
  "I have a floor plan to share.",
  "Renovation of an existing space.",
];
const areaSuggestions = [
  "Borabanda", "Madhapur", "Gachibowli", "Kondapur", "Kukatpally", "Jubilee Hills", "Banjara Hills",
  "Miyapur", "Ameerpet", "Secunderabad", "Uppal", "LB Nagar", "Kompally", "Manikonda", "Tellapur",
];

const stepTitles = ["Service", "Project", "Details", "Contact"];
const TOTAL_STEPS = stepTitles.length;
const MAX_AREA = 5000;
const MAX_MESSAGE = 1500;
const DRAFT_KEY = "ra-enquiry-draft";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

/** Which step each server-validated field lives on, so errors can send the user back to it. */
const fieldStep: Record<string, number> = {
  services: 1,
  service: 1,
  propertyType: 2,
  area: 2,
  budget: 2,
  timeline: 2,
  location: 2,
  message: 3,
  name: 4,
  phone: 4,
  email: 4,
  callTime: 4,
};

type Status = "idle" | "sending" | "success" | "error";

type Values = {
  services: string[];
  propertyType: string;
  area: number;
  budget: string;
  timeline: string;
  location: string;
  message: string;
  name: string;
  phone: string;
  email: string;
  callTime: string;
  /** honeypot, must stay empty */
  website: string;
};

const emptyValues: Values = {
  services: [],
  propertyType: "",
  area: 0,
  budget: "",
  timeline: "",
  location: "",
  message: "",
  name: "",
  phone: "",
  email: "",
  callTime: "",
  website: "",
};

const fieldClass =
  "w-full rounded-md border bg-white !px-3 !py-2.5 text-sm text-[var(--color-black-soft)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30 font-[family-name:var(--font-dm-sans)]";
const labelClass = "block text-sm font-medium text-[var(--color-navy)] !mb-1.5 font-[family-name:var(--font-dm-sans)]";
const hintClass = "text-sm text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)]";

function areaLabel(n: number) {
  if (n <= 0) return "";
  if (n >= MAX_AREA) return "5,000+ sq ft";
  return `${n.toLocaleString("en-IN")} sq ft`;
}

function phoneDigits(v: string) {
  return v.replace(/\D/g, "");
}

function formatPhone(raw: string) {
  const d = phoneDigits(raw).replace(/^(91|0)(?=\d{10})/, "").slice(0, 10);
  return d.length > 5 ? `${d.slice(0, 5)} ${d.slice(5)}` : d;
}

function validate(step: number, v: Values): Record<string, string> {
  const errs: Record<string, string> = {};
  if (step === 1 && v.services.length === 0) errs.services = "Please choose at least one service.";
  if (step === 3 && v.message.trim().length < 10) errs.message = "Please describe your requirement in a few words.";
  if (step === 4) {
    if (v.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(phoneDigits(v.phone))) errs.phone = "Enter a valid 10-digit mobile number.";
    const email = v.email.trim();
    if (email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email address.";
  }
  return errs;
}

function readDraft(): Values | null {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as Record<string, unknown>;
    if (!d || typeof d !== "object") return null;
    const str = (k: string) => (typeof d[k] === "string" ? (d[k] as string) : "");
    return {
      services: Array.isArray(d.services)
        ? d.services.filter((s): s is string => typeof s === "string" && serviceOptions.includes(s))
        : [],
      propertyType: str("propertyType"),
      area: typeof d.area === "number" ? Math.min(Math.max(d.area, 0), MAX_AREA) : 0,
      budget: str("budget"),
      timeline: str("timeline"),
      location: str("location"),
      message: str("message").slice(0, MAX_MESSAGE),
      name: str("name"),
      phone: formatPhone(str("phone")),
      email: str("email"),
      callTime: str("callTime"),
      website: "",
    };
  } catch {
    return null;
  }
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className={labelClass}>{label}</span>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(on ? "" : o)}
              className={`rounded-full border !px-4 !py-1.5 text-sm font-[family-name:var(--font-dm-sans)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/60 ${
                on
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-navy)] font-medium"
                  : "border-[var(--color-gray-light)] bg-white text-[var(--color-black-soft)] hover:border-[var(--color-gold)]"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function EnquiryForm() {
  const router = useRouter();
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaReset, setCaptchaReset] = useState(0);
  /** Turnstile tokens are single-use, so ask for a fresh one after any failed send. */
  const resetCaptcha = () => {
    setCaptchaToken("");
    setCaptchaReset((n) => n + 1);
  };
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [restored, setRestored] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  /* Restore a saved draft after mount (kept async so server and client markup match). */
  useEffect(() => {
    const t = setTimeout(() => {
      const draft = readDraft();
      if (draft) {
        setValues(draft);
        if (draft.services.length || draft.message || draft.name) setRestored(true);
      }
      setLoaded(true);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  /* Auto-save the draft so a visitor who leaves can pick up where they stopped. */
  useEffect(() => {
    if (!loaded || status === "success") return;
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ ...values, website: "" }));
    } catch {
      /* storage may be blocked: the form still works without it */
    }
  }, [values, loaded, status]);

  function clearError(k: string) {
    setErrors((e) => {
      if (!e[k]) return e;
      const next = { ...e };
      delete next[k];
      return next;
    });
  }

  function update<K extends keyof Values>(k: K, v: Values[K]) {
    setValues((p) => ({ ...p, [k]: v }));
    clearError(k);
  }

  function toggleService(s: string) {
    setValues((p) => ({
      ...p,
      services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s],
    }));
    clearError("services");
  }

  function addQuick(text: string) {
    setValues((p) =>
      p.message.includes(text) ? p : { ...p, message: `${p.message.trim()} ${text}`.trim().slice(0, MAX_MESSAGE) },
    );
    clearError("message");
  }

  function focusField(key: string) {
    setTimeout(() => document.getElementById(`enq-${key}`)?.focus(), 60);
  }

  function goTo(n: number) {
    setStep(n);
    setMaxStep((m) => Math.max(m, n));
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      headingRef.current?.focus({ preventScroll: true });
    });
  }

  const dispatchPayload = () => ({
    name: values.name,
    phone: values.phone,
    email: values.email,
    service: values.services.join(", "),
    propertyType: values.propertyType,
    area: areaLabel(values.area),
    budget: values.budget,
    timeline: values.timeline,
    callTime: values.callTime,
    location: values.location,
    message: values.message,
    website: values.website,
    turnstileToken: captchaToken,
  });

  const waText = [
    "Hello RA Contractor, I would like to enquire about a project.",
    values.services.length > 0 && `Service: ${values.services.join(", ")}`,
    values.propertyType && `Property: ${values.propertyType}`,
    values.area > 0 && `Area: ${areaLabel(values.area)}`,
    values.budget && `Budget: ${values.budget}`,
    values.timeline && `Start: ${values.timeline}`,
    values.location && `Location: ${values.location}`,
    values.message && `Requirement: ${values.message}`,
    values.name && `Name: ${values.name}`,
    values.phone && `Mobile: +91 ${values.phone}`,
    values.callTime && `Best time to call: ${values.callTime}`,
  ]
    .filter(Boolean)
    .join("\n");
  const waUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(waText)}`;

  async function send() {
    setStatus("sending");
    setErrors({});
    setNotice("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dispatchPayload()),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        try {
          window.localStorage.removeItem(DRAFT_KEY);
        } catch {
          /* ignore */
        }
        setStatus("success");
        router.push("/thank-you");
        return;
      }
      if (data.error === "captcha_failed") {
        setNotice(
          data.reason === "unavailable"
            ? "Verification service is busy. Please try again in a moment, or call or WhatsApp us."
            : "Verification failed. Please tick the human check again and resend."
        );
        resetCaptcha();
        setStatus("error");
        return;
      }
      if (res.status === 400 && data.fields) {
        const mapped: Record<string, string> = {};
        for (const [k, msg] of Object.entries(data.fields as Record<string, string>)) {
          mapped[k === "service" ? "services" : k] = msg;
        }
        const keys = Object.keys(mapped);
        setErrors(mapped);
        setNotice("Please check the highlighted fields.");
        goTo(Math.min(...keys.map((k) => fieldStep[k] ?? TOTAL_STEPS)));
        if (keys[0]) focusField(keys[0]);
      } else if (res.status === 429) {
        setNotice("Too many attempts. Please call or WhatsApp us instead.");
      } else {
        setNotice("We could not send your enquiry right now. Please call or WhatsApp us, we will respond quickly.");
      }
      resetCaptcha();
      setStatus("error");
    } catch {
      setNotice("Network problem. Please call or WhatsApp us instead.");
      resetCaptcha();
      setStatus("error");
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    const stepErrors = validate(step, values);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      setNotice("");
      focusField(Object.keys(stepErrors)[0]);
      return;
    }
    if (step < TOTAL_STEPS) {
      setNotice("");
      goTo(step + 1);
      return;
    }
    for (let s = 1; s < TOTAL_STEPS; s++) {
      const earlier = validate(s, values);
      if (Object.keys(earlier).length > 0) {
        setErrors(earlier);
        goTo(s);
        focusField(Object.keys(earlier)[0]);
        return;
      }
    }
    if (TURNSTILE_SITE_KEY && !captchaToken) {
      setNotice("Please complete the human verification before sending.");
      return;
    }
    void send();
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setNotice("");
    setStep(1);
    setMaxStep(1);
    setRestored(false);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-[var(--color-gold)]/40 bg-white !p-8 text-center">
        <CheckCircle2 className="!mx-auto !mb-4 h-10 w-10 text-[var(--color-gold-dark)]" aria-hidden="true" />
        <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">
          Thank you, we have received your enquiry
        </h3>
        <p className="!mt-3 text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)]">
          We will contact you on {values.phone}. For anything urgent, call {siteConfig.phone}.
        </p>
        <p className={`!mt-3 ${hintClass}`}>Have photos or a floor plan? Send them on WhatsApp to speed up your BOQ.</p>
        <div className="!mt-6 flex flex-wrap justify-center gap-3">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-luxury btn-gold">
            <MessageCircle className="w-4 h-4" /> Continue on WhatsApp
          </a>
          <button type="button" onClick={reset} className="btn-luxury btn-outline-dark">
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`enq-${k}-error`} role="alert" className="!mt-1 text-xs text-red-600">
        {errors[k]}
      </p>
    ) : null;
  const border = (k: string) => (errors[k] ? "border-red-500" : "border-[var(--color-gray-light)]");

  const reviewRows: [string, string, number][] = [
    ["Services", values.services.join(", "), 1],
    ["Property", [values.propertyType, areaLabel(values.area)].filter(Boolean).join(" · "), 2],
    ["Budget", values.budget, 2],
    ["Start", values.timeline, 2],
    ["Location", values.location, 2],
    ["Requirement", values.message, 3],
  ];

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-label="Project enquiry form"
      className="scroll-mt-28 rounded-lg border border-[var(--color-gray-light)] bg-white !p-6 md:!p-8 font-[family-name:var(--font-dm-sans)]"
    >
      {/* Progress */}
      <div className="!mb-3 flex items-center gap-3" aria-hidden="true">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-gray-light)]">
          <div
            className="h-full rounded-full bg-[var(--color-gold)] transition-all duration-500"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
        <span className="whitespace-nowrap text-xs text-[var(--color-gray-medium)]">
          Step {step} of {TOTAL_STEPS}
        </span>
      </div>
      <nav aria-label="Form steps" className="!mb-6 flex flex-wrap gap-2">
        {stepTitles.map((t, i) => {
          const n = i + 1;
          const active = n === step;
          const done = n < step;
          return (
            <button
              key={t}
              type="button"
              disabled={n > maxStep}
              aria-current={active ? "step" : undefined}
              onClick={() => goTo(n)}
              className={`rounded-full border !px-3 !py-1 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/60 disabled:cursor-not-allowed disabled:opacity-50 ${
                active
                  ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 font-semibold text-[var(--color-navy)]"
                  : "border-[var(--color-gray-light)] text-[var(--color-gray-medium)]"
              }`}
            >
              {done ? "✓ " : `${n}. `}
              {t}
            </button>
          );
        })}
      </nav>

      {restored && step === 1 && (
        <p className="!mb-4 rounded-md bg-[var(--color-beige)] !px-3 !py-2 text-xs text-[var(--color-navy)]">
          Welcome back. We saved your earlier answers.{" "}
          <button type="button" onClick={reset} className="underline hover:text-[var(--color-gold-dark)]">
            Start over
          </button>
        </p>
      )}

      {/* STEP 1: services */}
      {step === 1 && (
        <section aria-labelledby="enq-h">
          <h3 id="enq-h" ref={headingRef} tabIndex={-1} className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] outline-none">
            What do you need?
          </h3>
          <p className={`!mt-1 !mb-4 ${hintClass}`}>Choose everything that applies.</p>
          <div
            id="enq-services"
            tabIndex={-1}
            role="group"
            aria-label="Services needed"
            aria-describedby={errors.services ? "enq-services-error" : undefined}
            className="grid grid-cols-2 gap-3 outline-none sm:grid-cols-3"
          >
            {serviceOptions.map((s, i) => {
              const id = `enq-service-${i}`;
              const on = values.services.includes(s);
              return (
                <div key={s} className="relative">
                  <input id={id} type="checkbox" className="peer sr-only" checked={on} onChange={() => toggleService(s)} />
                  <label
                    htmlFor={id}
                    className={`flex min-h-[3.5rem] cursor-pointer items-center justify-between gap-2 rounded-md border !px-3 !py-3 text-sm transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-gold)]/60 ${
                      on
                        ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 font-medium text-[var(--color-navy)]"
                        : `${errors.services ? "border-red-500" : "border-[var(--color-gray-light)]"} bg-white text-[var(--color-black-soft)] hover:border-[var(--color-gold)]`
                    }`}
                  >
                    <span>{s}</span>
                    {on && <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-gold-dark)]" aria-hidden="true" />}
                  </label>
                </div>
              );
            })}
          </div>
          {err("services")}
        </section>
      )}

      {/* STEP 2: project */}
      {step === 2 && (
        <section aria-labelledby="enq-h" className="flex flex-col gap-6">
          <div>
            <h3 id="enq-h" ref={headingRef} tabIndex={-1} className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] outline-none">
              About the project
            </h3>
            <p className={`!mt-1 ${hintClass}`}>Rough answers are fine. We confirm everything at the site visit.</p>
          </div>

          <ChipGroup label="Property type" options={propertyOptions} value={values.propertyType} onChange={(v) => update("propertyType", v)} />

          <div>
            <label htmlFor="enq-area" className={labelClass}>Approximate area</label>
            <div className="flex items-center gap-4">
              <input
                id="enq-area"
                type="range"
                min={0}
                max={MAX_AREA}
                step={100}
                value={values.area}
                onChange={(e) => update("area", Number(e.target.value))}
                aria-valuetext={areaLabel(values.area) || "Not sure"}
                style={{ accentColor: "var(--color-gold)" }}
                className="flex-1"
              />
              <output htmlFor="enq-area" className="min-w-[7.5rem] text-right text-sm font-semibold text-[var(--color-navy)]">
                {areaLabel(values.area) || "Not sure"}
              </output>
            </div>
          </div>

          <ChipGroup label="Budget range (optional)" options={budgetOptions} value={values.budget} onChange={(v) => update("budget", v)} />
          <ChipGroup label="When do you want to start?" options={timelineOptions} value={values.timeline} onChange={(v) => update("timeline", v)} />

          <div>
            <label htmlFor="enq-location" className={labelClass}>Project location</label>
            <input
              id="enq-location"
              name="location"
              list="enq-areas"
              autoComplete="off"
              placeholder="e.g. Kondapur, Hyderabad"
              value={values.location}
              onChange={(e) => update("location", e.target.value)}
              className={`${fieldClass} border-[var(--color-gray-light)]`}
            />
            <datalist id="enq-areas">
              {areaSuggestions.map((a) => <option key={a} value={a} />)}
            </datalist>
          </div>
        </section>
      )}

      {/* STEP 3: requirement */}
      {step === 3 && (
        <section aria-labelledby="enq-h">
          <h3 id="enq-h" ref={headingRef} tabIndex={-1} className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] outline-none">
            Describe your requirement
          </h3>
          <p className={`!mt-1 !mb-4 ${hintClass}`}>The more detail you share, the more accurate your BOQ.</p>
          <label htmlFor="enq-message" className={labelClass}>Your requirement *</label>
          <textarea
            id="enq-message"
            name="message"
            rows={6}
            maxLength={MAX_MESSAGE}
            placeholder="e.g. 3BHK full interiors with modular kitchen and wardrobes, false ceiling in the hall"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${fieldClass} ${border("message")}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "enq-message-error" : undefined}
          />
          <div className="!mt-1 text-right text-xs text-[var(--color-gray-medium)]">
            {values.message.length} / {MAX_MESSAGE}
          </div>
          {err("message")}
          <div className="!mt-3">
            <span className="!mb-2 block text-xs text-[var(--color-gray-medium)]">Tap to add:</span>
            <div className="flex flex-wrap gap-2">
              {quickAdds.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => addQuick(q)}
                  className="rounded-full border border-[var(--color-gray-light)] !px-3 !py-1 text-xs text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/60"
                >
                  + {q.replace(/\.$/, "")}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STEP 4: contact + review */}
      {step === 4 && (
        <section aria-labelledby="enq-h" className="flex flex-col gap-5">
          <div>
            <h3 id="enq-h" ref={headingRef} tabIndex={-1} className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] outline-none">
              How can we reach you?
            </h3>
            <p className={`!mt-1 ${hintClass}`}>Then review your enquiry and send it.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="enq-name" className={labelClass}>Name *</label>
              <input
                id="enq-name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                className={`${fieldClass} ${border("name")}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "enq-name-error" : undefined}
              />
              {err("name")}
            </div>
            <div>
              <label htmlFor="enq-phone" className={labelClass}>Mobile number *</label>
              <div className="flex gap-2">
                <span className="flex items-center rounded-md border border-[var(--color-gray-light)] bg-[var(--color-beige)] !px-3 text-sm font-medium text-[var(--color-navy)]">
                  +91
                </span>
                <input
                  id="enq-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="numeric"
                  placeholder="98765 43210"
                  value={values.phone}
                  onChange={(e) => update("phone", formatPhone(e.target.value))}
                  className={`${fieldClass} ${border("phone")}`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "enq-phone-error" : undefined}
                />
              </div>
              {err("phone")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="enq-email" className={labelClass}>Email (optional)</label>
              <input
                id="enq-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                className={`${fieldClass} ${border("email")}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "enq-email-error" : undefined}
              />
              {err("email")}
            </div>
          </div>

          <ChipGroup label="Best time to call" options={callTimeOptions} value={values.callTime} onChange={(v) => update("callTime", v)} />

          {/* Honeypot: hidden from people, bots fill it */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="enq-website">Website</label>
            <input id="enq-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update("website", e.target.value)} />
          </div>

          {TURNSTILE_SITE_KEY && (
            <Turnstile siteKey={TURNSTILE_SITE_KEY} onToken={setCaptchaToken} resetKey={captchaReset} />
          )}

          <div>
            <h4 className="!mb-2 text-sm font-medium text-[var(--color-navy)]">Your enquiry</h4>
            <dl className="overflow-hidden rounded-md border border-[var(--color-gray-light)] text-sm">
              {reviewRows
                .filter(([, v]) => v)
                .map(([k, v, s]) => (
                  <div key={k} className="flex gap-3 border-b border-[var(--color-gray-light)] !px-3 !py-2.5 last:border-b-0">
                    <dt className="w-24 shrink-0 text-[var(--color-gray-medium)]">{k}</dt>
                    <dd className="min-w-0 flex-1 break-words text-[var(--color-black-soft)]">
                      {v}{" "}
                      <button type="button" onClick={() => goTo(s)} className="text-xs text-[var(--color-gold-dark)] underline">
                        Edit
                      </button>
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </section>
      )}

      {step > 1 && step < TOTAL_STEPS && values.services.length > 0 && (
        <p className="!mt-5 text-xs text-[var(--color-gray-medium)]">Selected: {values.services.join(", ")}</p>
      )}

      <div aria-live="polite" className="!mt-4 min-h-[1.25rem] text-sm text-red-600">{notice}</div>

      <div className="!mt-2 flex flex-wrap items-center gap-3">
        {step > 1 && (
          <button type="button" onClick={() => goTo(step - 1)} className="btn-luxury btn-outline-dark">
            <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
          </button>
        )}
        <button
          key={step < TOTAL_STEPS ? "next" : "send"}
          type="submit"
          disabled={status === "sending"}
          className="btn-luxury btn-gold disabled:opacity-60"
        >
          {step < TOTAL_STEPS ? (
            <>
              Next <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          ) : status === "sending" ? (
            "Sending..."
          ) : (
            "Send Enquiry"
          )}
        </button>
        {step === TOTAL_STEPS ? (
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-luxury btn-outline-dark inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp
          </a>
        ) : (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-gold-dark)] hover:underline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Prefer WhatsApp?
          </a>
        )}
      </div>
    </form>
  );
}
