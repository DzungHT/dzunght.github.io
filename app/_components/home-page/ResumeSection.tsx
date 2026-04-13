'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Timeline from '@/components/timeline/Timeline';
import { TimelineItemData } from '@/components/timeline/TimelineItem';
import SectionTitle from '@/components/SectionTitle';
import Skill, { SkillData } from '@/components/Skill';
import { fadeInUp } from '@/lib/motionEffect';
import { motion } from 'motion/react';

const educations: TimelineItemData[] = [
  {
    period: '2020',
    periodInfo: <a href="https://dgroup.edu.vn">DGROUP</a>,
    title: 'The management for middle managers course',
    description: <>Certificate of completion of the management for middle managers course by DGROUP</>,
  },
  {
    period: '2020',
    periodInfo: <a href="https://mta.edu.vn/">Military Technical Academy</a>,
    title: 'Engineer of Information Technology',
    description: (
      <>
        Major: Information Systems
        <br />
        Degree: Good
        <br />
        GPA: 2.95/4
      </>
    ),
  },
];

const experiences: TimelineItemData[] = [
  {
    period: '10/2025 - now',
    periodInfo: (
      <>
        <a href="https://fpt-is.com/">FPT IS Company Limited</a>
      </>
    ),
    title: 'Project Manager',
    description: (
      <>
        <strong>Main Responsibilities</strong>
        <ul className="ps-2">
          <li>- Leading project teams to ensure successful delivery on time and within scope.</li>
          <li>- Managing communication between stakeholders and development teams.</li>
          <li>- Reported project progress and issues to ensure timely resolution and transparency.</li>
        </ul>
      </>
    ),
  },
  {
    period: '09/2021 - 04/2025',
    periodInfo: (
      <>
        <a href="https://ltsgroup.tech/">LTS Group</a>
      </>
    ),
    title: 'Project Manager / Senior Software Deveploper',
    description: (
      <>
        <strong>Main Responsibilities</strong>
        <ul className="ps-2">
          <li>- Leading project teams to ensure successful delivery on time and within scope.</li>
          <li>- Managing communication between stakeholders and development teams.</li>
          <li>- Providing technical support and guidance across multiple projects.</li>
        </ul>

        <strong>Technical Involvement</strong>
        <p className="ps-2">Offering technical support for projects involving the following tech stack: .NET, Java, NodeJS, VueJS, ReactJS</p>
      </>
    ),
  },
  {
    period: '09/2020 - 09/2021',
    periodInfo: (
      <>
        Technology Center
        <br />
        of <a href="https://ghtk.vn">Giao hang tiet kiem JSC</a>
      </>
    ),
    title: 'Senior Java Deveploper',
    description: (
      <>
        <strong>Main Responsibilities</strong>
        <ul className="ps-2">
          <li>- Develop web applications using Java Spring Boot </li>
          <li>- Support team members in troubleshooting and solving technical problems.</li>
          <li>- Assist in leading the development team to ensure timely and successful project delivery.</li>
        </ul>
      </>
    ),
  },
  {
    period: '06/2017 - 09/2020',
    periodInfo: (
      <>
        <a href="https://d2t.vn">D2T Software</a>
      </>
    ),
    title: 'Team leader / Java Deveploper',
    description: (
      <>
        <strong>Main Responsibilities</strong>
        <ul className="ps-2">
          <li>- Leading the development team to ensure timely and successful project delivery.</li>
          <li>- Support team members in troubleshooting and solving technical problems.</li>
          <li>- Develop web applications using Java Frameworks</li>
        </ul>
      </>
    ),
  },
  // {
  //   period: '03/2017 – 06/2017',
  //   periodInfo: <>Samsung Vietnam Mobile R&D Center (SVMC)</>,
  //   title: 'Intern Developer',
  //   description: (
  //     <>
  //       <strong>Main Responsibilities</strong>
  //       <ul className="ps-2">
  //         <li>- Improve problem-solving skills through data structures and algorithm exercises</li>
  //         <li>- Develop Android</li>
  //       </ul>
  //     </>
  //   ),
  // },
  {
    period: '07/2016 – 03/2017',
    periodInfo: (
      <>
        <a href="https://ngvgroup.vn">NGV Corporation</a>
      </>
    ),
    title: 'Winform Developer',
    description: (
      <>
        <strong>Main Responsibilities</strong>
        <ul className="ps-2">
          <li>- Develop winform applications using C#</li>
        </ul>
      </>
    ),
  },
  {
    period: '06/2015 – 07/2016',
    periodInfo: (
      <>
        <a href="http://hcs-vietnam.com.vn/">HCS Vietnam Co. Ltd</a>
      </>
    ),
    title: 'Intern Web Developer',
    description: (
      <>
        <strong>Main Responsibilities</strong>
        <ul className="ps-2">
          <li>- Develop web applications using .NET MVC</li>
        </ul>
      </>
    ),
  },
];

