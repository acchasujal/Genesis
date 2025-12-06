import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform, useMotionTemplate, SpringOptions } from 'framer-motion';
import { cn } from './utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  depthZ?: number;
  springOptions?: SpringOptions;
  spotlight?: boolean;
  spotlightColor?: string;
}

export function TiltCard({
  children,
  className,
  style,
  rotateAmplitude = 14,
  scaleOnHover = 1.05,
  depthZ = 50,
  springOptions,
  spotlight = false,
  spotlightColor = "rgba(255, 255, 255, 0.1)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Default spring configuration (snappy but smooth)
  const defaultSpringConfig = { stiffness: 200, damping: 20, mass: 1 };
  const config = springOptions || defaultSpringConfig;

  // Normalized mouse position for rotation (-0.5 to 0.5)
  const x = useSpring(0, config);
  const y = useSpring(0, config);

  // Pixel-based mouse position for spotlight
  const mouseX = useSpring(0, config);
  const mouseY = useSpring(0, config);

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

    // Calculate normalized position
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);

    // Calculate pixel position for spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
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
    // Reset spotlight to center or off-screen if desired, usually leaving it is fine
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
          ...style,
        }}
        className={cn("relative", className)}
      >
        {/* Dynamic Spotlight Overlay */}
        {spotlight && (
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none rounded-xl"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${mouseX}px ${mouseY}px,
                  ${spotlightColor},
                  transparent 40%
                )
              `,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Content Container */}
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
