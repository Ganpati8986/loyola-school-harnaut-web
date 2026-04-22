import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Music, Palette, Microscope, Users, Star, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import sports from "../assets/sports.jpeg";
import art from "../assets/art.jpeg";
import visual from "../assets/visual.jpeg";
import science from "../assets/visual.jpeg";

const activities = [
  {
    title: "Sports & Athletics",
    icon: <Trophy className="text-[#FFD700]" size={32} />,
    description: "Comprehensive sports program including Football, Cricket, Basketball, and Athletics to foster physical fitness and team spirit.",
    image: sports,
    features: ["Inter-school tournaments", "Professional coaching", "Annual Sports Day", "Modern sports complex"]
  },
  {
    title: "Performing Arts",
    icon: <Music className="text-[#CC0000]" size={32} />,
    description: "Nurturing creativity through Music, Dance, and Drama. Students explore their artistic potential and perform on various platforms.",
    image: art,
    features: ["Classical & Modern Dance", "Vocal & Instrumental Music", "Drama Workshops", "Annual Cultural Fest"]
  },
  {
    title: "Visual Arts",
    icon: <Palette className="text-[#003366]" size={32} />,
    description: "Encouraging self-expression through Painting, Sketching, Sculpture, and Craft. Our art studio is a hub of imagination.",
    image: visual,
    features: ["Art Exhibitions", "Pottery & Sculpture", "Graphic Design basics", "Community art projects"]
  },
  // {
  //   title: "Science & Innovation",
  //   icon: <Microscope className="text-emerald-600" size={32} />,
  //   description: "Promoting scientific temper through hands-on experiments, robotics, and participation in science fairs and olympiads.",
  //   image: science,
  //   features: ["Robotics Club", "Science Exhibitions", "Math Olympiads", "Environmental projects"]
  // }
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Co-Curricular - Loyola School Harnaut" 
        description="Explore the vibrant co-curricular activities at Loyola School Harnaut, from sports and arts to science and innovation."
        keywords="Loyola School Co-Curricular, School activities Harnaut, Student development Nalanda, School life Bihar"
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
            Beyond Academics
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Co-Curricular <span className="text-[#FFD700]">Activities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We believe in holistic development. Our diverse range of activities 
            ensures every student finds their passion and develops essential life skills
          </motion.p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 gap-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100`}
            >
              <div className="lg:w-1/2 relative h-80 lg:h-auto">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                <div className="absolute bottom-6 left-6 lg:hidden">
                  <h3 className="text-3xl font-bold text-white">{activity.title}</h3>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6 hidden lg:block">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    {activity.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-[#003366]">{activity.title}</h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activity.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activity.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* <div className="mt-10">
                  <button className="inline-flex items-center space-x-2 text-[#CC0000] font-bold hover:translate-x-2 transition-transform">
                    <span>Learn more about {activity.title}</span>
                    <ChevronRight size={20} />
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clubs Section */}
      {/* <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Student Clubs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Joining a club is the best way to meet like-minded peers and explore new interests.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Eco Warriors", members: "45+", icon: <Users size={24} /> },
              { name: "Debate Society", members: "30+", icon: <Star size={24} /> },
              { name: "Coding Club", members: "50+", icon: <Microscope size={24} /> },
              { name: "Literary Circle", members: "25+", icon: <Palette size={24} /> }
            ].map((club) => (
              <motion.div
                key={club.name}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center group"
              >
                <div className="w-14 h-14 bg-[#002147] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#CC0000] transition-colors">
                  {club.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">{club.name}</h4>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{club.members} Active Members</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Activities;
