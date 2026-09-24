import { motion } from 'motion/react';
import React from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animateBy?: 'words' | 'letters';
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  animateBy = 'words',
}) => {
  const elements = animateBy === 'letters' ? text.split('') : text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 15 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: duration,
            delay: (i * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {el}
        </motion.span>
      ))}
    </span>
  );
};
