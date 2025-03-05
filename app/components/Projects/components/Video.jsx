"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function Video({ project }) {
  // * Hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // * Methods
  const play = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
    // videoRef.current.currentTime = 0;
  };

  return (
    <motion.div className="relative" onMouseEnter={play} onMouseLeave={pause}>
      <div className="absolute top-0 left-0">
        <motion.img
          className="w-full h-full object-contain"
          initial={{ scale: 1.2 }}
          animate={{ scale: isPlaying ? 1 : 1.2, opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          src={project.image}
          alt="pdm"
        />
      </div>
      <video ref={videoRef} loop width="100%" height="auto">
        <source src={project.video} type="video/mp4" />
        Your browser does not support the videos.
      </video>
    </motion.div>
  );
}
