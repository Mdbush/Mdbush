import type { MetadataRoute } from "next";

// Web app manifest — makes SoloKit an installable PWA baseline and gives the
// browser/OS the right name, colours, and icons. Next auto-links this at
// /manifest.webmanifest. The 512 icon is the generated app/icon route.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SoloKit — Tools for UAE Freelancers",
    short_name: "SoloKit",
    description:
      "Notion templates, AI prompt packs, and SOPs for freelancers and solopreneurs in the UAE and GCC.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    lang: "en",
    categories: ["business", "productivity"],
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
