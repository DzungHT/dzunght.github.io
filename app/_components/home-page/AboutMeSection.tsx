'use client';

import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import { Col, Container, Row } from 'react-bootstrap';

const aboutData = {
  tags: [
    // Project Management Skills
    'Agile',
    'Scrum',
    'Kanban',
    'Project Management',
    'Team Leadership',
    // Backend Skills
    'C#',
    'ASP.Net Core',
    'Java',
    'Spring Boot',
    // 'NodeJS',
    // Frontend Skills
    // 'HTML',
    // 'CSS',
    // 'JavaScript',
    // 'TypeScript',
    'VueJS',
    'ReactJS',
    'Angular',
    // Database Skills
    'MySQL',
    'MS SQL Server',
    'MongoDB',
    // 'Oracle',
    // DevOps Skills
    'Git',
    'Docker',
    'CI/CD with Azure DevOps',
    'CI/CD with GitLab CI',
    '...',
  ],
  cvLink: '#',
};

export default function AboutMeSection() {
  return (
    <section id="about-me-section" className="about-me-section pt-4 bg-2">
      <Container>
        <SectionTitle title="About Me" />

        <Row className="align-items-center justify-content-center">
          <Col sm={12} lg={8} className="text-center">
            <p>
              I&#39;m Hoang Tri Dung, a Project Manager with a software engineering background. 10+ years of experience in fullstack development,
              Agile team leadership, and software project management.
              <br />
              Also I am good at
            </p>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          <Col sm={12} lg={8} className="text-center">
            <Tag tags={aboutData.tags} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
