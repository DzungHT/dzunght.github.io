'use client';

import SectionTitle from '@/components/SectionTitle';
import { fadeInUp } from '@/lib/motionEffect';
import { motion } from 'motion/react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaCode, FaLaptopCode } from 'react-icons/fa6';

const services = [
  {
    icon: AiOutlineFundProjectionScreen,
    color: '#42A5F5',
    title: 'Project Management',
    description: `I have extensive experience managing projects with team sizes ranging from 20 to 30 members. 
      I’m well-versed in both Agile/Scrum methodologies and traditional Waterfall approaches. 
      I can effectively lead cross-functional teams, track progress, and ensure timely delivery with high quality.`,
    delay: 0.3,
  },
  {
    icon: FaCode,
    color: '#ED7256',
    title: 'Web Development',
    description: `I work as a full-stack web developer, proficient in both frontend and backend technologies. 
      Beyond coding, I excel at analyzing and clarifying customer requirements to deliver solutions that meet both technical and business needs.`,
    delay: 0.5,
  },
  {
    icon: FaLaptopCode,
    color: '#00BCD4',
    title: 'App Development',
    description: `I specialize in developing desktop applications using .NET, with a strong focus on WPF (Windows Presentation Foundation). 
      My skills allow me to build powerful, responsive, and user-friendly desktop solutions tailored to client workflows.`,
    delay: 0.7,
  },
];

export default function ServicesSection() {
  return (
    <section id="services-section" className="services-section bg-2 pb-4">
      <Container>
        <SectionTitle title="What I do" />

        <Row className="align-items-center justify-content-center services">
          {services.map((item, idx) => (
            <Col xs={12} sm={6} md={4} key={idx}>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false }} custom={item.delay} className="">
                <Card className="shadow-sm border-effect my-2">
                  <Card.Body>
                    <div className={`service-icon text-center`} style={{ color: item.color }}>
                      <item.icon />
                    </div>
                    <h3 className="text-center">{item.title}</h3>
                    <p className="text-left">{item.description}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
