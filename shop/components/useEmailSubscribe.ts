import { useState, type FormEvent } from "react";

export type SubscribeStatus = "idle" | "loading" | "success" | "error";

/**
 * Shared email opt-in logic for the free-prompts capture forms.
 *
 * Owns the email field + request status and POSTs to `/api/subscribe`. Consumers
 * ("use client" components) render the markup; this only handles the submit flow.
 */
export function useEmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return { email, setEmail, status, handleSubmit };
}
