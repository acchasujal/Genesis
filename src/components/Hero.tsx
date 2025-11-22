import React from 'react';
import { motion } from 'motion/react';
import heroImage from 'figma:asset/9a37286e101197d978dc518f5bf9258b949db55b.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Preload hero image for CLS optimization */}
      <link rel="preload" as="image" href={heroImage} />

      {/* Hero Background Image - Lunch Break album art */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          willChange: 'auto',
        }}
      />

      {/* Dark gradient overlay for contrast */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)'
        }}
      />

      {/* Lightweight CSS Katana Animation - No 3D */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-1 origin-left pointer-events-none hidden md:block"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(250, 247, 242, 0.6) 30%, rgba(250, 247, 242, 0.9) 50%, rgba(250, 247, 242, 0.6) 70%, transparent)',
          transform: 'rotate(-25deg)',
          boxShadow: '0 0 20px rgba(250, 247, 242, 0.3)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: [0, 1, 1],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 10,
          ease: 'easeInOut',
        }}
      >
        {/* Metallic shine effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
            filter: 'blur(1px)',
          }}
          animate={{
            x: ['0%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 10,
            ease: 'easeOut',
          }}
        />
      </motion.div>

      {/* Optimized Sakura Petals - CSS Transform Based (40-60 particles) */}
      {Array.from({ length: 50 }).map((_, i) => {
        const delay = Math.random() * 10;
        const duration = 15 + Math.random() * 10;
        const leftPosition = Math.random() * 100;
        const size = 4 + Math.random() * 6;
        
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${leftPosition}%`,
              top: '-10px',
              backgroundColor: ['#FFC6D0', '#E99AAA', '#F2B9C3'][i % 3],
              opacity: 0.4 + Math.random() * 0.3,
              willChange: 'transform',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* GENESIS Title - Japanese/Samurai Font */}
          <motion.h1
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(3rem, 15vw, 10rem)',
              fontFamily: '"Sawarabi Mincho", "Noto Serif JP", serif',
              fontWeight: 700,
              color: '#FAF7F2',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 24px rgba(0, 0, 0, 0.8), 2px 2px 0 rgba(195, 59, 51, 0.3)',
              WebkitTextStroke: '1px rgba(195, 59, 51, 0.2)',
              lineHeight: 1,
            }}
          >
            GENESIS
          </motion.h1>

          {/* Coming Soon - Clean Sans-Serif */}
          <motion.p
            className="text-xl sm:text-2xl md:text-4xl mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              fontFamily: '"Space Grotesk", "Inter", sans-serif',
              color: '#4D8B86',
              fontWeight: 500,
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)',
              fontSize: 'clamp(1.25rem, 4vw, 2.25rem)',
            }}
          >
            Coming Soon
          </motion.p>

          {/* Event Details */}
          <motion.div
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 space-y-1 sm:space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              fontFamily: '"Space Grotesk", sans-serif',
              color: 'rgba(250, 247, 242, 0.9)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)',
            }}
          >
            <p className="text-lg sm:text-xl md:text-2xl" style={{ fontWeight: 600 }}>
              6–7 February 2026
            </p>
            <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}>
              30-hour offline hackathon — VESIT Mumbai
            </p>
            <p style={{ 
              color: 'rgba(250, 247, 242, 0.7)', 
              fontSize: 'clamp(0.75rem, 2vw, 1rem)',
              marginTop: '0.5rem',
            }}>
              Vivekanand Education Society's Institute of Technology
            </p>
          </motion.div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block"
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('register');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              style={{
                background: '#C33B33',
                color: '#FAF7F2',
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 500,
                clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)',
                boxShadow: '0 4px 16px rgba(195, 59, 51, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)',
                minHeight: '44px',
                minWidth: '150px',
              }}
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: '#4D8B86' }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0.7], y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 2, duration: 0.8 },
            y: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' } 
          }}
        >
          <div 
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex items-start justify-center p-1.5 sm:p-2" 
            style={{ 
              borderColor: 'rgba(77, 139, 134, 0.6)',
              boxShadow: '0 0 8px rgba(77, 139, 134, 0.2)',
            }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ backgroundColor: '#4D8B86' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}