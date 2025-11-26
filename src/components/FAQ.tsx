import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who can participate in GENESIS 2026?',
    answer: 'GENESIS is open to all college students passionate about technology and innovation. Whether you\'re a beginner or an experienced developer, you\'re welcome to participate!',
  },
  {
    question: 'What is the team size?',
    answer: 'Teams can have 2-4 members. You can form your own team or join others during the registration process. Solo participants will be matched with teams.',
  },
  {
    question: 'Is this an offline event?',
    answer: 'Yes, GENESIS 2026 is a fully offline hackathon happening at VESIT Campus, Mumbai. This allows for better collaboration, mentorship, and networking opportunities.',
  },
  {
    question: 'What are the prize categories?',
    answer: 'Prizes are awarded in three tiers: Bronze (₹5,000), Silver (₹10,000), and Gold (₹25,000). Winners in each track also receive special recognition and certificates.',
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
    answer: 'Bring your laptop, chargers, student ID, and your enthusiasm! We\'ll provide meals, snacks, WiFi, and workspace. Optional: sleeping bags if you plan to code through the night!',
  },
  {
    question: 'Will there be mentors available?',
    answer: 'Absolutely! We\'ll have industry experts and experienced mentors available throughout the 30 hours to guide you, answer questions, and help refine your ideas.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-6xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #C33B33, #4D8B86)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Everything you need to know
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="relative overflow-hidden backdrop-blur-xl border-l-4 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(14, 14, 14, 0.7)',
                  borderLeftColor: isOpen ? '#C33B33' : 'rgba(195, 59, 51, 0.3)',
                  boxShadow: isOpen
                    ? '0 8px 24px rgba(0, 0, 0, 0.6), inset -3px 0 12px rgba(195, 59, 51, 0.2)'
                    : '0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left transition-colors"
                >
                  <span className="text-lg pr-8" style={{ color: '#EDE8E0' }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={24} style={{ color: '#C33B33' }} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 leading-relaxed" style={{ color: 'rgba(237, 232, 224, 0.85)' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Katana line accent */}
                {isOpen && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ backgroundColor: '#C33B33' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center p-8 backdrop-blur-xl border-t-2"
          style={{
            backgroundColor: 'rgba(14, 14, 14, 0.7)',
            borderTopColor: '#4D8B86',
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4" style={{ color: 'rgba(237, 232, 224, 0.7)' }}>
            Still have questions?
          </p>
          <p className="text-lg">
            Reach out to us at{' '}
            <a
              href="mailto:questit@ves.ac.in"
              className="transition-colors"
              style={{ color: '#4D8B86' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C33B33')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4D8B86')}
            >
              questit@ves.ac.in
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
