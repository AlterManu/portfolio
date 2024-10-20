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
    <div className="w-screen h-screen">
      <div className="w-full flex justify-center items-center">
        <div className="w-4/5">
          <h3 className="p-10 text-2xl w-fit text-white">MY STACK</h3>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-4/5 flex justify-center flex-wrap gap-16">
          {stack.map((item) => (
            <Tech key={item.name} item={item} showSign={showSign} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {techName && (
          <motion.div
            className="fixed bottom-0 left-6"
            animate={{ y: "0%" }}
            initial={{ y: "100%" }}
            exit={{ y: "100%" }}
            transition={{
              ease: "backOut",
              duration: 0.6,
              type: "spring",
            }}
          >
            <div className=" bg-white px-4 py-2 rounded-t-xl">
              <h1 className=" text-black text-2xl">{techName}</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
