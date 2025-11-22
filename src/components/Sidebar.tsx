import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

export default function Sidebar() {
  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div
        className="p-6 rounded-none border"
        style={{
          backgroundColor: 'rgba(14, 14, 14, 0.7)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(195, 59, 51, 0.3)',
          borderLeftWidth: '3px',
          borderLeftColor: '#C33B33',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="space-y-6 w-48">
          {/* Quick Info */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-start gap-3">
              <Calendar size={18} style={{ color: '#C33B33' }} className="mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs" style={{ color: '#4D8B86' }}>Event Date</p>
                <p className="text-sm" style={{ color: '#EDE8E0' }}>6-7 Feb 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users size={18} style={{ color: '#C33B33' }} className="mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs" style={{ color: '#4D8B86' }}>Teams</p>
                <p className="text-sm" style={{ color: '#EDE8E0' }}>45+ Finalists</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award size={18} style={{ color: '#C33B33' }} className="mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs" style={{ color: '#4D8B86' }}>Prize Pool</p>
                <p className="text-sm" style={{ color: '#EDE8E0' }}>₹50,000+</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} style={{ color: '#C33B33' }} className="mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs" style={{ color: '#4D8B86' }}>Venue</p>
                <p className="text-sm" style={{ color: '#EDE8E0' }}>VESIT Mumbai</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="h-px"
            style={{ backgroundColor: 'rgba(195, 59, 51, 0.3)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          />

          {/* Status */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <p className="text-xs mb-2" style={{ color: '#4D8B86' }}>Registration</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(77, 139, 134, 0.2)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4D8B86' }} />
              <span className="text-xs" style={{ color: '#EDE8E0' }}>Open</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
