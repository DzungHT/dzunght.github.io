'use client';

import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import { motion } from 'motion/react';
import { Card, Col, Container, OverlayTrigger, Row, Tooltip, Form } from 'react-bootstrap';
import { FaBook, FaCalendar } from 'react-icons/fa';
import { useState, useMemo } from 'react';

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
  // Filter states
  const [titleFilter, setTitleFilter] = useState('');
  const [seriesFilter, setSeriesFilter] = useState('');
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  // Get all unique series and tags for filter options
  const allSeries = useMemo(() => {
    const set = new Set(posts.map((p) => p.series).filter(Boolean));
    return Array.from(set) as string[];
  }, [posts]);
  const allTags = useMemo(() => {
    const set = new Set(posts.flatMap((p) => p.tags));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  // Filtering logic
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchTitle = post.title.toLowerCase().includes(titleFilter.toLowerCase());
      const matchSeries = !seriesFilter || post.series === seriesFilter;
      const matchTags = tagFilter.length === 0 || tagFilter.every((tag) => post.tags.includes(tag));
      return matchTitle && matchSeries && matchTags;
    });
  }, [posts, titleFilter, seriesFilter, tagFilter]);

  // UI
  return (
    <section className="blog-section bg-1">
      <Container>
        <SectionTitle title="My blogs" subtitle="Thoughts on software development, project management, and technology" />

        <Row>
          {/* Blog List */}
          <Col xs={12} lg={8}>
            <Row>
              {filteredPosts.map((post, index) => (
                <Col key={post.slug} lg={6} md={12} className="mb-4">
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
                            <a
                              className="blog-series"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                setSeriesFilter(post.series!);
                              }}
                            >
                              <span style={{ marginRight: '4px', color: '#888' }}>┌─</span>
                              <FaBook className="me-1" />
                              <span className="blog-series-text">{post.series}</span>
                            </a>
                          </OverlayTrigger>
                        )}
                        <Card.Title as="h3" className="blog-title">
                          <a href={`/blog/${post.slug}`} className="text-decoration-none">
                            {post.title}
                          </a>
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

            {filteredPosts.length === 0 && (
              <Row>
                <Col>
                  <motion.div
                    className="text-center py-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1 }}
                  >
                    <h3>No blog posts found</h3>
                    <p>Try adjusting your filters.</p>
                  </motion.div>
                </Col>
              </Row>
            )}
          </Col>
          {/* Filter UI */}
          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <Form className="p-3 rounded bg-2 border">
              <h4>Filter</h4>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="filter-title">Title</Form.Label>
                <Form.Control
                  id="filter-title"
                  type="text"
                  placeholder="Search by title..."
                  value={titleFilter}
                  onChange={(e) => setTitleFilter(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="filter-series">Series</Form.Label>
                <Form.Select id="filter-series" value={seriesFilter} onChange={(e) => setSeriesFilter(e.target.value)}>
                  <option value="">All Series</option>
                  {allSeries.map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tags</Form.Label>
                <div style={{ maxHeight: 200, overflowY: 'auto', border: '1px solid #ddd', borderRadius: 4, padding: 4 }}>
                  {allTags.map((tag) => (
                    <Form.Check
                      key={tag}
                      type="checkbox"
                      id={`tag-${tag}`}
                      label={tag}
                      checked={tagFilter.includes(tag)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setTagFilter([...tagFilter, tag]);
                        } else {
                          setTagFilter(tagFilter.filter((t) => t !== tag));
                        }
                      }}
                    />
                  ))}
                </div>
              </Form.Group>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    setTitleFilter('');
                    setSeriesFilter('');
                    setTagFilter([]);
                  }}
                  disabled={!titleFilter && !seriesFilter && tagFilter.length === 0}
                >
                  Clear filter
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
