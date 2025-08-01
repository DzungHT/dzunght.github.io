'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'motion/react';
import { FaCalendar, FaClock, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <section className="blog-section bg-1">
      <Container>
        <SectionTitle
          title="Blog"
          subtitle="Thoughts on software development, project management, and technology"
        />
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
                    <div className="blog-meta mb-3">
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
                    
                    <Card.Title as="h3" className="blog-title">
                      <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                        {post.title}
                      </Link>
                    </Card.Title>
                    
                    <Card.Text className="blog-excerpt">
                      {post.excerpt}
                    </Card.Text>
                    
                    {post.tags.length > 0 && (
                      <div className="blog-tags">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
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