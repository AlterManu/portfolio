"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function ExperienceCard({ job, className }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef);

  return (
    <motion.div
      className={className}
      key={job.company}
      animate={{
        opacity: isInView ? 1 : 0,
        transition: {
          duration: 1,
        },
      }}
      ref={cardRef}
    >
      {/* Logo */}
      <div className="h-40 rounded-[40px] flex justify-center items-center">
        <div className={job.aurora} />
        {/* eslint-disable-next-line */}
        <img
          src={job.logo.src}
          alt={job.company}
          className="w-16 object-contain"
        />
      </div>

      {/* Title */}
      <div className="mt-4">
        <h3 className="text-center font-semibold text-3xl">{job.company}</h3>
      </div>

      {/* Info */}
      <div className="mt-14 flex justify-between items-end">
        <div className="max-w-[60%]">
          <h3 className="text-[rgba(255,255,255,0.7)] font-semibold text-xl">
            {job.title}
          </h3>
        </div>
        <div>
          <h3 className="text-[rgba(255,255,255,0.5)] font-semibold text-xl">
            {job.dateFrom}
          </h3>
          <h3 className="text-[rgba(255,255,255,0.5)] font-semibold text-xl">
            {job.dateTo}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
