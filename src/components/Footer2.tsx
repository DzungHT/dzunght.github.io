import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { animateScroll } from 'react-scroll';
import bgImage from '@/assets/images/map-color-overlay.png';

const options = {
  // your options here, for example:
  duration: 500,
  smooth: true,
};

// Defining functions to perform different types of scrolling.
const scrollToTop = () => {
  animateScroll.scrollToTop(options);
};

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
    lines: ['Hanoi, Vietnam', ''],
  },
  {
    icon: 'fa fa-envelope-o',
    title: 'Email',
    lines: ['dzunght95@gmail.com', ''],
  },
  {
    icon: 'fa fa-phone',
    title: 'Phone',
    lines: ['(+84)-334-xxx-525', ''],
  },
];

const socials = [
  { iconClass: 'fa fa-facebook', url: 'https://www.facebook.com/dz.optimus' },
  { iconClass: 'fa fa-linkedin', url: 'https://www.linkedin.com/in/d%C5%A9ng-ho%C3%A0ng-tr%C3%AD-b38049136/' },
  { iconClass: 'fa fa-github', url: 'https://github.com/DzungHT' },
];

const Footer2: React.FC = () => {
  return (
    <footer className="mh-footer" id="mh-contact">
      <div className="map-image image-bg" style={{ backgroundImage: `url(${bgImage})` }}>
        <Container>
          <Row className="section-separator">
            <Col sm={12} className="section-title">
              <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                Contact Me
              </motion.h3>
            </Col>

            <Col sm={12} className="mh-footer-address">
              <Row>
                {contactInfo.map((item, idx) => (
                  <Col sm={12} md={4} key={idx}>
                    <motion.div
                      className="mh-address-footer-item dark-bg shadow-1"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0.3 + idx * 0.2}
                    >
                      <div className="each-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="each-info">
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
                  </Col>
                ))}
              </Row>
            </Col>

            <Col sm={12} className="mh-copyright">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                <Row>
                  <Col sm={6} className="text-left text-xs-center">
                    <p>
                      <a href="#" onClick={scrollToTop}>
                        &copy; 2025
                        {/* {` - ${new Date().getFullYear()} `} */}
                        &nbsp;Hoàng Trí Dũng. All rights reserved for content.
                        <br />
                        Code licensed under the MIT License.
                      </a>
                    </p>
                  </Col>
                  <Col sm={6}>
                    <ul className="social-icon">
                      {socials.map((item, index) => (
                        <li key={index}>
                          <a href={item.url}>
                            <i className={item.iconClass}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer2;
