import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mdbush.vercel.app" }],
        destination: "https://solokit.cloud/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
