import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(195, 59, 51, 0.2)' : '1px solid rgba(195, 59, 51, 0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="text-xl sm:text-2xl tracking-tight cursor-pointer"
              style={{ color: '#EDE8E0', fontWeight: 600 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('#home')}
            >
              <span style={{ color: '#C33B33' }}>GENESIS</span> 2026
            </motion.div>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-sm xl:text-base tracking-wide transition-colors"
                  style={{
                    color: activeSection === item.href.substring(1) ? '#C33B33' : 'rgba(237, 232, 224, 0.85)',
                    minHeight: '44px',
                    padding: '8px 4px',
                  }}
                  whileHover={{ color: '#C33B33' }}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: '#C33B33' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.button
              className="hidden lg:block px-6 xl:px-8 py-2.5 text-sm xl:text-base tracking-wide"
              onClick={() => scrollToSection('#register')}
              style={{
                backgroundColor: '#C33B33',
                color: '#FAF7F2',
                clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                minHeight: '44px',
              }}
              whileHover={{ scale: 1.05, backgroundColor: '#4D8B86' }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#EDE8E0',
                minWidth: '44px',
                minHeight: '44px',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Katana line accent */}
        <motion.div
          className="absolute bottom-0 left-0 h-px"
          style={{ backgroundColor: '#C33B33' }}
          initial={{ width: 0 }}
          animate={{ width: scrolled ? '100%' : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 left-0 right-0 max-h-[80vh] overflow-y-auto"
              style={{
                backgroundColor: 'rgba(14, 14, 14, 0.98)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(195, 59, 51, 0.3)',
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-4 py-3 transition-colors"
                    style={{
                      color: activeSection === item.href.substring(1) ? '#C33B33' : '#EDE8E0',
                      backgroundColor: activeSection === item.href.substring(1) 
                        ? 'rgba(195, 59, 51, 0.1)' 
                        : 'transparent',
                      borderLeft: activeSection === item.href.substring(1) 
                        ? '3px solid #C33B33' 
                        : '3px solid transparent',
                      fontSize: '16px',
                      minHeight: '44px',
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.button
                  onClick={() => scrollToSection('#register')}
                  className="w-full mt-4 px-6 py-3 text-center"
                  style={{
                    backgroundColor: '#C33B33',
                    color: '#FAF7F2',
                    fontSize: '16px',
                    minHeight: '44px',
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
