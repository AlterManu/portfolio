"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function ExperienceYear({ year }) {
  const yearRef = useRef(null);
  const isInView = useInView(yearRef);

  return (
    <motion.div
      className={year.class}
      ref={yearRef}
      animate={{
        opacity: isInView ? 1 : 0,
        transition: {
          duration: 1.5,
        },
      }}
    >
      <h3>{year.year}</h3>
    </motion.div>
  );
}
