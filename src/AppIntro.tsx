import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import JapaneseGateIntro from "./components/Loading";

interface Props {
  children: ReactNode;
}

export default function AppWithGateIntro({ children }: Props) {
  const [done, setDone] = useState(false);

  return (
    <>
      <JapaneseGateIntro onFinish={() => setDone(true)} />

      <motion.div
      >
        {children}
      </motion.div>
    </>
  );
}
