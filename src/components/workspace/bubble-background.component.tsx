import { useMemo } from "react";

import { motion } from "framer-motion";

import { Box } from "../../constants/mui.constants";

type Bubble = {
  id: number;
  size: number;
  left: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
};

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

const BubbleBackground = () => {
  const bubbles = useMemo<Bubble[]>(() => {
    const count = Math.floor(randomBetween(26, 38));

    return Array.from({ length: count }).map((_, idx) => {
      const size = Math.round(randomBetween(10, 68));

      return {
        id: idx,
        size,
        left: randomBetween(0, 100),
        opacity: randomBetween(0.05, 0.15),
        duration: randomBetween(12, 28),
        delay: randomBetween(0, 12),
        drift: randomBetween(-60, 60),
      };
    });
  }, []);

  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      {bubbles.map((b) => (
        <Box
          key={b.id}
          component={motion.div}
          initial={{ y: "110vh", x: 0, opacity: b.opacity }}
          animate={{ y: "-20vh", x: b.drift, opacity: b.opacity }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            left: `${b.left}%`,
            bottom: 0,
            width: b.size,
            height: b.size,
            borderRadius: "999px",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), rgba(255,255,255,0.02))",
            filter: "blur(0.2px)",
          }}
        />
      ))}
    </Box>
  );
};

export default BubbleBackground;
