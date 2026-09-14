import React from 'react';

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

export const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'button',
  className = '',
  color = '#BE733D',
  speed = '4s',
  children,
  onClick,
  ...props
}) => {
  return (
    <Component
      className={`relative inline-block py-[1px] px-[1px] overflow-hidden rounded-full ${className}`}
      onClick={onClick}
      {...props}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 w-full h-full rounded-full">
        {children}
      </div>

      <style>{`
        @keyframes star-movement-bottom {
          0% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          100% {
            transform: translate(-100%, 0%);
            opacity: 0;
          }
        }
        @keyframes star-movement-top {
          0% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          100% {
            transform: translate(100%, 0%);
            opacity: 0;
          }
        }
        .animate-star-movement-bottom {
          animation: star-movement-bottom linear infinite;
        }
        .animate-star-movement-top {
          animation: star-movement-top linear infinite;
        }
      `}</style>
    </Component>
  );
};
