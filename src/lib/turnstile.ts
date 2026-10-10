/**
 * Cloudflare Turnstile server-side verification.
 * Docs: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 *
 * Behaviour:
 *  - TURNSTILE_SECRET_KEY set     -> the token is REQUIRED and checked with Cloudflare.
 *  - TURNSTILE_SECRET_KEY missing -> check is skipped (honeypot + rate limit still apply),
 *                                    so the form keeps working until you add your keys.
 */
export type TurnstileResult = { ok: true } | { ok: false; reason: "missing_token" | "failed" | "unavailable" };

export function turnstileEnabled(env: Record<string, string | undefined> = process.env) {
  return Boolean(env.TURNSTILE_SECRET_KEY);
}

export async function verifyTurnstile(
  token: string | undefined,
  ip: string | undefined,
  env: Record<string, string | undefined> = process.env
): Promise<TurnstileResult> {
  const secret = env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true };
  if (!token) return { ok: false, reason: "missing_token" };

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return { ok: false, reason: "unavailable" };
    const data = (await res.json()) as { success?: boolean };
    return data.success ? { ok: true } : { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "unavailable" };
  }
}
