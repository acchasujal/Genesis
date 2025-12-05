import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TiltCard } from './ui/TiltCard';

export default function AboutGenesis() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      id="details"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      {/* Parallax sakura petals - gentle drift */}
      <motion.div
        className="absolute top-32 right-1/4 w-4 h-4 rounded-full pointer-events-none"
        style={{ backgroundColor: '#FFC6D0', opacity: 0.5 }}
        animate={{
          y: [0, 300],
          x: [0, -40],
          rotate: [0, 360],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/3 w-3 h-3 rounded-full pointer-events-none"
        style={{ backgroundColor: '#E99AAA', opacity: 0.4 }}
        animate={{
          y: [0, -250],
          x: [0, 50],
          rotate: [0, -360],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
          delay: 3,
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Japanese-inspired visual element - circular emblems */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Outer circle - slow rotation */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border-2"
            style={{
              borderColor: 'rgba(195, 59, 51, 0.3)',
              boxShadow: '0 0 40px rgba(195, 59, 51, 0.1)',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Circle decorations - samurai clan emblem style */}
            {[0, 90, 180, 270].map((angle, i) => (
              <div
                key={i}
                className="absolute w-3 h-3"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-160px)`,
                  backgroundColor: '#C33B33',
                  borderRadius: '50%',
                }}
              />
            ))}
          </motion.div>

          {/* Middle circle - counter rotation */}
          <motion.div
            className="absolute w-60 h-60 rounded-full border-2"
            style={{
              borderColor: 'rgba(77, 139, 134, 0.4)',
              boxShadow: '0 0 30px rgba(77, 139, 134, 0.15)',
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Inner decorations */}
            {[45, 135, 225, 315].map((angle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`,
                  backgroundColor: '#4D8B86',
                  borderRadius: '50%',
                }}
              />
            ))}
          </motion.div>

          {/* Center emblem - subtle pulse */}
          <motion.div
            className="absolute w-40 h-40 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(195, 59, 51, 0.2) 0%, rgba(14, 14, 14, 0.8) 70%)',
              border: '2px solid rgba(195, 59, 51, 0.5)',
              boxShadow: '0 0 30px rgba(195, 59, 51, 0.2)',
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Center character/symbol */}
            <span
              className="text-6xl"
              style={{
                color: '#FAF7F2',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
              }}
            >
              創
            </span>
          </motion.div>

          {/* Floating sakura petals around emblem */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-6 h-6"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg viewBox="0 0 24 24" fill="#FFC6D0" opacity="0.7">
              <path d="M12 2C9 2 7 4 7 7c0 2.5 2 4.5 5 4.5 3 0 5-2 5-4.5 0-3-2-5-5-5zm0 16c-3 0-5 2-5 5h10c0-3-2-5-5-5z" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-5 h-5"
            animate={{
              y: [0, -15, 0],
              x: [0, -8, 0],
              rotate: [0, -360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <svg viewBox="0 0 24 24" fill="#E99AAA" opacity="0.6">
              <path d="M12 2C9 2 7 4 7 7c0 2.5 2 4.5 5 4.5 3 0 5-2 5-4.5 0-3-2-5-5-5zm0 16c-3 0-5 2-5 5h10c0-3-2-5-5-5z" />
            </svg>
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #C33B33, #4D8B86)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About GENESIS
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed mb-8"
            style={{ color: 'rgba(237, 232, 224, 0.85)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GENESIS is a 30-hour offline hackathon bringing together the brightest minds to innovate,
            collaborate, and create groundbreaking solutions. Join us for an intense weekend of coding,
            learning, and building the future.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Registrations', value: '1000+', color: '#C33B33' },
              { label: 'Finalist Teams', value: '45+', color: '#4D8B86' },
              { label: 'Organizers', value: '40+', color: '#C33B33' },
              { label: 'Tech Tracks', value: '6', color: '#4D8B86' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard
                  className="relative p-6 backdrop-blur-xl border-l-4 bg-slate-900/70 rounded-lg"
                  style={{
                    borderLeftColor: stat.color,
                    boxShadow: `0 4px 16px rgba(0, 0, 0, 0.4), 0 0 0 1px ${stat.color}20`,
                  }}
                  rotateAmplitude={12}
                  scaleOnHover={1.08}
                >
                  <div className="text-3xl mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
                    {stat.label}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Tracks List */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TiltCard
              className="mt-8 p-6 backdrop-blur-xl border-t-2 bg-slate-900/70 rounded-lg"
              style={{
                borderTopColor: '#C33B33',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(195, 59, 51, 0.2)',
              }}
              rotateAmplitude={8}
            >
              <h3 className="text-xl mb-4" style={{ color: '#4D8B86' }}>
                Focus Tracks
              </h3>
              <div className="flex flex-wrap gap-3">
                {['AI', 'FinTech', 'Blockchain'].map(
                  (track) => (
                    <span
                      key={track}
                      className="px-4 py-2 text-sm"
                      style={{
                        backgroundColor: 'rgba(195, 59, 51, 0.15)',
                        color: '#EDE8E0',
                        border: '1px solid rgba(195, 59, 51, 0.3)',
                      }}
                    >
                      {track}
                    </span>
                  )
                )}
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
