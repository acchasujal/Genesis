import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';


const currentSponsors = [
  { name: 'ShwarmaJi', logo: 'public/sponsor_logos/shawarmaji-logo.png' },
  { name: 'Unstop', logo: 'public/sponsor_logos/unstop-logo.png' },
  { name: 'Give My Certificate', logo: 'public/sponsor_logos/givemycertificate.jpg' },
  { name: 'Gemini', logo: 'public/sponsor_logos/gemini.png' },
  { name: 'Hinflon', logo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/A3QwgMQEXQHa5bB8/1-removebg-preview-A3QONZEbD6frZJRR.png' },
  { name: '.xyz', logo: 'public/sponsor_logos/xyz.png' },
  { name: 'O2O', logo: 'public/sponsor_logos/O2O.svg' },
  { name: 'Coding Gurus', logo: 'public/sponsor_logos/Coding Gurus - Light Logo.png' },
  { name: 'BMC', logo: 'public/sponsor_logos/bmc-logo.png' },
  { name: 'SUD Life', logo: 'public/sponsor_logos/sudlife.svg' },
  { name: 'Nova AI', logo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/A3QwgMQEXQHa5bB8/1-removebg-preview-A3QONZEbD6frZJRR.png' },
  { name: 'Cyrene AI', logo: 'public/sponsor_logos/CyreneAi.png' },
  { name: 'Noah AI', logo: 'public/sponsor_logos/NoahAi.jpeg' },
  { name: 'Ludex AI', logo: 'https://framerusercontent.com/images/G4jOTAF2zwvDfnADfOcm3ij2Zk8.png' },
  { name: 'TigerPay X', logo: 'https://www.tigerpayx.com/assets/logo%20copy.svg' },
];

// Convert sponsors to CircularGallery format
const galleryItems = [
  ...currentSponsors.map(sponsor => ({ image: sponsor.logo, text: sponsor.name }))
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
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

        {/* Sponsor Gallery */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              items={galleryItems}
              bend={0.0}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
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
