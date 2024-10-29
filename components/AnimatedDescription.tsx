"use client";
import Logo from "@/public/logo.svg";
import { ProgrammingLanguages } from "@/content/tech";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "@/components/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DivBox } from "./div";
import { Github } from "@/content/ImageProvider";

const languages: Array<String> = ProgrammingLanguages.map(
  (array) => array.name
);

const AnimatedDescription = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <DivBox className="relative gap-4 py-16 z-20 items-center justify-center h-full text-center px-4">
      <DivBox className="justify-center items-center mb-4">
        <Image src={Logo} alt="" width={208} height={150} />
      </DivBox>
      <motion.div
        className="gap-3"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I&apos;m Runkang10
        </motion.h1>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A developer with knowledge of
        </motion.h1>
        <div className="relative flex justify-center items-center h-16">
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute leading-[120%] justify-center overflow-visible"
            >
              <motion.span
                className="text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#a7d0ff] to-[hsl(var(--primary))]"
                style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
              >
                {languages[index]}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex flex-row gap-4">
          <Link
            href="/about"
            className={cn(
              buttonVariants({
                variant: "default",
                className: "px-8 py-4 text-lg",
              })
            )}
          >
            About
          </Link>
          <Link
            href="https://github.com/Runkang10"
            className={cn(
              buttonVariants({
                variant: "secondary",
                className: "px-8 py-4 text-lg",
              })
            )}
            isExternal
            hideIcon
          >
            <Image src={Github} alt="" width={17.5} height={17.5} />
            Github
          </Link>
        </div>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "px-8 py-4 text-lg",
            })
          )}
        >
          Contact
        </Link>
      </motion.div>
    </DivBox>
  );
};

export { AnimatedDescription };
