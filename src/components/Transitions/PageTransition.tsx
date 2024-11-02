"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "../context/TransitionContext";

const PageTransition = () => {
  const { isAnimating, isClosing } = useTransition();
  const curtainColors = ["#006661", "#004642", "#002B28", "#001614"];

  return (
    <AnimatePresence>
      {isAnimating && (
        <>
          {curtainColors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.4,
                delay: isClosing
                  ? (curtainColors.length - 1 - index) * 0.1
                  : index * 0.1,
                ease: "easeInOut",
              }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: color,
                zIndex: 100 + index,
              }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
