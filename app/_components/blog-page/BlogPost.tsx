'use client';

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'motion/react';
import { FaCalendar, FaClock, FaUser, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { renderMarkdown } from '@/lib/markdown';

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
}

interface BlogPostProps {
  post: BlogPostData;
}

export default function BlogPost({ post }: BlogPostProps) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    let mounted = true;
    renderMarkdown(post.content).then((result) => {
      if (mounted) setHtml(result);
    });
    return () => { mounted = false; };
  }, [post.content]);

  return (
    <section className="blog-post-section bg-1">
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Link href="/blog" className="back-link mb-4 d-inline-block">
                <FaArrowLeft className="me-2" />
                Back to Blog
              </Link>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <header className="blog-post-header mb-5">
                <h1 className="blog-post-title">{post.title}</h1>
                
                <div className="blog-post-meta">
                  <span className="meta-item">
                    <FaCalendar className="me-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="meta-item">
                    <FaClock className="me-1" />
                    {post.readTime}
                  </span>
                  <span className="meta-item">
                    <FaUser className="me-1" />
                    {post.author}
                  </span>
                </div>

                {post.tags.length > 0 && (
                  <div className="blog-post-tags mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div className="blog-post-content">
                <div 
                  className="markdown-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </motion.article>
          </Col>
        </Row>
      </Container>
    </section>
  );
} 