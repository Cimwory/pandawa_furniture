import { motion } from 'motion/react';
import React from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: 'words' | 'chars';
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  splitBy = 'words',
}) => {
  const elements = splitBy === 'chars' ? text.split('') : text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: duration,
            delay: (i * delay) / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {el}
        </motion.span>
      ))}
    </span>
  );
};
