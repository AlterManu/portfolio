"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./Horizontal.scss";

export function Horizontal() {
  // * Hooks
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const xBlackDiv = useTransform(scrollYProgress, [0, 1], ["0", "-20vw"]);
  const xWhiteDiv = useTransform(scrollYProgress, [0, 1], ["0", "-100vw"]);
  const xWhiteText = useTransform(scrollYProgress, [0, 1], ["-40vw", "0vw"]);

  return (
    <section
      ref={container}
      className="h-[400vh] text-center mt-[10vh] relative"
      style={{ lineHeight: "normal" }}
    >
      <div className="h-screen w-[200vw] sticky top-0 flex">
        {/* Black section */}
        <motion.div
          style={{ x: xBlackDiv }}
          className="w-screen h-screen flex justify-center items-center"
        >
          <h1 className="text-[10rem] w-3/4 text-white">Frontend developer</h1>
        </motion.div>

        {/* White section */}
        <motion.div
          style={{ x: xWhiteDiv }}
          className="w-screen h-screen flex justify-center items-center overflow-hidden relative bg-white text-[transparent]"
        >
          <motion.div
            style={{ x: xWhiteText }}
            className="horizontal-bg flex justify-center items-center"
          >
            <h1 className="text-[10rem] w-3/4">Creative developer</h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
