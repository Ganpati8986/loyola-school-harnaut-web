import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Monitor, BookOpen, Video, FileText, CheckCircle, ArrowRight, Play, Star } from 'lucide-react';

const OnlineLearning = () => {
  const platforms = [
    {
      title: 'Virtual Classrooms',
      desc: 'Interactive live sessions with our faculty members using advanced video conferencing tools.',
      icon: <Video className="text-blue-600" size={32} />,
      features: ['Live Interaction', 'Screen Sharing', 'Recorded Sessions', 'Real-time Q&A']
    },
    {
      title: 'Digital Library',
      desc: 'Access thousands of e-books, research papers, and educational videos from our curated repository.',
      icon: <BookOpen className="text-green-600" size={32} />,
      features: ['24/7 Access', 'Multi-device Support', 'Subject-wise Categorization', 'Offline Reading']
    },
    {
      title: 'LMS Portal',
      desc: 'Manage assignments, quizzes, and track academic progress through our Learning Management System.',
      icon: <Monitor className="text-orange-600" size={32} />,
      features: ['Assignment Submission', 'Online Quizzes', 'Progress Tracking', 'Parent Dashboard']
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="E-Learning Portal" 
        description="Explore the digital learning initiatives of Loyola School Harnaut. Access virtual classrooms, digital library, and LMS portal for a seamless learning experience."
        keywords="Loyola School E-Learning Portal, Virtual classrooms Harnaut, Digital education Nalanda, School LMS Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">E-Learning Portal</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Embracing technology to provide a flexible and interactive learning experience for our students, anywhere and anytime.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {platforms.map((platform, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{platform.icon}</div>
              <h2 className="text-2xl font-bold text-[#003366] mb-4">{platform.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">{platform.desc}</p>
              
              <ul className="space-y-3 mb-10 flex-grow">
                {platform.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-[#003366] font-medium text-xs">
                    <CheckCircle size={14} className="text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#003366] text-white font-bold py-4 rounded-xl hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center justify-center gap-2">
                ACCESS NOW
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#003366] text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Star className="text-[#FFD700]" size={32} />
                Featured Course: Digital Citizenship
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Learn how to navigate the digital world safely and responsibly. This course is mandatory for all students from Class VI onwards to ensure a safe online learning environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FFD700] text-[#003366] px-10 py-4 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2">
                  <Play size={20} fill="currentColor" />
                  WATCH INTRO
                </button>
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  COURSE DETAILS
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/3 aspect-video bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 relative group cursor-pointer overflow-hidden">
              <img src="https://picsum.photos/seed/online/800/450" alt="E-Learning Portal" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FFD700] text-[#003366] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLearning;
