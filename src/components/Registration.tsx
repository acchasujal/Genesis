import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Registration() {
  return (
    <section
      id="register"
      className="relative py-20 px-4 flex items-center justify-center"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-4xl md:text-6xl mb-6 relative inline-block"
          style={{
            color: '#C33B33',
            textShadow: '0 2px 16px rgba(195, 59, 51, 0.3)',
          }}
        >
          Register Now
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
        <p className="text-lg mb-8" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
          Join us at GENESIS 2026
        </p>
        <motion.a
          href="https://unstop.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #C33B33 0%, #A02D26 100%)',
            color: '#FAF7F2',
            border: '1px solid rgba(250, 247, 242, 0.2)',
            borderRadius: '4px',
            boxShadow: '0 4px 16px rgba(195, 59, 51, 0.3), 0 2px 8px rgba(0, 0, 0, 0.3)',
            textDecoration: 'none',
            display: 'inline-flex',
            verticalAlign: 'middle',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(195, 59, 51, 0.4), 0 4px 12px rgba(0, 0, 0, 0.4)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Register on Unstop</span>
          <ExternalLink size={20} style={{ flexShrink: 0 }} />
        </motion.a>
      </motion.div>
    </section>
  );
}
