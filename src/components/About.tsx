import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Target } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Angled Background Divider */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-indigo-950 to-transparent transform -skew-y-2"></div>
      </div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 border-2 border-[#00E0FF] transform rotate-45"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 border-2 border-[#8F00FF] transform rotate-12"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="text-sm text-[#00E0FF] uppercase tracking-[0.3em] mb-4">The Movement</div>
            <h2 className="text-6xl md:text-8xl text-white relative"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="relative">
                About
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6600] via-[#00E0FF] to-[#8F00FF]"></div>
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <TiltCard
                className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-[#FF6600]/50 transition-all"
                rotateAmplitude={12}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/10 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6600] to-[#FF8833] flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-4">VESIT</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Vivekanand Education Society's Institute of Technology is one of Mumbai's premier engineering colleges, fostering innovation and technical excellence since its inception.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <TiltCard
                className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-[#00E0FF]/50 transition-all"
                rotateAmplitude={12}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00E0FF] to-[#00B8D4] flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-4">Quest-IT</h3>
                  <p className="text-gray-400 leading-relaxed">
                    VESIT's premier technical committee dedicated to organizing cutting-edge events, workshops, and hackathons that push the boundaries of innovation.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <TiltCard
                className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-[#8F00FF]/50 transition-all"
                rotateAmplitude={12}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8F00FF]/10 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8F00FF] to-[#B24BF3] flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-4">GENESIS 2026</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our flagship 24-hour hackathon where innovation meets execution. This year's DHH Music × Tech theme merges cultural expression with cutting-edge technology.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Featured Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <TiltCard
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm"
              rotateAmplitude={8}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600]/5 via-[#00E0FF]/5 to-[#8F00FF]/5 rounded-3xl blur-3xl"></div>
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <motion.div style={{ y }}>
                  <div className="text-[#00E0FF] uppercase tracking-[0.3em] text-sm mb-4">Why Genesis?</div>
                  <h3 className="text-4xl md:text-5xl text-white mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Where Innovation Meets Reality
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    GENESIS isn't just another hackathon — it's a movement. We bring together 250+ of the brightest minds to solve real-world problems, build groundbreaking solutions, and push the boundaries of what's possible in tech.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-full text-[#FF6600]">
                      30 Hours
                    </div>
                    <div className="px-4 py-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full text-[#00E0FF]">
                      6 Tracks
                    </div>
                    <div className="px-4 py-2 bg-[#8F00FF]/10 border border-[#8F00FF]/30 rounded-full text-[#8F00FF]">
                      ₹1.5L+ Prizes
                    </div>
                  </div>
                </motion.div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden border border-slate-700">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-7xl mb-4">🎵</div>
                        <div className="text-2xl text-white mb-2"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          DHH Music × Tech
                        </div>
                        <div className="text-gray-400">This Year's Theme</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Bottom Angled Divider */}
      <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent transform skew-y-2"></div>
    </section>
  );
}
