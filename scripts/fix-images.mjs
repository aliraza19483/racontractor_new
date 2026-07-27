import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.join(__dirname, '../public/images/gallery');
const servicesDir = path.join(__dirname, '../public/images/services');
const portfolioDir = path.join(__dirname, '../public/images/portfolio');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Map each section to its existing local image fallback
const categoryToSource = {
  "living-room": path.join(servicesDir, "living-room.jpg"),
  "dining-room": path.join(servicesDir, "dining.jpg"),
  "bedroom": path.join(servicesDir, "bedroom.jpg"),
  "wardrobes": path.join(servicesDir, "wardrobe.jpg"),
  "luxury-bathroom": path.join(servicesDir, "bathroom.jpg"),
  "balcony": path.join(servicesDir, "balcony.jpg"),
  "modular-kitchen": path.join(servicesDir, "kitchen.jpg"),
  "home-office": path.join(servicesDir, "office.jpg"),
  "retail-shops": path.join(servicesDir, "retail.jpg"),
  "cafe-interior": path.join(servicesDir, "cafe.jpg"),
  "restaurants": path.join(servicesDir, "restaurant.jpg"),
  "hotels": path.join(servicesDir, "hotel.jpg"),
  "clinics": path.join(servicesDir, "clinic.jpg"),
  "salons": path.join(servicesDir, "salon.jpg")
};

const projectToSource = {
  "emerald-residence": path.join(portfolioDir, "project-1.jpg"),
  "skyline-corporate": path.join(portfolioDir, "project-2.jpg"),
  "serene-villa": path.join(portfolioDir, "project-3.jpg"),
  "artisan-cafe": path.join(portfolioDir, "project-4.jpg"),
  "ivory-penthouse": path.join(portfolioDir, "project-5.jpg"),
  "bloom-wellness": path.join(portfolioDir, "project-6.jpg")
};

function copyFiles(mapObj) {
  for (const [prefix, sourceFile] of Object.entries(mapObj)) {
    if (fs.existsSync(sourceFile)) {
      for (let i = 1; i <= 4; i++) {
        const destFile = path.join(galleryDir, `${prefix}-${i}.jpg`);
        // We only copy if the file doesn't already exist and wasn't successfully downloaded
        // But since we want to fix broken images quickly, we'll overwrite 0 byte files or missing files
        try {
            const stat = fs.existsSync(destFile) ? fs.statSync(destFile) : null;
            if (!stat || stat.size < 1000) {
                fs.copyFileSync(sourceFile, destFile);
                console.log(`Copied ${sourceFile} to ${destFile}`);
            }
        } catch (e) {
            fs.copyFileSync(sourceFile, destFile);
        }
      }
    } else {
      console.error(`Source file not found: ${sourceFile}`);
    }
  }
}

console.log("Fixing missing gallery images...");
copyFiles(categoryToSource);
copyFiles(projectToSource);
console.log("Done fixing missing images.");
