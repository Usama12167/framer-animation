"use client";
import { motion } from "framer-motion";

export default function Template() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-red-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 3, 0], opacity: [0, 0.8, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="relative z-10 w-[200px] h-[200px] border rounded-3xl bg-red-500"
        initial={{ opacity: 0, scale: 0.5, x: -400 }} // Start off-screen to the left
        animate={{ opacity: 1, scale: 1, x: 0 }} // Move to the center of the screen
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeIn",
        }}
      />
    </div>
  );
}
