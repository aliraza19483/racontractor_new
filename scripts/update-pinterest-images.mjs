import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Curated Pinterest-aesthetic real architecture & interior photography
// Real materials, authentic lighting, no AI-generated artifacts
const images = [
  // 1. HERO - Breathtaking double-height luxury architectural living room
  {
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85',
    dest: 'public/images/hero/hero-luxury-interior.jpg',
    label: 'Hero Luxury Living Interior'
  },

  // 2. ABOUT STUDIO - Architect workspace, drawings, blueprints & bespoke materials
  {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/about/studio-interior.jpg',
    label: 'About Studio Engineering & Architecture'
  },

  // 3. CONTACT CTA - Cinematic evening luxury living space with warm ambient lighting
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=85',
    dest: 'public/images/cta/luxury-living-room.jpg',
    label: 'CTA Luxury Ambient Living'
  },

  // 4. PORTFOLIO / FEATURED PROJECTS (Hyderabad hallmark executions)
  // Project 1: The Emerald Residence Turnkey - Jubilee Hills
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/portfolio/project-1.jpg',
    label: 'Emerald Residence Living & Interior'
  },
  // Project 2: Skyline Corporate Office Fit-out - Gachibowli
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/portfolio/project-2.jpg',
    label: 'Skyline Corporate Glass Boardroom & Office'
  },
  // Project 3: Serene Luxury Villa Build - Kondapur
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/portfolio/project-3.jpg',
    label: 'Serene Luxury Architectural Villa Build'
  },
  // Project 4: Artisan Cafe Fit-out - Banjara Hills
  {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/portfolio/project-4.jpg',
    label: 'Artisan Cafe Fit-out'
  },
  // Project 5: The Ivory Penthouse Execution - Madhapur
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/portfolio/project-5.jpg',
    label: 'Ivory Penthouse Panoramic Interior'
  },

  // 5. SERVICES / WHAT WE DO
  // Civil Construction
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/civil.jpg',
    label: 'Civil Construction & Turnkey'
  },
  // False Ceiling & Lighting
  {
    url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/living-room.jpg',
    label: 'False Ceiling & Architectural Lighting'
  },
  // Painting & Wall Finishes
  {
    url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/dining.jpg',
    label: 'Painting & Bespoke Textured Finishes'
  },
  // Electrical & Concealed Wiring
  {
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/office.jpg',
    label: 'Electrical, Lighting & Automation'
  },
  // Modular Kitchen
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/kitchen.jpg',
    label: 'Luxury Modular Kitchen'
  },
  // Wardrobes
  {
    url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/wardrobe.jpg',
    label: 'Walk-in Wardrobe & Cabinetry'
  },
  // Living, Bedroom & Dining
  {
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/bedroom.jpg',
    label: 'Master Bedroom & Living Suite'
  },
  // Bathroom
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/bathroom.jpg',
    label: 'Luxury Spa Bathroom'
  },
  // Balcony
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/balcony.jpg',
    label: 'Modern Balcony & Deck'
  },
  // Commercial Fit-outs / Cafe
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/cafe.jpg',
    label: 'Commercial Cafe Fit-out'
  },
  // Retail Showroom
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/retail.jpg',
    label: 'Luxury Retail Showroom'
  },
  // Restaurant
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/restaurant.jpg',
    label: 'Restaurant Fit-out'
  },
  // Hotel
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/hotel.jpg',
    label: 'Boutique Hotel Interior'
  },
  // Clinic
  {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/clinic.jpg',
    label: 'Healthcare Clinic Fit-out'
  },
  // Salon
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    dest: 'public/images/services/salon.jpg',
    label: 'Modern Salon Fit-out'
  },
];

function downloadOne(item) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(rootDir, item.dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(fullDest);
    const req = https.get(item.url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        let redirectUrl = response.headers.location;
        if (redirectUrl.startsWith('/')) {
          const parsed = new URL(item.url);
          redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
        }
        https.get(redirectUrl, (resRedirect) => {
          if (resRedirect.statusCode !== 200) {
            reject(new Error(`Failed to download ${item.label}: ${resRedirect.statusCode}`));
            return;
          }
          resRedirect.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`✓ [Downloaded] ${item.label} -> ${item.dest}`);
              resolve();
            });
          });
        }).on('error', reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${item.label}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`✓ [Downloaded] ${item.label} -> ${item.dest}`);
          resolve();
        });
      });
    });

    req.on('error', (err) => {
      fs.unlink(fullDest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${images.length} Pinterest-aesthetic photos...`);
  for (const item of images) {
    try {
      await downloadOne(item);
    } catch (err) {
      console.error(`✗ Error downloading ${item.label}:`, err.message);
    }
  }

  // Also sync gallery images to avoid any loremflickr/AI artifacts
  console.log('\nSyncing gallery images with high-resolution authentic photography...');
  const galleryDir = path.join(rootDir, 'public/images/gallery');
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
  }

  const categorySync = {
    'living-room': 'public/images/services/living-room.jpg',
    'bedroom': 'public/images/services/bedroom.jpg',
    'modular-kitchen': 'public/images/services/kitchen.jpg',
    'wardrobes': 'public/images/services/wardrobe.jpg',
    'luxury-bathroom': 'public/images/services/bathroom.jpg',
    'balcony': 'public/images/services/balcony.jpg',
    'dining-room': 'public/images/services/dining.jpg',
    'home-office': 'public/images/services/office.jpg',
    'cafe-interior': 'public/images/services/cafe.jpg',
    'restaurants': 'public/images/services/restaurant.jpg',
    'hotels': 'public/images/services/hotel.jpg',
    'clinics': 'public/images/services/clinic.jpg',
    'salons': 'public/images/services/salon.jpg',
    'retail-shops': 'public/images/services/retail.jpg',
    'emerald-residence': 'public/images/portfolio/project-1.jpg',
    'skyline-corporate': 'public/images/portfolio/project-2.jpg',
    'serene-villa': 'public/images/portfolio/project-3.jpg',
    'artisan-cafe': 'public/images/portfolio/project-4.jpg',
    'ivory-penthouse': 'public/images/portfolio/project-5.jpg',
  };

  for (const [prefix, sourceRel] of Object.entries(categorySync)) {
    const srcPath = path.join(rootDir, sourceRel);
    if (fs.existsSync(srcPath)) {
      for (let i = 1; i <= 4; i++) {
        const destPath = path.join(galleryDir, `${prefix}-${i}.jpg`);
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  // Remove old bloom-wellness files from gallery
  for (let i = 1; i <= 4; i++) {
    const bloomFile = path.join(galleryDir, `bloom-wellness-${i}.jpg`);
    if (fs.existsSync(bloomFile)) {
      fs.unlinkSync(bloomFile);
    }
  }

  console.log('✓ All Pinterest-aesthetic photos updated and synced successfully!');
}

run();
