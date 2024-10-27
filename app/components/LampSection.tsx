"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { GradualSpacingDemo } from "./GradualText";
import { RainbowButtonDemo } from "./elements/RainbowButton";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: false }} // Triggers animation each time it scrolls into view
      >
        <div className="bg-white py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl">
          Revolutionize Your Business With
        </div>
        <GradualSpacingDemo />
        <div className="bg-gradient-to-br w-3/4 mx-auto from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl">
          Lead with confidence by transforming uncertainty into an advantage through laser-focused, Cen-Al-powered process optimization.
        </div>
<div className="flex w-full justify-center items-center mt-5"> 
        <RainbowButtonDemo /></div>
      </motion.h1>
    </LampContainer>
  );
}
