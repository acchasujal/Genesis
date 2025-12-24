import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore: Cannot find module '../assets/lunchbreak.png'
import heroImage from '../assets/lunchbreak.png';
// --- CHANGE 1: Import your title image here ---
// @ts-ignore: Update this path to your actual image file
import titleImage from '../assets/genesis_title.png';
// @ts-ignore: Import cursor image
const cursorImageUrl = new URL('../assets/Pi7_cropper (1).png', import.meta.url).href;

// import Quest_Logo from '../assets/QuestIT_transparent.png';

// Helper: attach an image element that follows the mouse with smooth lerp and fade
function attachImageCursor(imgSrc: string) {
  const img = document.createElement('img');
  img.src = imgSrc;
  img.style.position = 'fixed';
  img.style.left = '0px';
  img.style.top = '0px';
  img.style.width = '20px';
  img.style.height = '20px';
  img.style.pointerEvents = 'none';
  img.style.transform = 'translate(-50%, -50%)';
  img.style.zIndex = '99999';
  img.style.opacity = '0';
  img.style.transition = 'opacity 180ms ease, transform 80ms linear';
  img.className = 'custom-hover-cursor';
  document.body.appendChild(img);

  let targetX = 0;
  let targetY = 0;
  let curX = 0;
  let curY = 0;
  let rafId: number | null = null;

  function update() {
    // faster lerp for snappier feeling
    curX += (targetX - curX) * 0.5;
    curY += (targetY - curY) * 0.5;
    img.style.transform = `translate(-50%, -50%) translate(${curX}px, ${curY}px)`;
    rafId = requestAnimationFrame(update);
  }

  function onMove(e: MouseEvent) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (rafId === null) update();
  }

  // show immediately (avoid gap) — caller should initialize position via setPosition
  img.style.opacity = '1';

  window.addEventListener('mousemove', onMove);

  function setPosition(x: number, y: number) {
    targetX = x;
    targetY = y;
    curX = x;
    curY = y;
    img.style.transform = `translate(-50%, -50%) translate(${curX}px, ${curY}px)`;
    if (rafId === null) update();
  }

  return {
    setPosition,
    remove() {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
      img.style.opacity = '0';
      setTimeout(() => {
        if (img && img.parentElement) img.parentElement.removeChild(img);
      }, 180);
    }
  };
}

