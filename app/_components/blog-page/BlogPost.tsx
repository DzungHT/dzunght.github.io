'use client';

import Tag from '@/components/Tag';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Badge, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FaArrowLeft, FaBook, FaCalendar, FaEye } from 'react-icons/fa';
import TableOfContents, { TocItem } from '@/components/TableOfContents';
import React, { useEffect, useState } from 'react';

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  views: number;
  series?: string;
  tags: string[];
}

interface BlogPostProps {
  post: BlogPostData;

  // Nội dung thẻ html render từ markdown
  children: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, children }) => {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    // Find the blog post content div and extract headings
    const contentDiv = document.querySelector('.blog-post-content');
    if (contentDiv) {
      const headings = Array.from(contentDiv.querySelectorAll('h2, h3'));
      const tocItems = headings.map((el) => ({
        id: el.id || el.textContent?.replace(/\s+/g, '-').toLowerCase() || '',
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      }));
      setToc(tocItems);
    }
  }, [children]);

  return (
    <section className="blog-post-section bg-1">
      <Container>
        <Row>
          <Col>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <Link href="/blog" className="back-link mb-4 d-inline-block">
                <FaArrowLeft className="me-2" />
                Back to Blog
              </Link>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <header className="blog-post-header mb-5">
                <h1 className="blog-post-title">{post.title}</h1>

                <div className="blog-post-meta">
                  <OverlayTrigger placement="top" overlay={<Tooltip>Publication date</Tooltip>}>
                    <span className="meta-item">
                      <FaCalendar className="me-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Post views</Tooltip>}>
                    <span className="meta-item">
                      <FaEye className="me-1" />
                      {post.views.toLocaleString()}
                    </span>
                  </OverlayTrigger>
                </div>

                {post.series && (
                  <div className="blog-post-series mt-3">
                    <OverlayTrigger placement="top" overlay={<Tooltip>Part of series</Tooltip>}>
                      <Badge bg="info">
                        <FaBook className="me-1" />
                        {post.series}
                      </Badge>
                    </OverlayTrigger>
                  </div>
                )}

                {post.tags.length > 0 && (
                  <div className="blog-post-tags-container mt-3">
                    <Tag tags={post.tags} />
                  </div>
                )}
              </header>

              <div className="blog-post-content" style={{ position: 'relative' }}>
                {children}
                {toc.length > 0 && <TableOfContents toc={toc} />}
              </div>
            </motion.article>
          </Col>
        </Row>

        <Row>
          <Col>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <Link href="/blog" className="back-link mb-4 d-inline-block">
                <FaArrowLeft className="me-2" />
                Back to Blog
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPost;
