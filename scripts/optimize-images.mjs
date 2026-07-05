import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const inputDir = path.join(rootDir, 'src/assets');
const outputDir = path.join(inputDir, 'optimized');

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter((file) => /\.(jpe?g|png)$/i.test(file));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const outputWebp = path.join(outputDir, `${base}.webp`);
  const outputAvif = path.join(outputDir, `${base}.avif`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const targetWidth = Math.min(metadata.width || 1600, 1600);

    await image.resize({ width: targetWidth }).webp({ quality: 78 }).toFile(outputWebp);
    await image.resize({ width: targetWidth }).avif({ quality: 66, effort: 9 }).toFile(outputAvif);
    console.log(`optimized ${file}`);
  } catch (error) {
    console.error(`failed ${file}:`, error.message);
  }
}
