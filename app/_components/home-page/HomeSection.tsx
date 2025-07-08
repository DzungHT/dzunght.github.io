'use client';

import { motion } from 'motion/react';
import { Col, Container, Row } from 'react-bootstrap';
import Avatar from '@/components/Avatar';
import { userInfo } from '@/lib/userInfo';
import { FaBuildingCircleCheck, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { FaMapMarked } from 'react-icons/fa';

interface PersonalInfo {
  icon: IconType;
  text: string;
  link: string;
}
const personalInfo: PersonalInfo[] = [
  {
    icon: FaBuildingCircleCheck,
    text: '10+ years of work experience in software development.',
    link: `#`,
  },
  {
    icon: FaEnvelope,
    text: userInfo.email,
    link: `mailto:${userInfo.email}`,
  },
  {
    icon: FaPhone,
    text: userInfo.phone,
    link: `#`,
  },
  {
    icon: FaMapMarked,
    text: userInfo.location,
    link: `#`,
  },
];

export default function HomeSection() {
  let delay = 0.2; // Delay for the initial animation
  const getDelay = (offset: number) => {
    delay = delay + offset;
    return delay;
  };

  return (
    <section id="home-section" className="home-section">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center text-lg-end">
            <motion.div
              className="text-end d-inline-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <Avatar src="/imgs/avatar.jpg" />
            </motion.div>
          </Col>
          <Col md={6}>
            <div className="home-info text-lg-start text-center mt-4 mt-lg-0">
              <motion.div
                className="home-intro mb-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1, delay: getDelay(0.1) }}
              >
                <span>Hi, I&#39;m</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1, delay: getDelay(0.2) }}
              >
                {userInfo.fullName}
              </motion.h2>

              <motion.h5
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1, delay: getDelay(0.2) }}
              >
                {userInfo.role}
              </motion.h5>

              <ul className="text-center text-md-start">
                {personalInfo.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1, delay: getDelay(0.2) }}
                  >
                    <i>
                      <item.icon />
                    </i>
                    <a href={item.link}>{item.text}</a>
                  </motion.li>
                ))}
              </ul>
              <div className="text-center text-md-start">
                <motion.ul
                  className="social-icon list-inline"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1, delay: getDelay(0.2) }}
                >
                  {userInfo.socials.map((item, index) => (
                    <li key={index} className="list-inline-item">
                      <a href={item.url}>
                        <i>
                          <item.icon />
                        </i>
                      </a>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
