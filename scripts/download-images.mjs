import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Curated list of high quality Unsplash photos representing luxury construction, turnkey contractor, architectural execution, interiors, and clients
const imageDownloads = [
  // Hero & About & CTA
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/hero/hero-luxury-interior.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', dest: 'public/images/about/studio-interior.jpg' },
  { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85', dest: 'public/images/cta/luxury-living-room.jpg' },

  // Services / Categories (14 distinct photos)
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/living-room.jpg' },
  { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/bedroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/kitchen.jpg' },
  { url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/wardrobe.jpg' },
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/bathroom.jpg' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/balcony.jpg' },
  { url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/dining.jpg' },
  { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/office.jpg' },
  { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/cafe.jpg' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/restaurant.jpg' },
  { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/hotel.jpg' },
  { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/clinic.jpg' },
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/salon.jpg' },
  { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', dest: 'public/images/services/retail.jpg' },

  // Portfolio / Featured Projects (6 distinct architectural & turnkey photos)
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80', dest: 'public/images/portfolio/project-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80', dest: 'public/images/portfolio/project-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80', dest: 'public/images/portfolio/project-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80', dest: 'public/images/portfolio/project-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80', dest: 'public/images/portfolio/project-5.jpg' },
  { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80', dest: 'public/images/portfolio/project-6.jpg' },

  // Testimonials (5 distinct client portrait photos)
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80', dest: 'public/images/testimonials/client-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80', dest: 'public/images/testimonials/client-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80', dest: 'public/images/testimonials/client-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80', dest: 'public/images/testimonials/client-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80', dest: 'public/images/testimonials/client-5.jpg' },
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(rootDir, destPath);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(fullDest);
    const request = https.get(url, (response) => {
      // Handle redirects (Unsplash URLs often redirect from images.unsplash.com to plus.unsplash.com or CDN)
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        file.close();
        downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        reject(new Error(`Failed to download ${url}, status code ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Downloaded: ${destPath}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(fullDest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Starting image downloads for RA CONTRACTOR website...');
  for (const item of imageDownloads) {
    try {
      await downloadFile(item.url, item.dest);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('All image downloads completed!');
}

main();
