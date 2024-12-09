"use client";

import { useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";

export default function About({ x, y }) {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 300 : 40;

  return (
    <section className="about-bg">
      <motion.div
        className="about-mask"
        animate={{ WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`, WebkitMaskSize: `${size}px` }} //prettier-ignore
        transition={{ ease: "backOut", duration: 0.3 }}
      >
        <div className="w-full flex justify-center items-center">
          <div className="w-4/5">
            <h3
              className="p-10 text-2xl w-fit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              ACERCA DE MI
            </h3>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-4/5">
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="p-10 text-6xl w-fit"
            >
              Apasionado por <br />
              desarrollar aplicaciones web <br />
              basadas en código limpio y escalable <br />
              priorizando en crear <br />
              increíbles experiencias de usuario. <br />
            </p>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-full flex flex-col justify-center items-center text-white cursor-default">
        <div className="w-full flex justify-center items-center">
          <div className="w-4/5">
            <h3 className="p-10 text-2xl w-fit">ABOUT ME</h3>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-4/5">
            <p className="p-10 text-6xl w-fit">
              Passionate about <br />
              developing web applications <br />
              based on clean and scalable code <br />
              focusing on creating <br />
              amazing user experiences. <br />
            </p>
          </div>
        </div>
      </div>

      <div className="about-bg2" />
      <div className="about-bg3" />
    </section>
  );
}
