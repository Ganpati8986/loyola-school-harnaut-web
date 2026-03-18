// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Users } from 'lucide-react';
// import fac1 from '../assets/IMG_2309.JPG.jpeg';
// import fac2 from '../assets/IMG_2323.JPG.jpeg';
// import fac3 from '../assets/IMG_2361.JPG.jpeg';
// import fac4 from '../assets/IMG_2365.JPG.jpeg';
// import ProtectedImage from './ProtectedImage';

// const FacultySection: React.FC = () => {
//   const states = [
//     'West Bengal', 'Assam',
//     'Bihar', 'Jharkhand',
//     'Odisha', 'Kerala'
//   ];

//   const images = [
//     fac1,
//     fac2,
//     fac3,
//     fac4
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <div className="flex items-center gap-4 mb-8">
//                 <motion.div
//                   whileHover={{ rotate: 15, scale: 1.1 }}
//                   className="p-3 bg-amber-50 rounded-2xl"
//                 >
//                   <Users className="text-amber-500" size={32} />
//                 </motion.div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-[#002147] tracking-tight">
//                   Diverse Faculty
//                 </h2>
//               </div>

//               <div className="bg-slate-50 rounded-[40px] p-10 md:p-16 relative overflow-hidden group/card">
//                 {/* Subtle background animation on card hover */}
//                 <div className="absolute inset-0 bg-amber-400/0 group-hover/card:bg-amber-400/5 transition-colors duration-500" />

//                 <p className="relative z-10 text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
//                   Our well-qualified faculty members bring diverse perspectives and expertise from various states across India.
//                 </p>

//                 <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
//                   {states.map((state, index) => (
//                     <motion.div
//                       key={state}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ x: 10 }}
//                       className="flex items-center gap-3 group cursor-default"
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.5 }}
//                         className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
//                       />
//                       <span className="text-xl md:text-2xl font-bold text-[#002147] group-hover:text-amber-600 transition-colors duration-300">
//                         {state}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, x: 30 }}
//               whileInView={{ opacity: 1, scale: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="relative hidden lg:block"
//             >
//               <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative">

//                 <AnimatePresence mode="wait">

//                   <motion.div
//                     key={currentImage}
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 1, ease: "easeInOut" }}
//                     className="absolute inset-0 w-full h-1/2"
//                   >
//                     <ProtectedImage
//                       src={images[currentImage]}
//                       alt="Faculty"
//                       watermark=""
//                       className="w-full h-full object-cover"
//                       referrerPolicy="no-referrer"
//                     />
//                   </motion.div>

//                 </AnimatePresence>

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 to-transparent pointer-events-none" />

//               </div>

//               {/* Carousel Indicators */}
//               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                 {images.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentImage(idx)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'w-8 bg-amber-400' : 'bg-white/50 hover:bg-white'
//                       }`}
//                   />
//                 ))}
//               </div>

//               {/* Decorative elements */}
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   opacity: [0.1, 0.2, 0.1]
//                 }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl -z-10"
//               />
//               <motion.div
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.1, 0.15, 0.1]
//                 }}
//                 transition={{ duration: 6, repeat: Infinity, delay: 1 }}
//                 className="absolute -top-8 -left-8 w-64 h-64 bg-[#002147]/20 rounded-full blur-3xl -z-10"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FacultySection;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

import fac1 from "../assets/IMG_2309.jpeg";
import fac2 from "../assets/IMG_2323.jpeg";
import fac3 from "../assets/IMG_2361.jpeg";
import fac4 from "../assets/IMG_2365.jpeg";

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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-amber-50 rounded-2xl">
                  <Users className="text-amber-500" size={32} />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#002147]">
                  Diverse Faculty
                </h2>
              </div>

              <div className="bg-slate-50 rounded-[40px] p-10 md:p-16">

                <p className="text-slate-500 text-lg md:text-xl mb-12">
                  Our well-qualified faculty members bring diverse perspectives
                  and expertise from various states across India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                  {states.map((state) => (
                    <div
                      key={state}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>

                      <span className="text-xl font-bold text-[#002147]">
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
              className="relative hidden lg:block"
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
