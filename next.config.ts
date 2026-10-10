import type { NextConfig } from "next";

const securityHeaders = [
  // Always use HTTPS for one year after the first visit
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  // Stop browsers guessing file types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Stop other sites from putting ours inside a frame (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
