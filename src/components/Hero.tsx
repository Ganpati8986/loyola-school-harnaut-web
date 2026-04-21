import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProtectedImage from "./ProtectedImage";

import crousal from "../assets/img1.jpeg";
import crousal1 from "../assets/new (1).jpeg";
import crousal2 from "../assets/img3c.jpeg";

const slides = [
  {
    image: crousal,
    title: "Welcome to Loyola School",
    subtitle: "Nurturing Minds, Building Character",
    motto: "TRUTH, LOVE AND SERVICE",
  },
  {
    image: crousal1,
    title: "Excellence in Education",
    subtitle: "Empowering the Leaders of Tomorrow",
    motto: "Diverse Learning",
  },
  {
    image: crousal2,
    title: "Holistic Development",
    subtitle: "Beyond Academics, Towards Life",
    motto: "Holistic Education",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [paused, setPaused] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Typing Effect
  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const text = slides[current].title;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, [current]);

  // Auto Slide
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative h-[25vh] md:h-[35vh] lg:h-[70vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ProtectedImage
              src={slides[current].image}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

          {/* CENTER CONTENT */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl">
              {/* Motto */}
              <motion.span
                key={slides[current].motto}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[#FFD700] tracking-[0.3em] text-xs md:text-sm mb-1"
              >
                {slides[current].motto}
              </motion.span>

              {/* Typing Title */}
              <h1 className="text-xl sm:text-4xl md:text-6xl font-bold text-white">
                {displayText}
                <span className="animate-pulse">|</span>
              </h1>

              {/* Subtitle Animation */}
              <motion.p
                key={slides[current].subtitle}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs md:text-lg text-gray-200 mb-6 max-w-xl"
              >
                {slides[current].subtitle}
              </motion.p>

              {/* Floating Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col justify-center items-center sm:flex-row gap-4"
              >
                <motion.button
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-[#FFD700] text-[#003366] px-4 py-1 text-[10px] sm:text-base rounded-full font-bold shadow-xl"
                >
                  ADMISSIONS OPEN
                </motion.button>

                <motion.button
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  className="border border-white px-2 w-fit sm:px-4 py-1 text-[9px] sm:text-base rounded-full text-white hover:bg-white hover:text-[#003366]"
                >
                  EXPLORE MORE
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-[#FFD700]"
        />
      </div>
    </section>
  );
};

export default Hero;
