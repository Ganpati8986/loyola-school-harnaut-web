// import React, { useEffect, useRef } from 'react';
// import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
// import { GraduationCap, Users, BookOpen, Trophy } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const stats = [
//   { icon: <GraduationCap size={32} />, value: 1500, suffix: '+', label: 'Students' },
//   { icon: <Users size={32} />, value: 80, suffix: '+', label: 'Faculty' },
//   { icon: <BookOpen size={32} />, value: 40, suffix: '+', label: 'Classrooms' },
//   { icon: <Trophy size={32} />, value: 100, suffix: '+', label: 'Awards' },
// ];

// const Counter = ({ from = 0, to, duration = 2, suffix = '' }: { from?: number, to: number, duration?: number, suffix?: string }) => {
//   const count = useMotionValue(from);
//   const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, margin: "-50px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, to, { duration: duration, ease: "easeOut" });
//       return controls.stop;
//     } else {
//       count.set(from);
//     }
//   }, [count, from, to, duration, isInView]);

//   return <motion.span ref={ref}>{rounded}</motion.span>;
// };

// const AboutSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: false, margin: "-100px" }}
//             className="w-full md:w-1/2"
//           >
//             <h2 className="text-4xl font-bold text-[#003366] mb-4">Why Choose Loyola School?</h2>
//             <div className="w-20 h-1.5 bg-[#FFD700] rounded-full mb-8" />
//             <p className="text-gray-600 mb-6 leading-relaxed text-lg">
//               Loyola School, Harnaut, is a private school established by the Catholic Church,
//               Harnaut, which is a unit of Mokameh Parish Society, under the Archdiocese of Patna,
//               for the education of boys and girls up to the Senior Secondary level.
//             </p>
//             <ul className="space-y-4 mb-10">
//               {[
//                 'Modern Science & Computer Laboratories',
//                 'Smart Classrooms & Audio-Visual Learning',
//                 'Library & Digital Learning Resources',
//                 'CCTV Secured Campus',
//                 'Sports, Clubs & Co-curricular Activities',
//                 'Safe and Nurturing Environment',
//                 'Highly Qualified Faculty from Multiple States',
//                 'Extensive Sports and Co-curricular Activities',
//                 'Faculty from: West Bengal, Assam, Bihar, Jharkhand, Odisha, Kerala',
//               ].map((item, i) => (
//                 <motion.li
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 + 0.2 }}
//                   viewport={{ once: false }}
//                   className="group flex items-center space-x-3 text-gray-700 hover:text-[#003366] transition-colors duration-300 cursor-default"
//                 >
//                   <div className="w-2 h-2 bg-[#FFD700] rounded-full group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(255,215,0,0.8)] transition-all duration-300" />
//                   <span className="font-medium transform group-hover:translate-x-2 transition-transform duration-300">{item}</span>
//                 </motion.li>
//               ))}
//             </ul>
//             <button
//               onClick={() => navigate('/school-history')}
//               className="bg-[#003366] text-white px-10 py-4 rounded-full font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all shadow-lg"
//             >
//               DISCOVER OUR HISTORY
//             </button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, margin: "-100px" }}
//             className="w-full md:w-1/2 grid grid-cols-2 gap-6"
//           >
//             {stats.map((stat, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-50 p-8 rounded-3xl text-center hover:bg-[#003366] hover:text-white transition-all group shadow-sm hover:shadow-xl"
//               >
//                 <div className="text-[#FFD700] mb-4 flex justify-center group-hover:scale-110 transition-transform">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold mb-1">
//                   <Counter to={stat.value} suffix={stat.suffix} />
//                 </h3>
//                 <p className="text-sm font-semibold uppercase tracking-widest opacity-70">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "motion/react";
import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    icon: <GraduationCap size={32} />,
    value: 1500,
    suffix: "+",
    label: "Students",
  },
  { icon: <Users size={32} />, value: 80, suffix: "+", label: "Faculty" },
  { icon: <BookOpen size={32} />, value: 40, suffix: "+", label: "Classrooms" },
  { icon: <Trophy size={32} />, value: 100, suffix: "+", label: "Awards" },
];

const Counter = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    } else {
      count.set(from);
    }
  }, [count, from, to, duration, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#003366] mb-4">
              Why Choose Loyola School?
            </h2>
            <div className="w-20 h-1.5 bg-[#FFD700] rounded-full mb-8" />
            <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
              Loyola School, Harnaut, is a private school established by the
              Catholic Church, Harnaut, which is a unit of Mokameh Parish
              Society, under the Archdiocese of Patna, for the education of boys
              and girls up to the Senior Secondary level.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Catholic Tradition of Academic Excellence",
                "State-of-the-art Smart Classrooms",
                "Focus on Holistic Development",
                "Extensive Sports and Co-curricular Activities",
                "Safe and Nurturing Environment",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  viewport={{ once: false }}
                  className="group flex items-center space-x-3 text-gray-700 hover:text-[#003366] transition-colors duration-300 cursor-default"
                >
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(255,215,0,0.8)] transition-all duration-300" />
                  <span className="font-medium text-sm sm:text-lg transform group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/school-history")}
              className="bg-[#003366] text-white px-10 py-4 self-center rounded-full font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all shadow-lg"
            >
              DISCOVER OUR HISTORY
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="w-full md:w-1/2 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-3xl text-center hover:bg-[#003366] hover:text-white transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="text-[#FFD700] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-1">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest opacity-70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
