"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Tech({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const show = () => setIsHovered(true);
  const hide = () => setIsHovered(false);

  return (
    <div className="w-[200px] h-[200px] relative">
      <motion.div
        className={item.class}
        animate={{
          opacity: isHovered ? 1 : 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
      />
      <div className="w-full h-full overflow-hidden rounded-3xl border-[rgba(255,255,255,0.1)] border-[1px]">
        <motion.img
          src={item.src}
          alt={item.name}
          className="w-full h-full object-cover rounded-3xl"
          initial={{ scale: 1, filter: "grayscale(1)" }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeInOut" },
            filter: "grayscale(0)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={show}
          onMouseLeave={hide}
        />
      </div>
      {/* <div className="absolute bottom-4 w-full text-center">
          <motion.h1
            className="text-white text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ ease: "backOut", duration: 0.5 }}
          >
            MongoDB
          </motion.h1>
        </div> */}
    </div>
  );
}
