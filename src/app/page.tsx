"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import StyleButton from "@/components/style-button";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center h-screen px-4 py-24"
      >
        <div className="h-[120px] w-full py-12 mt-12 sm:mt-9"></div>
        <TypewriterEffect
          words={words}
          className="text-3xl md:text-5xl font-bold text-center font-pblack"
          cursorClassName="bg-indigo-700"
        />

        <p className="lowercase text-base font-normal text-center dark:text-gray-400 text-slate-800/90  leading-2">
          I am a dedicated full-stack developer specializing in Next.js and the
          MERN stack. I create modern, responsive web applications using
          Tailwind CSS and Shadcn for visually stunning, user-friendly
          interfaces. Proficient with Redux Toolkit, I ensure seamless state
          management. On the backend, I excel with MongoDB and Express, building
          scalable, robust solutions. Adhering to best practices, I continuously
          seek innovative approaches to enhance user experiences. My
          comprehensive skills and dedication make me a valuable asset in
          full-stack development
        </p>

        <div className="flex justify-center max-w-screen-sm w-full mt-9">
          <StyleButton
            text="Read About Me"
            icon={<ArrowRight size={20} className="ml-2" />}
            onPress={() => {}}
          />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const words = [
  {
    text: "My",
    className: "text-[.8em] dark:text-gray-200/70",
  },
  {
    text: "Self",
    className: "text-[.8em]  dark:text-gray-200/70",
  },
  {
    text: "Karan",
    className: "text-indigo-500 dark:text-indigo-600 text-[1.6em] font-pblack",
  },
  {
    text: "Kumar",
    className: "text-indigo-500 dark:text-indigo-600 text-[1.6em] font-pblack",
  },
];

export default Home;
