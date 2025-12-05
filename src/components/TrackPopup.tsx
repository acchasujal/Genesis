import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';


interface TrackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  track: {
    name: string;
    color: string;
    description: string;
  };
}

export function TrackPopup({ isOpen, onClose, track }: TrackPopupProps) {
  // Ensure these images exist in your /public/backgrounds/ folder
  const backgroundImages: { [key: string]: string } = {
    'AI': '/backgrounds/ai-bg.jpg',
    'FinTech': '/backgrounds/fintech-bg.jpg',
    'Blockchain': '/backgrounds/blockchain-bg.jpg'
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
                    This is a dummy postscript for the {track.name} track. 
                    Here you can add more detailed information, requirements, or 
                    any additional notes for participants.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  {/* --- ANIMATION ADDED HERE --- */}
                  <motion.button
                    onClick={onClose}
                    // Removed 'transition-colors' from className so motion handles it
                    className="px-6 py-3 rounded-lg font-medium outline-none" 
                    style={{
                      backgroundColor: track.color,
                      color: '#0E0E0E',
                      border: `2px solid ${track.color}`,
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
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}