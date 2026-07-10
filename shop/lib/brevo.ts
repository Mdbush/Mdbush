/**
 * Thin wrappers over the Brevo (Sendinblue) HTTP API.
 *
 * Both `/api/subscribe` and `/api/webhook` add contacts to a list and send a
 * transactional email; the endpoint URLs, auth headers, and sender resolution
 * live here so those routes only describe *what* they send. The transactional
 * email HTML itself stays inline in each route (house style).
 *
 * These return the raw `fetch` promise so callers keep full control over
 * response handling (status inspection, `.catch`, graceful degradation).
 */

const BREVO_API_BASE = "https://api.brevo.com/v3";

/** From-address for all transactional email. */
export function getBrevoSenderEmail(): string {
  return process.env.BREVO_SENDER_EMAIL ?? "hello@solokit.cloud";
}

function brevoHeaders(apiKey: string): HeadersInit {
  return {
    "api-key": apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export type BrevoContact = {
  email: string;
  listIds: number[];
  attributes?: Record<string, string>;
  /** Update the contact if it already exists. Defaults to `true`. */
  updateEnabled?: boolean;
};

/** Create/update a contact and add it to the given Brevo list(s). */
export function addBrevoContact(apiKey: string, contact: BrevoContact): Promise<Response> {
  return fetch(`${BREVO_API_BASE}/contacts`, {
    method: "POST",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify({ updateEnabled: true, ...contact }),
  });
}

export type BrevoEmail = {
  /** Display name shown as the sender (the address comes from env). */
  senderName: string;
  to: string;
  subject: string;
  htmlContent: string;
};

/** Send a transactional email via Brevo's SMTP endpoint. */
export function sendBrevoEmail(apiKey: string, email: BrevoEmail): Promise<Response> {
  return fetch(`${BREVO_API_BASE}/smtp/email`, {
    method: "POST",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify({
      sender: { name: email.senderName, email: getBrevoSenderEmail() },
      to: [{ email: email.to }],
      subject: email.subject,
      htmlContent: email.htmlContent,
    }),
  });
}
