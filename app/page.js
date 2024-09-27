"use client";

import About from "@/components/About/About";
import { useEffect, useState } from "react";
import useMousePosition from "./utils/hooks/useMousePosition";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  // * Hooks
  useMousePosition();

  const [yPosition, setYPosition] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 200 : 40;

  // * Methods
  const updatePosition = () => {
    const y =
      parseFloat(getComputedStyle(document.body).getPropertyValue("--y")) || 0;
    setYPosition(y);
    const x =
      parseFloat(getComputedStyle(document.body).getPropertyValue("--x")) || 0;
    setXPosition(x);
  };

  // * Life Cycle
  useEffect(() => {
    // Use MutationObserver to detect changes in the body style attribute
    const observer = new MutationObserver(updatePosition);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // Get --y initial value
    updatePosition();

    // Clean observer
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <About
        x={xPosition}
        y={yPosition}
        setIsHovered={setIsHovered}
        size={size}
      />
    </>
  );
}
