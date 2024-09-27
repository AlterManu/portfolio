"use client";
import React, { useRef } from "react";
import styles from "./Hero.scss";
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
      <section className="hero">
        <div className="hero-image-container">
          {/* eslint-disable-next-line */}
          <img src={profile.src} className="hero-image" alt="hero" />
        </div>
        <div ref={container} className="hero-title-container">
          <motion.h1
            className="hero-title"
            style={{ translateY: translateTop }}
          >
            HI THERE
          </motion.h1>
          <motion.div
            className="hero-title-container-2"
            style={{ translateY: translateBottom }}
          >
            <h1 className="hero-title">I&apos;M</h1>
            <h1 className="hero-title-name">MANU</h1>
            <div
              style={{
                width: 50,
                height: 50,
              }}
            >
              {/* eslint-disable-next-line */}
              <img
                className="hero-asterisk"
                src={asterisk.src}
                alt="hero-asterisk"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
