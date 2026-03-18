import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Trophy, Star, Users, Briefcase, MapPin, Clock, Send, Upload, CheckCircle2, AlertCircle, X, ChevronRight, GraduationCap, Medal, Target } from 'lucide-react';
import SEO from '../components/SEO';

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const match = value.match(/(\d+)(.*)/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = targetNumber / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const academicAchievements = [
  {
    year: "2024",
    title: "100% Board Pass Rate",
    description: "Achieved a 100% pass rate in the ICSE (Class X) board examinations for the 10th consecutive year.",
    icon: <GraduationCap className="text-[#FFD700]" size={32} />
  },
  {
    year: "2023",
    title: "District Topper",
    description: "A student from Loyola School Harnaut secured the 1st rank in the Nalanda district for the ICSE board exams.",
    icon: <Medal className="text-[#CC0000]" size={32} />
  },
  {
    year: "2022",
    title: "Best Science Project",
    description: "Won the 'Best Innovative Project' award at the State Level Science Exhibition held in Patna.",
    icon: <Target className="text-[#003366]" size={32} />
  }
];

const sportsAchievements = [
  {
    title: "Inter-School Cricket Champions",
    description: "Our senior cricket team won the district-level inter-school cricket tournament held at Bihar Sharif.",
    image: "https://picsum.photos/seed/school-cricket/800/600",
    category: "Sports"
  },
  {
    title: "State Level Athletics",
    description: "Three students won gold medals in the 100m, 200m, and 400m sprints at the State Athletics Meet.",
    image: "https://picsum.photos/seed/school-athletics/800/600",
    category: "Sports"
  },
  {
    title: "Basketball Runners-up",
    description: "Our girls' basketball team secured the 2nd position in the regional basketball championship.",
    image: "https://picsum.photos/seed/school-basketball/800/600",
    category: "Sports"
  }
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Achievements - Loyola School Harnaut" 
        description="Explore the academic, sports, and cultural achievements of Loyola School Harnaut. We take pride in our students' excellence and dedication."
        keywords="Loyola School Achievements, School awards Harnaut, Student success Nalanda, School excellence Bihar"
      />

      {/* Hero Section */}
      <div className="relative bg-[#002147] pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-[#FFD700] text-[#002147] text-xs font-bold tracking-widest uppercase rounded-full mb-6"
          >
            Excellence in Action
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our <span className="text-[#FFD700]">Achievements</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Celebrating the hard work, dedication, and success of our students and faculty. 
            Every achievement is a step towards our goal of holistic excellence.
          </motion.p>
        </div>
      </div>

      {/* Academic Achievements Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 group hover:bg-[#002147] transition-colors duration-500"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-white/10 transition-colors">
                {achievement.icon}
              </div>
              <div className="text-[#CC0000] font-bold text-sm uppercase tracking-widest mb-4 group-hover:text-[#FFD700]">{achievement.year}</div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-white transition-colors">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sports Achievements Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003366] mb-4">Sports & Athletics</h2>
              <p className="text-gray-500 text-lg">Our students consistently excel in various sports at district, state, and national levels.</p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-1 bg-[#FFD700] rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {sportsAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2.5rem] shadow-xl bg-white"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-[#CC0000]/10 text-[#CC0000] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                    {achievement.category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#CC0000] transition-colors">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#002147] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "District Ranks", value: "15+", icon: <Medal size={32} /> },
              { label: "Sports Trophies", value: "50+", icon: <Trophy size={32} /> },
              { label: "Science Awards", value: "25+", icon: <Target size={32} /> },
              { label: "Years of Excellence", value: "19+", icon: <Award size={32} /> }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-[#FFD700] shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
