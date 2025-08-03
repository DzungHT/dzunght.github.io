'use client';
import React, { useEffect, useState } from 'react';
import { Container, Col, Card, Row } from 'react-bootstrap';
import { motion } from 'motion/react';
import { facebookInfo, linkedinInfo, userInfo } from '@/lib/userInfo';
import { FaRegEnvelope } from 'react-icons/fa6';
import SectionTitle from '@/components/SectionTitle';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.8 },
  }),
};

const contactInfo = [
  {
    icon: linkedinInfo.icon,
    title: linkedinInfo.name,
    link: linkedinInfo.url,
    lines: ["If you'd like to connect, ", 'please reach out to me on LinkedIn.'],
  },
  {
    icon: FaRegEnvelope,
    title: userInfo.email,
    lines: ['You can contact me directly via Email', 'for any questions or collaborations.'],
    link: `mailto:${userInfo.email}`,
  },
  {
    icon: facebookInfo.icon,
    title: facebookInfo.name,
    link: facebookInfo.url,
    lines: ['For any inquiries, ', 'feel free to contact me via Facebook.'],
  },
];

const Footer: React.FC = () => {
  const [versionText, setVersionText] = useState<string>('loading...');

  useEffect(() => {
    fetch('/version.json')
      .then((res) => res.json())
      .then((data) => {
        const { major, minor, buildDate, buildTime } = data;
        setVersionText(`v${major}.${minor}.${buildDate}.${buildTime}`);
      })
      .catch(() => setVersionText('unknown'));
  }, []);

  return (
    <footer className="footer py-4 bg-2">
      <section id="contact-section">
        <Container>
          <SectionTitle title="Contact Me" />
          <Row className="align-items-center justify-content-center contact-content">
            {contactInfo.map((item, idx) => (
              <Col sm={12} md={6} lg={4} key={idx}>
                <motion.div
                  className=""
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  custom={0.3 + idx * 0.2}
                >
                  <Card className="contact-card my-2 bg-1 shadow-sm border-effect">
                    <Card.Body>
                      <div className="contact-icon text-center">
                        <a href={item.link}>
                          <item.icon />
                        </a>
                      </div>
                      <h3 className="text-center">{item.title}</h3>
                      {item.lines.map((line, i) => (
                        <div key={i} className="text-center">
                          {line}
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Container id="footer-section" className="py-4">
        <motion.div
          className="row align-items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0.3}
        >
          <Col xs={12} className="text-center">
            &copy; 2025
            {/* {` - ${new Date().getFullYear()} `} */}
            &nbsp;Hoàng Trí Dũng. <strong>All rights reserved.</strong>
          </Col>
          <Col xs={12} className="text-center">
            {versionText}
          </Col>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
