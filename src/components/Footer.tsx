import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-4 overflow-hidden border-t" style={{ borderTopColor: 'rgba(195, 59, 51, 0.3)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent" />

      {/* Sakura petal drift - static background continuity */}
      <motion.div
        className="absolute top-20 left-1/4 w-4 h-4 rounded-full pointer-events-none"
        style={{ backgroundColor: '#FFC6D0', opacity: 0.4 }}
        animate={{
          y: [0, 400],
          x: [0, 60],
          rotate: [0, 360],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-40 right-1/3 w-3 h-3 rounded-full pointer-events-none"
        style={{ backgroundColor: '#E99AAA', opacity: 0.3 }}
        animate={{
          y: [0, 350],
          x: [0, -40],
          rotate: [0, -360],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
          delay: 4,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 w-3 h-3 rounded-full pointer-events-none"
        style={{ backgroundColor: '#F2B9C3', opacity: 0.35 }}
        animate={{
          y: [0, 200],
          x: [0, 30],
          rotate: [0, 360],
          opacity: [0.35, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Left: Info */}
          <div>
            <motion.h3
              className="text-2xl sm:text-3xl mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#EDE8E0' }}
            >
              <span style={{ color: '#C33B33' }}>GENESIS</span> 2026
            </motion.h3>
            <motion.p
              className="mb-4 sm:mb-6 text-sm sm:text-base"
              style={{ color: 'rgba(237, 232, 224, 0.7)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Powered by Quest-IT, VESIT
            </motion.p>

            <motion.div
              className="space-y-3 text-sm sm:text-base"
              style={{ color: 'rgba(237, 232, 224, 0.85)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#C33B33' }} />
                <span>Vivekanand Education Society's Institute of Technology, Mumbai</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6" style={{ color: '#4D8B86' }}>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:questit@ves.ac.in"
                className="flex items-center gap-3 p-4 backdrop-blur-xl border transition-all"
                style={{
                  backgroundColor: 'rgba(14, 14, 14, 0.7)',
                  borderColor: 'rgba(195, 59, 51, 0.3)',
                  color: 'rgba(237, 232, 224, 0.85)',
                }}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  borderColor: '#4D8B86',
                  color: '#EDE8E0',
                }}
              >
                <Mail size={20} style={{ color: '#4D8B86' }} />
                <span>questit@ves.ac.in</span>
              </motion.a>

              <motion.a
                href="https://instagram.com/questit_cell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 backdrop-blur-xl border transition-all"
                style={{
                  backgroundColor: 'rgba(14, 14, 14, 0.7)',
                  borderColor: 'rgba(195, 59, 51, 0.3)',
                  color: 'rgba(237, 232, 224, 0.85)',
                }}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  borderColor: '#C33B33',
                  color: '#EDE8E0',
                }}
              >
                <Instagram size={20} style={{ color: '#C33B33' }} />
                <span>@questit_cell</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider - katana line */}
        <motion.div
          className="h-px mb-8"
          style={{ backgroundColor: 'rgba(195, 59, 51, 0.3)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Bottom */}
        <motion.div
          className="text-center"
          style={{ color: 'rgba(237, 232, 224, 0.7)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">Quest-IT, VESIT. All rights reserved.</p>
          <p className="text-sm">Built with care for innovators, by innovators</p>
        </motion.div>
      </div>
    </footer>
  );
}
