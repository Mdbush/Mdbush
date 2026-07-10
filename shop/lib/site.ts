/**
 * Canonical site origin.
 *
 * Resolves to `NEXT_PUBLIC_SITE_URL` when it carries an `http(s)` scheme,
 * otherwise falls back to the production origin. Centralizing this here keeps a
 * scheme-less or missing env var from leaking a `localhost` (or otherwise
 * invalid) origin into canonical URLs, sitemaps, feeds, JSON-LD, and emails.
 */
export const SITE_URL: string = resolveSiteUrl();

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  return raw && raw.startsWith("http") ? raw : "https://solokit.cloud";
}
