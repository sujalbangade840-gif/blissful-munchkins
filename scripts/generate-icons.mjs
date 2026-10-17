import fs from 'fs';
import zlib from 'zlib';

// Minimal PNG generator in pure Node.js
function createPNG(width, height, drawPixelFn) {
  // RGBA buffer with filter byte 0 at start of each scanline
  const scanlineLength = width * 4 + 1;
  const rawData = Buffer.alloc(scanlineLength * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = drawPixelFn(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  // Helper to calculate CRC32
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c >>> 0;
  }

  function crc32(buf) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const combined = Buffer.concat([typeBuf, data]);
    const crcVal = Buffer.alloc(4);
    crcVal.writeUInt32BE(crc32(combined), 0);
    return Buffer.concat([len, combined, crcVal]);
  }

  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth
  ihdrData[9] = 6; // Color type: RGBA
  ihdrData[10] = 0; // Compression: Deflate
  ihdrData[11] = 0; // Filter: Adaptive
  ihdrData[12] = 0; // Interlace: None
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT
  const idatChunk = makeChunk('IDAT', compressedData);

  // IEND
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Draw blissful munchkins logo (Vibrant warm gradient background + heart camera emblem)
function drawBlissfulLogo(x, y, w, h, isMaskable = false) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Gradient background from vibrant coral #FF7893 to sunset golden #FFA585 to sky soft #60A5FA
  const t = (x + y) / (w + h);
  let bgR = Math.round(255 * (1 - t) + 96 * t);
  let bgG = Math.round(120 * (1 - t) + 165 * t);
  let bgB = Math.round(147 * (1 - t) + 250 * t);

  // If not maskable, round corners smoothly
  if (!isMaskable) {
    const cornerRadius = w * 0.22;
    const qx = Math.max(0, Math.abs(dx) - (w / 2 - cornerRadius));
    const qy = Math.max(0, Math.abs(dy) - (h / 2 - cornerRadius));
    const cornerDist = Math.sqrt(qx * qx + qy * qy);
    if (cornerDist > cornerRadius) {
      return [0, 0, 0, 0]; // Transparent outside squircle
    }
  }

  // Draw Camera & Heart icon inside safe center (scale: 0.5 * w)
  const iconScale = isMaskable ? 0.35 : 0.44;
  const s = iconScale * w;
  
  // Camera body (rounded rect)
  const camHalfW = s * 0.75;
  const camHalfH = s * 0.55;
  const camYOffset = s * 0.08;
  const camDx = Math.abs(dx);
  const camDy = Math.abs(dy - camYOffset);
  const camR = s * 0.18;
  
  const camQx = Math.max(0, camDx - (camHalfW - camR));
  const camQy = Math.max(0, camDy - (camHalfH - camR));
  const camCornerDist = Math.sqrt(camQx * camQx + camQy * camQy);

  // Camera top lens bump / flash
  const bumpDx = Math.abs(dx + s * 0.35);
  const bumpDy = Math.abs(dy - (camYOffset - camHalfH - s * 0.08));
  const isBump = bumpDx < s * 0.2 && bumpDy < s * 0.1;

  // Lens circle (center)
  const lensRadius = s * 0.32;
  const lensDy = dy - camYOffset;
  const lensDist = Math.sqrt(dx * dx + lensDy * lensDy);

  if (isBump || camCornerDist <= camR) {
    if (lensDist <= lensRadius) {
      // Inner lens background (soft coral/white)
      if (lensDist <= lensRadius * 0.68) {
        // Inner heart center
        const hx = dx / (lensRadius * 0.55);
        const hy = -(lensDy / (lensRadius * 0.55)) + 0.2;
        // Heart curve formula: (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
        const hEq = Math.pow(hx * hx + hy * hy - 0.7, 3) - (hx * hx) * (hy * hy * hy);
        if (hEq <= 0) {
          return [255, 120, 147, 255]; // Coral Heart
        }
        return [255, 255, 255, 255]; // Lens white circle
      }
      return [255, 209, 102, 255]; // Golden ring
    }
    return [255, 255, 255, 245]; // White camera body
  }

  return [bgR, bgG, bgB, 255];
}

console.log('Generating PWA PNG icons...');

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public', { recursive: true });
}

// 1. pwa-192x192.png
const pwa192 = createPNG(192, 192, (x, y, w, h) => drawBlissfulLogo(x, y, w, h, false));
fs.writeFileSync('./public/pwa-192x192.png', pwa192);

// 2. pwa-512x512.png
const pwa512 = createPNG(512, 512, (x, y, w, h) => drawBlissfulLogo(x, y, w, h, false));
fs.writeFileSync('./public/pwa-512x512.png', pwa512);

// 3. pwa-maskable-512x512.png
const pwaMaskable = createPNG(512, 512, (x, y, w, h) => drawBlissfulLogo(x, y, w, h, true));
fs.writeFileSync('./public/pwa-maskable-512x512.png', pwaMaskable);

// 4. apple-touch-icon.png (180x180)
const appleIcon = createPNG(180, 180, (x, y, w, h) => drawBlissfulLogo(x, y, w, h, true));
fs.writeFileSync('./public/apple-touch-icon.png', appleIcon);

// 5. favicon.png / favicon.ico
const fav16 = createPNG(32, 32, (x, y, w, h) => drawBlissfulLogo(x, y, w, h, false));
fs.writeFileSync('./public/favicon.png', fav16);
fs.writeFileSync('./public/favicon.ico', fav16);

console.log('All PWA icons generated successfully in /public!');
