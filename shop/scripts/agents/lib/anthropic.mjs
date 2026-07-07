/**
 * Minimal Anthropic Messages API client for the growth-engine agents.
 *
 * Uses the built-in global `fetch` (Node 18+) — no SDK dependency, so the
 * agent scripts add zero packages to the app. Reads ANTHROPIC_API_KEY from the
 * environment (a GitHub Actions secret in CI).
 *
 * Docs: https://platform.claude.com/docs/en/api  (Messages API + structured outputs)
 */

const API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";

// Default to the most capable model; override with AGENT_MODEL if desired.
export const DEFAULT_MODEL = process.env.AGENT_MODEL || "claude-opus-4-8";

export function hasApiKey() {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

/**
 * Call Claude and return the first text block as a string.
 *
 * @param {object} opts
 * @param {string} opts.system   System prompt.
 * @param {string} opts.user     User message.
 * @param {object} [opts.schema] JSON Schema. When provided, the response is
 *                               constrained to it and the parsed object is returned.
 * @param {number} [opts.maxTokens=8000]
 * @param {string} [opts.model]
 * @param {Array}  [opts.tools]  Server-tool definitions (e.g. web search).
 * @returns {Promise<string|object>} Parsed object when `schema` is set, else text.
 */
export async function callClaude({
  system,
  user,
  schema,
  maxTokens = 8000,
  model = DEFAULT_MODEL,
  tools,
} = {}) {
  if (!hasApiKey()) {
    throw new Error("ANTHROPIC_API_KEY is not set");
  }

  const body = {
    model,
    max_tokens: maxTokens,
    messages: [{ role: "user", content: user }],
  };
  if (system) body.system = system;
  if (tools) body.tools = tools;
  if (schema) {
    body.output_config = { format: { type: "json_schema", schema } };
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": ANTHROPIC_VERSION,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Anthropic API ${res.status}: ${detail.slice(0, 500)}`);
  }

  const data = await res.json();

  if (data.stop_reason === "refusal") {
    throw new Error("Request was declined by the model's safety classifier");
  }

  const text = (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  if (!schema) return text;

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Model did not return valid JSON:\n${text.slice(0, 500)}`);
  }
}
