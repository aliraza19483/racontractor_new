import { NextResponse } from "next/server";
import { enquirySchema, sendEnquiry } from "@/lib/enquiry";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const ALLOWED_HOSTS = new Set(["racontractor.in", "www.racontractor.in", "localhost:3000"]);

// Best-effort in-memory limiter (per server instance). Turnstile is the real bot defence;
// for a hard limit across serverless instances, swap this for Upstash/Redis.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  // keep the map small
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

function clientIp(req: Request) {
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

/** Only accept browser posts that come from our own site. */
function sameSite(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const host = new URL(origin).host;
    return ALLOWED_HOSTS.has(host) || host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!sameSite(req)) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const ip = clientIp(req);
  if (limited(ip)) return NextResponse.json({ error: "too_many_requests" }, { status: 429 });

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const i of parsed.error.issues) fields[String(i.path[0])] = i.message;
    return NextResponse.json({ error: "validation", fields }, { status: 400 });
  }

  // Honeypot: pretend success to bots, send nothing
  if (parsed.data.website) return NextResponse.json({ ok: true });

  // Cloudflare Turnstile ("verify you are human")
  const human = await verifyTurnstile(parsed.data.turnstileToken, ip);
  if (!human.ok) {
    const status = human.reason === "unavailable" ? 503 : 400;
    return NextResponse.json({ error: "captcha_failed", reason: human.reason }, { status });
  }

  const { turnstileToken: _token, website: _hp, ...enquiry } = parsed.data;
  void _token;
  void _hp;
  const result = await sendEnquiry({ ...enquiry, website: "", turnstileToken: "" });
  if (!result.ok) {
    console.error("[contact] enquiry not delivered:", result.reason);
    return NextResponse.json({ error: result.reason }, { status: result.reason === "not_configured" ? 503 : 502 });
  }
  return NextResponse.json({ ok: true });
}
