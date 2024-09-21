"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import StyleButton from "@/components/style-button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


function Home() {

  const router = useRouter()

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
        className="relative flex flex-col gap-4 items-center justify-center h-full px-4 py-24  mt-20"
      >
        
        <TypewriterEffect
          words={words}
          className="text-2xl sm:text-5xl font-bold text-center font-pblack "
          cursorClassName="bg-indigo-700"
        />
        <p className="lowercase text-[15px] sm:text-base font-normal text-center dark:text-gray-400 text-slate-800/90  leading-normal">
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
        
        <StyleButton
            text="Read About Me"
            icon={<ArrowRight size={20} className="mx-auto" />}
            onPress={() => router.push("/about")}
          />
       

       
        
      </motion.div>
    </AuroraBackground>
  );
}

const words = [
  {
    text: "My",
    className: "text-[.8em]",
  },
  {
    text: "Self",
    className: "text-[.8em] ",
  },
  {
    text: "Karan",
    className: "text-indigo-500 dark:text-indigo-400 text-[1.6em] font-pblack",
  },
  {
    text: "Kumar",
    className: "text-indigo-500 dark:text-indigo-400 text-[1.6em] font-pblack",
  },
];

export default React.memo(Home);
