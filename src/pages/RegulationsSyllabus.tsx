import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { FileText, Download, BookOpen, Scale, ShieldCheck, Info } from 'lucide-react';

const RegulationsSyllabus = () => {
  const sections = [
    {
      title: 'School Regulations',
      desc: 'General rules and regulations for students and parents to ensure a disciplined environment.',
      icon: <Scale className="text-blue-600" size={32} />,
      items: [
        'Punctuality and Regularity',
        'Uniform and Appearance',
        'Code of Conduct',
        'Leave and Absence Policy',
        'Examination and Promotion Rules'
      ]
    },
    {
      title: 'Academic Syllabus',
      desc: 'Detailed class-wise syllabus and curriculum structure for the current academic session.',
      icon: <BookOpen className="text-green-600" size={32} />,
      items: [
        'Primary Section (LKG - V)',
        'Middle Section (VI - VIII)',
        'Secondary Section (IX - X)',
        'Assessment Pattern',
        'Subject Combinations'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Regulations and Syllabus" 
        description="Official school regulations and academic syllabus for Loyola School Harnaut. Stay informed about our policies and curriculum."
        keywords="Loyola School Syllabus, School regulations Harnaut, Academic policy Nalanda, School curriculum Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Regulations & Syllabus</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our guidelines and curriculum are designed to foster a structured learning environment and academic excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-6">{section.icon}</div>
              <h2 className="text-3xl font-bold text-[#003366] mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{section.desc}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl text-[#003366] font-medium border border-gray-100">
                    <ShieldCheck size={18} className="text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#003366] text-white font-bold py-4 rounded-xl hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center justify-center gap-2">
                <Download size={20} />
                DOWNLOAD PDF
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-[#003366] text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Info className="text-[#FFD700]" size={32} />
                Important Note
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The school reserves the right to modify the syllabus or regulations as per the guidelines of the CISCE board or internal administrative requirements. Parents will be notified of any major changes via the school app or notice board.
              </p>
            </div>
            <button className="bg-white text-[#003366] px-10 py-4 rounded-full font-bold hover:bg-[#FFD700] transition-all whitespace-nowrap">
              CONTACT OFFICE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationsSyllabus;
