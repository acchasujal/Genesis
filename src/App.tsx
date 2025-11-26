// src/App.tsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import KatanaTransition from './components/KatanaTransition';
import Registration from './components/Registration';
import ErrorBoundary from './ErrorBoundary';

// Lazy-load the heavy 3D scene so it doesn't block initial render
const Scene3D = lazy(() => import('./components/Scene3D'));

export default function App(): JSX.Element {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);

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
            // two timeouts to match original feel
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
      {/* 3D Background Scene with sakura petals (lazy + guarded) */}
      <ErrorBoundary>
        <Suspense
          fallback={
            // small invisible placeholder so layout isn't affected; change if you prefer a loader
            <div aria-hidden className="pointer-events-none" />
          }
        >
          <Scene3D scrollProgress={scrollYProgress} />
        </Suspense>
      </ErrorBoundary>

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
