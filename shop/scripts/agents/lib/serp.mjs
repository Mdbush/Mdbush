/**
 * Optional SERP (search-demand) provider for the keyword-gap analysis.
 *
 * The competitor-intel agent works fully without this — it falls back to
 * Anthropic's built-in web_search tool and the model's own knowledge. When a
 * SERP key is configured it grounds the keyword-gap section in real Google
 * signals for the UAE market (related searches + "people also ask").
 *
 * Provider: Serper.dev (set SERP_API_KEY). It returns null when no key is set,
 * so the agent degrades gracefully. Easy to swap for DataForSEO/SerpApi.
 */

export function hasSerpProvider() {
  return Boolean(process.env.SERP_API_KEY);
}

/**
 * Fetch real search-demand signals for a single query, localised to the UAE.
 * @param {string} query
 * @returns {Promise<{query: string, related: string[], questions: string[]}|null>}
 *          null when unavailable or the request fails.
 */
export async function fetchKeywordData(query) {
  if (!hasSerpProvider()) return null;

  try {
    const res = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-API-KEY": process.env.SERP_API_KEY,
      },
      // gl=ae → United Arab Emirates; hl=en → English results.
      body: JSON.stringify({ q: query, gl: "ae", hl: "en", num: 10 }),
    });

    if (!res.ok) {
      console.error(`SERP API ${res.status}: ${(await res.text()).slice(0, 160)}`);
      return null;
    }

    const data = await res.json();
    const related = (data.relatedSearches || [])
      .map((r) => r.query)
      .filter(Boolean);
    const questions = (data.peopleAlsoAsk || [])
      .map((p) => p.question)
      .filter(Boolean);
    return { query, related, questions };
  } catch (err) {
    console.error("SERP fetch failed:", err.message || err);
    return null;
  }
}

/**
 * Fetch and aggregate demand signals across several seed queries.
 * @param {string[]} queries
 * @returns {Promise<Array<{query: string, related: string[], questions: string[]}>>}
 *          empty array when no provider is configured.
 */
export async function fetchKeywordSignals(queries) {
  if (!hasSerpProvider()) return [];
  const out = [];
  for (const q of queries) {
    const data = await fetchKeywordData(q);
    if (data && (data.related.length || data.questions.length)) out.push(data);
  }
  return out;
}
