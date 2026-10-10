export interface GalleryItem {
  id: number;
  src: string;
  originalName?: string;
  category: "commercial" | "residential" | "industrial" | "ceiling-electrical";
  title: string;
  location: string;
}

export const galleryCategories = [
  { label: "All Photos", value: "all" },
  { label: "Commercial Fit-outs", value: "commercial" },
  { label: "Industrial & Civil", value: "industrial" },
  { label: "Ceiling & MEP", value: "ceiling-electrical" },
  { label: "Residential & Joinery", value: "residential" },
];

export const galleryItems: GalleryItem[] = [
  {
    "id": 1,
    "src": "/images/gallery/site-execution-01.jpg",
    "originalName": "IMG-20260803-WA0015.jpg",
    "category": "industrial",
    "title": "Industrial Facility & Civil Execution",
    "location": "Hyderabad"
  },
  {
    "id": 2,
    "src": "/images/gallery/site-execution-02.jpg",
    "originalName": "IMG-20260803-WA0017.jpg",
    "category": "industrial",
    "title": "Industrial Facility & Civil Execution",
    "location": "Hyderabad"
  },
  {
    "id": 3,
    "src": "/images/gallery/site-execution-03.jpg",
    "originalName": "IMG-20260804-WA0016.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 4,
    "src": "/images/gallery/site-execution-04.jpg",
    "originalName": "IMG-20260804-WA0017.jpg",
    "category": "industrial",
    "title": "Industrial Facility & Civil Execution",
    "location": "Hyderabad"
  },
  {
    "id": 5,
    "src": "/images/gallery/site-execution-05.jpg",
    "originalName": "IMG-20260804-WA0018.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 6,
    "src": "/images/gallery/site-execution-06.jpg",
    "originalName": "IMG-20260804-WA0019.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 7,
    "src": "/images/gallery/site-execution-07.jpg",
    "originalName": "IMG-20260805-WA0023.jpg",
    "category": "ceiling-electrical",
    "title": "Grid Ceiling & MEP Installation",
    "location": "Hyderabad"
  },
  {
    "id": 8,
    "src": "/images/gallery/site-execution-08.jpg",
    "originalName": "IMG-20260806-WA0023.jpg",
    "category": "ceiling-electrical",
    "title": "Grid Ceiling & MEP Installation",
    "location": "Hyderabad"
  },
  {
    "id": 9,
    "src": "/images/gallery/site-execution-09.jpg",
    "originalName": "IMG-20260806-WA0024.jpg",
    "category": "ceiling-electrical",
    "title": "Grid Ceiling & MEP Installation",
    "location": "Hyderabad"
  },
  {
    "id": 10,
    "src": "/images/gallery/site-execution-10.jpg",
    "originalName": "IMG-20260806-WA0025.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 11,
    "src": "/images/gallery/site-execution-11.jpg",
    "originalName": "IMG-20260809-WA0013.jpg",
    "category": "industrial",
    "title": "Industrial Facility & Civil Execution",
    "location": "Hyderabad"
  },
  {
    "id": 12,
    "src": "/images/gallery/site-execution-12.jpg",
    "originalName": "IMG-20260809-WA0015.jpg",
    "category": "industrial",
    "title": "Industrial Facility & Civil Execution",
    "location": "Hyderabad"
  },
  {
    "id": 13,
    "src": "/images/gallery/site-execution-13.jpg",
    "originalName": "IMG-20260809-WA0017.jpg",
    "category": "industrial",
    "title": "Industrial Facility & Civil Execution",
    "location": "Hyderabad"
  },
  {
    "id": 14,
    "src": "/images/gallery/site-execution-14.jpg",
    "originalName": "IMG-20260809-WA0020.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 15,
    "src": "/images/gallery/site-execution-15.jpg",
    "originalName": "IMG-20260823-WA0030.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 16,
    "src": "/images/gallery/site-execution-16.jpg",
    "originalName": "IMG-20260823-WA0031.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 17,
    "src": "/images/gallery/site-execution-17.jpg",
    "originalName": "IMG-20260823-WA0032.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 18,
    "src": "/images/gallery/site-execution-18.jpg",
    "originalName": "IMG-20260823-WA0033.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 19,
    "src": "/images/gallery/site-execution-19.jpg",
    "originalName": "IMG-20260823-WA0034.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 20,
    "src": "/images/gallery/site-execution-20.jpg",
    "originalName": "IMG-20260823-WA0038.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 21,
    "src": "/images/gallery/site-execution-21.jpg",
    "originalName": "IMG-20260823-WA0040.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 22,
    "src": "/images/gallery/site-execution-22.jpg",
    "originalName": "IMG-20260823-WA0041.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 23,
    "src": "/images/gallery/site-execution-23.jpg",
    "originalName": "IMG-20260823-WA0043.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 24,
    "src": "/images/gallery/site-execution-24.jpg",
    "originalName": "IMG-20260825-WA0014.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 25,
    "src": "/images/gallery/site-execution-25.jpg",
    "originalName": "IMG-20260825-WA0016.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 26,
    "src": "/images/gallery/site-execution-26.jpg",
    "originalName": "IMG-20260825-WA0017.jpg",
    "category": "industrial",
    "title": "Industrial Facility & Civil Execution",
    "location": "Hyderabad"
  },
  {
    "id": 27,
    "src": "/images/gallery/site-execution-27.jpg",
    "originalName": "IMG-20260825-WA0018.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 28,
    "src": "/images/gallery/site-execution-28.jpg",
    "originalName": "IMG-20260825-WA0021.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 29,
    "src": "/images/gallery/site-execution-29.jpg",
    "originalName": "IMG-20260825-WA0022.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 30,
    "src": "/images/gallery/site-execution-30.jpg",
    "originalName": "IMG-20260825-WA0023.jpg",
    "category": "ceiling-electrical",
    "title": "Grid Ceiling & MEP Installation",
    "location": "Hyderabad"
  },
  {
    "id": 31,
    "src": "/images/gallery/site-execution-31.jpg",
    "originalName": "IMG-20260825-WA0024.jpg",
    "category": "ceiling-electrical",
    "title": "Grid Ceiling & MEP Installation",
    "location": "Hyderabad"
  },
  {
    "id": 32,
    "src": "/images/gallery/site-execution-32.jpg",
    "originalName": "IMG-20260825-WA0025.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 33,
    "src": "/images/gallery/site-execution-33.jpg",
    "originalName": "IMG-20260825-WA0026.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 34,
    "src": "/images/gallery/site-execution-34.jpg",
    "originalName": "IMG-20260825-WA0027.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 35,
    "src": "/images/gallery/site-execution-35.jpg",
    "originalName": "IMG-20260825-WA0028.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 36,
    "src": "/images/gallery/site-execution-36.jpg",
    "originalName": "IMG-20260825-WA0029.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 37,
    "src": "/images/gallery/site-execution-37.jpg",
    "originalName": "IMG-20260825-WA0030.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 38,
    "src": "/images/gallery/site-execution-38.jpg",
    "originalName": "IMG-20260825-WA0031.jpg",
    "category": "commercial",
    "title": "Corporate & Commercial Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 39,
    "src": "/images/gallery/site-execution-39.jpg",
    "originalName": "IMG-20260827-WA0027.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 40,
    "src": "/images/gallery/site-execution-40.jpg",
    "originalName": "IMG-20260827-WA0028.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 41,
    "src": "/images/gallery/site-execution-41.jpg",
    "originalName": "IMG-20260827-WA0029.jpg",
    "category": "commercial",
    "title": "Modern Acoustic Ceiling & Office Fit-out",
    "location": "Hyderabad"
  },
  {
    "id": 42,
    "src": "/images/gallery/site-execution-42.jpg",
    "originalName": "IMG_20260822_183101.jpg",
    "category": "ceiling-electrical",
    "title": "Grid Ceiling & MEP Installation",
    "location": "Hyderabad"
  },
  {
    "id": 43,
    "src": "/images/gallery/site-execution-43.jpg",
    "originalName": "motion_photo_1682780251845084032.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 44,
    "src": "/images/gallery/site-execution-44.jpg",
    "originalName": "motion_photo_3277091265702540791.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 45,
    "src": "/images/gallery/site-execution-45.jpg",
    "originalName": "motion_photo_3924042550634220787.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 46,
    "src": "/images/gallery/site-execution-46.jpg",
    "originalName": "motion_photo_3986099951344741429.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 47,
    "src": "/images/gallery/site-execution-47.jpg",
    "originalName": "motion_photo_558133638758147672.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 48,
    "src": "/images/gallery/site-execution-48.jpg",
    "originalName": "motion_photo_5855893551264333679.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 49,
    "src": "/images/gallery/site-execution-49.jpg",
    "originalName": "motion_photo_6764277398034721249.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 50,
    "src": "/images/gallery/site-execution-50.jpg",
    "originalName": "motion_photo_7368218142857732350.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 51,
    "src": "/images/gallery/site-execution-51.jpg",
    "originalName": "motion_photo_8114888585833163382.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 52,
    "src": "/images/gallery/site-execution-52.jpg",
    "originalName": "motion_photo_8850790221455195579.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 53,
    "src": "/images/gallery/site-execution-53.jpg",
    "originalName": "motion_photo_9123431118866765674.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  },
  {
    "id": 54,
    "src": "/images/gallery/site-execution-54.jpg",
    "originalName": "motion_photo_9215741582972401696.jpg",
    "category": "residential",
    "title": "Residential Interior & Joinery Work",
    "location": "Hyderabad"
  }
];

// Excluded from the public gallery: photos that look like stock/rendered
// images (3-6) and exact duplicates of other photos. They stay in
// galleryItems so older id references keep resolving.
const EXCLUDED_IDS = new Set([3, 4, 5, 6, 14, 16, 18, 19, 20, 23, 36, 46, 48, 50, 53]);
export const publicGalleryItems: GalleryItem[] = galleryItems.filter((g) => !EXCLUDED_IDS.has(g.id));
