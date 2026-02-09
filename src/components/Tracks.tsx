import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, DollarSign, Link, Sparkles } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import { TrackPopup } from './TrackPopup';

const tracks = [
  {
    name: 'AI',
    icon: Brain,
    color: '#C33B33',
    description: 'Machine Learning, Deep Learning, Computer Vision',
    psDescription: 'The AI track is all about building "smart" systems that can think and act on their own to tackle real-world business challenges. You\'ll get to play with cutting-edge tech like autonomous agents and predictive analytics to automate tasks, spot trends, and make operations smoother and faster.',
    problemStatements: [
      { id: 'AI1', title: 'AI01     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.0' },
      { id: 'AI2', title: 'AI02     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.ezzecbfginsw' },
      { id: 'AI3', title: 'AI03     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.oj6ahspcdi82' },
      { id: 'AI4', title: 'AI04     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.bev352p839x4' },
      { id: 'AI5', title: 'AI05     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.v5cm1uzbqqhe' },
    ],
  },
  {
    name: 'Sustainability',
    icon: DollarSign,
    color: '#4D8B86',
    description: 'Renewable Energy Systems, Circular Economy, ESG Analytics',
    psDescription: 'The Sustainability track invites you to build eco-friendly solutions for Mumbai\'s unique urban environment. You\'ll tackle real-world issues like improving waste management, creating smarter water systems, and boosting green spaces to help the Brihanmumbai Municipal Corporation (BMC) build a cleaner, more resilient city.',
    problemStatements: [
      { id: 'S1', title: 'S01     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.t4bnzr4g8fu4' },
      { id: 'S2', title: 'S02     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.k2zwehwdj6fa' },
      { id: 'S3', title: 'S03     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.l2fm22fwspbm' },
      { id: 'S4', title: 'S04     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.v412m4zhhvch' },
    ],
  },
  {
    name: 'CyreneAI',
    icon: Link,
    color: '#C33B33',
    description: 'Blockchain Domain -- Smart Contracts, DeFi, Web3 Applications',
    psDescription: 'The CyreneAI track is for those ready to push the limits of decentralization to solve tough trust and transparency issues. Dive into the world of smart contracts and distributed ledgers to build secure, unchangeable systems for everything from supply chains to digital identity.',
    problemStatements: [
      { id: 'B1', title: 'B01     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.lj1xy8p2jqhr' },
      { id: 'B2', title: 'B02     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.fuvt4ugkr9ud' },
      { id: 'B3', title: 'B03     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.mnb4cryy57go' },
      { id: 'B4', title: 'B04     ', url: 'https://docs.google.com/document/d/1WIk25HQ0ggmk01_HOMxNIVZMzlV98NkpndPZ4PiSaq0/edit?tab=t.3716li5t6b0p' },
    ],
  },
];

export default function Tracks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  return (
    <section id="tracks" className="relative min-h-screen py-20 px-4">
      {/* Background elements */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Banner - UPDATED FOR WINNERS */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm relative overflow-hidden mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 168, 75, 0.15), rgba(195, 59, 51, 0.15))',
              borderColor: 'rgba(212, 168, 75, 0.4)',
            }}
          >
            {/* Sparkle animation */}
            <motion.span
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(212, 168, 75, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(212, 168, 75, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(212, 168, 75, 0.3) 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#D4A84B' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#D4A84B' }}></span>
            </span>
            <span 
              className="text-lg md:text-xl font-black tracking-widest uppercase relative z-10"
              style={{
                background: 'linear-gradient(135deg, #D4A84B, #C33B33, #D4A84B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite',
              }}
            >
              Winners Announced! 🎉
            </span>
          </motion.div>

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
            EXPLORE THE CHALLENGES BELOW
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
                onClick={() => setSelectedTrack(index)}
              >
                <TiltCard
                  // Added pr-12 to ensure text doesn't overlap with the right-side badge
                  className="relative p-8 pr-12 backdrop-blur-xl border-l-4 overflow-hidden transition-all duration-300 flex flex-col h-full"
                  style={{
                    backgroundColor: 'rgba(14, 14, 14, 0.7)',
                    borderLeftColor: track.color,
                    minHeight: '240px',
                    boxShadow:
                      hoveredIndex === index
                        ? `0 12px 40px rgba(0, 0, 0, 0.6), inset -3px 0 16px ${track.color}40`
                        : '0 4px 16px rgba(0, 0, 0, 0.4)',
                  }}
                  scaleOnHover={1.05}
                  springOptions={{
                    stiffness: 260,
                    damping: 20,
                    mass: 0.5,
                  }}
                  spotlight={true}
                  spotlightColor={`${track.color}20`}
                >

                  {/* Vertical Right-Edge Strip - UPDATED FOR WINNERS */}
                  <div className="absolute top-8 right-0 z-20">
                    <div className="flex flex-col items-center gap-3 py-3 px-1.5 rounded-l-xl bg-white/5 border-y border-l border-white/10 backdrop-blur-md shadow-xl">
                      {/* Pulsing Dot */}
                      <span className="relative flex h-2 w-2">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                          style={{ backgroundColor: track.color }}
                        ></span>
                        <span
                          className="relative inline-flex rounded-full h-2 w-2"
                          style={{ backgroundColor: track.color }}
                        ></span>
                      </span>

                      {/* Vertical Text */}
                      <span
                        className="text-[10px] font-extrabold tracking-widest text-white/90 uppercase"
                        style={{ writingMode: 'vertical-rl' }}
                      >
                        Winners LIVE
                      </span>
                    </div>
                  </div>

                  <motion.div
                    className="mb-6"
                    animate={{ rotateZ: hoveredIndex === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={48} style={{ color: track.color }} strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl mb-4" style={{ color: track.color }}>
                    {track.name}
                  </h3>

                  <p className="leading-relaxed" style={{ color: 'rgba(237, 232, 224, 0.85)' }}>
                    {track.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    <Sparkles size={14} color={track.color} />
                    <span style={{ color: track.color }}>Click to view details</span>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-px origin-left"
                    style={{ backgroundColor: track.color }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div
                    className="absolute top-0 right-0 w-16 h-16 opacity-10"
                    style={{
                      background: `linear-gradient(135deg, ${track.color}, transparent)`,
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                    }}
                  />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Track Popup */}
      {selectedTrack !== null && (
        <TrackPopup
          isOpen={selectedTrack !== null}
          onClose={() => setSelectedTrack(null)}
          track={tracks[selectedTrack]}
        />
      )}
      
      {/* Add gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
