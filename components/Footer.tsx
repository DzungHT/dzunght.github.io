import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import bgImage from '@/assets/images/map-color-overlay.png';

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
    icon: 'fa fa-location-arrow',
    title: 'Address',
    lines: ['5th Avenue, 34th floor,', 'New york'],
  },
  {
    icon: 'fa fa-envelope-o',
    title: 'Email',
    lines: ['yourmail@email.com', 'yourmail@email.com'],
  },
  {
    icon: 'fa fa-phone',
    title: 'Phone',
    lines: ['(880)-8976-987', '(880)-8976-987'],
  },
];

const FooterSection: React.FC = () => {
  return (
    <footer className="mh-footer mh-footer-3" id="mh-contact">
      <div className="container-fluid">
        <Row className="section-separator">
          <Col sm={12} className="section-title">
            <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              Contact Me
            </motion.h3>
          </Col>

          <div className="map-image image-bg col-sm-12" style={{ backgroundImage: `url(${bgImage})` }}>
            <Container className="mt-30">
              <Row>
                <Col sm={12} md={6} className="mh-footer-address">
                  {contactInfo.map((item, idx) => (
                    <motion.div
                      className="mh-address-footer-item dark-bg shadow-1 media"
                      key={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0.2 + idx * 0.2}
                    >
                      <div className="each-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="each-info media-body">
                        <h4>{item.title}</h4>
                        {item.title === 'Address' ? (
                          <address>
                            {item.lines.map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </address>
                        ) : (
                          item.lines.map((line, i) => (
                            <div key={i}>
                              <a href="#">{line}</a>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  ))}
                </Col>

                <Col sm={12} md={6}>
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                    <Form id="contactForm" className="single-form quate-form">
                      <Row>
                        <Col sm={12}>
                          <Form.Control type="text" placeholder="First Name" required />
                        </Col>
                        <Col sm={12}>
                          <Form.Control type="text" placeholder="Last Name" required />
                        </Col>
                        <Col sm={12}>
                          <Form.Control type="email" placeholder="Your Email" required />
                        </Col>
                        <Col sm={12}>
                          <Form.Control id="message" as="textarea" rows={6} placeholder="Your Message" required className="contact-message" />
                        </Col>
                        <Col sm={12} className="btn-form">
                          <Button type="submit" className="btn-fill btn-block">
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </motion.div>
                </Col>

                <Col sm={12} className="mh-copyright">
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                    <Row>
                      <Col sm={6} className="text-left text-xs-center">
                        <p>
                          <a href="https://templateshub.net">Templates Hub</a>
                        </p>
                      </Col>
                      <Col sm={6}>
                        <ul className="social-icon">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-github"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
      </div>
    </footer>
  );
};

export default FooterSection;
