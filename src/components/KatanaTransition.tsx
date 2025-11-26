import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface KatanaTransitionProps {
  active: boolean;
}

export default function KatanaTransition({ active }: KatanaTransitionProps) {
  return (
    <AnimatePresence>
      {active && (
        <>
          {/* Cinematic fade transition - slow and elegant */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(14, 14, 14, 0.8) 0%, rgba(14, 14, 14, 0.4) 100%)',
            }}
          />

          {/* Subtle samurai sheath motion - horizontal glide */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 0.15, 0] }}
            exit={{ x: '200%', opacity: 0 }}
            transition={{ 
              duration: 1.4, 
              ease: [0.22, 1, 0.36, 1],
              opacity: { times: [0, 0.5, 1] }
            }}
            className="fixed top-0 left-0 w-1 h-full z-40 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(195, 59, 51, 0.6) 50%, transparent)',
              boxShadow: '0 0 40px rgba(195, 59, 51, 0.4)',
            }}
          />

          {/* Wind particle drift - subtle movement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.2, 0], scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.2,
              ease: 'easeOut',
            }}
            className="fixed inset-0 z-39 pointer-events-none"
            style={{ 
              background: 'radial-gradient(circle at 60% 40%, rgba(77, 139, 134, 0.08) 0%, transparent 60%)',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
