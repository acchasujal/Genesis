import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

const prizeCategories = [
  {
    tier: 'Bronze',
    amount: '₹5,000',
    icon: Medal,
    color: '#CD7F32',
    scale: 0.95,
    y: 30,
  },
  {
    tier: 'Gold',
    amount: '₹25,000',
    icon: Trophy,
    color: '#C33B33',
    scale: 1.1,
    y: 0,
  },
  {
    tier: 'Silver',
    amount: '₹10,000',
    icon: Award,
    color: '#4D8B86',
    scale: 0.95,
    y: 30,
  },
];

export default function Prizes() {
  return (
    <section id="prizes" className="relative min-h-screen py-20 px-4">
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
              background: 'linear-gradient(135deg, #C33B33, #4D8B86, #EDE8E0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Prizes & Rewards
          </h2>
          <p className="text-lg" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Compete for exciting cash prizes and recognition
          </p>
        </motion.div>

        {/* Prize Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizeCategories.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <motion.div
                key={prize.tier}
                className="relative"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: prize.y }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ scale: prize.scale }}
              >
                <TiltCard
                  className="relative p-8 backdrop-blur-xl border-t-4 overflow-hidden bg-slate-900/80 rounded-lg"
                  style={{
                    borderTopColor: prize.color,
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px ${prize.color}30`,
                  }}
                  rotateAmplitude={12}
                  scaleOnHover={1.08}
                  spotlight={true}
                  spotlightColor={`${prize.color}25`}
                >
                  {/* Floating icon */}
                  <motion.div
                    className="relative mx-auto w-24 h-24 mb-6 flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Icon size={64} style={{ color: prize.color }} strokeWidth={1.5} />
                  </motion.div>

                  {/* Tier name */}
                  <h3 className="text-3xl md:text-4xl text-center mb-4" style={{ color: prize.color }}>
                    {prize.tier}
                  </h3>

                  {/* Prize amount */}
                  <p className="text-2xl text-center mb-6" style={{ color: '#EDE8E0' }}>
                    {prize.amount}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: prize.color }} />
                </TiltCard>

                {/* Winner badge for Gold */}
                {prize.tier === 'Gold' && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 border-2"
                    style={{
                      borderColor: prize.color,
                      backgroundColor: '#0E0E0E',
                      color: prize.color,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    🏆 Winner
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TiltCard
            className="max-w-3xl mx-auto p-8 backdrop-blur-xl border-l-4 bg-slate-900/70 rounded-2xl"
            style={{
              borderLeftColor: '#C33B33',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(195, 59, 51, 0.2)',
            }}
            rotateAmplitude={8}
            spotlight={true}
            spotlightColor="rgba(195, 59, 51, 0.15)"
          >
            <h3 className="text-2xl text-center mb-4" style={{ color: '#C33B33' }}>
              Additional Perks
            </h3>
            <div className="grid md:grid-cols-2 gap-6" style={{ color: 'rgba(237, 232, 224, 0.85)' }}>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2" style={{ backgroundColor: '#C33B33' }} />
                <p>Certificates for all participants</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2" style={{ backgroundColor: '#4D8B86' }} />
                <p>Networking with industry leaders</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2" style={{ backgroundColor: '#C33B33' }} />
                <p>Mentorship from experts</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2" style={{ backgroundColor: '#4D8B86' }} />
                <p>Exciting sponsor goodies</p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
