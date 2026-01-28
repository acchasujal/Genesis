import { motion } from 'framer-motion';

export default function Prizes() {
  const prizes = [
    {
      track: 'AI',
      amount: '₹25,000',
      description: 'Artificial Intelligence Track',
      gradient: 'from-red-900/20 to-red-600/10',
      borderColor: 'border-[#BE1E2D]/30',
      glowColor: 'rgba(190, 30, 45, 0.4)',
    },
    {
      track: 'Blockchain',
      amount: '$400 USDC',
      description: 'Blockchain Track',
      gradient: 'from-red-900/20 to-red-600/10',
      borderColor: 'border-[#BE1E2D]/30',
      glowColor: 'rgba(190, 30, 45, 0.4)',
    },
    {
      track: 'Sustainability',
      amount: '₹25,000',
      description: 'Sustainability Track',
      gradient: 'from-red-900/20 to-red-600/10',
      borderColor: 'border-[#BE1E2D]/30',
      glowColor: 'rgba(190, 30, 45, 0.4)',
    },
  ];

  return (
    <section id="prizes" className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#0E0E0E]/95 to-[#0E0E0E]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 700,
              color: '#FAF7F2',
              textShadow: '0 0 20px rgba(190, 30, 45, 0.3)',
            }}
          >
            Prizes & Incentives
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 600,
              background: 'linear-gradient(to right, #BE1E2D, #FF6B6B, #BE1E2D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(190, 30, 45, 0.5)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Prizes and Goodies Worth ₹100,000
          </motion.p>
        </motion.div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.track}
              className={`relative group cursor-pointer ${prize.borderColor}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(190, 30, 45, 0.3)',
                borderRadius: '8px',
                padding: '2rem',
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 30px ${prize.glowColor}, inset 0 0 20px ${prize.glowColor}`,
                  pointerEvents: 'none',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Track Name */}
                <motion.h3
                  className="text-2xl md:text-3xl mb-4"
                  style={{
                    fontFamily: '"Cinzel", serif',
                    fontWeight: 700,
                    color: '#BE1E2D',
                    textShadow: '0 0 10px rgba(190, 30, 45, 0.5)',
                  }}
                >
                  {prize.track}
                </motion.h3>

                {/* Description */}
                <p
                  className="text-sm md:text-base mb-6"
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: 'rgba(250, 247, 242, 0.7)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {prize.description}
                </p>

                {/* Prize Amount */}
                <motion.div
                  className="text-4xl md:text-5xl"
                  style={{
                    fontFamily: '"Cinzel", serif',
                    fontWeight: 900,
                    color: '#FAF7F2',
                    textShadow: '0 0 15px rgba(190, 30, 45, 0.4)',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {prize.amount}
                </motion.div>

                {/* Decorative line */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-transparent via-[#BE1E2D] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                />
              </div>

              {/* Corner accents */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: '#BE1E2D' }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-50 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: '#BE1E2D' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p
            className="text-base md:text-lg"
            style={{
              fontFamily: '"Cinzel", serif',
              color: 'rgba(250, 247, 242, 0.6)',
              letterSpacing: '0.1em',
            }}
          >
            Plus Internship Opportunities, exciting goodies and swag for all participants
          </p>
        </motion.div>
      </div>
    </section>
  );
}
