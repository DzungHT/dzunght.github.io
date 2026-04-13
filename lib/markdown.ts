/* eslint-disable @typescript-eslint/no-explicit-any */
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import '../styles/components/_markdown-content.scss';

// Configure marked for line breaks and GitHub-style markdown
marked.setOptions({
  breaks: true,
  gfm: true,
});

const renderer = new marked.Renderer();

/**
 * Convert heading text to an ID-friendly slug
 * Removes Vietnamese accents and special characters
 */
function slugify(text: string) {
  const vietnameseStr = text.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/đ/g, 'd').replace(/Đ/g, 'D');

  return vietnameseStr
    .toLowerCase()
    .replace(/\s+/g, '-')       // spaces → dash
    .replace(/[^\w\-]+/g, '')   // remove non-word characters
    .replace(/\-\-+/g, '-')     // collapse multiple dashes
    .replace(/^-+/, '')         // trim starting dash
    .replace(/-+$/, '');        // trim ending dash
}

// Custom heading renderer: add id for anchor links
renderer.heading = (text: string, level: number) => {
  const id = slugify(text);
  return `<h${level} id="${id}">${text}</h${level}>`;
};

// Custom code block renderer with syntax highlighting and copy button
renderer.code = (code, language) => {
  let highlighted;
  const langName = language && hljs.getLanguage(language) ? language : 'plaintext';

  if (language && hljs.getLanguage(language)) {
    highlighted = hljs.highlight(code, { language }).value;
  } else {
    highlighted = hljs.highlightAuto(code).value;
  }

  const codeId = `code-${Math.random().toString(36).substring(2, 10)}`;

  return `
    <div class="code-block">
      ${language ? `<div class="code-lang">${langName.toUpperCase()}</div>` : ''}
      <button class="copy-btn" data-target="${codeId}" onclick="copyCode(this)">Copy</button>
      <pre><code id="${codeId}" class="hljs language-${langName}">${highlighted}</code></pre>
    </div>
  `;
};

// Custom blockquote renderer for better styling
renderer.blockquote = (quote) => {
  return `<blockquote class="blog-blockquote">${quote}</blockquote>`;
};

// Custom link renderer for security (open external links in new tab)
renderer.link = (href, title, text) => {
  const isAbsoluteHttp = /^https?:\/\//i.test(href);
  const isRelative = href?.startsWith('/') || !/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(href);

  const safeHref = (isAbsoluteHttp || isRelative) ? href : '#';
  const target = isAbsoluteHttp ? 'target="_blank" rel="noopener noreferrer"' : '';

  return `<a href="${safeHref}" ${target} title="${title || ''}">${text}</a>`;
};


// Custom image renderer to fix relative image paths
renderer.image = (href, title, text) => {
  const rawHref = (href || '').trim();
  let finalSrc = rawHref;

  const isRemote = /^(https?:)?\/\//i.test(rawHref);
  const isRootAbsolute = rawHref.startsWith('/');
  const isDataUri = rawHref.startsWith('data:');

  // Normalize local image paths to /blog/<slug>/... so static export can resolve them.
  if (rawHref && !isRemote && !isRootAbsolute && !isDataUri) {
    const slug = (renderer as any)._currentSlug || '';
    const cleanedPath = rawHref
      .replace(/^(\.\/)+/, '')
      .replace(/^(\.\.\/)+/, '')
      .replace(/^\/+/, '');

    finalSrc = slug ? `/blog/${slug}/${cleanedPath}` : cleanedPath;
  }

  const alt = text || '';
  const titleAttr = title ? ` title="${title}"` : '';
  return `<img src="${finalSrc}" alt="${alt}"${titleAttr} />`;
};

// Apply our custom renderer to marked
marked.use({ renderer });

/**
 * Render markdown to HTML
 * @param content - markdown text
 * @param slug - current blog post slug (used for fixing image paths)
 */
export async function renderMarkdown(content: string, slug?: string): Promise<string> {
  // Pass slug to renderer so images can resolve relative paths
  (renderer as any)._currentSlug = slug || '';

  if (typeof marked.parse === 'function') {
    return await marked.parse(content);
  } else {
    return marked(content);
  }
}
