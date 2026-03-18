import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import crousal from '../assets/img1.jpeg';
import crousal1 from '../assets/img4 - Copy.jpeg';
import crousal2 from '../assets/img3.jpeg';
import ProtectedImage from './ProtectedImage';

const slides = [
  {
    image: crousal,
    title: 'Welcome to Loyola School',
    subtitle: 'Nurturing Minds, Building Character',
    motto: 'TRUTH, LOVE AND SERVICE',
  },
  {
    image: crousal1,
    title: 'Excellence in Education',
    subtitle: 'Empowering the Leaders of Tomorrow',
    motto: 'Diverse Learning',
  },
  {
    image: crousal2,
    title: 'Holistic Development',
    subtitle: 'Beyond Academics, Towards Life',
    motto: 'Holistic Education',
  },
];

const Hero = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <ProtectedImage watermark={""}
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#FFD700] font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
            >
              {slides[current].motto}
            </motion.span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-2xl font-light mb-8 max-w-2xl"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex space-x-4"
            >
              <button className="bg-[#FFD700] text-[#003366] px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full font-bold hover:bg-white transition-colors">
                ADMISSIONS OPEN
              </button>

              <button className="border-2 border-white text-white px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full font-bold hover:bg-white hover:text-[#003366] transition-colors">
                LEARN MORE
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-[#FFD700] w-8' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
