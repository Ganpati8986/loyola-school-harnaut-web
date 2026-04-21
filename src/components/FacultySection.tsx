import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

import fac1 from "../assets/new (9)c.jpeg";
import fac2 from "../assets/new (3)c.jpeg";
import fac3 from "../assets/new (4)c.jpeg";
import fac4 from "../assets/new (2)c.jpeg";

import ProtectedImage from "./ProtectedImage";

const FacultySection: React.FC = () => {
  const states = [
    "West Bengal",
    "Assam",
    "Bihar",
    "Jharkhand",
    "Odisha",
    "Kerala",
  ];

  const images = [fac1, fac2, fac3, fac4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-2 sm:mb-8">
                <div className="p-3 bg-amber-50 rounded-2xl">
                  <Users className="text-amber-500" size={32} />
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#002147]">
                  Diverse Faculty
                </h2>
              </div>

              <div className="bg-slate-50 rounded-[40px] p-5  sm:p-10 md:p-16">
                <p className="text-slate-500 text-lg md:text-xl mb-5 sm:mb-12">
                  Our well-qualified faculty members bring diverse perspectives
                  and expertise from various states across India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {states.map((state) => (
                    <div key={state} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>

                      <span className="text-lg sm:text-xl font-bold text-[#002147]">
                        {state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE IMAGE CAROUSEL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className=""
            >
              {/* IMAGE BOX */}
              <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <ProtectedImage
                      src={images[currentImage]}
                      alt="Faculty"
                      watermark=""
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 to-transparent pointer-events-none"></div>
              </div>

              {/* INDICATORS */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImage
                        ? "w-8 bg-amber-400"
                        : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
