import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';


const currentSponsors = [
  { name: 'Mcdonalds', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' },
  { name: 'ShwarmaJi', logo: 'https://shawarmaji.co.in/assets/img/food-pics/logo.png' },
  { name: 'Unstop', logo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-800x800.png' },
  { name: 'Give My Certificate', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcYIJAWI9_tnLby1dQV-dmGtCSv4HdFubbQ&s' },
  { name: 'Gemini', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png' },
  { name: 'Hinflon', logo: '' },
  { name: '.xyz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/2560px-.xyz_logo.svg.png' },
  { name: 'O2O', logo: '	https://www.o2o.ind.in/assets/img/logo.svg' },
  { name: 'Coding Gurus', logo: '' },
  { name: 'BMC', logo: 'https://www.mcgm.gov.in/com.mcgm.newframework/images/logo_V1.png' },
  { name: 'SUD Life', logo: 'https://dxwkpt4djlxwl.cloudfront.net/SUD_JV_Logo_cdce13ed61.svg' },
  { name: 'Nova AI', logo: 'https://novaapp.ai/_next/image?url=%2F_next%2Fstat…o.68348154faa05c8b769d8d4edff1ccaf.svg&w=256&q=75' },
  { name: 'Cyrene AI', logo: '' }
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