interface CustomButtonElement extends HTMLButtonElement {
  _cursorCtl?: ReturnType<typeof attachImageCursor>;
  _prevCursor?: string;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. LOAD THE FONTS (Cinzel is still used for subtitles) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
      `}</style>

      {/* Preload hero image */}
      <link rel="preload" as="image" href={heroImage} />

      {/* Background Image */} 
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          willChange: 'auto',
          filter: 'none',
        }}
      />

      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.5 }}
      />

      {/* --- BACKGROUND ANIMATIONS (Katana & Sakura) --- */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-1 origin-left pointer-events-none hidden md:block"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(250, 247, 242, 0.6) 30%, rgba(250, 247, 242, 0.9) 50%, rgba(250, 247, 242, 0.6) 70%, transparent)',
          transform: 'rotate(-25deg)',
          boxShadow: '0 0 20px rgba(250, 247, 242, 0.3)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1, 1], opacity: [0, 0.8, 0] }}
        transition={{ duration: 2.9, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 10, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
            filter: 'blur(1px)',
          }}
          animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 10, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Sakura Petals */}
      {Array.from({ length: 50 }).map((_, i) => {
        const size = 4 + Math.random() * 6;
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `${size}px`, height: `${size}px`,
              left: `${Math.random() * 100}%`, top: '-10px',
              backgroundColor: ['#FFC6D0', '#E99AAA', '#F2B9C3'][i % 3],
              opacity: 0.4 + Math.random() * 0.3,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              delay: Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2,duration: 1.2, ease: 'easeOut' }}
          className="w-full flex flex-col items-center"
        >
          {/* --- CHANGE 2: IMAGE REPLACES TITLE TEXT --- */}
          <motion.img
            src={titleImage}
            alt="GENESIS"
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1.2 }}
            transition={{ duration: 1, delay: 2.3, ease: "easeOut" }}
            style={{
              width: '100%',
              maxWidth: '900px', // Limits size on large screens
              height: 'auto',
              // Optional: Adds a shadow to the image itself to make it pop
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))', 
            }}
          />

          {/* SUBTITLE */}
          <motion.p
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -80 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ 
              fontFamily: '"Cinzel", serif',
              color: '#FFFFFF', 
              fontWeight: 700,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              letterSpacing: '0.1em',
            }}
          >
            <span style={{ borderBottom: '2px solid #D31043', paddingBottom: '5px' }}>
              COMING SOON
            </span>
          </motion.p>

          {/* DETAILS SECTION */}
          <motion.div
            className="flex flex-col items-center gap-3 mb-10" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -80 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ 
              fontFamily: '"Cinzel", serif',
              color: '#fff',
            }}
          >
            {/* Date Pill */}
            <div style={{
               background: '#BE1E2D', 
               padding: '10px 35px',  
               borderRadius: '50px',
               boxShadow: '0 4px 15px rgba(190, 30, 45, 0.4)',
               fontWeight: 700,
               fontSize: '1.4rem',
               letterSpacing: '1px'
            }}>
               TBD
            </div>

            {/* Hackathon Text */}
            {/* <div style={{
               fontSize: '1.2rem',
               textShadow: '0 2px 4px rgba(0,0,0,0.9)',
               fontWeight: 600,
               marginTop: '5px',
               letterSpacing: '2px',
               color: '#FAF7F2'
            }}>
               30-HOUR HACKATHON
            </div>
          </motion.div> */}
            

          {/* REGISTER BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -80 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative inline-block"
          >
            <motion.button
              onClick={(e) => {
                const element = document.getElementById('register');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                e.currentTarget.style.cursor = 'none';
                const el = e.currentTarget as CustomButtonElement;
                el.style.cursor = 'none';
                if(el._cursorCtl) {
                  el._cursorCtl.remove();
                  delete el._cursorCtl;
                }
              }}
              className="relative px-16 sm:px-24 py-4 text-xl overflow-hidden group"
              onMouseEnter={(e) => {
                const el = e.currentTarget as any;
                // hide native cursor for this element and store previous value
                el._prevCursor = el.style.cursor;
                el.style.cursor = 'none';
                // attach and keep controller on element and immediately position it
                el._cursorCtl = attachImageCursor(cursorImageUrl);
                if (el._cursorCtl && typeof el._cursorCtl.setPosition === 'function') {
                  el._cursorCtl.setPosition(e.clientX, e.clientY);
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as any;
                if (el._cursorCtl) {
                  el._cursorCtl.remove();
                  delete el._cursorCtl;
                }
                // restore previous cursor
                if (typeof el._prevCursor !== 'undefined') {
                  el.style.cursor = el._prevCursor;
                  delete el._prevCursor;
                } else {
                  el.style.cursor = '';
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: 'transparent',
                color: '#FAF7F2',
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
                border: '2px solid #BE1E2D',
                borderRadius: '4px',
                boxShadow: '0 0 15px rgba(190, 30, 45, 0.3)',
                minWidth: '280px',
              }}
            >
              <span className="relative z-10">REGISTER NOW</span>
              <div 
                className="absolute inset-0 bg-[#BE1E2D] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"
                style={{ zIndex: 0, pointerEvents: 'none' }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1], y: [0, 10, 0] }}
          transition={{ opacity: { delay: 2, duration: 1 }, y: { repeat: Infinity, duration: 2 } }}
        >
          <div className="text-white opacity-70" style={{ fontFamily: '"Cinzel", serif', fontSize: '0.9rem' }}>
            
          </div>
          <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-transparent mx-auto mt-2 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
