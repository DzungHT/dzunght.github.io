'use client';

import { useEffect, useState } from 'react';
import { renderMarkdown } from '@/lib/markdown';
import 'highlight.js/styles/github-dark.css'; // You can change the style as needed
import '../styles/components/_markdown-content.scss';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className }: MarkdownContentProps) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    let mounted = true;
    renderMarkdown(content).then((result) => {
      if (mounted) setHtml(result);
    });
    return () => {
      mounted = false;
    };
  }, [content]);

  return <div className={'markdown-body' + (className || '')} dangerouslySetInnerHTML={{ __html: html }} />;
}
