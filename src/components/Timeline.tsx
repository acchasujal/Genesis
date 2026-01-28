import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Users, Code, Trophy, Flag, Clock, Mic, CheckCircle, Coffee, Brain, Briefcase, Globe, Rocket, Target, Zap } from 'lucide-react';

const timelineData = [
  // SECTION 1: ONLINE ROUND
  {
    id: 1,
    icon: Globe,
    title: 'PHASE 1: ONLINE ROUND',
    date: '28 Jan - 4 Feb',
    description: 'The journey begins with the online abstract submission and selection process.',
    color: '#C33B33', // Red
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Problem Statements',
    date: '28 Jan | 6:00 PM',
    description: 'Problem statements released. PPT submission begins.',
    color: '#4D8B86', // Teal
  },
  {
    id: 3,
    icon: Clock,
    title: 'PPT Submission',
    date: '3 Feb | 11:59 PM',
    description: 'Deadline for submitting project presentations.',
    color: '#C33B33', 
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Shortlisting',
    date: '4 Feb | 8:00 PM',
    description: 'Announcement of teams selected for the offline round.',
    color: '#4D8B86',
  },

  // SECTION 2: HACKATHON DAY 1
  {
    id: 5,
    icon: Rocket,
    title: 'PHASE 2: HACKATHON DAY 1',
    date: '6 Feb',
    description: 'The offline hackathon kicks off with 24 hours of coding.',
    color: '#C33B33', 
  },
  {
    id: 6,
    icon: Users,
    title: 'Team Registration',
    date: '6 Feb | 8:00 AM',
    description: 'Team registration and seating at the venue.',
    color: '#4D8B86', 
  },
  {
    id: 7,
    icon: Mic,
    title: 'Official Inauguration',
    date: '6 Feb | 8:30 AM',
    description: 'Opening remarks and rules briefing.',
    color: '#C33B33', 
  },
  {
    id: 8,
    icon: Code,
    title: 'Hackathon Begins',
    date: '6 Feb | 9:00 AM',
    description: 'The 24-hour coding challenge officially starts.',
    color: '#4D8B86', 
  },
  {
    id: 9,
    icon: Coffee,
    title: 'Lunch Break',
    date: '6 Feb | 1:00 PM',
    description: 'Mid-day break for participants.',
    color: '#C33B33', 
  },
  {
    id: 10,
    icon: Brain,
    title: 'Mentoring Round 1',
    date: '6 Feb | 3:00 PM',
    description: 'Feedback and guidance from industry mentors.',
    color: '#4D8B86', 
  },

  // SECTION 3: HACKATHON DAY 2
  {
    id: 11,
    icon: Flag,
    title: 'PHASE 3: HACKATHON DAY 2',
    date: '7 Feb',
    description: 'Final evaluations, pitches, and the closing ceremony.',
    color: '#C33B33', 
  },
  {
    id: 12,
    icon: Briefcase,
    title: 'Judges Evaluation',
    date: '7 Feb | 9:00 AM',
    description: 'Technical assessment of progress and code.',
    color: '#4D8B86', 
  },
  {
    id: 13,
    icon: Target,
    title: '2nd Elimination',
    date: '7 Feb | 12:30 PM',
    description: 'Announcement of teams moving to the final pitch.',
    color: '#C33B33', 
  },
  {
    id: 14,
    icon: Zap,
    title: 'Final Pitch',
    date: '7 Feb | 2:00 PM',
    description: 'High-impact PPT and project presentations.',
    color: '#4D8B86', 
  },
  {
    id: 15,
    icon: Trophy,
    title: 'Results & Closing',
    date: '7 Feb | 4:30 PM',
    description: 'Winners announcement and Hackathon conclusion.',
    color: '#C33B33', 
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.5', 'end 0.8'],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const flagY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        padding: '5rem 1rem',
        backgroundColor: '#0E0E0E',
      }}
    >
      {/* Sakura petals */}
      <motion.div
        style={{
          position: 'absolute',
          top: '25%',
          right: '25%',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#FFC6D0',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
        animate={{
          y: [0, 200],
          x: [0, -50],
          rotate: [0, 360],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '33%',
          left: '25%',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#E99AAA',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
        animate={{
          y: [0, 150],
          x: [0, 40],
          rotate: [0, -360],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
      />

      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              marginBottom: '1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #C33B33, #4D8B86)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Event Timeline
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'rgba(237, 232, 224, 0.7)',
            }}
          >
            Your journey to innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {/* Vertical Beam Container with rounded ends */}
          <div
            style={{
              position: 'absolute',
              left: isMobile ? '1rem' : '2rem',
              top: '3rem',
              bottom: '3rem',
              width: '3px',
              backgroundColor: 'rgba(195, 59, 51, 0.15)',
              borderRadius: '9999px',
              overflow: 'visible',
            }}
          >
            {/* Top gradient fade */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40px',
                background: 'linear-gradient(to bottom, rgba(14, 14, 14, 1), transparent)',
                zIndex: 2,
              }}
            />

            {/* Animated beam */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: beamHeight,
                transformOrigin: 'top',
                background: 'linear-gradient(to bottom, #C33B33, #4D8B86)',
                boxShadow: '0 0 15px rgba(195, 59, 51, 0.5)',
                borderRadius: '9999px',
              }}
            />

            {/* Race Flag at the tip of the beam */}
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                top: flagY,
                transform: 'translate(-50%, -8px)',
                zIndex: 10,
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#C33B33',
                  boxShadow: '0 4px 12px rgba(195, 59, 51, 0.6), 0 0 20px rgba(195, 59, 51, 0.4)',
                  border: '2px solid #0E0E0E',
                }}
              >
                <Flag size={18} style={{ color: '#FAF7F2' }} strokeWidth={2.5} />
              </motion.div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40px',
                background: 'linear-gradient(to top, rgba(14, 14, 14, 1), transparent)',
                zIndex: 2,
              }}
            />
          </div>

          {/* Timeline Items */}
          <div
            style={{
              paddingLeft: isMobile ? '3rem' : '5rem',
            }}
          >
            {timelineData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    position: 'relative',
                    marginBottom: index < timelineData.length - 1 ? (isMobile ? '3rem' : '4rem') : 0,
                  }}
                >
                  {/* Date Badge - Desktop: Left of beam, Mobile: Above card */}
                  {isMobile ? (
                    // MOBILE: Date badge above the card
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                        type: 'spring',
                        stiffness: 180,
                      }}
                      style={{
                        marginBottom: '0.75rem',
                        display: 'inline-block',
                        backgroundColor: 'rgba(20, 20, 20, 0.85)',
                        backdropFilter: 'blur(6px)',
                        borderRadius: '0.5rem',
                        border: `1px solid ${item.color}55`,
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: item.color,
                      }}
                    >
                      {item.date}
                    </motion.div>
                  ) : (
                    // DESKTOP: Date badge to the left of beam, aligned with card top
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                        type: 'spring',
                        stiffness: 180,
                      }}
                      style={{
                        position: 'absolute',
                        right: 'calc(100% + 3rem + 2px)', // Right edge of badge = beam left edge
                        top: '2rem', // Align with card's top padding
                        zIndex: 20,
                        backgroundColor: 'rgba(20, 20, 20, 0.85)',
                        backdropFilter: 'blur(6px)',
                        borderRadius: '0.6rem',
                        border: `1px solid ${item.color}55`,
                        padding: '0.5rem 0.75rem',
                        whiteSpace: 'nowrap',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: item.color,
                        textAlign: 'right',
                      }}
                    >
                      {item.date}
                    </motion.div>
                  )}

                  {/* Card with colored left border */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'relative',
                      padding: isMobile ? '1.5rem' : '2rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(20, 20, 20, 0.9)',
                      border: '1px solid rgba(60, 60, 60, 0.5)',
                      borderLeft: `4px solid ${item.color}`,
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: isMobile ? '1rem' : '1.5rem',
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: isMobile ? '48px' : '56px',
                          height: isMobile ? '48px' : '56px',
                          borderRadius: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: `${item.color}20`,
                          border: `2px solid ${item.color}40`,
                        }}
                      >
                        <Icon
                          size={isMobile ? 24 : 28}
                          style={{ color: item.color }}
                          strokeWidth={2}
                        />
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontSize: isMobile ? '1.25rem' : '1.5rem',
                            fontWeight: 700,
                            marginBottom: '0.5rem',
                            color: '#EDE8E0',
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            lineHeight: '1.625',
                            color: 'rgba(237, 232, 224, 0.85)',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
