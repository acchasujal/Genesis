import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AboutGenesis from './components/AboutGenesis';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Scene3D from './components/Scene3D';
import KatanaTransition from './components/KatanaTransition';
import Registration from './components/Registration';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          if (currentSection !== index) {
            setTransitioning(true);
            setCurrentSection(index);
            setTimeout(() => setTransitioning(false), 700);
            setTimeout(() => setTransitioning(false), 1200);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="relative bg-[#0E0E0E] text-white overflow-x-hidden">
      {/* 3D Background Scene with sakura petals */}
      <Scene3D scrollProgress={scrollYProgress} />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Cinematic Samurai Transition Effect */}
      <KatanaTransition active={transitioning} />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <AboutUs />
        <AboutGenesis />
        <Tracks />
        <Timeline />
        <Prizes />
        <Sponsors />
        <FAQ />
        <Registration />
        <Footer />
      </div>
    </div>
  );
}