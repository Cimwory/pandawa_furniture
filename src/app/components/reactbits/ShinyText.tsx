import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
  color = '#BE733D',
  shineColor = '#ffffff',
}) => {
  return (
    <span
      className={`inline-block relative overflow-hidden bg-clip-text text-transparent font-medium ${
        disabled ? '' : 'animate-shimmer'
      } ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: '250% 100%',
        animation: disabled ? 'none' : `shimmer ${speed}s infinite linear`,
      }}
    >
      {text}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 150% 0;
          }
          100% {
            background-position: -150% 0;
          }
        }
      `}</style>
    </span>
  );
};
