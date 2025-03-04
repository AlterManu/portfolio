"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import arrows from "../../assets/images/arrows-down.png";
import asterisk from "../../assets/images/asterisk.png";
import profile from "../../assets/images/profile.png";
import "./Hero.scss";

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
    <section
      className="w-full h-screen flex justify-center items-center relative mt-[5vh]"
      id="hero"
    >
      {/* Picture */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* eslint-disable-next-line */}
        <img src={profile.src} className="hero-image" alt="hero" />
      </div>

      {/* Title */}
      <div ref={container} className="hero-title-container">
        <motion.h1 className="hero-title" style={{ translateY: translateTop }}>
          HI THERE
        </motion.h1>
        <motion.div
          className="hero-name-container"
          style={{ translateY: translateBottom }}
        >
          <h1 className="hero-title">I&apos;M</h1>
          <h1 className="hero-title-name">MANU</h1>
          <div
            style={{
              width: 40,
              height: 40,
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

      {/* Based in */}
      <div className="absolute bottom-[10%] left-6">based in vigo, spain</div>

      {/* Scroll down */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-sm">scroll down</p>
        {/* eslint-disable-next-line */}
        <img src={arrows.src} className="w-6 animate-bounce" />
      </div>
    </section>
  );
}
