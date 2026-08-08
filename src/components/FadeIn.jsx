import React from "react";
import { motion } from "framer-motion";

export default function FadeIn({ 
  children, 
  direction = "up", // 'up', 'down', 'left', 'right'
  delay = 0, 
  className = "" 
}) {
  // Movement offset ko kam kar diya taake jump kam feel ho (40 -> 15)
  const directions = {
    up: { y: 15, x: 0 },
    down: { y: -15, x: 0 },
    left: { x: 15, y: 0 },
    right: { x: -15, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      /* 
        1. amount: 0 -> Jaise hi 1px bhi screen me aayega animate ho jayega.
        2. margin: "0px 0px -50px 0px" -> Screen top ke kareeb aate hi instant show karega.
      */
      viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.3, // Fast transition (0.6 -> 0.3)
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}