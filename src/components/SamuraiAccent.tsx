import React from 'react';
import { motion } from 'framer-motion';

interface SamuraiAccentProps {
  direction?: 'left' | 'right';
  color?: string;
  delay?: number;
}

export default function SamuraiAccent({ 
  direction = 'left', 
  color = '#C33B33',
  delay = 0 
}: SamuraiAccentProps) {
  return (
    <div className="relative w-full h-px my-8 overflow-hidden">
      {/* Main blade line */}
      <motion.div
        className="absolute h-full origin-left"
        style={{
          backgroundColor: color,
          left: direction === 'left' ? 0 : 'auto',
          right: direction === 'right' ? 0 : 'auto',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute h-full w-32 origin-left"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
          left: direction === 'left' ? 0 : 'auto',
          right: direction === 'right' ? 0 : 'auto',
        }}
        initial={{ x: direction === 'left' ? '-100%' : '100%' }}
        animate={{ 
          x: direction === 'left' ? '400%' : '-400%' 
        }}
        transition={{
          duration: 2,
          delay: delay + 0.8,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
