import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import '../styles/components/_markdown-content.scss';

// Configure marked for security and better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Custom renderer for better code highlighting
const renderer = new marked.Renderer();

// Enhance code blocks with syntax highlighting using highlight.js
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


// Enhance blockquotes with better styling
renderer.blockquote = (quote) => {
  return `<blockquote class="blog-blockquote">${quote}</blockquote>`;
};

// Enhance links with security
renderer.link = (href, title, text) => {
  const safeHref = href?.startsWith('http') ? href : '#';
  const target = href?.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${safeHref}" ${target} title="${title || ''}">${text}</a>`;
};

marked.use({ renderer });

export async function renderMarkdown(content: string): Promise<string> {
  // marked(content) may return a Promise in some versions, so ensure always await
  if (typeof marked.parse === 'function') {
    return await marked.parse(content);
  } else {
    return marked(content);
  }
} 