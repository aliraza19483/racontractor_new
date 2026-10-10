import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s-]/g, ""))
    .refine((v) => /^(\+?91)?[6-9]\d{9}$/.test(v), "Enter a valid 10-digit mobile number"),
  email: z
    .string()
    .trim()
    .max(120)
    .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Enter a valid email")
    .optional()
    .default(""),
  service: z.string().trim().max(80).optional().default(""),
  location: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(5, "Please describe your requirement").max(1500),
  /** honeypot, must stay empty */
  website: z.string().optional().default(""),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export function buildEmail(e: Enquiry) {
  const lines = [
    `Name: ${e.name}`,
    `Phone: ${e.phone}`,
    `Email: ${e.email || "-"}`,
    `Service: ${e.service || "-"}`,
    `Location: ${e.location || "-"}`,
    "",
    e.message,
  ];
  return {
    subject: `New website enquiry from ${e.name}${e.service ? ` (${e.service})` : ""}`,
    text: lines.join("\n"),
  };
}

export type SendResult = { ok: true } | { ok: false; reason: "not_configured" | "send_failed" };

/** Sends the enquiry by email using Resend's REST API (no extra dependency). */
export async function sendEnquiry(e: Enquiry, env: Record<string, string | undefined> = process.env): Promise<SendResult> {
  const key = env.RESEND_API_KEY;
  const to = env.CONTACT_TO_EMAIL;
  if (!key || !to) return { ok: false, reason: "not_configured" };
  const from = env.CONTACT_FROM_EMAIL || "RA Contractor Website <onboarding@resend.dev>";
  const { subject, text } = buildEmail(e);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        subject,
        text,
        ...(e.email ? { reply_to: e.email } : {}),
      }),
    });
    return res.ok ? { ok: true } : { ok: false, reason: "send_failed" };
  } catch {
    return { ok: false, reason: "send_failed" };
  }
}
