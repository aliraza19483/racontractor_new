import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'public/images/categories');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const downloads = [
  // 1. False Ceiling & Lighting -> ceiling.jpg
  // Multi-level dropped ceiling, recessed pot lights, island pendants
  {
    url: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=85',
    dest: 'ceiling.jpg',
    label: 'False Ceiling & Architectural Lighting'
  },

  // 2. Painting & Wall Finishes -> painting.jpg
  // Real paint roller applying crisp paint on fresh wall
  {
    url: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=85',
    dest: 'painting.jpg',
    label: 'Painting & Wall Finishes'
  },

  // 3. Electrical & Concealed Wiring -> electrical.jpg
  // Real electrician in safety gear working on electrical conduits & breaker panel
  {
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85',
    dest: 'electrical.jpg',
    label: 'Electrical & Concealed Wiring'
  },

  // 4. Carpentry & Custom Wardrobes -> carpentry.jpg
  // Real carpenter on site with tools & structural woodwork
  {
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85',
    dest: 'carpentry.jpg',
    label: 'Carpentry & Custom Wardrobes'
  },

  // 5. Modular Kitchen -> kitchen.jpg
  // Real luxury kitchen island, shaker cabinets, waterfall quartz counter, NO people!
  {
    url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=85',
    dest: 'kitchen.jpg',
    label: 'Modular Kitchen Design'
  },

  // 6. Living, Bedroom & Dining -> living.jpg
  // Real luxury living room with wood slat panelling, sofa, glass sliders
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    dest: 'living.jpg',
    label: 'Living, Bedroom & Dining Interiors'
  },

  // 7. Bathroom & Balcony -> bathroom.jpg
  // Luxury freestanding tub, floating vanity, wall taps, mirror
  {
    url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85',
    dest: 'bathroom.jpg',
    label: 'Bathroom & Balcony Renovation'
  },

  // 8. Commercial & Showroom Fit-outs -> commercial.jpg
  // Modern corporate glass partitions, linear track lighting, commercial fit-out
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    dest: 'commercial.jpg',
    label: 'Commercial & Showroom Fit-outs'
  }
];

function downloadOne(item) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(outDir, item.dest);
    const file = fs.createWriteStream(fullDest);
    https.get(item.url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          const parsed = new URL(item.url);
          redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
        }
        https.get(redirectUrl, (r2) => {
          if (r2.statusCode !== 200) {
            reject(new Error(`Failed ${item.label}: ${r2.statusCode}`));
            return;
          }
          r2.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`✓ [Downloaded] ${item.label} (${(fs.statSync(fullDest).size / 1024).toFixed(1)} KB) -> public/images/categories/${item.dest}`);
              resolve();
            });
          });
        }).on('error', reject);
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed ${item.label}: ${res.statusCode}`));
        return;
      }

      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`✓ [Downloaded] ${item.label} (${(fs.statSync(fullDest).size / 1024).toFixed(1)} KB) -> public/images/categories/${item.dest}`);
          resolve();
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading real authentic photography for Categories to public/images/categories/...');
  for (const item of downloads) {
    try {
      await downloadOne(item);
    } catch (e) {
      console.error('Error:', item.label, e.message);
    }
  }
  console.log('✓ All 8 category images ready in public/images/categories/!');
}

run();
