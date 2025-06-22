import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import bgImage from '@/assets/images/wp10271263-4k-workspace-desktop-wallpapers.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.8 },
  }),
};

const educationList = [
  {
    title: 'Art & Multimedia From',
    institution: 'Oxford University',
    year: '2005-2008',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
  },
  {
    title: 'Art & Multimedia From',
    institution: 'Oxford University',
    year: '2005-2008',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
  },
  {
    title: 'Art & Multimedia From',
    institution: 'Oxford University',
    year: '2005-2008',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
  },
];

const workList = [
  {
    role: 'UI/UX Designer',
    company: 'IronSketch',
    year: '2005-2008',
    responsibilities: ['Validate CSS', 'Project Management'],
  },
  {
    role: 'Art & Multimedia From',
    company: 'Oxford University',
    year: '2005-2008',
    responsibilities: ['Validate CSS', 'Project Management'],
  },
  {
    role: 'Art & Multimedia From',
    company: 'Oxford University',
    year: '2005-2008',
    responsibilities: ['Validate CSS', 'Project Management'],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="mh-experince image-bg" id="mh-experience" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="img-color-overlay">
        <Container>
          <Row className="section-separator">
            <Col sm={12} md={6}>
              <div className="mh-education">
                <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                  Education
                </motion.h3>
                <div className="mh-education-deatils">
                  {educationList.map((edu, idx) => (
                    <motion.div
                      className="mh-education-item dark-bg"
                      key={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0.3 + idx * 0.2}
                    >
                      <h4>
                        {edu.title} <a href="#">{edu.institution}</a>
                      </h4>
                      <div className="mh-eduyear">{edu.year}</div>
                      <p>{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div className="mh-work">
                <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                  Work Experience
                </motion.h3>
                <div className="mh-experience-deatils">
                  {workList.map((work, idx) => (
                    <motion.div
                      className="mh-work-item dark-bg"
                      key={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0.4 + idx * 0.2}
                    >
                      <h4>
                        {work.role} <a href="#">{work.company}</a>
                      </h4>
                      <div className="mh-eduyear">{work.year}</div>
                      <span>Responsibility :</span>
                      <ul className="work-responsibility">
                        {work.responsibilities.map((item, i) => (
                          <li key={i}>
                            <i className="fa fa-circle"></i> {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ExperienceSection;
