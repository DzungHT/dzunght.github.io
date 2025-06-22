import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.8 },
  }),
};

const technicalSkills = [
  { name: 'Javascript', percent: 86 },
  { name: 'Java', percent: 46 },
  { name: 'Python', percent: 38 },
  { name: 'PHP', percent: 17 },
  { name: 'Python', percent: 38 },
  { name: 'PHP', percent: 17 },
];

const professionalSkills = [
  { name: 'Communication', percent: 95 },
  { name: 'Team Work', percent: 55 },
  { name: 'Project Management', percent: 86 },
  { name: 'Creativity', percent: 60 },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="mh-skills" id="mh-skills">
      <div className="home-v-img">
        <Container>
          <Row className="section-separator">
            <Col sm={12} className="section-title text-center">
              {/* <h2>Skills</h2> */}
            </Col>

            <Col sm={12} md={6}>
              <div className="mh-skills-inner">
                <motion.div
                  className="mh-professional-skill"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3}
                >
                  <h3>Technical Skills</h3>
                  <div className="each-skills">
                    {technicalSkills.map((skill, idx) => (
                      <div className="candidatos" key={idx}>
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">{skill.name}</div>
                            <div className="percentagem-num">{skill.percent}%</div>
                          </div>
                          <div className="progressBar">
                            <div className="percentagem" style={{ width: `${skill.percent}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <motion.div
                className="mh-professional-skills"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.5}
              >
                <h3>Professional Skills</h3>
                <ul className="mh-professional-progress">
                  {professionalSkills.map((skill, idx) => (
                    <li key={idx} style={{ width: 120, height: 120, marginBottom: '1.5rem' }}>
                      <CircularProgressbar
                        value={skill.percent}
                        text={`${skill.percent}%`}
                        styles={buildStyles({
                          textSize: '16px',
                          pathColor: '#00bcd4',
                          textColor: '#333',
                          trailColor: '#ddd',
                        })}
                      />
                      <div className="pr-skill-name" style={{ marginTop: '1rem', textAlign: 'center' }}>
                        {skill.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default SkillsSection;
