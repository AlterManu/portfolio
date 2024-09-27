"use client";
import React, { useRef } from "react";
import styles from "./Hero.module.scss";
import profile from "../../assets/images/profile.png";
import asterisk from "../../assets/images/asterisk.png";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  // * Hooks
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"],
  });
  const translateTop = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const translateBottom = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.imageContainer}>
          {/* eslint-disable-next-line */}
          <img src={profile.src} alt="hero" className={styles.image} />
        </div>
        <div className={styles.titleContainer} ref={container}>
          <motion.h1
            className={styles.title}
            style={{ translateY: translateTop }}
          >
            HI THERE
          </motion.h1>
          <motion.div
            className={styles.titleContainer2}
            style={{ translateY: translateBottom }}
          >
            <h1 className={styles.title}>I&apos;M</h1>
            <h1 className={styles.titleName}>MANU</h1>
            <div
              style={{
                width: 50,
                height: 50,
              }}
            >
              {/* eslint-disable-next-line */}
              <img
                className={styles.asterisk}
                src={asterisk.src}
                alt="asterisk"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
