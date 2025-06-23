import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.8 },
  }),
};

const aboutData = {
  title: 'About Me',
  description: `I'm Hoang Tri Dung, a Project Manager with a software engineering background. 10+ years of experience in fullstack development, Agile team leadership, and software project management. Also I am good at`,
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
  cvLink: '/CV_DUNGHT.pdf',
};

const AboutSection: React.FC = () => {
  return (
    <section className="mh-about" id="mh-about">
      <Container>
        <Row className="section-separator">
          <Col sm={12} md={6}>
            <motion.div
              className="mh-about-img shadow-2"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
            >
              <img src="/assets/images/ab-img.png" alt="About" className="img-fluid" />
            </motion.div>
          </Col>
          <Col sm={12} md={6}>
            <div className="mh-about-inner">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}>
                {aboutData.title}
              </motion.h2>
              <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                {aboutData.description}
              </motion.p>
              <motion.div className="mh-about-tag" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                <ul>
                  {aboutData.tags.map((tag, idx) => (
                    <li key={idx}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
                <Button href={aboutData.cvLink} className="btn-fill">
                  Download my CV/Resume <i className="fa fa-download" />
                </Button>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
