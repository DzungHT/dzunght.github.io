// app/_components/MarkdownContent.tsx

import { renderMarkdown } from '@/lib/markdown';
import 'highlight.js/styles/github-dark.css';
import '../styles/components/_markdown-content.scss';

interface MarkdownContentProps {
  content: string;
  slug: string;
  className?: string;
}

export default async function MarkdownContent({ content, className, slug }: MarkdownContentProps) {
  const html = await renderMarkdown(content, slug);

  return <div className={`markdown-body ${className ?? ''}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
