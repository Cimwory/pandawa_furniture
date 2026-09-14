import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  separator = '',
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          setTimeout(() => {
            let startTime: number | null = null;
            const startVal = from;
            const endVal = to;

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
              
              // Ease-out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(startVal + (endVal - startVal) * easeOut);
              
              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCount(endVal);
              }
            };

            requestAnimationFrame(step);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [to, from, duration, delay]);

  const formatNumber = (num: number) => {
    if (!separator) return num.toString();
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};
