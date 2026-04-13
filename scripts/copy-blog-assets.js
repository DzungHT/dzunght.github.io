import fs from 'fs';
import path from 'path';

const BLOG_ROOT = path.join(process.cwd(), 'app', 'blog');
const OUT_BLOG_ROOT = path.join(process.cwd(), 'out', 'blog');
const IMAGE_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.avif',
]);

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function isImageFile(filePath) {
  return IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function copyImagesRecursively(sourceDir, destinationDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(destinationDir, entry.name);

    if (entry.isDirectory()) {
      copyImagesRecursively(sourcePath, destinationPath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (entry.name === 'index.mdx' || !isImageFile(entry.name)) {
      continue;
    }

    ensureDir(path.dirname(destinationPath));
    fs.copyFileSync(sourcePath, destinationPath);
  }
}

function main() {
  if (!fs.existsSync(BLOG_ROOT)) {
    console.log('[copy-blog-assets] Skip: app/blog does not exist.');
    return;
  }

  if (!fs.existsSync(path.join(process.cwd(), 'out'))) {
    console.log('[copy-blog-assets] Skip: out folder does not exist yet.');
    return;
  }

  ensureDir(OUT_BLOG_ROOT);

  const slugs = fs
    .readdirSync(BLOG_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  for (const slug of slugs) {
    const sourceSlugDir = path.join(BLOG_ROOT, slug);
    const outSlugDir = path.join(OUT_BLOG_ROOT, slug);
    copyImagesRecursively(sourceSlugDir, outSlugDir);
  }

  console.log('[copy-blog-assets] Done.');
}

main();
