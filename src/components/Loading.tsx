import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/loading.css"
import doorOpenSfx from "../assets/door-open-107728.mp3";
import "../styles/loading.css";

interface JapaneseGateIntroProps {
  onFinish: () => void;
}

const JapaneseGateIntro: FC<JapaneseGateIntroProps> = ({ onFinish }) => {
  const gateRef = useRef<HTMLDivElement | null>(null);

  const [scale, setScale] = useState(1);
  const doorAudioRef = useRef<HTMLAudioElement | null>(null);

  // Play gate opening sound in sync with the door animation
  useEffect(() => {
    const audio = new Audio(doorOpenSfx);
    audio.volume = 0.5; // keep volume low
    doorAudioRef.current = audio;

    // Match the animation delay (1.6s) so the sound starts as doors move
    const timer = window.setTimeout(() => {
      audio.play().catch((err) => {
        console.log("Gate SFX blocked by autoplay policy", err);
      });
    }, 1600);

    return () => {
      window.clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  const [scene, setScene] = useState({
    scale: 1,
    y: 0,
  });

  useEffect(() => {
    const update = () => {
      if (!gateRef.current) return;

      const rect = gateRef.current.getBoundingClientRect();

      // 1️⃣ Device-safe zoom (width-based, clamped)
      const scale = Math.min(
        1.4,
        Math.max(1.1, window.innerWidth / 1200)
      );

      // 2️⃣ Object-anchored vertical centering
      const gateY = rect.top + rect.height / 2;
      const viewY = window.innerHeight / 2;

      let dy = viewY - gateY;

      // 3️⃣ Perceptual design offset (scale-aware)
      const DESIGN_Y_OFFSET = 40; // tweak once if needed
      dy += DESIGN_Y_OFFSET * scale;

      setScene({ scale, y: dy });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.div style={styles.container}>
      <motion.div
        style={styles.scene}
        initial={{ scale: 1, y: 0 }}
        animate={
          window.innerWidth < 500
            ? { scale: 1, y: 0 }
            : scene
        }
        transition={{
          delay: 0.7,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // cinematic
        }}
      >
        {/* LEFT GATE (ANCHOR) */}
        <motion.div
          ref={gateRef}
          style={{ ...styles.gate, ...styles.leftGate }}
          initial={{ x: 0 }}
          animate={{ x: "-105%" }}
          transition={{ delay: 1.6, duration: 1.4, ease: "easeInOut" }}
          onAnimationComplete={onFinish}
        />

        {/* RIGHT GATE */}
        <motion.div
          style={{ ...styles.gate, ...styles.rightGate }}
          initial={{ x: 0 }}
          animate={{ x: "105%" }}
          transition={{ delay: 1.6, duration: 1.4, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default JapaneseGateIntro;



const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "fixed",
    inset: 0,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    zIndex: 99,
  },

  scene: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    transformOrigin: "center center",
    willChange: "transform",
  },

  gate: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "50%",
    backgroundSize: "cover",
  },

  leftGate: {
    left: 0,
    backgroundImage: "url('/door2.png')",
    backgroundPosition: "top right",
  },

  rightGate: {
    right: 0,
    backgroundImage: "url('/door3.png')",
    backgroundPosition: "top left",
  },
};