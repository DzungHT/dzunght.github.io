'use client';

import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FaBook, FaCalendar } from 'react-icons/fa';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  views: number;
  series?: string;
  tags: string[];
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <section className="blog-section bg-1">
      <Container>
        <SectionTitle title="My blogs" subtitle="Thoughts on software development, project management, and technology" />
        <Row>
          {posts.map((post, index) => (
            <Col key={post.slug} lg={4} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="blog-card h-100">
                  <Card.Body>
                    {post.series && (
                      <OverlayTrigger placement="top" overlay={<Tooltip>Part of series: {post.series}</Tooltip>}>
                        <>
                          <Link className="blog-series" href={`/blog/${post.slug}`}>
                            <span style={{ marginRight: '4px', color: '#888' }}>┌─</span>
                            <FaBook className="me-1" />
                            <span className="blog-series-text">{post.series}</span>
                          </Link>
                        </>
                      </OverlayTrigger>
                    )}
                    <Card.Title as="h3" className="blog-title">
                      <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                        {post.title}
                      </Link>
                    </Card.Title>

                    <div className="blog-meta mb-3">
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
                      {/* <OverlayTrigger placement="top" overlay={<Tooltip>Post views</Tooltip>}>
                        <span className="meta-item">
                          <FaEye className="me-1" />
                          {post.views.toLocaleString()}
                        </span>
                      </OverlayTrigger> */}
                    </div>

                    <Card.Text className="blog-excerpt">{post.excerpt}</Card.Text>

                    {post.tags.length > 0 && (
                      <div className="blog-tags-container">
                        <Tag tags={post.tags} />
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {posts.length === 0 && (
          <Row>
            <Col>
              <motion.div
                className="text-center py-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1 }}
              >
                <h3>No blog posts yet</h3>
                <p>Check back soon for new content!</p>
              </motion.div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}
