import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["moldtech-technologies", "moldtech-packaging", "prithuvi-toyota-showroom", "deloitte-delhi"].map((slug) => ({
      source: `/projects/${slug}`,
      destination: "/projects",
      permanent: true,
    }));
  },
  allowedDevOrigins: ["10.111.112.230"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
}

export default nextConfig;
