import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public/images/gallery');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Map each section to a LoremFlickr keyword
const categories = {
  "living-room": "livingroom",
  "dining-room": "diningroom",
  "bedroom": "bedroom",
  "wardrobes": "wardrobe,closet",
  "luxury-bathroom": "bathroom",
  "balcony": "balcony",
  "modular-kitchen": "kitchen",
  "home-office": "homeoffice",
  "retail-shops": "retail",
  "cafe-interior": "cafe",
  "restaurants": "restaurant",
  "hotels": "hotel",
  "clinics": "clinic",
  "salons": "salon"
};

const projects = {
  "emerald-residence": "villa",
  "skyline-corporate": "office",
  "serene-villa": "mansion",
  "artisan-cafe": "coffeeshop",
  "ivory-penthouse": "penthouse",
  "bloom-wellness": "spa"
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    // Add timeout to request
    const req = https.get(url, { timeout: 5000 }, (res) => {
      // Handle redirects (LoremFlickr redirects to actual image)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    
    req.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

async function main() {
  console.log("Starting fast image downloads via LoremFlickr...");
  
  const allTasks = [];
  let lockCounter = 100; // Start lock at 100 to get unique images

  for (const [cat, keyword] of Object.entries(categories)) {
    for (let i = 1; i <= 4; i++) {
      const filename = `${cat}-${i}.jpg`;
      const filepath = path.join(publicDir, filename);
      const url = `https://loremflickr.com/800/600/${keyword}?lock=${lockCounter++}`;
      allTasks.push({ url, filepath, name: filename });
    }
  }

  for (const [proj, keyword] of Object.entries(projects)) {
    for (let i = 1; i <= 4; i++) {
      const filename = `${proj}-${i}.jpg`;
      const filepath = path.join(publicDir, filename);
      const url = `https://loremflickr.com/800/600/${keyword}?lock=${lockCounter++}`;
      allTasks.push({ url, filepath, name: filename });
    }
  }

  // We can do batches of 10 for faster download
  const BATCH_SIZE = 10;
  for (let i = 0; i < allTasks.length; i += BATCH_SIZE) {
    const batch = allTasks.slice(i, i + BATCH_SIZE);
    console.log(`Downloading batch ${Math.floor(i / BATCH_SIZE) + 1}...`);
    
    await Promise.all(batch.map(async (task) => {
      try {
        await downloadImage(task.url, task.filepath);
        console.log(`✅ Downloaded ${task.name}`);
      } catch (err) {
        console.error(`❌ Failed to download ${task.name}:`, err.message);
      }
    }));
  }
  
  console.log("All downloads completed!");
}

main();
