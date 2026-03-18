import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { BookOpen, Download, FileText, Search, Filter, ChevronRight } from 'lucide-react';

const ClassSyllabus = () => {
  const classes = [
    { name: 'LKG', section: 'Primary', subjects: ['English', 'Maths', 'G.K.', 'Art'] },
    { name: 'UKG', section: 'Primary', subjects: ['English', 'Maths', 'Hindi', 'G.K.', 'Art'] },
    { name: 'Class I', section: 'Primary', subjects: ['English', 'Maths', 'Hindi', 'EVS', 'Computer', 'G.K.'] },
    { name: 'Class II', section: 'Primary', subjects: ['English', 'Maths', 'Hindi', 'EVS', 'Computer', 'G.K.'] },
    { name: 'Class III', section: 'Primary', subjects: ['English', 'Maths', 'Hindi', 'Science', 'S.St', 'Computer'] },
    { name: 'Class IV', section: 'Primary', subjects: ['English', 'Maths', 'Hindi', 'Science', 'S.St', 'Computer'] },
    { name: 'Class V', section: 'Primary', subjects: ['English', 'Maths', 'Hindi', 'Science', 'S.St', 'Computer'] },
    { name: 'Class VI', section: 'Middle', subjects: ['English', 'Maths', 'Hindi', 'Science', 'History', 'Geography', 'Computer'] },
    { name: 'Class VII', section: 'Middle', subjects: ['English', 'Maths', 'Hindi', 'Science', 'History', 'Geography', 'Computer'] },
    { name: 'Class VIII', section: 'Middle', subjects: ['English', 'Maths', 'Hindi', 'Science', 'History', 'Geography', 'Computer'] },
    { name: 'Class IX', section: 'Secondary', subjects: ['English', 'Maths', 'Hindi', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Computer'] },
    { name: 'Class X', section: 'Secondary', subjects: ['English', 'Maths', 'Hindi', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Computer'] }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Academic Curriculum" 
        description="Download the class-wise syllabus for Loyola School Harnaut. Detailed subject-wise curriculum for LKG to Class X."
        keywords="Loyola School Academic Curriculum, School curriculum Harnaut, Subject-wise syllabus Nalanda, School academic plan Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Academic Curriculum</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access and download the detailed subject-wise syllabus for each class to stay ahead in your academic journey.
          </p>
        </header>

        {/* Search and Filter */}
        {/* <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for a class or subject..." 
              className="w-full bg-white border border-gray-200 rounded-2xl px-12 py-4 focus:outline-none focus:border-[#003366] transition-all shadow-sm"
            />
          </div>
          <button className="bg-white border border-gray-200 rounded-2xl px-8 py-4 flex items-center gap-2 font-bold text-[#003366] hover:bg-gray-50 transition-all shadow-sm">
            <Filter size={20} />
            FILTER BY SECTION
          </button>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:bg-[#FFD700] group-hover:text-[#003366] transition-colors">
                  {cls.name.split(' ')[1] || cls.name}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{cls.section} Section</span>
              </div>
              
              <h3 className="text-xl font-bold text-[#003366] mb-4">{cls.name} Syllabus</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {cls.subjects.map((sub, j) => (
                  <span key={j} className="bg-gray-50 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full border border-gray-100 uppercase">
                    {sub}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button className="flex-grow bg-[#003366] text-white font-bold py-3 rounded-xl hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center justify-center gap-2 text-sm">
                  <Download size={16} />
                  DOWNLOAD
                </button>
                <button className="w-12 h-12 bg-gray-50 text-[#003366] rounded-xl flex items-center justify-center hover:bg-[#003366] hover:text-white transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText size={40} />
          </div>
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Need a Physical Copy?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Detailed syllabus booklets for each class are also available at the school office. Please visit the office during working hours to collect your copy.
          </p>
          <button className="bg-[#003366] text-white px-10 py-4 rounded-full font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all shadow-lg">
            CONTACT OFFICE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassSyllabus;
