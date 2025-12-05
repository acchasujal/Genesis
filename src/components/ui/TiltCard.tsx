import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from './utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  depthZ?: number;
  springOptions?: SpringOptions;
}

export function TiltCard({
  children,
  className,
  style,
  rotateAmplitude = 14,
  scaleOnHover = 1.05,
  depthZ = 50,
  springOptions,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Default spring configuration (smooth/heavy)
  const defaultSpringConfig = { stiffness: 100, damping: 30, mass: 2 };
  
  // Use provided config or fallback to default
  const config = springOptions || defaultSpringConfig;

  // Mouse position springs
  const x = useSpring(0, config);
  const y = useSpring(0, config);

  // Transform springs to rotation values
  const rotateX = useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

  // Scale spring
  const scale = useSpring(1, config);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate position relative to center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <figure
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          ...style, // Ensure custom styles (borders, backgrounds) are applied
        }}
        className={cn(className)}
      >
        <div
          style={{
            transform: `translateZ(${depthZ}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </motion.div>
    </figure>
  );
}
