import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, DollarSign, Link, Shield, Leaf, Heart } from 'lucide-react';

const tracks = [
  {
    name: 'AI',
    icon: Brain,
    color: '#C33B33',
    description: 'Machine Learning, Deep Learning, Computer Vision',
  },
  {
    name: 'FinTech',
    icon: DollarSign,
    color: '#4D8B86',
    description: 'Digital Banking, Payment Systems, Financial Analytics',
  },
  {
    name: 'Blockchain',
    icon: Link,
    color: '#C33B33',
    description: 'Smart Contracts, DeFi, Web3 Applications',
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: '#4D8B86',
    description: 'Threat Detection, Encryption, Network Security',
  },
  {
    name: 'Sustainability',
    icon: Leaf,
    color: '#C33B33',
    description: 'Green Tech, Climate Solutions, Resource Optimization',
  },
  {
    name: 'Healthcare',
    icon: Heart,
    color: '#4D8B86',
    description: 'HealthTech, Medical AI, Patient Care Systems',
  },
];

export default function Tracks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tracks" className="relative min-h-screen py-20 px-4">
      {/* Parallax sakura petals - continuity from above sections */}
      <motion.div
        className="absolute top-32 left-1/4 w-3 h-3 rounded-full pointer-events-none"
        style={{ backgroundColor: '#FFC6D0', opacity: 0.5 }}
        animate={{
          y: [0, 300],
          x: [0, -50],
          rotate: [0, 360],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-32 right-1/3 w-2 h-2 rounded-full pointer-events-none"
        style={{ backgroundColor: '#E99AAA', opacity: 0.4 }}
        animate={{
          y: [0, -200],
          x: [0, 40],
          rotate: [0, -360],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #C33B33, #4D8B86, #EDE8E0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Innovation Tracks
          </h2>
          <p className="text-lg" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Choose your domain and build the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.name}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Card background */}
                <div
                  className="relative p-8 backdrop-blur-xl border-l-4 overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(14, 14, 14, 0.7)',
                    borderLeftColor: track.color,
                    boxShadow:
                      hoveredIndex === index
                        ? `0 12px 40px rgba(0, 0, 0, 0.6), inset -3px 0 16px ${track.color}40`
                        : '0 4px 16px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    animate={{
                      rotateZ: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={48} style={{ color: track.color }} strokeWidth={1.5} />
                  </motion.div>

                  {/* Track Name */}
                  <h3 className="text-2xl md:text-3xl mb-4" style={{ color: track.color }}>
                    {track.name}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed" style={{ color: 'rgba(237, 232, 224, 0.85)' }}>
                    {track.description}
                  </p>

                  {/* Katana line accent on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px origin-left"
                    style={{ backgroundColor: track.color }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 opacity-10"
                    style={{
                      background: `linear-gradient(135deg, ${track.color}, transparent)`,
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Diagonal samurai accent line */}
      <div
        className="absolute top-1/4 left-0 w-full h-px rotate-1"
        style={{ backgroundColor: 'rgba(195, 59, 51, 0.2)' }}
      />
    </section>
  );
}
