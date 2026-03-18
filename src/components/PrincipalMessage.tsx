import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';
import { cn } from '../lib/utils';
import principal from '../assets/princ.jpeg';
import vice from '../assets/sister deepa.jpeg';
import ProtectedImage from './ProtectedImage';

const PrincipalMessage = () => {
  const [activeTab, setActiveTab] = useState<'principal' | 'vice-principal'>('principal');

  const content = {
    principal: {
      title: "Principal's Message",
      name: " Fr. Asit Lakra",
      role: "Principal, Loyola School Harnaut",
      image: principal,
      quote: "Welcome to Loyola School, Harnaut. Our mission is to provide an environment where every child can discover their potential and grow into a responsible, compassionate, and capable individual.",
      paragraphs: [
        "The purpose of the institution is to impart to its pupils a sound, moral, intellectual and physical education, to train them to be useful and loyal citizens of India and to help them to become agents of needed social change in the society.",
        "Realizing that education is an all-round development of pupil, the institution constantly endeavours to direct to this and special emphasis is given on Co-curricular activities, character formation, academic excellence and social responsibilities."
      ]
    },
    'vice-principal': {
      title: "Vice Principal's Message",
      name: "Sr. Dipa",
      role: "Vice Principal, Loyola School Harnaut",
      image: vice,
      quote: "At Loyola School, we are committed to fostering an atmosphere of discipline and academic rigor. Our goal is to empower students with the knowledge and values they need to succeed in a rapidly changing world.",
      paragraphs: [
        "We focus on creating a supportive community where every student feels valued and encouraged to excel. Our curriculum is designed to challenge students intellectually while also promoting social and emotional growth.",
        "Through a variety of co-curricular activities and leadership opportunities, we aim to develop well-rounded individuals who are ready to make a positive impact on society."
      ]
    }
  };

  const current = content[activeTab];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tab Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-16 space-x-4 md:space-x-8"
        >
          <button
            onClick={() => setActiveTab('principal')}
            className={cn(
              "text-sm md:text-xl font-bold uppercase tracking-widest transition-all duration-300 relative group",
              activeTab === 'principal' ? "text-[#003366]" : "text-gray-400 hover:text-gray-600"
            )}
          >
            Principal's Message
            <span className={cn(
              "absolute -bottom-2 left-0 w-full h-0.5 bg-[#FFD700] transition-transform origin-left duration-300",
              activeTab === 'principal' ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )} />
          </button>
          <span className="text-gray-300 text-2xl font-light">|</span>
          <button
            onClick={() => setActiveTab('vice-principal')}
            className={cn(
              "text-sm md:text-xl font-bold uppercase tracking-widest transition-all duration-300 relative group",
              activeTab === 'vice-principal' ? "text-[#003366]" : "text-gray-400 hover:text-gray-600"
            )}
          >
            Vice Principal's Message
            <span className={cn(
              "absolute -bottom-2 left-0 w-full h-0.5 bg-[#FFD700] transition-transform origin-left duration-300",
              activeTab === 'vice-principal' ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )} />
          </button>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            key={`${activeTab}-image`}
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full md:w-1/3 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <ProtectedImage watermark={''}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700] rounded-2xl -z-0" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-6 -left-6 w-32 h-32 bg-[#003366] rounded-2xl -z-0" 
            />
          </motion.div>

          <motion.div
            key={`${activeTab}-content`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Quote size={48} className="text-[#FFD700] mb-4" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-2">{current.title}</h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-1.5 bg-[#FFD700] rounded-full" 
              />
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg italic">
              <p>
                "{current.quote}"
              </p>
              {current.paragraphs.map((p, i) => (
                <motion.p 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                  className="not-italic text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <h4 className="text-xl font-bold text-[#003366]">{current.name}</h4>
              <p className="text-[#FFD700] font-semibold">{current.role}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
