import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';


interface TrackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  track: {
    name: string;
    color: string;
    description: string;
    psDescription?: string;
    problemStatements?: { id: string; title: string; url: string; }[];
  };
}

import { useState } from 'react';

export function TrackPopup({ isOpen, onClose, track }: TrackPopupProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Ensure these images exist in your /public/backgrounds/ folder
  const backgroundImages: { [key: string]: string } = {
    'AI': '/backgrounds/ai-bg.jpg',
    'Sustainability': '/backgrounds/fintech-bg.jpg',
    'SereneAI': '/backgrounds/blockchain-bg.jpg'
  };

  const bgUrl = backgroundImages[track.name];

  const popupStyle = {
    // Using simpler string concatenation for safety
    backgroundImage: bgUrl ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${bgUrl}')` : 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 shadow-2xl"
            style={{
              ...popupStyle,
              border: `2px solid ${track.color}`,
              color: '#EDE8E0'
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Flexbox Header for Title and Close Button */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl md:text-4xl font-bold pr-4" style={{ color: track.color }}>
                {track.name} Track
              </h2>

              <button
                onClick={onClose}
                className="p-2 -mt-2 -mr-2 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                aria-label="Close popup"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg">{track.description}</p>

                <div className="mt-6 p-4 bg-black/30 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">PS:</h3>
                  <p className="italic">
                    {track.psDescription || `This is the ${track.name} track. More details coming soon.`}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-4 items-center">
                  {/* --- ANIMATION ADDED HERE --- */}
                  <motion.button
                    onClick={onClose}
                    // Removed 'transition-colors' from className so motion handles it
                    className="px-6 py-3 rounded-lg font-medium outline-none"
                    style={{
                      backgroundColor: '#D4A84B',
                      color: '#0E0E0E',
                      border: '2px solid #D4A84B',
                    }}
                    // Animation props:
                    whileHover={{
                      scale: 1.05,
                      filter: "brightness(1.1)", // Makes it slightly brighter on hover
                    }}
                    whileTap={{
                      scale: 0.95 // Shrinks slightly on click
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    Got it!
                  </motion.button>
                  {/* -------------------------- */}

                  {/* --- DOWNLOAD PS DROPDOWN --- */}
                  {track.problemStatements && track.problemStatements.length > 0 && (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <motion.button
                        className="px-6 py-3 rounded-lg font-medium outline-none flex items-center gap-2"
                        style={{
                          backgroundColor: '#D4A84B',
                          color: '#0E0E0E',
                          border: '2px solid #D4A84B',
                        }}
                        whileHover={{
                          scale: 1.05,
                          filter: 'brightness(0.95)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        Download PS
                        <motion.span
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            // 1. Updated Animation: Animate from y: 10 (below) to y: 0 to match bottom anchoring
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}

                            // 2. Updated Classes: 
                            // 'right-full' puts it on the left. 
                            // 'mr-3' adds spacing between button and menu.
                            // 'bottom-0' aligns the bottom of the menu with the bottom of the button.
                            className="absolute right-full mr-3 bottom-0 w-72 rounded-xl overflow-hidden shadow-2xl z-50"

                            style={{
                              background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.98), rgba(10, 10, 10, 0.98))',
                              border: '1px solid rgba(212, 168, 75, 0.3)',
                              backdropFilter: 'blur(20px)',
                              // Optional: Ensure it grows upwards if the content is dynamic
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-end'
                            }}
                          >
                            <div className="p-2">
                              <div className="text-xs uppercase tracking-wider px-3 py-2 text-gray-400 font-semibold">
                                Problem Statements
                              </div>
                              {track.problemStatements.map((ps, index) => (
                                <button
                                  key={ps.id}
                                  className="w-full text-left px-3 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 group"
                                  style={{
                                    marginTop: index > 0 ? '4px' : '0',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(212, 168, 75, 0.15)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                  }}
                                  onClick={() => {
                                    window.open(ps.url, '_blank');
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                                    style={{
                                      backgroundColor: 'rgba(212, 168, 75, 0.2)',
                                      color: '#D4A84B',
                                    }}
                                  >
                                    {ps.id}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="font-medium text-white">{ps.title}</span>
                                    <span className="text-xs text-gray-400">Click to download</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}