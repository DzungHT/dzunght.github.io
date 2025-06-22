import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.8 },
  }),
};
const services = [
  {
    icon: 'fa fa-bullseye purple-color',
    title: 'Project Management',
    description: `I have extensive experience managing projects with team sizes ranging from 20 to 30 members. 
      I’m well-versed in both Agile/Scrum methodologies and traditional Waterfall approaches. 
      I can effectively lead cross-functional teams, track progress, and ensure timely delivery with high quality.`,
    delay: 0.3,
  },
  {
    icon: 'fa fa-code iron-color',
    title: 'Web Development',
    description: `I work as a full-stack web developer, proficient in both frontend and backend technologies. 
      Beyond coding, I excel at analyzing and clarifying customer requirements to deliver solutions that meet both technical and business needs.`,
    delay: 0.5,
  },
  {
    icon: 'fa fa-object-ungroup sky-color',
    title: 'App Development',
    description: `I specialize in developing desktop applications using .NET, with a strong focus on WPF (Windows Presentation Foundation). 
      My skills allow me to build powerful, responsive, and user-friendly desktop solutions tailored to client workflows.`,
    delay: 0.7,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="mh-service" id="mh-service">
      <Container>
        <Row className="section-separator">
          <Col sm={12} className="text-center section-title">
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false }} custom={0.2}>
              What I do
            </motion.h2>
          </Col>

          {services.map((service, idx) => (
            <Col sm={4} key={idx} className="mb-3">
              <motion.div
                className="mh-service-item shadow-1 dark-bg h-100"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={service.delay}
              >
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p className="text-left">{service.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
