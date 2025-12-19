import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';

const previousSponsors = [
  { name: 'Unstop', logo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/icon/unstop-icon-800x800.png' },
  { name: 'GeeksforGeeks', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/GeeksForGeeks_logo.png/1280px-GeeksForGeeks_logo.png' },
  { name: 'Admit Abroad ', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4CRROP-YMYVuN87iSnfNE5efPANk_WL5qOCxwMAhx4K-PitFoL5pD49aoJ2Sf3QeTv0&usqp=CAU' },
  { name: 'Trade Diary', logo: 'https://tradediary.in/assets/images/logo-dark.png' },
];

const currentSponsors = [
  { name: '.xyz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/.xyz_logo.svg/2560px-.xyz_logo.svg.png' },
  { name: 'ShwarmaJi', logo: 'https://shawarmaji.co.in/assets/img/food-pics/logo.png' },
  { name: 'Mcdonalds', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' },
  { name: 'InterviewCake', logo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/gallery/60aba3315a79b_ic.png?d=600x600' },
  { name: 'Fueler', logo: 'https://avatars.githubusercontent.com/u/91483435?s=280&v=4' },
  { name: 'Gemini', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png' },
  { name: 'Interview Buddy', logo: 'https://interviewbuddy.net/favicon.png' },
  { name: 'Give My Certificate', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcYIJAWI9_tnLby1dQV-dmGtCSv4HdFubbQ&s' },
  { name: 'Gina Drinks', logo: '/assets/Gina-drinks.jpeg' }
];

// Convert sponsors to CircularGallery format
const galleryItems = [
  ...currentSponsors.map(sponsor => ({ image: sponsor.logo, text: sponsor.name })),
  ...previousSponsors.map(sponsor => ({ image: sponsor.logo, text: sponsor.name })),
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
