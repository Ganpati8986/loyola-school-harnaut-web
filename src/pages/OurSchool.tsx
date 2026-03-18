import React from 'react';
import { motion } from 'motion/react';
import { Building, Users, Star, Award, CheckCircle2, MapPin, Clock, Send, Upload, X, ChevronRight, GraduationCap, Medal, Target, Shield, Eye, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const OurSchool = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Overview - Loyola School Harnaut" 
        description="Learn about Loyola School Harnaut, a premier educational institution in Nalanda, Bihar. Explore our mission, vision, and campus facilities."
        keywords="Loyola School Overview, School mission Harnaut, Loyola School vision Nalanda, School facilities Bihar"
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
            Welcome to Loyola
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            School <span className="text-[#FFD700]">Overview</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Loyola School, Harnaut, is a private school established by the Catholic Church, 
            Harnaut, which is a unit of Mokameh Parish Society, under the Archdiocese of Patna, 
            for the education of boys and girls up to the Senior Secondary level.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <div className="w-16 h-16 bg-[#CC0000]/10 text-[#CC0000] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold text-[#003366] mb-6">Our Purpose</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              The purpose of the institution is to impart to its pupils a sound, moral, 
              intellectual and physical education, to train them to be useful and loyal 
              citizens of India and to help them to become agents of needed social 
              change in the society.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <div className="w-16 h-16 bg-[#FFD700]/10 text-[#FFD700] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold text-[#003366] mb-6">Our Philosophy</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Realizing that education is an all-round development of pupil, the institution 
              constantly endeavours to direct to this and special emphasis is given on 
              Co-curricular activities, character formation, academic excellence and 
              social responsibilities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003366] mb-4">Our Motto</h2>
            <p className="text-[#CC0000] text-2xl font-bold uppercase tracking-widest">TRUTH, LOVE AND SERVICE</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", icon: <Shield size={32} />, color: "bg-blue-50 text-blue-600" },
              { title: "Excellence", icon: <Award size={32} />, color: "bg-amber-50 text-amber-600" },
              { title: "Compassion", icon: <Heart size={32} />, color: "bg-rose-50 text-rose-600" },
              { title: "Innovation", icon: <Target size={32} />, color: "bg-emerald-50 text-emerald-600" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#003366] mb-4">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Upholding the highest standards of {value.title.toLowerCase()} in every aspect of school life.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Info Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-[#003366] mb-8">Our Commitment</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  It is open to all without distinction of caste or creed. The school got affiliated to Central Board of Secondary Education in the year 2011 and follows C.B.S.E. syllabus. The medium of instruction is English.
                </p>
                <p>
                  Moral/ Value education, which is essential for character formation, is imparted to all pupils. Sanskrit is taught as a third language from class VI to VIII. Computer science, Drawing, Art & Craft, Health Education and Physical Education are integral parts of curriculum.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/school-commitment/800/600" 
                alt="Loyola School Commitment" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#FFD700] p-8 rounded-[2rem] shadow-xl hidden md:block">
                <p className="text-[#003366] font-bold text-xl">Affiliated to CBSE since 2011</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Campus Facilities Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003366] mb-8 leading-tight">
                Modern Campus <br />
                <span className="text-[#CC0000]">World-Class Facilities</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Smart Classrooms with Interactive Boards",
                  "Advanced Science & Computer Laboratories",
                  "Extensive Library with 10,000+ Books",
                  "Modern Sports Complex & Playground",
                  "Safe & Secure Transport Facility",
                  "Hygienic Cafeteria & Dining Hall"
                ].map((facility) => (
                  <div key={facility} className="flex items-center space-x-4 group">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{facility}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button className="px-10 py-4 bg-[#002147] text-white font-bold rounded-2xl hover:bg-[#CC0000] transition-all duration-300 shadow-xl flex items-center space-x-3">
                  <span>Take a Virtual Tour</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/school-campus-1/400/600" alt="Campus" className="w-full h-80 object-cover rounded-[2rem] shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/school-campus-2/400/400" alt="Campus" className="w-full h-48 object-cover rounded-[2rem] shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/school-campus-3/400/400" alt="Campus" className="w-full h-48 object-cover rounded-[2rem] shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/school-campus-4/400/600" alt="Campus" className="w-full h-80 object-cover rounded-[2rem] shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSchool;
