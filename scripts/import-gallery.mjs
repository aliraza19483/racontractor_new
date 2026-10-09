import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'public', 'Previous Image');
const destDir = path.join(process.cwd(), 'public', 'images', 'gallery');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));

console.log('Total image files found:', files.length);

const metadata = files.map((file, idx) => {
  const ext = path.extname(file);
  const newName = `site-execution-${String(idx + 1).padStart(2, '0')}${ext.toLowerCase()}`;
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, newName);
  
  fs.copyFileSync(srcPath, destPath);
  
  let category = 'commercial';
  let title = 'Corporate & Commercial Fit-out';
  let location = 'Hyderabad';
  
  if (file.includes('WA0013') || file.includes('WA0015') || file.includes('WA0017')) {
    category = 'industrial';
    title = 'Industrial Facility & Civil Execution';
  } else if (file.startsWith('motion_photo')) {
    category = 'residential';
    title = 'Luxury Residential & Joinery Execution';
  } else if (file.includes('183101') || file.includes('WA0023') || file.includes('WA0024')) {
    category = 'ceiling-electrical';
    title = 'Grid Ceiling & MEP Installation';
  } else if (
    file.includes('WA0014') ||
    file.includes('WA0016') ||
    file.includes('WA0025') ||
    file.includes('WA0027') ||
    file.includes('WA0028') ||
    file.includes('WA0029') ||
    file.includes('WA0030')
  ) {
    category = 'commercial';
    title = 'Modern Acoustic Ceiling & Office Fit-out';
  }
  
  return {
    id: idx + 1,
    src: `/images/gallery/${newName}`,
    originalName: file,
    category,
    title,
    location,
  };
});

const outDataPath = path.join(process.cwd(), 'src', 'lib', 'galleryData.ts');
const fileContent = `export interface GalleryItem {
  id: number;
  src: string;
  category: "commercial" | "residential" | "industrial" | "ceiling-electrical";
  title: string;
  location: string;
}

export const galleryCategories = [
  { label: "All Real Work (${metadata.length})", value: "all" },
  { label: "Commercial Fit-outs", value: "commercial" },
  { label: "Industrial & Civil", value: "industrial" },
  { label: "Ceiling & MEP", value: "ceiling-electrical" },
  { label: "Residential & Joinery", value: "residential" },
];

export const galleryItems: GalleryItem[] = ${JSON.stringify(metadata, null, 2)};
`;

fs.writeFileSync(outDataPath, fileContent, 'utf-8');
console.log(`Successfully copied ${metadata.length} images to public/images/gallery and generated src/lib/galleryData.ts`);
