import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import postcss from 'postcss';
import * as sass from 'sass';
import loadPostCSSConfig from 'postcss-load-config';

// Nhận tham số: input SCSS và output CSS
const [, , inputScss, outputCss] = process.argv;

if (!inputScss || !outputCss) {
  console.error('❌ Usage: node postcss-runner.js <input.scss> <output.css>');
  process.exit(1);
}

const tempCss = path.join('.tmp', path.basename(outputCss) + '.raw.css');

async function compileSass() {
  await mkdir('.tmp', { recursive: true });
  const result = await sass.compileAsync(inputScss);
  await writeFile(tempCss, result.css);
}

async function processPostCSS() {
  const rawCss = await readFile(tempCss, 'utf8');

  // Tải config dùng postcss-load-config
  const { plugins, options } = await loadPostCSSConfig();

  const result = await postcss(plugins).process(rawCss, {
    from: tempCss,
    to: outputCss,
    ...options,
  });

  await mkdir(path.dirname(outputCss), { recursive: true });
  await writeFile(outputCss, result.css);
  console.log(`✅ Built: ${outputCss}`);
}

async function build() {
  try {
    await compileSass();
    await processPostCSS();
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
}

build();
