import { NextResponse } from "next/server";
import { enquirySchema, sendEnquiry } from "@/lib/enquiry";

export const runtime = "nodejs";

// Best-effort in-memory limiter (per server instance)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "too_many_requests" }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
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

  const result = await sendEnquiry(parsed.data);
  if (!result.ok) {
    console.error("[contact] enquiry not delivered:", result.reason);
    return NextResponse.json({ error: result.reason }, { status: result.reason === "not_configured" ? 503 : 502 });
  }
  return NextResponse.json({ ok: true });
}
