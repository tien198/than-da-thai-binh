import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/gioi-thieu",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/san-pham",
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
      {
        source: "/san-pham",
        destination: "/products",
      },
    ];
  },
};

export default nextConfig;
