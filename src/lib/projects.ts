import { galleryItems } from "@/lib/galleryData";

export interface ProjectPage {
  slug: string;
  title: string;
  type: string;
  category: "Residential" | "Commercial";
  location: string;
  summary: string;
  /** What is visible in the photos / work carried out */
  scope: string[];
  /** Service slugs used on this project */
  services: string[];
  /** Gallery ids (real RA Contractor site photos); first is the cover */
  photoIds: number[];
  /** Honest note about the stage the photos show */
  photoNote: string;
}

export const projectPages: ProjectPage[] = [
  {
    slug: "office-ceiling-fit-out-hyderabad",
    title: "Office Ceiling & Interior Fit-out",
    type: "Commercial Fit-out",
    category: "Commercial",
    location: "Hyderabad",
    summary:
      "Feature ceilings for an open-plan office: circular wood-finish ceiling rings with LED lighting, coloured hexagonal acoustic panels over the workstations, and timber slat ceiling sections.",
    scope: [
      "Circular wood-finish ceiling panels with ring LED lighting",
      "Hexagonal acoustic ceiling panels in multiple colours",
      "Timber slat ceiling sections",
      "Ceiling grid, services and lighting coordination",
    ],
    services: ["commercial-interior-contractors-hyderabad", "false-ceiling-hyderabad", "electrical-contractors-hyderabad"],
    photoIds: [24, 28, 30, 32, 35, 34, 29, 37],
    photoNote: "Photos taken on site during and after ceiling installation.",
  },
  {
    slug: "large-hall-commercial-fit-out-hyderabad",
    title: "Large-Hall Commercial Fit-out",
    type: "Commercial / Industrial Fit-out",
    category: "Commercial",
    location: "Hyderabad",
    summary:
      "Interior execution inside a large hall with a high steel roof: partition framing, coloured wall panels and overhead services being built out in stages.",
    scope: [
      "Partition and wall framing across a large floor plate",
      "Coloured wall panel work",
      "Overhead lighting and services coordination",
      "Floor preparation ahead of finishing",
    ],
    services: ["turnkey-construction-hyderabad", "commercial-interior-contractors-hyderabad", "civil-contractors-hyderabad"],
    photoIds: [11, 12, 13],
    photoNote: "Photos show work in progress during execution.",
  },
  {
    slug: "false-ceiling-framework-wiring-hyderabad",
    title: "False Ceiling Framework, Wiring & Wood-Panel Ceilings",
    type: "Ceiling & Electrical",
    category: "Residential",
    location: "Hyderabad",
    summary:
      "Metal ceiling framework with concealed wiring laid before boards go up, followed by wood-finish panel ceilings with border detailing in apartment rooms.",
    scope: [
      "Metal grid framework for gypsum ceilings",
      "Concealed wiring run above the ceiling line",
      "Wood-finish panel ceiling with border detail",
      "Plaster and surface preparation",
    ],
    services: ["false-ceiling-hyderabad", "electrical-contractors-hyderabad"],
    photoIds: [40, 39, 41, 42, 8, 9, 10, 7, 1, 2],
    photoNote: "Photos taken during framing, wiring and panel installation.",
  },
  {
    slug: "apartment-living-area-interiors-hyderabad",
    title: "Apartment Interiors: False Ceiling, Wall Paneling & Painting",
    type: "Home Interiors",
    category: "Residential",
    location: "Hyderabad",
    summary:
      "Living and dining areas finished with a recessed false ceiling, painted wall-panel mouldings and a feature TV wall with an arched yellow border and side niches.",
    scope: [
      "False ceiling with recessed lighting",
      "Painted wall-panel mouldings",
      "Feature TV wall with arched border and side niches",
      "Wall painting and finishing",
    ],
    services: ["luxury-interior-design-hyderabad", "false-ceiling-hyderabad", "painting-contractors-hyderabad"],
    photoIds: [49, 51, 17, 52, 44],
    photoNote: "Photos taken at the finishing stage, before furnishing.",
  },
  {
    slug: "apartment-wardrobes-study-units-hyderabad",
    title: "Apartment Wardrobes & Study Units",
    type: "Carpentry & Joinery",
    category: "Residential",
    location: "Hyderabad",
    summary:
      "Built-in wardrobes with loft storage, a study desk with overhead cabinets, and a patterned-shutter wardrobe fitted to the room dimensions.",
    scope: [
      "Floor-to-ceiling wardrobes with loft cabinets",
      "Study desk with overhead storage",
      "Patterned-panel shutters",
      "Open display shelving unit",
    ],
    services: ["carpentry-wardrobes-hyderabad", "luxury-interior-design-hyderabad"],
    photoIds: [47, 43, 21, 22, 45, 54],
    photoNote: "Photos taken after joinery installation, before furnishing.",
  },
];

export const getProject = (slug: string) => projectPages.find((p) => p.slug === slug);

export function projectPhotos(p: ProjectPage) {
  return p.photoIds
    .map((id) => galleryItems.find((g) => g.id === id))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
}

export const projectCover = (p: ProjectPage) => projectPhotos(p)[0]?.src ?? "/images/gallery/site-execution-49.jpg";
