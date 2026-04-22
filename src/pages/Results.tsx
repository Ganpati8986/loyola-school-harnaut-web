import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Trophy, Search, Filter, Download, CheckCircle, Star, Users, Calendar } from 'lucide-react';

const Results = () => {
  const results = [
    // { title: 'Annual Examination 2025-26', date: 'March 2026', type: 'Annual', color: 'bg-blue-100 text-blue-600' },
    // { title: 'Half Yearly Examination 2025-26', date: 'October 2025', type: 'Term', color: 'bg-green-100 text-green-600' },
    // { title: 'Unit Test III 2025-26', date: 'January 2026', type: 'Unit Test', color: 'bg-orange-100 text-orange-600' },
    // { title: 'Unit Test II 2025-26', date: 'August 2025', type: 'Unit Test', color: 'bg-orange-100 text-orange-600' },
    // { title: 'Unit Test I 2025-26', date: 'May 2025', type: 'Unit Test', color: 'bg-orange-100 text-orange-600' }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Academic Results" 
        description="Check the latest examination results of Loyola School Harnaut. Access annual, half-yearly, and unit test results for all classes."
        keywords="Loyola School Academic Results, School exam results Harnaut, Student performance Nalanda, School results Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Academic Results</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access and download the latest examination results and performance reports for all classes and sessions.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
                  <Trophy className="text-[#FFD700]" size={28} />
                  Latest Results
                </h2>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search result..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-10 py-2 text-sm focus:outline-none focus:border-[#003366]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {results.map((res, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group"
                  >
                    <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center text-xl font-bold group-hover:bg-[#FFD700] group-hover:text-[#003366] transition-colors">
                      {res.date.split(' ')[0][0]}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">{res.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                          <Calendar size={12} />
                          {res.date}
                        </span>
                        <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${res.color}`}>
                          {res.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2">
                      <Download size={16} />
                      DOWNLOAD
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#003366] mb-8 flex items-center gap-3">
                <Star className="text-[#FFD700]" size={28} />
                Toppers List 2025-26
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  // { name: 'Rahul Kumar', class: 'Class X', score: '98.5%', rank: '1st' },
                  // { name: 'Sneha Singh', class: 'Class X', score: '97.2%', rank: '2nd' },
                  // { name: 'Amit Raj', class: 'Class IX', score: '96.8%', rank: '1st' },
                  // { name: 'Priya Kumari', class: 'Class IX', score: '95.5%', rank: '2nd' }
                ].map((topper, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#003366] font-bold shadow-sm">
                      {topper.rank}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#003366]">{topper.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{topper.class} • Score: {topper.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Check Result Online</h3>
              <p className="text-gray-300 mb-8 text-sm relative z-10">
                Enter student ID and date of birth to view individual performance report.
              </p>
              <form className="space-y-4 relative z-10">
                <input type="text" placeholder="Student ID" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700]" />
                <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700]" />
                <button className="w-full bg-[#FFD700] text-[#003366] font-bold py-4 rounded-xl hover:bg-white transition-colors">
                  VIEW RESULT
                </button>
              </form>
            </div> */}

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                Grading System
              </h3>
              <ul className="space-y-3">
                {[
                  { grade: 'A1', range: '91 - 100', desc: 'Outstanding' },
                  { grade: 'A2', range: '81 - 90', desc: 'Excellent' },
                  { grade: 'B1', range: '71 - 80', desc: 'Very Good' },
                  { grade: 'B2', range: '61 - 70', desc: 'Good' },
                  { grade: 'C1', range: '51 - 60', desc: 'Average' },
                  { grade: 'D', range: '33 - 40', desc: 'Pass' }
                ].map((g, i) => (
                  <li key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl text-xs font-bold">
                    <span className="text-[#003366]">{g.grade}</span>
                    <span className="text-gray-400">{g.range}</span>
                    <span className="text-gray-600">{g.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Results;
