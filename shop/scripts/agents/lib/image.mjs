/**
 * Optional AI image generation for social posts.
 *
 * Branded text cards are always available via the site's /api/social-card route
 * (no key, no cost). This helper adds *optional* AI-generated illustrations when
 * an image-provider key is configured. It is a no-op (returns null) when no key
 * is set, so the social agent works fully without it.
 *
 * Provider: OpenAI Images (set OPENAI_API_KEY). Easy to extend to others.
 */
import fs from "fs";

export function hasImageProvider() {
  return Boolean(process.env.OPENAI_API_KEY);
}

/**
 * Generate an AI image for a prompt and save it as PNG.
 * @param {string} prompt
 * @param {string} outPath  where to write the PNG
 * @returns {Promise<string|null>} the path written, or null if unavailable/failed
 */
export async function generateAiImage(prompt, outPath) {
  if (!hasImageProvider()) return null;

  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.IMAGE_MODEL || "gpt-image-1",
        prompt: `${prompt}\n\nStyle: clean, modern, premium brand illustration. Deep navy background, emerald green accents, no text, no logos.`,
        size: "1024x1024",
        n: 1,
      }),
    });

    if (!res.ok) {
      console.error(`Image API ${res.status}: ${(await res.text()).slice(0, 200)}`);
      return null;
    }

    const data = await res.json();
    const b64 = data?.data?.[0]?.b64_json;
    if (!b64) return null;
    fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
    return outPath;
  } catch (err) {
    console.error("AI image generation failed:", err.message || err);
    return null;
  }
}
