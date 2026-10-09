import sharp from "sharp";
import fs from "fs";
import path from "path";

const rootDir = process.cwd();

// Luxury RA CONTRACTOR SVG Vector
const svgIcon = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0F2038" />
      <stop offset="50%" stop-color="#0A1628" />
      <stop offset="100%" stop-color="#050C16" />
    </linearGradient>

    <!-- Gold Metallic Gradient -->
    <linearGradient id="goldGrad" x1="60" y1="60" x2="452" y2="452" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F5E8C7" />
      <stop offset="35%" stop-color="#D4AF37" />
      <stop offset="70%" stop-color="#AA820A" />
      <stop offset="100%" stop-color="#E5C158" />
    </linearGradient>

    <!-- Subtle Accent Gradient -->
    <linearGradient id="goldAccent" x1="0" y1="0" x2="512" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#C9A96E" stop-opacity="0.2" />
      <stop offset="50%" stop-color="#F5E8C7" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#C9A96E" stop-opacity="0.2" />
    </linearGradient>

    <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#D4AF37" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Rounded Squircle Luxury Container -->
  <rect x="16" y="16" width="480" height="480" rx="96" fill="url(#bgGrad)" stroke="url(#goldGrad)" stroke-width="12" />

  <!-- Inner Subtle Architectural Framing -->
  <rect x="44" y="44" width="424" height="424" rx="72" fill="none" stroke="#D4AF37" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="12 8" />

  <!-- Architectural Corner Accents -->
  <path d="M70 110 V70 H110" stroke="url(#goldGrad)" stroke-width="4" stroke-linecap="round" />
  <path d="M442 110 V70 H402" stroke="url(#goldGrad)" stroke-width="4" stroke-linecap="round" />
  <path d="M70 402 V442 H110" stroke="url(#goldGrad)" stroke-width="4" stroke-linecap="round" />
  <path d="M442 402 V442 H402" stroke="url(#goldGrad)" stroke-width="4" stroke-linecap="round" />

  <!-- Center Monogram "RA" -->
  <g filter="url(#goldGlow)">
    <text 
      x="256" 
      y="320" 
      font-family="'Playfair Display', 'Cinzel', 'Georgia', 'Times New Roman', serif" 
      font-size="220" 
      font-weight="800" 
      letter-spacing="2"
      fill="url(#goldGrad)" 
      text-anchor="middle"
    >RA</text>
  </g>

  <!-- Bottom Subtitle / Monogram Underline -->
  <rect x="176" y="360" width="160" height="4" rx="2" fill="url(#goldGrad)" />
  <circle cx="256" cy="362" r="6" fill="#F5E8C7" />
  <circle cx="206" cy="362" r="3" fill="#D4AF37" />
  <circle cx="306" cy="362" r="3" fill="#D4AF37" />
</svg>
`;

async function main() {
  const svg512 = Buffer.from(svgIcon(512));

  // 1. Generate 512x512 master PNG
  const png512 = await sharp(svg512).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, "public", "icon-512.png"), png512);

  // 2. Generate 192x192 PNG for PWA / Android
  const png192 = await sharp(svg512).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, "public", "icon-192.png"), png192);

  // 3. Generate 180x180 Apple Touch Icon
  const png180 = await sharp(svg512).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, "public", "apple-touch-icon.png"), png180);

  // 4. Generate 32x32 standard icon
  const png32 = await sharp(svg512).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, "public", "icon.png"), png32);

  // 5. Generate 16x16 standard icon
  const png16 = await sharp(svg512).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, "public", "icon-16.png"), png16);

  // 6. Generate SVG file
  fs.writeFileSync(path.join(rootDir, "public", "icon.svg"), svg512);

  // 7. Write standard multi-frame ICO file (16, 32, 48)
  const png48 = await sharp(svg512).resize(48, 48).png().toBuffer();
  
  // Create an ICO container with multiple sizes (16, 32, 48)
  // ICO header: 0,0, 1,0 (type 1 for icon), numImages (e.g. 3)
  const images = [
    { size: 16, buffer: png16 },
    { size: 32, buffer: png32 },
    { size: 48, buffer: png48 },
  ];

  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * images.length;

  const icoHeader = Buffer.alloc(headerSize);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(images.length, 4); // Number of images

  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.size, 0); // Width
    entry.writeUInt8(img.size, 1); // Height
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Image data offset
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  const icoBuffer = Buffer.concat([
    icoHeader,
    ...dirEntries,
    ...images.map(img => img.buffer)
  ]);

  // Write to public/favicon.ico
  fs.writeFileSync(path.join(rootDir, "public", "favicon.ico"), icoBuffer);
  // Also overwrite src/app/favicon.ico so Next.js doesn't serve the Vercel default
  fs.writeFileSync(path.join(rootDir, "src", "app", "favicon.ico"), icoBuffer);

  console.log("Successfully generated all favicon and icon assets!");
}

main().catch(console.error);
