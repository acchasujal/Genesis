import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './ui/TiltCard';

const previousSponsors = [
  { name: 'GeeksforGeeks', logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png' },
  { name: 'Scrimba', logo: 'https://avatars.githubusercontent.com/u/28915900?s=200&v=4' },
  { name: 'Network Marvels', logo: 'https://via.placeholder.com/150/4D8B86/FFFFFF?text=NM' },
];

const currentSponsors = [
  { name: 'Gemini', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
  { name: 'Interview Buddy', logo: 'https://via.placeholder.com/150/C33B33/FFFFFF?text=IB' },
  { name: 'Unstop', logo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/logo_new.svg' },
  { name: 'Give My Certificate', logo: 'https://via.placeholder.com/150/4D8B86/FFFFFF?text=GMC' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl mb-4 relative inline-block"
            style={{
              color: '#C33B33',
              textShadow: '0 2px 16px rgba(195, 59, 51, 0.3)',
            }}
          >
            Sponsors
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1"
              style={{
                background: 'linear-gradient(to right, transparent, #C33B33 20%, #C33B33 80%, transparent)',
                opacity: 0.6,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-lg" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Powered by innovation leaders
          </p>
        </motion.div>

        {/* Current Sponsors */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-12" style={{ color: '#4D8B86' }}>
            Current Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard
                  className="relative p-6 backdrop-blur-xl rounded-xl overflow-hidden flex items-center justify-center h-40"
                  style={{
                    backgroundColor: 'rgba(14, 14, 14, 0.7)',
                    border: '1px solid rgba(195, 59, 51, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                  scaleOnHover={1.05}
                  rotateAmplitude={12}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-20 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                  {/* Decorative corner accent */}
                  <div
                    className="absolute top-0 right-0 w-10 h-10 opacity-30 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #C33B33, transparent)',
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                    }}
                  />
                </TiltCard>
                <motion.p
                  className="text-center mt-4 text-sm font-medium"
                  style={{ color: 'rgba(237, 232, 224, 0.8)' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {sponsor.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Previous Sponsors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-12" style={{ color: '#4D8B86' }}>
            Previous Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {previousSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard
                  className="relative p-6 backdrop-blur-xl rounded-xl overflow-hidden flex items-center justify-center h-32"
                  style={{
                    backgroundColor: 'rgba(14, 14, 14, 0.6)',
                    border: '1px solid rgba(77, 139, 134, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                  scaleOnHover={1.05}
                  rotateAmplitude={10}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-16 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                  <div
                    className="absolute top-0 right-0 w-8 h-8 opacity-20 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #4D8B86, transparent)',
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                    }}
                  />
                </TiltCard>
                <motion.p
                  className="text-center mt-3 text-sm"
                  style={{ color: 'rgba(237, 232, 224, 0.6)' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {sponsor.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full pointer-events-none"
        style={{ backgroundColor: '#FFC6D0', opacity: 0.5 }}
        animate={{
          y: [0, 200],
          x: [0, -50],
          rotate: [0, 360],
          opacity: [0.5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full pointer-events-none"
        style={{ backgroundColor: '#E99AAA', opacity: 0.4 }}
        animate={{
          y: [0, 150],
          x: [0, 40],
          rotate: [0, -360],
          opacity: [0.4, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 2 }}
      />
    </section>
  );
}
