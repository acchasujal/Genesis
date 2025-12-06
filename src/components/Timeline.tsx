import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Users, Code, Trophy } from 'lucide-react';

// --- TiltCard Component ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = '', 
  style = {}, 
  rotateAmplitude = 10, 
  scaleOnHover = 1.05 
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateY = ((x - centerX) / centerX) * rotateAmplitude;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: isHovered ? scaleOnHover : 1,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// --- Updated Data: All positions set to 'left' ---
const timelineEvents = [
  {
    icon: Calendar,
    title: 'Registration',
    date: 'December 2025 - January 2026',
    description: 'Open registration for all aspiring innovators',
    color: '#C33B33',
    position: 'left', // Keep Left
  },
  {
    icon: Users,
    title: 'Shortlisting',
    date: 'Late January 2026',
    description: 'Selection of finalist teams based on ideas',
    color: '#4D8B86',
    position: 'right', // CHANGE THIS TO 'right'
  },
  {
    icon: Code,
    title: 'Hackathon',
    date: '6-7 February 2026',
    description: '30 hours of intense coding and innovation',
    color: '#C33B33',
    position: 'left', // Keep Left
  },
  {
    icon: Trophy,
    title: 'Final Pitch',
    date: '7 February 2026',
    description: 'Present your solutions and win amazing prizes',
    color: '#4D8B86',
    position: 'right', // CHANGE THIS TO 'right'
  },
];

// --- Main Timeline Component ---
export default function Timeline() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-10 pb-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl mb-4 font-bold"
            style={{
              background: 'linear-gradient(135deg, #C33B33, #4D8B86)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Event Timeline
          </h2>
          <p className="text-lg" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Your journey to innovation
          </p>
        </motion.div>

        {/* Central Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
            style={{ backgroundColor: 'rgba(195, 59, 51, 0.2)' }}
          >
            <motion.div
              className="w-full"
              style={{
                scaleY: lineProgress,
                transformOrigin: 'top',
                background: 'linear-gradient(180deg, #C33B33, #4D8B86)',
              }}
            />
          </div>

          {/* Timeline events */}
          <div className="space-y-24 relative z-10">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.title}
                  className="relative w-full"
                  // Animation: slide in from left if position is left, right if right
                  initial={{ opacity: 0, x: event.position === 'left' ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative flex items-center w-full">
                    
                    {/* LEFT SIDE CONTENT */}
                    {event.position === 'left' && (
                      <div className="pr-8" style={{ width: 'calc(50% - 32px)' }}>
                        <TiltCard
                          className="p-6 backdrop-blur-xl border-2 rounded-2xl h-full w-full"
                          style={{
                            borderColor: event.color,
                            backgroundColor: 'rgba(15, 23, 42, 0.8)',
                            boxShadow: `0 8px 32px ${event.color}40`,
                          }}
                          rotateAmplitude={8}
                          scaleOnHover={1.05}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <Icon size={20} style={{ color: event.color }} />
                            <p className="text-sm font-semibold" style={{ color: event.color }}>
                              {event.date}
                            </p>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
                            {event.description}
                          </p>
                        </TiltCard>
                      </div>
                    )}

                    {/* CENTRAL DOT */}
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                      style={{ zIndex: 20 }}
                    >
                      <TiltCard
                        className="relative w-16 h-16 border-4 flex items-center justify-center rounded-full"
                        style={{
                          borderColor: event.color,
                          backgroundColor: 'rgba(15, 23, 42, 0.95)',
                          boxShadow: `0 0 20px ${event.color}80, 0 0 40px ${event.color}40`,
                        }}
                        rotateAmplitude={15}
                        scaleOnHover={1.2}
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: event.color,
                            boxShadow: `0 0 10px ${event.color}`,
                          }}
                        />
                      </TiltCard>
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    {event.position === 'right' && (
                      <div className="pl-8 ml-auto" style={{ width: 'calc(50% - 32px)' }}>
                        <TiltCard
                          className="p-6 backdrop-blur-xl border-2 rounded-2xl h-full w-full"
                          style={{
                            borderColor: event.color,
                            backgroundColor: 'rgba(15, 23, 42, 0.8)',
                            boxShadow: `0 8px 32px ${event.color}40`,
                          }}
                          rotateAmplitude={8}
                          scaleOnHover={1.05}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <Icon size={20} style={{ color: event.color }} />
                            <p className="text-sm font-semibold" style={{ color: event.color }}>
                              {event.date}
                            </p>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">
                            {event.title}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
                            {event.description}
                          </p>
                        </TiltCard>
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (remains vertical/stacked) */}
        <div className="md:hidden relative mt-16">
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: 'rgba(195, 59, 51, 0.2)' }}
          >
            <motion.div
              className="w-full"
              style={{
                scaleY: lineProgress,
                transformOrigin: 'top',
                background: 'linear-gradient(180deg, #C33B33, #4D8B86)',
              }}
            />
          </div>

          <div className="space-y-12 relative z-10">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TiltCard
                    className="relative flex-shrink-0 w-16 h-16 border-4 flex items-center justify-center rounded-full"
                    style={{
                      borderColor: event.color,
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      boxShadow: `0 0 20px ${event.color}80`,
                    }}
                    rotateAmplitude={15}
                    scaleOnHover={1.15}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: event.color }}
                    />
                  </TiltCard>

                  <TiltCard
                    className="flex-1 p-6 border-2 rounded-2xl"
                    style={{
                      borderColor: event.color,
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    }}
                    rotateAmplitude={8}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} style={{ color: event.color }} />
                      <p className="text-sm font-semibold" style={{ color: event.color }}>
                        {event.date}
                      </p>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
                      {event.description}
                    </p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}