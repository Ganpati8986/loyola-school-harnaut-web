import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, BookOpen, Leaf, Users, Handshake, 
  Heart, TreePine, Camera, ShieldCheck, Stethoscope,
  FlaskConical, Beaker, Atom, Monitor, Tv,
  Calculator, Library, Video, Trophy, Users2, Bike,
  Droplets
} from 'lucide-react';

const amenities = [
  { icon: <GraduationCap size={32} />, label: 'Well Qualified Faculty', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { icon: <BookOpen size={32} />, label: 'Quality Education', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { icon: <Leaf size={32} />, label: 'Stress Free Education', color: 'text-green-600', bgColor: 'bg-green-50' },
  { icon: <Users size={32} />, label: 'Individual Attention', color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { icon: <Handshake size={32} />, label: 'Parent Teacher Interaction', color: 'text-amber-600', bgColor: 'bg-amber-50' },
  { icon: <TreePine size={32} />, label: 'Eco Friendly Campus & Playground', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  { icon: <Camera size={32} />, label: 'CCTV Camera Surveillance', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  { icon: <ShieldCheck size={32} />, label: 'Secure Campus', color: 'text-violet-600', bgColor: 'bg-violet-50' },
  { icon: <Stethoscope size={32} />, label: 'Medical Provision', color: 'text-red-600', bgColor: 'bg-red-50' },
  { icon: <FlaskConical size={32} />, label: 'Science & Maths Laboratories', color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
  { icon: <Monitor size={32} />, label: 'Computer Lab & Library', color: 'text-sky-600', bgColor: 'bg-sky-50' },
  { icon: <Tv size={32} />, label: 'AV & Smart Classrooms', color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { icon: <Users2 size={32} />, label: 'Eco, Media, Literary & Cultural Clubs', color: 'text-teal-600', bgColor: 'bg-teal-50' },
  { icon: <Bike size={32} />, label: 'Cycle Stand for Staff & Students', color: 'text-slate-600', bgColor: 'bg-slate-50' },
  { icon: <Droplets size={32} />, label: 'Purified Drinking Water', color: 'text-blue-400', bgColor: 'bg-blue-50' },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#002147] mb-4"
          >
            Our Amenities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg font-medium"
          >
            Nurturing student success with a strong foundation
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-[#FFD700] mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="relative group p-6 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center h-48 shadow-sm border border-transparent bg-white hover:bg-[#002147] hover:text-white hover:shadow-xl hover:border-[#002147]"
            >
              <div className={`mb-4 p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 ${item.bgColor} ${item.color} group-hover:bg-white/20 group-hover:text-white`}>
                {item.icon}
              </div>
              <h3 className="text-[13px] font-bold leading-tight px-2 transition-colors duration-300 text-[#002147] group-hover:text-white">
                {item.label}
              </h3>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
