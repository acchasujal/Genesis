import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, Users, Code, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    icon: Calendar,
    title: 'Registration',
    date: 'December 2025 - January 2026',
    description: 'Open registration for all aspiring innovators',
    color: '#C33B33',
  },
  {
    icon: Users,
    title: 'Shortlisting',
    date: 'Late January 2026',
    description: 'Selection of finalist teams based on ideas',
    color: '#4D8B86',
  },
  {
    icon: Code,
    title: 'Hackathon',
    date: '6-7 February 2026',
    description: '30 hours of intense coding and innovation',
    color: '#C33B33',
  },
  {
    icon: Trophy,
    title: 'Final Pitch',
    date: '7 February 2026',
    description: 'Present your solutions and win amazing prizes',
    color: '#4D8B86',
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl mb-4"
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

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:block relative">
          {/* Progress line */}
          <div
            className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2"
            style={{ backgroundColor: 'rgba(195, 59, 51, 0.2)' }}
          >
            <motion.div
              className="h-full"
              style={{
                scaleX: lineProgress,
                transformOrigin: 'left',
                background: 'linear-gradient(90deg, #C33B33, #4D8B86)',
              }}
            />
          </div>

          {/* Timeline events */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Icon container */}
                  <motion.div
                    className="relative mx-auto mb-8 w-20 h-20 border-2 flex items-center justify-center"
                    style={{
                      backgroundColor: '#0E0E0E',
                      borderColor: event.color,
                      boxShadow: `0 4px 16px rgba(0, 0, 0, 0.5)`,
                    }}
                    whileHover={{ scale: 1.2, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={32} style={{ color: event.color }} />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className="p-6 backdrop-blur-xl border-l-4"
                    style={{
                      backgroundColor: 'rgba(14, 14, 14, 0.7)',
                      borderLeftColor: event.color,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow: `0 8px 24px rgba(0, 0, 0, 0.6), inset -2px 0 12px ${event.color}40`,
                    }}
                  >
                    <h3 className="text-xl mb-2" style={{ color: event.color }}>
                      {event.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: '#4D8B86' }}>
                      {event.date}
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(237, 232, 224, 0.85)' }}>
                      {event.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden relative">
          {/* Vertical line */}
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

          {/* Timeline events */}
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
                  {/* Icon */}
                  <motion.div
                    className="relative flex-shrink-0 w-16 h-16 border-2 flex items-center justify-center"
                    style={{
                      backgroundColor: '#0E0E0E',
                      borderColor: event.color,
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={28} style={{ color: event.color }} />
                  </motion.div>

                  {/* Content */}
                  <div
                    className="flex-1 p-6 border-l-4"
                    style={{
                      backgroundColor: 'rgba(14, 14, 14, 0.7)',
                      borderLeftColor: event.color,
                    }}
                  >
                    <h3 className="text-xl mb-2" style={{ color: event.color }}>
                      {event.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: '#4D8B86' }}>
                      {event.date}
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(237, 232, 224, 0.85)' }}>
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
