"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {/* 🔵 Första dynamiska formen */}
      <motion.div
        className="absolute bg-gradient-to-r from-[#B8336A] to-[#3B429F]  blur-[20px]"
        animate={{
          x: ["-20%", "100%",],
          y:["-20%, 20%"], // Mjukare och modernare rörelse
           // Bättre flyt
          width: ["250px", "550px", "650px", "750px"], // Dynamisk bredd
          height: ["250px", "350px", "550px", "250px"], // Dynamisk höjd
          opacity: [0.3, 0.9, 0.6, 0.1], // Smidig toning
          scale: [1, 1.3, 1.1, 0.95],
          borderRadius: ["15%", "60%", "35%", "85%"], // Mer flytande formändringar
        }}
        transition={{
          duration: 15, // Längre och smidigare animation
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

     

    </div>
  );
}








