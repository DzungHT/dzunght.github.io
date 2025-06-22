// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import ProjectImage from '@/assets/images/p-2.png';
// import bgImage from '@/assets/images/wp10271263-4k-workspace-desktop-wallpapers.jpg';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (custom: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: custom, duration: 0.8 },
//   }),
// };

// const projects = [1, 2, 3].map(() => ({
//   category: 'Web Design',
//   title: 'Wrap',
//   subtitle: 'Design & Development',
//   description:
//     'Stamp is a clean and elegant Multipurpose Landing Page Template. It will fit perfectly for Startup, Web App or any type of Web Services. It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. All variations are organized separately so you can use / customize the template very easily.',
//   image: ProjectImage,
//   testimonials: [
//     'Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.',
//     'Creative Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.',
//     'Organize Code - suits my needs perfectly whilst allowing me to learn some new technology first hand.',
//   ],
// }));

// const FeaturedProjectsSection: React.FC = () => {
//   return (
//     <section className="mh-featured-project image-bg" style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="img-color-overlay">
//         <Container>
//           <Row className="section-separator">
//             <Col sm={12} className="section-title">
//               <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
//                 Featured Projects
//               </motion.h3>
//             </Col>

//             <Col sm={12}>
//               <Row className="mh-single-project-slide-by-side">
//                 {projects.map((project, idx) => (
//                   <Col sm={12} key={idx} className="mh-featured-item">
//                     <Row>
//                       <Col sm={7}>
//                         <motion.div
//                           className="mh-featured-project-img shadow-2"
//                           variants={fadeInUp}
//                           initial="hidden"
//                           whileInView="visible"
//                           viewport={{ once: true }}
//                           custom={0.2}
//                         >
//                           <img src={project.image} alt="Project" className="img-fluid" />
//                         </motion.div>
//                       </Col>
//                       <Col sm={5}>
//                         <div className="mh-featured-project-content">
//                           <motion.h4
//                             className="project-category"
//                             variants={fadeInUp}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             custom={0.4}
//                           >
//                             {project.category}
//                           </motion.h4>
//                           <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}>
//                             {project.title}
//                           </motion.h2>
//                           <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6}>
//                             {project.subtitle}
//                           </motion.span>
//                           <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.7}>
//                             {project.description}
//                           </motion.p>
//                           <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.7}>
//                             <Button href="#" className="btn-fill">
//                               View Details
//                             </Button>
//                           </motion.div>
//                           <motion.div
//                             className="mh-testimonial mh-project-testimonial"
//                             variants={fadeInUp}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             custom={0.9}
//                           >
//                             {project.testimonials.map((quote, i) => (
//                               <blockquote key={i}>
//                                 <q>{quote}</q>
//                                 <cite>- Shane Kavanagh</cite>
//                               </blockquote>
//                             ))}
//                           </motion.div>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Col>
//                 ))}
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjectsSection;