const teachnicalSkills: { groupName: string; skills: SkillData[] }[] = [
  {
    groupName: 'Back-end skills',
    skills: [
      { title: 'Programing Language: C#, Java, JS(NodeJS)', value: '90%' },
      { title: 'OOP Design, Design Pattern', value: '90%' },
      { title: 'Mircoservice', value: '70%' },
      { title: 'ASP.NET Core, EF Core', value: '80%' },
      { title: 'ASP.NET MVC 5, Entity Framework', value: '80%' },
      { title: 'Java Spring Boot', value: '70%' },
      { title: 'Java Spring MVC', value: '60%' },
      { title: 'Message Queue: Apache Kafka, RedisMQ', value: '70%' },
      { title: 'Relational Database: MySql, SQL Server, Oracle Server', value: '80%' },
      { title: 'PHP, Laravel', value: '60%' },
    ],
  },
  {
    groupName: 'Front-end skills',
    skills: [
      { title: 'HTML, CSS', value: '80%' },
      { title: 'Javascript', value: '80%' },
      { title: 'Jquery', value: '80%' },
      { title: 'Vue 2+', value: '80%' },
      { title: 'ReactJS', value: '70%' },
      { title: 'Angular 2+', value: '50%' },
    ],
  },
  {
    groupName: 'Other',
    skills: [
      { title: 'Docker', value: '70%' },
      { title: 'AzureDevOps CI/CD', value: '80%' },
      { title: 'GitLab CI', value: '80%' },
      { title: 'Version Control: SVN, GIT', value: '90%' },
      { title: 'MS Office', value: '90%' },
    ],
  },
];

const professionalSkills: SkillData[] = [
  { title: 'Project Management', value: '80%' },
  { title: 'Team Work', value: '90%' },
  { title: 'Communication', value: '80%' },
  { title: 'Leadership', value: '80%' },
];

export default function ResumeSection() {
  return (
    <section id="resume-section" className="resume-section bg-1 py-4">
      <Container>
        <SectionTitle title="Resume" />

        <Row className="justify-content-center services">
          {/* Educations & Works Experiences */}
          <Col xs={12} lg={6} className="pe-sm-5">
            <Row className="mb-4">
              <Col>
                <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} className="resume-title">
                  Educations
                </motion.h3>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4} className="">
                  <Timeline items={educations} />
                </motion.div>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6} className="resume-title">
                  Works Experiences
                </motion.h3>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8} className="">
                  <Timeline items={experiences} />
                </motion.div>
              </Col>
            </Row>
          </Col>

          {/* Skills */}
          <Col xs={12} lg={6} className="ps-sm-5">
            <Row className="mb-4">
              <Col>
                <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} className="resume-title">
                  Professional Skills
                </motion.h3>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.4}
                  className="skill-list ps-4"
                >
                  {professionalSkills.map((item, idx) => {
                    return <Skill key={idx} data={item} />;
                  })}
                </motion.div>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <motion.h3
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.6}
                  className="resume-title mb-4"
                >
                  Technical Skills
                </motion.h3>
                {teachnicalSkills.map((item, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={idx == 0 ? 0.8 : 0.2}
                      className="skill-group ms-4"
                    >
                      <span>{item.groupName}</span>
                      {item.skills.map((item, sIdx) => {
                        return <Skill key={sIdx} data={item} />;
                      })}
                    </motion.div>
                  );
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
