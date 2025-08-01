import { motion } from 'motion/react';
import { fadeInUp } from '@/lib/motionEffect';

interface TagProps {
  tags: string[];
  className?: string;
  animationDelay?: number;
}

export default function Tag({ tags, className = '', animationDelay = 0.3 }: TagProps) {
  return (
    <motion.div 
      className={`tag ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={animationDelay}
    >
      <ul>
        {tags.map((tag, idx) => (
          <li key={idx}>
            <span>{tag}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
} 