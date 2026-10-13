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
    const legacy = [{ source: "/services/luxury-interior-design-hyderabad", destination: "/services/home-interior-design-hyderabad", permanent: true }];
    const projects = ["moldtech-technologies", "moldtech-packaging", "prithuvi-toyota-showroom", "deloitte-delhi"].map((slug) => ({
      source: `/projects/${slug}`,
      destination: "/projects",
      permanent: true,
    }));
    // SEO keyword URLs → area landing pages (301 permanent)
    const seoKeywordRedirects = [
      { source: "/false-ceiling-hyderabad",                         destination: "/areas",                              permanent: true },
      { source: "/false-ceiling-contractors-hyderabad",             destination: "/areas",                              permanent: true },
      { source: "/false-ceiling-contractors-jubilee-hills",         destination: "/areas/jubilee-hills-hyderabad",      permanent: true },
      { source: "/false-ceiling-jubilee-hills",                     destination: "/areas/jubilee-hills-hyderabad",      permanent: true },
      { source: "/false-ceiling-services-gachibowli",               destination: "/areas/gachibowli-hyderabad",         permanent: true },
      { source: "/false-ceiling-gachibowli",                        destination: "/areas/gachibowli-hyderabad",         permanent: true },
      { source: "/interior-contractors-banjara-hills",              destination: "/areas/banjara-hills-hyderabad",      permanent: true },
      { source: "/false-ceiling-banjara-hills",                     destination: "/areas/banjara-hills-hyderabad",      permanent: true },
      { source: "/luxury-home-renovation-madhapur",                 destination: "/areas/madhapur-hyderabad",           permanent: true },
      { source: "/false-ceiling-madhapur",                          destination: "/areas/madhapur-hyderabad",           permanent: true },
      { source: "/civil-interior-contractors-kondapur",             destination: "/areas/kondapur-hyderabad",           permanent: true },
      { source: "/false-ceiling-kondapur",                          destination: "/areas/kondapur-hyderabad",           permanent: true },
      { source: "/false-ceiling-secunderabad",                      destination: "/areas/secunderabad-hyderabad",       permanent: true },
      { source: "/false-ceiling-miyapur",                           destination: "/areas/miyapur-hyderabad",            permanent: true },
      { source: "/false-ceiling-kompally",                          destination: "/areas/kompally-hyderabad",           permanent: true },
      { source: "/false-ceiling-film-nagar",                        destination: "/areas/film-nagar-hyderabad",         permanent: true },
      { source: "/false-ceiling-kukatpally",                        destination: "/areas/kukatpally-hyderabad",         permanent: true },
    ];
    return [...legacy, ...projects, ...seoKeywordRedirects];
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
