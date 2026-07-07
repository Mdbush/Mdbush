import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // This is a content-heavy site: ~400 hand-authored blog articles written
      // as JSX prose full of apostrophes and quotes ("don't", curly quotes, etc.).
      // React renders raw entities correctly, so requiring &apos;/&quot; escapes
      // here adds noise to the source with no rendered difference. Disabled
      // deliberately for this prose-first codebase.
      "react/no-unescaped-entities": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
