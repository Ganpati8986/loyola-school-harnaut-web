import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote, Award, ArrowRight, ArrowUp } from 'lucide-react';
import l1 from '../assets/prince2.jpeg';
import l2 from '../assets/ly_2.png';
import l3 from '../assets/ly_3.png';
import l4 from '../assets/ly4.png';

export const JUBILEE_MESSAGES = [
  {
    role: "Archbishop of Patna",
    name: "Archbishop Sebastian Kallupura",
    title: "The Symphony of Success",
    image: l3,
    message: "Situated among the beautiful hamlets of Bihar, Loyola School stands as a pride institution by forming hundreds of students with great successful careers. Success is not an instant product rather it is a series of struggles, hardships and achievements. The axiom of the school emblem 'Truth, love and service' resembles the true vision of this illustrious institution.",
    date: "Nov 03, 2024",
    color: "from-purple-900 to-indigo-900",
    accent: "text-purple-400"
  },
  {
    role: "Director - PACE",
    name: "Fr. James George",
    title: "Shaping Young Minds",
    image: l2,
    message: "My association with Loyola School, Harnaut is right from its cradle-days. It gives me immense joy to send this congratulatory note on the occasion of the School's Silver Jubilee. It is a celebration of twenty-five years of dedication, passion and commitment to shaping young minds.",
    date: "Jubilee Year",
    color: "from-blue-900 to-cyan-900",
    accent: "text-cyan-400"
  },
{
  role: "Former Principal",
  name: "Fr. Asit Lakra",
  title: "Message from the Former Principal",
  image: l1,
  message: "Ever since its inception, Loyola School has become the Temple of Learning, igniting young minds with the fire of truth, love and knowledge. As Nelson Mandela said, 'Education is the most powerful weapon which you can use to change the world.' We enable students for a better tomorrow, molding them for the service to self and society.",
  date: "",
  color: "from-emerald-900 to-teal-900",
  accent: "text-emerald-400"
},
  {
    role: "First Principal",
    name: "Sr. Annie",
    title: "Reflections on our Journey",
    image: l4,
    message: "As I reflect on Loyola school's journey, I am overwhelmed with immense pride. Twenty five years ago, we embarked on a dream to provide quality education rooted in faith, values and excellence. I cherish memories of our humble beginnings, when a small group of dedicated educators and I pioneered this mission.",
    date: "Founder",
    color: "from-rose-900 to-orange-900",
    accent: "text-rose-400"
  }
];

const LegacyPage: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="School Architecture"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-50"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20"
            >
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-white font-medium tracking-widest text-sm uppercase">Silver Jubilee 2000 - 2025</span>
            </motion.div>
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
            >
              Symphony of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Success</span>
            </motion.h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed"
            >
              A legacy built on Truth, Love, and Service. Celebrating twenty-five years of shaping young minds and building a better tomorrow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-24 relative z-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {JUBILEE_MESSAGES.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Connecting Line */}
                {idx !== JUBILEE_MESSAGES.length - 1 && (
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="absolute left-12 md:left-1/2 top-full h-12 w-px bg-slate-300 hidden md:block transform -translate-x-1/2 origin-top"
                  ></motion.div>
                )}

                <motion.div 
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[300px_1fr]">
                    
                    {/* Left Column - Profile */}
                    <div className={`bg-gradient-to-br ${msg.color} p-8 md:p-10 text-white flex flex-col items-center md:items-start justify-center text-center md:text-left relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -ml-10 -mb-10"></div>
                      
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-6 group-hover:scale-105 transition-transform duration-500">
                        <img src={msg.image} className="w-full h-full object-cover" alt={msg.name} referrerPolicy="no-referrer" />
                      </div>
                      
                      <span className={`text-xs font-bold uppercase tracking-widest ${msg.accent} mb-2`}>{msg.role}</span>
                      <h3 className="text-2xl font-bold leading-tight mb-2">{msg.name}</h3>
                      <span className="text-white/60 text-sm font-medium">{msg.date}</span>
                    </div>

                    {/* Right Column - Content */}
                    <div className="p-8 md:p-12 relative flex flex-col justify-center">
                      <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-50 opacity-50 -rotate-12" />
                      
                      <div className="relative z-10">
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 tracking-tight">
                          {msg.title}
                        </h4>
                        <p className="text-slate-600 text-lg leading-relaxed font-serif italic">
                          "{msg.message}"
                        </p>
                      </div>

                      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium uppercase tracking-wider">
                          <Award className="w-4 h-4" />
                          Certified Jubilee Message
                        </div>
                        <div className="font-serif text-3xl text-slate-300 italic opacity-50 select-none">
                          {msg.name.split(' ').pop()}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Continuing The Journey
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-xl text-slate-400 mb-10 font-light"
            >
              While we celebrate twenty-five years of history, our mission remains the same: 
              to ignite young minds with the fire of truth and love.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button 
                onClick={() => handleNavigate('/contact')}
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-2 group"
              >
                Join Our Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium tracking-wide transition-all flex items-center justify-center gap-2"
              >
                Back to Top
                <ArrowUp className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;
