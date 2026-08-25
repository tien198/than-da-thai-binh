import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/gioi-thieu",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/about",
      },
    ];
  },
};

export default nextConfig;
