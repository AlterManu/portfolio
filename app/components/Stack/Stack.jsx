"use client";

import { useState } from "react";
import { stack } from "./Stack-Helper";
import "./Stack.scss";
import Tech from "./Tech";
import { motion, AnimatePresence } from "framer-motion";

export default function Stack() {
  // * Hooks
  const [techName, setTechName] = useState();

  // * Methods
  const showSign = (name) => setTechName(name);

  return (
    <section className="w-screen flex justify-center">
      <div className="container flex flex-col justify-center items-center">
        {/* Title */}
        <div className="w-4/5 p-10">
          <h3 className="text-2xl">MY STACK</h3>
        </div>

        {/* Logos container */}
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-3 xl:grid-cols-5 gap-16">
            {stack.map((item) => (
              <Tech key={item.name} item={item} showSign={showSign} />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {techName && (
            <motion.div
              className="fixed bottom-4 left-6"
              animate={{ y: "0%" }}
              initial={{ y: "150%" }}
              exit={{ y: "150%" }}
              transition={{
                ease: "backOut",
                duration: 0.8,
                type: "spring",
              }}
            >
              <div className=" bg-white px-4 py-2 rounded-xl">
                <h1 className=" text-black text-2xl">
                  {techName.toLowerCase()}
                </h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
