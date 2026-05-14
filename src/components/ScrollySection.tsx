"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollySectionProps {
  children: ReactNode;
  index: number;
  isDark: boolean;
}

export default function ScrollySection({ children, index, isDark }: ScrollySectionProps) {
  const isEven = index % 2 === 0;

  // El color real de la sección
  const newColorClass = isDark ? "bg-[#100007]" : "bg-[#FBFBF2]";
  // El color de la sección anterior (el telón que la cubrirá al principio)
  const oldColorClass = isDark ? "bg-[#FBFBF2]" : "bg-[#100007]";

  // Variantes para la animación del contenido
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Cinematic ease-out
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center py-32 px-6 md:px-24 overflow-hidden ${newColorClass}`}
    >
      {/* El Telón (Curtain Wipe Effect) - Se coloca encima de todo (z-20) y se encoge hacia arriba */}
      <motion.div
        initial={{ height: "100%" }}
        whileInView={{ height: "0%" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true, margin: "-10%" }}
        className={`absolute top-0 left-0 w-full z-20 ${oldColorClass}`}
      />

      {/* Contenido */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-7xl w-full z-10 relative"
      >
        <div className={`flex flex-col md:flex-row gap-16 lg:gap-24 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
