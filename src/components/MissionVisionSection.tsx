import React from 'react';
import { motion } from 'motion/react';

const MissionVisionSection: React.FC = () => {
  const items = [
    {
      id: '01',
      label: 'THE MOTTO',
      title: 'Holistic Education, Diverse Learning.',
      description: "Our commitment to all-round development ensures students are prepared for life's diverse challenges."
    },
    {
      id: '02',
      label: 'OUR VISION',
      title: 'Formation of Human persons committed to God and Country.',
      description: 'We strive to create an environment where every student can discover their potential.'
    },
    {
      id: '03',
      label: 'THE MISSION',
      title: 'Transforming lives through Character, Competence, and Compassion.',
      description: 'Passionately committed to liberate Harnaut and its surroundings through education.'
    }
  ];

  const tags = ['CHARACTER', 'COMPETENCE', 'CONSCIENCE', 'COMPASSION', 'COMMITMENT'];

  return (
    <section className="relative py-24 bg-[#002147] overflow-hidden">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <span className="text-4xl font-bold text-white/20 mb-6 block group-hover:text-white/40 transition-colors">
                {item.id}
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 mb-4 block">
                {item.label}
              </span>
              <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-6 py-2 rounded-full border border-white/20 text-[10px] font-bold tracking-widest text-white/80 hover:bg-white hover:text-[#002147] transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
