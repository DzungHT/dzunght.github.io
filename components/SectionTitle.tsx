import { fadeInUp } from '@/lib/motionEffect';
import { motion } from 'motion/react';
import { Row, Col } from 'react-bootstrap';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Row className="align-items-center justify-content-center">
      <Col sm={12} className="text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0.2}
          className="section-title text-center my-4"
        >
          <h1 className="section-title-text">{title}</h1>
        </motion.div>
      </Col>
    </Row>
  );
}
