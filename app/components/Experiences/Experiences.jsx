"use client";

import React from "react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import cap from "@/assets/images/logos/logo-capgemini.png";
import utn from "@/assets/images/logos/logo-utn.png";
import attlos from "@/assets/images/logos/logo-attlos.png";
import worksut from "@/assets/images/logos/logo-worksut.png";
import "./Experiences.scss";

export default function Experiences() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "0px 0px -100% 0px",
    once: true,
  });

  const jobsLeft = [
    {
      company: "Capgemini",
      logo: cap,
      title: "FRONTEND DEVELOPER",
      dateFrom: "12/2024",
      dateTo: "-",
      aurora: "cap-aurora",
      delay: 0,
    },
    {
      company: "Attlos",
      logo: attlos,
      title: "FRONTEND DEVELOPER",
      dateFrom: "05/2022",
      dateTo: "12/2022",
      aurora: "attlos-aurora",
      delay: 1,
    },
  ];

  const jobsRight = [
    {
      company: "UTN",
      logo: utn,
      title: "FRONTEND DEVELOPER",
      dateFrom: "02/2023",
      dateTo: "11/2023",
      aurora: "utn-aurora",
      delay: 0.5,
    },
    {
      company: "Worksut",
      logo: worksut,
      title: "FRONTEND DEVELOPER",
      dateFrom: "11/2021",
      dateTo: "04/2022",
      aurora: "worksut-aurora",
      delay: 1.5,
    },
  ];

  const variant = {
    hidden: { opacity: 0 },
    show: (custom) => ({
      opacity: isInView ? 1 : 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.5,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="pb-[20vh]"
      initial={{ backgroundColor: "#fff" }}
      animate={{
        backgroundColor: isInView ? "#0f0f0f" : "#fff",
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-4/5">
          <h3 className="p-10 text-2xl w-fit text-white">EXPERIENCE</h3>
        </div>
      </div>

      {/* COLS CONTAINER */}
      <div className="flex justify-center flex-wrap gap-40">
        {/* LEFT COL */}
        <div className="flex flex-col">
          {jobsLeft.map((job, i) => (
            <motion.div
              className={`experience-card ${i === 0 ? "mt-20" : "mt-[12rem]"}`}
              key={job.company}
              variants={variant}
              initial="hidden"
              animate="show"
              custom={job.delay}
            >
              {/* logo */}
              <div className="h-40 rounded-[40px] flex justify-center items-center">
                <div className={job.aurora} />
                {/* eslint-disable-next-line */}
                <img
                  src={job.logo.src}
                  alt={job.company}
                  className="w-16 object-contain"
                />
              </div>

              {/* title */}
              <div className="mt-4">
                <h3 className="text-center font-semibold text-3xl">
                  {job.company}
                </h3>
              </div>

              {/* info */}
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
          ))}
        </div>

        {/* RIGHT COL */}
        <div className="flex flex-col mt-[12rem]">
          {jobsRight.map((job) => (
            <motion.div
              className="experience-card mt-[12rem]"
              key={job.company}
              variants={variant}
              initial="hidden"
              animate="show"
              custom={job.delay}
            >
              {/* logo */}
              <div className="h-40 rounded-[40px] flex justify-center items-center">
                <div className={job.aurora} />
                {/* eslint-disable-next-line */}
                <img
                  src={job.logo.src}
                  alt={job.company}
                  className="w-16 object-contain"
                />
              </div>

              {/* title */}
              <div className="mt-4">
                <h3 className="text-center font-semibold text-3xl">
                  {job.company}
                </h3>
              </div>

              {/* info */}
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
          ))}
        </div>
      </div>
    </motion.section>
  );
}
