import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who can participate in GENESIS 2026?',
    answer: 'GENESIS is open to all VESIT students passionate about technology and innovation. Whether you\'re a beginner or an experienced developer, you\'re welcome to participate!',
  },
  {
    question: 'What is the team size?',
    answer: 'Teams can have 3-4 members. You can form your own team or join others during the registration process. Solo participants will be matched with teams.',
  },
  {
    question: 'Is this an offline event?',
    answer: 'Yes, GENESIS 2026 is a fully offline hackathon happening at VESIT Campus, Mumbai. This allows for better collaboration, mentorship, and networking opportunities.',
  },
  {
    question: 'What are the prize categories?',
    answer: 'TBA',
  },
  {
    question: 'Will certificates be provided?',
    answer: 'Yes! All participants will receive participation certificates. Winners and finalists will receive special achievement certificates recognizing their accomplishments.',
  },
  {
    question: 'How do I register?',
    answer: 'Registration is now open! Click the "Register Now" button on the homepage to fill out the registration form. You\'ll receive a confirmation email with further details.',
  },
  {
    question: 'What should I bring to the hackathon?',
    answer: 'Bring your laptop, chargers, student ID, and your enthusiasm! We\'ll provide snacks, WiFi, and workspace.',
  },
  {
    question: 'Will there be mentors available?',
    answer: 'Absolutely! We\'ll have industry experts and experienced mentors available throughout the 24 hours to guide you, answer questions, and help refine your ideas.',
  },
];

// Refined ambient symbols - clustered near title, curated mix
const floatingRunes = [
  { x: '18%', y: '8%', size: '7rem', color: '#C33B33', symbol: '?', delay: 0, duration: 28, opacity: 0.07, blur: true },
  { x: '78%', y: '12%', size: '5rem', color: '#4D8B86', symbol: '{', delay: 2, duration: 32, opacity: 0.06, blur: false },
  { x: '35%', y: '18%', size: '9rem', color: '#C33B33', symbol: '...', delay: 4, duration: 30, opacity: 0.05, blur: true },
  { x: '65%', y: '25%', size: '6rem', color: '#4D8B86', symbol: '}', delay: 1.5, duration: 34, opacity: 0.07, blur: false },
  { x: '50%', y: '15%', size: '8rem', color: '#C33B33', symbol: '?', delay: 3, duration: 29, opacity: 0.06, blur: true },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* REFINED AMBIENT LAYER - DIGITAL INCENSE RISING FROM TITLE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingRunes.map((rune, index) => (
          <motion.div
            key={index}
            className="absolute select-none"
            style={{
              left: rune.x,
              top: rune.y,
              fontSize: rune.size,
              color: rune.color,
              fontWeight: 300,
              textShadow: `0 0 ${index % 2 === 0 ? '30px' : '15px'} ${rune.color}`,
              opacity: rune.opacity,
              fontFamily: rune.symbol === '{' || rune.symbol === '}' ? 'monospace' : 'inherit',
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, -10, 0],
              opacity: [rune.opacity, rune.opacity * 1.4, rune.opacity],
            }}
            transition={{
              duration: rune.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: rune.delay,
            }}
          >
            <span className={rune.blur ? 'blur-sm' : ''}>
              {rune.symbol}
            </span>
          </motion.div>
        ))}

        {/* Pulsing background glow - Core effect */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(195, 59, 51, 0.06) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary jade glow */}
        <motion.div
          className="absolute top-1/5 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(77, 139, 134, 0.05) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* TITLE WITH ANIMATED RED UNDERLINE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl mb-4 relative inline-block"
            style={{
              color: '#C33B33',
              textShadow: '0 2px 16px rgba(195, 59, 51, 0.3)',
            }}
          >
            Frequently Asked Questions
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
          <p className="text-lg mt-6" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Everything you need to know
          </p>
        </motion.div>

        {/* FAQ ACCORDION - SAMURAI ARMOR PLATES WITH LUXURIOUS MOTION */}
        <motion.div layout className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="relative overflow-hidden backdrop-blur-xl border-l-4 transition-colors duration-300"
                style={{
                  backgroundColor: isOpen ? 'rgba(20, 20, 20, 0.85)' : 'rgba(14, 14, 14, 0.7)',
                  borderLeftColor: isOpen ? '#C33B33' : 'rgba(195, 59, 51, 0.3)',
                  boxShadow: isOpen
                    ? '0 12px 32px rgba(0, 0, 0, 0.7), inset -3px 0 16px rgba(195, 59, 51, 0.25)'
                    : '0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 8,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), inset -3px 0 12px rgba(77, 139, 134, 0.15)',
                }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(195, 59, 51, 0.15) 0%, transparent 70%)',
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left transition-colors relative z-10"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="text-lg pr-8 font-medium" style={{ color: '#EDE8E0' }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={24} style={{ color: '#C33B33' }} />
                  </motion.div>
                </button>

                {/* ANSWER - LUXURIOUS FLUID SPRING ANIMATION */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 120,
                        damping: 20,
                        mass: 1,
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-6 pb-6 leading-relaxed" style={{ color: 'rgba(237, 232, 224, 0.85)' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* KATANA SLASH ACCENT */}
                {isOpen && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px z-10"
                    style={{ backgroundColor: '#C33B33', transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                  />
                )}

                {/* CORNER ACCENT GLOW */}
                {isOpen && (
                  <div
                    className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #C33B33, transparent)',
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CONTACT CTA - SAMURAI SEAL DESIGN */}
        <motion.div
          className="mt-16 text-center p-8 backdrop-blur-xl border-t-2 relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(14, 14, 14, 0.7)',
            borderTopColor: '#4D8B86',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #C33B33 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          <p className="mb-4 relative z-10" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Still have questions?
          </p>
          <p className="text-lg relative z-10">
            Reach out to us at{' '}
            <motion.a
              href="mailto:questit@ves.ac.in"
              className="transition-colors font-semibold"
              style={{ color: '#4D8B86' }}
              whileHover={{ color: '#C33B33', scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              questit@ves.ac.in
            </motion.a>
          </p>

          {/* Corner emblem */}
          <div
            className="absolute bottom-0 right-0 w-24 h-24 opacity-10"
            style={{
              background: 'linear-gradient(135deg, transparent, #4D8B86)',
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
