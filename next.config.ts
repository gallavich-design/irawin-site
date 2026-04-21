import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output for Vercel (default — no need to set explicitly)
  // Images from any source
  images: {
    remotePatterns: [],
  },
  // Strict mode for better React debugging
  reactStrictMode: true,
};

export default nextConfig;
