import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projectPages } from "@/lib/projects";
import { areas } from "@/lib/areas";
import { posts } from "@/lib/blog";

const BASE = "https://racontractor.in";
// Update this date when page content really changes (not on every build).
const UPDATED = new Date("2026-10-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = UPDATED;
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({ url: `${BASE}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projectPages.map((p) => ({ url: `${BASE}/projects/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${BASE}/areas`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ...areas.map((a) => ({ url: `${BASE}/areas/${a.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((b) => ({ url: `${BASE}/blog/${b.slug}`, lastModified: new Date(b.date), changeFrequency: "monthly" as const, priority: 0.5 })),
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
