import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AboutGenesis from './components/AboutGenesis';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import KatanaTransition from './components/KatanaTransition';
import Registration from './components/Registration';
import ErrorBoundary from './ErrorBoundary';


// Lazy-load the heavy 3D scene
const Scene3D = lazy(() => import('./components/Scene3D'));

export default function App(): JSX.Element {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Section Tracking (Decoupled from Transition Trigger)
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          if (currentSection !== index) {
            setCurrentSection(index);
            // Note: We removed the auto-triggering of setTransitioning(true) here
            // to make the scrolling feel smoother and less interruptive.
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="relative bg-[#0E0E0E] text-white overflow-x-hidden">
      {/* Global Noise Overlay for Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          mixBlendMode: 'overlay'
        }}
      />

      {/* 3D Background Scene */}
      <ErrorBoundary>
        <Suspense fallback={<div aria-hidden className="pointer-events-none" />}>
          <Scene3D scrollProgress={scrollYProgress} />
        </Suspense>
      </ErrorBoundary>

      <Navbar />

      <KatanaTransition active={transitioning} />

      <div className="relative z-10">
        <Hero />
        <AboutUs />
        <AboutGenesis />
        <Tracks />
        <Prizes />
        <Timeline />
        <Sponsors />
        <FAQ />
        <Registration />
        <Footer />
      </div>
    </div>
  );
}
