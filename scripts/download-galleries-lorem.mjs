import fs from 'fs';
import path from 'path';
import https from 'https';

const CATEGORIES = [
  "living-room", "bedroom", "modular-kitchen", "wardrobes",
  "luxury-bathroom", "balcony", "dining-room", "home-office",
  "cafe-interior", "restaurants", "hotels", "clinics",
  "salons", "retail-shops"
];

const PROJECTS = [
  "emerald-residence", "skyline-corporate", "serene-villa",
  "artisan-cafe", "ivory-penthouse", "bloom-wellness"
];

const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, { timeout: 10000 }, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        let redirectUrl = response.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = 'https://loremflickr.com' + redirectUrl;
        }
        https.get(redirectUrl, { timeout: 10000 }, (resRedirect) => {
          if (resRedirect.statusCode !== 200) {
            reject(new Error(`Failed with status code: ${resRedirect.statusCode}`));
            return;
          }
          resRedirect.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => reject(err));
        });
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed with status code: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });

    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const allTasks = [];
  
  // Mapping logic for appropriate keywords
  const getKeywords = (name) => {
    if (name.includes('living')) return 'livingroom,interior,luxury';
    if (name.includes('bed')) return 'bedroom,interior,luxury';
    if (name.includes('kitchen')) return 'kitchen,interior,luxury';
    if (name.includes('wardrobe')) return 'closet,wardrobe,interior';
    if (name.includes('bath')) return 'bathroom,interior,luxury';
    if (name.includes('balcony') || name.includes('terrace')) return 'balcony,terrace,luxury';
    if (name.includes('dining')) return 'diningroom,interior,luxury';
    if (name.includes('office') || name.includes('corporate')) return 'office,workspace,interior';
    if (name.includes('cafe')) return 'cafe,interior,coffee';
    if (name.includes('restaurant') || name.includes('dining')) return 'restaurant,interior,luxury';
    if (name.includes('hotel')) return 'hotel,interior,luxury';
    if (name.includes('clinic') || name.includes('wellness')) return 'clinic,spa,interior';
    if (name.includes('salon')) return 'salon,spa,interior';
    if (name.includes('retail')) return 'boutique,store,interior';
    if (name.includes('villa')) return 'villa,exterior,luxury';
    if (name.includes('penthouse')) return 'penthouse,interior,luxury';
    return 'interior,luxury,architecture';
  };

  const entities = [...CATEGORIES, ...PROJECTS];

  for (const entity of entities) {
    for (let i = 1; i <= 4; i++) {
      allTasks.push({
        name: `${entity}-${i}.jpg`,
        url: `https://loremflickr.com/800/600/${getKeywords(entity)}/all?lock=${Math.floor(Math.random() * 10000)}`,
        dest: path.join(galleryDir, `${entity}-${i}.jpg`)
      });
    }
  }

  console.log(`Starting sequential download of ${allTasks.length} images to avoid rate limits...`);

  let successCount = 0;
  for (let i = 0; i < allTasks.length; i++) {
    const task = allTasks[i];
    console.log(`[${i+1}/${allTasks.length}] Downloading ${task.name}...`);
    
    let attempts = 0;
    let success = false;
    
    while (attempts < 3 && !success) {
      try {
        attempts++;
        await downloadImage(task.url, task.dest);
        success = true;
        successCount++;
        console.log(`  -> Success`);
      } catch (err) {
        console.error(`  -> Attempt ${attempts} failed: ${err.message}`);
        if (attempts < 3) {
          console.log(`  -> Waiting 2 seconds before retry...`);
          await sleep(2000);
        }
      }
    }
    
    // Polite delay between downloads
    await sleep(500);
  }

  console.log(`\nFinished! Successfully downloaded ${successCount}/${allTasks.length} images.`);
}

main().catch(console.error);
