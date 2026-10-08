import { projectPages } from "./projects";

export const areas = ["Jubilee Hills", "Banjara Hills", "Gachibowli", "Kondapur", "Madhapur"].map((name) => ({
  slug: `${name.toLowerCase().replace(/ /g, "-")}-hyderabad`,
  name,
  projects: projectPages.filter((p) => p.location.startsWith(name)),
}));

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
