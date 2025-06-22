'use client'; // nếu dùng App Router, giữ dòng này vì có framer-motion

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { posts } from '@/data/PostList';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.8 },
  }),
};

const BlogSection: React.FC = () => {
  return (
    <section className="mh-blog image-bg featured-img-two">
      <div className="img-color-overlay">
        <Container>
          <Row className="section-separator">
            <Col sm={12} className="section-title">
              <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                Featured Posts
              </motion.h3>
            </Col>

            {posts.map((post, idx) => (
              <Col sm={12} md={4} key={idx}>
                <motion.div
                  className="mh-blog-item dark-bg"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3 + idx * 0.2}
                >
                  <img src={post.thumnailUrl} alt="blog" className="img-fluid" />
                  <div className="blog-inner">
                    <h2>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="mh-blog-post-info">
                      <ul>
                        <li>
                          <strong>Post On</strong> <span>{post.date}</span>
                        </li>
                        <li>
                          <strong>By</strong> <span>DzungHT</span>
                        </li>
                      </ul>
                    </div>
                    <p>{post.description}</p>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default BlogSection;
