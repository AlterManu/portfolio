"use client";

import { useState } from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";

export default function About({ x, y }) {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 200 : 40;

  return (
    <section className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          ease: "backOut",
          duration: 0.3,
        }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          But you can call me Manu. <br />
          I&apos;m a brand new Creative developer
        </p>
      </motion.div>

      <div className={styles.body}>
        <p className={styles.mainParagraph}>
          Hi, I&apos;m Manu Maldonado <br />
          I&apos;m an experienced Frontend developer
        </p>
      </div>
    </section>
  );
}
